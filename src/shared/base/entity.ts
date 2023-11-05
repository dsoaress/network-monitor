import { randomUUID } from "node:crypto";

export abstract class Entity {
  protected readonly _id: string;
  protected readonly _timestamp: Date;

  protected constructor({ id, timestamp }: { id?: string; timestamp?: Date }) {
    this._id = id ?? randomUUID();
    this._timestamp = timestamp ?? new Date();
  }

  get id(): string {
    return this._id;
  }

  get timestamp(): Date {
    return this._timestamp;
  }

  abstract toObject(): unknown;
  abstract validate(): void;
}
