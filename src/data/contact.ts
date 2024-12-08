export const contactConfig = {
  calendly: {
    url: process.env.PUBLIC_CALENDLY_URL || 'https://calendly.com/edcrotty',
    text: 'Schedule a Meeting',
    description: 'Book a time to discuss opportunities'
  },
  quickChat: {
    text: 'Quick Chat',
    description: 'Send a direct message',
    placeholder: 'Type your message here...',
    submitText: 'Send Message',
    successMessage: 'Message sent! I\'ll get back to you soon.',
    errorMessage: 'Oops! Something went wrong. Please try again.'
  }
};
