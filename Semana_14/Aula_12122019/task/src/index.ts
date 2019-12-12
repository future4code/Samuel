import { NormalPostCreator } from "./normalPostCreator";

const creatorTest = new NormalPostCreator();

let text1 = "Samuel"
let text2 = "Post do Samuel"

creatorTest.create(text1, text2);

text1 = "";
creatorTest.create(text1, text2);

text1 = "Fabiana"
text2 = undefined;
creatorTest.create(text1, text2);

text2 = "Post da Fabiana"
creatorTest.create(text1, text2);

