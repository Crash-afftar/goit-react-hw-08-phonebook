// import ContactForm from 'components/ContactForm/ContactForm';
// import ContactList from 'components/ContactList/ContactList';
// import ContactFilter from 'components/ContactFilter/ContactFilter';

// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import { useDispatch, useSelector} from 'react-redux';
// import { useEffect } from 'react';
// import { fetchContacts } from 'redux/contacts/operations';
// import { selectFilter, selectIsLoading, selectError } from 'redux/contacts/selectors';
// import { Container } from './App.styled';
// import { Loader } from 'components/Loader/Loader.styled';
// import Home from 'pages/Home';
// import Login from 'pages/Login';


// export const App = () => {
//   const dispatch = useDispatch();
//   const search = useSelector(selectFilter);
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchContacts(search));
//   }, [dispatch, search]);

//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 36,
//         color: '#010101',
//       }}
//     >
//       <Home />
      
//       <Login/>
//       <Container>
//         <h3>Phonebook</h3>
//         <ContactForm />
//         <h3>Contacts</h3>
//         <ContactFilter />
//         {isLoading && !error && <Loader/>}
//         <ContactList />
//         <ToastContainer position="top-center" />
//       </Container>
//     </div>
//   );
// };

import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Layout } from 'components/Layout';
import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute';

import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';


const HomePage = lazy(() => import('../../pages/Home'));
const RegisterPage = lazy(() => import('../../pages/Register'));
const LoginPage = lazy(() => import('../../pages/Login'));
const PhoneBookPage = lazy(() => import('../../pages/PhoneBook'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<PhoneBookPage />} />
          }
        />
      </Route>
    </Routes>
  );
};