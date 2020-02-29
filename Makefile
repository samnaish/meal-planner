install-backend:
	cd backend && npm install

test-backend: install-backend
	cd backend && npm test
