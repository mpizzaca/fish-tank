class BiteFish extends Fish {
  constructor(options) {
    super(options);
    this.imageUri = '/images/bite-fish.gif';
  }

  onClick(event) {
    for (let proximateDenizen of this.tank.getProximateDenizens(this.position, 75)) { // Get array of nearby Denizens
      if (proximateDenizen instanceof SwitchFish || proximateDenizen instanceof GoFish) { // BiteFish only eat SwitchFish and GoFish.
        proximateDenizen.kill(); // :(
      }
    }
  }
}
