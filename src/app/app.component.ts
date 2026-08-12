import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenantService } from './services/tenant.service';
import { Tenant, Product } from './lib/theme';
import { TenantBannerComponent } from './components/tenant-banner.component';
import { ProductGridComponent } from './components/product-grid.component';

// White-Label Storefront: Angular serves ENTERPRISE tenants only.
// Self-serve tenants get the React storefront instead.
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TenantBannerComponent, ProductGridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  tenant: Tenant | null = null;
  products: Product[] = [];

  constructor(private tenantService: TenantService) {}

  ngOnInit(): void {
    this.tenantService.getTenantConfig('globex').subscribe({
      next: (data) => (this.tenant = data),
      error: () => {},
    });
    this.tenantService.getTenantProducts('globex').subscribe({
      next: (data) => (this.products = data.products),
      error: () => {},
    });
  }
}
