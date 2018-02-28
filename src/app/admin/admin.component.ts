import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import {NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

export interface Price {
  id?: string;
  price: number;
  service: string;
  standard: boolean;
  category: string;
}

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

      public tableData1: TableData;

      priceCollectionRef: AngularFirestoreCollection<Price>;
      price$: Observable<Price[]>;

      closeResult: string;
      updatedCategory: string;
      updatedPrice: number;
      updatedService: string;

      modalPrice: Price;


      constructor(private afs: AngularFirestore, private modalService: NgbModal) {
        this.priceCollectionRef = this.afs.collection<Price>('prices');
        // this.price$ = this.priceCollectionRef.valueChanges();
        this.price$ = this.priceCollectionRef.snapshotChanges().map(actions => {
          return actions.map(action => {
            const data = action.payload.doc.data() as Price;
            const id = action.payload.doc.id;
            return { id, ...data };
          });
  });
      }


      addPrice() {
        // if (priceNumber && service) {
          this.priceCollectionRef.add({ price: this.updatedPrice, standard: true, service: this.updatedService, category: this.updatedCategory });
          this.updatedPrice = null;
          this.updatedService = null;
          this.updatedCategory = null;
        // }

      }

      updatePrice() {

        if(!this.updatedService){
          this.updatedService = this.modalPrice.service;
        }
        if(!this.updatedPrice){
          this.updatedPrice = this.modalPrice.price;
        }
        if(!this.updatedCategory){
            this.updatedCategory = this.modalPrice.category;
        }

        this.priceCollectionRef.doc(this.modalPrice.id).update({ price: this.updatedPrice, standard: true, service: this.updatedService, category: this.updatedCategory  });

        this.updatedPrice = null;
        this.updatedService = null;
        this.updatedCategory = null;
      }

      deletePrice(price: Price) {
        this.priceCollectionRef.doc(price.id).delete();
      }


    ngOnInit() {
      this.tableData1 = {
    headerRow: ['Category', 'Service', 'Price', 'Actions', 'id'],
    dataRows: []
};
    }

    modalData(price: Price, content) {
      this.modalPrice = price;

          this.modalService.open(content);
    }



    open(content) {
        this.modalService.open(content);
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

  }
