import { EventEmitter, ChangeDetectorRef } from '@angular/core';
import { SelectItem } from '../common/selectitem';
import { ControlValueAccessor } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
export declare const SELECTBUTTON_VALUE_ACCESSOR: any;
export declare class SelectButton implements ControlValueAccessor {
    private cd;
    tabindex: number;
    multiple: boolean;
    style: any;
    styleClass: string;
    disabled: boolean;
    dataKey: string;
    optionLabel: string;
    onOptionClick: EventEmitter<any>;
    onChange: EventEmitter<any>;
    itemTemplate: any;
    value: any;
    focusedItem: HTMLDivElement;
    _options: any[];
    onModelChange: Function;
    onModelTouched: Function;
    constructor(cd: ChangeDetectorRef);
    options: any[];
    writeValue(value: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    setDisabledState(val: boolean): void;
    onItemClick(event: any, option: SelectItem, index: number): void;
    onFocus(event: Event): void;
    onBlur(event: any): void;
    isSelected(option: SelectItem): boolean;
    findItemIndex(option: SelectItem): number;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SelectButton, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SelectButton, "p-selectButton", never, { "tabindex": "tabindex"; "options": "options"; "disabled": "disabled"; "multiple": "multiple"; "style": "style"; "styleClass": "styleClass"; "dataKey": "dataKey"; "optionLabel": "optionLabel"; }, { "onOptionClick": "onOptionClick"; "onChange": "onChange"; }, ["itemTemplate"], never>;
}
export declare class SelectButtonModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<SelectButtonModule, [typeof SelectButton], [typeof ɵngcc1.CommonModule], [typeof SelectButton]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<SelectButtonModule>;
}

//# sourceMappingURL=selectbutton.d.ts.map