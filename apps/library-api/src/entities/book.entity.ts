import {
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";

import {
    Int,
    Field,
    ObjectType,
} from "@nestjs/graphql";

import { User } from "./user.entity";

@Entity()
@ObjectType()
export class Book {
    @PrimaryGeneratedColumn("increment")
    @Field(() => Int)
    id: number;

    @Column({ type : "text" })
	@Field()
    name: string;

    @Column({ type : "text" })
    @Field()
    description: string;

    @ManyToOne(() => User, user => user.books)
    @Field(() => User)
    author: User;
}
