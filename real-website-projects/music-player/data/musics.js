class musicSystem {

    constructor() {
        this.musicList = ['neffex-inside', 'neffex-rain', 'neffex-other'];
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

        audioPlayer.src = `./src/audio/${this.musicList[this.currentMusic]}`

        console.log(this.currentMusic)
        console.log(this.musicList[this.currentMusic])
        // audioPlayer.play();







    }

    backMusic(audioPlayer) {

        if (this.currentMusic === 0) {
            this.currentMusic = this.musicsLength;
        }

        audioPlayer.src = `./src/audio/${this.musicList[this.currentMusic - 1]}`;
        audioPlayer.play();
    }

}

export const musicManager = new musicSystem();