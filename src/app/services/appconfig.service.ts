import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppconfigService {
  mode?: BehaviorSubject<string>;

  constructor() { 
    this.mode = new BehaviorSubject('md');
  }

  getMode() {
    return this.mode;
  }

  setMode(mode: string) {
    this.mode?.next(mode);
  }
}
