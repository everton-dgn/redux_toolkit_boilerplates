import type { AppProps } from 'next/app'
import { Default } from 'templates'
import { Page } from 'types/page'
import { MainProviders } from 'utils'

type Props = AppProps & { Component: Page }

export default function App({ Component, pageProps }: Props) {
  const Template = Component.Template || Default

  return (
    <MainProviders>
      <Template>
        <Component {...pageProps} />
      </Template>
    </MainProviders>
  )
}
