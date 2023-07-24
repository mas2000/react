// Importación de archivos para modificar el diseño de la página o para agregar funcionalidades

import React, { useEffect, useState } from 'react';
import { Nav, Footer } from './components';
import {
  Routes,
  Route,
  Redirect,
  useMatch,
  useResolvedPath,
  useLocation,
} from 'react-router-dom';
//import './css/normalize.css';
import './css/App.css';


// Implementción de páginas para viajar a lo largo de Moving360

import {
  Inicio,
  Publicaciones,
  Publicacion,
  Mensajeria,
  Cargar,
  RegistroInmobiliario,
  Membresias,
  Registrarse,
  SolicitudRegistro,
  TipoRegistro,
  GestionInmobiliaria,
  Login,
  Verificacion,
  SuccessRegister,
  GestionMoving360,
  EditarUsuario,
  Tasar,
  Editar,
} from './views/index.js';

//Componente principal, contiene "Header", "Main" y "Footer"

import { saveDataAction } from './redux/messengerDucks';
import { useSelector, useDispatch } from 'react-redux';
import { messenger } from './redux/actionDictionary';
import { io } from 'socket.io-client';
import userService from './services/user';

const App = () => {

	const userInfo = useSelector(store => store.user.userInfo);
	const dispatch = useDispatch();
	const location = useLocation();

	useEffect(() => {
		const configParams = async () => {
			if (userInfo) {
				const newSocket = io(process.env.REACT_APP_SOCKET_URL);
				dispatch(saveDataAction(messenger.SET_SOCKET, newSocket));

				const { data } = await userService['admin'].get(userInfo._id);

				dispatch(saveDataAction(
					messenger.SET_NOTIFICATIONS, data.notifications
				));
				newSocket.emit("newUser", userInfo._id);
				return () => newSocket.close();
			}
		};
		configParams();
	}, [userInfo]);

	useEffect(() => {
		const outOfRouteMessages = 
		!location.pathname.includes('mensajes') &&
		!location.pathname.includes('mensajeria')

		if (outOfRouteMessages)
			dispatch(saveDataAction(messenger.SET_CURRENT_CHAT, null));
	}, [location]);

	return (
		<>
			<header>
				<Nav />
			</header>

			<main>
				<Routes>
					<Route path="/" exact element={<Inicio />} />
					<Route path="/membresias" exact element={<Membresias />} />
					<Route path="/tipo-registro" exact element={<TipoRegistro />} />
					<Route path="/solicitud-registro" exact element={<SolicitudRegistro />} />
					<Route path="/registro-inmobiliario/*" element={<RegistroInmobiliario />}/>
					<Route path="/iniciar-sesion" exact element={<Login />} />
					<Route path="/alquilar-temporada" exact element={<Publicaciones />} />
					<Route path="/alquilar" exact element={<Publicaciones />} />
					<Route path="/publicacion1" exact element={<Publicacion />} />
					<Route path="/comprar" exact element={<Publicaciones />} />
					<Route path="/mensajeria" exact element={<Mensajeria />} />
					<Route path="/mensajeria/nuevo-chat/:estateId" exact element={<Mensajeria />} />
					<Route path="/cargar/:section/:estate/*" element={<Cargar />} />
					<Route path="/tasar/:section/:estate/*" element={<Tasar />} />
					<Route path="/editar/:section/:estate/*" element={<Editar />} />
					<Route path="/gestion-inmobiliaria/*" element={<GestionInmobiliaria />}/>
					<Route path="/registrarse" exact element={<Registrarse />} />
					<Route path="/verificacion" exact element={<Verificacion />} />
					<Route path="/registro-exitoso" exact element={<SuccessRegister />} />
					<Route path="/gestion-moving360/*" element={<GestionMoving360 />}/>
				</Routes>
			</main>
		</>
	);
};

export default App;