import React from 'react'
import { Mobile, Desktop } from '../ScreenView'
import { DAY_PERFORMANCE_DETAILS, WEEK_PERFORMANCE_DETAILS } from '../../../utils/constants'
import PerformanceMetric from './PerformanceMetric'

const PerformanceIndicator = () => {
  return (
    <>
        <Mobile>
            <div className="performance-indicator-container-mobile">
                <div className="performance-details-indicator-mobile">
                    <PerformanceMetric
                        key={DAY_PERFORMANCE_DETAILS[0]?.id}
                        metricDetails={DAY_PERFORMANCE_DETAILS[0]}
                        className={"performance-metric-container"}
                    />
                    <div className="day-pointer-container-mobile">
                        <div className="day-indicator-separator"></div>
                        <span className='current-day-value-indicator'>^</span>
                        <p className="current-day-value-mobile">{DAY_PERFORMANCE_DETAILS[2]?.value}</p>
                    </div>
                    <PerformanceMetric 
                        key={DAY_PERFORMANCE_DETAILS[1]?.id}
                        metricDetails={DAY_PERFORMANCE_DETAILS[1]}
                        className={"performance-metric-container right-metric"}
                    />
                </div>
                <div className="performance-details-indicator-desktop">
                    <PerformanceMetric 
                        key={WEEK_PERFORMANCE_DETAILS[0]?.id}
                        metricDetails={WEEK_PERFORMANCE_DETAILS[0]}
                        className={"performance-metric-container"}
                    />
                    <div className="week-indicator-separator-mobile"></div>
                    <PerformanceMetric 
                        key={WEEK_PERFORMANCE_DETAILS[1]?.id}
                        metricDetails={WEEK_PERFORMANCE_DETAILS[1]}
                        className={"performance-metric-container right-metric"}
                    />
                </div>
            </div>
        </Mobile>
        <Desktop className="performance-indicator-container-desktop">
            <div className="performance-details-indicator-desktop">
                <PerformanceMetric
                    key={DAY_PERFORMANCE_DETAILS[0]?.id}
                    metricDetails={DAY_PERFORMANCE_DETAILS[0]}
                    className={"performance-metric-container"}
                />
                <div className="day-pointer-container">
                    <div className="day-indicator-separator"></div>
                    <span className='current-day-value-indicator'>^</span>
                    <p className="current-day-value">{DAY_PERFORMANCE_DETAILS[2]?.value}</p>
                </div>
                <PerformanceMetric 
                    key={DAY_PERFORMANCE_DETAILS[1]?.id}
                    metricDetails={DAY_PERFORMANCE_DETAILS[1]}
                    className={"performance-metric-container right-metric"}
                />
            </div>
            <div className="performance-details-indicator-desktop">
                <PerformanceMetric 
                    key={WEEK_PERFORMANCE_DETAILS[0]?.id}
                    metricDetails={WEEK_PERFORMANCE_DETAILS[0]}
                    className={"performance-metric-container"}
                />
                <div className="week-indicator-separator"></div>
                <PerformanceMetric 
                    key={WEEK_PERFORMANCE_DETAILS[1]?.id}
                    metricDetails={WEEK_PERFORMANCE_DETAILS[1]}
                    className={"performance-metric-container right-metric"}
                />
            </div>
        </Desktop>
    </>
  )
}

export default PerformanceIndicator