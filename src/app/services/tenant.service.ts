import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tenant, Product } from '../lib/theme';

@Injectable({ providedIn: 'root' })
export class TenantService {
  constructor(private http: HttpClient) {}

  // White-Label Storefront: Angular serves ENTERPRISE tenants only.
  getTenantConfig(tenantId: string): Observable<Tenant> {
    return this.http.get<Tenant>('/api/tenant-config', {
      headers: new HttpHeaders({ 'x-tenant-id': tenantId }),
    });
  }

  getTenantProducts(tenantId: string): Observable<{ products: Product[] }> {
    return this.http.get<{ products: Product[] }>('/api/tenant-products', {
      headers: new HttpHeaders({ 'x-tenant-id': tenantId }),
    });
  }
}
