import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaintingService {
  paintingsData : any = JSON.parse(sessionStorage.getItem('paintings'));
  dataToUpdate : any = {};

  constructor(private http: HttpClient) { }

  addNewPainting(painting: any) {
    this.paintingsData.push(painting);
  }

  getPaintings() {
    return this.paintingsData;
  }

  getPaintingsData() {
    return this.http.get('../../assets/paintings.json');
  }

  updatePainting(data: any) {
    this.dataToUpdate = data;
    let index = this.paintingsData.findIndex(this.checkId, this);
    //console.log("Index found : ", index);
    this.paintingsData.splice(index, 1, data);
    sessionStorage.setItem('paintings', JSON.stringify(this.paintingsData));
    this.dataToUpdate = {};
  }

  checkId(painting: any) {
    return this.dataToUpdate.id === painting.id
  }

  deletePainting(data: any) {
    this.dataToUpdate = data;
    let index = this.paintingsData.findIndex(this.checkId, this); 
    this.paintingsData.splice(index, 1);
    sessionStorage.setItem('paintings', JSON.stringify(this.paintingsData));
    this.dataToUpdate = {}
  }

}
