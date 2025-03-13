import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import crypto from "crypto";
import { resend } from "@/lib/email";
import { ResetPasswordEmail } from "@/emails/reset-password-email";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { email } = await req.json();

    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    // Generate reset token
    const resetPasswordToken = crypto.randomBytes(32).toString("base64url");
    const today = new Date();
    const resetPasswordTokenExpiry = new Date(today.setDate(today.getDate() + 1)); // 24 hours

    // Save reset token
    await prisma.user.update({
      where: { email },
      data: {
        resetPasswordToken,
        resetPasswordTokenExpiry
      }
    });

    // Send email
    const emailSent = await resend.emails.send({
      from: "GreenRoots Trading <notifications@greenroots.com>",
      to: [email],
      subject: "Reset your password",
      react: ResetPasswordEmail({
        email,
        resetPasswordToken,
      })
    });

    if (!emailSent) {
      throw new Error("Failed to send email");
    }

    return NextResponse.json(
      { message: "Password reset email sent" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Reset password error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}