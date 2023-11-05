import { DAO } from "@/shared/base/dao";
import { ConnectionHistoryDTO } from "../dtos/connection-history.dto";

export abstract class ConnectionHistoryDAO extends DAO<ConnectionHistoryDTO> {}
