

export interface ApiResponse {
    StatusCode: number,
    Message: string,
    Reason: string,
    Data: any,
    Errors?: any
}

export const ExtractApiResp = (resp: any): ApiResponse => {
    if (!resp || (typeof resp !== "object")) {
        return {
            StatusCode: 500,
            Message: "Failed to get response from server",
            Reason: "unknown Error",
            Errors: null,
            Data: null
        }
    }

    if (resp instanceof Error) {
        return {
            StatusCode: 500,
            Message: resp?.message || "Unknown Error",
            Reason: resp?.cause as string || "Reason Not Defined",
            Errors: null,
            Data: null
        }
    }

    const { StatusCode, Message, Reason, Errors, Data } = resp

    return {
        StatusCode: StatusCode,
        Message: Message,
        Reason: Reason,
        Errors: Errors,
        Data: Data
    }

}