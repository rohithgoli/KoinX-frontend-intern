import React from 'react'

const FundamentalsMetric = ({metricDetails}) => {
    const {title, value} = metricDetails;

  return (
    <div className="fundamental-metric-item-container">
        <p className="fundamental-metric-title">{title}</p>
        <p className="fundamental-metric-value">{value}</p>
    </div>
  )
}

export default FundamentalsMetric