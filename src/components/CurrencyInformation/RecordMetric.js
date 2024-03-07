import React from 'react'

const RecordMetric = ({metricDetails}) => {
    const {title, value, currentPercentVariation, timePeriod} = metricDetails;

    const currentPercentVariationClassName = parseFloat(currentPercentVariation.split("%")[0]) > 0 ? 'positive-record' : 'negative-record'
    
  return (
    <div className="record-metric-item-container">
        <p className="fundamental-metric-title">{title}</p>
        <div className="record-metric-details-container">
            <p className="fundamental-metric-value">
                {value} <span className={currentPercentVariationClassName}>{currentPercentVariation}</span>
            </p>
            <p className="record-metric-occurence-time">{timePeriod}</p>
        </div>
        
    </div>
  )
}

export default RecordMetric