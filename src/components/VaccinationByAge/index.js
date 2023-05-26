// Write your code here
import {ResponsiveContainer, PieChart, Pie, Cell, Legend} from 'recharts'
import './index.css'

const VaccinationByAge = props => {
  const {byAge} = props
  return (
    <div className="pieChart3">
      <h1>Vaccination By age</h1>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            outerRadius="70%"
            startAngle={0}
            endAngle={360}
            dataKey="count"
            data={byAge}
          >
            <Cell name="18-44" fill="#2d87bb" />
            <Cell name="44-60" fill="#a3df9f" />
            <Cell name="Above 60" fill="#64c2a6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="vertical"
            verticalAlign="middle"
            align="right"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByAge
