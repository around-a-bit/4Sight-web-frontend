import React from 'react';

/**
 * Global Input Component
 * Centralizes styling, validation display, disabled/read-only states, and icons.
 */
export default function Input({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  disabled = false,
  readOnly = false,
  status, // 'error' | 'success' | null
  statusMessage,
  helperText,
  icon,
  className = "",
  ...props
}) {
  const baseClasses = "w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-colors";
  
  let stateClasses = "border-gray-300 focus:ring-blue-500 focus:border-blue-500";
  if (status === "error") {
    stateClasses = "border-red-500 focus:ring-red-500 focus:border-red-500 text-red-900";
  } else if (status === "success") {
    stateClasses = "border-green-500 focus:ring-green-500 focus:border-green-500 text-green-900";
  }

  if (disabled) {
    stateClasses += " bg-gray-100 text-gray-500 cursor-not-allowed border-gray-200";
  } else if (readOnly) {
    stateClasses += " bg-gray-50 text-gray-700 cursor-default";
  }

  // Adjust padding if an icon is present
  const iconPadding = icon ? "pl-11" : "";

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-sm font-bold text-gray-700 mb-2">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
            {icon}
          </div>
        )}
        
        <input
          type={type}
          value={value}
          onChange={(e) => onChange && onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          className={`${baseClasses} ${stateClasses} ${iconPadding}`}
          {...props}
        />
      </div>

      {statusMessage && (
        <p className={`mt-1.5 text-sm font-medium ${status === "error" ? "text-red-500" : "text-green-600"}`}>
          {statusMessage}
        </p>
      )}

      {helperText && !statusMessage && (
        <p className="mt-1.5 text-sm text-gray-500">
          {helperText}
        </p>
      )}
    </div>
  );
}
