import { FlyingObject } from "./FlyingObject";

export class Thor implements FlyingObject {
    fly(): string {
        return "Thor takes to the air by a hammer";
    }
}