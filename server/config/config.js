require('dotenv').config();

module.exports = {
  development: {
    username: 'postgres',
    password: 'ThisPasswordIsWeak',
    database: 'postgres',
    host: 'db.mduemnearpuqwcvpgnph.supabase.co',
    logging: true,
    dialect: "postgres"
  },
  test: {
    username: 'postgres',
    password: 'ThisPasswordIsWeak',
    database: 'postgres',
    host: 'db.mduemnearpuqwcvpgnph.supabase.co',
    dialect: "postgres"
  },
  production: {
    username: 'postgres',
    password: 'ThisPasswordIsWeak',
    database: 'postgres',
    host: 'db.mduemnearpuqwcvpgnph.supabase.co',
    dialect: "postgres"
  }
}
