`nvm use`


Generating new migration base on schema change

`npm run typeorm -- migration:generate -n <MigrationName>`

It runs `typeorm-cli` with `ts-node` - thats required (runing witout ts-node throw errors about not complatible modules)

`npm run typeorm -- migration:run`