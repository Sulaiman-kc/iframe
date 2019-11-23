import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient, ) {
    // this.getProduct()
    this.get()
    // console.log(this.dat);
  }


  dat
  title = 'Angulariframe';
  // iframeURL = "http://localhost:3000"

  // getProduct(){
  //   return this.http.get<any>(this.iframeURL).subscribe((res)=>{
  //     console.log((res.body));
  //     this.data = res.body
  //   })
  // }
  // get() {
  //   var data
  //   var xhr = new XMLHttpRequest();
  //   xhr.open("GET", "https://www.isfrc.com", true);
  //   xhr.onload = function () {
  //     console.log(xhr.responseText);
  //     data = xhr.responseText
  //   };
  //   this.dat = xhr.responseText
  //   console.log(xhr.responseText);
  //   xhr.send();
  // }


  get() {
    //   this.http.get('https://cc.isfrc.com/').subscribe(function (response) {
    //     var html = response;
    //     console.log(response);

    //   });

    this.http.get('https://www.isfrc.com', { responseType: 'text' })
      .subscribe(data => {
        console.log(data);
        this.dat = data
      }, error => {
        console.log(error);
      });;
  }

}
