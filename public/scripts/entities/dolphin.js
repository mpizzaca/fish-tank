class Dolphin extends Fish {
  constructor(options) {
    super(options);
    this.imageUri = '/images/dolphin.png';
  }
  onClick(e) {
    console.log('Squeek!');
  }
}
