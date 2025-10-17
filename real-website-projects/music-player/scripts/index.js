import { musicManager } from '../data/musics.js'

const backButton = document.querySelector('.back-button');
const toggleMusicButton = document.querySelector('.toggle-button');
const nextButton = document.querySelector('.next-button');

const audioPlayer = document.getElementById('audio-player');


const loadMusicPage = () => {

    const loadMusicHtml = () => {
        const musicDetails = musicManager.getMusicDetails();

        const musicImage = document.querySelector('.music-box__image');
        const musicText = document.querySelector('.music-box__name');
        const authorText = document.querySelector('.music-box__author-name');

        musicImage.src = musicDetails.image;
        musicText.textContent = musicDetails.name;
        authorText.textContent = musicDetails.author;
    }

    const addEventListeners = () => {
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
            toggleMusicButton.classList.replace('play', 'pause');
            loadMusicHtml()

        });

        backButton.addEventListener('click', () => {
            musicManager.backMusic(audioPlayer);
            toggleMusicButton.classList.replace('play', 'pause');
            loadMusicHtml();




        });
    }

    addEventListeners();
    loadMusicHtml();





};



loadMusicPage();