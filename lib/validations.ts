import { z } from "zod";

export const signUpSchema = z.object({
  fullName: z.string().min(3),
  email: z.string().email(),
  universityId: z.string().min(8),
  password: z.string().min(8),
  universityCard: z
    .string()
    .nonempty("Uploading a university ID card is required"),
});

export const signInSchema = signUpSchema.pick({
  email: true,
  password: true,
});
