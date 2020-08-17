import Sprite = Laya.Sprite;
import Stage = Laya.Stage;
import Texture = Laya.Texture;
import Browser = Laya.Browser;
import Handler = Laya.Handler;
import WebGL = Laya.WebGL;
export class DrawTexture {
    constructor() {
        // 不支持WebGL时自动切换至Canvas
        Laya.init(Browser.clientWidth, Browser.clientHeight, WebGL);
        Laya.stage.alignV = Stage.ALIGN_MIDDLE;
        Laya.stage.alignH = Stage.ALIGN_CENTER;
        //Laya.stage.scaleMode = "showall";
        Laya.stage.bgColor = "#ffffff";
        this.showApe();
    }
    private showApe(): void {
        // 方法2：使用drawTexture
        Laya.loader.load("../laya/assets/comp/radio.png", Handler.create(this, function (): void {
            var t: Texture = Laya.loader.getRes("../laya/assets/comp/radio.png");
            var ape: Sprite = new Sprite();
            ape.graphics.drawTexture(t, 0, 0);
            Laya.stage.addChild(ape);
            ape.pos(100, 50);
        }));
    }
}