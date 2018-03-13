import { Component, OnInit } from '@angular/core';
import { PlatformToolsComponent} from '../platform-tools/platform-tools.component';

import * as firebase from 'firebase/app';
import 'firebase/storage';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  email: string;
  name: string;
  downloadable: boolean;
  showAlert: boolean;
  closeResult: string;

    model = {
        left: true,
        middle: false,
        right: false
    };
//
//     storageRef = firebase.storage().ref();
//     pathReference = storage.ref('seva-brochure-nepal-np.pdf');
//
//     // Create a reference from a Google Cloud Storage URI
//     gsReference = storage.refFromURL('gs://seva-brochure-nepal-np.pdf')
// //gs://subscriptionqa-1.appspot.com
//     // Create a reference from an HTTPS URL
//     // Note that in the URL, characters are URL escaped!
//     httpsReference = storage.refFromURL('gs://subscriptionqa-1.appspot.com/seva-brochure-nepal-np.pdf');


    constructor(private modalService: NgbModal, private authService: AuthService) {
        this.downloadable = false;
        this.showAlert = false;
     }
     // url: string;

    ngOnInit() {}

    shouldDownload(){
      if(this.email && this.name){
        this.showAlert = false;
        this.authService.addDownloadUser(this.name, this.email);
        // window.location.href = "https://firebasestorage.googleapis.com/v0/b/subscriptionqa-1.appspot.com/o/seva-brochure-nepal-np.pdf?alt=media&token=7a16e6d9-de44-46c9-b459-e6d11ededaa0";
        window.open("https://firebasestorage.googleapis.com/v0/b/subscriptionqa-1.appspot.com/o/seva-brochure-nepal-np.pdf?alt=media&token=7a16e6d9-de44-46c9-b459-e6d11ededaa0", "_blank");
      }
      else {
        this.showAlert = true;
        // console.log("Please enter name and email to download QA Best Practices ");
      }
    }

    saveEmail(){
      //need to import auth service and save name and email to firestore to qaBestPracticesDownload collection
      if(this.email){
        this.authService.addDownloadUser(this.name, this.email);
        this.showAlert = false;
        // console.log("email saved to database")
      } else{
        this.showAlert = true;
      }
    }


        open(content, type) {
          if(this.email && this.name){

            if (type === 'sm') {
                // console.log('aici');
                this.modalService.open(content, { size: 'sm' }).result.then((result) => {
                    this.closeResult = `Closed with: ${result}`;
                }, (reason) => {
                    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
                });
            } else {
                this.modalService.open(content).result.then((result) => {
                    this.closeResult = `Closed with: ${result}`;
                }, (reason) => {
                    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
                });
            }
          } else{
            console.log("enter your name and email");
            this.showAlert = true;
          }
        }

        private getDismissReason(reason: any): string {
            if (reason === ModalDismissReasons.ESC) {
                return 'by pressing ESC';
            } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
                return 'by clicking on a backdrop';
            } else {
                return  `with: ${reason}`;
            }
        }
    // downloadBestPractices(){
    //   var url = "https://firebasestorage.googleapis.com/v0/b/subscriptionqa-1.appspot.com/o/seva-brochure-nepal-np.pdf?alt=media&token=7a16e6d9-de44-46c9-b459-e6d11ededaa0";
    //   var xhr = new XMLHttpRequest();
    //     xhr.responseType = 'blob';
    //     xhr.onload = function(event) {
    //       var blob = xhr.response;
    //     };
    //     xhr.open('GET', url);
    //     xhr.send();
    // }



}
