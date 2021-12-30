# node-express-app
Example application rest API + Unittest with node-express and Jest

## create node project

```bash
mkdir node-express-app
cd node-express-app
npm init -y
```

## install node express

```bash
npm install express --save
```

## install jest unit test

```bash
npm install --save-dev jest
npm install node-mocks-http --save
```

## start project

```bash
npm start
```

## unit test

```
npm test
```

## API List ##

|METHOD|URI|DESCRIPTION|
|---|---|---|
|GET|/books|Get all books|
|GET|/books/1|Get book by id|
<!-- |POST|/books|Create book|
|PUT|/books/1|Update book|
|DELETE|/books/1|Delete book| -->

