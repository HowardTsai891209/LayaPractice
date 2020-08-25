import DiaLab from "./Diolog"
export default class Reader extends Laya.Script{
    constructor() {
        super();
    }

    read(Num?: number): void {
        Laya.loader.load("../laya/assets/res/test.csv", new Laya.Handler(this, (e) => {
            DiaLab.instance.nameCase(e.split(",")[Num]);
            if (DiaLab.instance.line > 5) return;
            DiaLab.instance.story.length = 0;
            DiaLab.instance.story = DiaLab.instance.story.concat(e.split(","));
        }));
    }
}