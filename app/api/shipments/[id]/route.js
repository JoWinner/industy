import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";

const prisma = new PrismaClient();

export async function PUT(req, { params }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { id } = params;
    const body = await req.json();

    // Extract only the fields that can be updated
    const {
      trackingNumber,
      status,
      origin,
      destination,
      departureDate,
      arrivalDate,
      containerNumber,
      route
    } = body;

    const shipment = await prisma.shipment.update({
      where: { id },
      data: {
        trackingNumber,
        status,
        origin,
        destination,
        departureDate: new Date(departureDate),
        arrivalDate: new Date(arrivalDate),
        containerNumber,
        route
      },
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

    return NextResponse.json(shipment);
  } catch (error) {
    console.error("Error updating shipment:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { id } = params;

    await prisma.shipment.delete({
      where: { id }
    });

    return NextResponse.json({ message: "Shipment deleted successfully" });
  } catch (error) {
    console.error("Error deleting shipment:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}