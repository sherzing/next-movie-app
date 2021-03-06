import React from 'react'
class MovieList extends React.Component {

    shorten = (text, maxLenght) => {
        if (text && text.length > maxLenght) {
            return text.substr(0,maxLenght) + '...'
        } else {
            return text
        }
    }

    renderMovies(movies) {
        return movies.map(movie => (
            <div key={movie.id} className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                    <a href="#"><img className="card-img-top" src={movie.image} alt="" /></a>
                    <div className="card-body">
                        <h4 className="card-title">
                            <a href="#">{movie.name}</a>
                        </h4>
                        <p className="card-text">{this.shorten(movie.description, 200)}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">{movie.rating}</small>
                    </div>
                </div>
            </div>
            )
        )
    }
    
    render() {
        const { movies }  = this.props
        console.log(movies)



        return (
            <React.Fragment>
               { this.renderMovies(movies) }
            </React.Fragment>
        )
    }
}

export default MovieList

