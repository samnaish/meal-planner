import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Configure Enzyme to use React 16 bindings
configure({ adapter: new Adapter() });
