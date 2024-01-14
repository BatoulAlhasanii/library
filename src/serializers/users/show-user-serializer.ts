import { EntitySerializer } from "../../util/entity-serializer";
import { User } from "../../models/user";
import { BookSerializer } from "../books/book-serializer";
import { ReturnedBookSerializer } from "../returned-books/returned-book-serializer";

export class ShowUserSerializer extends EntitySerializer<User> {
  transfer(entity: User): Object {
    return {
      id: entity.id,
      name: entity.name,
      books: {
        past: entity?.returnedBooks
            ? ReturnedBookSerializer.transformMany(entity.returnedBooks)
            : [],
        present: entity.borrowedBooks
            ? BookSerializer.transformMany(entity.borrowedBooks)
            : [],
      },
    };
  }
}
