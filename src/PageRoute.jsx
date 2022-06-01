import Navigation from './components/Navigation'
import { Container } from 'reactstrap';

import './PageRoute.css'

const PageRoute = (props) => {
  return (
    <Container id='PageRouteContainer' fluid>
        <Navigation />
        {props.children}
    </Container>
  )
}

export default PageRoute
