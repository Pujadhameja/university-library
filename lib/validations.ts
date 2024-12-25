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

export const bookSchema = z.object({
  title: z
    .string()
    .trim()
    .min(2, { message: "Title must be at least 2 characters." })
    .max(100, { message: "Title must be at most 100 characters." }),
  author: z
    .string()
    .trim()
    .min(2, { message: "Author must be at least 2 characters." })
    .max(100, { message: "Author must be at most 100 characters." }),
  category: z
    .string()
    .trim()
    .min(2, { message: "Category must be at least 2 characters." })
    .max(50, { message: "Category must be at most 50 characters." }),
  rating: z.coerce
    .number()
    .min(1, { message: "Rating must be at least 1." })
    .max(5, { message: "Rating must be at most 5." }),
  totalQuantity: z.coerce
    .number({
      invalid_type_error: "Quantity must be a number.",
    })
    .int({ message: "Quantity must be an integer." })
    .positive({ message: "Quantity must be at least 1." })
    .lte(10000, { message: "Quantity cannot exceed 10,000." }),
  coverImage: z.string().nonempty("Uploading a cover image is required"),
  coverColor: z
    .string()
    .trim()
    .regex(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, {
      message: "Cover color must be a valid hex color code.",
    }),
  videoUrl: z.string().nonempty("Uploading a video is required"),
  summary: z
    .string()
    .trim()
    .min(10, { message: "Summary must be at least 10 characters." }),
});
