/**
 * This file is used to hold rss-FeedService class.This class we use
 * Crack HTTP request and process RSS data from @rssToJsonServiceBaseUrl and
 * To make RSS call to rss2json.com, we have created getFeedContent
 * As Feed (data cleaner) extractor we use ALL RxJS statics & operators as Obsable components
 *
 * @summary   feed.service.ts FeedService class 
 *
 * @link      \src\app\feed.service.ts
 * @version   1.0.0.1 (last update= 22/08/17)
 * @requires feed model(@path src\app\model\feed.ts), (Observable) rxjs/Rx, Http, Response
 * @class  class FeedService
 * @classdesc class FeedService is angular service that make request to rss server and as response
 * we have JSON data.
 * @author Aleksandar Milanov (@mrplasticbrain)
 */


import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Feed } from './model/feed';

@Injectable()
export class FeedService {
    /** 
     * private class variable 
     *  - rssToJsonServiceBaseUrl (string) : url path to Rss server 
     * */
    private rssToJsonServiceBaseUrl: string = 'https://rss2json.com/api.json?rss_url=';
    /**
     * Class constructor
     * @param Private http 
     */
    constructor(
        private http: Http
    ) {}
    /**
     * @method getFeedContent 
     * @desc get content from http request ,before return we extract
     *  feed with FeedService.extractFeeds, error handler with FeedService.handleError
     * @param url string
     * @Observable feed model 
     */
    getFeedContent(url: string): Observable <Feed> {
        return this.http.get(this.rssToJsonServiceBaseUrl + url)
            .map(this.extractFeeds)
            .catch(this.handleError);
    }
    /**
     * @method extractFeeds
     * @desc this method extract or handle response to be always 
     * JSON (or empty object) due to Observable on feed model
     * @param res 
     */
    private extractFeeds(res: Response): Feed {
        let feed = res.json();
        return feed || {};
    }
    /**
     * @method handleError 
     * @desc error handler on response
     * @param error :any 
     */
    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
