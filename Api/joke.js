const jokeContainer=document.getElementById("joke")
const btn=document.getElementById("btn")
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

async function getjoke(){
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    jokeContainer.textContent = data.joke;
}
btn.addEventListener("click",function(){
    getjoke();
});
getjoke();
