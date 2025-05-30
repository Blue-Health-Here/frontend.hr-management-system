import React from 'react';
import { GoArrowUp, GoArrowDown } from 'react-icons/go';

type SubtitleItem = {
  label: string;
  value: string | number;
};

type MetricCardProps = {
  title?: string;
  icon?: React.ReactNode;
  value?: string | number;
  target?: string | number;
  percentage?: string | number;
  percentageColor?: string;
  textColor?: string;
  iconBgColor?: string;
  isShowCradFooter?: boolean;
  variant?: 'default' | 'compact';
  subtitles?: SubtitleItem[];
  footerText?: string;
};

const MetricCard = ({
  title,
  icon,
  value,
  target,
  percentage,
  percentageColor = 'bg-green-100',
  textColor = 'text-green-700',
  iconBgColor = 'bg-blue-100',
  isShowCradFooter = true,
  variant = 'default',
  subtitles = [],
  footerText = 'Compared to target',
}: MetricCardProps) => {
  const isCompact = variant === 'compact';
  const isDecrease = typeof percentage === 'string' && percentage.trim().startsWith('-');
  const PercentageIcon = isDecrease ? GoArrowDown : GoArrowUp;

  const formattedPercentage = percentage ? `${percentage}`.replace('%', '') : null;

  const numericValue = typeof value === 'string' ? parseFloat(value) : value;
  const numericTarget = typeof target === 'string' ? parseFloat(target) : target;

  const showFooterArrow = typeof numericValue === 'number' && typeof numericTarget === 'number';
  const isUp = showFooterArrow && numericValue >= numericTarget;

  return (
    <div className="bg-white rounded-2xl w-full overflow-hidden border border-gray-200">
      <div className={`${isCompact ? 'p-4' : isShowCradFooter ? 'p-4 md:px-5 md:py-6' : 'p-6'}`}>
        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <div className={`${iconBgColor} ${isCompact ? 'p-2' : 'p-3'} rounded-xl`}>
            {icon}
          </div>
          <p className="text-gray-700 text-sm font-medium">{title}</p>
        </div>

        {/* Subtitles */}
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

        {/* Main content */}
        {!isCompact && (
          <div className="flex items-center justify-between mt-5">
            <h2 className="text-3xl font-bold text-gray-800">
              {value}{target !== undefined ? ` / ${target}` : ''}
            </h2>
            {percentage !== undefined && (
              <div className={`${percentageColor} px-3 py-1 rounded-full flex gap-x-2 items-center`}>
                <span className={`${textColor} text-xs font-medium flex items-center`}>
                  <PercentageIcon className="mr-1" />
                  {formattedPercentage}%
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      {!isCompact && isShowCradFooter && (
        <div className="bg-gray-50 px-6 py-3 flex items-center justify-between text-xs text-gray-500">
          <p>{footerText}</p>
          {percentage !== undefined && (
            <div className="flex items-center gap-1">
              {isDecrease ? (
                <GoArrowDown className="text-red-500" />
              ) : (
                <GoArrowUp className="text-green-500" />
              )}
              <span className={isDecrease ? 'text-red-500' : 'text-green-500'}>
                {isDecrease ? 'Down' : 'Up'}
              </span>
            </div>
          )}
        </div>
      )}

    </div>
  );
};

export default MetricCard;
