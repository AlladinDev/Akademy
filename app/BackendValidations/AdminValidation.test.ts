import { AdminValidationSchema } from "./Admin.validation"
import { FormatZodErrors } from "../Utilities/FormatZodErrors"

describe("testing Zod Admin Registration Schema", () => {
    it("it should handle case when any of the fields or all has values less than minimum length specified ", () => {
        const formData = {
            userName: "sa",
            age: 3,
            address: "bg",
            password: "saqlain",
            userType: "asb",
            createdAt: "231",
            photo: "bh",
            phoneNumber: 100,
            email: ""
        }
        const expectedRes = {
            userName: 'Min length allowed 3',
            address: 'Min length allowed 3',
            email: 'Valid email required',
            photo: 'Min length of photo path should be 3 chars',
            password: 'Min length allowed 8',
            phoneNumber: 'Min length allowed 10',
            age: 'Min age allowed 18',
            userType: "Min length allowed 4",
            createdAt: "Min length allowed 5"
        }

        const zodRes = AdminValidationSchema.safeParse(formData)
        expect(FormatZodErrors(zodRes.error?.issues!)).toEqual(expectedRes)
    })

    it("should handle cases when even a single field or all values exceeding max length allowed", () => {
        const invalidData = {
            userName: 'a'.repeat(31),              // Exceeds max length 30
            address: 'b'.repeat(51),               // Exceeds max length 50
            email: 'c'.repeat(31) + '@test.com',   // Local part exceeds 30
            photo: '/images/'.repeat(10),          // Exceeds max length 40
            password: 'p'.repeat(41),              // Exceeds max length 40
            phoneNumber: 1234567890123,            // 13 digits > 10
            age: 65,                                // Exceeds max age 60
            userType: 'adminUser',                 // Length > 5
            createdAt: 'd'.repeat(31) // Exceeds 30 chars
        };

        const expectedRes = {
            userName: 'Max length allowed 30',
            address: 'Max length allowed 50',
            email: 'Max length allowd 30',
            photo: 'Max photo path length allowed 40',
            password: 'Max length allowed 40',
            phoneNumber: 'Max digits allowed 10',
            age: 'Max age allowed 60',
            userType: "Max length allowed 5",
            createdAt: "Max length allowed 30"
        }
        const zodRes = AdminValidationSchema.safeParse(invalidData)
        expect(FormatZodErrors(zodRes.error?.issues!)).toEqual(expectedRes)
    })

    it("it should handle invalid cases like passing number for string values and vice versa", () => {
        const invalidData = {
            userName: 0,              // Exceeds max length 30
            address: 0,               // Exceeds max length 50
            email: 0,   // Local part exceeds 30
            photo: 0,          // Exceeds max length 40
            password: 0,              // Exceeds max length 40
            phoneNumber: "9797798243",            // 13 digits > 10
            age: "9797798243",                                // Exceeds max age 60
            userType: 0,                 // Length > 5
            createdAt: 0 // Exceeds 30 chars
        };

        const expectedRes = {
            userName: "Username should be a string",
            address: 'address should be a valid string',
            email: 'Valid email required',
            photo: 'Valid photo required',
            password: 'Secure min 8 digit password required',
            phoneNumber: 'Valid phone number required',
            age: 'Valid age required',
            userType: "UserType is required",
            createdAt: "Registration Date required"
        }

         const zodRes = AdminValidationSchema.safeParse(invalidData)
        expect(FormatZodErrors(zodRes.error?.issues!)).toEqual(expectedRes)
    })
})