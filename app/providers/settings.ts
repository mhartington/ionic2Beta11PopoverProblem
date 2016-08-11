import {Storage, SqlStorage} from 'ionic-angular'
import {Injectable} from '@angular/core';
import {URLSearchParams} from '@angular/http';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {Observable} from 'rxjs/Observable';

export class Category {
  constructor(public name: string, public id: number, public selected = false) {

  }
  toggleSelect() {
    this.selected = !this.selected;
  }
}

@Injectable()
export class Settings {
  CATEGORIES = [
    new Category("Rings", 539),
    new Category("Earrings", 372),
    new Category("Necklaces", 321),
    new Category("Alternative", 150),
    new Category("Bracelets", 147),
    new Category("Engagement", 61),
    new Category("Body", 12),
    new Category("Men's", 6),
  ];

  DEFAULT_PRICE_FILTER = {
    lower: '0',
    upper: '50000'
  }
  PRICE_RANGE = {
    min: 0,
    max: 50000
  }
  static TINDER_ANIMATION_STATES = {
    INIT_STATE: 'initState',
    LOAD_STATE: 'loadState',
    RETURN_STATE: 'return',
    FADE_IN_STATE: 'fadeIn',
    MOVE_STATE: 'moveState',
    MOVE_LIKE_STATE: 'moveLike',
    MOVE_DISLIKE_STATE: 'moveDislike'
  }

}
