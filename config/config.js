module.exports = {
  database_config: {
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    dialect: process.env.DATABASE_DIALECT,
    storage: process.env.DATABASE_STORAGE
  },
  aws_config: { 
  	accessKeyId: process.env.AWS_ACCESS_KEY,  	
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
}
