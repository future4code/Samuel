import { ErrorTracker } from "./errorTracker";
import { JSONFileManager } from "./JSONFileManager";

export class ErrorLogger implements ErrorTracker {

    protected fileName: string = "errorsLog.json";
    protected fileManager: JSONFileManager;

    constructor(){
        this.fileManager = new JSONFileManager(this.fileName);
    }

    public onError(errorMessage: string, data: string): void{
        let errors: string[] = [];

        try{
            errors = this.fileManager.getObjectFromFile();
        } catch(e){}; //se quiser saber o erro, tem que imprimir o 'e'

        const newError = new Post(author, text);
        posts.push(newPost);
        this.fileManager.writeObjetcToFile(posts);
    }
}