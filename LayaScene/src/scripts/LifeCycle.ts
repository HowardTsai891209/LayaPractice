export default class LifeCycle extends Laya.Script {
    onAwake() {
        console.log("onAwake");    
    }

    onStart() {
        console.log("onStart");    
    }

    onUpdate() {
        console.log("onUpdate");    
    }

    onDisable() {
        console.log("onDisable");    
    }

    onDestory() {
        console.log("onDestory");    
    }

    print(event: Laya.Event): void {
        console.log(">>" + this.owner.name + " " + event.type);
    }
}