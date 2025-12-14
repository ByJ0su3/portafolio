// src/app/components/figma/ImageWithFallback.tsx
import { useState } from 'react'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4='

interface ImageWithFallbackProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackClassName?: string
}

export function ImageWithFallback({
  src,
  alt,
  className,
  style,
  fallbackClassName,
  ...rest
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false)

  if (hasError || !src) {
    return (
      <div
        className={`inline-flex items-center justify-center bg-gray-900 text-gray-500 ${fallbackClassName ?? className ?? ''}`}
        style={style}
      >
        <img
          src={ERROR_IMG_SRC}
          alt="Image not available"
          className="w-12 h-12 opacity-60"
        />
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      loading="lazy"
      decoding="async"
      onError={() => setHasError(true)}
      {...rest}
    />
  )
}
