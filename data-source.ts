import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./src/entity/User"
import { Category } from "./src/entity/Category"
require('dotenv').config();

export const AppDataSource = new DataSource({
    "type": "postgres",
    "host": process.env.DB_HOST,
    "port": 5432,
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "synchronize": false,
    "logging": false,
    "entities": [User, Category],
    "migrationsTableName": "migrations",
    "migrations": ["./src/migration/*.ts"],
    "subscribers": [],
})
