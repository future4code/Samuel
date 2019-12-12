import { PostCreator } from "./postCreator";
import { Post } from "./post";
import { ErrorPrinter } from "./errorPrinter";
import { JSONFileManager } from "./JSONFileManager";

export class UpperCasePostCreator implements PostCreator {

    protected fileName: string = "normalPosts.json";
    protected fileManager: JSONFileManager;
    private errorPrinter: ErrorPrinter;

    constructor(){
        this.fileManager = new JSONFileManager(this.fileName);
        this.errorPrinter = new ErrorPrinter();
    }

    public create(author: string, text: string): void {
        
        if(author && text){
            let posts: Post[] = [];            
            try{
                posts = this.fileManager.getObjectFromFile();
            } catch(e){}; //se quiser saber o erro, tem que imprimir o 'e'

            const newPost = new Post(author, text.slice(1,text.length).toUpperCase());
            posts.push(newPost);
            this.fileManager.writeObjetcToFile(posts);
            console.log("Post criado com sucesso!");
        }
        else{
            this.errorPrinter.onError("verifique os parametros do post");
        }
    }
}