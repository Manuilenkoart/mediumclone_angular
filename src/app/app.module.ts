import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import {StoreModule} from '@ngrx/store'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {AuthModule} from 'src/app/auth/auth.module'
import {environment} from 'src/environments/environment'
import {EffectsModule} from '@ngrx/effects'
import {TopBarModule} from 'src/app/shared/modules/topBar/topBar.module'
import {Authinterceptor} from './shared/services/authinterceptor.service'
import {PersistanceService} from './shared/services/persistance.service'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([]),
    TopBarModule
  ],
  providers: [PersistanceService,
    {provide: HTTP_INTERCEPTORS,
    useClass: Authinterceptor,
    multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
