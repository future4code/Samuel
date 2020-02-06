import knex from 'knex';
import { Order } from '../business/entities/Order';
import { OrderGateway } from '../business/gateways/orderGateway';
import moment from 'moment';

interface OrderModel {
    id: string,
    user_name: string,
    email: string,
    print_size: string,
    print_type: string,
    frame_type: string,
    border_size: string,
    order_date: string
}

export class OrderDatabase implements OrderGateway {    
    private connection: knex;

    constructor(){
        this.connection = knex({
            client: "mysql",
            connection: {
                host: "ec2-3-89-222-174.compute-1.amazonaws.com",
                user: "sam",
                password: process.env.SENHA_BANCO,
                database: "f4paintings"
            }
        })
    }

    async saveOrder(order: Order): Promise<void> {

        if(!order.getId()){
            throw new Error("ID do pedido não disponível.");
        }
        if(!order.getUser()?.getName){
            throw new Error("Nome do usuário inválido.");
        }
        if(!order.getUser()?.getEmail()){
            throw new Error("E-mail inválido.");
        }

        const databaseModel: OrderModel = {
            id: order.getId() as string,
            user_name: order.getUser()?.getName() as string,
            email: order.getUser()?.getEmail() as string,
            print_size: order.getPaper().getPaperSize(),
            print_type: order.getPaper().getPaperType(),
            frame_type: order.getFrame().getFrameType(),
            border_size: order.getFrame().getBorderSize(),
            order_date: (moment.now()/1000).toFixed()
        }

        await this.connection.raw(
            `INSERT INTO 
                      orders (id, user_name, email, print_size, print_type, frame_type, border_size, order_date) 
                  VALUES(
                      "${databaseModel.id}",
                      "${databaseModel.user_name}",
                      "${databaseModel.email}",
                      "${databaseModel.print_size}",
                      "${databaseModel.print_type}",
                      "${databaseModel.frame_type}",
                      "${databaseModel.border_size}",
                      "${databaseModel.order_date}"
                  )`
        );
    }

    async getAllOrders(): Promise<Order[]> {
        const orders: Order[] = [];
        const result = await this.connection.raw(
            `SELECT * FROM f4paintings.orders`
        );
        for (let order of result[0]){
            orders.push(order)
        }
        return orders;
    }
}