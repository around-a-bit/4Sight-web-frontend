export const DEFAULT_COUNTRY_CODES = [
    { name: 'India', code: 'IN', dialCode: '+91' },
    { name: 'United States', code: 'US', dialCode: '+1' },
    { name: 'United Kingdom', code: 'GB', dialCode: '+44' },
    { name: 'United Arab Emirates', code: 'AE', dialCode: '+971' },
    { name: 'Australia', code: 'AU', dialCode: '+61' },
    { name: 'Canada', code: 'CA', dialCode: '+1' },
    { name: 'Singapore', code: 'SG', dialCode: '+65' },
    { name: 'Germany', code: 'DE', dialCode: '+49' },
    { name: 'France', code: 'FR', dialCode: '+33' },
    { name: 'Netherlands', code: 'NL', dialCode: '+31' },
    { name: 'Japan', code: 'JP', dialCode: '+81' },
    { name: 'China', code: 'CN', dialCode: '+86' },
    { name: 'Brazil', code: 'BR', dialCode: '+55' },
    { name: 'South Africa', code: 'ZA', dialCode: '+27' },
    { name: 'Saudi Arabia', code: 'SA', dialCode: '+966' },
];

export function getPhoneParts(
    phone: string,
    countryCodesList: Array<{
        name: string;
        code: string;
        dialCode: string;
    }> = DEFAULT_COUNTRY_CODES
) {
    const cleaned = (phone || '').replace(/\s/g, '');
    const match = [...countryCodesList]
        .sort((a, b) => b.dialCode.length - a.dialCode.length)
        .find((country) => cleaned.startsWith(country.dialCode));

    const defaultCountry = countryCodesList.find(c => c.code === 'IN') || countryCodesList[0] || {
        name: '',
        code: '',
        dialCode: '+'
    };

    return {
        country: match || defaultCountry,
        nationalNumber: match ? cleaned.slice(match.dialCode.length).replace(/\D/g, '') : cleaned.replace(/\D/g, ''),
    };
}

export function maskPhone(phone: string): string {
    if (!phone) return '';
    const { country, nationalNumber } = getPhoneParts(phone, DEFAULT_COUNTRY_CODES);
    if (nationalNumber.length < 6) return phone;
    const visible = nationalNumber.slice(0, 2);
    const suffix = nationalNumber.slice(-4);
    return `${country.dialCode}${visible}${'*'.repeat(nationalNumber.length - 6)}${suffix}`;
}
