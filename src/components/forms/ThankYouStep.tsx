import { Title } from "../elements/Title";

export const ThankYouStep = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-full w-2/3 px-12 py-10">
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
