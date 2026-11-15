import type { makeColors } from './make-colors.js'

export type Look = {
  /** What `/look <id>` takes. */
  id: string
  /** What the list shows. */
  name: string
  mode: 'dark' | 'light'
  /** The backdrop gradient, top, middle, bottom. */
  sky: readonly [string, string, string]
  /** `makeColors`' input. */
  def: Parameters<typeof makeColors>[0]
}

export const LOOKS: readonly Look[]
