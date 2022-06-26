import * as S from './styles'

interface IProps {
  checked: boolean
  onChange: (...args: any[]) => void
}

export const Checkbox = ({ checked, onChange }: IProps) => {
  return (
    <S.Container>
      <input checked={checked} type="checkbox" onChange={onChange} />
      <S.CustomCheckBox />
    </S.Container>
  )
}
