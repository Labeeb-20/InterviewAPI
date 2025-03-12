import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiservicesService } from 'src/app/services/apiservices.service';

@Component({
  selector: 'schedule-interview',
  templateUrl: './schedule-interview.component.html',
  styleUrls: ['./schedule-interview.component.css']
})
export class ScheduleInterviewComponent {
  constructor(private scheduleInterviewService: ApiservicesService) { }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      console.log('Form data:', form.value);
      this.scheduleInterviewService.scheduleInterview(form.value).subscribe(response => {
        alert(`Interview scheduled successfully`);
      }, error => {
        console.error('Error scheduling interview', error);
      });
    }
  }
}
