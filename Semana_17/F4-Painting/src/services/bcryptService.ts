import * as bcrypt from "bcrypt";
import { EncryptGateway } from "../business/gateways/cryptography/encryptGateway";
import { CompareGateway } from "../business/gateways/cryptography/compareGateway";

export class BcryptService implements EncryptGateway, CompareGateway {
  private static BCRYPT_SALT_ROUNDS = 10;

  async encrypt(word: string): Promise<string> {
    const salt = await bcrypt.genSalt(BcryptService.BCRYPT_SALT_ROUNDS);
    const hash = await bcrypt.hash(word, salt);
    return hash;
  }

  async compare(word: string, hash: string): Promise<boolean> {
    const compare = await bcrypt.compare(word, hash);
    return compare;
  }
}