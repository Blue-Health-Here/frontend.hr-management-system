import React from 'react';
import { LeavesCardProps } from '@/utils/types';

const Card: React.FC<LeavesCardProps> = ({ 
  title, 
  value, 
  icon: Icon, 
  iconColor, 
  bgImage 
}) => {
  return (
    <div className="bg-white rounded-2xl relative overflow-hidden h-24 theme-shadow">
      <div className="absolute left-0 top-0 bottom-0 w-2/5">
        <img
          src={bgImage}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative p-4 flex items-center justify-between h-full">
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-white z-10">
            <Icon className="h-4 w-4" style={{ color: iconColor }} />
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs font-medium text-gray-500">{title}</p>
          <p className="text-2xl font-semibold">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;