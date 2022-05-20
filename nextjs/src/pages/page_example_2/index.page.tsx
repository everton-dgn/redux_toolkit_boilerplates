import { useRouter } from 'next/router'
import { Example } from 'templates'
import * as S from './styles'
import * as C from 'components'

export default function PageExample2() {
  const router = useRouter()

  return (
    <S.Container as="section">
      <C.HeadPage title="Page Example 2" />

      <C.TitleSection title="Page Example 2" />

      <br />

      <C.RenderTextByBreakpoint />

      <S.BtnGroup>
        <C.Button
          fullWidth={true}
          color="blue"
          size="large"
          text="Return"
          className="btn"
          aria-label="Return"
          onClick={() => router.push('/')}
          onMouseEnter={() => router.prefetch('/')}
        />
      </S.BtnGroup>
    </S.Container>
  )
}

PageExample2.Template = Example
