import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../app/store';
import * as fromFeature from '../reducers';
import * as fromToppings from '../reducers/toppings.reducer';

import { Topping } from '../../models/topping.model';

export const getToppingState = createSelector(
  fromFeature.getProductsState,
  (state: fromFeature.ProductsState) => state.toppings
);

export const getToppingEntities = createSelector(
  getToppingState,
  fromToppings.getToppingEntities
);

export const getSelectedToppings = createSelector(
  getToppingState,
  fromToppings.getSelectedToppings
);

export const getAllToppings = createSelector(getToppingEntities, entities => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});

export const getToppingLoaded = createSelector(
  getToppingState,
  fromToppings.getToppingLoaded
);

export const getToppingLoading = createSelector(
  getToppingState,
  fromToppings.getToppingLoading
);
