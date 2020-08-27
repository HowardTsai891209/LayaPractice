import DiaLab from "./Diolog"
export default class commandReader extends Laya.Script{
    constructor() {
        super();   
    }

    readCom(text?: string):void {
        console.log(text[DiaLab.instance.comNum]);
    }
}