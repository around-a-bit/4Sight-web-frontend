export const taxRegexRegistry = {
    IN: {
        label: 'GSTIN',
        placeholder: '27ABCDE1234F1Z5',
        regex: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9A-Z]{3}$/i,
        errorMessage: 'Invalid GSTIN format (e.g. 27ABCDE1234F1Z5)',
        minLength: 15,
        maxLength: 15
    },
    GB: {
        label: 'VAT Number',
        placeholder: 'GB123456789',
        regex: /^(GB|XI)?\s*([0-9]{3}\s*[0-9]{4}\s*[0-9]{2}|[0-9]{9}|[0-9]{12})$/i,
        errorMessage: 'Invalid UK VAT Number',
        minLength: 9,
        maxLength: 14 // including spaces/GB prefix
    },
    AU: {
        label: 'ABN',
        placeholder: '51 824 753 556',
        regex: /^(\d\s*){11}$/,
        errorMessage: 'ABN must be 11 digits',
        minLength: 11,
        maxLength: 14 // allowing spaces
    },
    AE: {
        label: 'TRN',
        placeholder: '100123456700003',
        regex: /^(\d\s*){15}$/,
        errorMessage: 'TRN must be 15 digits',
        minLength: 15,
        maxLength: 18 // allowing spaces
    },
    SG: {
        label: 'GST Registration Number',
        placeholder: 'M90362845L',
        regex: /^[A-Z0-9]{8,12}$/i,
        errorMessage: 'Invalid Singapore GST Number',
        minLength: 8,
        maxLength: 12
    },
    CA: {
        label: 'GST/HST Number',
        placeholder: '123456789RT0001',
        regex: /^\d{9}\s*RT\s*\d{4}$/i,
        errorMessage: 'Invalid CA GST/HST Number (e.g. 123456789RT0001)',
        minLength: 15,
        maxLength: 17 // allowing spaces
    },
    US: {
        label: 'EIN',
        placeholder: '12-3456789',
        regex: /^\d{2}-?\d{7}$/,
        errorMessage: 'Invalid US EIN (e.g. 12-3456789)',
        minLength: 9,
        maxLength: 10
    },
    DE: {
        label: 'VAT ID',
        placeholder: 'DE123456789',
        regex: /^(DE)?\s*[0-9]{9}$/i,
        errorMessage: 'Invalid German VAT ID',
        minLength: 9,
        maxLength: 11
    },
    FR: {
        label: 'VAT Number',
        placeholder: 'FR12345678901',
        regex: /^(FR)?\s*[A-Z0-9]{2}\s*[0-9]{9}$/i,
        errorMessage: 'Invalid French VAT Number',
        minLength: 11,
        maxLength: 13
    },
    BR: {
        label: 'CNPJ',
        placeholder: '12.345.678/0001-95',
        regex: /^\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}$/,
        errorMessage: 'Invalid CNPJ format',
        minLength: 14,
        maxLength: 18
    }
};
import { z } from "zod";

export const createTaxSchema = (countryCode) => {
    const rule = taxRegexRegistry[countryCode];
    if (!rule) {
        // Fallback for unknown country
        return z.string().min(5, "Tax number is too short").max(25, "Tax number is too long");
    }
    return z.string().trim().regex(rule.regex, rule.errorMessage);
};

export const postalCodeRegistry = {
    IN: {
        regex: /^\d{6}$/,
        errorMessage: 'Postal code must be exactly 6 digits (e.g. 400001)',
        placeholder: '400001'
    },
    US: {
        regex: /^\d{5}(-\d{4})?$/,
        errorMessage: 'ZIP code must be 5 digits or 5+4 format (e.g. 90210 or 90210-1234)',
        placeholder: '90210'
    },
    GB: {
        regex: /^[A-Z]{1,2}[0-9][0-9A-Z]?\s*[0-9][A-Z]{2}$/i,
        errorMessage: 'Invalid UK postcode format (e.g. EC1A 1BB)',
        placeholder: 'EC1A 1BB'
    },
    CA: {
        regex: /^[A-Z]\d[A-Z]\s*\d[A-Z]\d$/i,
        errorMessage: 'Invalid Canadian postal code format (e.g. K1A 0B1)',
        placeholder: 'K1A 0B1'
    },
    AU: {
        regex: /^\d{4}$/,
        errorMessage: 'Postal code must be exactly 4 digits (e.g. 2000)',
        placeholder: '2000'
    },
    DE: {
        regex: /^\d{5}$/,
        errorMessage: 'Postal code must be exactly 5 digits (e.g. 10115)',
        placeholder: '10115'
    },
    FR: {
        regex: /^\d{5}$/,
        errorMessage: 'Postal code must be exactly 5 digits (e.g. 75001)',
        placeholder: '75001'
    },
    BR: {
        regex: /^\d{5}-?\d{3}$/,
        errorMessage: 'Postal code must be 8 digits (e.g. 01000-000)',
        placeholder: '01000-000'
    },
    SG: {
        regex: /^\d{6}$/,
        errorMessage: 'Postal code must be exactly 6 digits (e.g. 189064)',
        placeholder: '189064'
    }
};
