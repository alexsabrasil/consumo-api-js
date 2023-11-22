const axios = require('axios');
const fetch = require('node-fetch');
const superagent = require('superagent');


async function getUsers() {
  try {
    const responseAxios = await axios.get('https://jsonplaceholder.typicode.com/users');
    const responseFetch = await fetch('https://jsonplaceholder.typicode.com/users');
    const responseSuperagent = await superagent.get('https://jsonplaceholder.typicode.com/users');

    console.log('Usuários (axios):', responseAxios.data);
    console.log('Usuários (fetch):', await responseFetch.json());
    console.log('Usuários (superagent):', responseSuperagent.body);
  } catch (error) {
    console.error('Erro ao obter usuários:', error.message);
  }
}

getUsers();
