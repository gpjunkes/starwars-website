import React from 'react'
import ImgDarthVader from '../../images/darth-vader.jpg'

const WhichSideContainer = () => (
    <div className="container-fluid bg-4 text-center">
        <h3 className="margin">Which side are you in?</h3>
        <img src={ImgDarthVader}  className="img-responsive img-circle margin" style={{display:'inline'}} alt="DarthVader" width="350" height="350" />
    </div>
)

export default WhichSideContainer