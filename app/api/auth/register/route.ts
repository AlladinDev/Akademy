import { ConnectToMongodD } from "@/app/BackendConfig/ConnectToDb";
import { AdminValidationSchema } from "@/app/BackendValidations/Admin.validation";
import { AdminModel } from "@/app/Models/Admin";
import { ApiError, ApiSuccess } from "@/BackendTypes/ApiResponse.type";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

    try {
        //parse admin details
        const adminDetails = await req.json()

        //validate the data and return error if any
        const validationRes = AdminValidationSchema.safeParse(adminDetails)
        if (!validationRes.success) {
            return NextResponse.json({
                Message: "Validation Failed",
                Reason: "Invalid Details",
                StatusCode: 400,
                Errors: validationRes.error
            } satisfies ApiError, { status: 400 })
        }

        //connect to db
        await ConnectToMongodD()

        //first check if admin already registered
        const adminExists = await AdminModel.exists({})

        ///if admin exists return error
        if (adminExists) {
            const response: ApiError = {
                Message: "Registration Failed",
                Reason: "Admin Already Exists",
                StatusCode: 400
            }

            return NextResponse.json(response, { status: response.StatusCode })
        }

        //now hash password first
        adminDetails.password = await bcrypt.hash(adminDetails.password, 10)

        //add userType as admin
        adminDetails.userType="admin"

        adminDetails.photo="https://admin.jpg"

        //now register admin
        await AdminModel.insertOne(adminDetails)

        return NextResponse.json({
            Message: "Admin Registered Successfully",
            StatusCode: 200,
            Data: null
        } satisfies ApiSuccess, { status: 200 })

    }
    catch (err: unknown) {
        console.log(err)

        //safely get error message from error object
        const reason = err instanceof Error ? err.message : "Unknown Error";

        return NextResponse.json({
            StatusCode: 500,
            Message: "Admin Registration Failed",
            Reason: reason
        } satisfies ApiError)
    }
}