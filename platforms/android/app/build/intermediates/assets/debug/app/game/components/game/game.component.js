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
        this.engine.playGameOverAudio();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnYW1lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlEQUF1RDtBQUN2RCxtR0FBZ0c7QUFDaEcsc0NBQXVHO0FBR3ZHLHNDQUEwQztBQUUxQywrQ0FBaUU7QUFDakUseURBQXdEO0FBU3hEO0lBY0ksdUJBQ1csSUFBVSxFQUNWLE9BQWdCLEVBQ2hCLElBQVUsRUFDVixHQUFRLEVBQ1AsTUFBa0IsRUFDbEIsd0JBQWtEO1FBTG5ELFNBQUksR0FBSixJQUFJLENBQU07UUFDVixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2hCLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixRQUFHLEdBQUgsR0FBRyxDQUFLO1FBQ1AsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUNsQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBZjlELHFDQUFxQztRQUNyQyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGdDQUFnQztRQUNoQyxTQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2IsT0FBTztRQUNQLFNBQUksR0FBRyxDQUFDLENBQUM7UUFDVCw4REFBOEQ7UUFDOUQsV0FBTSxHQUFHLEVBQUUsQ0FBQztJQVNSLENBQUM7SUFFTDs7T0FFRztJQUNILG1DQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxtQ0FBVyxHQUFYO1FBQ0kscURBQXFEO1FBQ3JELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdkIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3JCLENBQUM7SUFDTCxDQUFDO0lBQ0Q7O09BRUc7SUFDSCwrQkFB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LENBQUM7UUFDaEYsb0NBQW9DO1FBQ3BDLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1RCxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDcEMsbUJBQW1CO1FBQ25CLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQztJQUNoRCxDQUFDO0lBekhzQztRQUF0QyxnQkFBUyxDQUFDLHlEQUEwQixDQUFDO2tDQUFvQix5REFBMEI7NERBQUM7SUFFcEM7UUFBaEQsZ0JBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsdUJBQWdCLEVBQUUsQ0FBQztrQ0FBWSx1QkFBZ0I7b0RBQUM7SUFKcEUsYUFBYTtRQVB6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7WUFDbkMsZUFBZSxFQUFFLENBQUUsOEJBQWEsQ0FBRTtTQUNyQyxDQUFDO3lDQWdCbUIsWUFBSTtZQUNELGVBQU87WUFDVixZQUFJO1lBQ0wsV0FBRztZQUNDLHVCQUFVO1lBQ1EsK0JBQXdCO09BcEJyRCxhQUFhLENBNEh6QjtJQUFELG9CQUFDO0NBQUEsQUE1SEQsSUE0SEM7QUE1SFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCaXJkQ29tcG9uZW50IH0gZnJvbSAnLi4vYmlyZC9iaXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTcGxhc2hJbnN0cnVjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4uL3NwbGFzaC1pbnN0cnVjdGlvbi9zcGxhc2gtaW5zdHJ1Y3Rpb24uY29tcG9uZW50JztcbmltcG9ydCB7IE9uRGVzdHJveSwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBUeXBlLCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJ1aS9idXR0b25cIjtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBCaXJkLCBDZWlsaW5nLCBMYW5kLCBTa3kgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvaW5kZXgnO1xuaW1wb3J0IHsgR2FtZUVuZ2luZSB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9HYW1lRW5naW5lJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICducy1nYW1lJyxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9nYW1lLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9nYW1lLmNvbXBvbmVudC5jc3MnXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFsgQmlyZENvbXBvbmVudCBdXG59KVxuZXhwb3J0IGNsYXNzIEdhbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAgIC8vIFNwbGFzaCBpbnN0cnVjdGlvbiBjb21wb25lbnQgcmVmZXJlbmNlZCwgYWNjZXNlZCBmb3IgYW5pbWF0aW5nIGRpc21pc3NcbiAgICBAVmlld0NoaWxkKFNwbGFzaEluc3RydWN0aW9uQ29tcG9uZW50KSBzcGxhc2hJbnN0cnVjdGlvbjogU3BsYXNoSW5zdHJ1Y3Rpb25Db21wb25lbnQ7XG4gICAgLy8gQ29udGFpbmVyIHJlZiB0byBhZGQgYW5kIHJlbW92ZSBjb21wb25lbnQgcm91bmRcbiAgICBAVmlld0NoaWxkKCdwYXJlbnQnLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSkgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmOyBcbiAgICAvLyBEZXRlcm1pbmVzIGlmIHRoZSBnYW1lIGhhcyBzdGFydGVkXG4gICAgaGFzU3RhcnRlZCA9IGZhbHNlO1xuICAgIC8vIFRoZSBkZWF0aCBzdGF0ZSBvZiB0aGUgcGxheWVyXG4gICAgZGVhZCA9IGZhbHNlO1xuICAgIC8vIExpZmVcbiAgICBsaWZlID0gMDtcbiAgICAvLyBLZWVwIHRyYWNrIG9mIGxpc3Qgb2YgZ2VuZXJhdGVkIHJvdW5kcyBmb3IgcmVtb3ZhbCBwdXJwb3Nlc1xuICAgIHJvdW5kcyA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBiaXJkOiBCaXJkLFxuICAgICAgICBwdWJsaWMgY2VpbGluZzogQ2VpbGluZyxcbiAgICAgICAgcHVibGljIGxhbmQ6IExhbmQsXG4gICAgICAgIHB1YmxpYyBza3k6IFNreSxcbiAgICAgICAgcHJpdmF0ZSBlbmdpbmU6IEdhbWVFbmdpbmUsXG4gICAgICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcbiAgICApIHsgfVxuXG4gICAgLyoqXG4gICAgICogT24gZGVzdHJveSAtIGNsZWFuIHVwIGFuaW1hdGlvbnMgYW5kIHBhdXNlIHRoZSBnYW1lIGxvb3BcbiAgICAgKi9cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zdG9wQW5pbWF0aW9ucygpO1xuICAgICAgICB0aGlzLmVuZ2luZS5wYXVzZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgd2hlbiBhIHVzZXIgdGFwcyBvbiB0aGUgc2NyZWVuXG4gICAgICovXG4gICAgc2NyZWVuUHJlc3MoKTogdm9pZCB7XG4gICAgICAgIC8vIFN0YXJ0cyB0aGUgZ2FtZSBvbmx5IGlmIGl0IGhhcyBub3QgYWxyZWFkeSBzdGFydGVkXG4gICAgICAgIGlmICghdGhpcy5oYXNTdGFydGVkKSB7XG4gICAgICAgICAgICB0aGlzLmhhc1N0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXN0YXJ0IHRoZSBnYW1lICh0aGUgdXNlciBzZWxlY3RlZCByZXBsYXkpXG4gICAgICovXG4gICAgcmVzdGFydCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kZWFkID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGlmZSA9IDEwMFxuICAgICAgICB0aGlzLmJpcmQucmVzZXQoKTtcbiAgICAgICAgdGhpcy5iaXJkLmFuaW1hdGUoKTtcbiAgICAgICAgdGhpcy5sYW5kLmFuaW1hdGUoKTtcbiAgICAgICAgdGhpcy5za3kuYW5pbWF0ZSgpO1xuICAgICAgICB0aGlzLmNlaWxpbmcuYW5pbWF0ZSgpO1xuICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdGFydHMgdGhlIGdhbWVcbiAgICAgKiBEaXNtaXNzZXMgc3BsYXNoIHNjcmVlbiBhbmQgc3RhcnRzIGdhbWUgbG9vcCBmb3IgYWx0aXR1ZGUgY2hhbmdlc1xuICAgICAqL1xuICAgIHByaXZhdGUgc3RhcnRHYW1lKCk6IHZvaWQge1xuICAgICAgICAvLyB0aGlzLnNwbGFzaEluc3RydWN0aW9uLmRpc21pc3MoKTsgLy8gVGhpcyBjYXVzZSBhIHJlYWQgcHJvcGVydHkgJ2Rpc21pc3MnIHVuZGVmaW5lZFxuICAgICAgICB0aGlzLmdlbmVyYXRlUm91bmRzKCk7XG4gICAgICAgIHRoaXMubGlmZSA9IDEwMDtcbiAgICAgICAgLy8gVGhpcyBpcyB3aGVyZSB0aGUgZW5naW5lIHdvcmtzIGNpY2xlRXhlY3V0aW9uLlxuICAgICAgICB0aGlzLmVuZ2luZS5zdGFydCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmJpcmQudmVsb2NpdHkgKz0gR2FtZUVuZ2luZS5HUkFWSVRZO1xuICAgICAgICAgICAgdGhpcy5iaXJkLnBvc2l0aW9uICs9IHRoaXMuYmlyZC52ZWxvY2l0eTtcbiAgICAgICAgICAgIHRoaXMuYmlyZC5yb3RhdGlvbiA9IE1hdGgubWluKCh0aGlzLmJpcmQudmVsb2NpdHkgLyAxMCkgKiA5MCwgOTApO1xuICAgICAgICAgICAgaWYgKHRoaXMuYmlyZC5oYXNDcmFzaGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNjb3VudExpZmUoKTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmVuZEdhbWUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRW5kcyB0aGUgZ2FtZVxuICAgICAqIE1hcmtzIHRoZSB1c2VyIGFzIGRpZWQsIHBsYXlzIGF1ZGlvIGFuZCBwYXVzZXMgZ2FtZSBsb29wXG4gICAgICovXG4gICAgcHJpdmF0ZSBlbmRHYW1lKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRlYWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmxpZmUgPSAwO1xuICAgICAgICB0aGlzLnN0b3BBbmltYXRpb25zKCk7XG4gICAgICAgIHRoaXMuZW5naW5lLnBsYXlHYW1lT3ZlckF1ZGlvKCk7XG4gICAgICAgIHRoaXMuZW5naW5lLnBhdXNlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RvcHMgYWxsIGFjdGl2ZSBhbmltYXRpb25zXG4gICAgICogVXNlZCBmb3Igd2hlbiB0aGUgcGxheWVyIGhhcyBkaWVkXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdG9wQW5pbWF0aW9ucygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5iaXJkLnN0b3BBbmltYXRpb24oKTtcbiAgICAgICAgdGhpcy5jZWlsaW5nLnN0b3BBbmltYXRpb24oKTtcbiAgICAgICAgdGhpcy5sYW5kLnN0b3BBbmltYXRpb24oKTtcbiAgICAgICAgdGhpcy5za3kuc3RvcEFuaW1hdGlvbigpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiAgSWYgcm91bmQgY3Jhc2hlZCBkaXNjb3VudCBsaWZlIGVxdWFsIHRvIHRoZSBzaXplXG4gICAgICovXG4gICAgcHJpdmF0ZSBkaXNjb3VudExpZmUoKSB7XG4gICAgICAgICAgICBpZiggdGhpcy5saWZlID4gMCApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpZmUgPSB0aGlzLmxpZmUgLSB0aGlzLmJpcmQuc2l6ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmRHYW1lKCk7XG4gICAgICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZW5lcmF0ZVJvdW5kcygpIHtcbiAgICAgICAgdGhpcy5hZGRSb3VuZCh0aGlzLmJpcmQpO1xuICAgICAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5hZGRSb3VuZCh0aGlzLmJpcmQpO1xuICAgICAgICAgICAgLy8gICAgIGFsZXJ0KCdSb3VuZCBnZW5lcmF0ZWQnKTtcbiAgICAgICAgICAgIC8vIH0sIDEwMDApO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkUm91bmQocm91bmQpIHtcbiAgICAgICAgLy8gY2hlY2sgYW5kIHJlc29sdmUgdGhlIGNvbXBvbmVudFxuICAgICAgICB2YXIgY29tcCA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KEJpcmRDb21wb25lbnQpO1xuICAgICAgICAvLyBDcmVhdGUgY29tcG9uZW50IGluc2lkZSBjb250YWluZXJcbiAgICAgICAgdmFyIGJpcmRDb21wb25lbnQgPSB0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoY29tcCwgMCk7XG4gICAgICAgIGJpcmRDb21wb25lbnQuaW5zdGFuY2UuYmlyZCA9IHJvdW5kO1xuICAgICAgICAvLyBzZWUgZXhwbGFuYXRpb25zXG4gICAgICAgIGJpcmRDb21wb25lbnQuaW5zdGFuY2UuX3JlZiA9IGJpcmRDb21wb25lbnQ7XG4gICAgfVxufVxuIl19