install-backend:
	@cd backend && npm install

test-backend: install-backend
	@cd backend && npm test

install-frontend:
	@cd frontend && npm install

test-frontend: install-frontend
	@cd frontend && npm test

test-e2e:
	@cd frontend && npm run cypress:open

start:
	@npx now dev