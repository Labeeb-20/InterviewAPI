import { Component } from '@angular/core';
import { Candidates } from 'src/app/models/candidates';
import { ApiservicesService } from 'src/app/services/apiservices.service';

@Component({
  selector: 'search-candidates',
  templateUrl: './search-candidates.component.html',
  styleUrls: ['./search-candidates.component.css']
})
export class SearchCandidatesComponent {
  searchEmail: string = '';
  searchPhone: string = '';
  searchName: string = '';
  candidates: Candidates[] | null = null;

  constructor(private interviewService: ApiservicesService) { }

  searchname() {
    this.interviewService.getCandidatesByName(this.searchName).subscribe(
      response => {
        this.candidates = response;
      },
      error => {
        console.error('Error fetching candidates:', error);
      }
    );
  }

  searchemail() {
    this.interviewService.getCandidatesByEmail(this.searchEmail).subscribe(
      response => {
        this.candidates = response;
      },
      error => {
        console.error('Error fetching candidates:', error);
      }
    );
  }

  searchphone() {
    this.interviewService.getCandidatesByPhone(this.searchPhone).subscribe(
      response => {
        this.candidates = response;
      },
      error => {
        console.error('Error fetching candidates:', error);
      }
    );
  }

}
