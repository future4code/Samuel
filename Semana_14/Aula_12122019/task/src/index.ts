import { PostCreatorHandler } from "./postCreatorHandler";
import { PostReadImp } from "./postReadImp";

const postHandler = new PostCreatorHandler();

let text1 = "Samuel";
let text2 = "Post normal do Samuel";
postHandler.execute(text1, text2);

text1 = "Fabiana";
text2 = "&Post gritante da Fabiana";
postHandler.execute(text1, text2);

text1 = "Saulo";
text2 = "%Post baixinho do Saulo";
postHandler.execute(text1, text2);

const postReader = new PostReadImp();
postReader.readPosts();