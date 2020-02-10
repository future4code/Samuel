import express, {Request, Response} from 'express'
import { SimulateOrderUseCase, SimulateOrderInput } from '../business/usecases/simulateOrder/SimulateOrderUseCase'
import { CreateOrderUseCase, CreateOrderInput } from '../business/usecases/createOrder/createOrderUseCase'
import { OrderDatabase } from '../data/orderDatabase'
import { V4IdGenerator } from '../services/V4IdGenerator'
import { GetAllOrdersUseCase } from '../business/usecases/getAllOrders/getAllOrdersUseCase'
import { UserDatabase } from '../data/userDatabase'
import { CreateUserUseCase, CreateUserUCInput } from '../business/usecases/createUser/createUserUseCase'
import { BcryptService } from '../services/bcryptService'

const app = express()
app.use(express.json()) // Linha mágica (middleware)

app.post("/pedido/simular", (req: Request, res: Response) => {
    const useCase = new SimulateOrderUseCase();

    const input: SimulateOrderInput = {
        print: {
            size: req.body.paperSize ,
            paperType: req.body.paperType
        },
        frame: {
            type: req.body.frameType,
            borderSize: req.body.borderSize,
        }
    }

    const result = useCase.execute(input);

    res.status(200).send({
        printSize: formatValueAsString(result.printPrice),
        framePrice: formatValueAsString(result.framePrice),
        totalPrice: formatValueAsString(result.totalPrice)
    });
})

app.post("/pedido/criarPedido", async (req: Request, res: Response) => {
    const orderGateway = new OrderDatabase();
    const idGenerator = new V4IdGenerator();
    const useCase = new CreateOrderUseCase(orderGateway, idGenerator);

    const input: CreateOrderInput = {
        print: {
            size: req.body.paperSize,
            paperType: req.body.paperType
        },
        frame: {
            type: req.body.frameType,
            borderSize: req.body.borderSize
        },
        user: {
            userId: req.body.userId
        }
    }

    try {
        const result = await useCase.execute(input);
        res.send({
            printSize: formatValueAsString(result.printPrice),
            framePrice: formatValueAsString(result.framePrice),
            totalPrice: formatValueAsString(result.totalPrice)
        })
    } catch (e) {
        console.log(e.message);
    }
});

app.get("/pedidos/verTodosOsPedidos", async(req: Request, res: Response) => {

    const orderGateway = new OrderDatabase();

    const useCase = new GetAllOrdersUseCase(orderGateway);
    try {
        const result = await useCase.execute();
        res.send({ result });
    } catch (e) {
        console.log(e.message);
    }
})

app.post("/usuarios/criarUsuario", async (req: Request, res: Response) => {
    const userGateway = new UserDatabase();
    const encryptGateway = new BcryptService();
    const idGenerator = new V4IdGenerator();
    const useCase = new CreateUserUseCase(userGateway, encryptGateway, idGenerator);

    const input: CreateUserUCInput = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }

    try {
        const result = await useCase.execute(input);
        res.status(200).send({
            message: result.message,
            userId: result.userId
        })
    } catch (e) {
        console.log(e.message);
    }
});

function formatValueAsString(value: number): string {
    return `R$ ${value.toFixed(2)}`
}

export default app