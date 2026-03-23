import { Meta, StoryObj } from '@storybook/react-vite';
import { Cookies, resetCookieBanner, isCookieBannerDismissed } from '../../../react-components/src/components/cookies/cookies';

const config: Meta<typeof Cookies> = {
  title: 'React Components/Cookies',
  component: Cookies,
  parameters: {
    'layout': 'fullscreen',
    'docs': {
      toc: true,
    },
    'in-development': true,
  },
  tags: ['autodocs'],
  argTypes: {
    bannerText: {
      control: 'text',
      description: 'Custom text for the cookie banner',
    },
    buttonText: {
      control: 'text',
      description: 'Custom text for the "Learn More" button',
    },
    showDismiss: {
      control: 'boolean',
      description: 'Whether to show the dismiss button',
    },
    persist: {
      control: 'boolean',
      description: 'Whether to persist dismissal state in localStorage',
    },
    storageKey: {
      control: 'text',
      description: 'Custom localStorage key for persistence',
    },
    expireDays: {
      control: 'number',
      description: 'Number of days before showing banner again',
    },
    forceShow: {
      control: 'boolean',
      description: 'Force show banner even if previously dismissed',
    },
    onDismiss: {
      action: 'dismissed',
      description: 'Callback when the banner is dismissed',
    },
  },
};

export default config;

type Story = StoryObj<typeof Cookies>;

export const Default: Story = {
  render: ({ ...args }) => {
    return (
      <div className="min-h-screen bg-grey-light relative">
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">Sample Page Content</h1>
          <p className="text-lg mb-4">
            This is a sample page to demonstrate the cookies banner. The banner appears at the bottom of the page 
            and will remember if you've dismissed it (thanks to localStorage persistence).
          </p>
          <div className="bg-white p-4 rounded border">
            <p className="text-sm text-grey-dark">
              💡 <strong>Try this:</strong> Dismiss the banner, then refresh the page - it won't appear again!
              Use the "Force Show" control to reset it for testing.
            </p>
          </div>
        </div>
        <Cookies {...args} />
      </div>
    );
  },
  args: {
    forceShow: true, // For demo purposes
  },
};

export const WithCustomContent: Story = {
  render: ({ ...args }) => {
    const customPolicyContent = (
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-grey-dark mb-4">Custom Cookie Policy</h2>
        <div className="text-grey prose prose-lg">
          <p>This is a custom cookie policy with your own content.</p>
          <p>You can include any React content here, including:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Custom styling</li>
            <li>Links to other pages</li>
            <li>Interactive elements</li>
          </ul>
        </div>
      </div>
    );

    return (
      <div className="min-h-screen bg-grey-light relative">
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">Custom Policy Content</h1>
          <p className="text-lg">
            This example shows how to use custom policy content in the modal.
          </p>
        </div>
        <Cookies 
          {...args}
          policyContent={customPolicyContent}
          bannerText="We use cookies for better user experience. Click to see our custom policy."
          storageKey="custom-cookie-banner" // Different storage key so it doesn't interfere with other examples
          forceShow={true} // For demo purposes
        />
      </div>
    );
  },
};

export const WithoutDismissButton: Story = {
  render: ({ ...args }) => {
    return (
      <div className="min-h-screen bg-grey-light relative">
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">No Dismiss Button</h1>
          <p className="text-lg">
            This example shows the cookies banner without the dismiss button.
          </p>
        </div>
        <Cookies 
          {...args}
          showDismiss={false}
          bannerText="This cookie banner doesn't have a dismiss button - users must view the policy."
          storageKey="no-dismiss-cookie-banner" // Different storage key
          forceShow={true} // For demo purposes
        />
      </div>
    );
  },
};

export const WithShortExpiration: Story = {
  render: ({ ...args }) => {
    return (
      <div className="min-h-screen bg-grey-light relative">
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">Short Expiration Demo</h1>
          <p className="text-lg mb-4">
            This banner is set to expire after just 1 day instead of the default 365 days.
          </p>
          <div className="bg-white p-4 rounded border">
            <p className="text-sm text-grey-dark">
              💡 In a real app, you might use shorter expirations for testing or longer ones for production.
              You can also check localStorage to see the stored data.
            </p>
          </div>
        </div>
        <Cookies 
          {...args}
          bannerText="This banner expires in 1 day - perfect for testing!"
          storageKey="short-expiration-banner"
          expireDays={1}
          forceShow={true} // For demo purposes
        />
      </div>
    );
  },
};

export const NoPersistence: Story = {
  render: ({ ...args }) => {
    return (
      <div className="min-h-screen bg-grey-light relative">
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">No Persistence</h1>
          <p className="text-lg mb-4">
            This banner doesn't use localStorage - it will reappear on every page refresh.
          </p>
          <div className="bg-white p-4 rounded border">
            <p className="text-sm text-grey-dark">
              💡 Useful when you want to handle persistence yourself or always show the banner.
            </p>
          </div>
        </div>
        <Cookies 
          {...args}
          bannerText="This banner will show on every page load!"
          persist={false}
        />
      </div>
    );
  },
};

export const UtilityFunctions: Story = {
  render: ({ ...args }) => {
    const storageKey = 'demo-utility-functions';

    const handleReset = () => {
      resetCookieBanner(storageKey);
      // Force a re-render by updating the URL hash
      window.location.hash = Math.random().toString();
      setTimeout(() => window.location.reload(), 100);
    };

    const handleCheckStatus = () => {
      const isDismissed = isCookieBannerDismissed(storageKey);
      alert(`Cookie banner dismissed: ${isDismissed}`);
    };

    return (
      <div className="min-h-screen bg-grey-light relative">
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">Utility Functions Demo</h1>
          <p className="text-lg mb-4">
            This example demonstrates the utility functions for managing cookie banner state.
          </p>
          <div className="bg-white p-4 rounded border mb-4">
            <h3 className="font-semibold mb-2">Available Actions:</h3>
            <div className="space-x-2">
              <button
                onClick={handleReset}
                className="px-3 py-1 bg-blue text-white text-sm rounded hover:bg-blue-dark"
              >
                Reset Banner (resetCookieBanner)
              </button>
              <button
                onClick={handleCheckStatus}
                className="px-3 py-1 bg-green text-white text-sm rounded hover:bg-green-dark"
              >
                Check Status (isCookieBannerDismissed)
              </button>
            </div>
            <p className="text-sm text-grey-dark mt-2">
              💡 Try dismissing the banner, then use "Check Status" to see if it's dismissed, 
              or "Reset Banner" to make it appear again.
            </p>
          </div>
        </div>
        <Cookies 
          {...args}
          bannerText="Dismiss me and try the utility functions above!"
          storageKey={storageKey}
        />
      </div>
    );
  },
};