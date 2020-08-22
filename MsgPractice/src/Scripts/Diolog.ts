import { ui } from "./../ui/layaMaxUI";
export default class DiaLab extends ui.test.SceneUI {
    static instance: DiaLab;
    private word: number;
    private line: number;
    private lineComplete: boolean;
    private splitted: string;
    private showWord: number;
    private story: string[] = ["一二三四五六七",
        "一二三四五六七八",
        "一二三四五六七八九",
        "一二三四五六七八九十",
        "一二三四五六七八九十1",
        "一二三四五六七八九十12",
    ];
    constructor() {
        super();
        DiaLab.instance = this;
    }
    isEnd(): void{
        if(this.story[this.line] == undefined){ 
            clearInterval(this.showWord);             
            this.Diolog.off(Laya.Event.CLICK, this, this.ClickFn);  
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
        this.showWord = setInterval(()=>{  
            this.splitted = this.story[this.line][this.word];//.split("");   
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