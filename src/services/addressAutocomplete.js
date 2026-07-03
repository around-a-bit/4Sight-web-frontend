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

/**
 * Fetch place details by place_id
 */
export async function getPlaceDetails(placeId) {
    try {
        const response = await fetch(`${API_BASE}/api/v1/profile/address/details?place_id=${encodeURIComponent(placeId)}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if (!response.ok) {
            throw new Error('Failed to fetch place details');
        }
        
        return await response.json();
    } catch (error) {
        console.error('Place details error:', error);
        throw error;
    }
}
