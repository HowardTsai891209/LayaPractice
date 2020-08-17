import Sprite = Laya.Sprite;
import Stage = Laya.Stage;
import GlowFilter = Laya.GlowFilter;
import Browser = Laya.Browser;
import Handler = Laya.Handler;
import WebGL = Laya.WebGL;
export class ShadeFilter {
    private apePath: string = "../laya/assets/comp/clip_num.png";
    private ape: Sprite;
    private apeGlow: Sprite;
    private apeShadow: Sprite;
    constructor() {
        // 不支持WebGL时自动切换至Canvas
        Laya.init(Browser.clientWidth, Browser.clientHeight, WebGL);
        Laya.stage.alignV = Stage.ALIGN_MIDDLE;
        Laya.stage.alignH = Stage.ALIGN_CENTER;
        //Laya.stage.scaleMode = "showall";
        Laya.stage.bgColor = "#aabbcc";
        Laya.loader.load(this.apePath, Handler.create(this, this.setup));
    }
    private setup(): void {
        this.ape = this.createApe();
        this.ape.pos(100, 50);
        this.apeGlow = this.createApe();
        this.apeGlow.pos(250, 50);
        this.apeShadow = this.createApe();
        this.apeShadow.pos(400, 50);
        this.glowFilter();
        this.ShadowFilter();
    }
    private createApe(): Sprite {
        var ape = new Sprite();
        ape.loadImage(this.apePath);
        Laya.stage.addChild(ape);
        return ape;
    }
    private glowFilter(): void {
        //创建一个发光滤镜
        var glowFilter1: GlowFilter = new GlowFilter("#ffff00", 10, 0, 0);
        //设置滤镜集合为发光滤镜
        this.apeGlow.filters = [glowFilter1];
    }
    private ShadowFilter(): void {
        //创建一个发光滤镜
        var shadowFilter: GlowFilter = new GlowFilter("#000000", 8, 8, 8);
        //设置滤镜为阴影滤镜
        this.apeShadow.filters = [shadowFilter];
    }
}