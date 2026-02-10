export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.find(
        item => item.id === action.payload.id
      );

      if (existingItem) {
        // quantity increase
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // new item
      return [
        ...state,
        { ...action.payload, quantity: 1 }
      ];
    }

    case "REMOVE_FROM_CART":
      return state.filter(
        item => item.id !== action.payload
      );

    case "DECREASE_QTY":
      return state
        .map(item =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0);

    default:
      return state;
  }
};
