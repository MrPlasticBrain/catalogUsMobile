import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Material design.
import { MdCardModule, MdToolbarModule, MdButtonModule, MdIconModule, MdIconRegistry } from '@angular/material';

import { AppComponent } from './app.component';
import { FeedCardComponent } from './feed-card/feed-card.component';
import { FeedService } from './feed.service';
import { FeedCatalogusService } from './feed-catalogus.service';
import { StripHtmlTagsPipe } from './pipe/strip-html-tags.pipe';
import { SpinnerComponent } from './spinner/spinner.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryFromComponent } from './category-from/category-from.component';
import { CONST_ROUTING  } from './app.routing';
import { PromotionsCardComponent } from './promotions-card/promotions-card.component';

import {TranslatePipe} from './translate/translate.pipe';
import { TranslateService } from './translate/translate.service';
import { TRANSLATION_PROVIDERS }   from './translate/translations';
import { PoolToRefreshComponent } from './pool-to-refresh/pool-to-refresh.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedCardComponent,
    StripHtmlTagsPipe,
    SpinnerComponent,
    LeftMenuComponent,
    CategoryFromComponent,
    PromotionsCardComponent, TranslatePipe, PoolToRefreshComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MdCardModule,
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    CONST_ROUTING
  ],
  providers: [FeedService, MdIconRegistry,FeedCatalogusService,TRANSLATION_PROVIDERS, TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
