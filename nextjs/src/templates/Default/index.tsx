import * as S from './styles'
import { DefaultProps } from './types'

export const Default = ({ children }: DefaultProps) => {
  return (
    <S.Grid>
      <h1>Template Default</h1>
      <div>{children}</div>
    </S.Grid>
  )
}
