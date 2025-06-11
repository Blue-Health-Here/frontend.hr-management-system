interface MetricCardProps {
  title: string;
  value: string | number;
  trend?: string;
  color: 'blue' | 'purple' | 'green' | 'pink';
  iconColor: 'blue' | 'purple' | 'green' | 'pink';
  size?: 'small' | 'medium' | 'large';
  icon?: React.ComponentType<any>;
}

const LeavesCard: React.FC<MetricCardProps> = ({
  title,
  value,
  color,
  size = 'medium',
  icon: Icon,
  iconColor
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
        <h3 className="text-sm sm:text-base md:text-lg font-medium text-gray-700 mb-2">
          {title}
        </h3>

        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1">
          {value}
        </div>
      </div>
    </div>
  );
};

export default LeavesCard;
