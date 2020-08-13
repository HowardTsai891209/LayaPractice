    import Stage = Laya.Stage;
    import Text = Laya.Text;
    import Browser = Laya.Browser;
    import WebGL = Laya.WebGL;

    export class TextControll{
        constructor(){
            // 不支持WebGL時自動切換至Canvas
            Laya.init(Browser.clientWidth, Browser.clientHeight, WebGL);

            Laya.stage.alignV = Stage.ALIGN_MIDDLE;
            Laya.stage.alignH = Stage.ALIGN_CENTER;

            //Laya.stage.scaleMode = "showall";
            Laya.stage.bgColor = "232628";

            var txt: Text = new Text();
            //设置文本内容
            txt.text = "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！";
            //设置文本颜色
            txt.color = "#ffffff";
            //设置文本字体
            txt.font = "Ya Hei";
            //设置字体大小
            txt.fontSize = 32;
            //设置文本框的颜色
            txt.borderColor = "#23cfcf";
            //设置粗体、斜体
            txt.bold = true;
            //设置斜体
            txt.italic = true;
            //设置文本区背景
            txt.bgColor = "#c30c30";
            //设置文本的宽高
            txt.width = 400;
            txt.height = 400;
            //设置文本水平居中
            txt.align = "center";
            //设置文本垂直居中
            txt.valign = "middle";
            //设置自动换行
            txt.wordWrap = true;

            Laya.stage.addChild(txt);
        }
    }