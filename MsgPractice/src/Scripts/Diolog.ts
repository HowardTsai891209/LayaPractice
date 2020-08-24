import { ui } from "./../ui/layaMaxUI";
export default class DiaLab extends ui.test.SceneUI {
    static instance: DiaLab;//若其他程式要調用 則必須宣告
    private word: number;//文本中 每一句話個別的字數
    private line: number;//文本中 句數
    private lineComplete: boolean;//判斷 這句話是否講完
    private splitted: string;//把文本拆開
    private showWord: number;//讓文本一字一字出現的函式
    private nameNum: String;//文本開頭的代號 代表說話的人 改變名字用
    //文本
    private story: string[] = ["A在非洲，每六十秒，就有一分鐘過去",
        "B凡是每天喝水的人，有高機率在100年內死去",
        "C誰能想的到，這名16歲少女，在四年前，只是一名12歲少女",
        "A台灣人在睡覺時，大多數的美國人都在工作",
        "B當蝴蝶在南半球拍了兩下翅膀，牠就會稍微飛高一點點",
        "C據統計，未婚生子的人數中有高機率為女性",
    ];
    
    constructor() {
        super();
        DiaLab.instance = this;
    }

    isEnd(): void{//判斷這句話是否講完 & 文本是否全部講完
        if(this.story[this.line+1] == undefined){ //文本是否結束
            this.Diolog.off(Laya.Event.CLICK, this, this.ClickFn);//關閉點擊事件
            console.log("結束");
            return;     
        }else if (this.story[this.word] == undefined) {//此句是否結束
            this.word = 0;
            this.Diolog.text = "";
            this.line ++;//跳下一句話
            return;
        }
    }

    nameCase(): void{//抓取開頭代號 改變名字
        this.nameNum = this.story[this.line].substring(0,1);//取出開頭代號
        switch (this.nameNum){
            case "A": 
                this.Name.text = "你老爸"
                break;
            case "B": 
                this.Name.text = "你老媽"
                break;
            case "C": 
                this.Name.text = "你祖公"
                break;
        }
    }

    onAwake(): void {
        this.word = 0;
        this.line = 0;
        this.lineComplete = false;
        this.ShowWords();
    }

    ShowWords() : void {//讓文本一字一字出現
        this.nameCase();
        this.showWord = setInterval( ()=>{  
            this.splitted = this.story[this.line][this.word+1];//把文本拆開 +1是為了避開 開頭的代號
            if(this.splitted == undefined) return; //運行到最後一字時 避免出錯  
            this.Diolog.text += this.splitted;
            this.word ++;//跳下一個字            
            if(this.story[this.line][this.word+1] == undefined){//判斷此句是否結束
                clearInterval(this.showWord);//關閉showWord
                this.lineComplete = true;
            }
            },150);
    }

    onEnable(): void {//開啟點擊事件
        this.Diolog.on(Laya.Event.CLICK, this, this.ClickFn);
    } 

    ClickFn(e: Laya.Event): void {//點擊事件
        this.lineComplete = !this.lineComplete;
        if(this.lineComplete){//文字還沒跳完時 點擊使他一次跳完
            clearInterval(this.showWord);
            this.word = this.story[this.line].length;//this.word = 此句最後一個字 (作為條件判斷是否進入下一句)
            this.Diolog.text = this.story[this.line].substring(1,this.story[this.line].length);//跳出完整句子 避開 開頭代號
        }else{//文字跳完時 點擊跳出下一句 並呼叫showWord
            this.isEnd();
            this.ShowWords();
        }
    }
}