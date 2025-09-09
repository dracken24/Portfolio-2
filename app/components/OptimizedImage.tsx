'use client'

import Image from 'next/image'

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  style?: React.CSSProperties
  className?: string
}

export default function OptimizedImage({ 
  src, 
  alt, 
  width, 
  height, 
  style = {}, 
  className 
}: OptimizedImageProps) {
  // Vérifier si c'est une URL externe
  const isExternalUrl = src.startsWith('http://') || src.startsWith('https://')
  
  if (isExternalUrl) {
	// Pour les images externes, utiliser une balise img normale
	return (
	  <img 
		src={src} 
		alt={alt}
		style={{ 
		  width: `${width}px`,
		  height: `${height}px`,
		  ...style
		}}
		className={className}
	  />
	)
  }
  
  // Pour les images locales, utiliser le composant Image optimisé de Next.js
  return (
	<Image 
	  src={src} 
	  alt={alt}
	  width={width}
	  height={height}
	  style={style}
	  className={className}
	/>
  )
}
