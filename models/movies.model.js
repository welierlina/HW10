const pool = require("../config/queries")

async function getAll() {
    try {
        const result = await pool.query(
            `SELECT * FROM movies`
        );

        return result
    } catch(error) {
        throw error
    }
}

async function upload(id, source) {
    try {
        console.log(id, source)
        const result = await pool.query(
            `UPDATE movies SET photo=$1 WHERE id=$2`,
            [source, id]
        )

      return result
    } catch (error) {
        throw error
    } 
}


module.exports = { getAll, upload }