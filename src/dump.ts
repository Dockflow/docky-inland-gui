export const ports = [
  {
    id: 1,
    name: 'Antwerp'
  },
  {
    id: 2,
    name: 'Kortrijk'
  },
];

export const corridors = [
  {
    name: 'Scheldt',
    id: 1,
    wait_time: 41, // minutes
    travel_time: 1086,
    distance: 215,
    locks: [
        {
            "name": "Boudewijnsluis",
            "waterway": "Scheldt",
            "lat": 51.280080,
            "lng": 4.330560,
            "transfer_time": "40",
            "travel_time": "0",
            "distance": "0",
            "wait_time": 5,
            "travel_speed": 10
        },
        {
            "name": "Sluizen te Merelbeke",
            "waterway": "Ringvaart om Gent",
            "lat": 51.008723,
            "lng": 3.7487,
            "transfer_time": "40",
            "travel_time": "500",
            "distance": "125",
            "wait_time": 7,
            "travel_speed": 10
        },
  {
            "name": "Sluis te Asper",
            "waterway": "Boven-Schelde",
            "lat": 50.9168,
            "lng": 3.6667,
            "transfer_time": "15",
            "travel_time": "120",
            "distance": "30",
            "wait_time": 9,
            "travel_speed": 6
        },
  {
            "name": "Sluis te Oudenaarde",
            "waterway": "Boven-Schelde",
            "lat": 50.85205,
            "lng": 3.620902,
            "transfer_time": "15",
            "travel_time": "75",
            "distance": "18.75",
            "wait_time": 2,
            "travel_speed": 10
        },
  {
            "name": "Sluis te bossuit",
            "waterway": "Kanaal Bossuit-Kortrijk",
            "lat": 50.749605,
            "lng": 3.411484,
            "transfer_time": "10",
            "travel_time": "75",
            "distance": "18.75",
            "wait_time": 5,
            "travel_speed": 8
        },
  {
            "name": "Sluis te Moen",
            "waterway": "Kanaal Bossuit-Kortrijk",
            "lat": 50.779254,
            "lng": 3.380089,
            "transfer_time": "20",
            "travel_time": "30",
            "distance": "7.5",
            "wait_time": 6,
            "travel_speed": 6
        },
  {
              "name": "Nieuwe sluis te Zwevegem",
            "waterway": "Boven-Schelde",
            "lat": 50.822970,
            "lng": 3.345384,
            "transfer_time": "25",
            "travel_time": "30",
            "distance": "7.5",
            "wait_time": 4,
            "travel_speed": 6
        },
  {
            "name": "Sluis 11 te Kortrijk",
            "waterway": "Kanaal Bossuit-Kortrijk",
            "lat": 50.834551,
            "lng": 3.270736,
            "transfer_time": "20",
            "travel_time": "30",
            "distance": "7.5",
            "wait_time": 3,
            "travel_speed": 6
        },
    ]
  },
  {
    name: 'Leie',
    id: 2,
    wait_time: 25,
    travel_time: 1951,
    distance: 178.75,
    locks: [
        {
            "name": "Van Cauwelaertsluis",
            "port": "Antwerp",
            "waterway": "Scheldt",
            "lat": 51.280080,
            "lng": 4.330560,
            "transfer_time": "30",
            "travel_time": "0",
            "distance": "0",
            "wait_time": 5,
            "travel_speed": 5
        },
    {
            "name": "Sluizen te Merelbeke",
            "waterway": "Ringvaart om Gent",
            "lat": 51.008723,
            "lng": 3.7487,
            "transfer_time": "40",
            "travel_time": "500",
            "distance": "125",
            "wait_time": 5,
            "travel_speed": 5
        },
    {
            "name": "Sluis te Sint-Baafs-Vijve",
            "waterway": "Leie",
            "lat": 50.913944,
            "lng": 3.414919,
            "transfer_time": "20",
            "travel_time": "90",
            "distance": "22.5",
            "wait_time": 9,
            "travel_speed": 9
        },
        {
            "name": "Stuwsluis te Harelbeke",
            "waterway": "Leie",
            "lat": 50.855051,
            "lng": 3.305402,
            "transfer_time": "15",
            "travel_time": "95",
            "distance": "23.75",
            "wait_time": 5,
            "travel_speed": 8
        },
        {
            "name": "Sluis 11 te Kortrijk",
            "waterway": "Kanaal Bossuit-Kortrijk",
            "lat": 50.834551,
            "lng": 3.270736,
            "transfer_time": "20",
            "travel_time": "30",
            "distance": "7.5",
            "wait_time": 1,
            "travel_speed": 10
        }
    ]
  }
];
