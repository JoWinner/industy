import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req, { params }) {
  try {
    const { number } = params;

    const shipment = await prisma.shipment.findUnique({
      where: {
        trackingNumber: number
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

    if (!shipment) {
      return NextResponse.json(
        { error: "Shipment not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(shipment);
  } catch (error) {
    console.error("Error fetching shipment:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}