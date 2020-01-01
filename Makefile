install:
	npm install

build:
	rm -rf build
	npm run build

lint:
	npm run lint

.PHONY: build