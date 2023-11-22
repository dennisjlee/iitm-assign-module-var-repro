import { setEnv } from "./env.js";
import {useEnv} from "./useEnv.js";

setEnv(process.env);
useEnv();