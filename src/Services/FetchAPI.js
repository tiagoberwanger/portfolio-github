const fetch = require("node-fetch");

export function fetchName (formatedName) {
  fetch(`https://api.github.com/users/${formatedName}`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))
}

export function fetchListRepos (formatedName) {
  fetch(`https://api.github.com/users/${formatedName}/repos`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))
}

export function fetchDetailedRepo (formatedName, formatedRepo) {
  fetch(`https://api.github.com/repos/${formatedName}/${formatedRepo}`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))
}

//testing APIs
fetchName('tiagoberwanger');
fetchListRepos('tiagoberwanger');
fetchDetailedRepo('tiagoberwanger', 'portfolio-github');

