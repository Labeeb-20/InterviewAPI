import { Component } from '@angular/core';
import { Recuriters } from 'src/app/models/recuriters';
import { ApiservicesService } from 'src/app/services/apiservices.service';

@Component({
  selector: 'update-status',
  templateUrl: './update-status.component.html',
  styleUrls: ['./update-status.component.css']
})
export class UpdateStatusComponent {
  recuriters: Recuriters  = {
    recruiterId: 0,
    date: "",
    time: "",
    rounds: 0,
    name: "",
    designation: "",
    email: "",
    status: "",
    recommendedDesignation: "",
    remarks: "",
    offerLetterStatus: "",
    candidateId: 0
    
  };

  constructor(private interviewService: ApiservicesService) { }

 UpdateStatus(): void {

    this.interviewService.updateStatus(this.recuriters.recruiterId, this.recuriters).subscribe(response => {
      alert(`Record updated successfully`);
    }, error => {
      console.error('Error updating status', error);
    });
  }
}