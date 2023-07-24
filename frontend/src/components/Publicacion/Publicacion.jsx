import { Button, PieGraph, DropdownMenu } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { saveDataAction } from '../../redux/messengerDucks';
import { messenger } from '../../redux/actionDictionary.js';
import { 
    faHeart, 
    faPhone, 
    faRulerCombined, 
    faArrows, 
    faBed, 
    faBathtub, 
    faCar, 
    faEllipsisVertical 
} from '@fortawesome/free-solid-svg-icons';
import { FaWhatsapp } from 'react-icons/fa'
import './Publicacion.css';

const Publicacion = (props) => {

    const userInfo = useSelector(store => store.user.userInfo);
    const dispatch = useDispatch();

    let coinidicencePercentage = 0;

    return (
        <div className="publicacion">
            <img 
                className="publicacion__img" 
                src={props.frontPage} 
                alt="Imagen principal de la publicación" 
            />

            <h4>{props.currency} {props.price}</h4>

            {
                props.expensesValue 
                ? <p>$ {props.expensesValue}</p>
                : null
            }

            <h4 className="publicacion__ubicacion">{props.locality}</h4>

            <p className="publicacion__ciudad">{props.state}</p>

            {
                props.preference ? (
                    <div className="publicacion__tipo">
                        {
                            props.preference.map(filter => {
                                if (filter.found)
                                    coinidicencePercentage += filter.percentage
                            })
                        }
                        <p>Porcentaje de coincidencia: {coinidicencePercentage}%</p>
                        <PieGraph
                            data={props.preference}
                            dataKey='percentage'
                        />
                    </div>
                ) : null
            }

            <p>{props._id}</p>

            {
                props.options ? (
                    <DropdownMenu 
                        className="publicacion__editar"
                        icon={<FontAwesomeIcon icon={faEllipsisVertical}/>}
                        options={props?.options}
                        onClick={() => props?.setSelectedId(props?._id)}
                    />
                ) : null
            }

            {
                props.storageState?.includes('guardado') &&
                !props.storageState?.includes('publicado')
                ? <p className="publicacion__tipo">Guardado</p>
                : null
            }
            {
                props.storageState?.includes('publicado') 
                ? <p className="publicacion__tipo">Publicado</p>
                : null
            }
            {
                props.storageState?.includes('tasado') 
                ? <p className="publicacion__tipo">Tasado</p>
                : null
            }

            <ul>
                <li><FontAwesomeIcon icon={faRulerCombined} /> {props.totalSurface} m²</li>
                <li><FontAwesomeIcon icon={faArrows} /> {props.coveredSurface} m²</li>
                <li><FontAwesomeIcon icon={faBed} /> {props.bedroomsQuantity} dorm.</li>
                <li><FontAwesomeIcon icon={faBathtub} /> {props.bathroomsQuantity} baño(s)</li>
                <li><FontAwesomeIcon icon={faCar} /> {props.garagesQuantity} coch.</li>
            </ul>

            <h5>{props.title}</h5>

            <p className="publicacion__descripcion">{props.description}</p>

            <img 
                className="publicacion__inmobiliaria" 
                src={props.realEstate} 
                alt="Imagen o logo de la inmobiliaria oferente" />
            
            <div className="publicacion__buttons">
                <Button to="/">
                    <FontAwesomeIcon icon={faHeart} />
                </Button>

                <Button to="/">
                    <FontAwesomeIcon icon={faPhone} />
                </Button>

                <Button to="/">
                    <FaWhatsapp />
                </Button>

                <Button 
                    to={`/mensajeria/nuevo-chat/${props._id}`} 
                    onClick={() => dispatch(saveDataAction(messenger.SET_CLIENT_ID, userInfo._id))}
                    type="blue"
                >
                    Contactar
                </Button>
                <Button 
                                 
                        to={`/publicacion/${props._id}`} 
                        className='publicacion__link'
                >
                    Ver Publicacion
                </Button>
                
            </div>
        </div>
    );
}

export default Publicacion;