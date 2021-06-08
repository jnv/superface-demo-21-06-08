const {inspect} = require('util')
const { SuperfaceClient } = require('@superfaceai/one-sdk')
const sdk = new SuperfaceClient()

async function getRepos(repoProvider, username) {
  const profile = await sdk.getProfile('vcs/user-repos')
  const provider = await sdk.getProvider(repoProvider);
  const result = await profile.getUseCase('UserRepos').perform({user: username}, {provider})
  return result.value.repos
}

async function main(repoProvider, username) {
  const repos = await getRepos(repoProvider, username)
  console.log(repos)
}

main(process.argv[2], process.argv[3])