import { useRouter } from 'next/router'
import { useExampleSimple } from 'store/exampleSimple'
import { useExampleWithPayload } from 'store/exampleWithPayload'
import * as S from './styles'
import * as C from 'components'
import IconArrowUp from 'assets/icons/arrow_up.svg'
import { useThemeDetect } from 'hooks'

export default function Home() {
  const { exampleSimple, setChangeExample } = useExampleSimple()
  const { exampleWithPayload, setAddText, setRemoveText } =
    useExampleWithPayload()
  const { setTheme, showThemeToSelect } = useThemeDetect()
  const router = useRouter()

  const handleChange = (): void => {
    setChangeExample()

    exampleWithPayload
      ? setRemoveText()
      : setAddText({ exemploText: 'Example Text' })
  }

  return (
    <S.Container>
      <C.HeadPage title="Home Page" />

      <C.TitleSection title="Web Accessibility" />

      <br />

      <IconArrowUp width={50} height={50} />

      <br />

      <h1>
        Redux Example State:
        {exampleSimple ? ' true' : ' false'}
      </h1>

      <br />

      <h1>Payload: {exampleWithPayload || 'Empty'}</h1>

      <S.BtnGroup>
        <C.Button
          fullWidth={true}
          color="red"
          size="large"
          text="Change Global State"
          aria-label="Change Global State"
          className="btn"
          onClick={handleChange}
        />
      </S.BtnGroup>

      <S.BtnGroup>
        <C.Button
          fullWidth={true}
          color="blue"
          size="large"
          text="Page Example 1"
          aria-label="Page Example 1"
          className="btn"
          onClick={() => router.push('page_example_1')}
          onMouseEnter={() => router.prefetch('page_example_1')}
        />

        <C.Button
          fullWidth={true}
          color="blue"
          size="large"
          text="Page Example 2"
          aria-label="Page Example 2"
          className="btn"
          onClick={() => router.push('page_example_2')}
          onMouseEnter={() => router.prefetch('page_example_2')}
        />

        <C.Button
          fullWidth={true}
          color="blue"
          size="large"
          text="Page Example 3"
          aria-label="Page Example 3"
          className="btn"
          onClick={() => router.push('page_example_3')}
          onMouseEnter={() => router.prefetch('page_example_3')}
        />

        <C.Button
          fullWidth={true}
          color="blue"
          size="large"
          text="Page Example 4"
          aria-label="Page Example 4"
          className="btn"
          onClick={() => router.push('page_example_4')}
          onMouseEnter={() => router.prefetch('page_example_4')}
        />

        <C.Button
          fullWidth={true}
          color="blue"
          size="large"
          text="Page Example 5"
          aria-label="Page Example 5"
          className="btn"
          onClick={() => router.push('page_example_5')}
          onMouseEnter={() => router.prefetch('page_example_5')}
        />

        <C.Button
          fullWidth={true}
          color="red"
          size="large"
          text={`Theme ${showThemeToSelect}`}
          aria-label={`Theme ${showThemeToSelect}`}
          className="btn"
          onClick={setTheme}
        />
      </S.BtnGroup>
    </S.Container>
  )
}
