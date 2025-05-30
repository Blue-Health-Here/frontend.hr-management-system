import React from 'react';
import { GoArrowUp } from 'react-icons/go';

type SubtitleItem = {
  label: string;
  value: string | number;
};

type MetricCardProps = {
  title: string;
  icon?: React.ReactNode;
  value?: string | number;
  percentage?: string | number;
  percentageColor?: string;
  textColor?: string;
  iconBgColor?: string;
  isShowCradFooter?: boolean;
  variant?: 'default' | 'compact';
  subtitles?: SubtitleItem[];
};

const MetricCard = ({
  title,
  icon,
  value,
  percentage,
  percentageColor = 'bg-green-100',
  textColor = 'text-green-700',
  iconBgColor = 'bg-blue-100',
  isShowCradFooter = true,
  variant = 'default',
  subtitles = [],
}: MetricCardProps) => {
  const isCompact = variant === 'compact';

  return (
    <div className="bg-white rounded-2xl w-full overflow-hidden">
      <div className={`${isCompact ? 'p-4' : isShowCradFooter ? 'p-4 md:px-5 md:py-6' : 'p-6'}`}>
        <div className="flex items-center gap-3 mb-3">
          <div className={`${iconBgColor} ${isCompact ? 'p-2' : 'p-3'} rounded-xl`}>
            {icon}
          </div>
          <p className="text-gray-700 text-sm font-medium">{title}</p>
        </div>

        {isCompact && subtitles.length > 0 && (
          <div className="flex flex-col gap-1 ml-13 mr-6">
            {subtitles.map((item, idx) => (
              <div key={idx} className="flex justify-between text-sm text-gray-700">
                <span>{item.label}</span>
                <span className="font-medium">{item.value}</span>
              </div>
            ))}
          </div>
        )}

        {!isCompact && (
          <div className="flex items-center justify-between mt-5">
            <h2 className="text-4xl font-bold text-gray-800">{value}</h2>
            {percentage !== undefined && (
              <div className={`${percentageColor} px-3 py-1 rounded-full flex gap-x-2 items-center`}>
                <span className={`${textColor} text-xs font-medium flex items-center`}>
                  <GoArrowUp />
                  {percentage}%
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      {!isCompact && isShowCradFooter && (
        <div className="bg-gray-50 px-6 py-3">
          <p className="text-gray-500 text-xs">Increased vs yesterday</p>
        </div>
      )}
    </div>
  );
};

export default MetricCard;
