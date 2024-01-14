export abstract class EntitySerializer<Entity> {
  abstract transfer(entity: Entity): Object;

  static transform<Entity, T extends EntitySerializer<Entity>>(
    model: Entity,
    transformOptions = {}
  ): Object {
    const serializerClass: undefined | (new () => T) = this
      .prototype.constructor as new () => T;

    return (new serializerClass()).transfer(model);
  }

  static transformMany<Entity, T extends EntitySerializer<Entity>>(
    models: Entity[],
    transformOptions = {}
  ): Object[] {
    return models.map((model): Object => this.transform(model, transformOptions));
  }
}
