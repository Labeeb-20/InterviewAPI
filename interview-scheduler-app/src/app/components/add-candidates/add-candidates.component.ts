import { Component } from '@angular/core';
import { Candidates } from 'src/app/models/candidates';
import { ApiservicesService } from 'src/app/services/apiservices.service';

@Component({
  selector: 'add-candidates',
  templateUrl: './add-candidates.component.html',
  styleUrls: ['./add-candidates.component.css']
})
export class AddCandidatesComponent {
  candidate: Candidates = {
    candidateid: 0,
    candidatename:'',
    emailid: '',
    phone: ''
  };
  selectedFile: File | null = null;

  constructor(private interviewService: ApiservicesService) { }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  onSubmit() {

    const formData = new FormData();
    formData.append('candidatename', this.candidate.candidatename || '');
    formData.append('emailid', this.candidate.emailid || '');
    formData.append('phone', this.candidate.phone || '');
    console.log( this.candidate.candidatename);
    if (this.selectedFile) {
      formData.append('resumefile', this.selectedFile, this.selectedFile.name);
    }
    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });

    this.interviewService.addCandidate(formData).subscribe(
      response => {
        alert(`Candidate added with ID:${response}`);
      },
      error => {
        console.error('Error adding candidate:', error);
      }
    );
  }
}