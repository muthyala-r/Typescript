import { LikeComponent } from './like.component';


let comp = new LikeComponent(10,true);

comp.onClick();
console.log(`Like count : ${comp.LikeCount} , status : ${comp.IsStatus}`)