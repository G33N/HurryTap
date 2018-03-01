"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AnimationEntity_1 = require("./AnimationEntity");
var nativescript_audio_1 = require("nativescript-audio");
var platform_1 = require("tns-core-modules/platform");
var Bird = (function (_super) {
    __extends(Bird, _super);
    function Bird() {
        var _this = _super.call(this) || this;
        // The offset position of the background sprite for the bird
        _this.positionOffset = 0;
        // The delay for the FPS
        _this.animationDelay = 150;
        // Velocity change when a user jumps the bird
        _this.jumpVelocity = -5;
        // Rotation of the image used for diving sequence
        _this.rotation = 0;
        // The vertical positioning of the entity
        _this.position = -60;
        // The velocity of the bird as gravity takes effect
        _this.velocity = 0;
        // Size
        _this.size = 10;
        // This determinate if the round exist or no
        _this.exist = true;
        return _this;
    }
    /**
     * Resets the bird model back to default
     */
    Bird.prototype.reset = function () {
        this.velocity = 0;
        this.rotation = 0;
        this.position = 0;
        this.exist = true;
    };
    /**
     * Animates the bird to simulate flapping
     */
    Bird.prototype.animate = function () {
        var _this = this;
        var assetSize = platform_1.isAndroid ? 25 : 24;
        this.startAnimation(function () {
            _this.positionOffset -= assetSize;
            if (_this.positionOffset <= -(assetSize * 4)) {
                _this.positionOffset = 0;
            }
        });
    };
    /**
     * Handles the jump animation for the bird
     */
    Bird.prototype.jump = function () {
        // Only flap and play audio if the user has not crashed
        if (!this.hasCrashed) {
            this.velocity = this.jumpVelocity;
            this.rotation = Math.min((this.velocity / 10) * 90, 90);
            this.playTapAudio();
        }
    };
    /**
     * Check altitude to prevent user from clipping past the ceiling barrier
     */
    Bird.prototype.checkAltitude = function () {
        if (this.position < -45) {
            this.position = -45;
        }
    };
    /**
     * Check size to destroy the round
     */
    Bird.prototype.checkSize = function () {
        if (this.size <= 1) {
            this.exist = false;
        }
    };
    Object.defineProperty(Bird.prototype, "hasCrashed", {
        /**
         * Checks if the bird has crashed, offsets rotation to solve UI problem
         */
        get: function () {
            var crashed = this.position > 590;
            if (crashed) {
                this.exist = false;
            }
            return crashed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bird.prototype, "styles", {
        /**
         * Style implementation to leverage animations+ inside NativeScript
         */
        get: function () {
            return "\n        background-position: 0 " + (platform_1.isAndroid ? 0 : this.positionOffset) + ";\n        rotate: " + this.rotation + ";";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Plays the death audio for the bird
     */
    Bird.prototype.playDeathAudio = function () {
        var deathAudio = new nativescript_audio_1.TNSPlayer();
        deathAudio.initFromFile({
            audioFile: '~/audio/destroy.mp3',
            loop: false
        });
        deathAudio.play();
    };
    Bird.prototype.playTapAudio = function () {
        var wingFlapAudio = new nativescript_audio_1.TNSPlayer();
        wingFlapAudio.initFromFile({
            audioFile: '~/audio/tap.mp3',
            loop: false
        });
        wingFlapAudio.play();
    };
    /**
     * Discount the size of the round
     */
    Bird.prototype.discountSize = function () {
        this.checkSize();
        this.size--;
    };
    Bird = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], Bird);
    return Bird;
}(AnimationEntity_1.AnimationEntity));
exports.Bird = Bird;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmlyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkJpcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MscURBQW9EO0FBQ3BELHlEQUErQztBQUMvQyxzREFBc0Q7QUFHdEQ7SUFBMEIsd0JBQWU7SUFtQnJDO1FBQUEsWUFDSSxpQkFBTyxTQUNWO1FBbkJELDREQUE0RDtRQUM1RCxvQkFBYyxHQUFHLENBQUMsQ0FBQztRQUNuQix3QkFBd0I7UUFDeEIsb0JBQWMsR0FBRyxHQUFHLENBQUM7UUFDckIsNkNBQTZDO1FBQzdDLGtCQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEIsaURBQWlEO1FBQ2pELGNBQVEsR0FBRyxDQUFDLENBQUM7UUFDYix5Q0FBeUM7UUFDekMsY0FBUSxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQ2YsbURBQW1EO1FBQ25ELGNBQVEsR0FBRyxDQUFDLENBQUM7UUFDYixPQUFPO1FBQ1AsVUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLDRDQUE0QztRQUM1QyxXQUFLLEdBQUcsSUFBSSxDQUFDOztJQUliLENBQUM7SUFFRDs7T0FFRztJQUNILG9CQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUN0QixDQUFDO0lBQ0Q7O09BRUc7SUFDSCxzQkFBTyxHQUFQO1FBQUEsaUJBUUM7UUFQRyxJQUFNLFNBQVMsR0FBRyxvQkFBUyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUNoQixLQUFJLENBQUMsY0FBYyxJQUFJLFNBQVMsQ0FBQztZQUNqQyxFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxQyxLQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztZQUM1QixDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxtQkFBSSxHQUFKO1FBQ0ksdURBQXVEO1FBQ3ZELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3hELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QixDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0gsNEJBQWEsR0FBYjtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDeEIsQ0FBQztJQUNMLENBQUM7SUFDRDs7T0FFRztJQUNILHdCQUFTLEdBQVQ7UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQztJQUNMLENBQUM7SUFJRCxzQkFBSSw0QkFBVTtRQUhkOztXQUVHO2FBQ0g7WUFDSSxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztZQUNwQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNWLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLENBQUM7WUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ25CLENBQUM7OztPQUFBO0lBSUQsc0JBQUksd0JBQU07UUFIVjs7V0FFRzthQUNIO1lBQ0ksTUFBTSxDQUFDLHVDQUNrQixvQkFBUyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyw0QkFDbEQsSUFBSSxDQUFDLFFBQVEsTUFBRyxDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBRUQ7O09BRUc7SUFDSCw2QkFBYyxHQUFkO1FBQ0ksSUFBTSxVQUFVLEdBQUcsSUFBSSw4QkFBUyxFQUFFLENBQUM7UUFDbkMsVUFBVSxDQUFDLFlBQVksQ0FBQztZQUNwQixTQUFTLEVBQUUscUJBQXFCO1lBQ2hDLElBQUksRUFBRSxLQUFLO1NBQ2QsQ0FBQyxDQUFDO1FBQ0gsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFDRCwyQkFBWSxHQUFaO1FBQ0ksSUFBTSxhQUFhLEdBQUcsSUFBSSw4QkFBUyxFQUFFLENBQUM7UUFDdEMsYUFBYSxDQUFDLFlBQVksQ0FBQztZQUN2QixTQUFTLEVBQUUsaUJBQWlCO1lBQzVCLElBQUksRUFBRSxLQUFLO1NBQ2QsQ0FBQyxDQUFDO1FBQ0gsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFDRDs7T0FFRztJQUNILDJCQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFySFEsSUFBSTtRQURoQixpQkFBVSxFQUFFOztPQUNBLElBQUksQ0F1SGhCO0lBQUQsV0FBQztDQUFBLEFBdkhELENBQTBCLGlDQUFlLEdBdUh4QztBQXZIWSxvQkFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFuaW1hdGlvbkVudGl0eSB9IGZyb20gJy4vQW5pbWF0aW9uRW50aXR5JztcbmltcG9ydCB7IFROU1BsYXllciB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hdWRpbyc7XG5pbXBvcnQgeyBpc0FuZHJvaWQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJpcmQgZXh0ZW5kcyBBbmltYXRpb25FbnRpdHkge1xuXG4gICAgLy8gVGhlIG9mZnNldCBwb3NpdGlvbiBvZiB0aGUgYmFja2dyb3VuZCBzcHJpdGUgZm9yIHRoZSBiaXJkXG4gICAgcG9zaXRpb25PZmZzZXQgPSAwO1xuICAgIC8vIFRoZSBkZWxheSBmb3IgdGhlIEZQU1xuICAgIGFuaW1hdGlvbkRlbGF5ID0gMTUwO1xuICAgIC8vIFZlbG9jaXR5IGNoYW5nZSB3aGVuIGEgdXNlciBqdW1wcyB0aGUgYmlyZFxuICAgIGp1bXBWZWxvY2l0eSA9IC01O1xuICAgIC8vIFJvdGF0aW9uIG9mIHRoZSBpbWFnZSB1c2VkIGZvciBkaXZpbmcgc2VxdWVuY2VcbiAgICByb3RhdGlvbiA9IDA7XG4gICAgLy8gVGhlIHZlcnRpY2FsIHBvc2l0aW9uaW5nIG9mIHRoZSBlbnRpdHlcbiAgICBwb3NpdGlvbiA9IC02MDtcbiAgICAvLyBUaGUgdmVsb2NpdHkgb2YgdGhlIGJpcmQgYXMgZ3Jhdml0eSB0YWtlcyBlZmZlY3RcbiAgICB2ZWxvY2l0eSA9IDA7XG4gICAgLy8gU2l6ZVxuICAgIHNpemUgPSAxMDtcbiAgICAvLyBUaGlzIGRldGVybWluYXRlIGlmIHRoZSByb3VuZCBleGlzdCBvciBub1xuICAgIGV4aXN0ID0gdHJ1ZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0cyB0aGUgYmlyZCBtb2RlbCBiYWNrIHRvIGRlZmF1bHRcbiAgICAgKi9cbiAgICByZXNldCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IDA7XG4gICAgICAgIHRoaXMucm90YXRpb24gPSAwO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gMDtcbiAgICAgICAgdGhpcy5leGlzdCA9IHRydWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFuaW1hdGVzIHRoZSBiaXJkIHRvIHNpbXVsYXRlIGZsYXBwaW5nXG4gICAgICovXG4gICAgYW5pbWF0ZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgYXNzZXRTaXplID0gaXNBbmRyb2lkID8gMjUgOiAyNDtcbiAgICAgICAgdGhpcy5zdGFydEFuaW1hdGlvbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uT2Zmc2V0IC09IGFzc2V0U2l6ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uT2Zmc2V0IDw9IC0oYXNzZXRTaXplICogNCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlcyB0aGUganVtcCBhbmltYXRpb24gZm9yIHRoZSBiaXJkXG4gICAgICovXG4gICAganVtcCgpOiB2b2lkIHtcbiAgICAgICAgLy8gT25seSBmbGFwIGFuZCBwbGF5IGF1ZGlvIGlmIHRoZSB1c2VyIGhhcyBub3QgY3Jhc2hlZFxuICAgICAgICBpZiAoIXRoaXMuaGFzQ3Jhc2hlZCkge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHRoaXMuanVtcFZlbG9jaXR5O1xuICAgICAgICAgICAgdGhpcy5yb3RhdGlvbiA9IE1hdGgubWluKCh0aGlzLnZlbG9jaXR5IC8gMTApICogOTAsIDkwKTtcbiAgICAgICAgICAgIHRoaXMucGxheVRhcEF1ZGlvKCk7ICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGFsdGl0dWRlIHRvIHByZXZlbnQgdXNlciBmcm9tIGNsaXBwaW5nIHBhc3QgdGhlIGNlaWxpbmcgYmFycmllclxuICAgICAqL1xuICAgIGNoZWNrQWx0aXR1ZGUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uIDwgLTQ1KSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gLTQ1O1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENoZWNrIHNpemUgdG8gZGVzdHJveSB0aGUgcm91bmRcbiAgICAgKi9cbiAgICBjaGVja1NpemUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnNpemUgPD0gMSkge1xuICAgICAgICAgICAgdGhpcy5leGlzdCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGUgYmlyZCBoYXMgY3Jhc2hlZCwgb2Zmc2V0cyByb3RhdGlvbiB0byBzb2x2ZSBVSSBwcm9ibGVtXG4gICAgICovXG4gICAgZ2V0IGhhc0NyYXNoZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGNyYXNoZWQgPSB0aGlzLnBvc2l0aW9uID4gNTkwO1xuICAgICAgICBpZiAoY3Jhc2hlZCkge1xuICAgICAgICAgICAgdGhpcy5leGlzdCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjcmFzaGVkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdHlsZSBpbXBsZW1lbnRhdGlvbiB0byBsZXZlcmFnZSBhbmltYXRpb25zKyBpbnNpZGUgTmF0aXZlU2NyaXB0XG4gICAgICovXG4gICAgZ2V0IHN0eWxlcygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwICR7aXNBbmRyb2lkID8gMCA6IHRoaXMucG9zaXRpb25PZmZzZXR9O1xuICAgICAgICByb3RhdGU6ICR7dGhpcy5yb3RhdGlvbn07YDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQbGF5cyB0aGUgZGVhdGggYXVkaW8gZm9yIHRoZSBiaXJkXG4gICAgICovXG4gICAgcGxheURlYXRoQXVkaW8oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGRlYXRoQXVkaW8gPSBuZXcgVE5TUGxheWVyKCk7XG4gICAgICAgIGRlYXRoQXVkaW8uaW5pdEZyb21GaWxlKHtcbiAgICAgICAgICAgIGF1ZGlvRmlsZTogJ34vYXVkaW8vZGVzdHJveS5tcDMnLFxuICAgICAgICAgICAgbG9vcDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIGRlYXRoQXVkaW8ucGxheSgpO1xuICAgIH1cbiAgICBwbGF5VGFwQXVkaW8oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHdpbmdGbGFwQXVkaW8gPSBuZXcgVE5TUGxheWVyKCk7XG4gICAgICAgIHdpbmdGbGFwQXVkaW8uaW5pdEZyb21GaWxlKHtcbiAgICAgICAgICAgIGF1ZGlvRmlsZTogJ34vYXVkaW8vdGFwLm1wMycsXG4gICAgICAgICAgICBsb29wOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgd2luZ0ZsYXBBdWRpby5wbGF5KCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERpc2NvdW50IHRoZSBzaXplIG9mIHRoZSByb3VuZFxuICAgICAqL1xuICAgIGRpc2NvdW50U2l6ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jaGVja1NpemUoKTtcbiAgICAgICAgdGhpcy5zaXplLS07XG4gICAgfVxuICAgIFxufVxuIl19