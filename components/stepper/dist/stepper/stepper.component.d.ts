import { OnInit, EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class StepperComponent implements OnInit {
    maxValue: any;
    minValue: any;
    value: any;
    isLoading: boolean;
    hideInput: boolean;
    stepperId: string;
    changeValue: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    /**
     * Handle the input change: convert the value to number and call checkAndEmitValue
     * @param event any - the input change event
     * @return void
     */
    inputChange(event: any): void;
    /**
     * Call checkAndEmitValue with the current value increased by one
     * @return void
     */
    increaseValue(): void;
    /**
     * Call checkAndEmitValue with the current value decreased by one
     * @return void
     */
    decreaseValue(): void;
    /**
     * Check if the value parameter is allowed to be set as the new value
     * - If allowed to be set: change the value and emit the change
     * - If not allowed to be set: change the value to the nearest safeguard and emit the change
     * @param any value - the numeric value to be set as the new value
     * @return void
     */
    private checkAndEmitValue;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StepperComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<StepperComponent, "valk-stepper", never, { "minValue": "minValue"; "isLoading": "isLoading"; "hideInput": "hideInput"; "maxValue": "maxValue"; "value": "value"; "stepperId": "stepperId"; }, { "changeValue": "changeValue"; }, never, never>;
}

//# sourceMappingURL=stepper.component.d.ts.map