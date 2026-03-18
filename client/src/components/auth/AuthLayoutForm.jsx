import { useState } from "react";
import SwitchAuth from "./SwitchAuth";
import Login from "./Login";
import Register from "./Register";
import { AnimatePresence, motion } from "framer-motion";

const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};

export default function AuthLayoutForm({ isLogin, isRegister, setIsLogin, setIsRegister, step, setStep }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="auth-layout-form">
            {step === 'form' && (
                <SwitchAuth isLogin={isLogin} isRegister={isRegister} setIsLogin={setIsLogin} setIsRegister={setIsRegister} />
            )}
            <AnimatePresence mode="wait">
                <motion.div
                    key={isLogin ? "login" : "register"}
                    variants={fadeVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.2 }}
                    style={{ width: "100%" }}
                >
                    {isLogin
                        ? <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
                        : <Register email={email} setEmail={setEmail} password={password} setPassword={setPassword} step={step} setStep={setStep} />
                    }
                </motion.div>
            </AnimatePresence>
        </div>
    );
}