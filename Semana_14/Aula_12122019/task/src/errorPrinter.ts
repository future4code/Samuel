import { ErrorTracker } from "./errorTracker";

export class ErrorPrinter implements ErrorTracker {

    public onError(errorMessage: string, data: string): void{
        console.log(`${errorMessage} - ${data}`);
    }
}