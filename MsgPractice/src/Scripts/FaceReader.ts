import DiaLab from "./Diolog"
export default class faceReader extends Laya.Script{
    constructor() {
        super();   
    }

    readFace(text?: string):void {       
        if(text[DiaLab.instance.chaNum] == ""){
            DiaLab.instance.Face.skin = "";
        }else if(text[DiaLab.instance.chaNum] == "吳俞恆"){
            switch(text[DiaLab.instance.faceNum]){
                case "大哭":
                    DiaLab.instance.Face.skin = "face/Zh/Zh_a1003.png";
                    break;
                case "大笑":
                    DiaLab.instance.Face.skin = "face/Zh/Zh_a1005.png";
                    break;
            }
        } else if(text[DiaLab.instance.chaNum] == "少女"){
            switch(text[DiaLab.instance.faceNum]){
                case "大哭":
                    DiaLab.instance.Face.skin = "face/Gu/Gu_a1003.png";
                    break;
                case "大笑":
                    DiaLab.instance.Face.skin = "face/Gu/Gu_a1005.png";
                    break;
            }
        }
    }
}