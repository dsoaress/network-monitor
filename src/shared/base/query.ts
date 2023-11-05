import { FindAllResourcesQueryParamsDTO } from "../dtos/query-params /get-resources-query-params.dto";

export abstract class Query<O> {
  abstract execute: (queryParams: FindAllResourcesQueryParamsDTO) => Promise<O>;
}
