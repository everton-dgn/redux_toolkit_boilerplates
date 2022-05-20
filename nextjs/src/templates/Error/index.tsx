import * as S from './styles'
import { ErrorProps } from './types'

export const Error = ({ children }: ErrorProps) => {
  return (
    <S.Grid>
      <h1>Template Error</h1>
      <div>{children}</div>
    </S.Grid>
  )
}
