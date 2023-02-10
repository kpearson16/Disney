

let container = document.querySelector('.carousel');
let slides = document.querySelectorAll('.slide');

//Offset value for the slides container
let offset = 0;
//Slide ID 
let slideID = 0;

setInterval(() => {
  //Set offset to slide width
  offset = slides[0].offsetWidth;
  //Set container transition
  container.style.transition = "left ease-in-out";
  //Move slides container by negative offset 
  container.style.left = -offset + 'px';
  //Set a timeout
  setTimeout(() => {
    //Remove container transition
    container.style.transition = "none";
    //Move the current slide to the last position
    slides[slideID].style.order = slides.length -1;
    //Move the container back to the starting position
    container.style.left = 0;
    //Increment slide ID
    slideID++;
    //If the slide ID reaches the slides length
    if(slideID === slides.length) {
      //Set the slide ID to zero
      slideID = 0;
      //Select all slides
      slides.forEach(slide => {
        //Reset all slides order
        slide.style.order = "initial";
      });
    }
  }, 800);
}, 3000);

/*let selections = [
    {
    title: 'Mulan'
    poster: 'http://127.0.0.1:5500/images/download.jpeg'
    descr: 'Mulan always knew that she was more than what her reflection showed. Like a rare, beautiful flower that blossoms in the face of adversity, Mulan proves her worth outside of her tradition-bound society and becomes a legendary warrior. Through courage, passion, and determination, she defies the odds and proves that anything is possible when you believe in yourself, and find the courage to speak your mind.'
    },
    {
    title: 'The Little Mermaid'
    poster: 'https://lumiere-a.akamaihd.net/v1/images/p_disney_d23reveals_thelittlemermaid_v1_789_f44259ee.jpeg'
    descr: 'The Little Mermaid” is the beloved story of Ariel, a beautiful and spirited young mermaid with a thirst for adventure.'
    },
    {
    title: 'Fantasia'
    poster: 'https://lumiere-a.akamaihd.net/v1/images/p_fantasia_19641_cdb93769.jpeg'
    descr: 'This timeless masterpiece is an extravaganza of sight and sound! See the music come to life, hear the pictures burst into song and experience the excitement that is Fantasia over and over again. No family's Disney collection is complete without Fantasia!'
    }

]

const createSelections =() =>{
    selections.forEach((object)=>{
        createPosterSections(object)
})
}

const createPosterSections = (obj) => {
    //main div
    let second = document.querySelector('secondSection')
    secondSection.setAttribute('class', 'secondSection')
    //title
    let title = document.createElement('div')
    title.setAttribute('class', 'titleS')
    title.innerHTML = obj.title
    //poster div
    let section = document.createElement('div')
    section.setAttribute('class', 'selections')
    //post image
    let poster = document.createElement('img')
    poster.setAttribute('src', obj.image)
    poster.setAttribute('class', 'poster')
    //descrip
    let descr = document.createAttribute('div')
    descr.setAttribute('class', 'desc')
    descr.innerHTML = obj.descr
}

second.append(selections)
selections.append(poster)
selections.append(title)
selections.append(descr)
*/
