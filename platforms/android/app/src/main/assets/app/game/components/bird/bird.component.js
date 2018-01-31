"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bird_1 = require("./../../../models/Bird");
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var BirdComponent = (function () {
    function BirdComponent() {
    }
    BirdComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bird.animate();
        setInterval(function () {
            if (!_this.bird.exist) {
                _this.removeObject();
            }
        }, 16.6);
    };
    Object.defineProperty(BirdComponent.prototype, "position", {
        get: function () {
            return 70 + this.bird.position;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Discount round size
     */
    BirdComponent.prototype.discountSize = function (args) {
        var button = args.object;
        this.bird.discountSize();
        this.bird.jump();
    };
    BirdComponent.prototype.removeObject = function () {
        this._ref.destroy();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Bird_1.Bird)
    ], BirdComponent.prototype, "bird", void 0);
    BirdComponent = __decorate([
        core_2.Component({
            selector: 'bird-player',
            moduleId: module.id,
            templateUrl: './bird.component.html',
            styleUrls: ['./bird.component.css']
        })
    ], BirdComponent);
    return BirdComponent;
}());
exports.BirdComponent = BirdComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiaXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLCtDQUE4QztBQUM5QyxzQ0FBc0M7QUFDdEMsc0NBQTBDO0FBVTFDO0lBQUE7SUE0QkEsQ0FBQztJQXZCRyxnQ0FBUSxHQUFSO1FBQUEsaUJBT0s7UUFORCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2hCLFdBQVcsQ0FBQztZQUNSLEVBQUUsQ0FBQSxDQUFDLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQSxDQUFDO2dCQUNqQixLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDeEIsQ0FBQztRQUNMLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFTCxzQkFBSSxtQ0FBUTthQUFaO1lBQ0ksTUFBTSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNuQyxDQUFDOzs7T0FBQTtJQUNEOztPQUVHO0lBQ0gsb0NBQVksR0FBWixVQUFhLElBQWU7UUFDeEIsSUFBSSxNQUFNLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUNELG9DQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUF6QlE7UUFBUixZQUFLLEVBQUU7a0NBQU8sV0FBSTsrQ0FBQztJQUZYLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ3RDLENBQUM7T0FDVyxhQUFhLENBNEJ6QjtJQUFELG9CQUFDO0NBQUEsQUE1QkQsSUE0QkM7QUE1Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJpcmQgfSBmcm9tICcuLy4uLy4uLy4uL21vZGVscy9CaXJkJztcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJ1aS9idXR0b25cIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdiaXJkLXBsYXllcicsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYmlyZC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vYmlyZC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQmlyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoKSBiaXJkOiBCaXJkO1xuICAgIF9yZWY6IGFueTtcblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJpcmQuYW5pbWF0ZSgpO1xuICAgICAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKCF0aGlzLmJpcmQuZXhpc3Qpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZU9iamVjdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDE2LjYpO1xuICAgICAgICB9XG5cbiAgICBnZXQgcG9zaXRpb24oKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIDcwICsgdGhpcy5iaXJkLnBvc2l0aW9uO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEaXNjb3VudCByb3VuZCBzaXplXG4gICAgICovXG4gICAgZGlzY291bnRTaXplKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgICAgICBsZXQgYnV0dG9uID0gPEJ1dHRvbj5hcmdzLm9iamVjdDsgICAgIFxuICAgICAgICB0aGlzLmJpcmQuZGlzY291bnRTaXplKCk7XG4gICAgICAgIHRoaXMuYmlyZC5qdW1wKCk7XG4gICAgfVxuICAgIHJlbW92ZU9iamVjdCgpIHtcbiAgICAgICAgdGhpcy5fcmVmLmRlc3Ryb3koKTtcbiAgICB9ICAgIFxufSJdfQ==