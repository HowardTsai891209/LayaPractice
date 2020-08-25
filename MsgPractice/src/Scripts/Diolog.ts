import Reader from "./Reader"
export default class DiaLab extends Laya.Scene{
    static instance: DiaLab;//若其他程式要調用 則必須宣告
    private word: number;//文本中 每一句話個別的字數
    public line: number;//文本中 句數
    private lineComplete: boolean;//判斷 這句話是否講完
    private splitted: string;//把文本拆開
    private showWord: number;//讓文本一字一字出現的函式
    public story: string[] = [""];//文本
    public Diolog:Laya.Label;
    public Name:Laya.Label; 
    private reader: Reader;
    public chaNum: number;
    private findNext: number;
    
    createChildren():void {
        super.createChildren();
        this.loadScene("Msg");
    }
    
    constructor() {
        super();
        DiaLab.instance = this;
    }

    onEnable(): void {
        this.Diolog.on(Laya.Event.CLICK, this, this.ClickFn);
    }

    onAwake(): void {
        this.reader = this.getComponent(Reader);
        this.reader.read(this.chaNum);
        this.word = 0;
        this.line = 5;
        this.chaNum = 4;
        this.findNext = 3;
        this.lineComplete = false;
        this.ShowWords();
    }

    button1Click():void {

    }

    ShowWords(): void {//讓文本一字一字出現
        this.reader.read(this.chaNum);
        this.showWord = setInterval(() => {
            this.splitted = this.story[this.line][this.word];//把文本拆開 +1是為了避開 開頭的代號
            if (this.splitted == undefined) return; //運行到最後一字時 避免出錯  
            this.Diolog.text += this.splitted;
            this.word++;//跳下一個字            
            if (this.story[this.line][this.word] == undefined) {//判斷此句是否結束
                clearInterval(this.showWord);//關閉showWord
                this.lineComplete = true;
            }
        }, 120);
    }

    isEnd(): void {//判斷這句話是否講完 & 文本是否全部講完
        if (this.story[this.line + this.findNext] == undefined) { //文本是否結束
            this.Diolog.off(Laya.Event.CLICK, this, this.ClickFn);//關閉點擊事件
            console.log("結束");
            return;
        } else if (this.story[this.line][this.word] == undefined) {//此句是否結束
            this.word = 0;
            this.Diolog.text = "";
            this.line+=this.findNext;//跳下一句話
            this.chaNum+=this.findNext;
            return;
        }
    }

    ClickFn(e: Laya.Event): void {//點擊事件
        this.lineComplete = !this.lineComplete;
        if (this.lineComplete) {//文字還沒跳完時 點擊使他一次跳完
            clearInterval(this.showWord);
            this.word = this.story[this.line].length;//this.word = 此句最後一個字 (作為條件判斷是否進入下一句)
            this.Diolog.text = this.story[this.line];//.substring(0, this.story[this.line].length);//跳出完整句子 避開 開頭代號
        } else {//文字跳完時 點擊跳出下一句 並呼叫showWord
            this.isEnd();
            this.ShowWords();
        }
    }
            
    nameCase(name?: string): void {//抓取開頭代號 改變名字
        // this.nameNum = this.story[this.line].substring(0, 1);//取出開頭代號
        switch (name) {
            case "吳俞恆":
                DiaLab.instance.Name.text = "吳俞恆"
                break;
            case "少女":
                DiaLab.instance.Name.text = "少女"
                break;
            case "":
                DiaLab.instance.Name.text = ""
                break;
            case "D":
                DiaLab.instance.Name.text = "D"
                break;
            case "E":
                DiaLab.instance.Name.text = "E"
                break;
            case "F":
                DiaLab.instance.Name.text = "F"
                break;
            case "G":
                DiaLab.instance.Name.text = "G"
                break;
            case "H":
                DiaLab.instance.Name.text = "H"
                break;
            case "I":
                DiaLab.instance.Name.text = "I"
                break;
        }
    }
}