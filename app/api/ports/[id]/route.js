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
    const { name, country, position } = body;

    const port = await prisma.port.update({
      where: { id },
      data: {
        name,
        country,
        position
      }
    });

    return NextResponse.json(port);
  } catch (error) {
    console.error("Error updating port:", error);
    return NextResponse.json(
      { error: "Internal server error" },
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

    // Check if port is being used by any shipments
    const shipments = await prisma.shipment.findMany({
      where: {
        OR: [
          { originPortId: id },
          { destPortId: id }
        ]
      }
    });

    if (shipments.length > 0) {
      return NextResponse.json(
        { error: "Cannot delete port as it is being used by existing shipments" },
        { status: 400 }
      );
    }

    await prisma.port.delete({
      where: { id }
    });

    return NextResponse.json({ message: "Port deleted successfully" });
  } catch (error) {
    console.error("Error deleting port:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}