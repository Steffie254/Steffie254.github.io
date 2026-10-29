// Prefix public assets with the base path (needed when hosted at github.io/<repo>).
export const asset = (p: string) => `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${p}`
