"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SplashInstructionComponent = (function () {
    function SplashInstructionComponent() {
        this.onStart = new core_1.EventEmitter();
    }
    SplashInstructionComponent.prototype.dismiss = function () {
        if (this.splashImage && this.splashImage.nativeElement) {
            this.splashImage.nativeElement.animate({
                opacity: 0,
                duration: 500
            });
        }
    };
    SplashInstructionComponent.prototype.start = function () {
        this.onStart.next(true);
    };
    __decorate([
        core_1.ViewChild('splash'),
        __metadata("design:type", core_1.ElementRef)
    ], SplashInstructionComponent.prototype, "splashImage", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], SplashInstructionComponent.prototype, "onStart", void 0);
    SplashInstructionComponent = __decorate([
        core_1.Component({
            selector: 'splash-instruction',
            moduleId: module.id,
            templateUrl: './splash-instruction.component.html',
            styleUrls: ['./splash-instruction.component.css']
        })
    ], SplashInstructionComponent);
    return SplashInstructionComponent;
}());
exports.SplashInstructionComponent = SplashInstructionComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsYXNoLWluc3RydWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNwbGFzaC1pbnN0cnVjdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBK0Y7QUFRL0Y7SUFOQTtRQVNjLFlBQU8sR0FBMEIsSUFBSSxtQkFBWSxFQUFFLENBQUM7SUFlbEUsQ0FBQztJQWJHLDRDQUFPLEdBQVA7UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7Z0JBQ25DLE9BQU8sRUFBRSxDQUFDO2dCQUNWLFFBQVEsRUFBRSxHQUFHO2FBQ2hCLENBQUMsQ0FBQztRQUNQLENBQUM7SUFDTCxDQUFDO0lBRUQsMENBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFkb0I7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQWMsaUJBQVU7bUVBQUM7SUFDbkM7UUFBVCxhQUFNLEVBQUU7a0NBQVUsbUJBQVk7K0RBQStCO0lBSHJELDBCQUEwQjtRQU50QyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHFDQUFxQztZQUNsRCxTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQztTQUNwRCxDQUFDO09BQ1csMEJBQTBCLENBa0J0QztJQUFELGlDQUFDO0NBQUEsQUFsQkQsSUFrQkM7QUFsQlksZ0VBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE91dHB1dCwgT25Jbml0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzcGxhc2gtaW5zdHJ1Y3Rpb24nLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NwbGFzaC1pbnN0cnVjdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vc3BsYXNoLWluc3RydWN0aW9uLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTcGxhc2hJbnN0cnVjdGlvbkNvbXBvbmVudCB7XG5cbiAgICBAVmlld0NoaWxkKCdzcGxhc2gnKSBzcGxhc2hJbWFnZTogRWxlbWVudFJlZjtcbiAgICBAT3V0cHV0KCkgb25TdGFydDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgZGlzbWlzcygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuc3BsYXNoSW1hZ2UgJiYgdGhpcy5zcGxhc2hJbWFnZS5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnNwbGFzaEltYWdlLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLm9uU3RhcnQubmV4dCh0cnVlKTtcbiAgICB9XG5cbn1cbiJdfQ==