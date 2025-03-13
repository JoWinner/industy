import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../auth/[...nextauth]/route";

const prisma = new PrismaClient();

export async function POST(req, { params }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { id } = params;
    const { status, location, country, description, portId } = await req.json();

    // Validate port exists
    const port = await prisma.port.findUnique({
      where: { id: portId }
    });

    if (!port) {
      return NextResponse.json(
        { error: "Invalid port selection" },
        { status: 400 }
      );
    }

    // Create status update
    const update = await prisma.update.create({
      data: {
        status,
        location,
        description,
        shipmentId: id
      }
    });

    // Update shipment status and current location
    await prisma.shipment.update({
      where: { id },
      data: { 
        status,
        currentLocation: `${location}, ${country}`
      }
    });

    // Get updated shipment with all related data
    const updatedShipment = await prisma.shipment.findUnique({
      where: { id },
      include: {
        originPort: true,
        destPort: true,
        updates: {
          orderBy: {
            date: 'desc'
          }
        }
      }
    });

    return NextResponse.json({
      update,
      shipment: updatedShipment
    });
  } catch (error) {
    console.error("Error updating shipment status:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}