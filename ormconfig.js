module.exports = {
  "type": "postgres",
  "url": process.env.DB_URI,
  "synchronise": true,
  "logging": false,
  "entities": ["src/plugins/**/model.ts"],
  "migrations": ["src/migration/**/*.ts"],
  "subscribers": ["src/subscriber/**/*.ts"],
  "cli": {
    "migrationsDir": "src/migration",
    "subscribersDir": "src/subscriber"
  }
}