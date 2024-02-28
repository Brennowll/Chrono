import { z } from "zod"

export const signInSchema = z.object({
  email: z
    .string()
    .email("Invalid email.")
    .refine((value) => value.trim() !== "", {
      message: "Email required.",
    }),
  password: z.string().refine((value) => value.trim() !== "", {
    message: "Password required.",
  }),
})

export const signUpSchema = z
  .object({
    name: z
      .string()
      .min(3, "Name too short.")
      .max(30, "Name too long.")
      .refine((value) => value.split("\n").length <= 1, {
        message: "Too much lines.",
      })
      .refine(
        (value) => value.trim() !== "",
        "Name cannot be only spaces",
      )
      .refine((value) => value.trim() !== "", {
        message: "Name required.",
      }),
    email: z
      .string()
      .min(3, "Email too short.")
      .email("Not a valid email.")
      .refine((value) => value.split("\n").length <= 1, {
        message: "Too much lines",
      })
      .refine(
        (value) => value.trim() !== "",
        "Email cannot be only spaces",
      )
      .refine((value) => value.trim() !== "", {
        message: "Email required.",
      }),
    password: z
      .string()
      .min(8, "Password too short.")
      .refine((value) => value.split("\n").length <= 1, {
        message: `Too much lines.`,
      })
      .refine(
        (value) => value.trim() !== "",
        "A senha não pode ser apenas espaços.",
      )
      .refine(
        (value) =>
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
            value,
          ),
        {
          message:
            "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
        },
      )
      .refine((value) => value.trim() !== "", {
        message: "A senha é obrigatória",
      }),
    confirmPassword: z
      .string()
      .refine((value) => value.trim() !== "", {
        message: "A confirmação da senha é obrigatória",
      }),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "As senhas não são iguais.",
      })
    }
  })

export type SignInType = z.infer<typeof signInSchema>
export type SignUpType = z.infer<typeof signUpSchema>
