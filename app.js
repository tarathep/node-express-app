const express = require('express')
const bookRoutes = require("./routes/book.routes");


const app = express()

app.use(express.json());
app.use("/books",bookRoutes);

module.exports = app;















// app.get('/books', (req, res) => {
//   res.json(books)
// })

// app.get('/books/:id', (req, res) => {
//   res.json(books.find(book => book.id === req.params.id))
// })

// app.post('/books', (req, res) => {
//   books.push(req.body)
//   res.status(201).json(req.body)
// })

// app.put('/books/:id', (req, res) => {
//   const updateIndex = books.findIndex(book => book.id === req.params.id)
//   res.json(Object.assign(books[updateIndex], req.body))
// })

// app.delete('/books/:id', (req, res) => {
//   const deleteIndex = books.findIndex(book => book.id === req.params.id)
//   books.splice(deleteIndex, 1)
//   res.status(204).send()
// })
