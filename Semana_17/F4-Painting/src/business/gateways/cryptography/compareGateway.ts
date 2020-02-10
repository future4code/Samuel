export interface CompareGateway {
    compare(word: string, hash: string): Promise<boolean>;
}