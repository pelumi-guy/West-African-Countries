import React from 'react';
import { Modal } from 'bootstrap';
import PropTypes from 'prop-types';

function CountryModal({ title, content }) {
  const modalRef = React.useRef(null);

//   React.useEffect(() => {
//     const modal = new Modal(modalRef.current);
//     return () => modal.dispose(); // Cleanup modal instance
//   }, []);

  return (
    <div className="modal fade" ref={modalRef}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
}

CountryModal.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string
}

export default CountryModal;


