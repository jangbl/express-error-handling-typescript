import { CustomError } from "./custom-error";
import { CustomErrorType } from "./custom-error-type";

export class InternalServerError extends CustomError {
    statusCode = 500
    errorType = CustomErrorType.InternalServerError;

    constructor() {
        super("something went wrong");
    }
}