import { Component } from '@angular/core';
import { ApiservicesService } from 'src/app/services/apiservices.service';

@Component({
  selector: 'update-offerletterstatus',
  templateUrl: './update-offerletterstatus.component.html',
  styleUrls: ['./update-offerletterstatus.component.css']
})
export class UpdateOfferletterstatusComponent {
  candidateName: string = '';
  offerLetterStatus: string = '';

  constructor(private offerLetterService: ApiservicesService) { }

  onSubmit(): void {
    this.offerLetterService.updateOfferLetterStatus(this.candidateName, this.offerLetterStatus).subscribe(response => {
      alert(`Offer letter status updated successfully`);
    }, error => {
      console.error('Error updating offer letter status', error);
    });
  }
}

