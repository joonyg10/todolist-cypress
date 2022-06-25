import styled from '@emotion/styled'

export const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 5rem auto;
  row-gap: 2rem;
  width: 70vw;
  min-height: 80vh;
  padding: 2rem 4rem;
  border: 2px solid teal;
`

export const Heading = styled.h1`
  text-align: center;
  grid-column: 1 / -1;
`

export const TodosSection = styled.ul`
  padding: 3em 2em;
`
