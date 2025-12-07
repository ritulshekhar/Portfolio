// hooks/useMediaQuery.ts
"use client"
import { useState, useEffect } from "react"
import { getMediaQueryStore } from "../utils/getMediaQueryStore"

// Generic hook: pass any valid media query string
export function useMediaQuery(query: string) {
  const store = getMediaQueryStore(query)
  const [isMatch, setIsMatch] = useState(false) // Always start false to match server

  useEffect(() => {
    // Only update to actual value on client
    setIsMatch(store.isMatch)

    const onChange = () => setIsMatch(store.isMatch)
    store.subs.add(onChange)
    return () => {
      store.subs.delete(onChange)
    }
  }, [store])

  return isMatch
}

// Convenience shims mirroring your API
export function useIsMobile(bp = 768, fn?: () => void) {
  const isMobile = useMediaQuery(`(max-width: ${bp - 0.1}px)`)
  if (isMobile && fn) fn()
  return isMobile
}
export function useTouch() {
  return useMediaQuery(`(any-hover: none) and (any-pointer: coarse)`)
}
