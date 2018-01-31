"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AnimationEntity_1 = require("./AnimationEntity");
var Land = (function (_super) {
    __extends(Land, _super);
    function Land() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.animationDelay = 1000 / 20;
        return _this;
    }
    Land.prototype.animate = function () {
        var _this = this;
        this.position = 0;
        this.startAnimation(function () {
            _this.position += 20;
            if (_this.position > 330) {
                _this.position = 0;
            }
        });
    };
    Object.defineProperty(Land.prototype, "styles", {
        get: function () {
            return "background-position: " + this.position + " 0;";
        },
        enumerable: true,
        configurable: true
    });
    Land = __decorate([
        core_1.Injectable()
    ], Land);
    return Land;
}(AnimationEntity_1.AnimationEntity));
exports.Land = Land;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkxhbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MscURBQW9EO0FBR3BEO0lBQTBCLHdCQUFlO0lBRHpDO1FBQUEscUVBbUJDO1FBaEJHLG9CQUFjLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQzs7SUFnQi9CLENBQUM7SUFkRyxzQkFBTyxHQUFQO1FBQUEsaUJBUUM7UUFQRyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsY0FBYyxDQUFDO1lBQ2hCLEtBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDO1lBQ3BCLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDdEIsS0FBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7WUFDdEIsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHNCQUFJLHdCQUFNO2FBQVY7WUFDSSxNQUFNLENBQUMsMEJBQXdCLElBQUksQ0FBQyxRQUFRLFFBQUssQ0FBQztRQUN0RCxDQUFDOzs7T0FBQTtJQWhCUSxJQUFJO1FBRGhCLGlCQUFVLEVBQUU7T0FDQSxJQUFJLENBa0JoQjtJQUFELFdBQUM7Q0FBQSxBQWxCRCxDQUEwQixpQ0FBZSxHQWtCeEM7QUFsQlksb0JBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbmltYXRpb25FbnRpdHkgfSBmcm9tICcuL0FuaW1hdGlvbkVudGl0eSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMYW5kIGV4dGVuZHMgQW5pbWF0aW9uRW50aXR5IHtcblxuICAgIGFuaW1hdGlvbkRlbGF5ID0gMTAwMCAvIDIwO1xuXG4gICAgYW5pbWF0ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IDA7XG4gICAgICAgIHRoaXMuc3RhcnRBbmltYXRpb24oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiArPSAyMDtcbiAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uID4gMzMwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldCBzdHlsZXMoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAke3RoaXMucG9zaXRpb259IDA7YDtcbiAgICB9XG5cbn1cbiJdfQ==