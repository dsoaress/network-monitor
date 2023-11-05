import { Entity } from "@/shared/base/entity";
import { ConnectionHistoryDTO, connectionHistoryValidator } from "../dtos/connection-history.dto";

interface Input {
  id?: string;
  status: "SUCCESS" | "FAILURE";
  timestamp?: Date;
}

export class ConnectionHistoryEntity extends Entity {
  private readonly _status: "SUCCESS" | "FAILURE";

  private constructor({ id, status, timestamp }: Input) {
    super({ id, timestamp });
    this._status = status;
    this.validate();
  }

  static create(input: Input): ConnectionHistoryEntity {
    return new ConnectionHistoryEntity(input);
  }

  get status(): "SUCCESS" | "FAILURE" {
    return this._status;
  }

  toObject(): ConnectionHistoryDTO {
    return {
      id: this.id,
      status: this.status,
      timestamp: this.timestamp,
    };
  }

  validate(): void {
    connectionHistoryValidator.parse(this.toObject());
  }
}
