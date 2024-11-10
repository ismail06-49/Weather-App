import { useRef } from "react"

export default function HorizontalScrol({ children, className, style }) {
    
    const scrollRef = useRef();

    function handleMouseDown(e) {

        const oldX = e.pageX;
        const scrollLeft = scrollRef.current.scrollLeft

        const handleMouseMove = (e) => {
            const newX = e.pageX;
            const offset = newX - oldX;

            scrollRef.current.scrollLeft = scrollLeft - offset;
        }

        const handleMouseUp = () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mouseup', handleMouseUp)
        }

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    }

    return (
        <div className={className} style={style} ref={scrollRef} onMouseDown={handleMouseDown}>
            {children}
        </div>
    )
}