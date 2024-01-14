import { EntitySerializer } from "../../util/entity-serializer";
import { Book } from "../../models/book";

export class ShowBookSerializer extends EntitySerializer<Book> {
  transfer(entity: Book): Object {
    return {
      id: entity.id,
      name: entity.name,
      score: entity.score ? entity.score : -1,
    };
  }
}
