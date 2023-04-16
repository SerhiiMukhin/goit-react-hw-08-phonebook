import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';
import { MdDeleteForever } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

export const ContactListItem = ({ contact }) => {
const dispatch = useDispatch()

const handleDelete = () => dispatch(deleteContact(contact.id))

  return (
    <li className={css.item}>
      <div className={css.info}>
        <p className={css.text}>{contact.name}</p>
        <p className={css.number}>{contact.number}</p>
      </div>
      <button
        className={css.button}
        type="button"
        onClick={handleDelete}
        value={contact.id}
      >
        <MdDeleteForever className={css.icon}></MdDeleteForever>
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.object.isRequired,
};
