import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PartsService {
  public lsKey = 'arrayparts';
  public arrparts: object[] = [];

  constructor(public http: HttpClient) {}

  addPart(item: object) {
    if (localStorage.getItem(this.lsKey)) {
      this.arrparts = JSON.parse(localStorage.getItem(this.lsKey) as string);
    }
    this.arrparts = [...this.arrparts, item];
    localStorage.setItem(this.lsKey, JSON.stringify(this.arrparts));
  }

  deletePart(partIndex: number) {
    this.arrparts = JSON.parse(localStorage.getItem(this.lsKey) as string);
    this.arrparts.splice(partIndex, 1);
    localStorage.setItem(this.lsKey, JSON.stringify(this.arrparts));
  }

  loadParts(): object[] {
    return JSON.parse(localStorage.getItem(this.lsKey) as string);
  }

  sendEmail(url: string, data: any) {
    return this.http.post(url, data);
  }
}
