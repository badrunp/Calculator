import actions from "./actions";
import evaluate from "./helper/evaluate";

const reducer = function (state, { type, payload }) {
  switch (type) {
    case actions.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: payload.digit,
        };
      }
      if (payload.digit == "0" && state.currentOperand == "0") return state;
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };
    case actions.CHOOSE_OPERAND:
      if (state.currentOperand == null && state.previousOperand == null)
        return state;
      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload.operation,
        };
      }
      if (state.previousOperand == null) {
        return {
          ...state,
          currentOperand: null,
          previousOperand: state.currentOperand,
          operation: payload.operation,
        };
      }
      return {
        ...state,
        operation: payload.operation,
        currentOperand: null,
        previousOperand: evaluate(state),
      };
    case actions.REMOVE_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: null,
          previousOperand: null,
        };
      }
      if (state.currentOperand == null) return state;
      if (state.currentOperand.length == 1) {
        return {
          ...state,
          currentOperand: null,
        };
      }
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };
    case actions.EVALUATE:
      if (
        state.currentOperand == null ||
        state.previousOperand == null ||
        state.operation == null
      )
        return state;

      return {
        ...state,
        overwrite: true,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state),
      };
    case actions.CLEAR:
      return {};
  }
};

export default reducer;
