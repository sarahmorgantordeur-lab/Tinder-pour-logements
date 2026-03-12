import landingImg from '../../assets/images/LandingPictureBackground.jpg';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function AppartementCard({ appartement }) {
  const imageSrc = appartement.image || landingImg;

    return (
        <motion.div className="appartement-card">
            <div className="appartement-card-header">
            <img className="appartement-card-image" src={imageSrc} alt={appartement.title} />
            <h3>{appartement.title}</h3>
            </div>
            <div className="appartement-card-body">
                <p className="appartement-city">{appartement.postal_code}, {appartement.city}</p>
                <p className="appartement-price">{appartement.price} €</p>
                <select
                    className="appartement-status"
                    value={appartement.status}
                    onChange={(e) => console.log(e.target.value)}
                >
                    <option value="draft">Brouillon</option>
                    <option value="published">Publié</option>
                    <option value="rented">Loué</option>
                    <option value="archived">Archivé</option>
                </select>
            </div>
            {appartement.swipes?.length > 0 && (
                <div className="appartement-card-interested">
                    <p className="appartement-interested-title">Intéressés ({appartement.swipes.length})</p>
                    <ul className="appartement-interested-list">
                        {appartement.swipes.map(({ user }) => (
                            <li key={user.id}>
                                <Link to={`/users/${user.id}`} className="appartement-interested-link">
                                    {user.firstname} {user.lastname}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <div className="appartement-card-footer">
                <Link to={`/discussions?property=${appartement.id}`}>
                    <button className="appartement-card-button">Messages</button>
                </Link>
                <Link to={`/properties/${appartement.id}/edit`}>
                    <button className="appartement-card-button">Modifier</button>
                </Link>
            </div>
        </motion.div>
    )
}
