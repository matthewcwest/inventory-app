import { BarcodeScanner, BarcodeScanResult, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

export class MockBarcodeScanner extends BarcodeScanner {
    goodResult: BarcodeScanResult = {
        format: 'CODE_39',
        cancelled: false,
        text: '4S4BP67C254326627'
    };

    badResult: BarcodeScanResult = {
        format: 'CODE_39',
        cancelled: false,
        text: 'JJJJJJJJJJJJJJJJJ'
    };
    
    scan(options: BarcodeScannerOptions) {
        return new Promise<BarcodeScanResult>((resolve, reject) => {
            resolve(options.showTorchButton ? this.goodResult : this.badResult);
        })
    }    
}