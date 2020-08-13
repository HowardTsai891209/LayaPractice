import { FlyingObject } from "./FlyingObject";

export class IronMan implements FlyingObject {
    protected m_Name: string = null;
    constructor(name: string){
        this.m_Name = name;
    }

    get name(): string {
        return this.m_Name;
    }

    set name(name:string) {
        this.m_Name = name;
    }

    sayHi(): string {
        return "Hi I am " + this.m_Name;
    }

    static isIronMan(hero: any): boolean {
        return hero instanceof IronMan;
    }

    fly(): string{
        return "IronMan takes to air by boosters";
    }
}