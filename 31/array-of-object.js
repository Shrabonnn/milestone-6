const products = [
    { id: 1, name: 'Lenovo', price: 400 },
    { id: 2, name: 'HP', price: 500 },
    { id: 3, name: 'Dell', price: 450 },
    { id: 4, name: 'Asus', price: 550 },
    { id: 5, name: 'Acer', price: 350 },
    { id: 6, name: 'MacBook', price: 1200 }
];

//console.log(products);

//map
const names =  products.map(p=> p.name)
//console.log(names);

const prices =  products.map(p=> p.price)
//console.log(prices);

//ForEach
const Productsname =  products.forEach(p=> console.log(p.name));
console.log(Productsname)


//Filter
const Productsfilter =  products.filter(p=> p.price>400);
console.log(Productsfilter)

//Filter
const Productsfind =  products.filter(p=> p.price<400);
console.log(Productsfind)
