export interface Tenant {
  id?: string;
  brand: string;
  primaryColor: string;
  tier?: string;
}

export function themeStyles(tenant: Tenant): { background: string; color: string } {
  return { background: tenant.primaryColor, color: '#ffffff' };
}

export interface Product {
  id: number;
  name: string;
}

export function sortProductsByName(products: Product[]): Product[] {
  return [...products].sort((a, b) => a.name.localeCompare(b.name));
}
