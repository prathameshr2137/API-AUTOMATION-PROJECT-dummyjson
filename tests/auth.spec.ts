import { test, expect } from '@playwright/test';

test('Login with valid credentials', async ({ request }) => {
  const res = await request.post('https://dummyjson.com/auth/login', {
    data: { username: 'emilys', password: 'emilyspass' },
  });
  expect(res.status()).toBe(200);

  const body = await res.json();
  expect(body).toHaveProperty('accessToken');
  expect(body).toHaveProperty('refreshToken');
});

test('Login with invalid credentials', async ({ request }) => {
  const res = await request.post('https://dummyjson.com/auth/login', {
    data: { username: 'wronguser', password: 'wrongpass' },
  });
  expect(res.status()).toBe(400);
});
