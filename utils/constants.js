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