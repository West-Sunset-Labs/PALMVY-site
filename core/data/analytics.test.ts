import { describe, expect, it } from 'vitest';
import { getCloudflareToken } from '@/core/data/analytics';

describe('getCloudflareToken', () => {
  it('aceita um token alfanumérico válido', () => {
    const token = 'a1b2c3d4e5f60718293a4b5c6d7e8f90';

    expect(getCloudflareToken(token)).toBe(token);
  });

  it('retorna null sem token', () => {
    expect(getCloudflareToken(undefined)).toBeNull();
    expect(getCloudflareToken('')).toBeNull();
  });

  it('rejeita valores que não parecem um token', () => {
    expect(getCloudflareToken('curto')).toBeNull();
    expect(getCloudflareToken('{"token":"abc"}')).toBeNull();
    expect(getCloudflareToken('abc"><script>alert(1)</script>xxxxxxxx')).toBeNull();
  });
});
