/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */
/* eslint-disable array-callback-return */
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

const EditCategoriesModal = (props) => {
  const {
    IsOpen, closeModal, setData, data, record,
  } = props;

  const submitHandler = (values) => {
    const request = data.map((item) => {
      let cloneData = { ...item };
      if (cloneData.id === record.id) {
        cloneData = values;
        cloneData.showHide = cloneData.status === 'enable' ? 1 : 0;
      }
      return cloneData;
    });

    console.log(request);
    setData(request);
    closeModal();
  };

  const initialValues = {
    key: record && record.key ? record.key : '',
    displayName: record && record.displayName ? record.displayName : '',
    status: record && record.showHide ? (record.showHide === 1 ? 'enable' : 'disable') : '',
    order: record && record.order ? record.order : '',
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
      contentLabel="Edit Categories"
      ariaHideApp={false}
    >
      <form onSubmit={formik.handleSubmit}>
        <div className="close-modal-icon" onClick={closeModal} />
        <div className="add-new-title">Edit Categories</div>
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

export default EditCategoriesModal;
