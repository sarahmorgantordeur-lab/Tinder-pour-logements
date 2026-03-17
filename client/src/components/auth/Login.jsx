import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import Button from '../ui/Button';
import TextInput from '../ui/TextInput';

export default function Login({ email, setEmail, password, setPassword }) {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        console.log('Attempting login with:', { email, password });

        try {
            const res = await login(email, password);
            if (!res.success) {
                setError(res.error);
            }
        } catch (err) {
            setError('Impossible de contacter le serveur');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="form-main-container">
            <div className="form-wrapper">

                <form onSubmit={handleSubmit} className="form-container">
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

                    {error && (
                        <p data-cy="error-message">{error}</p>
                    )}

                    <Button
                        type="submit"
                        disabled={loading}
                        className=""
                    >
                        {loading ? 'Connexion…' : 'Se connecter'}
                    </Button>
                </form>
            </div>
        </div>
    );
}
