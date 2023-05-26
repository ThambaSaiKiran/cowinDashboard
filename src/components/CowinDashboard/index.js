// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationByAge from '../VaccinationByAge'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationCoverage from '../VaccinationCoverage'
import './index.css'

const apiStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class CowinDashboard extends Component {
  state = {fetchedData: [], fetchStatus: apiStatus.initial}

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({fetchStatus: apiStatus.loading})

    const url = 'https://apis.ccbp.in/covid-vaccination-data'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    console.log(response)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = {
        last7DaysVaccination: data.last_7_days_vaccination,
        vaccinationByAge: data.vaccination_by_age,
        vaccinationByGender: data.vaccination_by_gender,
      }
      this.setState({fetchedData: updatedData, fetchStatus: apiStatus.success})
    } else if (response.status === 401) {
      this.setState({fetchStatus: apiStatus.failure})
    }
  }

  fetchFailure = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failImg"
      />
      <h1>Something went wrong</h1>
    </div>
  )

  fetchLoading = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  fetchSuccess = () => {
    const {fetchedData} = this.state
    const {
      last7DaysVaccination,
      vaccinationByAge,
      vaccinationByGender,
    } = fetchedData
    return (
      <div>
        <VaccinationCoverage last7days={last7DaysVaccination} />
        <VaccinationByGender byGender={vaccinationByGender} />
        <VaccinationByAge byAge={vaccinationByAge} />
      </div>
    )
  }

  renderRes = () => {
    const {fetchStatus} = this.state
    switch (fetchStatus) {
      case apiStatus.success:
        return this.fetchSuccess()
      case apiStatus.failure:
        return this.fetchFailure()
      case apiStatus.loading:
        return this.fetchLoading()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="main">
        <div className="logoCont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="logo"
          />
          <p className="p">Co-WIN</p>
        </div>
        <h1>CoWIN Vaccination In India</h1>
        <div>{this.renderRes()}</div>
      </div>
    )
  }
}

export default CowinDashboard
