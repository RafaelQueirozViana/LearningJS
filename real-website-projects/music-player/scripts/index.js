import { musicManager } from '../data/musics.js'

const backButton = document.querySelector('.back-button');
const toggleMusicButton = document.querySelector('.toggle-music-button');
const nextButton = document.querySelector('.next-button');

const audioPlayer = document.getElementById('audio-player');




toggleMusicButton.addEventListener('click', () => {
    if (toggleMusicButton.classList.contains('pause')) {
        toggleMusicButton.src = "././src/images/skip-backicon.svg";
        toggleMusicButton.classList.remove('pause');
        toggleMusicButton.classList.add('play');
        musicManager.playMusic(audioPlayer);
    }
    else {
        toggleMusicButton.src = "././src/images/pause-icon.svg";
        toggleMusicButton.classList.remove('play');
        toggleMusicButton.classList.add('pause');
        musicManager.pauseMusic(audioPlayer);

    }
});

nextButton.addEventListener('click', () => {
    musicManager.nextMusic(audioPlayer);
});

backButton.addEventListener('click', () => {
    musicManager.backMusic(audioPlayer);

});

