import React from 'react'
import Button from '../utility/Button';

const LeftContent = () => {
    return (
        <div>
            <h2>Discover. Collect. &amp; Sell. Extraordinary</h2>
            <span>NFT&apos;s</span>
            <p>On the world&apos;s first & largest NFT marketplace.</p>
            <div className="buttons">
                <Button styleClass={`explore`}>Explore</Button>
                <Button styleClass={`create`}>Create</Button>
            </div>
            <a href='#FIXME' title='Get Featured On The Homepage'>Get Featured On The Homepage</a>
        </div>
    )
}

export default LeftContent;