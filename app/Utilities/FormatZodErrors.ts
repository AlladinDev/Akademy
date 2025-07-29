
import { $ZodIssue } from "zod/v4/core";

export const FormatZodErrors = (errors: $ZodIssue[]) => {
    const formattedErrors = {}
    for (const key in errors) {
        formattedErrors[errors[key].path[0]] = errors[key].message
    }
    return formattedErrors
}