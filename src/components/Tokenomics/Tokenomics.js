import React from 'react'

const Tokenomics = () => {
  return (
    <div className="tokenomics-section-container">
        <h2>Tokenomics</h2>
        <div className="tokenomics-distribution-container">
            <h3>Initial Distribution</h3>
            <div className="tokenomics-distribution-image-container">
                <img
                    src={require("../../../public/tokenomics.png")}
                    alt="tokenomics-initial-distribution-image"
                    className="tokenomics-section-image"
                />
            </div>
            <p className="tokenomics-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet fringilla dolor. 
                Nullam libero purus, sagittis eget luctus vitae, porttitor ac dui. Integer id luctus est. 
                Praesent dapibus tellus at sagittis fermentum. Ut mattis purus at pellentesque fermentum. 
                Duis imperdiet lacus magna, in pellentesque lorem euismod ac. Phasellus eget odio ornare, sodales diam eu, aliquet ex. 
                Fusce vestibulum risus varius congue sollicitudin. Nulla convallis massa tortor, et pharetra neque viverra ac. 
                Praesent malesuada lacinia felis non mollis.
            </p>
        </div>
    </div>
  )
}

export default Tokenomics