/**
 * This file is used for implementing routes constatns and route events/trigers
 * 
 *
 * @summary   app.routing.ts FeedService class 
 *
 * @link      \src\app\app.routing.ts
 * @version   1.0.0.1 (last update= 22/08/17)
 * @requires CategoryFromComponent Component (@path src\app\category-from\category-from.component.ts),
 *           Routes, RouterModule
 * @class  /
 * @classdesc /
 * @author Aleksandar Milanov (@mrplasticbrain)
 */
/**
 * trigger on route change configuration
 */

import { Routes, RouterModule } from '@angular/router';
import {CategoryFromComponent} from './category-from/category-from.component';
/**
 * Route 
 * path : 'start'=>component Root app
 * path : 'category/:id'=> category component where we call HTTP request
 */
const MAINMENU_ROUTES: Routes = [
    { path: '', redirectTo: 'app-root', pathMatch: 'full' },
    { path: 'category/:id', component: CategoryFromComponent } 
];

export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);