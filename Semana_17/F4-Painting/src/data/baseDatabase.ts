import knex from "knex";

export abstract class BaseDatabase {
	protected connection = knex({
		client: "mysql",
		connection: {
			host: "ec2-3-89-222-174.compute-1.amazonaws.com",
			user: "sam",
			password: process.env.SENHA_BANCO,
			database: "f4paintings"
		}
	});
}