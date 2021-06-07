import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  loading: HTMLIonLoadingElement;
  toast: HTMLIonToastElement;
  alert: HTMLIonAlertElement;

  constructor(
    private readonly loadingCtrl: LoadingController, 
    private readonly toastctrl: ToastController, 
    private readonly alertCtrl: AlertController, 
    private cartService: CartService) { }

  showLoader = async() => {
    this.loading = await this.loadingCtrl.create({
      message: 'Please Wait...',
      keyboardClose: true,
      spinner: 'bubbles',
      duration:3000
    });
    await this.loading.present();
  }

  hideLoader = async() => {
    this.loadingCtrl.getTop().then(v => v ? this.loadingCtrl.dismiss() : null);
  }

  showToast = async(message: string) => {
    this.toast = await this.toastctrl.create({
      animated: true,
      message: message,
      duration: 2000,
      mode: 'ios',
      position: 'top'
    });
    await this.toast.present();
  }

  showAlert = async(alertType: string, message: string, header?: string,) => {
    if (alertType == 'Error') {
      this.alert = await this.alertCtrl.create({
        header: header ? header : alertType,
        subHeader: '',
        message: message,
        buttons: ['OK']
      });
      this.alert.present();
    } else if (alertType == 'Warning') {
      this.alert = await this.alertCtrl.create({
        header: header ? header : alertType,
        subHeader: '',
        message: message,
        buttons: ['OK']
      });
      this.alert.present();
    } else if (alertType == 'Information') {
      this.alert = await this.alertCtrl.create({
        header:  header ? header : alertType,
        subHeader: '',
        message: message,
        buttons: ['OK']
      });
      this.alert.present();
    } else {
      //
    }

  }

}
