declare module 'react-google-recaptcha' {
  import { Component, RefObject } from 'react'

  interface ReCAPTCHAProps {
    sitekey: string
    onChange?: (token: string | null) => void
    onExpired?: () => void
    onErrored?: () => void
    theme?: 'light' | 'dark'
    size?: 'compact' | 'normal' | 'invisible'
    tabindex?: number
    badge?: 'bottomright' | 'bottomleft' | 'inline'
    hl?: string
  }

  export default class ReCAPTCHA extends Component<ReCAPTCHAProps> {
    reset(): void
    execute(): void
    executeAsync(): Promise<string>
    getValue(): string | null
    getWidgetId(): number
  }
}

