import { Component, OnInit } from '@angular/core';
import { SampleService } from 'src/shared/services/sample.service';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.scss']
})
export class TemplateformComponent implements OnInit {

  model: any = {};
  isSubmitted: boolean = false;


  constructor(private  sampleService:  SampleService) { }

  ngOnInit(): void {
    this.sampleService.getData().subscribe(console.log);
  }

  submit() {
     this.isSubmitted = true;


     console.log(this.model);
  }

}
