import { useOf } from '@storybook/blocks';
import { PropsWithChildren } from 'react';

export const BannerComponent = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="uog:fixed uog:top-0 uog:left-0 uog:bg-red uog:p-4 uog:text-center uog:w-screen uog:font-bold uog:text-red-contrast uog:mb-4 uog:z-100">
        {children}
      </div>
      <div className="uog:w-full uog:h-8"></div>
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
