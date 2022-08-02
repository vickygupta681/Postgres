import { Entity, Column } from "typeorm"

@Entity("categories")
export class Category {

    @Column()
    Name: string

}
