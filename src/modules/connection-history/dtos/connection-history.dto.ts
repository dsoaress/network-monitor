import { z } from "zod";

export const connectionHistoryValidator = z.object({
  id: z.string().uuid(),
  status: z.enum(["SUCCESS", "FAILURE"]),
  timestamp: z.date(),
});

export type ConnectionHistoryDTO = z.infer<typeof connectionHistoryValidator>;
