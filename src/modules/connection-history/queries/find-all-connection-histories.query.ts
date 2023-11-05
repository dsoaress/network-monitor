import { Query } from "@/shared/base/query";
import { ConnectionHistoryDAO } from "../interfaces/connection-history.dao";
import {
  FindAllResourcesQueryParamsDTO,
  findAllResourcesQueryParamsValidator,
} from "@/shared/dtos/query-params /get-resources-query-params.dto";
import { ConnectionHistoryDTO } from "../dtos/connection-history.dto";

export class FindAllConnectionHistories implements Query<ConnectionHistoryDTO[]> {
  constructor(private readonly connectionHistoryDAO: ConnectionHistoryDAO) {}

  async execute(queryParams: FindAllResourcesQueryParamsDTO): Promise<ConnectionHistoryDTO[]> {
    const parsedQueryParams = findAllResourcesQueryParamsValidator.parse(queryParams);
    return this.connectionHistoryDAO.findAll(parsedQueryParams);
  }
}
