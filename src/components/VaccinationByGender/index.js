// Write your code here
import {ResponsiveContainer, PieChart, Pie, Cell, Legend} from 'recharts'
import './index.css'

const VaccinationByGender = props => {
  const {byGender} = props
  return (
    <div className="pieChart1">
      <h1>Vaccination By Gender</h1>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={byGender}
            startAngle={0}
            endAngle={180}
            dataKey="count"
            innerRadius="40%"
            outerRadius="70%"
          >
            <Cell name="Male" fill="#5a8dee" />
            <Cell name="Female" fill="#f54394" />
            <Cell name="Others" fill=" #64c2a6" />
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

export default VaccinationByGender
