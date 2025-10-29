
export default function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '919988931093';
    const message = encodeURIComponent('Hi! I\'m interested in your services. Can we discuss my project?');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Try to open WhatsApp, fallback to direct navigation if popup is blocked
    try {
      const newWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      if (!newWindow) {
        // If popup is blocked, navigate directly
        window.location.href = whatsappUrl;
      }
    } catch (error) {
      // Fallback: direct navigation
      window.location.href = whatsappUrl;
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-pulse cursor-pointer"
        aria-label="Contact us on WhatsApp"
        type="button"
      >
        <i className="ri-whatsapp-line text-white text-2xl"></i>
      </button>
      
      {/* Ripple Effect */}
      <div className="absolute inset-0 rounded-full bg-green-500 opacity-20 animate-ping pointer-events-none"></div>
    </div>
  );
}
