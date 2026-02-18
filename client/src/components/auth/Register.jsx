import { useState, useEffect } from 'react';

export default function Register({ onLogin }) {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const user = JSON.parse(localStorage.getItem('user') || 'null');
            onLogin?.(user, token);
        }
    }, [onLogin]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const res = await fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, surname, email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.message || 'Erreur de connexion');
                return;
            }

            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            onLogin?.(data.user, data.token);
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
                    <div className="name-container">
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
                                placeholder="Last Name"
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
                            className="rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900"
                            placeholder="••••••••"
                        />
                    </div>

                    <div className="">
                        <input
                            id="confirmPassword"
                            type="password"
                            required
                            value={confirmPassword}
                            aria-label='confirm password'
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="••••••••"
                        />
                    </div>

                    {error && (
                        <p className="text-sm text-red-600">{error}</p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        >
                        {loading ? 'Inscription…' : 'S\'inscrire'}
                    </button>
                </form>
            </div>
        </div>
    );
}
