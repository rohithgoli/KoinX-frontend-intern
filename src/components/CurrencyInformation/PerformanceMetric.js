import React from 'react'

const PerformanceMetric = ({metricDetails, className}) => {
    const {title, value} = metricDetails;

  return (
    <div className={className}>
        <p>{title}</p>
        <h3>{value}</h3>
    </div>
  )
}
export default PerformanceMetric;