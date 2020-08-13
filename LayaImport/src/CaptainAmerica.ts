import { FlyingSuit } from "./FlyingSuit";

export class CaptainAmerica extends FlyingSuit {
    fly(): string {
        return "CaptainAmerica" + this.useWings();
    }
}