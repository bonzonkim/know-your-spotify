import styled from '@emotion/styled';
import Header from './Header';

const LayoutStyle = styled.div`
`

const Layout = (props) => {
  return (
    <LayoutStyle>
        <Header />
         {props.children}
    </LayoutStyle>
  )
}

export default Layout;
