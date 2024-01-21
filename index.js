//Create a game that has 16 images
// every image has a duplicate
// randomly place the images on the screen
// when the user clicks on an image, it should flip using css transform
// if the user clicks on another image, it should flip using css transform
// if the user clicks on the same image, it should not flip using css transform
// if the user clicks on two images that are the same, they should disappear
// if the user clicks on two images that are not the same, they should flip back
// if user have a card already flipped, and didn't choose another card in 5 seconds, flip the card back
// if the user clicks on all the images, they should win
// create a button to reset the game and randomly place the images again
// If user didn't win, show a message that he lost
// HINT: Use Math.random() to randomly place the images
const images = [
  "https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1666008987698.jpg",
  "https://imageio.forbes.com/specials-images/imageserve/6064b148afc9b47d022718d1/Hennessey-Venom-F5/960x0.jpg?height=473&width=711&fit=bounds",
  "https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1700352000&semt=sph",
  "https://assets-eu-01.kc-usercontent.com/3b3d460e-c5ae-0195-6b86-3ac7fb9d52db/819061b6-7d77-4e3b-96af-1075fb2de5cb/Bugatti%20Chiron%20Super%20Sport%20300%2B.jpeg?width=800&fm=jpg&auto=format",
  "https://hips.hearstapps.com/hmg-prod/images/mclaren-gt-globaltestdrive-0009-1568995044.jpg?crop=0.704xw:0.704xh;0.248xw,0.296xh&resize=980:*",
  "https://img.freepik.com/free-photo/sports-car-races-through-dark-blurred-motion-generative-ai_188544-12490.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705622400&semt=ais",
  "https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1666008987698.jpg",
  "https://imageio.forbes.com/specials-images/imageserve/6064b148afc9b47d022718d1/Hennessey-Venom-F5/960x0.jpg?height=473&width=711&fit=bounds",
  "https://www.motortrend.com/uploads/2022/08/2022-Bugatti-Chiron-Super-Sport-2-1.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT19x31bB3ez6x_J8Sa0evFC9q8JzFG3DpYfg&usqp=CAU",
  "https://assets-eu-01.kc-usercontent.com/3b3d460e-c5ae-0195-6b86-3ac7fb9d52db/819061b6-7d77-4e3b-96af-1075fb2de5cb/Bugatti%20Chiron%20Super%20Sport%20300%2B.jpeg?width=800&fm=jpg&auto=format",
  "https://hips.hearstapps.com/hmg-prod/images/mclaren-gt-globaltestdrive-0009-1568995044.jpg?crop=0.704xw:0.704xh;0.248xw,0.296xh&resize=980:*",
  "https://img.freepik.com/free-photo/sports-car-races-through-dark-blurred-motion-generative-ai_188544-12490.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705622400&semt=ais",
  "https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1700352000&semt=sph",
  "https://www.motortrend.com/uploads/2022/08/2022-Bugatti-Chiron-Super-Sport-2-1.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT19x31bB3ez6x_J8Sa0evFC9q8JzFG3DpYfg&usqp=CAU",
];
const continer = document.createElement("div");
continer.setAttribute("class", "continer");
document.body.appendChild(continer);
let buttonn=document.createElement("button");
  buttonn.textContent="RESET GAME";
  buttonn.classList.add("btn")
  document.body.appendChild(buttonn);
  //buttonn.addEventListener("click",randomArray(images));
for (let index in images) {
  const content = document.createElement("div");
  var image = document.createElement("img");
  image.setAttribute("src", images[index]);
  continer.appendChild(content);
  image.classList.add("images");
  image.addEventListener("click",addSrc);
  content.appendChild(image);
}

function toggless(){
  this.classList.toggle('imagesflib');
}

const srcArray = [];
let clickedImages = 0;
function addSrc() {
 // srcArray.splice(0,srcArray.length);
  srcArray.push(image.src);
    if(srcArray[0]==srcArray[1]){
      console.log("the same");
      this.classList.toggle('hidden');
      console.log(srcArray);
      if (clickedImages = document.getElementsByTagName('img').length) {
          alert('فازت!');
    }
    }
    else{
        
        console.log("not same");
        this.classList.toggle('imagesflib');
        setTimeout(() => {
            event.target.classList.add("imageflib");
            }, 5000);
            alert("اعد المحاولة في وقت لاحق ");
          }
  
  
}
/*
function randomArray(array) {
  for(let i=0;i<=array.length;i++){
    const j= Math.random() *16;
    [array[i], array[j]] = [array[j], array[i]]
    
  }
}*/




