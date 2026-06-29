const loadCategories = async () => {

    try {
        const res = await fetch('https://openapi.programming-hero.com/api/phero-tube/categories');
        const data = await res.json();
        displayCategories(data.categories);
    } catch (error) {
        console.log(error)

    }
}

const loadVideos = async () => {

    try {
        const res = await fetch('https://openapi.programming-hero.com/api/phero-tube/videos');
        const data = await res.json();
        //console.log(data.videos);
        displayVideos(data.videos)
    } catch (error) {
        console.log(error)

    }
}
// {
//     "category_id": "1001",
//     "category": "Music"
// }

const displayCategories = (categories) => {

    const categoryContainer = document.getElementById('categories')

    categories.forEach(item => {
        console.log(item)
        // create a button for each item
        const button = document.createElement('button');
        button.classList = "btn";
        button.innerText = item.category;

        categoryContainer.appendChild(button)

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

    const videoContainer = document.getElementById('videos')

    videos.forEach(item => {
        console.log(item)
        // create a button for each item
        const card = document.createElement('div');
        card.classList = "card bg-base-100 shadow-sm w-full";
        card.innerHTML =
            `
         <figure>
    <img
      src=${item.thumbnail}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">
      ${item.title}
      <div class="badge badge-secondary">NEW</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <div class="badge badge-outline">Fashion</div>
      <div class="badge badge-outline">Products</div>
    </div>
  </div>
        `;
        videoContainer.appendChild(card);


    })
}



loadCategories();
loadVideos();