import { z } from "zod";

export const signUpSchema = z.object({
  username: z
    .string()
    .min(3, "username must be of minimum 3 characters")
    .max(20, "username must not be more then 20 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "username must not include a special character"),
  email: z.string().email({ message: "please provide a valid password" }),
  password: z.string().min(8, "password must be of minimum 8 characters"),
});
