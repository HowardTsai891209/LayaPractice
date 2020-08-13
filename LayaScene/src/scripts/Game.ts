export default class Game extends Laya.Script{
    onAwake(): void{
        let button: Laya.Button = this.owner.getChildByName("button") as Laya.Button;
        button.on(Laya.Event.CLICK, this, this.onButtonClick,["materials/music02.mp3"]);
    }
    private onButtonClick(soundPath: string):void{
        Laya.SoundManager.playMusic(soundPath);
    }
}