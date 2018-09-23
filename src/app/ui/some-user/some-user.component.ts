import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../models/employees.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { CountriesService } from '../../shared/countries.service';
import { Country } from '../../models/countries.model';
import { AREA_DATA } from '../../models/base.model';

enum Views { new, edit, view }
enum JobTitleEnum { waitress = 4, dining = 5 }

@Component({
  selector: 'app-some-user',
  templateUrl: './some-user.component.html',
  styleUrls: ['./some-user.component.css'],
  providers: [CountriesService]

})
export class SomeUserComponent implements OnInit {

  private sub: any;
  view = Views.new;
  views = Views;
  currentEmployee = new Employee();
  employees: Observable<Employee[]>;
  countries: Country[] = [];
  areas = AREA_DATA;
  jobsTitleEnum = JobTitleEnum;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>,
    private countriesService: CountriesService) {

    this.employees = store.select('employee');
  }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {

      let name_enum: string = params['view'];
      this.view = <Views>Views[name_enum];
      this.currentEmployee.id = params['id'];

      if (this.view != this.views.new) {
        this.employees.subscribe(employees => {
          this.currentEmployee = employees.find(x => x.id == this.currentEmployee.id);
          this.currentEmployee.area = this.areas.find(x => x.id == this.currentEmployee.area.id);

          this.currentEmployee.jobTitle = this.currentEmployee.jobTitle;
        });
      }

      this.getCountries();

    });

  }

  back() {
    this.router.navigateByUrl('/employees');
  }

  getCountries() {
    this.countriesService.GetCountries().subscribe(
      data => {
        if (data) {
          this.countries = data;
          if (this.currentEmployee && this.currentEmployee.country && this.view != this.views.new) {
            this.currentEmployee.country = this.countries.find(x => x.alpha3Code == this.currentEmployee.country.alpha3Code);
          }
        }
        else {
          this.countries = [];
        }
      },
      error => { alert(error); });
  }

  save() {
    console.log(this.currentEmployee);
  }

  selectJobTitleParent(jobTitle) {
    this.currentEmployee.jobTitle = jobTitle;
  }

}
