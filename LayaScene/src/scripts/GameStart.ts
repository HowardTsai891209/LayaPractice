export default class GameStart extends Laya.Script {
    onAwake(): void{
        // let button: Laya.Button = this.owner.getChildByName("btnGameStart") as Laya.Button;
        // button.visible = true;
        // button.on(Laya.Event.CLICK, this,()=>{
        //     alert("clicked");
        // })

        // let image: Laya.Image = this.owner.getChildByName("imgStar") as Laya.Image;
        // Laya.timer.once(2000, this, ()=>{
        //     image.skin = "comp/button.png";
        // });

        // let comboBox: Laya.ComboBox = this.owner.getChildByName("cboTest") as Laya.ComboBox;
        // comboBox.selectHandler = new Laya.Handler(this, this.onComBoxSelect, [comboBox]);

        // let textInput: Laya.TextInput = this.owner.getChildByName("txtTest") as Laya.TextInput;
        // textInput.on(Laya.Event.KEY_UP, this, this.onTextInputChanged);

        // let List: Laya.List = this.owner.getChildByName("listTest") as Laya.List;
        // List.dataSource = [1,2,3,4];
        let progressbar: Laya.ProgressBar = this.owner.getChildByName("pbTest") as Laya.ProgressBar;
        let value: number = 0;
        progressbar.value = 0;
        Laya.timer.frameLoop(1, this, ()=>{
            value += 0.01;
            progressbar.value = value;
        })
    }
    // onComBoxSelect(comboBox: Laya.ComboBox):void {
    //     console.log("Selected index = " + comboBox.selectedIndex);
    // }

    // onTextInputChanged(event: Laya.Event):void {
    //     console.log("Key Code = " + event.keyCode);
    // }
}