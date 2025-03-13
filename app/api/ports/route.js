import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const ports = await prisma.port.findMany({
      orderBy: {
        name: 'asc'
      }
    });
    
    return NextResponse.json(ports);
  } catch (error) {
    console.error("Error fetching ports:", error);
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
    const { name, country, position } = body;

    const port = await prisma.port.create({
      data: {
        name,
        country,
        position
      }
    });

    return NextResponse.json(port, { status: 201 });
  } catch (error) {
    console.error("Error creating port:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}