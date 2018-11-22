export class ClassDemo{
//private x : number;
//private y : number;

 constructor(private x:number,private y?:number){
     this.x = x;
     this.y = y;
 }
  get X() : number{
      return this.x;
  }
   
  set X(value){
     if(value < 0){
         throw new Error("value cannot be less than zero")
     }else{
         console.log(" we are in setter method "+this.x);
     }
  }
draw(){
    console.log('x value is '+this.x+' y value is '+this.y);
}

}


let obj = new ClassDemo(20);
obj.X = -1;
console.log(obj.X);
obj.draw();