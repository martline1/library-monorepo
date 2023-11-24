import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm"

import {
    Int,
    Field,
    ObjectType,
} from "@nestjs/graphql";

import { Book } from "./book.entity";

@Entity()
@ObjectType()
export class User {
    @PrimaryGeneratedColumn("increment")
    @Field(() => Int)
    id: number;

    @Column({ type : "text" })
	@Field(() => String)
    name: string;

    @OneToMany(() => Book, book => book.author)
    @Field(() => [Book])
    books: Book[];

    @ManyToMany(() => Book)
    @JoinTable()
    @Field(() => [Book])
    favorites: Book[];
}
