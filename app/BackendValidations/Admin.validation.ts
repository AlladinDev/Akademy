import * as z from "zod"

export const AdminValidationSchema = z.object({
    userName: z.string({ error: "Username should be a string" }).max(30, { error: "Max length allowed 30" }).min(3, { error: "Min length allowed 3" }),
    address: z.string({ error: "address should be a valid string" }).max(50, { error: "Max length allowed 50" }).min(3, { error: "Min length allowed 3" }),
    email: z.email({ error: "Valid email required" }).max(30, { error: "Max length allowd 30" }),
    photo: z.string({ error: "Valid photo required" }).min(3, { error: "Min length of photo path should be 3 chars" }).max(40, { error: "Max photo path length allowed 40" }),
    password: z.string({ error: "Secure min 8 digit password required" }).min(8, { error: "Min length allowed 8" }).max(40, { error: "Max length allowed 40" }),
    phoneNumber: z.number({ error: "Valid phone number required" }).min(1000000000, { error: "Min length allowed 10" }).max(9999999999, { error: "Max digits allowed 10" }),
    age: z.number({ error: "Valid age required" }).min(18, { error: "Min age allowed 18" }).max(60, { error: "Max age allowed 60" }),
    userType: z.string({ error: "UserType is required" }).max(5, { error: "Max length allowed 5" }).min(4, { error: "Min length allowed 4" }),
    createdAt: z.string({ error: "Registration Date required" }).max(30, { error: "Max length allowed 30" }).min(5, { error: "Min length allowed 5" })
})





