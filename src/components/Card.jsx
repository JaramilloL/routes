import PropTypes from 'prop-types'

const Card = ({ item }) => {
  return (
    <div className="card col">
                <img
                  src={item.image}
                  className="card-img-top w-100"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">Gender: {item.gender}</p>
                  <p className="card-text">Species: {item.species}</p>
                  <p className="card-text">Status: {item.status}</p>
                </div>
              </div>
  )
}

export default Card
Card.propTypes = {
    item: PropTypes.object
}