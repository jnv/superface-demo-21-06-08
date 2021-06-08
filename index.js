require('dotenv').config()

async function getRepos(username) {
  return []
}

async function main(username) {
  const repos = await getRepos(username)
  console.log(repos)
}

main(process.argv[2])
