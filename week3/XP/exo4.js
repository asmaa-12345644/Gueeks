const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

console.log(building.numberOfFloors);

console.log("1st floor: " + building.numberOfAptByFloor.firstFloor);
console.log("3rd floor: " + building.numberOfAptByFloor.thirdFloor);


let secondTenant = building.nameOfTenants[1]; 
let danRooms = building.numberOfRoomsAndRent.dan[0]; 

console.log(`${secondTenant} has ${danRooms} rooms.`);


if(building.numberOfRoomsAndRent.sarah[1]+building.numberOfRoomsAndRent.david[1]>building.numberOfRoomsAndRent.dan[1]){
    building.numberOfRoomsAndRent.dan[1]=1200
}