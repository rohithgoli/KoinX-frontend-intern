import React from 'react'
import {useState} from 'react';
import { Mobile, Desktop } from '../ScreenView'
import { CHART_HEADER_TIME_PERIODS } from '../../../utils/constants'

const CurrencyChartHeader = () => {
    
    const [selectedDurationId, setSelectedDurationId] = useState(3);

    const onChangeDuration = (e) => {
        setSelectedDurationId(e.target.id);
    } 

  return (
    <>
        <Mobile>
            <div className="currency-chart-header-container-mobile">
                <hr className="separator"></hr>
                <div className="currency-chart-header-content-container-mobile">
                    <h4 className="chart-heading-mobile">Bitcoin Price Chart (USD)</h4>
                    <div>
                        {
                            CHART_HEADER_TIME_PERIODS.map(duration => {
                                return (
                                    <button 
                                        id={duration.id}
                                        key={duration.id}
                                        className={duration.id == selectedDurationId ? "selected-duration-mobile duration-mobile" : "duration-mobile"}
                                        onClick={(e) => onChangeDuration(e)} 
                                    >
                                        {duration.value}
                                    </button>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </Mobile>
        <Desktop>
            <div className="currency-chart-header-container-desktop">
                <hr className="separator"></hr>
                <div className="currency-chart-header-content-container-desktop">
                    <h3>Bitcoin Price Chart (USD)</h3>
                    <div>
                        {
                            CHART_HEADER_TIME_PERIODS.map(duration => {
                                return (
                                    <button 
                                        id={duration.id}
                                        key={duration.id}
                                        className={duration.id == selectedDurationId ? "selected-duration-desktop duration-desktop" : "duration-desktop"}
                                        onClick={(e) => onChangeDuration(e)} 
                                    >
                                        {duration.value}
                                    </button>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </Desktop>
    </>
  )
}

export default CurrencyChartHeader