import React from 'react'
import { Mobile, Desktop } from '../ScreenView'
import { FUNDAMENTALS_DETAILS, ALL_TIME_RECORDS } from '../../../utils/constants'
import FundamentalsMetric from './FundamentalsMetric'
import RecordMetric from './RecordMetric'

const Fundamentals = () => {
  return (
    <>
      <Mobile>
        <div className="fundamentals-section-container">
          <div className="fundamentals-title-container">
            <h3 className="fundamentals-section-title">Fundamentals</h3>
            <div className="info-icon-container">i</div>
          </div>
          <div className="fundamentals-metrics-container-mobile">
            {
              FUNDAMENTALS_DETAILS.map(
                metricDetails => 
                <FundamentalsMetric 
                  key={metricDetails?.id} 
                  metricDetails={metricDetails} 
                />
              )
            }
            {
              ALL_TIME_RECORDS.map(
                metricDetails =>
                <RecordMetric 
                  key={metricDetails?.id}
                  metricDetails={metricDetails}
                />
              )
            }
          </div>
        </div>
      </Mobile>
      <Desktop>
        <div className="fundamentals-section-container">
          <div className="fundamentals-title-container">
            <h3 className="fundamentals-section-title">Fundamentals</h3>
            <div className="info-icon-container">i</div>
          </div>
          <div className="fundamentals-metrics-container-desktop">
            <div className="metric-part-container-desktop">
              {
                FUNDAMENTALS_DETAILS.slice(0,5).map(
                  metricDetails => 
                  <FundamentalsMetric 
                    key={metricDetails?.id} 
                    metricDetails={metricDetails} 
                  />
                )
              }
            </div>
            <div className="metric-part-container-desktop">
              {
                FUNDAMENTALS_DETAILS.slice(5).map(
                  metricDetails => 
                  <FundamentalsMetric 
                    key={metricDetails?.id} 
                    metricDetails={metricDetails} 
                  />
                )
              }
              {
                ALL_TIME_RECORDS.map(
                  metricDetails =>
                  <RecordMetric
                    key={metricDetails?.id}
                    metricDetails={metricDetails}
                  />
                )
              }
            </div>
          </div>
        </div>
      </Desktop>
    </>
  )
}

export default Fundamentals