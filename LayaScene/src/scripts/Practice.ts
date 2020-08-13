export default class Practice extends Laya.Script {
    onAwake(): void{
        let button: Laya.Button = this.owner.getChildByName("StartBTN") as Laya.Button;
        button.visible = true;
        button.on(Laya.Event.CLICK, this,()=>{
        alert("GAMESTART");
        });
    }

}
