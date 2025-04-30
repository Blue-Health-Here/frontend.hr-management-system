export default function DetailRow({ label, value, icon }: { label: string; value: string; icon?: React.ReactNode }) {
  return (
    <div className="flex justify-between items-center text-xs">
      <div className="flex items-center text-gray-500">
        {icon && <span className="mr-2">{icon}</span>}
        {label}
      </div>
      <div className="font-medium text-right">
        {value}
      </div>
    </div>
  );
}