import landingImg from '../../assets/images/LandingPictureBackground.jpg';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Select from '../ui/Select';
import Button from '../ui/Button';
import { useHome } from '../../hooks/useHome';

export default function AppartementOwnerCard({ appartement }) {
  const imageSrc = appartement.image || landingImg;

const {updateStatus} = useHome();


    return (
        <motion.div className="appartement-owner-card">
            <div className="appartement-owner-card-header">
                <img className="appartement-owner-card-image" src={imageSrc} alt={appartement.title} />
                <div className="appartement-owner-card-header-content">
                    <h3>{appartement.title}</h3>
                    <Select
                        className="appartement-owner-status"
                        value={appartement.status}
                        onChange={(e) => updateStatus(appartement.id, e.target.value)}
                        options={[
                            { value: "draft", label: "Brouillon" },
                            { value: "published", label: "Publié" },
                            { value: "rented", label: "Loué" },
                            { value: "archived", label: "Archivé" },
                        ]}
                    />
                </div>
            </div>
            <div className="appartement-owner-card-body">
                <p className="appartement-owner-city">{appartement.postal_code}, {appartement.city}</p>
                <p className="appartement-owner-price">{appartement.price} €</p>
            </div>
            <div className="appartement-owner-card-footer">
                <Link className='crud-link' to={`/discussions?property=${appartement.id}`}>
                    <Button className="appartement-owner-card-button">Messages</Button>
                </Link>
                <Link className='crud-link' to={`/properties/${appartement.id}/edit`}>
                    <Button className="appartement-owner-card-button">Modifier</Button>
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
