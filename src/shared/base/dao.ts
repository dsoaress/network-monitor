import { FindAllResourcesQueryParamsDTO } from "../dtos/query-params /get-resources-query-params.dto";

export abstract class DAO<DTO> {
  abstract findAll: (queryParams: FindAllResourcesQueryParamsDTO) => Promise<DTO[]>;
}
