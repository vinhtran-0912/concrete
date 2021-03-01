/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useTable } from 'react-table';
import EditCategoriesModal from './modal/EditCategoriesModal';

const CategoryTable = (props) => {
  const {
    columns, data, setData,
  } = props;
  const [record, setRecord] = useState({});
  const [IsOpen, setIsOpen] = useState(false);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
    initialState: {
      hiddenColumns: ['id'],
    },
  });

  const closeModal = () => {
    setIsOpen(false);
  };

  const editCategory = (row) => {
    setRecord(row);
    setIsOpen(true);
  };

  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <>
                <tr {...row.getRowProps()}>
                  <td>{row.values.key}</td>
                  <td>{row.values.displayName}</td>
                  <td>
                    {row.values.showHide === 1
                      ? <div className="show-grid-icon" />
                      : <div className="hide-grid-icon" />}
                  </td>
                  <td>{row.values.Order}</td>
                  <td>
                    <div
                      onClick={() => editCategory({
                        ...row.values,
                      })}
                      className="edit-grid-icon"
                    />
                  </td>
                  <td><div className="delete-grid-icon" /></td>
                  <td>
                    <input
                      className="bulk-delete"
                      type="checkbox"
                      id={row.values.key}
                    />
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
      <EditCategoriesModal
        IsOpen={IsOpen}
        setData={setData}
        data={data}
        record={record}
        setRecord={(e) => setRecord(e)}
        closeModal={() => closeModal()}
      />
    </>
  );
};

export default CategoryTable;
