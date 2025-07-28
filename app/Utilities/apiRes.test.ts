import { ApiResponse, ExtractApiResp } from "./ExtractApiRespnse";

describe("testing extractError message function", () => {
    it("it should handle errors when error has missing message cause", () => {
        const error = new Error();
        error.cause="a cause is there"
        delete (error as any).message;
       // delete (error as any).cause;
        console.log("message is ", error?.message)
        const result = ExtractApiResp(error);

        expect(result).toEqual({
            StatusCode: 500,
            Message: "Unknown Error",
            Reason: "a cause is there",
            Errors: null,
            Data: null
        });
    })
})