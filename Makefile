install:
	npm install

build:
	rm -rf build
	npm run build

.PHONY: build

lint:
	npm run lint

test:
	cp -R ./build ./stub
	cd ./stub && npm start

.PHONY: test