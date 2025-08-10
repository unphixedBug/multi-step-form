export const FormLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative top-1/9 z-10 flex h-auto w-full flex-col justify-between rounded-2xl bg-white px-12 py-10 md:z-auto md:h-auto md:w-auto md:px-0 md:py-0">
      {children}
    </div>
  );
};
