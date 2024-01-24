export const ProgressCircle = ({ progress, size }) => {
    
    // multiply the progress by 360 to get the angle of progress
    const angle = progress * 360;
  return (
    <div 
        style={{
            background: `radial-gradient(white 55%, transparent 56%),
                conic-gradient(transparent 0deg ${angle}deg, #FFA500 ${angle}deg 360deg),
                #0E977B`,
            borderRadius: "50%",
            width: `${size}px`,
            height: `${size}px`,
        }}
    >
    </div>
  )
}
