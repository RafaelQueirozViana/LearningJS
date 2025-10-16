import { musicManager } from '../data/musics.js'

const backButton = document.querySelector('.back-button');
const toggleMusicButton = document.querySelector('.toggle-button');
const nextButton = document.querySelector('.next-button');

const audioPlayer = document.getElementById('audio-player');


toggleMusicButton.addEventListener('click', () => {
    if (toggleMusicButton.classList.contains('play')) {
        toggleMusicButton.classList.replace('play', 'pause')
        musicManager.playMusic(audioPlayer);
    }
    else {
        toggleMusicButton.classList.replace('pause', 'play')
        musicManager.pauseMusic(audioPlayer);

    }
});

nextButton.addEventListener('click', () => {
    musicManager.nextMusic(audioPlayer);
    toggleMusicButton.classList.replace('play', 'pause')
});

backButton.addEventListener('click', () => {
    musicManager.backMusic(audioPlayer);
    toggleMusicButton.classList.replace('play', 'pause')


});

