type MaxWidthPopupWrapperProps = {
  children: React.ReactNode;
};

export const MaxWidthPopupWrapper: React.FC<MaxWidthPopupWrapperProps> = ({
  children,
}) => (
  <div className="relative mx-auto w-full max-w-4xl rounded-3xl bg-white p-6 shadow-lg sm:max-w-lg md:max-w-md lg:max-w-lg xl:max-w-lg 2xl:max-w-xl">
    {children}
  </div>
);
