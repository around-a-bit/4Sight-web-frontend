import { useState, useEffect, useRef } from 'react';
import { getPhoneParts, DEFAULT_COUNTRY_CODES } from '@/lib/formatters/phone';
import { Input } from '@/components/ui/input';

export interface PhoneNumberInputProps {
    value: string;
    onChange: (value: string) => void;
    countryCodes?: Array<{
        name: string;
        code: string;
        dialCode: string;
    }>;
    disabled?: boolean;
    hasError?: boolean;
}

export function PhoneNumberInput({
    value,
    onChange,
    countryCodes = [],
    disabled,
    hasError
}: PhoneNumberInputProps) {
    const effectiveCountryCodes = countryCodes.length > 0 ? countryCodes : DEFAULT_COUNTRY_CODES;
    const initialParts = getPhoneParts(value, effectiveCountryCodes);
    const [selectedCountry, setSelectedCountry] = useState(initialParts.country);
    const [localNumber, setLocalNumber] = useState(initialParts.nationalNumber);
    
    useEffect(() => {
        const updatedParts = getPhoneParts(value, effectiveCountryCodes);
        setSelectedCountry(updatedParts.country);
        setLocalNumber(updatedParts.nationalNumber);
    }, [value, countryCodes]); // eslint-disable-line react-hooks/exhaustive-deps
    
    const [search, setSearch] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const filteredCountries = effectiveCountryCodes.filter((country) => {
        const query = search.toLowerCase();
        return (
            country.name.toLowerCase().includes(query) ||
            country.code.toLowerCase().includes(query) ||
            country.dialCode.includes(search)
        );
    });

    const updatePhone = (country = selectedCountry, number = localNumber) => {
        onChange(`${country.dialCode}${number.replace(/\D/g, '')}`);
    };

    return (
        <div className="flex gap-2">
            <div ref={dropdownRef} className="relative w-36 flex-shrink-0">
                <button
                    type="button"
                    disabled={disabled}
                    onClick={() => setIsOpen((open) => !open)}
                    className={`w-full h-full px-3 py-3 border rounded-xl text-sm bg-white flex items-center justify-between gap-2 disabled:opacity-50 ${hasError ? 'border-red-400' : 'border-slate-200'}`}
                >
                    <span className="font-semibold text-slate-800">
                        {selectedCountry?.dialCode || '+'}
                    </span>
                    <i className="ri-arrow-down-s-line text-slate-400"></i>
                </button>
                {isOpen && (
                    <div className="absolute z-20 mt-2 w-72 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden">
                        <div className="p-2 border-b border-slate-100">
                            <Input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search country or code"
                                className="w-full"
                            />
                        </div>
                        <div className="max-h-56 overflow-y-auto">
                            {filteredCountries.map((country, index) => (
                                <button
                                    key={`${country.code}-${country.dialCode}-${index}`}
                                    type="button"
                                    onClick={() => {
                                        setSelectedCountry(country);
                                        setSearch('');
                                        setIsOpen(false);
                                        updatePhone(country);
                                    }}
                                    className="w-full px-3 py-2.5 text-sm text-left hover:bg-slate-50 flex items-center justify-between gap-3"
                                >
                                    <span className="text-slate-700">{country.name}</span>
                                    <span className="font-semibold text-slate-900">{country.dialCode}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <Input
                type="tel"
                value={localNumber}
                disabled={disabled}
                onChange={(e) => {
                    const raw = e.target.value;
                    const dialDigits = selectedCountry.dialCode.replace(/\D/g, '');
                    const rawDigits = raw.replace(/\D/g, '');
                    
                    if (raw.trim().startsWith('+') || rawDigits.startsWith(dialDigits)) {
                        // If it starts with + or the current dial code, parse the whole thing
                        const fullInput = raw.trim().startsWith('+') ? raw.trim() : `+${rawDigits}`;
                        const parts = getPhoneParts(fullInput, effectiveCountryCodes);
                        setSelectedCountry(parts.country);
                        setLocalNumber(parts.nationalNumber);
                        onChange(`${parts.country.dialCode}${parts.nationalNumber}`);
                    } else {
                        // Just regular digits, cap at 15 for safety
                        const digits = rawDigits.slice(0, 15);
                        setLocalNumber(digits);
                        updatePhone(selectedCountry, digits);
                    }
                }}
                placeholder="9876543210"
                className={`w-full ${hasError ? 'border-red-400 focus-visible:ring-red-400' : ''}`}
            />
        </div>
    );
}
