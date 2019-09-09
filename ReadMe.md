# Requirements
- Node (recommended versions 10.16.2)
  - when `nvm` installed type `nvm use`
- Postgres (`brew install postgresql && brew services start postgresql`)

# Installation
```
npm i
cp sample.env .env
createdb hapi-test

npm start
```

# Migrations
## Generating migration
Generating new migration base on schema change

`npm run typeorm -- migration:generate -n <MigrationName>`

It runs `typeorm-cli` with `ts-node` - thats required (runing witout ts-node throw errors about not complatible modules)

## Running migration
`npm run typeorm -- migration:run`