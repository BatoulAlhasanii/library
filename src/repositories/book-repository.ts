import dataSource from "../util/data-source";
import { Book } from "../models/book";
import { Repository } from "typeorm";

export const BookRepository: Repository<Book> = dataSource.getRepository(Book);
