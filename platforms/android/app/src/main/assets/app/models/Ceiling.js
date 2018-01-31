"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AnimationEntity_1 = require("./AnimationEntity");
var Ceiling = (function (_super) {
    __extends(Ceiling, _super);
    function Ceiling() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.animationDelay = 1000 / 60;
        _this.position = 0;
        return _this;
    }
    Ceiling.prototype.animate = function () {
        var _this = this;
        this.startAnimation(function () {
            _this.position--;
            if (_this.position < -200) {
                _this.position = 0;
            }
        });
    };
    Object.defineProperty(Ceiling.prototype, "styles", {
        get: function () {
            return "background-position: " + this.position + " 0;";
        },
        enumerable: true,
        configurable: true
    });
    Ceiling = __decorate([
        core_1.Injectable()
    ], Ceiling);
    return Ceiling;
}(AnimationEntity_1.AnimationEntity));
exports.Ceiling = Ceiling;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2VpbGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNlaWxpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MscURBQW9EO0FBR3BEO0lBQTZCLDJCQUFlO0lBRDVDO1FBQUEscUVBb0JDO1FBakJHLG9CQUFjLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUUzQixjQUFRLEdBQUcsQ0FBQyxDQUFDOztJQWVqQixDQUFDO0lBYkcseUJBQU8sR0FBUDtRQUFBLGlCQU9DO1FBTkcsSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUNoQixLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDaEIsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZCLEtBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1lBQ3RCLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxzQkFBSSwyQkFBTTthQUFWO1lBQ0ksTUFBTSxDQUFDLDBCQUF3QixJQUFJLENBQUMsUUFBUSxRQUFLLENBQUM7UUFDdEQsQ0FBQzs7O09BQUE7SUFqQlEsT0FBTztRQURuQixpQkFBVSxFQUFFO09BQ0EsT0FBTyxDQW1CbkI7SUFBRCxjQUFDO0NBQUEsQUFuQkQsQ0FBNkIsaUNBQWUsR0FtQjNDO0FBbkJZLDBCQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5pbWF0aW9uRW50aXR5IH0gZnJvbSAnLi9BbmltYXRpb25FbnRpdHknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2VpbGluZyBleHRlbmRzIEFuaW1hdGlvbkVudGl0eSB7XG5cbiAgICBhbmltYXRpb25EZWxheSA9IDEwMDAgLyA2MDtcblxuICAgIHBvc2l0aW9uID0gMDtcblxuICAgIGFuaW1hdGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RhcnRBbmltYXRpb24oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi0tO1xuICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb24gPCAtMjAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldCBzdHlsZXMoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAke3RoaXMucG9zaXRpb259IDA7YDtcbiAgICB9XG5cbn1cbiJdfQ==