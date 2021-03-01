/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Modal from 'react-modal';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '798px',
    height: '475px',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '55px 50px',
  },
};

const AddCategoriesModal = (props) => {
  const {
    IsOpen, closeModal, setData, data, record,
  } = props;
  console.log('ád');
  const submitHandler = (values) => {
    let request = [];
    request = [...data, {
      id: data.length + 1,
      key: values.key,
      displayName: values.displayName,
      status: values.key === 'enable' ? 1 : 0,
      order: values.order,
    },
    ];
    setData(request);
    closeModal();
  };

  const initialValues = {
    key: '',
    displayName: '',
    status: '',
    order: '',
  };
  const formik = useFormik({
    enableReinitialize: true,

    // Initial fields
    initialValues,

    validationSchema: Yup.object({
      order: Yup.string()
        .required('Order field is required.'),
    }),

    onSubmit: (values) => {
      submitHandler(values);
    },
  });

  return (
    <Modal
      style={customStyles}
      isOpen={IsOpen}
      onRequestClose={closeModal}
      contentLabel="Add New Categories"
      ariaHideApp={false}
    >
      <form onSubmit={formik.handleSubmit}>
        <div className="close-modal-icon" onClick={closeModal} />
        <div className="add-new-title">Add New Categories</div>
        <div className="input-group">
          <span>Key</span>
          <input
            id="key"
            name="key"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.key}
          />
        </div>
        <div className="input-group">
          <span>Display Name</span>
          <input
            id="displayName"
            name="displayName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.displayName}
          />
        </div>
        <div className="input-group">
          <span>Status</span>
          <input
            id="status"
            name="status"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.status}
          />
        </div>
        <div className="input-group">
          <span>Order</span>
          <input
            id="order"
            name="order"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.order}
          />
        </div>
        <div className="edit-btn">
          {
                record && record.id ? <button type="submit">Edit</button>
                  : <button type="submit">Add</button>
            }
        </div>
      </form>
    </Modal>
  );
};

export default AddCategoriesModal;
