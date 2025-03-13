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

    // Validate ports exist
    if (body.originPortId || body.destPortId) {
      const [originPort, destPort] = await Promise.all([
        body.originPortId ? prisma.port.findUnique({ where: { id: body.originPortId } }) : null,
        body.destPortId ? prisma.port.findUnique({ where: { id: body.destPortId } }) : null
      ]);

      if ((body.originPortId && !originPort) || (body.destPortId && !destPort)) {
        return NextResponse.json(
          { error: "Invalid port selection" },
          { status: 400 }
        );
      }
    }

    const shipment = await prisma.shipment.update({
      where: { id },
      data: {
        ...body,
        departureDate: body.departureDate ? new Date(body.departureDate) : undefined,
        arrivalDate: body.arrivalDate ? new Date(body.arrivalDate) : undefined,
        route: body.route || undefined
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