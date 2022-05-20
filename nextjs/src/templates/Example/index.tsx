import * as S from './styles'
import { ExampleProps } from './types'

export const Example = ({ children }: ExampleProps) => {
  return (
    <S.Grid>
      <h1>Template Example</h1>
      <div>{children}</div>
    </S.Grid>
  )
}
