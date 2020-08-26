import DiaLab from "./Diolog"
import commandReader from "./commandReader"
export default class Reader extends Laya.Script{
    public nameStart: number;
    public lineStart: number;
    // private finder: number;
    private storyPath: string = "../laya/assets/res/test.csv";
    constructor() {
        super();
    }

    read(Num?: number): void {
        Laya.loader.load(this.storyPath, new Laya.Handler(this, (e) => {      
            DiaLab.instance.nameCase(e.split(",")[Num]);
            if (DiaLab.instance.onlyOnce) return;
            DiaLab.instance.story.length = 0;
            DiaLab.instance.story = DiaLab.instance.story.concat(e.split(","));
        }));
    }

    // findNameStart(text: string): void{
    //     for(this.finder = 6;this.finder < 100;this.finder += DiaLab.instance.findNext){
    //         if(text[this.finder] != ""){
    //             DiaLab.instance.chaNum = this.finder;
    //             console.log(this.finder);
    //             break;
    //         }
    //     }
    // }

    // findLineStart(text: string): void{
    //     for(this.finder = 7;this.finder < 100;this.finder += DiaLab.instance.findNext){
    //         if(text[this.finder] != ""){
    //             DiaLab.instance.line = this.finder;
    //             break;
    //         }
    //     }
    // }
}