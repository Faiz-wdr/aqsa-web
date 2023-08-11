import React from 'react'
import './Blogs.css'
import Footer from '../Components/Footer'

function Blogs() {
  return (
    <div>
    <div className="blog-section" id='Blogs'>
    <h2 className="blog-heading">Blogs</h2>
    {/* <p className="blog-description">One line description</p> */}
    <div className='frame'>
    <iframe className='iframe' src='https://widgets.sociablekit.com/medium-publication-feed/iframe/178982' frameborder='0'  height='1000'></iframe>
    </div>
   
</div>
 <div className='ftr'>
  <Footer />
</div>
    </div>
  )
}

export default Blogs