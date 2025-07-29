const products = require("./products");

const search = (nom) => {
    for (const product of products) {
        if (nom === product.name) {
            console.log(product);
            return;
        }
    }
    console.log(`Produit "${nom}" non trouvé.`);
};

search("Book");

