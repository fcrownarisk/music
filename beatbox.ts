import 'Amajor'
import 'Cmajor'
import 'Eminor'
import 'Gmajor'
declare module x{}
declare module y{}
declare module z{}
declare module t{}
void function xyz(){
  this.x = void function()
  {this.y = function(){
   this.z = function(){
       this.t = function(){
           console.log('xyz')
       }
     }
   }
  }
}
export function beatbox(){
  "|_|_|_|"
  "|_|_|_|"
  "|_|_|_|"
void function beat(){
    console.log("beat");
}
void function box(){
    console.log("box");
}
console.log('x,y,z')
}