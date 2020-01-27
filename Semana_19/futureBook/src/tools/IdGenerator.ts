import { IdGeneratorGateway } from "../business/gateways/idGeneratorGateway";
import { v4 } from "uuid";

export class IdGenerator implements IdGeneratorGateway {
    generateID(): string {
        return v4();
    }
}