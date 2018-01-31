"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AnimationEntity_1 = require("./AnimationEntity");
var Sky = (function (_super) {
    __extends(Sky, _super);
    function Sky() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.animationDelay = 1000 / 20;
        return _this;
    }
    Sky.prototype.animate = function () {
        var _this = this;
        this.position = 0;
        this.startAnimation(function () {
            _this.position++;
            if (_this.position > 276) {
                _this.position = 0;
            }
        });
    };
    Object.defineProperty(Sky.prototype, "styles", {
        get: function () {
            return "background-position: " + this.position + " 0;";
        },
        enumerable: true,
        configurable: true
    });
    Sky = __decorate([
        core_1.Injectable()
    ], Sky);
    return Sky;
}(AnimationEntity_1.AnimationEntity));
exports.Sky = Sky;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2t5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU2t5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHFEQUFvRDtBQUdwRDtJQUF5Qix1QkFBZTtJQUR4QztRQUFBLHFFQW1CQztRQWhCRyxvQkFBYyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7O0lBZ0IvQixDQUFDO0lBZEcscUJBQU8sR0FBUDtRQUFBLGlCQVFDO1FBUEcsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUNoQixLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDaEIsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN0QixLQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztZQUN0QixDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsc0JBQUksdUJBQU07YUFBVjtZQUNJLE1BQU0sQ0FBQywwQkFBd0IsSUFBSSxDQUFDLFFBQVEsUUFBSyxDQUFDO1FBQ3RELENBQUM7OztPQUFBO0lBaEJRLEdBQUc7UUFEZixpQkFBVSxFQUFFO09BQ0EsR0FBRyxDQWtCZjtJQUFELFVBQUM7Q0FBQSxBQWxCRCxDQUF5QixpQ0FBZSxHQWtCdkM7QUFsQlksa0JBQUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbmltYXRpb25FbnRpdHkgfSBmcm9tICcuL0FuaW1hdGlvbkVudGl0eSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTa3kgZXh0ZW5kcyBBbmltYXRpb25FbnRpdHkge1xuXG4gICAgYW5pbWF0aW9uRGVsYXkgPSAxMDAwIC8gMjA7XG5cbiAgICBhbmltYXRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gMDtcbiAgICAgICAgdGhpcy5zdGFydEFuaW1hdGlvbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uKys7XG4gICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbiA+IDI3Nikge1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXQgc3R5bGVzKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgYmFja2dyb3VuZC1wb3NpdGlvbjogJHt0aGlzLnBvc2l0aW9ufSAwO2A7XG4gICAgfVxuXG59XG4iXX0=