import { Args, Int, Resolver, Query } from "@nestjs/graphql";

import { Book } from "../entities/book.entity";
import { BookService } from "../services/book.service";

@Resolver(() => Book)
export class BookResolver {
    constructor(
        private readonly bookService: BookService,
    ) {}

    @Query(() => Book)
    getById(@Args("id", { type : () => Int }) id: number) {
        return this.bookService.getById(id);
    }
}
