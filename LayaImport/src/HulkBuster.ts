import { IronMan } from "./IronMan";

export class HulkBuster extends IronMan {
    constructor(name:string) {
        super(name);
        this.m_Name = "Dr." + name;
    }

    sayHi(): string {
        return "Hi I am the " + this.m_Name;
    }
}