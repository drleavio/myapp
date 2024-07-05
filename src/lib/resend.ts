import { Resend } from "resend";

export const resend = new Resend(process.env.EMAIL_SEND_API_KEY);
