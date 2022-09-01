import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { UtilitiesService } from './services/utilities.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, TitleComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [UtilitiesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
