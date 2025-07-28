import { ExtractApiResp } from "./ExtractApiRespnse";

describe("testing extractError message function", () => {

    //test case to handle when error has missing values like cause is missing 
    it("it should handle errors when error has missing fiels like message,cause", () => {
        const error = new Error();
        error.cause = "a cause is there"
        error.message=""

        const result = ExtractApiResp(error);

        expect(result).toEqual({
            StatusCode: 500,
            Message: "Unknown Error",
            Reason: "a cause is there",
            Errors: null,
            Data: null
        });
    })

    //test case to handle when error is null
    it("it should handle null cases", () => {
        const expectedRes = {
            StatusCode: 500,
            Message: "Failed to get response from server",
            Reason: "unknown Error",
            Errors: null,
            Data: null
        }

        expect(ExtractApiResp(null)).toEqual(expectedRes)
    })

    //test case for handling when error is just a string and not an object
    it("it should handle if error is simple string instead of an object", () => {
        const expectedRes = {
            StatusCode: 500,
            Message: "Failed to get response from server",
            Reason: "unknown Error",
            Errors: null,
            Data: null
        }
        expect(ExtractApiResp(null)).toEqual(expectedRes)
    })

    //test case for if error is just plain Error no message no reason
    it("it should handle error if it is plain error with no message or reason", () => {
        const expectedRes = {
            StatusCode: 500,
            Message: "Unknown Error",
            Reason: "Reason Not Defined",
            Errors: null,
            Data: null
        }
        expect(ExtractApiResp(new Error())).toEqual(expectedRes)
    })


})