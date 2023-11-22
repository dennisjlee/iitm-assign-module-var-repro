let env = {};

function setEnv(newEnv) {
  console.log('setting env, env.foo is', newEnv.FOO);
  env = newEnv;
}

export { setEnv, env };