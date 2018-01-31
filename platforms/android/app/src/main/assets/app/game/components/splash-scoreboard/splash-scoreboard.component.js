"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_1 = require("tns-core-modules/platform");
var SplashScoreBoardComponent = (function () {
    function SplashScoreBoardComponent() {
        this.onReplay = new core_1.EventEmitter();
    }
    SplashScoreBoardComponent.prototype.ngOnInit = function () {
        this.replayOffset = (platform_1.screen.mainScreen.widthDIPs / 2) - 60; // Half screen width - Half image width = center
        this.replayBtn.nativeElement.translateX = this.replayOffset;
        this.replayBtn.nativeElement.animate({
            opacity: 1.0,
            duration: 400
        });
        this.replayBtn.nativeElement.animate({
            translate: {
                x: this.replayOffset,
                y: 0
            },
            duration: 400
        });
    };
    SplashScoreBoardComponent.prototype.replay = function () {
        this.onReplay.next(true);
    };
    __decorate([
        core_1.ViewChild('replayBtn'),
        __metadata("design:type", core_1.ElementRef)
    ], SplashScoreBoardComponent.prototype, "replayBtn", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], SplashScoreBoardComponent.prototype, "onReplay", void 0);
    SplashScoreBoardComponent = __decorate([
        core_1.Component({
            selector: 'splash-scoreboard',
            moduleId: module.id,
            templateUrl: './splash-scoreboard.component.html',
            styleUrls: ['./splash-scoreboard.component.css']
        })
    ], SplashScoreBoardComponent);
    return SplashScoreBoardComponent;
}());
exports.SplashScoreBoardComponent = SplashScoreBoardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsYXNoLXNjb3JlYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3BsYXNoLXNjb3JlYm9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQStGO0FBRS9GLHNEQUFtRDtBQVFuRDtJQU5BO1FBVWMsYUFBUSxHQUEwQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQXlCbkUsQ0FBQztJQXJCRyw0Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLGlCQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxnREFBZ0Q7UUFDNUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFFNUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1lBQ2pDLE9BQU8sRUFBRSxHQUFHO1lBQ1osUUFBUSxFQUFFLEdBQUc7U0FDaEIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1lBQ2pDLFNBQVMsRUFBRTtnQkFDUCxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVk7Z0JBQ3BCLENBQUMsRUFBRSxDQUFDO2FBQ1A7WUFDRCxRQUFRLEVBQUUsR0FBRztTQUNoQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsMENBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUF6QnVCO1FBQXZCLGdCQUFTLENBQUMsV0FBVyxDQUFDO2tDQUFZLGlCQUFVO2dFQUFDO0lBRXBDO1FBQVQsYUFBTSxFQUFFO2tDQUFXLG1CQUFZOytEQUErQjtJQUp0RCx5QkFBeUI7UUFOckMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxvQ0FBb0M7WUFDakQsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7U0FDbkQsQ0FBQztPQUNXLHlCQUF5QixDQTZCckM7SUFBRCxnQ0FBQztDQUFBLEFBN0JELElBNkJDO0FBN0JZLDhEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBPdXRwdXQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IHNjcmVlbiB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm0nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3NwbGFzaC1zY29yZWJvYXJkJyxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zcGxhc2gtc2NvcmVib2FyZC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vc3BsYXNoLXNjb3JlYm9hcmQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNwbGFzaFNjb3JlQm9hcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQFZpZXdDaGlsZCgncmVwbGF5QnRuJykgcmVwbGF5QnRuOiBFbGVtZW50UmVmO1xuXG4gICAgQE91dHB1dCgpIG9uUmVwbGF5OiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICByZXBsYXlPZmZzZXQ6IG51bWJlcjtcblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnJlcGxheU9mZnNldCA9IChzY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHMgLyAyKSAtIDYwOyAvLyBIYWxmIHNjcmVlbiB3aWR0aCAtIEhhbGYgaW1hZ2Ugd2lkdGggPSBjZW50ZXJcbiAgICAgICAgdGhpcy5yZXBsYXlCdG4ubmF0aXZlRWxlbWVudC50cmFuc2xhdGVYID0gdGhpcy5yZXBsYXlPZmZzZXQ7XG5cbiAgICAgICAgdGhpcy5yZXBsYXlCdG4ubmF0aXZlRWxlbWVudC5hbmltYXRlKHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDEuMCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiA0MDBcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVwbGF5QnRuLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh7XG4gICAgICAgICAgICB0cmFuc2xhdGU6IHtcbiAgICAgICAgICAgICAgICB4OiB0aGlzLnJlcGxheU9mZnNldCxcbiAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZHVyYXRpb246IDQwMFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXBsYXkoKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25SZXBsYXkubmV4dCh0cnVlKTtcbiAgICB9XG5cbn1cbiJdfQ==