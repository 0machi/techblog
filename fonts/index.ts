import localFont from 'next/font/local'

export const JP_REGULAR = localFont({
  src: './LINE/LINESeedJP_OTF_Rg.woff2',
  display: 'swap',
  variable: '--font-jp-regular',
})

export const JP_BOLD = localFont({
  src: './LINE/LINESeedJP_OTF_Bd.woff2',
  display: 'swap',
  variable: '--font-jp-bold',
})

export const JP_EXTRA_BOLD = localFont({
  src: './LINE/LINESeedJP_OTF_Eb.woff2',
  display: 'swap',
  variable: '--font-jp-extra-bold',
})

export const fontVariables = [JP_REGULAR.variable, JP_BOLD.variable, JP_EXTRA_BOLD.variable]

export const font = {
  JP_REGULAR: 'font-jp-regular',
  JP_BOLD: 'font-jp-bold',
  JP_EXTRA_BOLD: 'font-jp-extra-bold',
}
