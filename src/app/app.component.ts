import { Component, OnInit, Input } from '@angular/core';
import { FeedService } from './feed.service';
import { FeedEntry } from './model/feed-entry';
import { FeedCatalogusService } from './feed-catalogus.service';
import { FeedInfo } from './model-c/feed-info';
import { StoreModelInfo } from './model-c/store-model-info';

import { RouteModel } from './model/route-model';
// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';
import { TranslateService } from './translate/translate.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    private feedUrl: string = 'https%3A%2F%2Fwww.becompany.ch%2Fen%2Fblog%2Ffeed.xml';
    private categoryFeedUrl: string = "";
    feeds: Array < FeedEntry > = [];
    routeData: Array < RouteModel > = [];
    storeFeed: Array < StoreModelInfo > = [];


    showContent: string = "home";
    /**New feed API catalog */
    catalogFeed: Array < FeedInfo > = [];

    /** Language Set up */
    public translatedText: string;
    public supportedLanguages: any[];

    /** Language set up END */

    /** PROMO SMALL MENU */
    promoMenu = [{
            display: 'Promo one',
            value: '0'
        },
        {
            display: 'Promo two',
            value: '0'
        },
    ]
    constructor(
        private feedService: FeedService,
        private feedCatalogusService: FeedCatalogusService,
        router: Router,
        private _translate: TranslateService
    ) {
        router.events
            .filter(event => event instanceof NavigationStart)
            .subscribe((event: NavigationEvent) => this.onEventChange(event));
    }
    @Input()
    tittle: string = this._translate.instant('homeTittle');

    onEventChange(e: any) {
        var url: any;
        url = e.url;

        var substring = "category";
        var containsCategory = url.indexOf(substring) !== -1;
        if (containsCategory) {
            this.routeData['apptitle'] = 'category ';
            this.routeData['showContent'] = 'category';
        } else {
            this.routeData['apptitle'] = 'home';
            this.routeData['showContent'] = 'home';
        }
        //this.tittle = this.routeData['apptitle'];
    }
    /** pool to refresh */
    isInProgress: boolean = false;

    onPull() {
        console.log('od pull component');
        this.isInProgress = true;
    }
    ngOnInit() {
        this.supportedLanguages = [{
                display: 'MK',
                value: 'mk'
            },
            {
                display: 'EN',
                value: 'en'
            },
            // {display:'ES',value:'es'},

        ];
        this.refreshFeed();
        this.newApiCall();
        this.StoreAppCall();



        this.subscribeToLangChanged();

        // set language
        this._translate.setDefaultLang('mk');
        this._translate.enableFallback(true);
        //this.selectLang('es');
    }

    refreshFeed() {
        this.feeds.length = 0;
        // Adds 1s of delay to provide user's feedback.
        this.feedService.getFeedContent(this.feedUrl)
            .subscribe(
                feeda => this.feeds = feeda.items,
                error => console.log(error));
    }

    newApiCall() {
        this.catalogFeed.length = 0;
        this.feedCatalogusService.getFeedContent(this.categoryFeedUrl)
            .subscribe(
                feeda => this.catalogFeed = feeda.records,
                error => console.log(error));
    }
    StoreAppCall() {
        this.storeFeed.length = 0;
        this.feedCatalogusService.getStoreContent('')
            .subscribe(
                feeda => this.storeFeed = feeda.records,
                error => console.log(error));
    }

    /** Language Setup Methods */
    isCurrentLang(lang: string) {
        return lang === this._translate.currentLang;
    }

    selectLang(lang: string) {
        // set default;
        this._translate.use(lang);
        // this.refreshText(); // remove
    }

    refreshText() {
        this.translatedText = this._translate.instant('hello world');
    }

    subscribeToLangChanged() {
        return this._translate.onLangChanged.subscribe(x => this.refreshText());
    }

}
