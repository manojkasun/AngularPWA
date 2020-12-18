import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'valk-stepper',
	templateUrl: './stepper.component.html',
	styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit {
	@Input() maxValue: any;
	@Input() minValue: any = 1;
	@Input() value: any;
	@Input() isLoading: boolean = false;
	@Input() hideInput: boolean = false;
	@Input() stepperId: string;
	@Output() changeValue: EventEmitter<any> = new EventEmitter();

	constructor() {}

	ngOnInit(): void {
		this.maxValue = Number.parseInt(this.maxValue);
		this.minValue = Number.parseInt(this.minValue);
		this.value = Number.parseInt(this.value);
	}

	/**
	 * Handle the input change: convert the value to number and call checkAndEmitValue
	 * @param event any - the input change event
	 * @return void
	 */
	inputChange(event: any): void {
		let value = Number.parseInt(event.target.value);
		this.checkAndEmitValue(value);
	}

	/**
	 * Call checkAndEmitValue with the current value increased by one
	 * @return void
	 */
	increaseValue(): void {
		this.checkAndEmitValue(this.value + 1);
	}

	/**
	 * Call checkAndEmitValue with the current value decreased by one
	 * @return void
	 */
	decreaseValue(): void {
		this.checkAndEmitValue(this.value - 1);
	}

	/**
	 * Check if the value parameter is allowed to be set as the new value
	 * - If allowed to be set: change the value and emit the change
	 * - If not allowed to be set: change the value to the nearest safeguard and emit the change
	 * @param any value - the numeric value to be set as the new value
	 * @return void
	 */
	private checkAndEmitValue(value: any): void {
		if (value !== value || value === undefined || value === null) {
			// NOTE: Check value against itself to check if its NaN, since NaN is the only JS value unequal to itself.
			value = this.minValue;
		}
		if (value > this.maxValue) {
			value = this.maxValue;
		}
		if (value < this.minValue) {
			value = this.minValue;
		}
		this.value = Number(value);
		this.changeValue.emit(this.value);
	}
}
