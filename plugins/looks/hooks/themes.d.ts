import type { makeColors } from './make-colors.js'

/** Where a look adapted from a VS Code theme comes from. */
export type Credit = {
  /** The Marketplace extension, `publisher.name`. */
  extension: string
  /** The extension's publisher. */
  author: string
  /** The GitHub repository the theme lives in, `owner/name`. */
  repo: string
  /** The repository's license, as an SPDX id. */
  license: string
}

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
  /** Present on looks adapted from a VS Code theme. */
  credit?: Credit
}

export const LOOKS: readonly Look[]
