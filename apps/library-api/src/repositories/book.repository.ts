import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Book } from "../entities/book.entity";

@Injectable()
export class BookRepository {
    constructor(
        @InjectRepository(Book)
        private readonly repository: Repository<Book>
    ) {}

    getById(id: number): Promise<Book | null> {
        return this.repository.findOneBy({ id });
    }
}
