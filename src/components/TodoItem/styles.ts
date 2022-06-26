import styled from '@emotion/styled'

export const Container = styled.label`
  display: grid;
  grid-template-columns: min-content auto 1.5rem 1.5rem;
  gap: 0.375em;
  padding-block: 1.25rem;

  svg {
    cursor: pointer;
  }
`

export const Input = styled.input`
  border-bottom: 1px solid lightgray;
`

export const Typography = styled.p`
  padding-block: 0.2em;
  vertical-align: middle;
  text-overflow: ellipsis;
  white-space: nowrap;
`
