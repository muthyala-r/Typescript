"use strict";
exports.__esModule = true;
var like_component_1 = require("./like.component");
var comp = new like_component_1.LikeComponent(10, true);
comp.onClick();
console.log("Like count : " + comp.LikeCount + " , status : " + comp.IsStatus);
