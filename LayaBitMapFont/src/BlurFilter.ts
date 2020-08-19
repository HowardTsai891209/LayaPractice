import Sprite = Laya.Sprite;
import Stage = Laya.Stage;
import BlurFilter = Laya.BlurFilter;
import Browser = Laya.Browser;
import Handler = Laya.Handler;
import WebGL = Laya.WebGL;
export class blurFilter {
    private apePath: string = "../laya/assets/comp/clip_num.png";
    constructor() {
        // 不支持WebGL时自动切换至Canvas
        Laya.init(Browser.clientWidth, Browser.clientHeight, WebGL);
        Laya.stage.alignV = Stage.ALIGN_MIDDLE;
        Laya.stage.alignH = Stage.ALIGN_CENTER;
        //Laya.stage.scaleMode = "showall";
        Laya.stage.bgColor = "#232628";
        Laya.loader.load(this.apePath, Handler.create(this, this.createApe));
    }
    private createApe(): void {
        var ape: Sprite = new Sprite();
        ape.loadImage(this.apePath);
        ape.pos(100, 50);
        var apeBlur: Sprite = new Sprite();
        apeBlur.loadImage(this.apePath);
        apeBlur.pos(250, 50);
        Laya.stage.addChild(ape);
        Laya.stage.addChild(apeBlur);
        this.applayFilter(apeBlur);
    }
    private applayFilter(ape: Sprite): void {
        var blurFilter: BlurFilter = new BlurFilter();
        blurFilter.strength = 5;
        ape.filters = [blurFilter];
    }
}