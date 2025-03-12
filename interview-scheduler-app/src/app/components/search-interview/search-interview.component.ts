import { Component } from '@angular/core';
import { Recuriters } from 'src/app/models/recuriters';
import { ApiservicesService } from 'src/app/services/apiservices.service';

@Component({
  selector: 'search-interview',
  templateUrl: './search-interview.component.html',
  styleUrls: ['./search-interview.component.css']
})
export class SearchInterviewComponent {
    searchRound: number = 0;
    searchDate: string = '';
    searchName: string = '';
    interviews: Recuriters[] | null = null;
  
    constructor(private interviewService: ApiservicesService) { }
  
    searchname() {
      this.interviewService.getInterviewsByName(this.searchName).subscribe(
        response => {
          this.interviews = response;
        },
        error => {
          console.error('Error fetching candidates:', error);
        }
      );
    }
  
    searchdate() {
      this.interviewService.getInterviewsByDate(this.searchDate).subscribe(
        response => {
          this.interviews = response;
        },
        error => {
          console.error('Error fetching candidates:', error);
        }
      );
    }
  
    searchround() {
      this.interviewService.getInterviewsByRound(this.searchRound).subscribe(
        response => {
          this.interviews = response;
        },
        error => {
          console.error('Error fetching candidates:', error);
        }
      );
    }
  
}
