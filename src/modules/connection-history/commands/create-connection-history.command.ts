import { Command } from "@/shared/base/command";
import { ConnectionHistoryRepository } from "../interfaces/connection-history.repository";
import {
  CreateConnectionHistoryDTO,
  createConnectionHistoryValidator,
} from "../dtos/create-connection-history.dto";
import { ConnectionHistoryEntity } from "../entities/connection-history.entity";

export class CreateConnectionHistoryCommand implements Command<CreateConnectionHistoryDTO> {
  constructor(private readonly connectionHistoryRepository: ConnectionHistoryRepository) {}

  async execute(input: CreateConnectionHistoryDTO): Promise<void> {
    const parsedData = createConnectionHistoryValidator.parse(input);
    const connectionHistory = ConnectionHistoryEntity.create(parsedData);
    await this.connectionHistoryRepository.create(connectionHistory);
  }
}
