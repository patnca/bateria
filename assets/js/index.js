document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLowerCase());
});

document.querySelector('.composer__button').addEventListener('click', () => {
    let compose = document.querySelector('#composer__input').value;

    if(compose !== "") {
        let composeArr = compose.split('');
        playCompose(composeArr);
    }
});

function playSound(sound) {
    let audioElement = document.querySelector(`#js-sound-${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if(keyElement) {
        keyElement.classList.add('active');

        setTimeout(()=>{
            keyElement.classList.remove('active');
        }, 300);
    }
}

function playCompose(composeArr) {
    let wait = 0;

    for ( let composeItem of composeArr) {
        setTimeout(() => {
            playSound(`key${composeItem}`);
        }, wait);

        wait += 250;        
    }
}