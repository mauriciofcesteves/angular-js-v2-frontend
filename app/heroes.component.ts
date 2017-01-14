import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

import { Router }   from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  providers: [HeroService],
  templateUrl: 'heroes.component.html',
  styleUrls: [ 'heroes.component.css' ]
})

export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  title = 'Tour of Heroes';
  heroes: Hero[];

  constructor(
    private heroService: HeroService,
    private router: Router
  ) {}

  gotoDetail(): void {
    this.router.navigate(['detail', this.selectedHero.id]);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
