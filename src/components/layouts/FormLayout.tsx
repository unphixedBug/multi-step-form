export const FormLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative top-1/9 z-10 px-3">
      <div className="flex h-auto w-full flex-col justify-between rounded-2xl bg-white px-12 py-10 lg:z-auto lg:h-auto lg:w-auto lg:px-0 lg:py-0">
        {children}
      </div>
    </div>
  );
};
