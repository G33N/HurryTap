"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var splash_instruction_component_1 = require("./components/splash-instruction/splash-instruction.component");
var splash_scoreboard_component_1 = require("./components/splash-scoreboard/splash-scoreboard.component");
var sky_component_1 = require("./components/sky/sky.component");
var land_component_1 = require("./components/land/land.component");
var bird_component_1 = require("./components/bird/bird.component");
var game_component_1 = require("./components/game/game.component");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var GameModule = (function () {
    function GameModule() {
    }
    GameModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [
                game_component_1.GameComponent,
                bird_component_1.BirdComponent,
                land_component_1.LandComponent,
                sky_component_1.SkyComponent,
                splash_instruction_component_1.SplashInstructionComponent,
                splash_scoreboard_component_1.SplashScoreBoardComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], GameModule);
    return GameModule;
}());
exports.GameModule = GameModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnYW1lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZHQUEwRztBQUMxRywwR0FBdUc7QUFDdkcsZ0VBQThEO0FBQzlELG1FQUFpRTtBQUNqRSxtRUFBaUU7QUFDakUsbUVBQWlFO0FBQ2pFLHNDQUEyRDtBQUMzRCwwQ0FBK0M7QUFrQi9DO0lBQUE7SUFBMEIsQ0FBQztJQUFkLFVBQVU7UUFoQnRCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxxQkFBWTthQUNmO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDhCQUFhO2dCQUNiLDhCQUFhO2dCQUNiLDhCQUFhO2dCQUNiLDRCQUFZO2dCQUNaLHlEQUEwQjtnQkFDMUIsdURBQXlCO2FBQzVCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxVQUFVLENBQUk7SUFBRCxpQkFBQztDQUFBLEFBQTNCLElBQTJCO0FBQWQsZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTcGxhc2hJbnN0cnVjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zcGxhc2gtaW5zdHJ1Y3Rpb24vc3BsYXNoLWluc3RydWN0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTcGxhc2hTY29yZUJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NwbGFzaC1zY29yZWJvYXJkL3NwbGFzaC1zY29yZWJvYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTa3lDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2t5L3NreS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGFuZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9sYW5kL2xhbmQuY29tcG9uZW50JztcbmltcG9ydCB7IEJpcmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYmlyZC9iaXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHYW1lQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2dhbWUvZ2FtZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBHYW1lQ29tcG9uZW50LFxuICAgICAgICBCaXJkQ29tcG9uZW50LFxuICAgICAgICBMYW5kQ29tcG9uZW50LFxuICAgICAgICBTa3lDb21wb25lbnQsXG4gICAgICAgIFNwbGFzaEluc3RydWN0aW9uQ29tcG9uZW50LFxuICAgICAgICBTcGxhc2hTY29yZUJvYXJkQ29tcG9uZW50XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEdhbWVNb2R1bGUgeyB9XG4iXX0=