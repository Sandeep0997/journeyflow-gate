import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { X, Cookie } from 'lucide-react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show cookie consent after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleRedirect = () => {
    // Redirect to nextagmedia.com regardless of choice
    window.location.href = 'https://nextagmedia.com';
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-6 shadow-travel animate-in fade-in-0 zoom-in-95 duration-300">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            <Cookie className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold">Cookie Settings</h3>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleRedirect}
            className="h-6 w-6 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
          We use cookies to enhance your browsing experience, provide personalized 
          content, and analyze our traffic. By clicking any button below, you consent 
          to our use of cookies.
        </p>

        <div className="flex flex-col gap-3">
          <Button 
            onClick={handleRedirect}
            className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
          >
            Accept All Cookies
          </Button>
          
          <Button 
            variant="outline" 
            onClick={handleRedirect}
            className="w-full"
          >
            Decline
          </Button>
          
          <Button 
            variant="secondary" 
            onClick={handleRedirect}
            className="w-full"
          >
            Customize Settings
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CookieConsent;