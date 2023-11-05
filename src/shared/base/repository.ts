export abstract class Repository<Entity> {
  abstract create: (entity: Entity) => Promise<void>;
}
