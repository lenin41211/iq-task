import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

const options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private http: HttpClient) {  
    
    }
    
    
    test(){
    console.log("test_1");
    
    var map = {
      "payload": {
          "product_id":2,
          "category_id":234
      }
    
    }

  this.http.post("http://iqnetwork.ddns.net:5003/bov5001/797311",map,options).subscribe(res => {
  
  console.log(res);
  
  });

    
}
    
}
