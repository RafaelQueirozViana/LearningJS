class musicSystem {



    constructor() {
        this.musicList = [
            {
                name: 'neffex-rain',
                author: 'neffex',
                image: 'https://i.scdn.co/image/ab67616d00001e02ef862ce3e11a0619c493478f',
                id: 1,
            }, {
                name: 'neffex-inside',
                author: 'neffex',
                image: 'https://i1.sndcdn.com/artworks-xXTdcy7omxVHzZ7K-83upCA-t1080x1080.jpg',
                id: 2,
            }

        ];
        this.musicsLength = this.musicList.length - 1;
        this.currentMusic = JSON.parse(localStorage.getItem('currentMusic')) || 0;
    }



    pauseMusic(audioPlayer) {
        audioPlayer.pause();
    }

    playMusic(audioPlayer) {
        audioPlayer.play();

    }

    nextMusic(audioPlayer) {
        console.log(this.currentMusic);

        if (this.currentMusic !== 1) {
            this.currentMusic++;

        }

        else {
            this.currentMusic = 0;
        }


        audioPlayer.src = `./src/audio/${this.musicList[this.currentMusic].name}.mp3`
        audioPlayer.play();





    }

    backMusic(audioPlayer) {

        if (this.currentMusic === 0) {
            this.currentMusic = this.musicsLength;
        }

        else {
            this.currentMusic--;
        }

        audioPlayer.src = `./src/audio/${this.musicList[this.currentMusic].name}.mp3`
        audioPlayer.play();






    }

    getMusicDetails() {
        const currentMusic = this.musicList[this.currentMusic];
        return currentMusic;
    }



}

export const musicManager = new musicSystem();

console.log(localStorage)

