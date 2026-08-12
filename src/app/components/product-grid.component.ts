import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sortProductsByName, Product } from '../lib/theme';

@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [CommonModule],
  template: `<ul><li *ngFor="let p of sorted()">{{ p.name }}</li></ul>`,
})
export class ProductGridComponent {
  @Input() products: Product[] = [];

  sorted(): Product[] {
    return sortProductsByName(this.products);
  }
}
