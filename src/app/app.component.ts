import {Component, OnInit} from '@angular/core';

// import Swiper core and required components
import SwiperCore , {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
} from 'swiper';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DynamicService} from "./dynamic.service";

// install Swiper components
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller
]);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'LandingPage_Celltech';
  thumbsSwiper: any;
  thumbsUpSwiper: any;
  form: any;
  isVisible = false;

  constructor(private formBuilder: FormBuilder, private dynamicService: DynamicService) {
  }
  ngOnInit() {
    this.form = this.formBuilder.group({
      NAME: [null, [Validators.required]],
      LEAD_PHONE_NUMBER: [null, [Validators.required]],
      LEAD_EMAIL: [null, [Validators.required, Validators.email]],
      LEAD_COMPANY: [null, [Validators.required]],
      JOB_TITLE: [null, [Validators.required]],
      INDUSTRY:[null, [Validators.required]]
    });
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  submit() {
    const convertData = {} as any;

    convertData.request = 'UPDATE';
    convertData.actionId = '6cdf097f-b263-4d95-aa98-ace1e9da0b5f';
    convertData.tableId = '7f43f797-d968-43a5-e67b-08db4d543631';
    convertData.formId = '239d40f7-7535-4804-a0f7-438cd47e4a9f';

    const values = [] as any[];
    Object.keys(this.form.value).forEach(key => {
      values.push({
        name: key,
        value: this.form.value[key]
      });
    });
    convertData.data = values;
    this.dynamicService.createRecord(convertData).subscribe(res => {
      this.form.reset();
      this.handleCancel();
    })
  }
}
