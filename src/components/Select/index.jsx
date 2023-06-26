import { Container } from './styles';

export function Select({children, label, title, category, ...rest }){
  return(
    <Container>
      <label htmlFor={label}>{title}</label>
      <select
        id={title}
        title={title}
        name={label}
        {...rest}
      >
        {children}
      </select>
    </Container>
  )
}