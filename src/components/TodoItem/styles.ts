import styled from '@emotion/styled'

export const Container = styled.li`
  display: grid;
  grid-template-columns: min-content auto 1.5rem 1.5rem;
  gap: 0.375em;
  padding-block: 1.25rem;

  svg {
    cursor: pointer;
  }
`

export const Label = styled.label<{ isEditMode: boolean }>`
  cursor: ${({ isEditMode }) => !isEditMode && 'pointer'};
`

export const Input = styled.input`
  display: block;
  width: 100%;
  padding-block: 0.375em;
  font-size: 0.925rem;
  border-bottom: 1px solid darkgrey;
`

export const Typography = styled.p`
  padding-block: 0.2em;
  vertical-align: middle;
  text-overflow: ellipsis;
  white-space: nowrap;
`
