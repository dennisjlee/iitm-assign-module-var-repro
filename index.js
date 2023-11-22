import { setEnv } from "./env.js";
import {useEnv} from "./useEnv.js";

setEnv({ FOO: 'bar'});
useEnv();