import Sprite = Laya.Sprite;
import Stage = Laya.Stage;
import Texture = Laya.Texture;
import Browser = Laya.Browser;
import Handler = Laya.Handler;
import WebGL = Laya.WebGL;
export class Sprite_DisplayImage {
    constructor() {
        // 不支持WebGL时自动切换至Canvas
        Laya.init(Browser.clientWidth, Browser.clientHeight, WebGL);
        Laya.stage.alignV = Stage.ALIGN_MIDDLE;
        Laya.stage.alignH = Stage.ALIGN_CENTER;
        //Laya.stage.scaleMode = "showall";
        Laya.stage.bgColor = "#ffffff";
        this.show();
    }
    private show(): void {
        // 方法1：使用loadImage
        var ape: Sprite = new Sprite();
        ape.pos(100, 50);
        Laya.stage.addChild(ape);
        ape.loadImage("../laya/assets/comp/radio.png");
    }
}