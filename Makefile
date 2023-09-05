install:
	npm ci

publish:
	npm publish --dry-run

link:
	npm link

lint:
	npm run lint

test:
	npm run test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

.PHONY: test