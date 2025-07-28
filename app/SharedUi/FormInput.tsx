"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChangeEvent } from "react"

interface IFormInputs {
    label?: string,
    errorMsg?: string,
    Name: string,
    value: unknown,
    extraClass?: string,
    type?: string,
    Id: string,
    placeholder?: string,
    onChange: (e: ChangeEvent) => void
}


export const FormInput: React.FC<IFormInputs> = (props: IFormInputs) => {
    //check here value should be string or number only
    if (typeof props.value !== "string" ||typeof  props.value !== "number") {
        return
    }

    //set default type as text for input

    const changeHandler = (event: ChangeEvent) => {
        if (!event) {
            return
        }

        props.onChange(event)

    }
    return <div className={`flex justify-center items-start flex-col gap-2 w-full`}>
        {props.label ? <Label htmlFor={props.Id} >{props.label}</Label> : null}
        <Input placeholder={props.placeholder} type={props.type ? props.type : "text"} className={props.extraClass} name={props.Name} id={props.Id} onChange={changeHandler} />
        {props.errorMsg ? <span className="text-[var(--color-destructive)] text-sm">{props.errorMsg}</span> : null}
    </div>
}