import React from 'react'

const Card = ({userName = "LILY", post = "Flower"}) => {
  return (
    <div>

    <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
      <img className="w-24 h-24 rounded-full mx-auto" src="https://cdn.pixabay.com/photo/2023/06/11/01/24/flowers-8055013_640.jpg" alt="" width="384" height="512"/>
      <div className="pt-6 space-y-4" >
        <blockquote>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptas nemo facilis dicta ipsam ad exercitationem saepe veritatis fugit dolore, placeat fugiat quam similique, esse accusantium, eveniet assumenda nulla at?
          </p>
        </blockquote>
        <figcaption>
          <div>
            {userName}
          </div>
          <div>
            {post}
          </div>
        </figcaption>

        </div>
 
    </figure>

 </div>
  )
}

export default Card