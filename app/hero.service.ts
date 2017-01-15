import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero }   from './hero';
import { HEROES } from './mock-heroes';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class HeroService {
  private heroesUrl = 'http://localhost:8080/customers';
  //private heroesUrl = 'api/heroes';

  constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json() as Hero[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error ocurred', error);
    return Promise.reject(error.message || error);
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
                    .then(heroes => heroes.find(hero => hero.id == id));
  }
}
