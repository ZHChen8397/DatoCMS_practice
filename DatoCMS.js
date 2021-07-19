const { SiteClient } = require('datocms-client');
const client = new SiteClient('', {
  environment: 'test-migration'
},
);

// correct way to filter
async function getFilteredRecords() {
  const records = await client.items.all({
    filter: { 
      type: "testmodel",
      fields: {
        testtitle: {eq: "test1"}
      },
    }
  });
  console.log(records);
}
getFilteredRecords();

// I can not use this way to get the record

async function getFilteredRecords() {
  const records = await client.items.all({
    nested: 'true',
    'filter[type]': 'testmodel',
    'filter[fields][testtitle][eq]': 'test2',
    'page[offset]': 2,
    'page[limit]': 15,
    })
  console.log(records);
}
getFilteredRecords();







// create a new record
// async function createRecord() {
//   const record = await client.items.create({
//     itemType: "968759", // this is using number model ID ex. model name: testmodel, model id: 968759
//     testtitle: "auto create title", // this is using the filed name of the ID ex filed name: testtitle, filed id: 4647886
//   });
//   console.log(record);
// }
// createRecord();

// Duplucate a record
// const itemId = '47957034';  // record ID
// client.items.duplicate(itemId)
// .then((item) => {
//   console.log(item);
// })
// .catch((error) => {
//   console.error(error);
// });

// Update a record
// const itemId = "47964243";
// client.items.update(itemId, {
//     testtitle: "[EDIT] auto create title",
//   })
//   .then((item) => {
//     console.log(item);
//   })
//   .catch((error) => {
//     console.error(error);
//   });


// Destroy a record
// const itemId = "47964243";
// client.items.destroy(itemId)
// .then((item) => {
//   console.log(item);
// })
// .catch((error) => {
//   console.error(error);
// });