function convetSecondToTime(sec){
    const hour = parseInt(sec/3600);
    const min = parseInt(sec / 60);
    const remainSec = parseInt(sec % 60);
    return `${hour} hour ${min} mins ${remainSec} sec ago`;
}
function removeActiveClass(){

    const button = document.getElementsByClassName('category-btn');
    console.log("BUtoooonn"+button)
    for(let btn of button){
        btn.classList.remove('active')

    }
}
async function loadCategoryVideos(id){

    try {
        const res = await fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`);
        const data = await res.json();
        //console.log(data.category);

        displayVideos(data.category);

        // active button

        // shobai ke remove
        removeActiveClass();

        // id ke add
        const activeBtn = document.getElementById(`btn-${id}`);
        activeBtn.classList.add('active')
        console.log(activeBtn)
    } catch (error) {
        console.log(error)

    }
}


const loadCategories = async () => {

    try {
        const res = await fetch('https://openapi.programming-hero.com/api/phero-tube/categories');
        const data = await res.json();
        displayCategories(data.categories);
    } catch (error) {
        console.log(error)

    }
}


const loadVideos = async (searchText='') => {

    try {
        const res = await fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchText}`);
        const data = await res.json();
        //console.log(data.videos);
        displayVideos(data.videos)
    } catch (error) {
        console.log(error)

    }
}

const loadDetails = async (vid) => {

    try {
        const res = await fetch(`https://openapi.programming-hero.com/api/phero-tube/video/${vid}`);
        const data = await res.json();
        //console.log(data.video)
        displayDetails(data.video);
    } catch (error) {
        console.log(error)

    }
}

// {
//     "category_id": "1001",
//     "category": "Music"
// }


const displayDetails=(video)=>{

    const detailContainer = document.getElementById('modal-content')

    detailContainer.innerHTML=`
    <img src=${video.thumbnail}/>
    <p>${video.description}</p>
    `;
    //way1 
    //document.getElementById('showModalData').click();

    //way2 
    document.getElementById('customModal').showModal();
}

const displayCategories = (categories) => {

    const categoryContainer = document.getElementById('categories')

    categories.forEach(item => {
        console.log(item)
        // create a button for each item
        const buttonContainer = document.createElement('div');
        
        buttonContainer.innerHTML = `
        <button id ="btn-${item.category_id}" onclick="loadCategoryVideos(${item.category_id})" class="btn category-btn">${item.category}</button>
        `;

        categoryContainer.appendChild(buttonContainer)

    })
}



const cardDemo = {
    "category_id": "1003",
    "video_id": "aaaf",
    "thumbnail": "https://i.ibb.co/5LRQkKF/stick-and-stones.jpg",
    "title": "Sticks & Stones",
    "authors": [
        {
            "profile_picture": "https://i.ibb.co/rdTZrCM/dev.jpg",
            "profile_name": "Dave Chappelle",
            "verified": true
        }
    ],
    "others": {
        "views": "113K",
        "posted_date": ""
    },
    "description": "Dave Chappelle's 'Sticks & Stones' has garnered 113K views and remains a controversial yet highly engaging piece of stand-up comedy. Known for his fearless approach, Dave dives into a wide range of topics, delivering his unique perspective with wit and sharp humor. As a verified artist, Dave's comedy is raw, honest, and unapologetically funny."
}

const displayVideos = (videos) => {

    const videoContainer = document.getElementById('videos');
    videoContainer.innerHTML = "";

    if(videos.length == 0){
        videoContainer.classList.remove('grid');
        videoContainer.innerHTML=`
        <div class ="min-h-[300px] flex flex-col gap-5 justify-center items-center">
        <img src="assets/Icon.png"/>
        <h2 class= "text-center text-xl font-bold">No
        Content Here in this Category</h2>
        </div>
        `;
    }else{
        videoContainer.classList.add('grid');
    }

    videos.forEach(item => {
        console.log(item)
        // create a button for each item
        const card = document.createElement('div');
        card.classList = "card bg-base-100 shadow-sm w-full";
        card.innerHTML = `
   <figure class="h-[200px] relative">
    <img
      src=${item.thumbnail}
      class="h-full w-full object-cover"
      alt="Shoes" />
      ${
        item.others.posted_date?.length == 0 ? "" : `<span class="absolute text-xs right-2 bottom-2 bg-black text-white rounded p-1">${convetSecondToTime(item.others.posted_date)}</span>`

      }
      
      
  </figure>
  <div class="px-0 py-8 flex gap-2">
    <div >
       <img class= "w-10 h-10 rounded-full object-cover" src=${item.authors[0].profile_picture} /> 
    </div>
    <div>
       <h2 class="font-bold" >${item.title}</h2>
       <div class="flex items-center gap-2">
            <p class="text-gray-400">${item.authors[0].profile_name}</p>
            ${item.authors[0].verified ? ` <img class ="w-5" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" />` : ""}  
       </div>
       <p><button class="btn btn-sm btn-error" onclick="loadDetails('${item.video_id}')" >Details</button></p>
    </div>
    

  </div>
        `;
        videoContainer.appendChild(card);


    })
}


document.getElementById('search-input').addEventListener('keyup',(e)=>{
    loadVideos(e.target.value)
})
loadCategories();
loadVideos();
