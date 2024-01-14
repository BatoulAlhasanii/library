import dataSource from "../util/data-source";
import { Repository } from "typeorm";
import { ReturnedBook } from "../models/returned-book";

export const ReturnedBookRepository: Repository<ReturnedBook> =
  dataSource.getRepository(ReturnedBook);
