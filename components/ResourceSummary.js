import { Layers, FileText, Download, Upload } from 'lucide-react'
const summaryData = [
  {
    label: 'Active Resources',
    value: 128,
    icon: Layers,
    color: 'bg-blue-100 text-blue-600'
  },
  {
    label: 'Monthly Cost',
    value: '$3,420',
    icon: FileText,
    color: 'bg-green-100 text-green-600'
  },
  {
    label: 'Data In (GB)',
    value: 512,
    icon: Download,
    color: 'bg-purple-100 text-purple-600'
  },
  {
    label: 'Data Out (GB)',
    value: 430,
    icon: Upload,
    color: 'bg-yellow-100 text-yellow-600'
  }
]
export default function ResourceSummary() {
  return (
    <section>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {summaryData.map((item, idx) => {
          const Icon = item.icon
          return (
            <div key={item.label} className="bg-white rounded-lg shadow flex items-center gap-4 px-5 py-4">
              <div className={`rounded-full p-2 ${item.color}`}>
                <Icon size={28} />
              </div>
              <div>
                <div className="text-2xl font-bold">{item.value}</div>
                <div className="text-gray-500 text-sm">{item.label}</div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}