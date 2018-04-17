import { Flashlight } from '@ionic-native/flashlight';

export class MockFlashlight extends Flashlight {
    
    switchOn() {
        return new Promise<boolean>((resolve, reject) => {
            resolve(true);
        })
    };

    switchOff() {
        return new Promise<boolean>((resolve, reject) => {
            resolve(false);
        })
    };
}