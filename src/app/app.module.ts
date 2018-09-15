import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { EmployeesComponent } from './ui/employees/employees.component';
import { SomeUserComponent } from './ui/some-user/some-user.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UiModule,


    // App Routing
    RouterModule.forRoot([
      { path: '', redirectTo: 'employees', pathMatch: 'full' },
      { path: 'employees', component: EmployeesComponent },
      { path: 'some-user', component: SomeUserComponent },
      { path: '**', redirectTo: 'employees' }
    ])
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
