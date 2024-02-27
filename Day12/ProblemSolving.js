var number = function(busStops){
    let arrGetOn = [];
    let arrGetOf = [];
    let peopleGetOf = 0;
    let peopleGetOn = 0;
    let peopleInBus = 0;
  
    for (i = 0; i < busStops.length; i++) {
        arrGetOn.push(busStops[i][0]);
        arrGetOf.push(busStops[i][1]);
    }
  
    for (i = 0; i < busStops.length; i++) {
        peopleGetOf = peopleGetOf + arrGetOf[i];
        peopleGetOn = peopleGetOn + arrGetOn[i];
    }
    peopleInBus = peopleGetOn - peopleGetOf;
    // console.log(arrGetOn, arrGetOf);
    // console.log(peopleGetOn, peopleGetOf);
    return peopleInBus;
}

console.log(number([[10,0],[3,5],[5,8]]));

