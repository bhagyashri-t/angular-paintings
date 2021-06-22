import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PaintingService } from '../services/painting.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
  managePaintingsForm = new FormGroup({});
  uriPattern:any = "https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)";
  paintingData: any = {};
  isRedirectedFromPaintings = false;

  constructor(  private fb: FormBuilder,
                private router: Router, 
                private paintingService: PaintingService) { 
                  this.paintingData = this.getRouterData();
                  console.log("Data from paintings : ", this.paintingData);
                  this.formValidator();
                  if(this.paintingData) {
                    this.setFormData(this.paintingData);
                    this.isRedirectedFromPaintings = true;
                  }
                   
  }

  ngOnInit(): void {
    // this.resetForm();
  }

  getRouterData() {
    return this.router.getCurrentNavigation()?.extras.state;
  }

  formValidator() {
      this.managePaintingsForm = this.fb.group({
      'name':['',Validators.compose([Validators.required, Validators.maxLength(30),Validators.minLength(3)])],
      'artist':['',Validators.compose([Validators.required])],
      'description':['',Validators.compose([Validators.required])],
      'url':['',Validators.compose([Validators.required])],
      'type':['',Validators.compose([Validators.required])],
      'cost':['',Validators.compose([Validators.required,Validators.pattern("^[0-9]+$")])]
    })
  }

  onSubmit() {
    let data = this.managePaintingsForm.value;
    //If redirected from paintings to manage, save should update the edited painting details
    if(this.isRedirectedFromPaintings) {
      data['id'] = this.paintingData.id;
      this.paintingService.updatePainting(data);
      this.router.navigate(['/paintings']);
    } else {
      //Otherwise add new painting to data    
      data["id"] = this.paintingService.paintingsData.length+1;
      console.log("onSubmit : ", this.managePaintingsForm.value);
      this.paintingService.addNewPainting(data);
      console.log("paintingsData after submit : ", this.paintingService.paintingsData);
      alert("New paintings saved");
    }
    
    //Redirect to paintings
  }

  onCancel() {
    // If redirected from painting to manage, cancel should redirect back to Paintings 
    if(this.isRedirectedFromPaintings) {
      this.router.navigate(['/paintings']);
    } else {
      // reset the form
      // this.resetForm();
      this.managePaintingsForm.reset()
    }
  }

  setFormData(data: any) {
    this.managePaintingsForm.setValue({
      name: data.name,
      artist: data.artist,
      description: data.description,
      type: data.type,
      cost: data.cost,
      url: data.url
    });
  }
}
