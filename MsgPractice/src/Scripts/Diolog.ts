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
        if(this.story[this.line] == undefined){    
            clearInterval(this.showWord);          
            this.Diolog.text = "換下一章";   
            this.Diolog.off(Laya.Event.CLICK, this, this.ClickFn);  
            return;     
        }else if (this.story[this.word] == undefined) {
            this.word = 0;
            this.Diolog.text = "";
            this.line ++;
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
        this.lineComplete = false;
        this.ShowWords();
    }

    ShowWords() : void {
        this.showWord = setInterval(()=>{  
            this.isEnd();   
            this.splitted = this.story[this.line][this.word];//.split("");   
            this.Diolog.text += this.splitted;//[this.word];
            this.word ++;
            if(this.story[this.word] == undefined){
                clearInterval(this.showWord);
                this.lineComplete = true;
            }
            },350);
    }

    onEnable(): void {
        this.Diolog.on(Laya.Event.CLICK, this, this.ClickFn);
    } 

    ClickFn(e: Laya.Event, value: number = 1): void {
        this.isEnd();

        if(!this.lineComplete){
            this.lineComplete = !this.lineComplete;
        }else{
            this.lineComplete = !this.lineComplete;
        }
        
        if(this.lineComplete){
            clearInterval(this.showWord);
            this.word = this.story[this.word].length;
            this.Diolog.text = this.story[this.line];
        }else{
            this.ShowWords();
        }
    }
}