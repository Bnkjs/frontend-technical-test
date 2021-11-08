import renderer from 'react-test-renderer';
import { Button } from "./Button"

describe('should render correctly Button', () =>{
 const component = renderer.create(<Button/>)
 const tree = component.toJSON()
 expect(tree).toMatchSnapshot()
})
