function removeActiveClass(){

    const button = document.getElementsByClassName('category-btn');
    for(let btn of button){
        btn.classList.remove('active')

    }
}

async function loadCategoryPets(categoryName){

     try {
        const res = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${categoryName}`);
        const data = await res.json();
        console.log(data.data);
        displayAllpets(data.data)


        removeActiveClass();

        const activeBtn = document.getElementById(`btn-${categoryName}`)
         activeBtn.classList.add('active')
        console.log(activeBtn)


        
    } catch (error) {
        console.log(error)

    }
}

const loadCategory = async() =>{
    try {
        const res = await fetch('https://openapi.programming-hero.com/api/peddy/categories');
        const data =await res.json();
        console.log(data.categories)
        displayCategory(data.categories)

    } catch (error) {
        
    }

}

const loadAllPets = async() =>{
    try {
        const res = await fetch(`https://openapi.programming-hero.com/api/peddy/pets`);
        const data =await res.json();
        console.log(data.pets);
        displayAllpets(data.pets);

    } catch (error) {
        
    }

}

// object 
const categoryObject = 
  {
    "id": 1,
    "category": "Cat",
    "category_icon": "https://i.ibb.co.com/N7dM2K1/cat.png"
}

// pet object
const petObject={
    "petId": 1,
    "breed": "Golden Retriever",
    "category": "Dog",
    "date_of_birth": "2023-01-15",
    "price": 1200,
    "image": "https://i.ibb.co.com/p0w744T/pet-1.jpg",
    "gender": "Male",
    "pet_details": "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog.",
    "vaccinated_status": "Fully",
    "pet_name": "Sunny"
}
const displayAllpets = (pets) =>{

    const petSection = document.getElementById('show-pet-section');
    
    petSection.innerHTML = "";


    

    if(pets.length == 0){
     
        petSection.classList.remove('grid');
        petSection.innerHTML=`
        <div class ="min-h-[300px] flex flex-col gap-5 justify-center items-center">
        <img src="assets/error.webp"/>
        <h2 class= "text-center text-xl font-bold">No Information Available</h2>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at
its layout. The point of using Lorem Ipsum is that it has a.</p>
        
        </div>
        `;
    }else{
        petSection.classList.add('grid');
    }

    pets.forEach(item=>{
        //console.log(item)

        // create grid for each pet
        const petCard = document.createElement('div');
        petCard.classList='card bg-base-100 shadow-sm'
        petCard.innerHTML = `
    <figure class="p-4 pb-0">
        <img
            src="${item.image}"
            alt="${item.pet_name}"
            class="rounded-xl w-full h-48 object-cover" />
    </figure>

    <div class="card-body p-4 pt-2 gap-1 text-sm">
        <h2 class="card-title text-lg">${item.pet_name}</h2>
        <p>Breed: ${item.breed}</p>
        <p>Birth: ${item.date_of_birth}</p>
        <p>Gender: ${item.gender}</p>
        <p>Price: ${item.price}</p>
    </div>
`;
       petSection.appendChild(petCard);

    })
}


const displayCategory = (pets) =>{

    const categoryButton = document.getElementById('category-btn');
    

    pets.forEach(item=>{
        //console.log(item)

        // create button for each category
        const buttonContainer = document.createElement('div');
        buttonContainer.innerHTML=`
        <button id ="btn-${item.category}" onclick="loadCategoryPets('${item.category}')" class="btn category-btn px-12 py-6 text-lg ">
        <img src="${item.category_icon}" alt="${item.category}" class="w-8 h-8">${item.category}
        </button>
        `;
        categoryButton.appendChild(buttonContainer)

    })
}


loadCategory();
loadAllPets()
