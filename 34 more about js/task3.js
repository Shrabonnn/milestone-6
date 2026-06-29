 async function fetchJokes(){
    const res = await fetch('https://v2.jokeapi.dev/joke/Programming?type=signle')
    const data = await res.json();
    console.log(data)
 }
 fetchJokes()