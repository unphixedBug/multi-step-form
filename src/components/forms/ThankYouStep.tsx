import { Title } from '../elements/Title';

// relative top-1/9 z-10 flex h-auto w-full flex-col justify-between rounded-2xl bg-white px-12 py-10 md:z-auto md:h-auto md:w-auto

export const ThankYouStep = () => {
  return (
    <div className="relative top-1/9 z-10 flex h-1/2 w-full flex-col items-center justify-center gap-4 rounded-2xl bg-white px-12 py-10 md:h-auto">
      <img src="images/icon-thank-you.svg" alt="" />
      <Title title="Thank you!" />
      <p className="text-center">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};
