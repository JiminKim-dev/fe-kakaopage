const express = require('express');
const router = express.Router();
const fs = require('fs');

const mainBanner = require('../data/mainBannerData');
const promotionBanner = require('../data/promotionBannerData');
const themeMenu = require('../data/themeMenuData.json');
const dailyTop = require('../data/dailyTopData.json');
const dailyRanking = require('../data/dailyRanking.json');
const homeGenreTop = require('../data/homeGenreTopData.json');

router.get('/main-banner', function(req, res, next) {
  res.json(mainBanner);
});

router.get('/promotion-banner', function(req, res, next) {
  res.json(promotionBanner);
});

router.get('/theme-Menu', function(req, res, next) {
  res.json(themeMenu);
});

router.get('/daily-top', function(req, res, next) {
  res.json(dailyTop);
});

router.get('/daily-ranking', function(req, res, next) {
  res.json(dailyRanking);
});

router.get('/home-genre-top', function(req, res, next) {
  res.json(homeGenreTop);
});


module.exports = router;