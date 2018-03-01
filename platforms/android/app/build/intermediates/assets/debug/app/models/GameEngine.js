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
    };
    GameEngine.prototype.playGameOverAudio = function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2FtZUVuZ2luZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkdhbWVFbmdpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5REFBK0M7QUFFL0M7SUFBQTtRQUlZLFFBQUcsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsUUFBUTtJQXlCckMsQ0FBQztJQW5CRywwQkFBSyxHQUFMLFVBQU0sY0FBd0I7UUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7WUFDeEIsY0FBYyxFQUFFLENBQUM7UUFDckIsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBRUQsMEJBQUssR0FBTDtRQUNJLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELHNDQUFpQixHQUFqQjtRQUNJLElBQU0sYUFBYSxHQUFHLElBQUksOEJBQVMsRUFBRSxDQUFDO1FBQ3RDLGFBQWEsQ0FBQyxZQUFZLENBQUM7WUFDdkIsU0FBUyxFQUFFLHNCQUFzQjtZQUNqQyxJQUFJLEVBQUUsS0FBSztTQUNkLENBQUMsQ0FBQztRQUNILGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBekJNLGtCQUFPLEdBQUcsSUFBSSxDQUFDO0lBMkIxQixpQkFBQztDQUFBLEFBN0JELElBNkJDO0FBN0JZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVE5TUGxheWVyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWF1ZGlvJztcblxuZXhwb3J0IGNsYXNzIEdhbWVFbmdpbmUge1xuXG4gICAgc3RhdGljIEdSQVZJVFkgPSAwLjEwO1xuXG4gICAgcHJpdmF0ZSBmcHMgPSAxMDAwIC8gNjA7IC8vIDYwZnBzXG5cbiAgICBwcml2YXRlIGdhbWVMb29wOiBhbnk7XG4gICAgLy8gVGhlIGF1ZGlvIHNlcXVlbmNlIGZvciB0aGUgZ2FtZSBvdmVyXG4gICAgZ2FtZU92ZXJBdWRpbzogVE5TUGxheWVyO1xuXG4gICAgc3RhcnQoZXhlY3V0aW9uQ3ljbGU6IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ2FtZUxvb3AgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBleGVjdXRpb25DeWNsZSgpO1xuICAgICAgICB9LCB0aGlzLmZwcyk7XG4gICAgfVxuXG4gICAgcGF1c2UoKTogdm9pZCB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmdhbWVMb29wKTtcbiAgICB9XG5cbiAgICBwbGF5R2FtZU92ZXJBdWRpbygpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZ2FtZU92ZXJBdWRpbyA9IG5ldyBUTlNQbGF5ZXIoKTtcbiAgICAgICAgZ2FtZU92ZXJBdWRpby5pbml0RnJvbUZpbGUoe1xuICAgICAgICAgICAgYXVkaW9GaWxlOiAnfi9hdWRpby9nYW1lT3Zlci5tcDMnLFxuICAgICAgICAgICAgbG9vcDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIGdhbWVPdmVyQXVkaW8ucGxheSgpO1xuICAgIH1cblxufVxuIl19