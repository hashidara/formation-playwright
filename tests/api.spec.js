import { test, expect } from '@playwright/test';

test('get a single user', async ({ request }) => {
  const response = await request.get('https://reqres.in/api/users/2');

  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.data.id).toBe(2);
  expect(body.data.email).toContain('@reqres.in');
});

test('create a user', async ({ request }) => {
  const response = await request.post('https://reqres.in/api/users', {
    data: {
      name: 'Robin',
      job: 'QA Engineer',
    },
  });

  expect(response.status()).toBe(201);

  const body = await response.json();
  expect(body.name).toBe('Robin');
  expect(body.job).toBe('QA Engineer');
  expect(body.id).toBeTruthy();
});

test('user not found returns 404', async ({ request }) => {
  const response = await request.get('https://reqres.in/api/users/9999');

  expect(response.status()).toBe(404);
});