import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  input: number | undefined;
  response: any | undefined;

  constructor(private http: HttpClient) {}

  execute() {
    this.http.get<number>(`http://localhost:8000/labseq/${this.input}`).subscribe(response => {
      this.response = response;
    });
  }
}
