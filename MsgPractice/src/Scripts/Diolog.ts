import { ui } from "./../ui/layaMaxUI";
export default class DiaLab extends ui.test.SceneUI {
    static instance: DiaLab;

    constructor(){
    super();
    DiaLab.instance = this;
    }

    onEnable(): void {
        this.Diolog.on(Laya.Event.CLICK, this, this.ClickFn);
    }

    ClickFn(e: Laya.Event): void {
        this.Diolog.text = "123";
    }
}