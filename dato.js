const token = 'f506bfb06577309f1d6108ce5e6385';
const fetch = require("node-fetch");

const query = {
  query: `{
    allCategories(filter: {parent: {exists: "Collections"}}) {
      name
    }
  }`
};

fetch(
  'https://graphql.datocms.com/environments/dato-test',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(query)
  }
)
  .then(res => res.json())
  .then((res) => {
    console.log(res.data);
  })
  .catch((error) => {
    console.log(error);
  });