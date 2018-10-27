import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title:string;
  apiURL:string;
  articlesData:aiArticles[];
  happenMessage:string;

  constructor(private http:HttpClient ){
    this.title = 'Bismillah ir Rehman ir Raheem';
    this.apiURL = "https://ddxhruyrrj.execute-api.us-east-2.amazonaws.com/aiProd/aiarticles";
    this.articlesData = [];
    this.happenMessage = '';
  }

  ngOnInit(){
    /* 
    this.myFunctionNormally(); 
    */
    this.myFunctionAsync();
  }

  articlesAPIcall():Observable<aiArticles[]>{
    return this.http.get<aiArticles[]>(this.apiURL);
  }

  toHappenAfterAPIcall(){
    var nowTime = new Date();
    this.happenMessage = 'ran the happen message! ' + nowTime.toLocaleTimeString();
    console.log(this.happenMessage);
  }

  getArticles(){
   return new Promise((resolve, reject) =>{
     this.articlesAPIcall().subscribe(
       data => {console.log(data); this.articlesData = data;}
       ,errr => {console.log(errr);}
       ,() => {
         var nowTime = new Date();
         console.log('Finally '+ nowTime.toLocaleTimeString());
         if(this.articlesData.length >0) {
         resolve(this.articlesData.length);
         } else { reject(0); }
       }
     );
   }); 
  }
  
  myFunctionNormally(){
    this.getArticles();
    this.toHappenAfterAPIcall();
  }

  async myFunctionAsync(){
    const testVAL = await this.getArticles();
    console.log(`testval:` + testVAL);
    this.toHappenAfterAPIcall();
  }
  

}

export class aiArticles{
  imgsrc:string;
  alttext:string;
  articlelink:string;
  articleheading:string;
  publisheddate:string;
}