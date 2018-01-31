"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sky_1 = require("./../../../models/Sky");
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var SkyComponent = (function () {
    function SkyComponent() {
        this.row = 1;
    }
    SkyComponent.prototype.ngOnInit = function () {
        this.sky.animate();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Sky_1.Sky)
    ], SkyComponent.prototype, "sky", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], SkyComponent.prototype, "row", void 0);
    SkyComponent = __decorate([
        core_2.Component({
            selector: 'sky-object',
            moduleId: module.id,
            templateUrl: './sky.component.html',
            styleUrls: ['./sky.component.css']
        })
    ], SkyComponent);
    return SkyComponent;
}());
exports.SkyComponent = SkyComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2t5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNreS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2Q0FBNEM7QUFDNUMsc0NBQXNDO0FBQ3RDLHNDQUFrRDtBQVFsRDtJQU5BO1FBVWEsUUFBRyxHQUFHLENBQUMsQ0FBQztJQU1yQixDQUFDO0lBSkcsK0JBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQU5RO1FBQVIsWUFBSyxFQUFFO2tDQUFNLFNBQUc7NkNBQUM7SUFFVDtRQUFSLFlBQUssRUFBRTs7NkNBQVM7SUFKUixZQUFZO1FBTnhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztTQUNyQyxDQUFDO09BQ1csWUFBWSxDQVV4QjtJQUFELG1CQUFDO0NBQUEsQUFWRCxJQVVDO0FBVlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTa3kgfSBmcm9tICcuLy4uLy4uLy4uL21vZGVscy9Ta3knO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2t5LW9iamVjdCcsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogJy4vc2t5LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9za3kuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNreUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoKSBza3k6IFNreTtcblxuICAgIEBJbnB1dCgpIHJvdyA9IDE7XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5za3kuYW5pbWF0ZSgpO1xuICAgIH1cblxufVxuIl19