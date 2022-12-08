install:
	npm ci
lint:
	npx eslint .
publish:
	npm publish --dry-run
song:
	node bin/song.js