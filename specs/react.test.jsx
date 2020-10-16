/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../client/index';

// function Fixture() {
//   return (
//     <div>
//       <input id="checked" defaultChecked />
//       <input id="not" defaultChecked={false} />
//       <input id="tertiary" defaultChecked checked={false} />
//     </div>
//   );
// }

describe('Enzyme test for App component', () => {
  it('render all linked components', () => {
    expect(shallow(<Index />).toExist()).toBe(true);
  });
});
