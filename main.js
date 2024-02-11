const baseUrl='https://api.giphy.com';
const apiKey='YWV6cQZuVWJwjMabuBcxhlqZzqSf5DLk';
const searchBtn=document.querySelector('.js-btn');
const container=document.querySelector('.js-container');
let userSearch=document.querySelector('.js-search');
let inputNumber=document.querySelector('.js-number');


searchBtn.addEventListener('click', async ()=>{
    let userSearchValue=userSearch.value;
    let inputNumberValue=inputNumber.value;
    if(userSearchValue==''||inputNumberValue==''){    // Here we check if the user filled both the input fields before running the code.
        alert('Please fill up both fields below')
        return 
    }
    container.innerHTML = '' // This line of empties the container every time you click so the previusly searched items disappear
    try{
       let response= await fetch(`${baseUrl}/v1/gifs/search?api_key=${apiKey}&q=${userSearchValue}&limit=${inputNumberValue}`) // fetch brings us response type promise.
       let responseJson= await response.json(); // in order to work with the response promise we use json() to swith it into json file.
       let imgUrl=responseJson.data
    
       for (let i=0; i<imgUrl.length; i++){ //Here we iterate the imgUrl array
         let html=container.innerHTML;
         container.innerHTML=html+`<img src=${imgUrl[i].images.original.url}'></img>` //Here we implant the img tag with src to the html file.
        }

    } catch(error){
        console.log(error)
      }
});


let btn=document.querySelector('.js-menu');
let nav=document.querySelector('ul');

btn.addEventListener('click', () => {   //this function is for hamburger menu.(mobile version)
     nav.classList.toggle('nav-display');
    
})
