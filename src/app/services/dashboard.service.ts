import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Track } from '../models/track';
import { DashboardCards } from '../dashboard-card/dashboard-cards.enum';
import { Item } from '../models/item';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {

  defaultState: Array<Track> = [
    {
      items: [
        {
          component: DashboardCards.HELLO_WORLD,
          id: 'hello-world',
        },
        {
          component: DashboardCards.PIE_CHART,
          id: 'pie-chart',
        },
      ],
    },
    {
      items: [
        {
          component: DashboardCards.LINE_CHART,
          id: 'line-chart',
        },
        {
          component: DashboardCards.NUMBER_CARDS,
          id: 'number-cards',
        },
      ],
    },
  ];



  private subject = new BehaviorSubject<Track[]>(this.defaultState);
  tracks$ = this.subject.asObservable();

  removeItem = (item: Item) => {
    const state = this.subject.getValue();
    state.forEach(track => {
      track.items.forEach((i, index) => {
        if (i === item) {
          track.items.splice(index, 1);
        }
      });
    });
    this.subject.next(state);
  }

  addItem = (item: Item) => {
    const state = this.subject.getValue();

    if (state[0].items.indexOf(item) !== -1 || state[1].items.indexOf(item) !== -1) {
      console.warn('Item with the same id exists on the dashboard.');
      return;
    }
    for(var i = 0; i < state.length; i++){
      state[i].items.push(item);
    }

    this.subject.next(state);
  }

  setState = (tracks: Array<Track>) => {
    this.subject.next(tracks);
  }

  loadTracksFromStorage = () => {
    const tracks = JSON.parse(localStorage.getItem('tracks') as string);
    if (tracks) {
      this.subject.next(tracks);
    }
  }

  saveTracksToStorage = () => {
    const state = this.subject.getValue();
    localStorage.setItem('tracks', JSON.stringify(state));
  }

  constructor() {
    this.loadTracksFromStorage();
    this.tracks$.subscribe(() => {
      this.saveTracksToStorage();
    });
  }
}
