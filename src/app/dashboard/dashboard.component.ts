import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  latitude = 51.223969448553845;
  longitude = 4.383714538249889;
  zoom = 10;

  polylines = [
    { path: [
      { latitude: 51.425640398883864, longitude: 3.9634874837035365 },
      { latitude: 51.35022492716274, longitude: 4.2848375845289715 }
    ], color: 'green'},
    { path: [
      { latitude: 51.35022492716274, longitude: 4.2848375845289715 },
      { latitude: 51.212787298270584, longitude: 4.38646112033531 }
    ], color: 'red'},
    { path: [
      { latitude: 51.212787298270584, longitude: 4.38646112033531 },
      { latitude: 51.1852504131169, longitude: 4.334276061226908 },
      { latitude: 51.074938222541846, longitude: 4.260118345651808 },
      { latitude: 51.02313865365139, longitude: 4.249132017418459 },
      { latitude: 50.84485234781283, longitude: 4.559495790010545 }
    ], color: 'green'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
