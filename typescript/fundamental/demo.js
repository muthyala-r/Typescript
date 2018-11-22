var ClassDemo = /** @class */ (function () {
    //private x : number;
    //private y : number;
    function ClassDemo(x, y) {
        this.x = x;
        this.y = y;
        this.x = x;
        this.y = y;
    }
    Object.defineProperty(ClassDemo.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error("value cannot be less than zero");
            }
            else {
                console.log(" we are in setter method " + this.x);
            }
        },
        enumerable: true,
        configurable: true
    });
    ClassDemo.prototype.draw = function () {
        console.log('x value is ' + this.x + ' y value is ' + this.y);
    };
    return ClassDemo;
}());
var obj = new ClassDemo(20);
obj.X = -1;
console.log(obj.X);
obj.draw();
