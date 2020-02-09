import Modal from './modal'
import MovieCreateForm from './movieCreateForm'
import { createMovie } from '../actions/index'

const SideMenu = props => {
    console.log(props)
    // containment

    const handleCreateMovie = (movie) => {
        createMovie(movie).then((movies) => {
            console.log(JSON.stringify(movies))
        })
    }

    return (
        <div>
            <Modal hasSubmit={false}>
                <MovieCreateForm handleFormSubmit={handleCreateMovie} />
            </Modal>
            <h1 className="my-4">{props.appName}</h1>
            <div className="list-group">
                <a href="#" className="list-group-item">Category 1</a>
                <a href="#" className="list-group-item">Category 2</a>
                <a href="#" className="list-group-item">Category 3</a>
            </div>
        </div>
    )
}

export default SideMenu