import React from 'react'
import Button from '../common/Button/Button'
import './appRating.css'

const getIosPrefix = () => {
    return <img src="https://web-images.credcdn.in/_next/assets/images/home-page/apple-store-logo.png" className='app-rating-icon'/>
}

const getAndroidPrefix = () => {
    return <img src="https://web-images.credcdn.in/_next/assets/images/home-page/play-store-logo.png" className='app-rating-icon'/>
}

function AppRating() {
  return (
    <div className="max-width flex app-rating">
        <div className="app-rating-block flex-col">
            <div className="flex">
                <div className="app-rating-value flex flex-col">4.8
                    <img src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png" className="app-rating-stars" />
                </div>
                <div className='app-rating-platform'>  
                    app <br /> store
                </div>
            </div>
            <div className="non-mobile">
                <Button buttonText="Download the app" customClass="app-rating-button" prefix={getIosPrefix()}/>
            </div>
        </div>
        <div className="app-rating-block flex-col">
            <div className="flex">
                <div className="app-rating-value flex flex-col">4.7
                    <img src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-android.png" className="app-rating-stars" />
                </div>
                <div className='app-rating-platform'>  
                    play <br /> store
                </div>
            </div>
            <div className="non-mobile">
                <Button buttonText="Download the app" customClass="app-rating-button" prefix={getAndroidPrefix()}/>
            </div>
        </div>
        <div className="only-mobile">
            <Button buttonText="Download the app"/>
        </div>
    </div>
  )
}

export default AppRating