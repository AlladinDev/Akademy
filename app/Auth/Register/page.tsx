"use client"

import { ChangeEvent, useState } from "react";
import { RegisterForm } from "./RegisterForm";
import { IUserDetails } from "./types";
import { ExtractApiResp } from "@/app/Utilities/ExtractApiRespnse";
import toast from "react-hot-toast";
import { promise } from "zod";

export default function Register() {
    const [formDetails, setFormDetails] = useState<IUserDetails>({
        userName: "",
        age: 0,
        userType: "admin",
        phoneNumber: 0,
        address: '',
        password: "",
        photo: null,
        email: "",
        createdAt: new Date()
    })

    const [formErrors, setFormErrors] = useState<Record<keyof IUserDetails, string>>({
        userName: "",
        age: "",
        phoneNumber: "",
        address: '',
        password: "",
        photo: "",
        email: "",
        userType: "admin",
        createdAt: ""
    })

    const handleInputChange = (e: ChangeEvent) => {
        const { name, value } = e.target as HTMLInputElement

        //remove any error associated with this name field
        setFormErrors((prev) => ({ ...prev, [name]: "" }))

        //update formdetails
        setFormDetails((prev) => ({ ...prev, [name]: value }))
    }

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(formDetails)

        try {
            //now convert numeric string fields like age phoneNumber into number format otherwise backend will give error
            Object.keys(formDetails as Record<keyof IUserDetails, any>).forEach((key) => {
                typeof key == "string" && !isNaN(formDetails[key]) ? formDetails[key] = parseInt(formDetails[key]) : key
            })

            //add created at as todays date
            formDetails.createdAt = new Date()


            //convert this formdetails in json format
            const jsonFormData = JSON.stringify(formDetails)

            //show loading toast
            toast.loading("Submitting Data", { id: "adminRegistrationToast" })

            const httpResp = await fetch("/api/auth/register", {
                body: jsonFormData,
                method: "POST"
            })

            const apiRes = await httpResp.json()

            const extractedApiDetails = ExtractApiResp(apiRes)
            console.log(extractedApiDetails)


            if (extractedApiDetails.StatusCode != 200) {
                return toast.error(extractedApiDetails.Message + ", Reason :"+ extractedApiDetails.Reason, { id: "adminRegistrationToast" })
            }


            return toast.success("Admin Registered Successfully", { id: "adminRegistrationToast" })

        }
        catch (err) {
            toast.error(ExtractApiResp(err).Message, { id: "adminRegistrationToast" })
        }

    }

    return (
        <div className="min-h-screen flex justify-center items-center p-2">
            <RegisterForm extraClass="w-full sm:max-w-xl" formDetails={formDetails} formErrors={formErrors} onChange={handleInputChange} onSubmit={handleFormSubmit} />
        </div>
    )
}