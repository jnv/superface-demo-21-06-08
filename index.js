const { SuperfaceClient } = require('@superfaceai/one-sdk')

async function getRepos(username) {
  return []
}

async function main() {
  const repos = await getRepos('github')
  console.log(repos)
}