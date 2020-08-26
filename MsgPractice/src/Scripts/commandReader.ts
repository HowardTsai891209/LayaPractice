import DiaLab from "./Diolog"
export default class commandReader extends Laya.Script{
    public Face: Laya.Image;

    constructor() {
        super();
    }

    onAwake():void {
    }

    readCom(text?: string):void {    
        console.log(this.Face);
           
        // if(text[DiaLab.instance.chaNum] == "吳俞恆"){
        //     switch(text[DiaLab.instance.faceNum]){
        //         case "大哭":
        //             this.Face.skin = "face/Zh/Zh_a1001.png";
        //             break;
        //         case "大笑":
        //             this.Face.skin = "face/Zh/Zh_a1001.png";
        //             break;
        //     }
        // } else if(text[DiaLab.instance.chaNum] == "少女"){
        //     switch(text[DiaLab.instance.faceNum]){
        //         case "大哭":
        //             this.Face.skin = "face/Gu/Gu_a1001.png";
        //             break;
        //         case "大笑":
        //             this.Face.skin = "face/Gu/Gu_a1002.png";
        //             break;
        //     }
        // }
    }
}