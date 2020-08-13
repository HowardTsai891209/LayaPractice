import GameConfig from "./GameConfig";
import { IronMan } from "./IronMan";
import { HulkBuster } from "./HulkBuster";
import { FlyingObject } from "./FlyingObject";
import { Thor } from "./Thor";
import { CaptainAmerica } from "./CaptainAmerica";
import { Direction } from "./Direction";

class Main {
	constructor() {
		//根据IDE设置初始化引擎		
		if (window["Laya3D"]) Laya3D.init(GameConfig.width, GameConfig.height);
		else Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
		Laya["Physics"] && Laya["Physics"].enable();
		Laya["DebugPanel"] && Laya["DebugPanel"].enable();
		Laya.stage.scaleMode = GameConfig.scaleMode;
		Laya.stage.screenMode = GameConfig.screenMode;
		//兼容微信不支持加载scene后缀场景
		Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;

		//打开调试面板（通过IDE设置调试模式，或者url地址增加debug=true参数，均可打开调试面板）
		if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true") Laya.enableDebugPanel();
		if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"]) Laya["PhysicsDebugDraw"].enable();
		if (GameConfig.stat) Laya.Stat.show();
		Laya.alertGlobalError = true;

		//激活资源版本控制，version.json由IDE发布功能自动生成，如果没有也不影响后续流程
		Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
	}

	onVersionLoaded(): void {
		//激活大小图映射，加载小图的时候，如果发现小图在大图合集里面，则优先加载大图合集，而不是小图
		Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
	}

	onConfigLoaded(): void {
		//加载IDE指定的场景
		GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
		
		// let ironman: IronMan = new IronMan("Tony");
		// console.log(ironman.sayHi());
		
		// let hulk: HulkBuster = new HulkBuster("Banner");
		// console.log(hulk.sayHi());

		// let name: string = hulk.name;
		// console.log(name);

		// hulk.name = "Dr.Panner";
		// console.log(hulk.sayHi());

		// let hulk: HulkBuster = new HulkBuster("Banner");
		// console.log(IronMan.isIronMan(hulk));

		// this.printFamily("John", "Mary");
		// this.printFamily("Joe", "Mag", "Tom", "Tony");

		// let airAvengers: FlyingObject[] = [];
		// airAvengers.push(new Thor());
		// airAvengers.push(new IronMan("Tony"));
		// airAvengers.push(new CaptainAmerica());

		// airAvengers.forEach((airAvengers: FlyingObject) => {
		// 	console.log(airAvengers.fly());
			
		// });

		Laya.stage.on(Laya.Event.KEY_UP, this, (event) =>{
			let code = event.which || event.keyCode;
			switch(code) {
				case Direction.Left:
					console.log("Move Left");
					break;

				case Direction.Up:
					console.log("Move Up");
					break;

				case Direction.Right:
					console.log("Move Right");
					break;

				case Direction.Down:
					console.log("Move Down");
					break;		
			}
		})

	}
// 	printFamily(father: string, mother: string, ...children: string[]):void{
// 		console.log(father);
// 		console.log(mother);
// 		if(children){
// 			children.forEach((child: string) =>console.log(child));
// 		}else{
// 			console.log("no child");
// 		}	
// 	}
// }

//激活启动类
}
new Main();