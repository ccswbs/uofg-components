import { useOf } from '@storybook/addon-docs/blocks';
import { PropsWithChildren } from 'react';

export const BannerComponent = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="fixed top-0 left-0 z-100 mb-4 w-screen bg-red p-4 text-center font-bold text-red-contrast">
        {children}
      </div>
      <div className="h-8 w-full"></div>
    </>
  );
};

export const Banner = ({ of }: { of?: any }) => {
  const resolvedOf = useOf(of ?? 'meta', ['meta']);

  if ('banner' in resolvedOf.preparedMeta.parameters) {
    return <BannerComponent>{resolvedOf.preparedMeta.parameters.banner}</BannerComponent>;
  }

  if (
    'in-development' in resolvedOf.preparedMeta.parameters &&
    resolvedOf.preparedMeta.parameters['in-development'] === true
  ) {
    // @ts-ignore
    return (
      <BannerComponent>
        This component is in development. It may not be fully functional, meet WCAG standards or stable. Do not use in
        production.
      </BannerComponent>
    );
  }

  return <></>;
};
