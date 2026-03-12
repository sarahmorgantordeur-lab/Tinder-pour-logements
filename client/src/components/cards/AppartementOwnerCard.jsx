import landingImg from '../../assets/images/LandingPictureBackground.jpg';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function AppartementCard({ appartement }) {
  const imageSrc = appartement.image || landingImg;

    return (
        <motion.div className="appartement-owner-card">
            <div className="appartement-owner-card-header">
                <img className="appartement-owner-card-image" src={imageSrc} alt={appartement.title} />
                <div className="appartement-owner-card-header-content">
                    <h3>{appartement.title}</h3>
                    <select
                        className="appartement-owner-status"
                        value={appartement.status}
                        onChange={(e) => console.log(e.target.value)}
                    >
                        <option value="draft">Brouillon</option>
                        <option value="published">Publié</option>
                        <option value="rented">Loué</option>
                        <option value="archived">Archivé</option>
                    </select>
                </div>
            </div>
            <div className="appartement-owner-card-body">
                <p className="appartement-owner-city">{appartement.postal_code}, {appartement.city}</p>
                <p className="appartement-owner-price">{appartement.price} €</p>
            </div>
            <div className="appartement-owner-card-footer">
                <Link className='crud-link' to={`/discussions?property=${appartement.id}`}>
                    <button className="appartement-owner-card-button">Messages</button>
                </Link>
                <Link className='crud-link' to={`/properties/${appartement.id}/edit`}>
                    <button className="appartement-owner-card-button">Modifier</button>
                </Link>
            </div>
            {appartement.swipes?.length > 0 && (
                <div className="appartement-owner-card-interested">
                    <p className="appartement-owner-interested-title">Intéressés ({appartement.swipes.length})</p>
                </div>
            )}
        </motion.div>
    )
}
