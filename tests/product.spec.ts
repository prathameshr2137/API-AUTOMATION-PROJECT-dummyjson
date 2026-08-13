import { test, expect } from '@playwright/test';

test('GET products', async ({ request }) => {
  const res = await request.get('https://dummyjson.com/products');
  expect(res.status()).toBe(200);

  const body = await res.json();
  expect(Array.isArray(body.products)).toBe(true);
  expect(body.products.length).toBeGreaterThan(0);
});

test('GET product by ID', async ({ request }) => {
  const res = await request.get('https://dummyjson.com/products/1');
  expect(res.status()).toBe(200);

  const body = await res.json();
  expect(body.id).toBe(1);
  expect(body).toHaveProperty('title');
});

test('POST create product', async ({ request }) => {
  const res = await request.post('https://dummyjson.com/products/add', {
    data: { title: 'Playwright Product', price: 199 },
  });
  expect(res.status()).toBe(201);

  const body = await res.json();
  expect(body.title).toBe('Playwright Product');
  expect(body.price).toBe(199);
});

test('PUT update product', async ({ request }) => {
  const res = await request.put('https://dummyjson.com/products/1', {
    data: { title: 'Updated Product', price: 299 },
  });
  expect(res.status()).toBe(200);

  const body = await res.json();
  expect(body.title).toBe('Updated Product');
  expect(body.price).toBe(299);
});

test('DELETE product', async ({ request }) => {
  const res = await request.delete('https://dummyjson.com/products/1');
  expect(res.status()).toBeGreaterThanOrEqual(200);
  expect(res.status()).toBeLessThan(300);
});
