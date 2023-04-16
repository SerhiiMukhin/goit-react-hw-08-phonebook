import React from 'react';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <>
      <h3 className={css.title}>Find contacts by name</h3>
      <input
        className={css.input}
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
        placeholder="Enter contact name..."
      />
    </>
  );
};
