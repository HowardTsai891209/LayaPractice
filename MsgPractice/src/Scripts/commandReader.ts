import DiaLab from "./Diolog"
export default class commandReader extends Laya.Script{
    constructor() {
        super();   
    }

    readCom(text: string):void {
        // console.log(text[DiaLab.instance.comNum]);
        switch(text[DiaLab.instance.comNum]){
            case "characterOn":
                console.log("show");
                break;
            case "characterOff":
                console.log("off");
                break;
            default:
                console.log(text[DiaLab.instance.comNum]);
                console.log("什麼都沒有");
                break;
        }
    }
}