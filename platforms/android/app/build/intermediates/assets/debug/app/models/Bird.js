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
        _this.wingFlapAudio = new nativescript_audio_1.TNSPlayer();
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
            this.wingFlapAudio.initFromFile({
                audioFile: '~/audio/tap.mp3',
                loop: false
            });
            this.wingFlapAudio.play();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmlyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkJpcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MscURBQW9EO0FBQ3BELHlEQUErQztBQUMvQyxzREFBc0Q7QUFHdEQ7SUFBMEIsd0JBQWU7SUFxQnJDO1FBQUEsWUFDSSxpQkFBTyxTQUVWO1FBdEJELDREQUE0RDtRQUM1RCxvQkFBYyxHQUFHLENBQUMsQ0FBQztRQUNuQix3QkFBd0I7UUFDeEIsb0JBQWMsR0FBRyxHQUFHLENBQUM7UUFDckIsNkNBQTZDO1FBQzdDLGtCQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEIsaURBQWlEO1FBQ2pELGNBQVEsR0FBRyxDQUFDLENBQUM7UUFDYix5Q0FBeUM7UUFDekMsY0FBUSxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQ2YsbURBQW1EO1FBQ25ELGNBQVEsR0FBRyxDQUFDLENBQUM7UUFHYixPQUFPO1FBQ1AsVUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLDRDQUE0QztRQUM1QyxXQUFLLEdBQUcsSUFBSSxDQUFDO1FBSVQsS0FBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLDhCQUFTLEVBQUUsQ0FBQzs7SUFDekMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsb0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7SUFDRDs7T0FFRztJQUNILHNCQUFPLEdBQVA7UUFBQSxpQkFRQztRQVBHLElBQU0sU0FBUyxHQUFHLG9CQUFTLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBQ2hCLEtBQUksQ0FBQyxjQUFjLElBQUksU0FBUyxDQUFDO1lBQ2pDLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLEtBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO1lBQzVCLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7T0FFRztJQUNILG1CQUFJLEdBQUo7UUFDSSx1REFBdUQ7UUFDdkQsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7Z0JBQzVCLFNBQVMsRUFBRSxpQkFBaUI7Z0JBQzVCLElBQUksRUFBRSxLQUFLO2FBQ2QsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM5QixDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0gsNEJBQWEsR0FBYjtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDeEIsQ0FBQztJQUNMLENBQUM7SUFDRDs7T0FFRztJQUNILHdCQUFTLEdBQVQ7UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQztJQUNMLENBQUM7SUFJRCxzQkFBSSw0QkFBVTtRQUhkOztXQUVHO2FBQ0g7WUFDSSxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztZQUNwQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNWLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLENBQUM7WUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ25CLENBQUM7OztPQUFBO0lBSUQsc0JBQUksd0JBQU07UUFIVjs7V0FFRzthQUNIO1lBQ0ksTUFBTSxDQUFDLHVDQUNrQixvQkFBUyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyw0QkFDbEQsSUFBSSxDQUFDLFFBQVEsTUFBRyxDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBRUQ7O09BRUc7SUFDSCw2QkFBYyxHQUFkO1FBQ0ksSUFBTSxVQUFVLEdBQUcsSUFBSSw4QkFBUyxFQUFFLENBQUM7UUFDbkMsVUFBVSxDQUFDLFlBQVksQ0FBQztZQUNwQixTQUFTLEVBQUUscUJBQXFCO1lBQ2hDLElBQUksRUFBRSxLQUFLO1NBQ2QsQ0FBQyxDQUFDO1FBQ0gsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFDRDs7T0FFRztJQUNILDJCQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFwSFEsSUFBSTtRQURoQixpQkFBVSxFQUFFOztPQUNBLElBQUksQ0FzSGhCO0lBQUQsV0FBQztDQUFBLEFBdEhELENBQTBCLGlDQUFlLEdBc0h4QztBQXRIWSxvQkFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFuaW1hdGlvbkVudGl0eSB9IGZyb20gJy4vQW5pbWF0aW9uRW50aXR5JztcbmltcG9ydCB7IFROU1BsYXllciB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hdWRpbyc7XG5pbXBvcnQgeyBpc0FuZHJvaWQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJpcmQgZXh0ZW5kcyBBbmltYXRpb25FbnRpdHkge1xuXG4gICAgLy8gVGhlIG9mZnNldCBwb3NpdGlvbiBvZiB0aGUgYmFja2dyb3VuZCBzcHJpdGUgZm9yIHRoZSBiaXJkXG4gICAgcG9zaXRpb25PZmZzZXQgPSAwO1xuICAgIC8vIFRoZSBkZWxheSBmb3IgdGhlIEZQU1xuICAgIGFuaW1hdGlvbkRlbGF5ID0gMTUwO1xuICAgIC8vIFZlbG9jaXR5IGNoYW5nZSB3aGVuIGEgdXNlciBqdW1wcyB0aGUgYmlyZFxuICAgIGp1bXBWZWxvY2l0eSA9IC01O1xuICAgIC8vIFJvdGF0aW9uIG9mIHRoZSBpbWFnZSB1c2VkIGZvciBkaXZpbmcgc2VxdWVuY2VcbiAgICByb3RhdGlvbiA9IDA7XG4gICAgLy8gVGhlIHZlcnRpY2FsIHBvc2l0aW9uaW5nIG9mIHRoZSBlbnRpdHlcbiAgICBwb3NpdGlvbiA9IC02MDtcbiAgICAvLyBUaGUgdmVsb2NpdHkgb2YgdGhlIGJpcmQgYXMgZ3Jhdml0eSB0YWtlcyBlZmZlY3RcbiAgICB2ZWxvY2l0eSA9IDA7XG4gICAgLy8gVGhlIGF1ZGlvIHNlcXVlbmNlIGZvciB0aGUgZmxhcCBzb3VuZFxuICAgIHdpbmdGbGFwQXVkaW86IFROU1BsYXllcjtcbiAgICAvLyBTaXplXG4gICAgc2l6ZSA9IDEwO1xuICAgIC8vIFRoaXMgZGV0ZXJtaW5hdGUgaWYgdGhlIHJvdW5kIGV4aXN0IG9yIG5vXG4gICAgZXhpc3QgPSB0cnVlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMud2luZ0ZsYXBBdWRpbyA9IG5ldyBUTlNQbGF5ZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldHMgdGhlIGJpcmQgbW9kZWwgYmFjayB0byBkZWZhdWx0XG4gICAgICovXG4gICAgcmVzZXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSAwO1xuICAgICAgICB0aGlzLnJvdGF0aW9uID0gMDtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IDA7XG4gICAgICAgIHRoaXMuZXhpc3QgPSB0cnVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBbmltYXRlcyB0aGUgYmlyZCB0byBzaW11bGF0ZSBmbGFwcGluZ1xuICAgICAqL1xuICAgIGFuaW1hdGUoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGFzc2V0U2l6ZSA9IGlzQW5kcm9pZCA/IDI1IDogMjQ7XG4gICAgICAgIHRoaXMuc3RhcnRBbmltYXRpb24oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbk9mZnNldCAtPSBhc3NldFNpemU7XG4gICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbk9mZnNldCA8PSAtKGFzc2V0U2l6ZSAqIDQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbk9mZnNldCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgdGhlIGp1bXAgYW5pbWF0aW9uIGZvciB0aGUgYmlyZFxuICAgICAqL1xuICAgIGp1bXAoKTogdm9pZCB7XG4gICAgICAgIC8vIE9ubHkgZmxhcCBhbmQgcGxheSBhdWRpbyBpZiB0aGUgdXNlciBoYXMgbm90IGNyYXNoZWRcbiAgICAgICAgaWYgKCF0aGlzLmhhc0NyYXNoZWQpIHtcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkgPSB0aGlzLmp1bXBWZWxvY2l0eTtcbiAgICAgICAgICAgIHRoaXMucm90YXRpb24gPSBNYXRoLm1pbigodGhpcy52ZWxvY2l0eSAvIDEwKSAqIDkwLCA5MCk7XG4gICAgICAgICAgICB0aGlzLndpbmdGbGFwQXVkaW8uaW5pdEZyb21GaWxlKHtcbiAgICAgICAgICAgICAgICBhdWRpb0ZpbGU6ICd+L2F1ZGlvL3RhcC5tcDMnLFxuICAgICAgICAgICAgICAgIGxvb3A6IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMud2luZ0ZsYXBBdWRpby5wbGF5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBhbHRpdHVkZSB0byBwcmV2ZW50IHVzZXIgZnJvbSBjbGlwcGluZyBwYXN0IHRoZSBjZWlsaW5nIGJhcnJpZXJcbiAgICAgKi9cbiAgICBjaGVja0FsdGl0dWRlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbiA8IC00NSkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IC00NTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDaGVjayBzaXplIHRvIGRlc3Ryb3kgdGhlIHJvdW5kXG4gICAgICovXG4gICAgY2hlY2tTaXplKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5zaXplIDw9IDEpIHtcbiAgICAgICAgICAgIHRoaXMuZXhpc3QgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgdGhlIGJpcmQgaGFzIGNyYXNoZWQsIG9mZnNldHMgcm90YXRpb24gdG8gc29sdmUgVUkgcHJvYmxlbVxuICAgICAqL1xuICAgIGdldCBoYXNDcmFzaGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBjcmFzaGVkID0gdGhpcy5wb3NpdGlvbiA+IDU5MDtcbiAgICAgICAgaWYgKGNyYXNoZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZXhpc3QgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3Jhc2hlZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3R5bGUgaW1wbGVtZW50YXRpb24gdG8gbGV2ZXJhZ2UgYW5pbWF0aW9ucysgaW5zaWRlIE5hdGl2ZVNjcmlwdFxuICAgICAqL1xuICAgIGdldCBzdHlsZXMoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAke2lzQW5kcm9pZCA/IDAgOiB0aGlzLnBvc2l0aW9uT2Zmc2V0fTtcbiAgICAgICAgcm90YXRlOiAke3RoaXMucm90YXRpb259O2A7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGxheXMgdGhlIGRlYXRoIGF1ZGlvIGZvciB0aGUgYmlyZFxuICAgICAqL1xuICAgIHBsYXlEZWF0aEF1ZGlvKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBkZWF0aEF1ZGlvID0gbmV3IFROU1BsYXllcigpO1xuICAgICAgICBkZWF0aEF1ZGlvLmluaXRGcm9tRmlsZSh7XG4gICAgICAgICAgICBhdWRpb0ZpbGU6ICd+L2F1ZGlvL2Rlc3Ryb3kubXAzJyxcbiAgICAgICAgICAgIGxvb3A6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICBkZWF0aEF1ZGlvLnBsYXkoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGlzY291bnQgdGhlIHNpemUgb2YgdGhlIHJvdW5kXG4gICAgICovXG4gICAgZGlzY291bnRTaXplKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNoZWNrU2l6ZSgpO1xuICAgICAgICB0aGlzLnNpemUtLTtcbiAgICB9XG4gICAgXG59XG4iXX0=