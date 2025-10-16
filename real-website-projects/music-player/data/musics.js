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
        console.log(this.currentMusic);


        if (this.currentMusic === this.musicsLength) {
            this.currentMusic = 0
        }

        else {
            this.currentMusic++;
            audioPlayer.src = this.musicList[this.currentMusic + 1];
            audioPlayer.play();
        }






    }

    backMusic(audioPlayer) {

        if (this.currentMusic === 0) {
            this.currentMusic = this.musicsLength;
        }



        audioPlayer.src = this.musicList[this.currentMusic - 1];
        audioPlayer.play();
    }

}

export const musicManager = new musicSystem();