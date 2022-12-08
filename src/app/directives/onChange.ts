import {
    Directive,
    ElementRef,
    OnInit,
    Renderer2,
    Input,
    Output,
    EventEmitter
} from '@angular/core'

@Directive({
    selector: '[app-change]'
})
export class onChange implements OnInit {
    @Input() title!: string;
    @Output() titleChange: EventEmitter<string> = new EventEmitter<string>();

    constructor(
        private elementRef: ElementRef,
        private rendrer2: Renderer2) { }

    ngOnInit(): void {
        this.onInput()
    }


    changeValue = (event:Event) => {
        this.title = (event.target as HTMLInputElement).value
        this.titleChange.emit(this.title);
    }

    onInput() {
        this.elementRef.nativeElement.addEventListener("input", this.changeValue);
        removeEventListener('input', this.changeValue);
    }



}