class Cylinder {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }

  get volume() {
    const pi = Math.PI;
    const r = this.radius;
    const h = this.height;
    const volume = pi * Math.pow(r, 2) * h;
    return volume.toFixed(4);
  }
}

// Example usage:
const cylinder = new Cylinder(5, 10);
console.log(`Volume of cylinder: ${cylinder.volume}`);
