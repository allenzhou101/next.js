import * as React from 'react'
import { noop as css } from '../helpers/noop-template'

export function Base() {
  return (
    <style>
      {css`
        :host {
          --size-gap-half: 4px;
          --size-gap: 8px;
          --size-gap-double: 16px;
          --size-gap-triple: 24px;
          --size-gap-quad: 32px;

          --size-font-small: 14px;
          --size-font: 16px;
          --size-font-big: 20px;
          --size-font-bigger: 24px;

          --color-background: #0033cc;
          --color-font: #cce0ff;
          --color-backdrop: rgba(0, 51, 204, 0.2);
          --color-border-shadow: rgba(0, 85, 255, 0.3);

          --color-title-color: #e0f0ff;
          --color-stack-h6: #a8c8ff;
          --color-stack-headline: #6699ff;
          --color-stack-subline: #4477cc;
          --color-stack-notes: #5588dd;

          --color-accents-1: #3366cc;
          --color-accents-2: #0022aa;
          --color-accents-3: #2255bb;

          --color-text-color-red-1: #ff5555;
          --color-text-background-red-1: #001a66;

          --font-stack-monospace:
            'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier,
            monospace;
          --font-stack-sans: -apple-system, 'Source Sans Pro', sans-serif;

          --color-ansi-selection: rgba(95, 126, 151, 0.48);
          --color-ansi-bg: #111111;
          --color-ansi-fg: #cccccc;

          --color-ansi-white: #777777;
          --color-ansi-black: #141414;
          --color-ansi-blue: #00aaff;
          --color-ansi-cyan: #88ddff;
          --color-ansi-green: #98ec65;
          --color-ansi-magenta: #aa88ff;
          --color-ansi-red: #ff5555;
          --color-ansi-yellow: #ffcc33;
          --color-ansi-bright-white: #ffffff;
          --color-ansi-bright-black: #777777;
          --color-ansi-bright-blue: #33bbff;
          --color-ansi-bright-cyan: #bbecff;
          --color-ansi-bright-green: #b6f292;
          --color-ansi-bright-magenta: #cebbff;
          --color-ansi-bright-red: #ff8888;
          --color-ansi-bright-yellow: #ffd966;
        }

        @media (prefers-color-scheme: dark) {
          :host {
            --color-background: #001a66;
            --color-font: #a8c8ff;
            --color-backdrop: rgb(0, 26, 102);
            --color-border-shadow: rgba(100, 170, 255, 0.2);

            --color-title-color: #cce0ff;
            --color-stack-h6: #88aaff;
            --color-stack-headline: #4466bb;
            --color-stack-notes: #7799cc;
            --color-stack-subline: #5577aa;

            --color-accents-3: #3355aa;

            --color-text-background-red-1: #001a66;
          }
        }

        .mono {
          font-family: var(--font-stack-monospace);
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin-bottom: var(--size-gap);
          font-weight: 500;
          line-height: 1.5;
        }
      `}
    </style>
  )
}
