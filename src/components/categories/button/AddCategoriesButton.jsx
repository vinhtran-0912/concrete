import React, { useState } from 'react';
import '../../../asset/scss/components/categories/AddCategoriesButton.scss';
import AddCategoriesModal from '../modal/AddCategoriesModal';

const AddCategoriesButton = (props) => {
  const [IsOpen, setIsOpen] = useState(false);

  const {
    setData, data,
  } = props;
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button type="button" className="button-custom button-add" onClick={() => openModal()}>
        Add
      </button>
      <AddCategoriesModal
        IsOpen={IsOpen}
        closeModal={() => closeModal()}
        setData={setData}
        data={data}
      />
    </>
  );
};

export default AddCategoriesButton;
