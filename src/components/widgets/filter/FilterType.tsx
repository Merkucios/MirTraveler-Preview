import { SwitchField } from '@/components/shared';

type FilterTypeProps = {
  label1: string;
  label2: string;
  onChange: (value: boolean) => void;
};

export const FilterType: React.FC<FilterTypeProps> = ({
  label1,
  label2,
  onChange,
}) => (
  <div className="space-y-2">
    <SwitchField
      figureClassName="green-tur"
      options={{
        label1,
        label2,
      }}
      onChange={onChange}
    />
  </div>
);
