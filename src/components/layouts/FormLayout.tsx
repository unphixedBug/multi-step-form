export const FormLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-between h-full w-2/3 px-12 py-10 bg-white rounded-2xl">
      {children}
    </div>
  );
};
