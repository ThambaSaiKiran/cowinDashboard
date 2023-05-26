// Write your code here
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Legend,
} from 'recharts'

import './index.css'

const VaccinationCoverage = props => {
  const {last7days} = props
  return (
    <div className="barChart">
      <h1>Vaccination Coverage</h1>
      <ResponsiveContainer width="80%" height={200}>
        <BarChart
          data={last7days}
          margin={{
            top: 5,
          }}
          width={40}
        >
          <XAxis dataKey="vaccine_date" />
          <YAxis
            tick={{
              stroke: 'gray',
              strokeWidth: 0,
            }}
          />
          <Legend
            wrapperStyle={{
              padding: 30,
            }}
          />
          <Bar dataKey="dose_1" fill="#5a8dee" name="Dose 1" />
          <Bar dataKey="dose_2" fill="#f54394" name="Dose 2" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationCoverage
