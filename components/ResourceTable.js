import { ChevronDown, ChevronUp, Edit, Trash2, MoreHorizontal, Eye, Check, X } from 'lucide-react'
import { useState } from 'react'
const sampleResources = [
  {
    id: 'srv-001',
    name: 'Web Server',
    type: 'Compute',
    status: 'Running',
    cost: 120,
    cpu: 65,
    memory: 78,
    lastActive: '2024-06-10 14:22'
  },
  {
    id: 'db-002',
    name: 'Database',
    type: 'Database',
    status: 'Idle',
    cost: 340,
    cpu: 12,
    memory: 34,
    lastActive: '2024-06-10 13:10'
  },
  {
    id: 'stg-003',
    name: 'Storage Bucket',
    type: 'Storage',
    status: 'Running',
    cost: 80,
    cpu: 2,
    memory: 8,
    lastActive: '2024-06-10 14:10'
  },
  {
    id: 'fnc-004',
    name: 'Function App',
    type: 'Compute',
    status: 'Stopped',
    cost: 40,
    cpu: 0,
    memory: 0,
    lastActive: '2024-06-09 22:00'
  }
]
function getStatusColor(status) {
  if (status === 'Running') return 'text-green-600'
  if (status === 'Idle') return 'text-yellow-500'
  if (status === 'Stopped') return 'text-gray-400'
  return 'text-gray-500'
}
export default function ResourceTable() {
  const [sortBy, setSortBy] = useState('cost')
  const [sortDir, setSortDir] = useState('desc')
  function handleSort(field) {
    if (sortBy === field) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(field)
      setSortDir('asc')
    }
  }
  const sortedResources = [...sampleResources].sort((a, b) => {
    if (sortDir === 'asc') {
      return a[sortBy] > b[sortBy] ? 1 : -1
    } else {
      return a[sortBy] < b[sortBy] ? 1 : -1
    }
  })
  return (
    <section className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <Eye size={20} className="text-blue-600" />
          Resource Usage Overview
        </h2>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Check size={16} className="text-green-600" />
          Real-time Data
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-3 py-2 text-left font-medium text-gray-600">Name</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600">Type</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600">Status</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600 cursor-pointer" onClick={() => handleSort('cost')}>
                Cost ($)
                {sortBy === 'cost' ? (
                  sortDir === 'asc' ? <ChevronUp size={14} className="inline ml-1" /> : <ChevronDown size={14} className="inline ml-1" />
                ) : null}
              </th>
              <th className="px-3 py-2 text-left font-medium text-gray-600 cursor-pointer" onClick={() => handleSort('cpu')}>
                CPU (%)
                {sortBy === 'cpu' ? (
                  sortDir === 'asc' ? <ChevronUp size={14} className="inline ml-1" /> : <ChevronDown size={14} className="inline ml-1" />
                ) : null}
              </th>
              <th className="px-3 py-2 text-left font-medium text-gray-600 cursor-pointer" onClick={() => handleSort('memory')}>
                Memory (%)
                {sortBy === 'memory' ? (
                  sortDir === 'asc' ? <ChevronUp size={14} className="inline ml-1" /> : <ChevronDown size={14} className="inline ml-1" />
                ) : null}
              </th>
              <th className="px-3 py-2 text-left font-medium text-gray-600">Last Active</th>
              <th className="px-3 py-2 text-center font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedResources.map((res) => (
              <tr key={res.id} className="border-b last:border-b-0 hover:bg-gray-50">
                <td className="px-3 py-2 font-medium text-gray-800">{res.name}</td>
                <td className="px-3 py-2">{res.type}</td>
                <td className={`px-3 py-2 font-semibold ${getStatusColor(res.status)}`}>{res.status}</td>
                <td className="px-3 py-2">${res.cost}</td>
                <td className="px-3 py-2">{res.cpu}%</td>
                <td className="px-3 py-2">{res.memory}%</td>
                <td className="px-3 py-2">{res.lastActive}</td>
                <td className="px-3 py-2 text-center">
                  <div className="flex items-center gap-2 justify-center">
                    <Edit size={16} className="text-blue-500 cursor-pointer hover:text-blue-700" />
                    <Trash2 size={16} className="text-red-500 cursor-pointer hover:text-red-700" />
                    <MoreHorizontal size={16} className="text-gray-400 cursor-pointer hover:text-gray-600" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}