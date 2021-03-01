/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

import '../../asset/scss/components/categories/categories.scss';
import CategoryTable from './CategoryTable';
import AddCategoriesButton from './button/AddCategoriesButton';

const Categories = () => {
  const columns = [
    {
      Header: 'Id',
      accessor: 'id',
      show: false,
    },
    {
      Header: 'Key',
      accessor: 'key',
    },
    {
      Header: 'Display Name',
      accessor: 'displayName',
    },
    {
      Header: 'Show/Hide',
      accessor: 'showHide',
    },
    {
      Header: 'Order',
      accessor: 'order',
    },
    {
      Header: 'Edit',
      accessor: 'edit',
    },
    {
      Header: 'Delete',
      accessor: 'Delete',
    },
    {
      Header: 'Bulk Delete',
      accessor: 'BulkDelete',
    },
  ];

  const [data, setData] = useState([
    {
      id: 1,
      key: 'Games',
      displayName: 'Games',
      order: 1,
      showHide: 1,
    },
    {
      id: 2,
      key: 'DeFi',
      displayName: 'DeFi',
      order: 1,
      showHide: 0,
    },
  ]);

  return (
    <div className="categories">
      <div className="categories-headder">
        <div className="title">Categories</div>
        <div className="group-button">
          <AddCategoriesButton
            setData={(e) => setData(e)}
            data={data}
          />
          <button type="button" className="button-custom">
            Delete all
          </button>
        </div>
      </div>
      <div className="categories-content">
        <div className="categories-detail">
          <div className="categories-detail-inner">
            <CategoryTable
              columns={columns}
              data={data}
              setData={(e) => setData(e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
