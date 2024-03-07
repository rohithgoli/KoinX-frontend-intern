export const BRAND_LOGO_URL = "https://app.koinx.com/static/media/Logo.3331aa2fc2f35c00e58921b44a2ebf0d.svg";
export const TRENDING_COINS_URL = "https://api.coingecko.com/api/v3/search/trending";
export const API_STATUS_CONSTANTS = {
    "SUCCESS": "SUCCESS",
    "FAILED": "FAILED",
    "IN_PROGRESS": "IN_PROGRESS"
}

export const CURRENCY_DETAILS_BASE_URL = "https://api.coingecko.com/api/v3/coins/";
export const CURRENCY_DETAILS_URL_PARAMS = "?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false";

export const CURRENCY_PRICE_DETAILS_BASE_URL = "https://api.coingecko.com/api/v3/simple/price?ids=";
export const CURRENCY_PRICE_DETAILS_URL_PARAMS = "&vs_currencies=inr%2Cusd&include_24hr_change=true&precision=full";

export const CHART_HEADER_TIME_PERIODS = [
    {
        "id": 1,
        "value": "1H" 
    },
    {
        "id": 2,
        "value": "24H" 
    },
    {
        "id": 3,
        "value": "7D" 
    },
    {
        "id": 4,
        "value": "1M" 
    },
    {
        "id": 5,
        "value": "3M" 
    },
    {
        "id": 6,
        "value": "6M" 
    },
    {
        "id": 7,
        "value": "1Y" 
    },
    {
        "id": 8,
        "value": "ALL"
    }
];

export const DAY_PERFORMANCE_DETAILS = [
    {
        "id": "todayLow",
        "title": "Today's Low",
        "value": "46,930.22"
    },
    {
        "id": "todayHigh",
        "title": "Today's High",
        "value": "49,343.83"
    },
    {
        "id": "current",
        "value": "$48,637.83"
    }
];

export const WEEK_PERFORMANCE_DETAILS = [
    {
        "id": "52wLow",
        "title": "52W Low",
        "value": "16,930.22"
    },
    {
        "id": "52wHigh",
        "title": "52W High",
        "value": "49,743.83"
    }
]

export const FUNDAMENTALS_DETAILS = [
    {
        "id": "bitcoinPrice",
        "title": "Bitcoin Price",
        "value": "$16,815.46"
    },
    {
        "id": "24hLowHigh",
        "title": "24h Low / 24h High",
        "value": "$16,382.07 / $16,874.12"
    },
    {
        "id": "7dLowHigh",
        "title": "7d Low / 7d High",
        "value": "$16,382.07 / $16,874.12"
    },
    {
        "id": "tradingVolume",
        "title": "Trading Volume",
        "value": "$23,249,202,782"
    },
    {
        "id": "marketCapRank",
        "title": "Market Cap Rank",
        "value": "#1"
    },
    {
        "id": "marketCap",
        "title": "Market Cap",
        "value": "$323,507,290,047"
    },
    {
        "id": "marketCapDominance",
        "title": "Market Cap Dominance",
        "value": "38.343%"
    },
    {
        "id": "marketCapVolume",
        "title": "Volume / Market Cap",
        "value": "0.0718"
    }
]

export const ALL_TIME_RECORDS = [
    {
        "id": "allTimeHigh",
        "title": "All-Time High",
        "value": "$69,044.77",
        "currentPercentVariation": "-75.6%",
        "timePeriod": "Nov 10, 2021 (about 1 year)"
    },
    {
        "id": "allTimeLow",
        "title": "All-Time Low",
        "value": "$67.81",
        "currentPercentVariation": "24729.1%",
        "timePeriod": "Jul 06, 2013 (over 9 years)"
    }
]

export const CALCULATE_CARD_DETAILS = [
    {
        "id": 1,
        "cardTitle": "Calculate your Profits",
        "cardType": "PROFIT"
    },
    {
        "id": 2,
        "cardTitle": "Calculate your tax liability",
        "cardType": "TAX"
    }
]

export const TEAM_MEMBERS_DETAILS = [
    {
        "id": 1,
        "name": "John Smith",
        "designation": "Designation here",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet fringilla dolor. Nullam libero purus, sagittis eget luctus vitae, porttitor ac dui. Integer id luctus est. Praesent dapibus tellus at sagittis fermentum. Ut mattis purus at pellentesque fermentum. Duis imperdiet lacus magna, in pellentesque lorem euismod ac. Phasellus eget odio ornare, sodales diam eu, aliquet ex. Fusce vestibulum risus varius congue sollicitudin. Nulla convallis massa tortor, et pharetra neque viverra ac. Praesent malesuada lacinia felis non mollis." 
    },
    {
        "id": 2,
        "name": "Elina Williams",
        "designation": "Designation here",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet fringilla dolor. Nullam libero purus, sagittis eget luctus vitae, porttitor ac dui. Integer id luctus est. Praesent dapibus tellus at sagittis fermentum. Ut mattis purus at pellentesque fermentum. Duis imperdiet lacus magna, in pellentesque lorem euismod ac. Phasellus eget odio ornare, sodales diam eu, aliquet ex. Fusce vestibulum risus varius congue sollicitudin. Nulla convallis massa tortor, et pharetra neque viverra ac. Praesent malesuada lacinia felis non mollis." 
    },
    {
        "id": 3,
        "name": "John Doe",
        "designation": "Designation here",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet fringilla dolor. Nullam libero purus, sagittis eget luctus vitae, porttitor ac dui. Integer id luctus est. Praesent dapibus tellus at sagittis fermentum. Ut mattis purus at pellentesque fermentum. Duis imperdiet lacus magna, in pellentesque lorem euismod ac. Phasellus eget odio ornare, sodales diam eu, aliquet ex. Fusce vestibulum risus varius congue sollicitudin. Nulla convallis massa tortor, et pharetra neque viverra ac. Praesent malesuada lacinia felis non mollis." 
    }
];