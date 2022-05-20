import { useRouter } from 'next/router'
import { Example } from 'templates'
import * as S from './styles'
import * as C from 'components'

export default function PageExample1() {
  const router = useRouter()

  return (
    <S.Container as="section">
      <C.HeadPage title="Page Example 1" />

      <C.TitleSection title="Page Example 1" />

      <br />

      <C.TitleAnimation />

      <S.Column>
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
      </S.Column>
    </S.Container>
  )
}

PageExample1.Template = Example
