import DiaLab from "./Diolog"
import commandReader from "./commandReader"
import faceReader from "./FaceReader"
export default class Reader extends Laya.Script{
    public nameStart: number;
    public lineStart: number;
    private comReader: commandReader;
    private faReader: faceReader;
    private storyPath: string = "../laya/assets/res/test.csv";
    constructor() {
        super();
    }

    onAwake(): void {
        this.comReader = this.owner.getComponent(commandReader);
        this.faReader = this.owner.getComponent(faceReader);
    }

    read(Num?: number): void {
        Laya.loader.load(this.storyPath, new Laya.Handler(this, (e) => {            
            this.comReader.readCom(e.split(","));
            this.faReader.readFace(e.split(","));     
            DiaLab.instance.nameCase(e.split(",")[Num]);
            if (DiaLab.instance.onlyOnce) return;
            DiaLab.instance.story.length = 0;
            DiaLab.instance.story = DiaLab.instance.story.concat(e.split(","));
        }));
    }
}