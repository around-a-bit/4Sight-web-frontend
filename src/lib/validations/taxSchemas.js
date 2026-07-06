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
