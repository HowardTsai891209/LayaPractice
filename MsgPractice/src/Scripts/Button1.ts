import DiaLab from "./Diolog"
export default class Button1 extends Laya.Script{
    public Btn1: Laya.Button;

    constructor() {
        super();
    }

    onEnable(): void{
        let button: Laya.Button = this.owner as Laya.Button;
        button.on(Laya.Event.CLICK, this,()=>{
        DiaLab.instance.button1Click();
        });
    }
}