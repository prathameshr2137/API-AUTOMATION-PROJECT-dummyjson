import { test, expect } from '@playwright/test';

test('POST create cart', async ({ request }) => {
  const res = await request.post('https://dummyjson.com/carts/add', {
    data: { userId: 1, products: [{ id: 1, quantity: 2 }] },
  });
  expect(res.status()).toBe(201);

  const body = await res.json();
  expect(body.userId).toBe(1);
  expect(body.products[0].quantity).toBe(2);
});
