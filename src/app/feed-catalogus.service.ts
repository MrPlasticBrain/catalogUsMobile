/**
 * This file is used to hold FeedCatalogusService class.This class we use
 * Crack HTTP request and process Data as JSON from Hub API that is provided and stored FOR now 
 * on test data FREE server , in this file we can see simple Read API call's for category, store and products
 * 
 * TO-DO: 
 * 1. make Rest API call to hub for 
 *  -create ,
 *  -delete ,
 *  -Edit ,
 *  -update ,records
 *
 * @summary   \src\app\feed-catalogus.service.ts FeedCatalogusService class 
 *
 * @link      src\app\category-from\category-from.component.ts
 * @version   1.0.0.1 (last update= 22/08/17)
 * @requires Feed model(@path src\app\model-c\feed.ts),
 *           ProductModel model(@path src\app\model-c\product-feed.ts),
 *           StoreModel model(@path src\app\model-c\store-feed.ts),
 *           (Observable) rxjs/Rx, Http, Response
 * @class  class FeedCatalogusService
 * @classdesc class FeedCatalogusService is angular service that make request to  Hub API server and as response
 * we have JSON data that is Observable as it is in model-c ( category models).
 * @author Aleksandar Milanov (@mrplasticbrain)
 */

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Feed } from './model-c/feed';
import { ProductModel } from './model-c/product-model'
import { StoreModel } from './model-c/store-model'

@Injectable()
export class FeedCatalogusService {
    /** 
     * private class variable 
     *  - rssToJsonServiceBaseUrl (string) : url path to catalog category read URL api
     *  - GetProductsBaseUrl (string) : url path to catalog product read URL api
     *  - GetStoreBaseUrl (string) : url path to catalog store read URL api
     * */
    private rssToJsonServiceBaseUrl: string = 'http://brainwpdev1.co.nf/api/category/read.php';
    private GetProductsBaseUrl:      string = 'http://brainwpdev1.co.nf/api/product/read.php';
    private GetStoreBaseUrl:         string = 'http://brainwpdev1.co.nf/api/store/read.php';

    /**
     * Class constructor
     * @param Private http 
     */
    constructor(
      private http: Http
      ) {
        /** empty constructor */
    }


    /**
     * @method getFeedContent (category)
     * @desc get content from http request ,before return we extract
     *  feed with FeedCatalogusService.extractFeeds, error handler with FeedCatalogusService.handleError
     *  as input parameter we have Url:string string that is ID to some category if not API returns all 
     *  category data
     * @param url string (category ID )
     * @Observable feed model model-c\feed.ts
     * @return JSON 
     */
    getFeedContent(url: string): Observable <Feed> {
        return this.http.get(this.rssToJsonServiceBaseUrl + url)
            .map(this.extractFeeds)
            .catch(this.handleError);
    }


    /**
     * @method extractFeeds (category)
     * @desc this method extract or handle response to be always 
     * JSON (or empty object) due to Observable on feed model
     * @param res (Feed model or empty)
     */
    private extractFeeds(res: Response): Feed {
        let feed = res.json();
        return feed || {};
    }

    /**
     * @method handleError (category,product,store)  
     * @desc error handler on response
     * @param error :any 
     * @model Feed,ProductModel,StoreModel
     */
    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }


    /**
     * @method getProductContent (product)
     * @desc get procuct data from http request ,before return we extract
     *  feed with FeedCatalogusService.extractFeeds, error handler with FeedCatalogusService.extractProductFeeds
     *  as input parameter we have Url:string string that is ID to some category,Get products 
     *  feed content can accept url parameter as catid = '${category id}' where we left join product's table on 
     *  cat ID , if not API returns all 
     *  ProductModel data
     * @param url string (category ID)
     * @Observable ProductModel model-c\product-feed.ts
     * @return JSON 
     */
    getProductContent(url: string): Observable <ProductModel> {
        return this.http.get(this.GetProductsBaseUrl + url)
            .map(this.extractProductFeeds)
            .catch(this.handleError);
    }


    /**
     * @method extractProductFeeds (category)
     * @desc this method extract or handle response to be always 
     * JSON (or empty object) due to Observable on ProductModel model
     * @param res (Feed model or empty)
     */
    private extractProductFeeds(res: Response): ProductModel {
        let productModel = res.json();
        return productModel || {};
    }


    /**
     * @method getStoreContent (Store)
     * @desc get Store data content from http request ,before return we extract
     *  feed with FeedCatalogusService.extractProductFeeds, error handler with FeedCatalogusService.handleError
     *  as input parameter we have Url:string string that is ID to some store if not API returns empty JSON 
     * @param url string (category ID )
     * @Observable feed model model-c\feed.ts
     * @return JSON 
     */
    getStoreContent(url: string): Observable <StoreModel> {
        return this.http.get(this.GetStoreBaseUrl + url)
            .map(this.extractProductFeeds)
            .catch(this.handleError);
    }

    /**
     * @method extractStoreFeeds (category)
     * @desc this method extract or handle response to be always 
     * JSON (or empty object) due to Observable on ProductModel model
     * @param res (Feed model or empty)
     */
    private extractStoreFeeds(res: Response): StoreModel {
        let storeModel = res.json();
        return storeModel || {};
    }
}
