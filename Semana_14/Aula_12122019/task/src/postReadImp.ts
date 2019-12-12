import { PostReader } from "./postReader";
import { Post } from "./post";
import { JSONFileManager } from "./JSONFileManager";

export class PostReadImp implements PostReader {

    protected posts: object;
    protected fileName: string = "normalPosts.json";
    protected fileManager: JSONFileManager = new JSONFileManager(this.fileName);    

    public readPosts(): void {
        this.getAllPosts();
        console.log(this.posts);
    }

    private getAllPosts(){
        try{
            this.posts = this.fileManager.getObjectFromFile();
        } catch(e){}; //se quiser saber o erro, tem que imprimir o 'e'
    }
}