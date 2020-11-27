import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ports, corridors } from 'src/dump';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  redIcon = 'assets/red.png';
  greenIcon = 'assets/green.png';
  ports = ports;
  corridors = null;
  polylines = null;

  latitude = 51.223969448553845;
  longitude = 4.383714538249889;
  zoom = 10;

  public corridorForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    //
  }

  getPolylines(corridors) {
    return corridors.map((corridor) => {
      return {
        path: corridor.locks,
        color: corridor.wait_time > 30 ? 'red' : 'green',
      }
    });
  }

  submit(): void {
    const rawValue = this.corridorForm.getRawValue();
    this.corridors = corridors;
    this.polylines = this.getPolylines(this.corridors);
  }

  viewStats(corridorId: number): void {
    this.router.navigate([`/stats/${corridorId}`]);
  }

  ngOnInit(): void {
    this.corridorForm = this.formBuilder.group({
      fromPort: ['', Validators.compose([Validators.required])],
      toPort: ['', Validators.compose([Validators.required])],
      sailingDate: ['', Validators.compose([Validators.required])],
    });
  }

}
