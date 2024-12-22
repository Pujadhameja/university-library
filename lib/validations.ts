import { z } from "zod";

export const signUpSchema = z.object({
  fullname: z.string().min(3),
  email: z.string().email(),
  universityId: z.coerce.number(),
  password: z.string().min(8),
  universityCard: z
    .string()
    .nonempty("Uploading a university ID card is required"),
});

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
