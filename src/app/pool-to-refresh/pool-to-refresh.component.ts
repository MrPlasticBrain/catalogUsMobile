import { Component, OnInit, Input, Output, HostListener, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-pool-to-refresh',
  templateUrl: './pool-to-refresh.component.html',
  styleUrls: ['./pool-to-refresh.component.css']
})
export class PoolToRefreshComponent implements OnInit {
 private lastScrollTop:number = 0;
    private isAtTop:boolean = false;
    private element:any;

    @Input('refresh') inProgress:boolean = false;
    @Output() onPull:EventEmitter<any> = new EventEmitter<any>();

    constructor(el:ElementRef) {
      console.log(el.nativeElement);
        this.element = el.nativeElement;
    }

    private get scrollTop() { console.log(this.element);return this.element.scrollTop || 0; }

    @HostListener('scroll')
    @HostListener('touchmove')
    onScroll() {

        if(this.scrollTop <= 0 && this.lastScrollTop <= 0) {
            if(this.isAtTop) this.onPull.emit(true);
            else this.isAtTop = true;

          console.log(this.isAtTop);
        }
        this.lastScrollTop = this.scrollTop;     
    }
     ngOnInit() {

  }

}

