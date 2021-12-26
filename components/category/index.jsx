import { useState } from "react"
import Post from "../post"
import { TiChevronLeft, TiChevronRight } from 'react-icons/ti'
export default function CategoryPosts({ cat }) {
  const [scrollX, setScrollX] = useState(-400)

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2)
    if( x > 0 ) {
       x = 0
    }
    setScrollX(x)
  }
  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2)
    let listW = cat.post.length * 350
    if((window.innerWidth - listW) > x ) {
       x = (window.innerWidth - listW)
    }
    setScrollX(x)
  }

  return <div className='pb-5 w-full overflow-hidden relative'>
    <h2 className='font-bold text-2xl pb-2'>{cat.category}</h2>

    <div className="absolute left-0 z-10 bg-black opacity-80 h-40 w-10 flex text-center justify-center" onClick={handleLeftArrow}><TiChevronLeft className="h-full" /></div>
    <div className="absolute right-0 z-10 bg-black opacity-80 h-40 w-10 flex text-center justify-center" onClick={handleRightArrow}><TiChevronRight className="h-full" /></div>
    <div className="overflow-auto transition-all" style={{
      marginLeft: scrollX,
      width: cat.post.length * 350
    }}>
      {cat.post.map(p => {
        return <div key={p.slug} className='inline-block' style={{
          width: '350px'
        }}>
          <Post post={p} />
        </div>
      })}
    </div>
  </div>
}