# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Flask-based Todo application with the following components:
- **Flask Backend**: Simple web server with SQLite database (app.py)
- **HTML Template**: Single-page interface using Jinja2 templates
- **CSS Styling**: Custom styling for the todo interface
- **E2E Testing**: Playwright-based browser automation tests

## Development Commands

### Running the Application
```bash
# Start the Flask development server
python app.py
# The app will be available at http://localhost:5000
```

### Testing
```bash
# Run E2E tests with Playwright (requires the Flask app to be running)
cd playwright
npx playwright test
# Tests expect the app to be running at http://localhost:5000
```

### Database Management
The SQLite database is automatically created when running the app for the first time in the `instance/` directory.

## Code Architecture

### Backend Structure (app.py)
- **Flask App**: Main application with SQLAlchemy ORM
- **Todo Model**: Simple model with `id` and `title` fields
- **Routes**:
  - `/` (GET/POST): Display todo list
  - `/add` (POST): Add new todo
  - `/delete/<id>` (POST): Delete specific todo

### Frontend Structure
- **templates/index.html**: Main HTML template using Jinja2
- **static/style.css**: Custom CSS with centered container design
- Form-based interactions for adding/deleting todos

### Testing Structure
- **playwright/**: E2E test setup with TypeScript
- **todo.spec.ts**: Main test file covering add/delete functionality
- Tests are configured to run in Chromium browser only

## Key Dependencies

### Python (pyproject.toml)
- Flask + Flask-SQLAlchemy for web framework and ORM
- Requires Python >= 3.13

### Node.js (playwright/package.json)
- @playwright/test for E2E testing
- @types/node for TypeScript support

## Development Notes

- The application uses SQLite as the database, stored in `instance/db.sqlite`
- All database operations are handled through SQLAlchemy ORM
- The frontend is server-side rendered with Jinja2 templates
- Tests expect the Flask development server to be running on port 5000