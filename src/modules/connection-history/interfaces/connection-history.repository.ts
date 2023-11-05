import { Repository } from "@/shared/base/repository";
import { ConnectionHistoryEntity } from "../entities/connection-history.entity";

export abstract class ConnectionHistoryRepository extends Repository<ConnectionHistoryEntity> {}
