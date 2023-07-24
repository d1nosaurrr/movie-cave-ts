import * as MovieActionsCreators from './movie';
import * as MovieInfoActionsCreators from './movie-info';

export default {
  ...MovieActionsCreators,
  ...MovieInfoActionsCreators,
};
