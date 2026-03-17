import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import Select from '../ui/Select';
import { useHome } from '../../hooks/useHome';
import landingImg from '../../assets/images/LandingPictureBackground.jpg';

const BASE_URL = import.meta.env.VITE_API_URL?.replace('/api', '') || 'http://localhost:3000';

export default function ApartmentModal({ appartement, onClose, isOwner }) {
    const { updateStatus } = useHome();

    const photos = appartement.photos?.length
        ? appartement.photos.map(p => `${BASE_URL}${p.url}`)
        : [appartement.image || landingImg];

    const [photoIndex, setPhotoIndex] = useState(0);

    const prev = (e) => {
        e.stopPropagation();
        setPhotoIndex(i => (i - 1 + photos.length) % photos.length);
    };

    const next = (e) => {
        e.stopPropagation();
        setPhotoIndex(i => (i + 1) % photos.length);
    };

    return (
        <Modal onClose={onClose} className="modal-content--apartment">
            <button className="apartment-modal-close" onClick={onClose}>✕</button>

            <div className="apartment-modal-gallery">
                <img
                    className="apartment-modal-image"
                    src={photos[photoIndex]}
                    alt={`${appartement.title} - photo ${photoIndex + 1}`}
                />
                {photos.length > 1 && (
                    <>
                        <button className="apartment-modal-nav apartment-modal-nav--prev" onClick={prev}>‹</button>
                        <button className="apartment-modal-nav apartment-modal-nav--next" onClick={next}>›</button>
                        <div className="apartment-modal-dots">
                            {photos.map((_, i) => (
                                <span
                                    key={i}
                                    className={`apartment-modal-dot${i === photoIndex ? " apartment-modal-dot--active" : ""}`}
                                    onClick={(e) => { e.stopPropagation(); setPhotoIndex(i); }}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>

            <div className="apartment-modal-body">
                <div className="apartment-modal-header">
                    <h2 className="apartment-modal-title">{appartement.title}</h2>
                    {isOwner && (
                        <Select
                            className="apartment-modal-status"
                            value={appartement.status}
                            onChange={(e) => updateStatus(appartement.id, e.target.value)}
                            options={[
                                { value: "draft", label: "Brouillon" },
                                { value: "published", label: "Publié" },
                                { value: "rented", label: "Loué" },
                                { value: "archived", label: "Archivé" },
                            ]}
                        />
                    )}
                </div>
                <div className="apartment-modal-loc-price">
                <p className="apartment-modal-location">
                    {appartement.postal_code}, {appartement.city}
                </p>
                <p className="apartment-modal-price">{appartement.price} €/mois</p>
                </div>
                <div className="apartment-modal-details">
                    {appartement.surface && (
                        <span className="apartment-modal-detail">{appartement.surface} m²</span>
                    )}
                    {appartement.rooms && (
                        <span className="apartment-modal-detail">{appartement.rooms} pièce{appartement.rooms > 1 ? "s" : ""}</span>
                    )}
                    {appartement.property_type && (
                        <span className="apartment-modal-detail">{appartement.property_type}</span>
                    )}
                    {appartement.parking && (
                        <span className="apartment-modal-detail">Parking inclus</span>
                    )}
                </div>

                {appartement.description && (
                    <p className="apartment-modal-description">{appartement.description}</p>
                )}

                {isOwner && (
                    <div className="apartment-modal-actions">
                        <Link to={`/discussions?property=${appartement.id}`} onClick={onClose}>
                            <Button>Messages</Button>
                        </Link>
                        <Link to={`/properties/${appartement.id}/edit`} onClick={onClose}>
                            <Button>Modifier</Button>
                        </Link>
                    </div>
                )}
            </div>
        </Modal>
    );
}
