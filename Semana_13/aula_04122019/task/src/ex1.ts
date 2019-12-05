import { readdir, readFile } from 'fs';



readdir("textos", function(err, files:string[]) {
    if(err) {
        console.log("Error getting directory information.")
    } else {
        files.forEach(function(file:string) {
            readFile()
            console.log(file)
        })
    }
})