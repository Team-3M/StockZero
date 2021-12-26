const db  = require('./index.js');
const Produit = require('./Produit.js');



const insertSampleBlogs = function(produits) {
  Blog.create(produits)
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

