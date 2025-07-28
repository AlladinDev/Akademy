

export interface ApiResponse {
    StatusCode: number,
    Message: string,
    Reason: string,
    Data: unknown,
    Errors?: unknown
}


export const ExtractApiResp = (resp: unknown): ApiResponse => {
    if (!resp || (typeof resp !== "object")) {
        return {
            StatusCode: 500,
            Message: "Failed to get response from server",
            Reason: "unknown Error",
            Errors: null,
            Data: null
        }
    }

    //if resp is an error handle it and extract message and other details from it
    if (resp instanceof Error) {
        return {
            StatusCode: 500,
            Message: resp?.message || "Unknown Error",
            Reason: resp?.cause as string || "Reason Not Defined",
            Errors: null,
            Data: null
        }
    }

    const { StatusCode, Message, Reason, Errors, Data } = resp as {
        StatusCode: number,
        Message: string,
        Reason: string,
        Errors: Error,
        Data: unknown
    }

    return {
        StatusCode: StatusCode,
        Message: Message,
        Reason: Reason,
        Errors: Errors,
        Data: Data
    }

}