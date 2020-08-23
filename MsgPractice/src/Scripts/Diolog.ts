import { ui } from "./../ui/layaMaxUI";
export default class DiaLab extends ui.test.SceneUI {
    static instance: DiaLab;
    private word: number;
    private line: number;
    private lineComplete: boolean;
    private splitted: string;
    private showWord: number;
    private story: string[] = ["在非洲，每六十秒，就有一分鐘過去",
        "凡是每天喝水的人，有高機率在100年內死去",
        "誰能想的到，這名16歲少女，在四年前，只是一名12歲少女",
        "台灣人在睡覺時，大多數的美國人都在工作",
        "當蝴蝶在南半球拍了兩下翅膀，牠就會稍微飛高一點點",
        "據統計，未婚生子的人數中有高機率為女性",
    ];
    constructor() {
        super();
        DiaLab.instance = this;
    }
    isEnd(): void{
        if(this.story[this.line+1] == undefined){ 
            this.Diolog.off(Laya.Event.CLICK, this, this.ClickFn);
            console.log("結束");
            return;     
        }else if (this.story[this.word] == undefined) {
            this.word = 0;
            this.Diolog.text = "";
            this.line ++;
            return;
        }
    }

    onAwake(): void {
        this.word = 0;
        this.line = 0;
        this.lineComplete = false;
        this.ShowWords();
    }

    ShowWords() : void {
        this.showWord = setInterval( ()=>{  
            this.splitted = this.story[this.line][this.word];//.split("");
            if(this.splitted == undefined) return;   
            this.Diolog.text += this.splitted;//[this.word];
            this.word ++;            
            if(this.story[this.line][this.word] == undefined){
                clearInterval(this.showWord);
                this.lineComplete = true;
            }
            },150);
    }

    onEnable(): void {
        this.Diolog.on(Laya.Event.CLICK, this, this.ClickFn);
    } 

    ClickFn(e: Laya.Event): void {
        this.lineComplete = !this.lineComplete;
        if(this.lineComplete){
            clearInterval(this.showWord);
            this.word = this.story[this.line].length;
            this.Diolog.text = this.story[this.line];
        }else{
            this.isEnd();
            this.ShowWords();
        }
    }
}