'use client';

import { useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';
import { Modal } from '../modal/modal';

export type CookiesProps = {
  /** Additional classes to apply to the cookies banner */
  className?: string;
  /** Custom text for the cookie banner */
  bannerText?: string;
  /** Custom text for the "Learn More" button */
  buttonText?: string;
  /** Custom cookie policy content to display in the modal */
  policyContent?: React.ReactNode;
  /** Callback when the banner is dismissed */
  onDismiss?: () => void;
  /** Whether to show the dismiss button */
  showDismiss?: boolean;
  /** Whether to persist dismissal state in localStorage (default: true) */
  persist?: boolean;
  /** Custom localStorage key for persistence (default: 'uofg-cookies-dismissed') */
  storageKey?: string;
  /** Number of days before showing banner again (default: 365) */
  expireDays?: number;
  /** Force show banner even if previously dismissed (for testing/reset) */
  forceShow?: boolean;
};

/** The Cookies component displays a cookie consent banner with a button that opens a modal containing cookie policy details. */
export function Cookies({ 
  className,
  bannerText = "This website uses cookies to enhance your experience and analyze site usage.",
  buttonText = "Learn More",
  policyContent,
  onDismiss,
  showDismiss = true,
  persist = true,
  storageKey = 'uofg-cookies-dismissed',
  expireDays = 365,
  forceShow = false
}: CookiesProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Check if banner should be shown based on localStorage
  useEffect(() => {
    if (forceShow) {
      setIsVisible(true);
      return;
    }

    if (!persist) {
      setIsVisible(true);
      return;
    }

    try {
      const dismissedData = localStorage.getItem(storageKey);
      if (dismissedData) {
        const { timestamp } = JSON.parse(dismissedData);
        const now = new Date().getTime();
        const expirationTime = timestamp + (expireDays * 24 * 60 * 60 * 1000); // days to milliseconds
        
        if (now < expirationTime) {
          setIsVisible(false);
          return;
        } else {
          // Expired, remove from storage
          localStorage.removeItem(storageKey);
        }
      }
      
      setIsVisible(true);
    } catch (error) {
      // If localStorage is not available or corrupted, show banner
      setIsVisible(true);
    }
  }, [persist, storageKey, expireDays, forceShow]);

  const cookies = tv({
    slots: {
      banner: 'fixed bottom-0 left-0 right-0 z-40 bg-grey-dark p-4 text-white shadow-lg border-t-4 border-red',
      content: 'max-w-7xl mx-auto flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between',
      text: 'text-sm leading-relaxed',
      buttonGroup: 'flex gap-2 flex-col sm:flex-row',
      button: 'px-4 py-2 bg-red text-white text-sm font-medium rounded hover:bg-red-dark transition-colors',
      dismissButton: 'px-4 py-2 bg-transparent border border-white text-white text-sm font-medium rounded hover:bg-white/10 transition-colors',
      modalContent: 'bg-white p-6 rounded-lg shadow-xl max-w-2xl mx-auto',
      modalHeader: 'text-2xl font-bold text-grey-dark mb-4',
      modalBody: 'text-grey prose prose-lg'
    }
  });

  const { banner, content, text, buttonGroup, button, dismissButton, modalContent, modalHeader, modalBody } = cookies();

  const defaultPolicyContent = (
    <div className={modalContent()}>
      <h2 className={modalHeader()}>Cookie Policy</h2>
      <div className={modalBody()}>
        <p>
          We use cookies to improve your experience on our website. Cookies are small text files that are stored on your device when you visit our website.
        </p>
        <h3 className="text-lg font-semibold mt-4 mb-2">Types of cookies we use:</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li><strong>Essential cookies:</strong> These are necessary for the website to function properly.</li>
          <li><strong>Analytics cookies:</strong> These help us understand how visitors interact with our website.</li>
          <li><strong>Marketing cookies:</strong> These are used to deliver relevant advertisements.</li>
        </ul>
        <p className="mt-4">
          You can manage your cookie preferences through your browser settings. However, disabling certain cookies may affect the functionality of the website.
        </p>
        <p className="mt-4">
          For more information about how we use cookies, please refer to our Privacy Policy.
        </p>
      </div>
    </div>
  );

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDismiss = () => {
    setIsVisible(false);
    
    // Persist dismissal state if enabled
    if (persist) {
      try {
        const dismissalData = {
          timestamp: new Date().getTime(),
          version: '1.0' // For future migrations if needed
        };
        localStorage.setItem(storageKey, JSON.stringify(dismissalData));
      } catch (error) {
        // localStorage might not be available, but continue anyway
        console.warn('Could not save cookie banner dismissal state:', error);
      }
    }

    if (onDismiss) {
      onDismiss();
    }
  };

  // Don't render if not visible
  if (!isVisible) {
    return null;
  }

  return (
    <>
      <div className={twMerge(`uofg-cookies ${banner()}`, className)}>
        <div className={content()}>
          <p className={text()}>{bannerText}</p>
          <div className={buttonGroup()}>
            <button 
              onClick={handleOpenModal}
              className={button()}
              aria-label="Learn more about our cookie policy"
            >
              {buttonText}
            </button>
            {showDismiss && (
              <button 
                onClick={handleDismiss}
                className={dismissButton()}
                aria-label="Dismiss cookie banner"
              >
                Dismiss
              </button>
            )}
          </div>
        </div>
      </div>

      <Modal 
        open={isModalOpen} 
        onClose={handleCloseModal}
        role="dialog"
        labelledBy="cookie-policy-title"
        centered
      >
        {policyContent || defaultPolicyContent}
      </Modal>
    </>
  );
}

/**
 * Utility function to reset the cookie banner dismissal state
 * @param storageKey - The localStorage key to clear (default: 'uofg-cookies-dismissed')
 */
export function resetCookieBanner(storageKey: string = 'uofg-cookies-dismissed'): void {
  try {
    localStorage.removeItem(storageKey);
  } catch (error) {
    console.warn('Could not reset cookie banner state:', error);
  }
}

/**
 * Utility function to check if the cookie banner was dismissed
 * @param storageKey - The localStorage key to check (default: 'uofg-cookies-dismissed')
 * @param expireDays - Number of days to consider valid (default: 365)
 * @returns boolean indicating if banner was dismissed and is still valid
 */
export function isCookieBannerDismissed(
  storageKey: string = 'uofg-cookies-dismissed',
  expireDays: number = 365
): boolean {
  try {
    const dismissedData = localStorage.getItem(storageKey);
    if (!dismissedData) return false;

    const { timestamp } = JSON.parse(dismissedData);
    const now = new Date().getTime();
    const expirationTime = timestamp + (expireDays * 24 * 60 * 60 * 1000);
    
    return now < expirationTime;
  } catch (error) {
    return false;
  }
}

Cookies.displayName = 'Cookies';