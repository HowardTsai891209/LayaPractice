/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import Diolog from "./Scripts/Diolog"
/*
* 游戏初始化配置;
*/
export default class GameConfig{
    static width:number=640;
    static height:number=1136;
    static scaleMode:string="full";
    static screenMode:string="none";
    static alignV:string="middle";
    static alignH:string="left";
    static startScene:any="Msg.scene";
    static sceneRoot:string="";
    static debug:boolean=false;
    static stat:boolean=false;
    static physicsDebug:boolean=false;
    static exportSceneToJson:boolean=true;
    constructor(){}
    static init(){
        var reg: Function = Laya.ClassUtils.regClass;
        reg("Scripts/Diolog.ts",Diolog);
    }
}
GameConfig.init();