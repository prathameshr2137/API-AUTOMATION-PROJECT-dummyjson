# Playwright Automation Project

## About the Project

This project is an API automation testing project created using **Playwright and TypeScript**.

The tests are written for the DummyJSON API and cover different functionalities like authentication, users, products and carts.

## Technologies Used

* Playwright
* TypeScript
* Node.js
* Git & GitHub
* GitHub Actions

## Project Structure

```text
tests/
├── auth.spec.ts
├── user.spec.ts
├── product.spec.ts
└── cart.spec.ts

playwright.config.ts
package.json
.gitignore
.github/workflows/playwright.yml
```

## How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/prathameshr2137/API-AUTOMATION-PROJECT-dummyjson.git
```

### 2. Go to the project folder

```bash
cd API-AUTOMATION-PROJECT-dummyjson
```

### 3. Install dependencies

```bash
npm ci
```

### 4. Install Playwright browsers

```bash
npx playwright install
```

### 5. Run the tests

```bash
npx playwright test
```

## Test Cases

* Authentication API testing
* User API testing
* Product API testing
* Cart API testing

## Test Report

After running the tests, the Playwright HTML report can be opened using:

```bash
npx playwright show-report
```

## GitHub Actions

GitHub Actions is configured in:

```text
.github/workflows/playwright.yml
```

The workflow runs the Playwright tests automatically when changes are pushed to the `main` branch or a pull request is created.

## Author

**Prathamesh Raut**

GitHub: `prathameshr2137`

## Purpose

This project was created for learning and demonstrating API automation testing using Playwright with TypeScript.
