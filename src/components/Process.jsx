import React from 'react'
import video from '../components/image/video.mkv'
const Process = () => {
  return (
    <div>
         <video className="h-full w-full rounded-lg" controls autoPlay>
      <source src={video} type="video/mkv" />
      Your browser does not support the video tag.
    </video>

    </div>
  )
}

export default Process