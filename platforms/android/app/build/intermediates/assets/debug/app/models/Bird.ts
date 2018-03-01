import { Injectable } from '@angular/core';
import { AnimationEntity } from './AnimationEntity';
import { TNSPlayer } from 'nativescript-audio';
import { isAndroid } from 'tns-core-modules/platform';

@Injectable()
export class Bird extends AnimationEntity {

    // The offset position of the background sprite for the bird
    positionOffset = 0;
    // The delay for the FPS
    animationDelay = 150;
    // Velocity change when a user jumps the bird
    jumpVelocity = -5;
    // Rotation of the image used for diving sequence
    rotation = 0;
    // The vertical positioning of the entity
    position = -60;
    // The velocity of the bird as gravity takes effect
    velocity = 0;
    // Size
    size = 10;
    // This determinate if the round exist or no
    exist = true;

    constructor() {
        super();
    }

    /**
     * Resets the bird model back to default
     */
    reset(): void {
        this.velocity = 0;
        this.rotation = 0;
        this.position = 0;
        this.exist = true;
    }
    /**
     * Animates the bird to simulate flapping
     */
    animate(): void {
        const assetSize = isAndroid ? 25 : 24;
        this.startAnimation(() => {
            this.positionOffset -= assetSize;
            if (this.positionOffset <= -(assetSize * 4)) {
                this.positionOffset = 0;
            }
        });
    }

    /**
     * Handles the jump animation for the bird
     */
    jump(): void {
        // Only flap and play audio if the user has not crashed
        if (!this.hasCrashed) {
            this.velocity = this.jumpVelocity;
            this.rotation = Math.min((this.velocity / 10) * 90, 90);
            this.playTapAudio();        
        }
    }

    /**
     * Check altitude to prevent user from clipping past the ceiling barrier
     */
    checkAltitude(): void {
        if (this.position < -45) {
            this.position = -45;
        }
    }
    /**
     * Check size to destroy the round
     */
    checkSize(): void {
        if (this.size <= 1) {
            this.exist = false;
        }
    }
    /**
     * Checks if the bird has crashed, offsets rotation to solve UI problem
     */
    get hasCrashed(): boolean {
        const crashed = this.position > 590;
        if (crashed) {
            this.exist = false;
        }
        return crashed;
    }
    /**
     * Style implementation to leverage animations+ inside NativeScript
     */
    get styles(): string {
        return `
        background-position: 0 ${isAndroid ? 0 : this.positionOffset};
        rotate: ${this.rotation};`;
    }

    /**
     * Plays the death audio for the bird
     */
    playDeathAudio(): void {
        const deathAudio = new TNSPlayer();
        deathAudio.initFromFile({
            audioFile: '~/audio/destroy.mp3',
            loop: false
        });
        deathAudio.play();
    }
    playTapAudio(): void {
        const wingFlapAudio = new TNSPlayer();
        wingFlapAudio.initFromFile({
            audioFile: '~/audio/tap.mp3',
            loop: false
        });
        wingFlapAudio.play();
    }
    /**
     * Discount the size of the round
     */
    discountSize(): void {
        this.checkSize();
        this.size--;
    }
    
}
