import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'heavy-loader-fast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section [ngClass]="['w-full', cssClass]">
      <ng-content select="selector" />
    </section>
  `,
})
export class HeavyLoaderFastComponent {
  @Input({required: true}) cssClass!: string;

  constructor() {
    console.log('HeavyLoader Fast creado')
  }
}
