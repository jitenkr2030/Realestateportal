// utils/validation.js
export const validateLeaseData = (data) => {
    const errors = {};
    
    if (!data.startDate) errors.startDate = 'Start date is required';
    if (!data.endDate) errors.endDate = 'End date is required';
    if (!data.monthlyRent) errors.monthlyRent = 'Monthly rent is required';
    if (!data.securityDeposit) errors.securityDeposit = 'Security deposit is required';
    
    return {
      isValid: Object.keys(errors).length === 0,
      errors,
    };
  };