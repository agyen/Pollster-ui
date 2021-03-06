import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { ReactiveFormsModule } from '@angular/forms'
FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme);
import { RouterModule, Routes } from '@angular/router';



import {MatCardModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatButtonModule, MatInputModule, MatMenuModule, MatToolbarModule, MatSnackBarModule, MatDividerModule} from '@angular/material';
import { MatpollformComponent } from './matpollform/matpollform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ModelComponent } from './model/model.component';
import { ResponseComponent } from './response/response.component';
import { PollManagementComponent } from './poll-management/poll-management.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ThankyoupageComponent } from './thankyoupage/thankyoupage.component';



// Pass the fusioncharts library and chart module
@NgModule({
  declarations: [
    AppComponent,
    MatpollformComponent,
    FooterComponent,
    HeaderComponent,
    ModelComponent,
    ResponseComponent,
    PollManagementComponent,
    SpinnerComponent,
    ThankyoupageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FusionChartsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatToolbarModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatMenuModule,
    MatDividerModule,
    BrowserAnimationsModule, 
    FormsModule
    
  ],
  exports: [HeaderComponent, FooterComponent],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
