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

page-loader:
	node bin/page-loader.js

.PHONY: test