export interface LeadData {
  name: string;
  email: string;
  phone: string;
  trigger?: string;
  timestamp?: string;
}

export const handleLeadSubmission = async (data: LeadData): Promise<boolean> => {
  try {
    // Add timestamp
    const leadData = {
      ...data,
      timestamp: new Date().toISOString()
    };
    
    // In a real application, this would be sent to your backend/CRM
    console.log('Lead captured:', leadData);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Store in localStorage as a fallback (in real app, send to your CRM)
    const existingLeads = JSON.parse(localStorage.getItem('ashiana_leads') || '[]');
    existingLeads.push(leadData);
    localStorage.setItem('ashiana_leads', JSON.stringify(existingLeads));
    
    return true;
  } catch (error) {
    console.error('Error submitting lead:', error);
    return false;
  }
};

export const showSuccessMessage = () => {
  // You can customize this success handling
  alert('Thank you for your interest! We will contact you shortly with exclusive details.');
};

export const showErrorMessage = () => {
  alert('Something went wrong. Please try again or contact us directly.');
};