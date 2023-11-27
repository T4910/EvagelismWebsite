'use client'
import { useInView } from "react-intersection-observer"
import { useState, useEffect } from "react"

const InView = ({children, bfStyle, afStyle, delay}) => {
    const [loaded, setLoaded] = useState(false)
    const [ override, setOverride ] = useState(true)
    let {ref: divRef, inView} = useInView({ threshold: 0.35, triggerOnce: true })

    // this is to check if inview is working has loaded in
    useEffect(() =>{
        setLoaded(true)
        if(inView == true){
            setOverride(false)
            setTimeout(() => setOverride(true), delay)
    }}, [inView])

  return (
      <div ref={divRef} className={`${(!loaded || override && inView) ? afStyle ?? 'opacity-100 translate-y-0 transition-all duration-500' : bfStyle ?? 'opacity-0 translate-y-10'} `}>
          {children}
      </div>    
    )
}

export default InView