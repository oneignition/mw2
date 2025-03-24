"use client"

import { useState, useEffect } from "react"

export function useMobile() {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [platform, setPlatform] = useState<"web" | "ios" | "android">("web")

  useEffect(() => {
    const isDevelopment = process.env.NODE_ENV === 'development'
    if (isDevelopment) {
      setPlatform('web')
      setIsMobile(true) 
      return
    }

    // Only check for mobile app environment in production
    if (!isDevelopment) {
      const isCapacitor = typeof (window as any).Capacitor !== "undefined"
      const userAgent = navigator.userAgent.toLowerCase()

      if (isCapacitor) {
        setPlatform((window as any).Capacitor.getPlatform())
        setIsMobile(true)
      } else if (userAgent.includes('iphone') || userAgent.includes('ipad')) {
        setPlatform('ios')
        setIsMobile(true)
      } else if (userAgent.includes('android')) {
        setPlatform('android')
        setIsMobile(true)
      }
    }
  }, [])

  return { isMobile, platform }
}