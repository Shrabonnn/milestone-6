console.log("post")
function fetchData(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => showData(data))
}
function showData(data){
    const ul = document.getElementById('post-list');
    const postContainer = document.getElementById('post-container');
    for(const post of data){
        console.log(post)
    
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
        <h4>User-ID: ${post.userId}</h4>
        <h5>Title : ${post.title}</h5>
        <p>Description ${post.body}</p>
        `;
        postContainer.appendChild(div);
    }
    
}