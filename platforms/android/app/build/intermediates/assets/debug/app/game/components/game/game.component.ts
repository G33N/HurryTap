import { BirdComponent } from '../bird/bird.component';
import { SplashInstructionComponent } from '../splash-instruction/splash-instruction.component';
import { OnDestroy, ComponentFactoryResolver, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { EventData } from "data/observable";
import { Button } from "ui/button";
import { Component } from '@angular/core';

import { Bird, Ceiling, Land, Sky } from '../../../models/index';
import { GameEngine } from '../../../models/GameEngine';

@Component({
    selector: 'ns-game',
    moduleId: module.id,
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css'],
    entryComponents: [ BirdComponent ]
})
export class GameComponent implements OnDestroy {
    // Splash instruction component referenced, accesed for animating dismiss
    @ViewChild(SplashInstructionComponent) splashInstruction: SplashInstructionComponent;
    // Container ref to add and remove component round
    @ViewChild('parent', { read: ViewContainerRef }) container: ViewContainerRef; 
    // Determines if the game has started
    hasStarted = false;
    // The death state of the player
    dead = false;
    // Life
    life = 0;
    // Keep track of list of generated rounds for removal purposes
    rounds = [];

    constructor(
        public bird: Bird,
        public ceiling: Ceiling,
        public land: Land,
        public sky: Sky,
        private engine: GameEngine,
        private componentFactoryResolver: ComponentFactoryResolver
    ) { }

    /**
     * On destroy - clean up animations and pause the game loop
     */
    ngOnDestroy() {
        this.stopAnimations();
        this.engine.pause();
    }

    /**
     * Handles when a user taps on the screen
     */
    screenPress(): void {
        // Starts the game only if it has not already started
        if (!this.hasStarted) {
            this.hasStarted = true;
            this.startGame();
        }
    }
    /**
     * Restart the game (the user selected replay)
     */
    restart(): void {
        this.dead = false;
        this.life = 100
        this.bird.reset();
        this.bird.animate();
        this.land.animate();
        this.sky.animate();
        this.ceiling.animate();
        this.startGame();
    }
    /**
     * Starts the game
     * Dismisses splash screen and starts game loop for altitude changes
     */
    private startGame(): void {
        // this.splashInstruction.dismiss(); // This cause a read property 'dismiss' undefined
        this.generateRounds();
        this.life = 100;
        alert(this.life);
        // This is where the engine works cicleExecution.
        this.engine.start(() => {
            this.bird.velocity += GameEngine.GRAVITY;
            this.bird.position += this.bird.velocity;
            this.bird.rotation = Math.min((this.bird.velocity / 10) * 90, 90);
            if (this.bird.hasCrashed) {
                this.discountLife();
                // this.endGame();
            }
        });
    }

    /**
     * Ends the game
     * Marks the user as died, plays audio and pauses game loop
     */
    private endGame(): void {
        this.dead = true;
        this.life = 0;
        this.stopAnimations();
        this.bird.playDeathAudio();
        this.engine.pause();
    }

    /**
     * Stops all active animations
     * Used for when the player has died
     */
    private stopAnimations(): void {
        this.bird.stopAnimation();
        this.ceiling.stopAnimation();
        this.land.stopAnimation();
        this.sky.stopAnimation();
    }
    /**
     *  If round crashed discount life equal to the size
     */
    private discountLife() {
            if( this.life > 0 ) {
                this.life = this.life - this.bird.size;
            } else {
                alert(this.life);
                this.endGame();
            }
    }

    private generateRounds() {
        this.addRound(this.bird);
            // setTimeout(() => {
                // this.addRound(this.bird);
            //     alert('Round generated');
            // }, 1000);
    }

    private addRound(round) {
        // check and resolve the component
        var comp = this.componentFactoryResolver.resolveComponentFactory(BirdComponent);
        // Create component inside container
        var birdComponent = this.container.createComponent(comp, 0);
        birdComponent.instance.bird = round;
        // see explanations
        birdComponent.instance._ref = birdComponent;
    }
}
