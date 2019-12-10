import { readdir, readFile } from 'fs';

readdir("textos", (err: any, fileNames: string[]) => {
    if(err) {
        console.log("Erro ao tentar acessar o diretório.");
        return;
    }
    const allPromises = fileNames.map((fileName) => {
        return new Promise((resolve, reject)=>{
            readFile(`textos/${fileName}`, (err: any, data: Buffer) => {
                if(err){
                    reject(err);
                    return;
                }
                resolve(data.toString());
            })
        })
    })

    Promise.all(allPromises).then((allValues: string[])=>{
        console.log(allValues.join(""));
    })
})