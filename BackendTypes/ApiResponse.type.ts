export interface ApiSuccess {
    StatusCode: number,
    Message: string,
    Data: any
}

export interface ApiError {
    StatusCode: number,
    Message: string,
    Reason: string,
    Errors?:any
}