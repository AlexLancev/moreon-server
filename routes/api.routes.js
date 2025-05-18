// routes/api.routes.js
const express = require('express');
const router = express.Router();
const pool = require('../db/database');

// Пример GET-запроса для получения данных из БД
router.get('/data/about_us', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM about_us');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.get('/data/types_services', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM types_services');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.get('/data/every_card', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM every_card');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.get('/data/gallery_list', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM gallery_list');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.get('/data/performance_data', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM performance_data');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.get('/data/video_reviews', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM video_reviews');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.get('/data/reviews', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM reviews');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.get('/data/profitable_visits', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM profitable_visits');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.get('/data/other_directions', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM other_directions');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.get('/data/about_questions', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM about_questions');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.get('/data/personal_format', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM personal_format');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.get('/data/fitness_area', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM fitness_area');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.get('/data/water_zone', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM water_zone');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.get('/data/club_cards', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM club_cards');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.get('/data/childrens_swimming', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM childrens_swimming');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.get('/data/news', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM news');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.get('/data/stock', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM stock');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.get('/data/team', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM team');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.get('/data/directions', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM directions');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;