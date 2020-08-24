export default class DiaLab extends Laya.Scene{
    static instance: DiaLab;//若其他程式要調用 則必須宣告
    private word: number;//文本中 每一句話個別的字數
    private line: number;//文本中 句數
    private lineComplete: boolean;//判斷 這句話是否講完
    private splitted: string;//把文本拆開
    private showWord: number;//讓文本一字一字出現的函式
    private nameNum: string;//文本開頭的代號 代表說話的人 改變名字用
    public storyPath: string;
    public scene1: string = "../laya/assets/res/story.txt";
    public scene2: string = "../laya/assets/res/story2.txt";
    private story: string[] = [""];//文本
    public Diolog:Laya.Label;
    public Name:Laya.Label; 
    
    createChildren():void {
        super.createChildren();
        this.loadScene("Msg");
    }
    
    constructor() {
        super();
        DiaLab.instance = this;
    }

    onEnable(): void {//開啟點擊事件
        this.Diolog.on(Laya.Event.CLICK, this, this.ClickFn);
    }

    onAwake(): void {
        this.word = 0;
        this.line = 0;
        this.lineComplete = false;
        this.storyPath = this.scene1;
        Laya.loader.load(this.storyPath, new Laya.Handler(this, (e) => {
            this.story.length = 0;
            this.story = this.story.concat(e.split("\n"));
            this.ShowWords();
        }));
    }

    button1Click():void {
        this.word = 0;
        this.line = 0;
        this.lineComplete = false;
        this.Diolog.text = "";
        this.storyPath = this.scene2;
        Laya.loader.load(this.storyPath, new Laya.Handler(this, (e) => {
            this.story.length = 0;
            this.story = this.story.concat(e.split("\n"));
            this.ShowWords();
        }));
    }

    ShowWords(): void {//讓文本一字一字出現
        this.nameCase();
        this.showWord = setInterval(() => {
            this.splitted = this.story[this.line][this.word + 1];//把文本拆開 +1是為了避開 開頭的代號
            if (this.splitted == undefined) return; //運行到最後一字時 避免出錯  
            this.Diolog.text += this.splitted;
            this.word++;//跳下一個字            
            if (this.story[this.line][this.word + 1] == undefined) {//判斷此句是否結束
                clearInterval(this.showWord);//關閉showWord
                this.lineComplete = true;
            }
        }, 150);
    }

    isEnd(): void {//判斷這句話是否講完 & 文本是否全部講完
        if (this.story[this.line + 1] == undefined) { //文本是否結束
            this.Diolog.off(Laya.Event.CLICK, this, this.ClickFn);//關閉點擊事件
            console.log("結束");
            return;
        } else if (this.story[this.word] == undefined) {//此句是否結束
            this.word = 0;
            this.Diolog.text = "";
            this.line++;//跳下一句話
            return;
        }
    }

    ClickFn(e: Laya.Event): void {//點擊事件
        this.lineComplete = !this.lineComplete;
        if (this.lineComplete) {//文字還沒跳完時 點擊使他一次跳完
            clearInterval(this.showWord);
            this.word = this.story[this.line].length;//this.word = 此句最後一個字 (作為條件判斷是否進入下一句)
            this.Diolog.text = this.story[this.line].substring(1, this.story[this.line].length);//跳出完整句子 避開 開頭代號
        } else {//文字跳完時 點擊跳出下一句 並呼叫showWord
            this.isEnd();
            this.ShowWords();
        }
    }

    nameCase(): void {//抓取開頭代號 改變名字
        this.nameNum = this.story[this.line].substring(0, 1);//取出開頭代號
        switch (this.nameNum) {
            case "A":
                this.Name.text = "A"
                break;
            case "B":
                this.Name.text = "B"
                break;
            case "C":
                this.Name.text = "C"
                break;
            case "D":
                this.Name.text = "D"
                break;
            case "E":
                this.Name.text = "E"
                break;
            case "F":
                this.Name.text = "F"
                break;
            case "G":
                this.Name.text = "G"
                break;
            case "H":
                this.Name.text = "H"
                break;
            case "I":
                this.Name.text = "I"
                break;
        }
    }

}