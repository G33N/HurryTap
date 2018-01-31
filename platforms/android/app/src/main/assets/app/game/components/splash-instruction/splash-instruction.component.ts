import { Component, ViewChild, ElementRef, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
    selector: 'splash-instruction',
    moduleId: module.id,
    templateUrl: './splash-instruction.component.html',
    styleUrls: ['./splash-instruction.component.css']
})
export class SplashInstructionComponent {

    @ViewChild('splash') splashImage: ElementRef;
    @Output() onStart: EventEmitter<boolean> = new EventEmitter();

    dismiss(): void {
        if (this.splashImage && this.splashImage.nativeElement) {
            this.splashImage.nativeElement.animate({
                opacity: 0,
                duration: 500
            });
        }
    }

    start(): void {
        this.onStart.next(true);
    }

}
