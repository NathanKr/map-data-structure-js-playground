console.log('app is loading ...');

function Station(id , name){
    this.id = id;
    this.name = name;
}

let stationHealth = new Map();
let station1 = new Station("1","Haifa"),station2 = new Station("1","Tel-Aviv");
let ar1 = [true , false] , ar2 = [true , true];
stationHealth.set(station1,ar1);
stationHealth.set(station2,ar2);

console.log(`stationHealth.size : ${stationHealth.size}`);
stationHealth.get(station1).push(false);

console.log(stationHealth.get(station1));
console.log(stationHealth.get(station2));

