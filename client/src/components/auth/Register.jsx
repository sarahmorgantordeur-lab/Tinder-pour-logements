import { useState, useEffect } from 'react';
import TenantIcon from '../../assets/icons/Tenant.svg?react';
import LandlordIcon from '../../assets/icons/Landlord.svg?react';
import AgencyIcon from '../../assets/icons/Agency.svg?react';
import Button from '../ui/Button';
import TextInput from '../ui/TextInput';
import { useAuth } from '../../hooks/useAuth';
import CreateAgency from '../create/CreateAgency';
import api from '../../api';


export default function Register({ email, setEmail, password, setPassword, step, setStep }) {
    const { register, finishAgencySetup, joinAgency } = useAuth();
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [role, setRole] = useState('user');
    const [agencies, setAgencies] = useState([]);
    const [selectedAgencyId, setSelectedAgencyId] = useState('');

    useEffect(() => {
        if (role === 'agency') setSurname('');
    }, [role]);

    useEffect(() => {
        if (step === 'agency-profile') {
            api.get('/users/agencies').then(res => setAgencies(res.data.agencies)).catch(() => {});
        }
    }, [step]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (password !== confirmPassword) {
            setError('Les mots de passe ne correspondent pas');
            return;
        }

        setLoading(true);
        try {
            const result = await register(name, surname, '', email, password, phone, role);
            if (!result.success) {
                setError(result.error || 'Erreur lors de l\'inscription');
                return;
            }
            if (role === 'agency') {
                setStep('agency-profile');
            }
        } catch {
            setError('Impossible de contacter le serveur');
        } finally {
            setLoading(false);
        }
    };

    const handleJoinAgency = async () => {
        if (!selectedAgencyId) return;
        setLoading(true);
        try {
            const result = await joinAgency(selectedAgencyId);
            if (!result.success) {
                setError(result.error || 'Erreur lors de l\'association à l\'agence');
                return;
            }
            finishAgencySetup();
        } catch {
            setError('Impossible de contacter le serveur');
        } finally {
            setLoading(false);
        }
    };

    if (step === 'agency-profile') {
        return (
            <div className="form-main-container">
                <div className="form-wrapper">
                    <div className="form-container">
                        
                            <CreateAgency onClose={finishAgencySetup} onSkip={finishAgencySetup} />
                        
                    </div>
                </div>
            </div>
        );
    }

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
                        <TextInput
                            id="name"
                            type="text"
                            required
                            value={name}
                            aria-label='First Name'
                            onChange={(e) => setName(e.target.value)}
                            placeholder="First Name"
                        />
                        <TextInput
                            id="surname"
                            type="text"
                            required
                            value={surname}
                            aria-label='Last Name'
                            onChange={(e) => setSurname(e.target.value)}
                            placeholder='Last Name'
                        />
                    </div>
                    <div className="">
                        <TextInput
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
                        <TextInput
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
                        <TextInput
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
                        {loading ? 'Inscription…' : role === 'agency' ? "Suivant →" : "S'inscrire"}
                    </Button>
                </form>
            </div>
        </div>
    );
}