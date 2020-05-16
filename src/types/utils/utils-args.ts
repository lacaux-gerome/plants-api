import { intArg, core } from "@nexus/schema";

export const requiredInt = (opts: core.ScalarArgConfig<number>) => {
  return intArg({ ...opts, required: true });
};
