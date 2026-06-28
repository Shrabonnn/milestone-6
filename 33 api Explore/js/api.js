const user = {
     id:1, name: "Rakib" , job: 'Actor'
}
const stringifed = JSON.stringify(user);

//console.log(user)
//console.log(stringifed)
const shop = {
    owner: 'Alia',
    address: {
        street: 'Kochukhet voot er goli',
        city : 'dhaka',
        county: 'BD'
    },
    products: ['laptop','mobile','monitor','keyboard'],
    revenue: 45000,
    isOpen : true,
    isNew : false
}
console.log(shop);
const shopJson = JSON.stringify(shop);
console.log(shopJson);
const parseJson = JSON.parse(shopJson);
console.log(parseJson)