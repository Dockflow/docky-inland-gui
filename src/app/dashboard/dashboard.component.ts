import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // harcoded data
  redIcon = 'assets/red.png';
  greenIcon = 'assets/green.png';

  latitude = 51.223969448553845;
  longitude = 4.383714538249889;
  zoom = 10;

  polylines = [
    { path: [
      { latitude: 51.425640398883864, longitude: 3.9634874837035365, name: 'P1', wait_time: 2 },
      { latitude: 51.35022492716274, longitude: 4.2848375845289715, name: 'P2', wait_time: 6 }
    ], color: 'green'},
    { path: [
      { latitude: 51.35022492716274, longitude: 4.2848375845289715, name: 'P3', wait_time: 2 },
      { latitude: 51.212787298270584, longitude: 4.38646112033531, name: 'P4', wait_time: 8 }
    ], color: 'red'},
    { path: [
      { latitude: 51.212787298270584, longitude: 4.38646112033531, name: 'P5', wait_time: 2 },
      { latitude: 51.1852504131169, longitude: 4.334276061226908, name: 'P6', wait_time: 7 },
      { latitude: 51.074938222541846, longitude: 4.260118345651808, name: 'P7', wait_time: 2 },
      { latitude: 51.02313865365139, longitude: 4.249132017418459, name: 'P8', wait_time: 2 },
      { latitude: 50.84485234781283, longitude: 4.559495790010545, name: 'P9', wait_time: 2 }
    ], color: 'green'},
  ];

  ports = [
    {
      id: 1,
      name: 'Antwerp'
    },
    {
      id: 2,
      name: 'Paris'
    },
    {
      id: 3,
      name: 'Rotterdam'
    }
  ]

  corridors = [
    {
      id: 1,
      name: 'C1',
      wait_time: 2,
      locks: 5,
    },
    {
      id: 2,
      name: 'C2',
      wait_time: 10,
      locks: 8,
    },
    {
      id: 3,
      name: 'C3',
      wait_time: 5,
      locks: 2,
    },
    {
      id: 4,
      name: 'C4',
      wait_time: 6,
      locks: 3,
    },
    {
      id: 5,
      name: 'C5',
      wait_time: 4,
      locks: 5,
    },
    {
      id: 6,
      name: 'C6',
      wait_time: 8,
      locks: 7,
    }
  ];
  // hardcoding ends here

  public corridorForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    //
  }

  submit(): void {
    const rawValue = this.corridorForm.getRawValue();
    console.log(rawValue);
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
