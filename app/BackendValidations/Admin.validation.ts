import * as z from "zod"

export const AdminValidationSchema = z.object({
    userName: z.string().max(30).min(3),
    address: z.string().max(50).min(3),
    email: z.email(),
    photo:z.string(),
    password: z.string().min(8).max(40),
    phoneNumber: z.number().min(10),
    age: z.number().min(18).max(60),
    userType: z.string(),
    createdAt: z.string()
})