import {env} from "./env.js";

export function useEnv() {
  console.log('using env from another module, env.FOO is', env.FOO);
}