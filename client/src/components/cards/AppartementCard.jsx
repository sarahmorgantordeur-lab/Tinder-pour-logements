import landingImg from '../../assets/images/LandingPictureBackground.jpg';
import { motion } from 'framer-motion';

export default function AppartementCard ({ appartement, onClick }) {
    const imageSrc = appartement.image || landingImg;

    return (
        <motion.div className="appartement-card" onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
            <div className="appartement-card-header">
            <img className="appartement-card-image" src={imageSrc} alt={appartement.title} />
            <h3>{appartement.title}</h3>
            </div>
            <div className="appartement-card-body">
                <p className="appartement-city">{appartement.postal_code}, {appartement.city}</p>
                <p className="appartement-price">{appartement.price} €</p>
            </div>
        </motion.div>
    )
}