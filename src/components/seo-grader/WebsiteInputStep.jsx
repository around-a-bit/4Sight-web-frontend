/**
 * Website Input Step Component
 *
 * First step of the grader wizard - collects:
 * - Website URL
 * - Brand category
 * - Target keywords (up to 5)
 */

import { useState, useCallback } from 'react';
import { Globe, Tag, Hash, X, Info } from 'lucide-react';
import Button from '../ui/Button';

const WebsiteInputStep = ({ initialData, categories, onSubmit }) => {
    const [url, setUrl] = useState(initialData?.url || '');
    const [category, setCategory] = useState(initialData?.category || categories[0]);
    const [keywords, setKeywords] = useState(initialData?.keywords || []);
    const [keywordInput, setKeywordInput] = useState('');
    const [errors, setErrors] = useState({});

    // Validate URL
    const validateUrl = (urlString) => {
        if (!urlString) return 'Website URL is required';

        try {
            const parsed = new URL(
                urlString.startsWith('http') ? urlString : `https://${urlString}`
            );
            if (!['http:', 'https:'].includes(parsed.protocol)) {
                return 'Only HTTP and HTTPS URLs are allowed';
            }
            // Basic SSRF check (frontend-side, backend does thorough check)
            const hostname = parsed.hostname.toLowerCase();
            if (
                hostname === 'localhost' ||
                hostname === '127.0.0.1' ||
                hostname.startsWith('192.168.') ||
                hostname.startsWith('10.') ||
                hostname.startsWith('172.')
            ) {
                return 'Private/localhost URLs are not allowed';
            }
            return null;
        } catch {
            return 'Please enter a valid URL';
        }
    };

    // Add keyword
    const handleAddKeyword = useCallback(() => {
        const trimmed = keywordInput.trim().slice(0, 80);
        if (!trimmed) return;

        if (keywords.length >= 5) {
            setErrors((prev) => ({ ...prev, keywords: 'Maximum 5 keywords allowed' }));
            return;
        }

        if (keywords.some((kw) => kw.toLowerCase() === trimmed.toLowerCase())) {
            setErrors((prev) => ({ ...prev, keywords: 'Keyword already added' }));
            return;
        }

        setKeywords((prev) => [...prev, trimmed]);
        setKeywordInput('');
        setErrors((prev) => ({ ...prev, keywords: null }));
    }, [keywordInput, keywords]);

    // Handle keyword input keypress
    const handleKeywordKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleAddKeyword();
        }
    };

    // Remove keyword
    const handleRemoveKeyword = (index) => {
        setKeywords((prev) => prev.filter((_, i) => i !== index));
        setErrors((prev) => ({ ...prev, keywords: null }));
    };

    // Handle submit
    const handleSubmit = (e) => {
        e.preventDefault();

        const urlError = validateUrl(url);
        if (urlError) {
            setErrors({ url: urlError });
            return;
        }

        // Normalize URL
        let normalizedUrl = url.trim();
        if (!normalizedUrl.startsWith('http')) {
            normalizedUrl = `https://${normalizedUrl}`;
        }

        onSubmit({
            url: normalizedUrl,
            category,
            keywords,
        });
    };

    return (
        <div className="seo-grader-card">
            <h2 className="seo-grader-card-title">Enter Your Website Details</h2>
            <p className="seo-grader-card-description">
                Provide your website URL and target keywords to get started with the assessment.
            </p>

            <form onSubmit={handleSubmit}>
                {/* Website URL */}
                <div className="seo-grader-form-group">
                    <label className="seo-grader-label" htmlFor="website-url">
                        <Globe size={16} />
                        Website URL
                    </label>
                    <input
                        id="website-url"
                        type="text"
                        className="seo-grader-input"
                        placeholder="https://example.com"
                        value={url}
                        onChange={(e) => {
                            setUrl(e.target.value);
                            setErrors((prev) => ({ ...prev, url: null }));
                        }}
                        aria-invalid={!!errors.url}
                        aria-describedby={errors.url ? 'url-error' : undefined}
                    />
                    {errors.url && (
                        <p id="url-error" className="form-error" role="alert">
                            {errors.url}
                        </p>
                    )}
                </div>

                {/* Brand Category */}
                <div className="seo-grader-form-group">
                    <label className="seo-grader-label" htmlFor="brand-category">
                        <Tag size={16} />
                        Brand Category
                    </label>
                    <select
                        id="brand-category"
                        className="seo-grader-select"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        {categories.map((cat) => (
                            <option key={cat} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Target Keywords */}
                <div className="seo-grader-form-group">
                    <label className="seo-grader-label" htmlFor="keywords-input">
                        <Hash size={16} />
                        Target Keywords (Optional, up to 5)
                    </label>

                    {keywords.length > 0 && (
                        <div className="keywords-container">
                            {keywords.map((kw, index) => (
                                <span key={index} className="keyword-tag">
                                    {kw}
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveKeyword(index)}
                                        aria-label={`Remove keyword: ${kw}`}
                                    >
                                        <X size={14} />
                                    </button>
                                </span>
                            ))}
                        </div>
                    )}

                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <input
                            id="keywords-input"
                            type="text"
                            className="seo-grader-input"
                            placeholder="Enter a keyword and press Enter"
                            value={keywordInput}
                            onChange={(e) => setKeywordInput(e.target.value)}
                            onKeyDown={handleKeywordKeyPress}
                            disabled={keywords.length >= 5}
                            maxLength={80}
                        />
                        <Button
                            type="button"
                            variant="secondary"
                            onClick={handleAddKeyword}
                            disabled={keywords.length >= 5 || !keywordInput.trim()}
                        >
                            Add
                        </Button>
                    </div>

                    {errors.keywords && (
                        <p className="form-error" role="alert">
                            {errors.keywords}
                        </p>
                    )}
                    <p className="keyword-hint">
                        <Info size={12} style={{ display: 'inline', marginRight: '4px' }} />
                        Keywords help us check your SERP visibility. You can add up to 5.
                    </p>
                </div>

                {/* Submit Button */}
                <div className="grader-nav-buttons">
                    <div /> {/* Spacer */}
                    <Button type="submit" size="lg">
                        Continue to Questionnaire
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default WebsiteInputStep;
