import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PaintingService } from '../services/painting.service';
// import { PaintingService } from '../services/painting.service';

@Component({
  selector: 'app-painting-dialog',
  templateUrl: './painting-dialog.component.html',
  styleUrls: ['./painting-dialog.component.scss']
})
export class PaintingDialogComponent implements OnInit {

  constructor(private paintingService:PaintingService,
            @Inject(MAT_DIALOG_DATA) public data:any, 
            private router: Router,
            private dialog:MatDialog) { }

  ngOnInit(): void {
    //console.log(this.data);
  }

  modifyPaintings(data: any) {
    // console.log("Paintings to modify ", data);
    this.router.navigate(['/manage'], { state: data});
    this.dialog.closeAll();
  }

  deletePainting(data: any) {
    //console.log("Painting deleted: ", data);
    this.paintingService.deletePainting(data);
    alert("Deleted Succesfully!");
    this.dialog.closeAll();
    this.router.navigateByUrl('/paintings');
  }
}
