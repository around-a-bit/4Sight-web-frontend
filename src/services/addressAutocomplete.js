const API_BASE = import.meta.env.VITE_API_BASE_URL || "";

/**
 * Secure address autocomplete via backend wrapper API
 */
export async function getAddressAutocomplete(input) {
    try {
        const response = await fetch(`${API_BASE}/api/v1/profile/address/autocomplete?input_query=${encodeURIComponent(input)}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if (!response.ok) {
            throw new Error('Failed to fetch autocomplete suggestions');
        }
        
        return await response.json();
    } catch (error) {
        console.error('Address autocomplete error:', error);
        throw error;
    }
}
