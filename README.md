# USPTO prior art submission backend

## Starting the app

```
sudo npm install

Change the port in ./bin/www to whatever you want. Make sure it's open on the EC2 role. 

Run the following with the right AWS credentials:

DATABASE_DIALECT=sqlite DATABASE_STORAGE="./db.development.sqlite" AWS_ACCESS_KEY='STUFF' AWS_SECRET_ACCESS_KEY='STUFF' sudo npm start

http://ec2-52-0-251-162.compute-1.amazonaws.com:PORT/ will be the endpoint

POST http://ec2-52-0-251-162.compute-1.amazonaws.com:PORT/priorarts

GET http://ec2-52-0-251-162.compute-1.amazonaws.com:PORT/npl?cpc=123&cn=456&keyword=something&offset=10&limit=10
```
Config env options for prod:

DATABASE_DIALECT=mysql
DATABASE_USERNAME=username
DATABASE_PASSWORD=password
DATABASE_HOST=127.0.0.1
DATABASE_NAME=database_name

AWS_ACCESS_KEY='STUFF'
AWS_SECRET_ACCESS_KEY='STUFF'

http://



      