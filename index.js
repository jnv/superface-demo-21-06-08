require('dotenv').config()
const { SuperfaceClient } = require('@superfaceai/one-sdk')
const sdk = new SuperfaceClient()

const MAIL_TO = 'jan.vlnas@superface.ai'

async function getRepos(repoProvider, username) {
  const profile = await sdk.getProfile('vcs/user-repos')
  const provider = await sdk.getProvider(repoProvider);
  const result = await profile.getUseCase('UserRepos').perform({user: username}, {provider})
  return result.value.repos
}

async function sendEmail(repos = []) {
  const profile = await sdk.getProfile('communication/send-email')
  const text = JSON.stringify(repos, undefined, 2)
  const result = await profile
    .getUseCase('SendEmail')
    .perform({to: MAIL_TO, subject: 'Your requested repositories', text})
  console.log(result)
}

async function main(repoProvider, username) {
  const repos = await getRepos(repoProvider, username)
  await sendEmail(repos)
  // console.log(repos)
}

main(process.argv[2], process.argv[3])