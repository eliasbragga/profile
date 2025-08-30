/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_EMAILJS_SERVICE_ID: string
    readonly VITE_EMAILJS_TEMPLATE_ID: string
    readonly VITE_EMAILJS_PUBLIC_KEY: string
    // outras variáveis que você queira
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
  