import { CustomErrorType } from "./custom-error-type";

export abstract class CustomError extends Error {
    abstract statusCode: number;
    abstract errorType: CustomErrorType;
    constructor(message: string) {
        super(message);
    }

    serializeErrors (): Array<{errorType: CustomErrorType, message: string} & any> {
        return [{ message: this.message,errorType: this.errorType }];
    }
}