import { Component, Input } from '@angular/core';
import { themeStyles, Tenant } from '../lib/theme';

@Component({
  selector: 'app-tenant-banner',
  standalone: true,
  template: `<div [style.background]="styles().background" [style.color]="styles().color">
    <h1>{{ tenant.brand }} storefront (Angular, enterprise)</h1>
  </div>`,
})
export class TenantBannerComponent {
  @Input() tenant!: Tenant;

  styles() {
    return themeStyles(this.tenant);
  }
}
