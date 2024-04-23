/// <reference types="vite/client" />
/// <reference types="vite-svg-loader" />

interface ImportMetaEnv {
  readonly VITE_AUTHORIZATION_URL?: string
  readonly VITE_BASE_URL?: string
  readonly VITE_USERNAME?: string
  readonly VITE_PASSWORD?: string
  readonly VITE_BASE_URL_API?: string
  readonly VITE_POSTHOG_KEY?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
