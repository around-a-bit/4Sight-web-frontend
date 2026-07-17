import { z } from "zod";

export const taxRegexRegistry: Record<string, { label: string; placeholder: string; regex: RegExp; errorMessage: string }> = {
    IN: {
        label: 'GSTIN',
        placeholder: '27ABCDE1234F1Z5',
        regex: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9A-Z]{3}$/i,
        errorMessage: 'Invalid GSTIN format (e.g. 27ABCDE1234F1Z5)'
    },
    GB: {
        label: 'VAT Number',
        placeholder: 'GB123456789',
        regex: /^(GB|XI)?\s*([0-9]{3}\s*[0-9]{4}\s*[0-9]{2}|[0-9]{9}|[0-9]{12})$/i,
        errorMessage: 'Invalid UK VAT Number'
    },
    AU: {
        label: 'ABN',
        placeholder: '51 824 753 556',
        regex: /^(\d\s*){11}$/,
        errorMessage: 'ABN must be 11 digits'
    },
    AE: {
        label: 'TRN',
        placeholder: '100123456700003',
        regex: /^(\d\s*){15}$/,
        errorMessage: 'TRN must be 15 digits'
    },
    SG: {
        label: 'GST Registration Number',
        placeholder: 'M90362845L',
        regex: /^[A-Z0-9]{8,12}$/i,
        errorMessage: 'Invalid Singapore GST Number'
    },
    CA: {
        label: 'GST/HST Number',
        placeholder: '123456789RT0001',
        regex: /^\d{9}\s*RT\s*\d{4}$/i,
        errorMessage: 'Invalid CA GST/HST Number (e.g. 123456789RT0001)'
    },
    US: {
        label: 'EIN',
        placeholder: '12-3456789',
        regex: /^\d{2}-?\d{7}$/,
        errorMessage: 'Invalid US EIN (e.g. 12-3456789)'
    },
    DE: {
        label: 'VAT ID',
        placeholder: 'DE123456789',
        regex: /^(DE)?\s*[0-9]{9}$/i,
        errorMessage: 'Invalid German VAT ID'
    },
    FR: {
        label: 'VAT Number',
        placeholder: 'FR12345678901',
        regex: /^(FR)?\s*[A-Z0-9]{2}\s*[0-9]{9}$/i,
        errorMessage: 'Invalid French VAT Number'
    },
    BR: {
        label: 'CNPJ',
        placeholder: '12.345.678/0001-95',
        regex: /^\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}$/,
        errorMessage: 'Invalid CNPJ format'
    }
};

export const createTaxSchema = (countryCode: string) => {
    const rule = taxRegexRegistry[countryCode];
    if (!rule) {
        // Fallback for unknown country
        return z.string().min(5, "Tax number is too short").max(25, "Tax number is too long");
    }
    return z.string().trim().regex(rule.regex, rule.errorMessage);
};
