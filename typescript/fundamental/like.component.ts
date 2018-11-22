export class LikeComponent {
 constructor(private likeCount:number ,private isStatus :boolean){

    
 }

 onClick(){
     /* if(this.isStatus){
        this.likeCount++;
        this.isStatus = false;

     }else{
         this.likeCount--;
         this.isStatus = true;
     } */
   this.likeCount += (this.isStatus) ? 1:-1;
   this.isStatus = !this.isStatus;
     
 }


 get LikeCount(){
    return this.likeCount;
}

get IsStatus() {
    return this.isStatus;
}
}