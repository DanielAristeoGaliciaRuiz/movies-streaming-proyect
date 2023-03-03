const Users = require("./users.models")
const Episodes = require("./episodes.models")
const MoviesGenres = require('./moviesGenres.model')
const Movies = require("./movies.models")
const Seasons = require("./seasons.models")
const Series = require("./series.models")
const SeriesGenres = require("./seriesGenres.models")
const Genres = require("./genres.models")


const initModels = () => {

    //? Users
    Users

    //? Movies <-> Genres - MovieGenres
    Movies.belongsToMany(Genres, {through: MoviesGenres})
    Genres.belongsToMany(Movies, {through: MoviesGenres})

    //? Series <-> Genres - SerieGenres 
    Series.belongsToMany(Genres, {through: SeriesGenres})
    Genres.belongsToMany(Series, {through: SeriesGenres})

    //? Series -> Seasons 
    Series.hasMany(Seasons)
    Seasons.belongsTo(Series)

    //? Seasons -> Episodes 
    Seasons.hasMany(Episodes)
    Episodes.belongsTo(Seasons)

}

module.exports = initModels