import { FaEnvelope, FaMobile, FaTrash } from 'react-icons/fa';

function Contact({ user, remove }) {

    const handleRemove = () => {
        remove(user.id);
    };

  return (
    <>
      <div className="card bg-body-secondary border-0 mb-3">
        <div className="card-body p-4">
          <div className="card-text">
            <div className="d-flex align-items-center">
              <img
                src={`https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/${user.id}.png`}
                alt=""
                className="img-fluid rounded-circle me-3 me-sm-4"
                height={'80px'}
                width={'80px'}
              />
              <div>
                <h4 className="text-muted">{user.name}</h4>
                <small className="text-muted">
                  <div className="mb-1">
                    <FaEnvelope className="text-secondary me-2" />
                    {user.email}
                  </div>
                  <div>
                    <FaMobile className="text-secondary me-2" />
                    {user.phone}
                  </div>
                </small>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer border-0">
          <button onClick={handleRemove} className="btn btn-outline-secondary border-0 btn-sm float-end">
            <FaTrash size={'1rem'} />
          </button>
        </div>
      </div>
    </>
  )
}

export default Contact
