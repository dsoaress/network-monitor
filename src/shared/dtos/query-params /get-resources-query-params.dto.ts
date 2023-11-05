import { z } from "zod";

export const findAllResourcesQueryParamsValidator = z.object({
  startDate: z.date().optional(),
  endDate: z.date().optional(),
  limit: z.number().int().positive().optional(),
});

export type FindAllResourcesQueryParamsDTO = z.infer<typeof findAllResourcesQueryParamsValidator>;
