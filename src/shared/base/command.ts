export abstract class Command<I> {
  abstract execute: (input: I) => Promise<void>;
}
