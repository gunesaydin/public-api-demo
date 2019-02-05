const router = require('express').Router();
const cors = require('cors');
const Blog = require('../models/blog');

router.use(cors({
	allowedHeader: ['Origin', 'Content-Type'],
	methods: 'GET, POST, PUT, DELETE',
	/* Remove comment from 'origin' key if you are hosting your React or Angular applications
	from the same host computer while trying to reach this backend routes. 
	It will whitelist ports against CORS policy. */
	// origin: ['http://localhost:4200', 'http://localhost:3000']
}))

router.get('/', (req, res) => {
	Blog.find({}) 
		.then(blogs => res.status(200).send(blogs))
		.catch(error => console.log(`Something went wrong: ${error}`))
})

router.get('/:id', (req, res) => {
	Blog.findById(req.params.id) 
		.then(blog => res.status(200).send(blog))
		.catch(error => console.log(`Something went wrong: ${error}`))
})

router.post('/', (req, res) => {
	Blog.create(req.body) 
		.then(blog => res.status(201).send(blog))
		.catch(error => console.log(`Something went wrong: ${error}`))
})

router.put('/:id', (req, res) => {
	Blog.findByIdAndUpdate(req.params.id, req.body)
		.then(blog => res.status(201).send(blog))
		.catch(error => console.log(`Something went wrong: ${error}`))
})

router.delete('/:id', (req, res) => {
	Blog.findByIdAndRemove(req.params.id)
		.then(blog => res.status(204).send(blog))
		.catch(error => console.log(`Something went wrong: ${error}`))
})

module.exports = router;