import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormdemoComponent } from './formdemo/formdemo.component';
import { TemplateformComponent } from './templateform/templateform.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { I1 } from 'src/shared/services/interceptor';

@NgModule({
  declarations: [
    AppComponent,
    FormdemoComponent,
    TemplateformComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: I1,
      multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
