import { useCallback, useRef } from 'react'
import { useRouter } from 'next/router'
import { useExampleAsyncThunk } from 'store/exampleAsyncThunk'
import { Example } from 'templates'
import * as S from './styles'
import * as C from 'components'

export default function PageExample5() {
  const router = useRouter()
  const refInput = useRef<HTMLInputElement>(null)
  const { exampleAsyncThunk, setFetchRepositories } = useExampleAsyncThunk()

  const searchRepositories = useCallback(() => {
    const user = refInput.current?.value
    if (user) setFetchRepositories(user)
  }, [setFetchRepositories])

  if (exampleAsyncThunk?.isLoading) return <h1>loading...</h1>

  return (
    <S.Container as="section">
      <C.HeadPage title="Page Example 5" />
      <C.TitleSection title="Search Github Repositories" />
      <C.TitleSection title="with createAsyncThunk" />

      <S.WrapperRepositories>
        {exampleAsyncThunk?.repositories?.map(repository => (
          <span key={repository.name}>{repository.name}</span>
        ))}

        {exampleAsyncThunk?.error && <b>{exampleAsyncThunk.error}</b>}
      </S.WrapperRepositories>

      <br />

      <C.Input
        ref={refInput}
        name="searchRepositoriesInTheGithub"
        placeholder="User name"
        aria-describedby="User name"
      />
      <S.BtnGroup>
        <C.Button
          fullWidth={true}
          color="red"
          size="large"
          text="Search Repositories"
          className="btn"
          aria-label="Search Repositories"
          onClick={searchRepositories}
        />

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

PageExample5.Template = Example
