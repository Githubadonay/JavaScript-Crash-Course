// synchronous javascript
// console.log("1")
// for( let i = 0; i < 100000000; i++ ){
//     //sitmulating a time- consuming action
// }
// console.log("2")
// console.log("3")
// console.log("4")

// Async javaScript PROMISE
// console.log("1");
// const fetchDataPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // fetch data from backend
//     // resolve("some data")
//     reject("error");
//   }, 2000);
// });
// fetch("https://jsonplaceholder.typicode.com/comments").then((data)=>{
// console.log(data.json())
// }).catch((error)=>{
//     console.log(error)

// });

// fetchDataPromise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error)
//   });

// async function fetchData(){
//     const response = await fetch("https://jsonplaceholder.typicode.com/comments")
// const data = await response.json()
// console.log(data)
// }
// fetchData()
// console.log("2");
// console.log("3");
// console.log("4");

// Fetch Data from these two APIs:

// https://jsonplaceholder.typicode.com/albums
// https://jsonplaceholder.typicode.com/photos

// Handle the response, then display the data in the console.

// For each API, implement the following methods once:

// 1. Using .then/.catch
fetch("https://jsonplaceholder.typicode.com/albums")
  .then((response) => {return response.json()}).then((data)=>{
    console.log(data)
  })
  fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => {return response.json()}).then((data)=>{
    console.log(data)
  })
  //;.catch(() => {});
// 2. Using Async/Await
async function fetchAlbumsData() {
    try{
  const albums = await fetch("https://jsonplaceholder.typicode.com/albums");
  const aData = await albums.json();
  console.log(aData);
}catch(e){
    console.log(e)
}
}

async function fetchPhoteData() {
try{
    const photos = await fetch("https://jsonplaceholder.typicode.com/photos");
    const pData = await photos.json();
    console.log( pData);
}catch(e){
    console.log(e)
}
}
fetchPhoteData();
fetchAlbumsData();
