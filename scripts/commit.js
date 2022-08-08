const execa = require('execa')
// 定义run方法
const run = (bin, args, opts = {}) => {
  return execa(bin, args, {
    stdio: 'inherit',
    ...opts
  })
}
async function main() {
  await run('git', ['add', '.'])
  await run('git', ['cz'])
  await run('git', ['pull'])
  await run('git', ['push'])
}
main().catch((err) => {
  console.log(err)
})
