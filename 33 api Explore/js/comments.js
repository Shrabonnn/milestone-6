function fetchComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => loadComments(data))
        .catch(error => console.error('Error happend', error))

}


async function fetchComments2() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await res.json();
        console.log(data)
    }catch(error){
        console.log('Data load Error')
    }

    
}


function loadComments(data) {
    console.log(data)
}