import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<h1>REST</h1><ol><li *ngFor="let rest of rests"> {{rest.id}} {{rest.content}}</li></ol>'
})

export class AppComponent implements OnInit {

  rests = [{ id: "1", content: "offline" }];

  constructor(private http: Http) {

  }

  ngOnInit() {
    console.log('ngOnInit');
    this.http.get("http://localhost:8080/greeting").
    toPromise().then(r => r.json()).then(r => this.rests = r);
  }
}
