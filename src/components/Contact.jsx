import logo from '../assets/react.svg'

const Contact = () => {
    const estilo = {
        width: "18rem",
      };
  return (
    <div>
     <div className="d-flex justify-content-center mt-5 mb-5">
        <div className="card" style={estilo}>
          <img src={logo} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"><strong>Name: </strong>Juan Luis Jaramillo Lopez</h5>
            <p className="card-text">
            <strong>Age: </strong>23
            </p>
            <p>
            <strong>Carrier: </strong>Computer Science Engineering
            </p>
            <p>
            <strong>Email: </strong>juanluisjaram@gmail.com
            </p>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default Contact