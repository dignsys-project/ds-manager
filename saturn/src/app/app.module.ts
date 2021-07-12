import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './materials.module';
import { HeaderModule } from './header/header.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderSideModule } from './header-side/header-side.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';
import { JwtInterceptor } from 'src/interceptors/jtw-interceptor';
import { OverlayContainer } from '@angular/cdk/overlay';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    HeaderModule,
    HeaderSideModule,
    FlexLayoutModule,
    HttpClientModule,
    RouterModule,
    LayoutModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(overlayContainer: OverlayContainer) {
    overlayContainer.getContainerElement().classList.add('dark-theme');
  }
}
