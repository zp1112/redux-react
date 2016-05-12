BIN=./node_modules/.bin

all: build

# webpack-server:; $(BIN)/babel-node ./src/server/webpack.js
webpack-server:; $(BIN)/webpack-dev-server --config webpack.config.dev.js --colors
dev-server:; $(BIN)/nodemon --exec $(BIN)/babel-node -- server/server
prod-server: build; NODE_ENV=production $(BIN)/babel-node src/server

build:; $(BIN)/webpack --progress
clean:; rm -rf .dev

.PHONY: all build clean dev-server webpack-server
