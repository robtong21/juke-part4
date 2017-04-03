const express = require('express');
const getLyrics = require('lyric-get').get;
const router = new express.Router();
module.exports = router;

router.get('/:artist/:song', (req, res, next) => {

	console.log("REQ PARAMS IS", req.params);

    getLyrics(req.params.artist, req.params.song, (err, r) => {
        if (err) {

        	var errorVal = new Error(err);
        	errorVal.status = 404;
        	return next(errorVal);
        }

        res.send({ lyric: r });
    });

});
