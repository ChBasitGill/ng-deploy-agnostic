import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('ng-deploy-agnostic');
  private configService = inject(ConfigService);

  get config() {
    return this.configService.settings;
  }
}
