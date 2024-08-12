import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceHttpService {

  url!: string;

  constructor(private http: HttpClient) { }

  getTest() {    
    console.log('Get Test');
    return "Test Http"; 
   }

   getUrl(){
    this.url ="http:localhost:8080/liste";
    this.http.get<any>(this.url).subscribe(response => {
      console.log(response);
    }, error => console.error(error));

    
    /*this.http.get<any>(this.url).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
  });*/

  }
  
}
