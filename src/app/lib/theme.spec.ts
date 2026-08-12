import { themeStyles, sortProductsByName, Tenant, Product } from './theme';

describe('themeStyles', () => {
  it('maps a tenant primary color into inline styles', () => {
    const tenant: Tenant = { brand: 'Globex', primaryColor: '#0f172a' };
    expect(themeStyles(tenant)).toEqual({ background: '#0f172a', color: '#ffffff' });
  });
});

describe('sortProductsByName', () => {
  it('sorts without mutating input', () => {
    const input: Product[] = [{ id: 1, name: 'Suite' }, { id: 2, name: 'Custom' }];
    const sorted = sortProductsByName(input);
    expect(sorted.map((p) => p.name)).toEqual(['Custom', 'Suite']);
    expect(input[0].name).toBe('Suite');
  });
});
