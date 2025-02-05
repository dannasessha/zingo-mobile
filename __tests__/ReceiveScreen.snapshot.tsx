/**
 * @format
 */

import 'react-native';
import React from 'react';

import { create } from 'react-test-renderer';
import ReceiveScreen from '../components/ReceiveScreen';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
    FontAwesomeIcon: ''
}))
jest.mock('react-native-tab-view', () => ({
    TabView: '',
    TabBar: ''
}))
jest.useFakeTimers();

// test suite
describe("Component ReceiveScreen - test", () => {
  //snapshot test
  test("ReceiveScreen - snapshot", () => {
    const receiveScreen = create(<ReceiveScreen info={null} addresses={[]} toggleMenuDrawer={() => {}} fetchTotalBalance={() => {}} startRescan={() => {}} />);
    expect(receiveScreen.toJSON()).toMatchSnapshot();
  });

});
