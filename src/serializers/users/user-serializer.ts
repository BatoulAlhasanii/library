import { EntitySerializer } from "../../util/entity-serializer";
import { User } from "../../models/user";

export class UserSerializer extends EntitySerializer<User> {
  transfer(entity: User): Object {
    return {
      id: entity.id,
      name: entity.name,
    };
  }
}
