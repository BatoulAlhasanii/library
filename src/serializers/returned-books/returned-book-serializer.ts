import { EntitySerializer } from "../../util/entity-serializer";
import { ReturnedBook } from "../../models/returned-book";

export class ReturnedBookSerializer extends EntitySerializer<ReturnedBook> {
  transfer(entity: ReturnedBook): Object {
    return {
      name: entity.book.name,
      userScore: entity.score,
    };
  }
}
