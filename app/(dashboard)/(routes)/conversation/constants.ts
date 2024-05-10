import * as z from "zod";

export const formScema = z.object({
  promt: z.string().min(1 ,{
    message: "Promt is required",
  })
})
