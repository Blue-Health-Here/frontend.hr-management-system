interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: string;
  color: 'blue' | 'purple' | 'green' | 'pink' ;
  iconColor: 'blue' | 'purple' | 'green' | 'pink' ;
  size?: 'small' | 'medium' | 'large';
  icon?: React.ComponentType<any>;
}

export const LeavesCard: React.FC<MetricCardProps> = ({
  title,
  value,
  color,
  size = 'medium',
  icon: Icon,
  iconColor,
}) => {
  const colorClasses = {
    blue: 'bg-blue-50',
    purple: 'bg-purple-100',
    green: 'bg-green-100',
    pink: 'bg-pink-100 ',
  };
 const iconColorClass = {
    blue: 'text-blue-500',
    purple: 'text-purple-300',
    green: 'text-green-400',
    pink: 'text-pink-400 ',
 }
  const sizeClasses = {
    small: 'p-4 min-h-[100px]',
    medium: 'p-6 min-h-[120px]',
    large: 'p-8 min-h-[140px]'
  };

  const textSizes = {
    small: { value: 'text-2xl', title: 'text-sm', subtitle: 'text-xs' },
    medium: { value: 'text-3xl', title: 'text-sm', subtitle: 'text-xs' },
    large: { value: 'text-4xl', title: 'text-base', subtitle: 'text-sm' }
  };

  return (
    <div className={`
      ${colorClasses[color]} 
      ${sizeClasses[size]}
      rounded-xl     
      flex flex-col justify-between
      backdrop-blur-sm
      relative overflow-hidden
      group
    `}>
      {Icon && (
          <Icon className={`${iconColorClass[iconColor]} w-16 h-16 absolute top-6 right-[-1rem]`} />

      )}
      
      <div className="relative z-10">
        <h3 className={`${textSizes[size].title} font-medium text-gray-700 mb-2`}>
          {title}
        </h3>
        <div className={`${textSizes[size].value} font-bold text-gray-900 mb-1`}>
          {value}
        </div>
      </div>
    </div>
  );
};