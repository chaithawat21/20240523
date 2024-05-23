

// score changing color

const score = document.querySelectorAll('.score')


function handleClick(event) {
    const clickedButton = event.target;


    score.forEach(button => {
        button.classList.remove('scoreToggle');
    });


    clickedButton.classList.add('scoreToggle');
}

score.forEach(button => {
    button.addEventListener('click', handleClick);
});

// submit => thank you 


const submit = document.querySelector('.btnSub')
const ratingPage = document.querySelector('.ratingContainer')
const thankPage = document.querySelector('.thankContainer')


let scoreButtonClicked = false;


score.forEach(button => {
    button.addEventListener('click', () => {
        scoreButtonClicked = true;
    });
});


submit.addEventListener('click', () => {
    if (scoreButtonClicked) {
        ratingPage.style.display = "none";
        thankPage.style.display = "flex";
    }
});

// rating 1-5

const rating = document.querySelector('.rating')

score.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        rating.textContent = value;
    });
});