import {
    Injectable,
    HttpStatus,
    HttpException,
} from "@nestjs/common";

import { BookRepository } from "../repositories/book.repository";
import { Book } from "../entities/book.entity";

@Injectable()
export class BookService {
    constructor(
        private readonly bookRepository: BookRepository
    ) {}

    async getById(id: number): Promise<Book | null> {
        const value = await this.bookRepository.getById(id);

        if (!value) {
            throw new HttpException("Not found", HttpStatus.NOT_FOUND);
        }

        return value;
    }
}
