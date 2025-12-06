const soundButtons = document.querySelectorAll('.sound-btn');
const volumeSlider = document.getElementById('volume');
const stopBtn = document.getElementById('stop-btn');

let currentAudio = null;

soundButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0; 
        }


        const soundSource = button.getAttribute('data-sound');
        currentAudio = new Audio(soundSource);
        currentAudio.volume = volumeSlider.value;
        currentAudio.play();
    });
});

stopBtn.addEventListener('click', () => {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null; 
    }
});

volumeSlider.addEventListener('input', () => {
    if (currentAudio) {
        currentAudio.volume = volumeSlider.value;
    }
});