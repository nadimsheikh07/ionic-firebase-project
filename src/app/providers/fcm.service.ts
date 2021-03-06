import { Injectable } from '@angular/core';
import { Firebase } from '@ionic-native/firebase/ngx';

@Injectable({
  providedIn: 'root'
})
export class FcmService {

  constructor(private firebase: Firebase) {
    this.firebase.getToken()
      .then(token => console.log(`The token is ${token}`)) // save the token server-side and use it to push notifications to this device
      .catch(error => console.error('Error getting token', error));

    this.firebase.onTokenRefresh()
      .subscribe((token: string) => console.log(`Got a new token ${token}`));
  }


  onNotificationOpen() {
    this.firebase.onNotificationOpen()
      .subscribe(data => console.log(`User opened a notification ${data}`));
  }
}
