import { OnInit } from '@angular/core';
import { Bird } from './../../../models/Bird';
import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { EventData } from "data/observable";
import { Button } from "ui/button";

@Component({
    selector: 'bird-player',
    moduleId: module.id,
    templateUrl: './bird.component.html',
    styleUrls: ['./bird.component.css']
})
export class BirdComponent implements OnInit {

    @Input() bird: Bird;
    _ref: any;

    ngOnInit() {
        this.bird.animate();
            setInterval(() => {
                if(!this.bird.exist){
                    this.removeObject();
                }
            }, 16.6);
        }

    get position(): number {
        return 70 + this.bird.position;
    }
    /**
     * Discount round size
     */
    discountSize(args: EventData) {
        let button = <Button>args.object;     
        this.bird.discountSize();
        this.bird.jump();
    }
    removeObject() {
        this._ref.destroy();
    }    
}