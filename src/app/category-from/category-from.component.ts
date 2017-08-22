import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModelInfo } from '../model-c/product-model-info';
import { FeedCatalogusService } from '../feed-catalogus.service';


/** 
  * @desc this class will hold functions for user interaction
  * examples include user_pass(), user_username(), user_age(), user_regdate()
  * @author Aleksabdar Milanov alekmilanov.sr@gmail.com
  * @required settings.php
*/
@Component({
  selector: 'app-category-from',
  templateUrl: './category-from.component.html',
  styleUrls: ['./category-from.component.css']
})
export class CategoryFromComponent implements OnInit {
  public id;
  public sub: any;

  constructor(
    private route: ActivatedRoute,
    private feedCatalogusService: FeedCatalogusService
  ) { }
  productModelData: Array<ProductModelInfo> = [];
  productModelUrl: string = '?catid=';
  error: any;
  nodata:string = '';
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.onRouteChange(params)
    });

  }
  onRouteChange(params) {
    this.id = +params['id']; // (+) converts string 'id' to a number
    if (typeof  this.productModelData === 'undefined'){
      this.productModelData = [];
    }else{
      this.productModelData.length = 0;
    }
      

    var urlmode = this.productModelUrl + this.id
    this.feedCatalogusService.getProductContent(urlmode)
      .subscribe(
      feed => this.checkFeed(feed),
      error => console.log(error));

  }
  checkFeed(feed){
    console.log(Object.keys(feed));
    if(Object.keys(feed)[0] == 'message' ){
      this.productModelData = [];
      this.nodata = feed['message'];
    }else{
      this.productModelData = feed.records;
      this.nodata ='';
    }


    
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
