import React, { useState, useRef, useEffect, KeyboardEvent, ClipboardEvent } from 'react';
import { cn } from '@cm/lib/utils';
import { Button } from '@/components/ui/button';

interface OtpModalProps {
    isOpen: boolean;
    onClose: () => void;
    onVerify: (otp: string) => Promise<void>;
    resendOtp?: () => Promise<void>;
    title?: string;
    description?: string;
    length?: number;
    isLoading?: boolean;
}

export function OtpModal({
    isOpen,
    onClose,
    onVerify,
    resendOtp,
    title = 'Enter Verification Code',
    description,
    length = 6,
    isLoading = false
}: OtpModalProps) {
    const [otp, setOtp] = useState<string[]>(Array(length).fill(''));
    const [isVerifying, setIsVerifying] = useState(false);
    const [error, setError] = useState('');
    const [timeLeft, setTimeLeft] = useState(0);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const startTimer = () => {
        const duration = 300; // 5 minutes
        setTimeLeft(duration);
        sessionStorage.setItem('otpExpiryTime', (Date.now() + duration * 1000).toString());
    };

    useEffect(() => {
        if (isOpen) {
            setOtp(Array(length).fill(''));
            setError('');
            setTimeout(() => {
                inputRefs.current[0]?.focus();
            }, 100);

            const storedExpiry = sessionStorage.getItem('otpExpiryTime');
            if (storedExpiry) {
                const expiryTime = parseInt(storedExpiry, 10);
                const now = Date.now();
                if (expiryTime > now) {
                    setTimeLeft(Math.floor((expiryTime - now) / 1000));
                } else {
                    startTimer();
                }
            } else {
                startTimer();
            }
        } else {
            setTimeLeft(0);
        }
    }, [isOpen, length]);

    useEffect(() => {
        if (timeLeft <= 0) return;
        const timerId = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(timerId);
    }, [timeLeft]);

    if (!isOpen) return null;

    const combinedLoading = isLoading || isVerifying;

    const triggerVerify = async (fullOtp: string) => {
        setIsVerifying(true);
        setError('');
        try {
            await onVerify(fullOtp);
        } catch (err: any) {
            setError(err?.message || 'Verification failed. Please try again.');
        } finally {
            setIsVerifying(false);
        }
    };

    const handleChange = (index: number, val: string) => {
        if (combinedLoading) return;
        const digit = val.replace(/\D/g, '');
        if (!digit && val !== '') return;

        const newOtp = [...otp];
        newOtp[index] = digit;
        setOtp(newOtp);
        setError('');

        const fullOtp = newOtp.join('');

        if (digit && index < length - 1) {
            inputRefs.current[index + 1]?.focus();
        }

        if (fullOtp.length === length) {
            triggerVerify(fullOtp);
        }
    };

    const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
        if (combinedLoading) return;

        if (e.key === 'Backspace') {
            e.preventDefault();
            const newOtp = [...otp];
            if (otp[index] !== '') {
                newOtp[index] = '';
                setOtp(newOtp);
                setError('');
            } else if (index > 0) {
                newOtp[index - 1] = '';
                setOtp(newOtp);
                setError('');
                inputRefs.current[index - 1]?.focus();
            }
        } else if (e.key === 'ArrowLeft' && index > 0) {
            e.preventDefault();
            inputRefs.current[index - 1]?.focus();
        } else if (e.key === 'ArrowRight' && index < length - 1) {
            e.preventDefault();
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (combinedLoading) return;
        const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, length);
        if (pastedData) {
            const newOtp = [...otp];
            for (let i = 0; i < pastedData.length; i++) {
                newOtp[i] = pastedData[i];
            }
            setOtp(newOtp);
            
            const nextFocus = Math.min(pastedData.length, length - 1);
            inputRefs.current[nextFocus]?.focus();
            
            if (pastedData.length === length) {
                triggerVerify(pastedData);
            }
        }
    };

    const handleResend = async () => {
        if (resendOtp && !combinedLoading && timeLeft === 0) {
            setError('');
            try {
                await resendOtp();
                startTimer();
            } catch (err: any) {
                setError(err?.message || 'Failed to resend code.');
            }
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl w-full max-w-md p-8 shadow-2xl relative animate-in zoom-in-95 duration-200">
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <h3 className="text-2xl font-bold text-slate-900 mb-2">{title}</h3>
                {description && (
                    <p className="text-slate-500 mb-8 leading-relaxed">
                        {description}
                    </p>
                )}

                {error && (
                    <div className="flex items-center justify-center gap-2 mb-6 bg-red-50 p-3 rounded-lg text-red-600">
                        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-sm font-medium">
                            {error}
                        </p>
                    </div>
                )}

                <div className="flex justify-center gap-3 mb-8">
                    {otp.map((digit, i) => (
                        <input
                            key={i}
                            ref={el => inputRefs.current[i] = el}
                            type="text"
                            inputMode="numeric"
                            pattern="\d*"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleChange(i, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(i, e)}
                            onPaste={handlePaste}
                            disabled={combinedLoading}
                            className={cn(
                                "w-12 h-14 md:w-14 md:h-16 text-center text-2xl font-bold rounded-2xl border-2 transition-all focus:outline-none focus:ring-4 focus:ring-[#0859B8]/10",
                                digit ? "border-[#0859B8] text-[#0859B8] bg-[#0859B8]/5" : "border-slate-200 text-slate-900 focus:border-[#0859B8]",
                                error ? "border-red-400 focus:border-red-400 focus:ring-red-400/10 text-red-600" : ""
                            )}
                        />
                    ))}
                </div>

                <div className="flex flex-col items-center gap-4">
                    <Button 
                        onClick={() => triggerVerify(otp.join(''))}
                        disabled={otp.join('').length < length || combinedLoading}
                        className="w-full h-12 text-base font-medium rounded-xl bg-[#0859B8] hover:bg-[#06428a]"
                    >
                        {combinedLoading ? "Verifying..." : "Verify Code"}
                    </Button>

                    {resendOtp && (
                        <p className="text-sm text-slate-500 font-medium mt-2 flex items-center justify-center gap-1">
                            Didn't receive code?{' '}
                            <button
                                onClick={handleResend}
                                disabled={combinedLoading || timeLeft > 0}
                                className={cn(
                                    "font-semibold transition-colors",
                                    (combinedLoading || timeLeft > 0)
                                        ? "text-slate-400 cursor-not-allowed"
                                        : "text-[#0859B8] hover:text-[#06428a] hover:underline cursor-pointer"
                                )}
                            >
                                Resend
                            </button>
                            {timeLeft > 0 && (
                                <span className="ml-1 text-slate-500 font-mono">
                                    ({Math.floor(timeLeft / 60).toString().padStart(2, '0')}:{(timeLeft % 60).toString().padStart(2, '0')})
                                </span>
                            )}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
