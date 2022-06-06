class Ninja{
    constructor(ninjaName, health){
        this.ninjaName=ninjaName;
        this.health=health;
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

const Apolo=new Ninja("apollo",100);

Apolo.drinkSake();
Apolo.showStats();