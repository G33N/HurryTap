"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bird_component_1 = require("../bird/bird.component");
var splash_instruction_component_1 = require("../splash-instruction/splash-instruction.component");
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var index_1 = require("../../../models/index");
var GameEngine_1 = require("../../../models/GameEngine");
var GameComponent = (function () {
    function GameComponent(bird, ceiling, land, sky, engine, componentFactoryResolver) {
        this.bird = bird;
        this.ceiling = ceiling;
        this.land = land;
        this.sky = sky;
        this.engine = engine;
        this.componentFactoryResolver = componentFactoryResolver;
        // Determines if the game has started
        this.hasStarted = false;
        // The death state of the player
        this.dead = false;
        // Life
        this.life = 0;
        // Keep track of list of generated rounds for removal purposes
        this.rounds = [];
    }
    /**
     * On destroy - clean up animations and pause the game loop
     */
    GameComponent.prototype.ngOnDestroy = function () {
        this.stopAnimations();
        this.engine.pause();
    };
    /**
     * Handles when a user taps on the screen
     */
    GameComponent.prototype.screenPress = function () {
        // Starts the game only if it has not already started
        if (!this.hasStarted) {
            this.hasStarted = true;
            this.startGame();
        }
    };
    /**
     * Restart the game (the user selected replay)
     */
    GameComponent.prototype.restart = function () {
        this.dead = false;
        this.life = 100;
        this.bird.reset();
        this.bird.animate();
        this.land.animate();
        this.sky.animate();
        this.ceiling.animate();
        this.startGame();
    };
    /**
     * Starts the game
     * Dismisses splash screen and starts game loop for altitude changes
     */
    GameComponent.prototype.startGame = function () {
        var _this = this;
        // this.splashInstruction.dismiss(); // This cause a read property 'dismiss' undefined
        this.generateRounds();
        this.life = 100;
        alert(this.life);
        // This is where the engine works cicleExecution.
        this.engine.start(function () {
            _this.bird.velocity += GameEngine_1.GameEngine.GRAVITY;
            _this.bird.position += _this.bird.velocity;
            _this.bird.rotation = Math.min((_this.bird.velocity / 10) * 90, 90);
            if (_this.bird.hasCrashed) {
                _this.discountLife();
                // this.endGame();
            }
        });
    };
    /**
     * Ends the game
     * Marks the user as died, plays audio and pauses game loop
     */
    GameComponent.prototype.endGame = function () {
        this.dead = true;
        this.life = 0;
        this.stopAnimations();
        this.bird.playDeathAudio();
        this.engine.pause();
    };
    /**
     * Stops all active animations
     * Used for when the player has died
     */
    GameComponent.prototype.stopAnimations = function () {
        this.bird.stopAnimation();
        this.ceiling.stopAnimation();
        this.land.stopAnimation();
        this.sky.stopAnimation();
    };
    /**
     *  If round crashed discount life equal to the size
     */
    GameComponent.prototype.discountLife = function () {
        if (this.life > 0) {
            this.life = this.life - this.bird.size;
        }
        else {
            alert(this.life);
            this.endGame();
        }
    };
    GameComponent.prototype.generateRounds = function () {
        this.addRound(this.bird);
        // setTimeout(() => {
        // this.addRound(this.bird);
        //     alert('Round generated');
        // }, 1000);
    };
    GameComponent.prototype.addRound = function (round) {
        // check and resolve the component
        var comp = this.componentFactoryResolver.resolveComponentFactory(bird_component_1.BirdComponent);
        // Create component inside container
        var birdComponent = this.container.createComponent(comp, 0);
        birdComponent.instance.bird = round;
        // see explanations
        birdComponent.instance._ref = birdComponent;
    };
    __decorate([
        core_1.ViewChild(splash_instruction_component_1.SplashInstructionComponent),
        __metadata("design:type", splash_instruction_component_1.SplashInstructionComponent)
    ], GameComponent.prototype, "splashInstruction", void 0);
    __decorate([
        core_1.ViewChild('parent', { read: core_1.ViewContainerRef }),
        __metadata("design:type", core_1.ViewContainerRef)
    ], GameComponent.prototype, "container", void 0);
    GameComponent = __decorate([
        core_2.Component({
            selector: 'ns-game',
            moduleId: module.id,
            templateUrl: './game.component.html',
            styleUrls: ['./game.component.css'],
            entryComponents: [bird_component_1.BirdComponent]
        }),
        __metadata("design:paramtypes", [index_1.Bird,
            index_1.Ceiling,
            index_1.Land,
            index_1.Sky,
            GameEngine_1.GameEngine,
            core_1.ComponentFactoryResolver])
    ], GameComponent);
    return GameComponent;
}());
exports.GameComponent = GameComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnYW1lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlEQUF1RDtBQUN2RCxtR0FBZ0c7QUFDaEcsc0NBQXVHO0FBR3ZHLHNDQUEwQztBQUUxQywrQ0FBaUU7QUFDakUseURBQXdEO0FBU3hEO0lBY0ksdUJBQ1csSUFBVSxFQUNWLE9BQWdCLEVBQ2hCLElBQVUsRUFDVixHQUFRLEVBQ1AsTUFBa0IsRUFDbEIsd0JBQWtEO1FBTG5ELFNBQUksR0FBSixJQUFJLENBQU07UUFDVixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2hCLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixRQUFHLEdBQUgsR0FBRyxDQUFLO1FBQ1AsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUNsQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBZjlELHFDQUFxQztRQUNyQyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGdDQUFnQztRQUNoQyxTQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2IsT0FBTztRQUNQLFNBQUksR0FBRyxDQUFDLENBQUM7UUFDVCw4REFBOEQ7UUFDOUQsV0FBTSxHQUFHLEVBQUUsQ0FBQztJQVNSLENBQUM7SUFFTDs7T0FFRztJQUNILG1DQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxtQ0FBVyxHQUFYO1FBQ0kscURBQXFEO1FBQ3JELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdkIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3JCLENBQUM7SUFDTCxDQUFDO0lBQ0Q7O09BRUc7SUFDSCwrQkFB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SztRQUNsQixrQ0FBa0M7UUFDbEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLDhCQUFhLENBQUMsQ0FBQztRQUNoRixvQ0FBb0M7UUFDcEMsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzVELGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUNwQyxtQkFBbUI7UUFDbkIsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDO0lBQ2hELENBQUM7SUEzSHNDO1FBQXRDLGdCQUFTLENBQUMseURBQTBCLENBQUM7a0NBQW9CLHlEQUEwQjs0REFBQztJQUVwQztRQUFoRCxnQkFBUyxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSx1QkFBZ0IsRUFBRSxDQUFDO2tDQUFZLHVCQUFnQjtvREFBQztJQUpwRSxhQUFhO1FBUHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztZQUNuQyxlQUFlLEVBQUUsQ0FBRSw4QkFBYSxDQUFFO1NBQ3JDLENBQUM7eUNBZ0JtQixZQUFJO1lBQ0QsZUFBTztZQUNWLFlBQUk7WUFDTCxXQUFHO1lBQ0MsdUJBQVU7WUFDUSwrQkFBd0I7T0FwQnJELGFBQWEsQ0E4SHpCO0lBQUQsb0JBQUM7Q0FBQSxBQTlIRCxJQThIQztBQTlIWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJpcmRDb21wb25lbnQgfSBmcm9tICcuLi9iaXJkL2JpcmQuY29tcG9uZW50JztcbmltcG9ydCB7IFNwbGFzaEluc3RydWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vc3BsYXNoLWluc3RydWN0aW9uL3NwbGFzaC1pbnN0cnVjdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgT25EZXN0cm95LCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIFR5cGUsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInVpL2J1dHRvblwiO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEJpcmQsIENlaWxpbmcsIExhbmQsIFNreSB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9pbmRleCc7XG5pbXBvcnQgeyBHYW1lRW5naW5lIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL0dhbWVFbmdpbmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25zLWdhbWUnLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2dhbWUuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2dhbWUuY29tcG9uZW50LmNzcyddLFxuICAgIGVudHJ5Q29tcG9uZW50czogWyBCaXJkQ29tcG9uZW50IF1cbn0pXG5leHBvcnQgY2xhc3MgR2FtZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gICAgLy8gU3BsYXNoIGluc3RydWN0aW9uIGNvbXBvbmVudCByZWZlcmVuY2VkLCBhY2Nlc2VkIGZvciBhbmltYXRpbmcgZGlzbWlzc1xuICAgIEBWaWV3Q2hpbGQoU3BsYXNoSW5zdHJ1Y3Rpb25Db21wb25lbnQpIHNwbGFzaEluc3RydWN0aW9uOiBTcGxhc2hJbnN0cnVjdGlvbkNvbXBvbmVudDtcbiAgICAvLyBDb250YWluZXIgcmVmIHRvIGFkZCBhbmQgcmVtb3ZlIGNvbXBvbmVudCByb3VuZFxuICAgIEBWaWV3Q2hpbGQoJ3BhcmVudCcsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7IFxuICAgIC8vIERldGVybWluZXMgaWYgdGhlIGdhbWUgaGFzIHN0YXJ0ZWRcbiAgICBoYXNTdGFydGVkID0gZmFsc2U7XG4gICAgLy8gVGhlIGRlYXRoIHN0YXRlIG9mIHRoZSBwbGF5ZXJcbiAgICBkZWFkID0gZmFsc2U7XG4gICAgLy8gTGlmZVxuICAgIGxpZmUgPSAwO1xuICAgIC8vIEtlZXAgdHJhY2sgb2YgbGlzdCBvZiBnZW5lcmF0ZWQgcm91bmRzIGZvciByZW1vdmFsIHB1cnBvc2VzXG4gICAgcm91bmRzID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGJpcmQ6IEJpcmQsXG4gICAgICAgIHB1YmxpYyBjZWlsaW5nOiBDZWlsaW5nLFxuICAgICAgICBwdWJsaWMgbGFuZDogTGFuZCxcbiAgICAgICAgcHVibGljIHNreTogU2t5LFxuICAgICAgICBwcml2YXRlIGVuZ2luZTogR2FtZUVuZ2luZSxcbiAgICAgICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuICAgICkgeyB9XG5cbiAgICAvKipcbiAgICAgKiBPbiBkZXN0cm95IC0gY2xlYW4gdXAgYW5pbWF0aW9ucyBhbmQgcGF1c2UgdGhlIGdhbWUgbG9vcFxuICAgICAqL1xuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnN0b3BBbmltYXRpb25zKCk7XG4gICAgICAgIHRoaXMuZW5naW5lLnBhdXNlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlcyB3aGVuIGEgdXNlciB0YXBzIG9uIHRoZSBzY3JlZW5cbiAgICAgKi9cbiAgICBzY3JlZW5QcmVzcygpOiB2b2lkIHtcbiAgICAgICAgLy8gU3RhcnRzIHRoZSBnYW1lIG9ubHkgaWYgaXQgaGFzIG5vdCBhbHJlYWR5IHN0YXJ0ZWRcbiAgICAgICAgaWYgKCF0aGlzLmhhc1N0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaGFzU3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlc3RhcnQgdGhlIGdhbWUgKHRoZSB1c2VyIHNlbGVjdGVkIHJlcGxheSlcbiAgICAgKi9cbiAgICByZXN0YXJ0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRlYWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5saWZlID0gMTAwXG4gICAgICAgIHRoaXMuYmlyZC5yZXNldCgpO1xuICAgICAgICB0aGlzLmJpcmQuYW5pbWF0ZSgpO1xuICAgICAgICB0aGlzLmxhbmQuYW5pbWF0ZSgpO1xuICAgICAgICB0aGlzLnNreS5hbmltYXRlKCk7XG4gICAgICAgIHRoaXMuY2VpbGluZy5hbmltYXRlKCk7XG4gICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN0YXJ0cyB0aGUgZ2FtZVxuICAgICAqIERpc21pc3NlcyBzcGxhc2ggc2NyZWVuIGFuZCBzdGFydHMgZ2FtZSBsb29wIGZvciBhbHRpdHVkZSBjaGFuZ2VzXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGFydEdhbWUoKTogdm9pZCB7XG4gICAgICAgIC8vIHRoaXMuc3BsYXNoSW5zdHJ1Y3Rpb24uZGlzbWlzcygpOyAvLyBUaGlzIGNhdXNlIGEgcmVhZCBwcm9wZXJ0eSAnZGlzbWlzcycgdW5kZWZpbmVkXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVSb3VuZHMoKTtcbiAgICAgICAgdGhpcy5saWZlID0gMTAwO1xuICAgICAgICBhbGVydCh0aGlzLmxpZmUpO1xuICAgICAgICAvLyBUaGlzIGlzIHdoZXJlIHRoZSBlbmdpbmUgd29ya3MgY2ljbGVFeGVjdXRpb24uXG4gICAgICAgIHRoaXMuZW5naW5lLnN0YXJ0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYmlyZC52ZWxvY2l0eSArPSBHYW1lRW5naW5lLkdSQVZJVFk7XG4gICAgICAgICAgICB0aGlzLmJpcmQucG9zaXRpb24gKz0gdGhpcy5iaXJkLnZlbG9jaXR5O1xuICAgICAgICAgICAgdGhpcy5iaXJkLnJvdGF0aW9uID0gTWF0aC5taW4oKHRoaXMuYmlyZC52ZWxvY2l0eSAvIDEwKSAqIDkwLCA5MCk7XG4gICAgICAgICAgICBpZiAodGhpcy5iaXJkLmhhc0NyYXNoZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc2NvdW50TGlmZSgpO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuZW5kR2FtZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFbmRzIHRoZSBnYW1lXG4gICAgICogTWFya3MgdGhlIHVzZXIgYXMgZGllZCwgcGxheXMgYXVkaW8gYW5kIHBhdXNlcyBnYW1lIGxvb3BcbiAgICAgKi9cbiAgICBwcml2YXRlIGVuZEdhbWUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGVhZCA9IHRydWU7XG4gICAgICAgIHRoaXMubGlmZSA9IDA7XG4gICAgICAgIHRoaXMuc3RvcEFuaW1hdGlvbnMoKTtcbiAgICAgICAgdGhpcy5iaXJkLnBsYXlEZWF0aEF1ZGlvKCk7XG4gICAgICAgIHRoaXMuZW5naW5lLnBhdXNlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RvcHMgYWxsIGFjdGl2ZSBhbmltYXRpb25zXG4gICAgICogVXNlZCBmb3Igd2hlbiB0aGUgcGxheWVyIGhhcyBkaWVkXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdG9wQW5pbWF0aW9ucygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5iaXJkLnN0b3BBbmltYXRpb24oKTtcbiAgICAgICAgdGhpcy5jZWlsaW5nLnN0b3BBbmltYXRpb24oKTtcbiAgICAgICAgdGhpcy5sYW5kLnN0b3BBbmltYXRpb24oKTtcbiAgICAgICAgdGhpcy5za3kuc3RvcEFuaW1hdGlvbigpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiAgSWYgcm91bmQgY3Jhc2hlZCBkaXNjb3VudCBsaWZlIGVxdWFsIHRvIHRoZSBzaXplXG4gICAgICovXG4gICAgcHJpdmF0ZSBkaXNjb3VudExpZmUoKSB7XG4gICAgICAgICAgICBpZiggdGhpcy5saWZlID4gMCApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpZmUgPSB0aGlzLmxpZmUgLSB0aGlzLmJpcmQuc2l6ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxlcnQodGhpcy5saWZlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZEdhbWUoKTtcbiAgICAgICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdlbmVyYXRlUm91bmRzKCkge1xuICAgICAgICB0aGlzLmFkZFJvdW5kKHRoaXMuYmlyZCk7XG4gICAgICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmFkZFJvdW5kKHRoaXMuYmlyZCk7XG4gICAgICAgICAgICAvLyAgICAgYWxlcnQoJ1JvdW5kIGdlbmVyYXRlZCcpO1xuICAgICAgICAgICAgLy8gfSwgMTAwMCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRSb3VuZChyb3VuZCkge1xuICAgICAgICAvLyBjaGVjayBhbmQgcmVzb2x2ZSB0aGUgY29tcG9uZW50XG4gICAgICAgIHZhciBjb21wID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoQmlyZENvbXBvbmVudCk7XG4gICAgICAgIC8vIENyZWF0ZSBjb21wb25lbnQgaW5zaWRlIGNvbnRhaW5lclxuICAgICAgICB2YXIgYmlyZENvbXBvbmVudCA9IHRoaXMuY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjb21wLCAwKTtcbiAgICAgICAgYmlyZENvbXBvbmVudC5pbnN0YW5jZS5iaXJkID0gcm91bmQ7XG4gICAgICAgIC8vIHNlZSBleHBsYW5hdGlvbnNcbiAgICAgICAgYmlyZENvbXBvbmVudC5pbnN0YW5jZS5fcmVmID0gYmlyZENvbXBvbmVudDtcbiAgICB9XG59XG4iXX0=