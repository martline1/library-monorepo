import {
    Get,
    Param,
    Controller,
} from "@nestjs/common";

import { BookService } from "../services/book.service";

@Controller("books")
export class BooksController {
    constructor(
        private readonly bookService: BookService,
    ) {}

    @Get(":id")
    getById(@Param("id") id: string) {
        return this.bookService.getById(+id);
    }
}
