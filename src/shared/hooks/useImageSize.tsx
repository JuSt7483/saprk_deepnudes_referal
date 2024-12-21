import useResizeObserver from "@react-hook/resize-observer"
import { useState, useLayoutEffect } from "react"

const useImageSize = (target: React.MutableRefObject<HTMLImageElement | null>) => {
  const [size, setSize] = useState<{ width: number; height: number; }>()

  useLayoutEffect(() => {
    if(target.current)
      setSize({
        width: target.current?.clientWidth,
        height: target.current?.clientHeight
      })
  }, [target])

  // Where the magic happens
  useResizeObserver(target, (entry) => setSize({
    width: entry.contentRect.width,
    height: entry.contentRect.height
  }))
  return size
}

export { useImageSize };