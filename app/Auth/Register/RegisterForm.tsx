"use client"

import { FormInput } from "@/app/SharedUi/FormInput";
import { ChangeEvent } from "react";
import { IUserDetails } from "./types";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";


interface IRegisterForm {
    formDetails: IUserDetails,
    formErrors: Record<keyof IUserDetails, string>,
    onChange: (event: ChangeEvent) => void,
    extraClass?: string,
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export const RegisterForm = (props: IRegisterForm) => {

    const { formDetails, formErrors, onChange, onSubmit, extraClass } = props

    return (
        <Card className={`w-full ${extraClass}`}>
            <form className={`w-full `} action="" onSubmit={onSubmit}>

                <CardHeader className="text-center my-8">
                    <CardTitle className="text-xl">Registration Form</CardTitle>
                    <CardDescription>Register To Get Started</CardDescription>
                </CardHeader>
                <CardContent>

                    <div>
                         <FormInput type="file" label="Photo" placeholder="Upload Your Photo" errorMsg={formErrors.photo} Name="photo" Id="photo" onChange={onChange} value={props.formDetails.photo} />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                        <FormInput label="UserName" placeholder="enter your name" errorMsg={formErrors.userName} Name="userName" Id="userName" onChange={onChange} value={props.formDetails.userName} />
                        <FormInput label="Age" placeholder="enter your age" errorMsg={formErrors.age} Name="age" Id="age" onChange={onChange} value={formDetails.age} />

                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                        <FormInput label="Address" placeholder="enter your address" errorMsg={formErrors.address} Name="address" Id="address" onChange={onChange} value={formDetails.address} />
                        <FormInput label="PhoneNumber" placeholder="10 digit phoneNumber eg:9797xxxxxx" errorMsg={formErrors.phoneNumber} Name="phoneNumber" Id="phoneNumber" onChange={onChange} value={formDetails.phoneNumber} />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                        <FormInput label="Email" placeholder=" email eg xyz@domain.com" errorMsg={formErrors.email} Name="email" Id="email" onChange={onChange} value={formDetails.email} />
                        <FormInput label="Password" placeholder="secure password minimum 8 digits" errorMsg={formErrors.password} Name="password" Id="password" onChange={onChange} value={formDetails.password} />
                    </div>

                </CardContent>
                <CardFooter className="mt-4 flex-col">
                    <Button className="w-full cursor-pointer" >Register</Button>
                    <div className="mt-2 cursor-pointer">
                        <p className="text-[var(--color-primary)]">Already Have An Account</p>
                    </div>

                </CardFooter>

            </form>
        </Card>

    )
}

