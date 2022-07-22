import { Component, OnChanges, Input } from "@angular/core";

@Component({
    selector: 'app-star', // vira uma tag
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

    @Input() // deixa elegível para receber informação de um componente externo
    // vira propriedade da tag app-star
    rating: number = 0;

    starWidth: number;

    ngOnChanges(): void {
        this.starWidth = this.rating * 74/5; // proporção da div que será mostrada baseada na font awesome
    }

}