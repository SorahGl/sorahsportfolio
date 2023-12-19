let image1 = document.getElementById('gitbash');
let image2 = document.getElementById('wordle');
let image3 = document.getElementById('portfolio');
let image4 = document.getElementById('hangman');
let button1 = document.getElementById('button1');
let project = document.getElementsByClassName('project-div');
let info = document.getElementsByClassName('info');

function seeMore() {
    button1.innerHTML === 'See Less'? button1.innerHTML = 'See More Projects' : button1.innerHTML = 'See Less' ;
    image1.hidden === false? image1.hidden = true : image1.hidden = false;
    image2.hidden === false? image2.hidden = true : image2.hidden = false;
    image3.hidden === false? image3.hidden = true : image3.hidden = false;
    image4.hidden === false? image4.hidden = true : image4.hidden = false;
}

function buttonEvents(button1) {
  button1.addEventListener('click', seeMore);
} 

const projectEvents = () => {
  for (let i = 0; i < project.length; i++) {
        project[i].addEventListener('mouseenter', function showLinks() {
            
            info[i].style.display = 'flex';
            info[i].style.transition = 'all 2s ease-in-out';
         } )
    }     
  }
        

const projectNonEvents = () => {
  for (let i = 0; i < project.length; i++) {
        project[i].addEventListener('mouseleave', function dontShowLinks() {
        info[i].style.display = 'none';
        });
    }
}


projectEvents();
projectNonEvents();
buttonEvents(button1);