import { test, expect } from '@playwright/test';

test('GET users', async ({ request }) => {
  const res = await request.get('https://dummyjson.com/users');
  expect(res.status()).toBe(200);

  const body = await res.json();
  expect(body.users.length).toBeGreaterThan(0);
  expect(body.users[0]).toHaveProperty('email');
});

test('GET user by ID', async ({ request }) => {
  const res = await request.get('https://dummyjson.com/users/1');
  expect(res.status()).toBe(200);

  const body = await res.json();
  expect(body.id).toBe(1);
  expect(body).toHaveProperty('email');
});

test('PUT update user', async ({ request }) => {
  const res = await request.put('https://dummyjson.com/users/1', {
    data: { lastName: 'Updated' },
  });
  expect(res.status()).toBe(200);

  const body = await res.json();
  expect(body.lastName).toBe('Updated');
});
