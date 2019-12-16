import { UpperCasePostCreator } from "./upperCasePostCreator";
import { LowerCasePostCreator } from "./lowerCasePostCreator";
import { NormalPostCreator } from "./normalPostCreator";


export class PostCreatorHandler {

    public execute(author: string, text: string): void {
        if(text.indexOf('&') === 0) {
            new UpperCasePostCreator().create(author, text);
        } else if(text.indexOf('%') === 0) {
            new LowerCasePostCreator().create(author, text);
        } else {
            new NormalPostCreator().create(author, text);
        }
    }

}