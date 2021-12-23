"use strict";
/* Airplane TASK
Write an Airplane object that initializes name.
Give airplanes the ability to .takeOff() and .land():
If a plane takes off, its isFlying property is set to true.
If a plane lands, its isFlying property is set to false.*/

const Plane = {
  takeOf() {
    this.isFlying = true;
  },
  lands() {
    this.isFlying = false;
  },
};

const ToArmenia = {
  ThePlaneName: "6A",
  isFlying: false,
  __proto__: Plane,
};

const ToFrance = {
  ThePlaneName: "AFR",
  isFlying: true,
  __proto__: Plane,
};

Plane.lands();
console.log(Plane.isFlying);
Plane.takeOf();
console.log(Plane.isFlying);
