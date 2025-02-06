type FilterSectionProps = {
  title: string;
  children: React.ReactNode;
};

export const FilterSection: React.FC<FilterSectionProps> = ({
  title,
  children,
}) => (
  <div className="space-y-4">
    <h3 className="text-base font-semibold text-dark-grey-tur">{title}</h3>
    <div className="space-y-2">{children}</div>
  </div>
);
