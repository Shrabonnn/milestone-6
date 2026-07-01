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

    <div class="card-body p-4 pt-2 gap-1 text-sm ">
        <h2 class="card-title text-lg">${item.pet_name}</h2>
        <p>Breed: ${item.breed}</p>
        <p>Birth: ${item.date_of_birth}</p>
        <p>Gender: ${item.gender}</p>
        <p>Price: ${item.price}</p>
    </div>
    <div class="px-4">
        <div class="border-b border-gray-300"></div>
    </div>
    <div class="px-4 py-2" gap-2 >
        <div class="flex justify-between"> 
            <button class="btn" onclick="loadLikesPet(${item.petId})">
                <i class="fa-regular fa-thumbs-up"></i>
            </button>
            <button class="btn">Adopt</button>
            <button class="btn" onclick="loadDetails(${item.petId})">Details</button>
        </div>
    </div>
    
    
`;
       petSection.appendChild(petCard);

    })
}


const petDataObject ={
    "petId": 2,
    "breed": "Siamese",
    "category": "Cat",
    "date_of_birth": "2022-09-05",
    "price": 800,
    "image": "https://i.ibb.co.com/3Wzz41D/pet-2.jpg",
    "gender": "Female",
    "pet_details": "This affectionate female Siamese cat is known for her vocal nature and love for attention. Born on September 5, 2022, she enjoys interactive play and snuggles. Fully vaccinated and priced at $800, she's the perfect fit for cat lovers who appreciate an intelligent, engaging, and sociable feline companion.",
    "vaccinated_status": "Fully",
    "pet_name": "Mia"
}
const loadDetails = async (vid) => {

    try {
        const res = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${vid}`);
        const data = await res.json();
        console.log(data.petData)
        displayDetails(data.petData);
    } catch (error) {
        console.log(error)

    }
}

const displayDetails=(petData)=>{

    const detailContainer = document.getElementById('modal-content')

        detailContainer.innerHTML = `
        <div class="space-y-4">

            <!-- Image -->
            <img src="${petData.image}"
                class="w-full h-72 object-cover rounded-xl"
                alt="${petData.pet_name}">

            <!-- Pet Name -->
            <h2 class="text-3xl font-bold">${petData.pet_name}</h2>

            <!-- Info -->
            <div class="grid grid-cols-2 gap-y-3 text-gray-600">

                <p>Breed: ${petData.breed || "Not Available"}</p>
                <p>Birth: ${petData.date_of_birth || "Not Available"}</p>

                <p>Gender: ${petData.gender || "Not Available"}</p>
                <p>Price: ${petData.price ? "$" + petData.price : "Not Available"}</p>

                <p>Vaccinated: ${petData.vaccinated_status || "Not Available"}</p>

            </div>

            <hr>

            <!-- Details -->
            <div>
                <h3 class="font-bold text-lg mb-2">
                    Details Information
                </h3>

                <p class="text-gray-600 leading-7">
                    ${petData.pet_details || "No details available."}
                </p>
            </div>

        </div>
    `;
    //way1 
    //document.getElementById('showModalData').click();

    //way2 
    document.getElementById('customModal').showModal();
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
const loadLikesPet = async (vid) => {

    try {
        const res = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${vid}`);
        const data = await res.json();
        console.log(data.petData)
        displayLikedPetDetails(data.petData);
    } catch (error) {
        console.log(error)

    }
}
const displayLikedPetDetails=(petData)=>{
    const likeContainer = document.getElementById('liked-pets');
    
        const likedPet = document.createElement('div');
        // likedPet.classList = "p-2";

         likedPet.innerHTML = `
        <img
            src="${petData.image}"
            alt="${petData.pet_name}"
            class="w-full aspect-square object-cover rounded-lg">
    `;

    likeContainer.appendChild(likedPet);
    

}

loadCategory();
loadAllPets()
