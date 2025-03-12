import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidates } from '../models/candidates';
import { Recuriters } from '../models/recuriters';

@Injectable({
  providedIn: 'root'
})
export class ApiservicesService {

  apiUrl = 'http://localhost:5129/api';
  constructor(private http: HttpClient) { }

  addCandidate(candidate: FormData): Observable<number> {
    console.log('service:',candidate);
    return this.http.post<number>(`${this.apiUrl}/CandidateInput/AddCandidate`, candidate);
  }

  updateStatus(id: number, recruiter: Recuriters): Observable<string> {
    return this.http.put<string>(`${this.apiUrl}/FeedbackUpdate/UpdateStatus/${id}`, recruiter);
  }

  getCandidatesByName(name: string): Observable<Candidates[]> {
    return this.http.get<Candidates[]>(`${this.apiUrl}/GetCandidate/GetByName/${name}`);
  }

  getCandidatesByEmail(email: string): Observable<Candidates[]> {
    return this.http.get<Candidates[]>(`${this.apiUrl}/GetCandidate/GetByEmail/${email}`);
  }

  getCandidatesByPhone(phone: string): Observable<Candidates[]> {
    return this.http.get<Candidates[]>(`${this.apiUrl}/GetCandidate/GetByPhone/${phone}`);
  }

  getInterviewsByDate(date: string): Observable<Recuriters[]> {
    return this.http.get<Recuriters[]>(`${this.apiUrl}/ListInterview/GetByDate/${date}`);
  }

  getInterviewsByRound(round: number): Observable<Recuriters[]> {
    return this.http.get<Recuriters[]>(`${this.apiUrl}/ListInterview/GetByRound/${round}`);
  }

  getInterviewsByName(name: string): Observable<Recuriters[]> {
    return this.http.get<Recuriters[]>(`${this.apiUrl}/ListInterview/GetByIntName/${name}`);
  }

  scheduleInterview(recruiter: Recuriters): Observable<Recuriters> {
    return this.http.post<Recuriters>(`${this.apiUrl}/ScheduleInterview`, recruiter);
  }

  updateOfferLetterStatus(name: string, status: string): Observable<string> {
    return this.http.put<string>(`${this.apiUrl}/FilterCandidates/UpdatOfferLetter/${name}/${status}`, null);
  }
}
