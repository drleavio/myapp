import { resend } from "../lib/resend";
import verificationEmails from "../../emails/verificationEmails";
import { ApiResponse } from "@/app/types/ApiResponse";
import { string } from "zod";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifycode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "verification email",
      react: verificationEmails({ username, otp: verifycode }),
    });
    return {
      success: true,
      message: "email send successfully",
    };
  } catch (error) {
    console.log("erroe in sending verification email", error);
    return {
      success: false,
      message: "error in sending verification email",
    };
  }
}
