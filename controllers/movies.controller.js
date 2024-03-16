const { getAll, upload } = require("../models/movies.model")

async function getMovies(req, res) {
    try {
        const { rows } = await getAll();
        
        res.json({data: rows})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

async function uploadImage(req, res) {
    const file = req.file;
    const { id } = req.params    
  
    if (!file) {
      return res.status(400).json({
        msg: 'Wrong File input',
      });
    }
  
    try {
      const result = await upload(id, file.filename)  
      res.status(201).json({ result });
    } catch (err) {
      res.status(500).json({ err });
    }
}

module.exports = { getMovies, uploadImage }