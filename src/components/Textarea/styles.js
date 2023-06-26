import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`

export const TextareaInput= styled.textarea`
  width: 100%;
  height: 17.2rem;
  resize: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  padding: 1.4rem;
  border: none;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_500};
    font-size: 1.6rem;
  }
`