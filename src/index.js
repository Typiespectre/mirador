import { initViewer } from './init';
import * as actions from './state/actions';
import * as selectors from './state/selectors';

export * from './components';
export * from './state/reducers';

const exports = {
  viewer: initViewer,
  actions,
  selectors,
};

export default exports;
