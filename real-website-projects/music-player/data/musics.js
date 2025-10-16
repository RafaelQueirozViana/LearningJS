class musicSystem {

    constructor() {
        this.musicList = ['neffex-inside', 'neffex-rain'];
        this.musicsLength = this.musicList.length - 1;
        this.currentMusic = 0;
    }

    pauseMusic(audioPlayer) {
        audioPlayer.pause();
    }

    playMusic(audioPlayer) {
        audioPlayer.play();
        console.log(this.currentMusic);
    }

    nextMusic(audioPlayer) {
        if (this.currentMusic === this.musicsLength) {
            this.currentMusic = 0
        }

        else {
            this.currentMusic++;

        }

        audioPlayer.src = `./src/audio/${this.musicList[this.currentMusic]}.mp3`

        console.log(this.currentMusic)
        console.log(this.musicList[this.currentMusic])
        // audioPlayer.play();







    }

    backMusic(audioPlayer) {

        if (this.currentMusic === 0) {
            this.currentMusic = this.musicsLength;
        }

        else {
            this.currentMusic--
        }

        audioPlayer.src = `./src/audio/${this.musicList[this.currentMusic]}.mp3`

        console.log(this.musicList[this.currentMusic])
        audioPlayer.play()


    }

}

export const musicManager = new musicSystem();