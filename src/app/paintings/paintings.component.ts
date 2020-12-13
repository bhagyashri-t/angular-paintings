import { Component, OnInit, OnDestroy } from '@angular/core';
import { PaintingService } from '../services/painting.service';
import { MatDialog,MAT_DIALOG_DATA }  from '@angular/material/dialog';
import { PaintingDialogComponent } from '../painting-dialog/painting-dialog.component';

@Component({
  selector: 'app-paintings',
  templateUrl: './paintings.component.html',
  styleUrls: ['./paintings.component.scss']
})

export class PaintingsComponent implements OnInit, OnDestroy {
  paintings: any = [];
  subscription: any ;
  constructor(public dialog:MatDialog, private paintingService :PaintingService) { 
    this.getPaintingsData();
  }

  ngOnInit(): void {
    //this.setPaintingData();
    //this.getPaintingsData();
    // this.paintings = this.paintingService.paintingsData;
  }

  ngOnDestroy() {
   // this.subscription.unsubsrcibe();
  }

  getPaintingsData() {
    // this.paintingService.getPaintingsData().subscribe(
    //   (resp:any)=>{
    //     console.log(resp);
    //     this.paintings = resp;
    //     this.paintingService.paintingsData = resp;
    //     console.log(this.paintingService.paintingsData);
    //   },
    //   (err:any)=>{
    //     console.log(err);
    // }); 
    // console.log("getPaintingsData : ", this.paintings);

    this.paintings = this.paintingService.paintingsData;
  }

  openDialog(painting:any) {
    const dialogRef = this.dialog.open(PaintingDialogComponent, {data:painting});

    this.subscription = dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  addNewPainting(painting: any) {
    this.paintingService.addNewPainting(painting);
  }

  // setPaintingData() {
  //   // console.log(this.paintingService.setData());

  //   // this.paintingService.paintingsData.push(this.paintings) ;
  // }
}
