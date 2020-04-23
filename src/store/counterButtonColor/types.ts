/**
 * 
 * expected Data Structure
 * buttonColor: string;
 * countedNumber: number
 * 
 */ 

export interface CouterAndButtonState {
    countedNumber: number;
    buttonColor: string;
 }

//   ActionType Definitions
//   These are basically constrainst / the 'rules' that must be followed / a template
export const INCREMENT_COUNTER_VALUE = 'INCREMENT_COUNTER_VALUE';
export const DECREMENT_COUNTER_VALUE = 'DECREMENT_COUNTER_VALUE';
export const CHANGE_BUTTON_COLOR = 'CHANGE_BUTTON_COLOR';

// Action Definitions
// First two interaces don't have any payload as there are no objects getting passed

interface IncrementCounterValue {
    type: typeof INCREMENT_COUNTER_VALUE;
}

interface DecrementCounterValue {
    type: typeof DECREMENT_COUNTER_VALUE;
}

interface ChangeButtonColor {
    type: typeof CHANGE_BUTTON_COLOR;
    payload: string;
}