import { v4 } from "uuid";
import { idGenerator } from "../business/usecases/createOrder/createOrderUseCase";

export class V4IdGenerator implements idGenerator {
    generate(): string {
        return v4();
    }
}