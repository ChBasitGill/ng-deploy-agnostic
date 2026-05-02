import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  private config: any;

  constructor(private http: HttpClient) {}

  loadConfig() {
    return firstValueFrom(this.http.get('./app-config.json'))
      .then(data => this.config = data);
  }

  get settings() {
    return this.config;
  }
}