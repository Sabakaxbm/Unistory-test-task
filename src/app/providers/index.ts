import compose from 'compose-function';
import { withRouter } from './with-router';
import { withMetamask } from './with-metamask';

export const withProviders = compose(withRouter, withMetamask);
