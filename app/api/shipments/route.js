import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const shipments = await prisma.shipment.findMany({
      include: {
        originPort: true,
        destPort: true,
        updates: {
          orderBy: {
            date: 'desc'
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
    
    return NextResponse.json(shipments);
  } catch (error) {
    console.error("Error fetching shipments:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || session.user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const {
      trackingNumber,
      origin,
      originPortId,
      destination,
      destPortId,
      departureDate,
      arrivalDate,
      containerNumber,
      status = "DEPARTED_PORT"
    } = body;

    // Validate required fields
    if (!trackingNumber || !origin || !originPortId || !destination || !destPortId || !departureDate || !arrivalDate || !containerNumber) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate ports exist
    const [originPort, destPort] = await Promise.all([
      prisma.port.findUnique({ where: { id: originPortId } }),
      prisma.port.findUnique({ where: { id: destPortId } })
    ]);

    if (!originPort || !destPort) {
      return NextResponse.json(
        { error: "Invalid port selection" },
        { status: 400 }
      );
    }

    // Create shipment
    const shipment = await prisma.shipment.create({
      data: {
        trackingNumber,
        origin,
        originPortId,
        destination,
        destPortId,
        departureDate: new Date(departureDate),
        arrivalDate: new Date(arrivalDate),
        containerNumber,
        status,
        route: [
          originPort.position,
          destPort.position
        ]
      },
      include: {
        originPort: true,
        destPort: true,
        updates: true
      }
    });

    // Create initial status update
    await prisma.update.create({
      data: {
        status: "DEPARTED_PORT",
        location: origin,
        description: `Shipment departed from ${origin}`,
        shipmentId: shipment.id
      }
    });

    return NextResponse.json(shipment, { status: 201 });
  } catch (error) {
    console.error("Error creating shipment:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}