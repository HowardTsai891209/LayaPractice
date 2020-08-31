import DiaLab from "./Diolog"
import ButtonObj from "./ButtonObject"
export default class Button2 extends Laya.Script{
    private btnObj: ButtonObj;
    constructor() {
        super();
    }
    
    onAwake():void{
        this.btnObj = this.owner.getComponent(ButtonObj);
    }

    onEnable(): void{
        let button: Laya.Button = this.owner as Laya.Button;
        button.on(Laya.Event.CLICK, this,()=>{
            DiaLab.instance.Btn2.skin = "Dialog/按鈕(選擇).png";
            DiaLab.instance.selNum += DiaLab.instance.findNext; 
            this.btnObj.btnClick();
            this.btnObj.selectionJump();  
        });
        button.on(Laya.Event.MOUSE_OVER, this,()=>{ 
            DiaLab.instance.Btn2.skin = "Dialog/按鈕(接觸).png";           
        })
        button.on(Laya.Event.MOUSE_OUT, this,()=>{ 
            DiaLab.instance.Btn2.skin = "Dialog/按鈕(未選)_修正.png";           
        })
    }
}