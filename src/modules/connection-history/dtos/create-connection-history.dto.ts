import { z } from "zod";

import { connectionHistoryValidator } from "./connection-history.dto";

export const createConnectionHistoryValidator = connectionHistoryValidator.omit({
  id: true,
  timestamp: true,
});

export type CreateConnectionHistoryDTO = z.infer<typeof createConnectionHistoryValidator>;
