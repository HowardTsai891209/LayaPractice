import { ui } from "./../ui/layaMaxUI";
export default class DiaLab extends ui.test.SceneUI {
    static instance: DiaLab;
    private word: number;
    private line: number;
    private lineComplete: boolean;
    private splitted: string;
    private showWord: number;
    constructor() {
        super();
        DiaLab.instance = this;
    }
    isEnd(): void{
        if (this.word >= 6) {
            this.word = 0;
            this.Diolog.text ="";
            this.line ++;
            return;
        }
        if(this.story[this.line] == undefined){
            return;
        }  
    }
    private story: string[] = ["這是第1句話",
            "這是第2句話",
            "這是第3句話",
            "這是第4句話",
            "這是第5句話",
            "這是第6句話",
        ];

    onAwake(): void {
        this.word = 0;
        this.line = 0;
        // this.lineComplete = false;
        this.showWord = setInterval(()=>{  
            this.isEnd();   
            var splitted = this.story[this.line][this.word];//.split("");   
            this.Diolog.text += splitted;//[this.word];
            this.word ++;
            },350);
    }

    onEnable(): void {
        this.Diolog.on(Laya.Event.CLICK, this, this.ClickFn);
    }
      

    ClickFn(e: Laya.Event, value: number = 1): void {
        this.isEnd(); 
        this.lineComplete = true;
        if(this.lineComplete){
            clearInterval(this.showWord);
            this.word = 6;
            this.Diolog.text = this.story[this.line];
            // this.lineComplete = !this.lineComplete;
        }
    }
}