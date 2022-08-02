import { Entity, Column } from "typeorm";
import Model from "./Model";

@Entity("users")
export class User extends Model {

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column({unique:true})
    email:string

    @Column({})
    password: String;

    @Column()
    age: number

    @Column({default:"user"})
    role:number

}
