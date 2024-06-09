const safeMode = false

class MissileSystem {
    constructor(num_missiles) {
        this.num_missiles = num_missiles;
    }
    get missiles() {
    return this.num_missiles;
    }
    launch(destination) {
        this.num_missiles -= 1;
        console.log("missile launched to " + destination);
    }
}

let launchMissiles = function(missileSystem) {
    missileSystem.launch("anywhere");
};
if (safeMode) {
    launchMissiles = function() {
    /* do nothing */
    console.log("nope")
    };
}

let missileSystem = new MissileSystem(1);

console.log("System has: " + missileSystem.missiles + " remaining");

console.log("launching missile");

launchMissiles(missileSystem);

console.log("System has: " + missileSystem.missiles + " remaining");
