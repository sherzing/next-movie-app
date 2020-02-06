import Modal from './modal'
import MovieCreateForm from './movieCreateForm'

const SideMenu = props => {
    console.log(props)
    // containment
    return (
        <div>
            <Modal>
                <MovieCreateForm />
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