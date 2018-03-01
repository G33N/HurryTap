import { TNSPlayer } from 'nativescript-audio';

export class GameEngine {

    static GRAVITY = 0.10;

    private fps = 1000 / 60; // 60fps

    private gameLoop: any;
    // The audio sequence for the game over
    gameOverAudio: TNSPlayer;

    start(executionCycle: Function): void {
        this.gameLoop = setInterval(() => {
            executionCycle();
        }, this.fps);
    }

    pause(): void {
        clearTimeout(this.gameLoop);
    }

    playGameOverAudio(): void {
        const gameOverAudio = new TNSPlayer();
        gameOverAudio.initFromFile({
            audioFile: '~/audio/gameOver.mp3',
            loop: false
        });
        gameOverAudio.play();
    }

}
