import express, {Request, Response} from 'express'
import { SignupUC } from '../business/usecases/signupUC';
import { UserDatabase } from '../data/UserDatabase';
import { IdGenerator } from '../tools/IdGenerator';


const app = express()
app.use(express.json()) // Linha mágica (middleware)

app.post('/createUser', async (req: Request, res: Response) => {
    const userDatabase = new UserDatabase();
    const idGenerator = new IdGenerator();
    const signupUseCase = new SignupUC(userDatabase, idGenerator);

    const input = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }

    try{
        await signupUseCase.execute(input);
        res.status(200).send({message: "Usuário criado com sucesso."});
    } catch (err) {
        console.log(err);
        res.status(400).send({message: "Não foi possível criar usuário."})
    }

});

export default app