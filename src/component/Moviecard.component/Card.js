import  './card.css'

const Card = ({movie}) => {
  
  return (
   
    <div key={movie.imdbID} className="movie">
            <img src={movie.Poster} alt={movie.Title.toString()} className="image"/>
            <div className="write">
            <p className="title">{movie.Title}</p>
            </div>
            <div className="write">
              <p className="year">{movie.Year}</p>
            </div>
          </div>
   
    )
}

export default Card;