class ParkingLot {
    // Add the methods here

    constructor(slots){
        this.slots = new Array(slots);
        console.log("slots: " + this.slots.length);
    }

    park(carID){
        let newID = "CAR-"+carID;
        this.slots.forEach(element => function(){
            if(element == newID){
                console.log("Car is parked in" +  this.slots.indexOf(element));
            }
        else{
        this.slots.push(newID);
        console.log("parked "+newID +" in location " + this.slots.indexOf(newID) +   "\n");
        }
    });
}



    getSlots(){
        let emptySpots = [];
        for(var i=1; i<this.slots.length; i++){
        if(this.slots[i] == null){
            emptySpots.push("Spot " + i + " is empty");
        }
        else{
            emptySpots.push('Spot '+ i +' is occupied by ' + this.slots[i]);
        }
    }
    emptySpots.forEach(element=> console.log(element));
    }

    getCar(carID){
        let newID = "CAR-"+carID;
        
        for(var i=1; i<this.slots.length; i++){
        if(this.slots[i] == newID){
            this.slots[i] = null;
            console.log (newID + " removed \n");
        }
    }
    }
}

var lot = new ParkingLot(4);
lot.park(10);
console.log("test");
lot.park(10);
