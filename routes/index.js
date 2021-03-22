const express = require('express');
const router = express.Router();
const path = require('path');
const publicPath = path.resolve(__dirname, '../public');

router.get('/', (req, res) => res.sendFile(path.resolve(publicPath, 'index.html')));

router.get('/about', (req, res) => res.sendFile(path.resolve(publicPath, 'about-me.html')));

router.get('/contact', (req, res) => res.sendFile(path.resolve(publicPath, 'contact-me.html')));

router.get('*', (req, res) => res.sendFile(path.resolve(publicPath, '404.html')));

module.exports = router;