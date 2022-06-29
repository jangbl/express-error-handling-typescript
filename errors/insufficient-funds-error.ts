import { CustomError } from "./custom-error";
import { CustomErrorType } from "./custom-error-type";
import { SerializedError } from "./serialized-error";

export class InsufficientFundsError extends CustomError {
    statusCode = 422
    errorType = CustomErrorType.InsufficientFundsError

    constructor(public requestedAmount: number, public availableAmount: number) {
        super(`Insufficient funds: attempted to disburse ${requestedAmount}, but there is only ${availableAmount} available.`);
    }

    override serializeErrors() {
        return [{ requestedAmount: this.requestedAmount, availableAmount: this.availableAmount, message: this.message, errorType: this.errorType }];
    }
}