import React from 'react'
import BannerImages from './BannerImages'

function Banner() {
  return (
      
    <div className="fix-banner">
        <div className="hand-img"><img src="Images/hand-with-mobile.png" alt="" /></div>
        <div className="banner-patch">Are You Looking For Free Images ?</div>
        <div className="container">
            <BannerImages/>
        </div>
    </div>
   
  )
}

export default Banner