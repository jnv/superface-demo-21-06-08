const {inspect} = require('util')
const { SuperfaceClient } = require('@superfaceai/one-sdk')
const sdk = new SuperfaceClient()

async function getRepos(username) {
  const profile = await sdk.getProfile('vcs/user-repos')
  const result = await profile.getUseCase('UserRepos').perform({user: username})
  return result.value.repos
}

async function main(username) {
  const repos = await getRepos(username)
  console.log(repos)
}

main(process.argv[2])