## Description

Simple RESTful API example using [Nest.JS](https://github.com/nestjs/nest).
Scaffolded from Nest.JS example repository.

## Installation

```bash
$ npm install
```

## Running Docker database container
To run database locally, use the following command (must have Docker installed):
```bash
$ docker compose up -d
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Testing endpoints manually

To test endpoints, use cURL with local execution. Examples:
```bash
curl --request GET \
  --url http://localhost:3000/
```

```bash
curl --request GET \
  --url http://localhost:3000/cakes/
```

```bash
curl --request POST \
  --url http://localhost:3000/cakes/mimic/ \
  --header 'Content-Type: application/json' \
  --data '{
	"flavour": "red velvet",
	"ingredients": {
			"egg": 2,
			"flour": 1,
			"milk": "1 1/2 cup"
	}
}'
```


## License

Nest is [MIT licensed](LICENSE).
