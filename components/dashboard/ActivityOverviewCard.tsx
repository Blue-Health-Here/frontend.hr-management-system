"use client";

import Image from "next/image";

type ScheduleItem = {
  title: string;
  description: string;
  timeRange: string;
  candidates: string[];
  meetingType?: 'interview' | 'review' | 'client' | 'internal';
};

type ActivityItem = {
  userName: string;
  action: string;
  time: string;
  userImage: string;
  activityType?: 'task' | 'project' | 'comment' | 'update';
};

type BirthdayItem = {
  name: string;
  role: string;
  date: string;
  image: string;
  isToday?: boolean;
};

type ActivityOverviewProps = {
  schedules: ScheduleItem[];
  activities: ActivityItem[];
  birthdays: BirthdayItem[];
};

export default function ActivityOverviewCard({
  schedules,
  activities,
  birthdays,
}: ActivityOverviewProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mt-6">
      {/* Schedules Section */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Schedules</h2>
        <div className="space-y-3 sm:space-y-4">
          {schedules.map((schedule, index) => (
            <div 
              key={index} 
              className="p-3 sm:p-4 rounded-lg shadow-[0_2px_4px_rgba(0,0,0,0.05)] border border-gray-100"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-medium text-gray-700">{schedule.title}</h3>
                  <p className="text-xs text-gray-500">{schedule.description}</p>
                  <p className="text-xs text-gray-500 mt-1">{schedule.timeRange}</p>
                  <div className="border-t border-gray-100 my-2"></div>
                </div>
                {schedule.meetingType && (
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    schedule.meetingType === 'interview' ? 'bg-purple-100 text-purple-800' :
                    schedule.meetingType === 'review' ? 'bg-blue-100 text-blue-800' :
                    schedule.meetingType === 'client' ? 'bg-green-100 text-green-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {schedule.meetingType}
                  </span>
                )}
              </div>
              <div className="flex items-center mt-2 space-x-2">
                <div className="flex -space-x-2">
                  {schedule.candidates.map((candidate, i) => (
                    <Image
                      key={i}
                      src={candidate}
                      width={32}
                      height={32}
                      className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white"
                      alt="Candidate"
                    />
                  ))}
                </div>
                <button className="ml-auto px-2 py-1 bg-[#f26522] text-white text-[10px] sm:text-xs rounded transition-colors">
                  Join Meeting
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activities Section */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Activities</h2>
        <div className="space-y-3 sm:space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start pb-2">
              <Image
                src={activity.userImage}
                width={40}
                height={40}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mr-3"
                alt="User"
              />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <p className="text-sm font-medium text-gray-700">{activity.userName}</p>
                  {activity.activityType && (
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      activity.activityType === 'task' ? 'bg-green-100 text-green-800' :
                      activity.activityType === 'project' ? 'bg-blue-100 text-blue-800' :
                      activity.activityType === 'comment' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {activity.activityType}
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-500">{activity.action}</p>
                <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Birthdays Section */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Birthdays</h2>
        <div className="space-y-3 sm:space-y-4">
          {birthdays.map((birthday, index) => (
            <div 
              key={index} 
              className="p-3 sm:p-4 rounded-lg shadow-[0_2px_4px_rgba(0,0,0,0.05)] border border-gray-100"
            >
              <div className="flex items-center">
                <div className="relative">
                  <Image
                    src={birthday.image}
                    width={48}
                    height={48}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3"
                    alt="Birthday person"
                  />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                    🎂
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-gray-700">{birthday.name}</p>
                    {birthday.isToday && (
                      <span className="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded-full">
                        Today!
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">{birthday.role}</p>
                  <p className="text-xs text-gray-400 mt-1">{birthday.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}