import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component {

  url!: string;

  /*
   * constructeur
   * */
  constructor(private http: HttpClient) {
  }

    /*
   * ngOnInit
   * */
    ngOnInit() {
     this.url = "http://localhost:8080/liste";
     //this.url = "http://localhost:8080/toto";
     //this.url = "http://localhost:8080/test?test=12";
     }

   /*
   * apiGet()
   * */
  apiGet() {

    var chiffre = Math.floor(Math.random() * 20);
    console.log("[Page1Component] apiGet = "+ chiffre) ; 

    this.http.get<any>(this.url).subscribe(response => {
      
      //console.log("[Page1Component] response = "+JSON.parse(response)); 
      console.log("[Page1Component] response = "+response); 
      var respons = JSON.stringify(response);
      console.log("[Page1Component] response = "+respons); 
    }, error => console.error(error));
  }

}
