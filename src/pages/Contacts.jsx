import { UserContacts } from 'components/UserContacts/UserContacts';
import { useEffect } from 'react';
// import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <div>{isLoading && 'Request in progress...'}</div>
      <UserContacts></UserContacts>
    </div>
  );
}
