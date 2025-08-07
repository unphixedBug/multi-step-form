import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(1, "This field is required"),
  email: z.email("Invalid email address"),
  phone: z
    .string()
    .min(1, "This field is required")
    .regex(/^[0-9+\-\s()]+$/, "Only numbers"),

  plan: z.enum(["arcade", "advanced", "pro"]),
  billing: z.enum(["monthly", "yearly"]),

  addons: z.object({
    onlineService: z.boolean(),
    largerStorage: z.boolean(),
    customizableProfile: z.boolean(),
  }),
});

export type FormData = z.infer<typeof formSchema>;
