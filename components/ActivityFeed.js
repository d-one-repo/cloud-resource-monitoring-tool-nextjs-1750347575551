import { User, Calendar, Clock, Star } from 'lucide-react'
const activities = [
  {
    id: 1,
    user: 'James Hutton',
    action: 'Stopped Database',
    resource: 'db-002',
    time: '2024-06-10 13:15'
  },
  {
    id: 2,
    user: 'James Hutton',
    action: 'Optimized Storage',
    resource: 'stg-003',
    time: '2024-06-10 12:50'
  },
  {
    id: 3,
    user: 'James Hutton',
    action: 'Reviewed Cost Report',
    resource: null,
    time: '2024-06-10 12:00'
  }
]
export default function ActivityFeed() {
  return (
    <section className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center gap-2 mb-4">
        <Star size={20} className="text-yellow-500" />
        <h2 className="text-lg font-semibold text-gray-800">Recent Activity</h2>
      </div>
      <ul className="space-y-4">
        {activities.map((act) => (
          <li key={act.id} className="flex items-start gap-3">
            <User size={18} className="text-blue-600 mt-1" />
            <div className="flex-1">
              <div className="font-medium text-gray-700">{act.user}</div>
              <div className="text-gray-500 text-sm">
                {act.action}
                {act.resource && (
                  <span className="ml-1 font-mono text-xs text-gray-400">[{act.resource}]</span>
                )}
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
                <Calendar size={12} />
                <span>{act.time.split(' ')[0]}</span>
                <Clock size={12} />
                <span>{act.time.split(' ')[1]}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}