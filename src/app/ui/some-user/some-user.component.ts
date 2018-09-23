import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee, ItemBase, AREA_DATA, JOB_TITLE_DATA } from '../../models/employees.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { CountriesService } from '../../shared/countries.service';
import { Country } from '../../models/countries.model';

enum Views { new, edit, view }

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
  job_titles = JOB_TITLE_DATA;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>,
    private countriesService: CountriesService) {
    this.employees = store.select('employee');
  }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.view = params['view'] as Views;
      this.currentEmployee.id = params['id'];
      this.employees.subscribe(employees => {
        this.currentEmployee = employees.find(x => x.id == this.currentEmployee.id);
        this.currentEmployee.area = this.areas.find(x => x.id == this.currentEmployee.area.id);
        this.currentEmployee.jobTitle = this.job_titles.find(x => x.id == this.currentEmployee.jobTitle.id);
      });

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

}
