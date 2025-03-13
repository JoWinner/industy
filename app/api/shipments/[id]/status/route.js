import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../auth/[...nextauth]/route";

const prisma = new PrismaClient();

const STATUS_DESCRIPTIONS = {
  DEPARTED_PORT: "Shipment has departed from port",
  CUSTOMS_CLEARANCE: "Shipment is undergoing customs clearance",
  ARRIVED_PORT: "Shipment has arrived at port",
  PICKED_UP: "Shipment has been picked up"
};

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
    const { status, location, description } = await req.json();

    // Validate status
    if (!Object.keys(STATUS_DESCRIPTIONS).includes(status)) {
      return NextResponse.json(
        { error: "Invalid status" },
        { status: 400 }
      );
    }

    // Create status update
    const update = await prisma.update.create({
      data: {
        status,
        location,
        description: description || STATUS_DESCRIPTIONS[status],
        shipmentId: id
      }
    });

    // Update shipment status
    await prisma.shipment.update({
      where: { id },
      data: { status }
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