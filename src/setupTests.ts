import '@testing-library/jest-dom';
import { vi } from 'vitest'

if (!('matchMedia' in window)) {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),            
      removeListener: vi.fn(),         
      addEventListener: vi.fn(),       
      removeEventListener: vi.fn(),    
      dispatchEvent: vi.fn(),
    })),
  })
}

class ResizeObserverMock {
  observe = vi.fn()
  unobserve = vi.fn()
  disconnect = vi.fn()
}
if (!('ResizeObserver' in window)) {
  // @ts-expect-error: jsdom
  window.ResizeObserver = ResizeObserverMock
}

if (!('scrollTo' in window)) {
  // @ts-expect-error: jsdom
  window.scrollTo = vi.fn()
}

if (!('scrollIntoView' in HTMLElement.prototype)) {
  // @ts-expect-error: jsdom
  HTMLElement.prototype.scrollIntoView = vi.fn()
}