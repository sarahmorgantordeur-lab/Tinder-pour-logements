import { useState, useEffect } from 'react';
import TenantIcon from '../../assets/icons/Tenant.svg?react';
import LandlordIcon from '../../assets/icons/Landlord.svg?react';
import AgencyIcon from '../../assets/icons/Agency.svg?react';
import { AnimatePresence, motion } from 'framer-motion';
import Button from '../ui/Button';
import TextInput from '../ui/TextInput';
import { useAuth } from '../../hooks/useAuth';


export default function Register({ onLogin }) {
    const { register } = useAuth();
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [agencyName, setAgencyName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [role, setRole] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const user = JSON.parse(localStorage.getItem('user') || 'null');
            onLogin?.(user, token);
        }
    }, [onLogin]);

    useEffect(() => {
        if (role === 'agency') {
            setSurname('');
        }
    }, [role]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (password !== confirmPassword) {
            setError('Les mots de passe ne correspondent pas');
            return;
        }


        if (password !== confirmPassword) {
            setError('Les mots de passe ne correspondent pas');
            return;
        }

        setLoading(true);
        try {
            const result = await register(name, surname, agencyName, email, password, phone, role);
            if (!result.success) {
                setError(result.error || 'Erreur lors de l\'inscription');
                return;
            }
            const user = JSON.parse(localStorage.getItem('user') || 'null');
            const token = localStorage.getItem('token');
            onLogin?.(user, token);
        } catch {
            setError('Impossible de contacter le serveur');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="form-main-container">
            <div className="form-wrapper">
                <form onSubmit={handleSubmit} className="form-container">
                    <div className='role-container'>
                        <div className={`icon-card ${role === 'user' ? 'icon-card-selected' : ''}`} data-cy="user-role" onClick={() => setRole('user')}>
                            <TenantIcon className={`role-icon ${role === 'user' ? 'icon-selected' : ''}`} />
                            <p className={`role-text ${role === 'user' ? 'text-selected' : ''}`}>Tenant</p>
                        </div>
                        <div className={`icon-card ${role === 'owner' ? 'icon-card-selected' : ''}`} data-cy="owner-role" onClick={() => setRole('owner')}>
                            <LandlordIcon className={`role-icon ${role === 'owner' ? 'icon-selected' : ''}`} />
                            <p className={`role-text ${role === 'owner' ? 'text-selected' : ''}`}>Landlord</p>
                        </div>
                        <div className={`icon-card ${role === 'agency' ? 'icon-card-selected' : ''}`} data-cy="agency-role" onClick={() => setRole('agency')}>
                            <AgencyIcon className={`role-icon ${role === 'agency' ? 'icon-selected' : ''}`} />
                            <p className={`role-text ${role === 'agency' ? 'text-selected' : ''}`}>Agency</p>
                        </div>
                    </div>
                    <div className="name-container-rest">
                        <input
                            id="name"
                            type="text"
                            required
                            value={name}
                            aria-label='First Name'
                            onChange={(e) => setName(e.target.value)}
                            placeholder="First Name"
                        />
                        <input
                            id="surname"
                            type="text"
                            required
                            value={surname}
                            aria-label='Last Name'
                            onChange={(e) => setSurname(e.target.value)}
                            placeholder='Last Name'
                        />
                    </div>
                    <AnimatePresence initial={false}>
                        {role === 'agency' && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                style={{ overflow: 'hidden' }}
                            >
                                <div className="name-container-agency">
                                    <input
                                        id="agencyName"
                                        type="text"
                                        required
                                        value={agencyName}
                                        aria-label='Agency Name'
                                        onChange={(e) => setAgencyName(e.target.value)}
                                        placeholder="Agency Name"
                                    />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <div className="">
                        <input
                            id="phone"
                            type="tel"
                            required
                            value={phone}
                            aria-label='phone number'
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Phone Number"
                        />
                    </div>

                    <div className="">
                        <input
                            id="email"
                            type="email"
                            required
                            value={email}
                            aria-label='email'
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                        />
                    </div>

                    <div className="">
                        <input
                            id="password"
                            type="password"
                            required
                            value={password}
                            aria-label='password'
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                        />
                    </div>

                    <div className="">
                        <TextInput
                            id="confirmPassword"
                            type="password"
                            required
                            value={confirmPassword}
                            aria-label='confirm password'
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm Password"
                        />
                    </div>

                    {error && (
                        <p data-cy="error-message">{error}</p>
                    )}

                    <Button type="submit" disabled={loading}>
                        {loading ? 'Inscription…' : "S'inscrire"}
                    </Button>
                </form>
            </div>
        </div>
    );
}
