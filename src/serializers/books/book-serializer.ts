import { EntitySerializer } from "../../util/entity-serializer";
import { Book } from "../../models/book";

export class BookSerializer extends EntitySerializer<Book> {
  transfer(entity: Book): Object {
    return {
      id: entity.id,
      name: entity.name,
    };
  }
}
