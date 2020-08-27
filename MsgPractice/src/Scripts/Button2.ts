import { IbuttonObj } from "./ButtonObject"
import DiaLab from "./Diolog"
export class Button2 implements IbuttonObj{
    name = "123";
    btnClick(){
        console.log(this.name);
        
    }
}