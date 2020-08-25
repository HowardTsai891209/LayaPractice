import DiaLab from "./Diolog"
export default class Reader extends Laya.Script{
    constructor() {
        super();
    }
    onAwake():void {
    }

    read(Num?: number): void {
        Laya.loader.load("../laya/assets/res/test.csv", new Laya.Handler(this, (e) => {
            DiaLab.instance.story.length = 0;
            DiaLab.instance.story = DiaLab.instance.story.concat(e.split(","));
            DiaLab.instance.nameCase(e.split(",")[Num]);
            // DiaLab.instance.ShowWords();
        }));
    }

}