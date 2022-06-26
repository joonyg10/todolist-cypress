import * as S from './styles'

interface IProps {
  id: string
  checked: boolean
  onChange: (...args: any[]) => void
}

export const Checkbox = ({ id, checked, onChange }: IProps) => {
  return (
    <S.Container>
      <input id={id} checked={checked} type="checkbox" onChange={onChange} />
      <S.CustomCheckBox />
    </S.Container>
  )
}
