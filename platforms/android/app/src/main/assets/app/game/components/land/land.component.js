"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Land_1 = require("./../../../models/Land");
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var LandComponent = (function () {
    function LandComponent() {
        this.row = 2;
    }
    LandComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Land_1.Land)
    ], LandComponent.prototype, "land", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], LandComponent.prototype, "row", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], LandComponent.prototype, "life", void 0);
    LandComponent = __decorate([
        core_2.Component({
            selector: 'land-object',
            moduleId: module.id,
            templateUrl: './land.component.html',
            styleUrls: ['./land.component.css']
        })
    ], LandComponent);
    return LandComponent;
}());
exports.LandComponent = LandComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsYW5kLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtDQUE4QztBQUM5QyxzQ0FBc0M7QUFDdEMsc0NBQWtEO0FBUWxEO0lBTkE7UUFVYSxRQUFHLEdBQUcsQ0FBQyxDQUFDO0lBT3JCLENBQUM7SUFIRyxnQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQVBRO1FBQVIsWUFBSyxFQUFFO2tDQUFPLFdBQUk7K0NBQUM7SUFFWDtRQUFSLFlBQUssRUFBRTs7OENBQVM7SUFFUjtRQUFSLFlBQUssRUFBRTs7K0NBQU07SUFOTCxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsYUFBYTtZQUN2QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csYUFBYSxDQVd6QjtJQUFELG9CQUFDO0NBQUEsQUFYRCxJQVdDO0FBWFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYW5kIH0gZnJvbSAnLi8uLi8uLi8uLi9tb2RlbHMvTGFuZCc7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdsYW5kLW9iamVjdCcsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbGFuZC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbGFuZC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTGFuZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoKSBsYW5kOiBMYW5kO1xuXG4gICAgQElucHV0KCkgcm93ID0gMjtcblxuICAgIEBJbnB1dCgpIGxpZmU7XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cbn1cbiJdfQ==