"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nativescript_audio_1 = require("nativescript-audio");
var GameEngine = (function () {
    function GameEngine() {
        this.fps = 1000 / 60; // 60fps
    }
    GameEngine.prototype.start = function (executionCycle) {
        this.gameLoop = setInterval(function () {
            executionCycle();
        }, this.fps);
    };
    GameEngine.prototype.pause = function () {
        clearTimeout(this.gameLoop);
        this.playDeathAudio();
    };
    GameEngine.prototype.playDeathAudio = function () {
        var gameOverAudio = new nativescript_audio_1.TNSPlayer();
        gameOverAudio.initFromFile({
            audioFile: '~/audio/gameOver.mp3',
            loop: false
        });
        gameOverAudio.play();
    };
    GameEngine.GRAVITY = 0.10;
    return GameEngine;
}());
exports.GameEngine = GameEngine;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2FtZUVuZ2luZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkdhbWVFbmdpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5REFBK0M7QUFFL0M7SUFBQTtRQUlZLFFBQUcsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsUUFBUTtJQTBCckMsQ0FBQztJQXBCRywwQkFBSyxHQUFMLFVBQU0sY0FBd0I7UUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7WUFDeEIsY0FBYyxFQUFFLENBQUM7UUFDckIsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBRUQsMEJBQUssR0FBTDtRQUNJLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxtQ0FBYyxHQUFkO1FBQ0ksSUFBTSxhQUFhLEdBQUcsSUFBSSw4QkFBUyxFQUFFLENBQUM7UUFDdEMsYUFBYSxDQUFDLFlBQVksQ0FBQztZQUN2QixTQUFTLEVBQUUsc0JBQXNCO1lBQ2pDLElBQUksRUFBRSxLQUFLO1NBQ2QsQ0FBQyxDQUFDO1FBQ0gsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUExQk0sa0JBQU8sR0FBRyxJQUFJLENBQUM7SUE0QjFCLGlCQUFDO0NBQUEsQUE5QkQsSUE4QkM7QUE5QlksZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUTlNQbGF5ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtYXVkaW8nO1xuXG5leHBvcnQgY2xhc3MgR2FtZUVuZ2luZSB7XG5cbiAgICBzdGF0aWMgR1JBVklUWSA9IDAuMTA7XG5cbiAgICBwcml2YXRlIGZwcyA9IDEwMDAgLyA2MDsgLy8gNjBmcHNcblxuICAgIHByaXZhdGUgZ2FtZUxvb3A6IGFueTtcbiAgICAvLyBUaGUgYXVkaW8gc2VxdWVuY2UgZm9yIHRoZSBnYW1lIG92ZXJcbiAgICBnYW1lT3ZlckF1ZGlvOiBUTlNQbGF5ZXI7XG5cbiAgICBzdGFydChleGVjdXRpb25DeWNsZTogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5nYW1lTG9vcCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGV4ZWN1dGlvbkN5Y2xlKCk7XG4gICAgICAgIH0sIHRoaXMuZnBzKTtcbiAgICB9XG5cbiAgICBwYXVzZSgpOiB2b2lkIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZ2FtZUxvb3ApO1xuICAgICAgICB0aGlzLnBsYXlEZWF0aEF1ZGlvKCk7XG4gICAgfVxuXG4gICAgcGxheURlYXRoQXVkaW8oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGdhbWVPdmVyQXVkaW8gPSBuZXcgVE5TUGxheWVyKCk7XG4gICAgICAgIGdhbWVPdmVyQXVkaW8uaW5pdEZyb21GaWxlKHtcbiAgICAgICAgICAgIGF1ZGlvRmlsZTogJ34vYXVkaW8vZ2FtZU92ZXIubXAzJyxcbiAgICAgICAgICAgIGxvb3A6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICBnYW1lT3ZlckF1ZGlvLnBsYXkoKTtcbiAgICB9XG5cbn1cbiJdfQ==