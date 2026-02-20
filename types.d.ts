declare module 'react-google-recaptcha-v3' {
  import { ReactNode, FC } from 'react'

  interface GoogleReCaptchaProviderProps {
    reCaptchaKey: string
    language?: string
    useRecaptchaNet?: boolean
    useEnterprise?: boolean
    scriptProps?: {
      nonce?: string
      defer?: boolean
      async?: boolean
      appendTo?: 'head' | 'body'
      id?: string
    }
    container?: {
      element?: string | HTMLElement
      parameters?: {
        badge?: 'bottomright' | 'bottomleft' | 'inline'
        theme?: 'light' | 'dark'
      }
    }
    children: ReactNode
  }

  export const GoogleReCaptchaProvider: FC<GoogleReCaptchaProviderProps>

  export function useGoogleReCaptcha(): {
    executeRecaptcha: ((action?: string) => Promise<string>) | undefined
  }
}
