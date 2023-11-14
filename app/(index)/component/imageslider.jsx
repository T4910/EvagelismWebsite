'use client'
import Image from "next/image"
import { useRef, useEffect } from "react"

const imageslider = ({ source }) => {
  const containerRef = useRef(null);
    useEffect(() => {
        const container = containerRef.current;
        let startX, startY, scrollDir, interval
        let scrollAmount = 1
        let time = 20

        const handleScroll = () => {
            // Reach endpoint while scrolling to right
            if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 1) { // subtracting minus 1 for a small edge case
                // Clone, delete and add cloned first item to the end
                const content = container.firstElementChild.cloneNode(true);
                container.removeChild(container.firstElementChild)
                container.appendChild(content);
                
                // Reset the scroll position to maintain the illusion of infinite scrolling 
                container.scrollLeft = container.scrollLeft - container.firstElementChild.clientWidth;
            }

            // React endpoint while scrolling to left
            if (container.scrollLeft  <= 2) {
                // Clone, delete and add cloned last item to the start
                console.log('cloning... on the left side')
                const lastChild = container.lastElementChild.cloneNode(true);
                container.removeChild(container.lastElementChild);
                container.insertBefore(lastChild, container.firstElementChild);
            
                // Reset the scroll position to maintain the illusion of infinite scrolling
                container.scrollLeft = lastChild.clientWidth;
            }
        }; 

        const recordTouchLocation = (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;

            scrollAmount = 0 // stop auto scroll
        }

        const checkHorziontalDir = (e) => {
            // to check if user did a horizontal scroll
            const deltaX = e.touches[0].clientX - startX;
            const deltaY = e.touches[0].clientY - startY;

            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                (deltaX > 0) ? scrollDir = -0.5 : scrollDir = 1;
            }
        }

        const resumeScrollVelocity = () => {scrollAmount = scrollDir}

        const startAutoScroll = () => {    
            container.addEventListener('scroll', handleScroll, {passive: true});            
            container.addEventListener('touchstart', recordTouchLocation, {passive: true});             
            container.addEventListener('touchmove', checkHorziontalDir, {passive: true});
            container.addEventListener('touchend', resumeScrollVelocity, {passive: true});

            interval = setInterval(() => {
                container.scrollLeft += scrollAmount
            }, time); // Adjust speed
        };

        const stopAutoScroll = () => {
            container.removeEventListener('scroll', handleScroll);
            container.removeEventListener('touchstart', recordTouchLocation);             
            container.removeEventListener('touchmove', checkHorziontalDir);
            container.removeEventListener('touchend', resumeScrollVelocity);
            clearInterval(interval);
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries[0].isIntersecting ? startAutoScroll() : stopAutoScroll();
        })
        observer.observe(containerRef.current)
  
        // Clean up the interval event listener when the component unmounts    
        return () => stopAutoScroll();
    }, [])



  return (
    <div className="flex items-center overflow-x-auto h-[28rem] px-12 transition-transform duration-300 ease-in-out" ref={containerRef}>
        {source.map(({src, serial}) => (
            <Image
              key={serial}
              src={src}
            //   ${ serial == 3 ? 'scale-100' : (serial == 2 || serial == 4) ? 'scale-90' : 'scale-75'}
              className={`box-border w-72 h-96 rounded-xl scale-75`}
              width={300}
              height={300}
            />
        ))}
    </div>
  )
}

export default imageslider

