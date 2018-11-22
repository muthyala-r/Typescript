"use strict";
exports.__esModule = true;
var LikeComponent = /** @class */ (function () {
    function LikeComponent(likeCount, isStatus) {
        this.likeCount = likeCount;
        this.isStatus = isStatus;
    }
    LikeComponent.prototype.onClick = function () {
        /* if(this.isStatus){
           this.likeCount++;
           this.isStatus = false;
   
        }else{
            this.likeCount--;
            this.isStatus = true;
        } */
        this.likeCount += (this.isStatus) ? 1 : -1;
        this.isStatus = !this.isStatus;
    };
    Object.defineProperty(LikeComponent.prototype, "LikeCount", {
        get: function () {
            return this.likeCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikeComponent.prototype, "IsStatus", {
        get: function () {
            return this.isStatus;
        },
        enumerable: true,
        configurable: true
    });
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
