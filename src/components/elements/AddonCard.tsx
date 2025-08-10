import { Card, CardContent } from '../ui/card';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';

type Prices = {
  monthly: number;
  yearly: number;
};

interface AddonCardProps {
  id: string;
  title: string;
  description: string;
  prices: Prices;
  isYearlyPlanSelected: boolean;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

export const AddonCard = ({
  id,
  title,
  description,
  prices,
  isYearlyPlanSelected,
  checked,
  onCheckedChange,
}: AddonCardProps) => {
  return (
    <Card
      className={`cursor-pointer border-1 ${
        checked
          ? 'border-purple-600 bg-purple-50'
          : 'bg-white hover:border-purple-600'
      }`}
      onClick={() => onCheckedChange(!checked)}
    >
      <CardContent className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Checkbox
            id={id}
            checked={checked}
            onCheckedChange={(checked) => onCheckedChange(checked as boolean)}
          />
          <div>
            <Label className="font-semibold" htmlFor={id}>
              {title}
            </Label>
            <p className="text-gray-500">{description}</p>
          </div>
        </div>
        <p className="text-purple-600">
          +$
          {isYearlyPlanSelected
            ? `${prices.yearly}/yr`
            : `${prices.monthly}/mo`}
        </p>
      </CardContent>
    </Card>
  );
};
