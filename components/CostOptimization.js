import { Check, X, Save, ChevronRight } from 'lucide-react'
const recommendations = [
  {
    id: 1,
    title: 'Idle Database Detected',
    description: 'Database "db-002" has been idle for 2+ hours. Consider stopping to save $120/month.',
    action: 'Stop Now',
    status: 'active'
  },
  {
    id: 2,
    title: 'Overprovisioned Storage',
    description: 'Storage Bucket "stg-003" is using only 8% of allocated space. Reduce allocation to save $30/month.',
    action: 'Optimize',
    status: 'active'
  },
  {
    id: 3,
    title: 'No Action Needed',
    description: 'All compute resources are optimally utilized.',
    action: null,
    status: 'resolved'
  }
]
export default function CostOptimization() {
  return (
    <section className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center gap-2 mb-4">
        <Save size={20} className="text-green-600" />
        <h2 className="text-lg font-semibold text-gray-800">Cost Optimization</h2>
      </div>
      <ul className="space-y-4">
        {recommendations.map((rec) => (
          <li key={rec.id} className="flex items-start gap-3">
            <div>
              {rec.status === 'active' ? (
                <ChevronRight size={18} className="text-blue-500 mt-1" />
              ) : (
                <Check size={18} className="text-green-500 mt-1" />
              )}
            </div>
            <div className="flex-1">
              <div className="font-medium text-gray-700">{rec.title}</div>
              <div className="text-gray-500 text-sm">{rec.description}</div>
              {rec.action && (
                <button className="mt-2 inline-flex items-center px-3 py-1.5 bg-blue-50 text-blue-700 rounded hover:bg-blue-100 text-xs font-medium transition">
                  {rec.action}
                </button>
              )}
            </div>
            {rec.status === 'active' ? (
              <X size={16} className="text-gray-400 cursor-pointer hover:text-gray-600 mt-1" />
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  )
}