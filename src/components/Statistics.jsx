import StatisticLine from './StatisticLine'

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const average = total ? (good - bad) / total : 0
  const positive = total ? (good / total) * 100 : 0

  if (total === 0) {
    return <p>No feedback given</p>
  }

  return (
    <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="All" value={total} />
          <StatisticLine text="Average" value={average.toFixed(2)} />
          <StatisticLine text="Positive" value={`${positive.toFixed(2)} %`} />
        </tbody>
      </table>
    </div>
  )
}

export default Statistics
