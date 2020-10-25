console.log('app is loading ...');

function Station(id , name){
    this.id = id;
    this.name = name;
}

let stationHealth = new Map();
let station1 = new Station("1","Haifa"),station2 = new Station("1","Tel-Aviv");
stationHealth.set(station1,[true , false]);
stationHealth.set(station2,[true , true]);

console.log(`stationHealth.size : ${stationHealth.size}`);

console.log(stationHealth.get(station1));
console.log(stationHealth.get(station2));