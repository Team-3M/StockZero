const db  = require('./index.js');
const Product = require('./Product.js');




const insertProduct = function() {
  Product.create()
    .then(() => {
      console.log("Database seeded successfully");
    })
    .catch((error) => {
      console.log("error seeding the database: ", error);
    })
    .finally(() => {
      db.close();
    });
};

