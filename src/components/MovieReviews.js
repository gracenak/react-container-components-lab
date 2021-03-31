import React from 'react'

const Review = ({ byline, headline, summary_short, link }) => {
    return (
    <div className="review" key={headline}>
        <header>
            <a className='review-link'
                href={link.url}>
            {headline}
            </a>
            <h5 className="author">By: {byline}</h5>
        </header>
        <p>{summary_short}</p>
    </div>
    )
}

const MovieReviews = ({ reviews }) => {
    return (
    <div className="review-list" >
        {reviews.map(Review)}    
    </div>
    )
}

MovieReviews.defaultProps = {
    reviews: []
}


export default MovieReviews