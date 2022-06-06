class Ninja{
    constructor(ninjaName){
        this.ninjaName=ninjaName;
        this.health=100;
        this.speed=3;
        this.strength=3;
    }

    sayName(){
        console.log("name: ",this.ninjaName);
    }

    showStats(){
        console.log("name: ",this.ninjaName,"\n", "Strength: ",this.strength,"\n","speed: ",this.speed,"\n","health: ",this.health);
    }

    drinkSake(){
        this.health+=10;
    }

}

class Sensei extends Ninja{

    constructor(senseiName){
        super(senseiName);
        this.health=200;
        this.speed=10;
        this.strength=10;
        this.wisdom=10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log("practice makes perfect");
    }

}

const Apolo=new Ninja("apolo");

Apolo.drinkSake();
Apolo.showStats();



// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();