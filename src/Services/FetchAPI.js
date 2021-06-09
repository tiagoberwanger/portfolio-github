const fetch = require("node-fetch");

const fetchName = (formatedName) => {
  return fetch(`https://api.github.com/users/${formatedName}`)
  .then(response => response.json())
  .catch(error => console.error(error))
}

const fetchListRepos = (formatedName) => {
  return fetch(`https://api.github.com/users/${formatedName}/repos`)
  .then(response => response.json())
  .catch(error => console.error(error))
}

const fetchDetailedRepo = (formatedName, formatedRepo) => {
  return fetch(`https://api.github.com/repos/${formatedName}/${formatedRepo}`)
  .then(response => response.json())
  .catch(error => console.error(error))
}

export {
  fetchName,
  fetchListRepos,
  fetchDetailedRepo
}

