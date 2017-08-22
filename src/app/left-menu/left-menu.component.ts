import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from "@angular/animations";
import { FeedInfo } from "app/model-c/feed-info";



@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css'],
})
export class LeftMenuComponent implements OnInit {
  @Input() catalogFeed: any;
  @Input() storeFeed:any;

  typeOfMenu:string='cat'; 
  feeds: any = [];
  storeFeeds:any [];
  homeLinkData = {
    name: 'Home',
    description: ''
  };
  storeTitle:string = 'Store';
  categoryTitle:string = 'Category';
  constructor() {
    this.feeds = this.catalogFeed;
    this.storeFeeds = this.storeFeed;
  }

  ngOnInit() {
    
  }
  menuState: string = 'in';
  menuStateStore:string = 'in';
  toggleMenu(type:any) {
    this.feeds = this.catalogFeed;
    this.storeFeeds = this.storeFeed;
    if(type == 'cat'){
      this.menuStateStore ='in';
      this.menuState = this.menuState === 'out' ? 'in' : 'out';
    }else if(type == 'store'){
      this.menuState = 'in';
      this.menuStateStore = this.menuStateStore ==  'out' ? 'in' : 'out';
    }else{
      this.menuState = this.menuState === 'out' ? 'in' : 'out';
    }
  }
}
