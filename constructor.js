function wine(country, owner, yearsAged, color) {
  this.country = country;
  this.owner = owner;
  this.yearsAged = yearsAged;
  this.color = color;
}

let carloRossi = new wine("California", "E. & J. Gallo", "10", "red");
console.log(carloRossi);
console.log(typeof carloRossi);
