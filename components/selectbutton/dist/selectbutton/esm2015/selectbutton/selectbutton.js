/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, Component, Input, Output, EventEmitter, forwardRef, ChangeDetectorRef, ContentChild, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectUtils } from '../utils/objectutils';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
/** @type {?} */
export const SELECTBUTTON_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => SelectButton)),
    multi: true
};
export class SelectButton {
    /**
     * @param {?} cd
     */
    constructor(cd) {
        this.cd = cd;
        this.tabindex = 0;
        this.onOptionClick = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onModelChange = (/**
         * @return {?}
         */
        () => { });
        this.onModelTouched = (/**
         * @return {?}
         */
        () => { });
    }
    /**
     * @return {?}
     */
    get options() {
        return this._options;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set options(val) {
        /** @type {?} */
        let opts = this.optionLabel ? ObjectUtils.generateSelectItems(val, this.optionLabel) : val;
        this._options = opts;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
        this.cd.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onModelTouched = fn;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    setDisabledState(val) {
        this.disabled = val;
    }
    /**
     * @param {?} event
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    onItemClick(event, option, index) {
        if (this.disabled || option.disabled) {
            return;
        }
        if (this.multiple) {
            /** @type {?} */
            let itemIndex = this.findItemIndex(option);
            if (itemIndex != -1)
                this.value = this.value.filter((/**
                 * @param {?} val
                 * @param {?} i
                 * @return {?}
                 */
                (val, i) => i != itemIndex));
            else
                this.value = [...this.value || [], option.value];
        }
        else {
            this.value = option.value;
        }
        this.onOptionClick.emit({
            originalEvent: event,
            option: option,
            index: index
        });
        this.onModelChange(this.value);
        this.onChange.emit({
            originalEvent: event,
            value: this.value
        });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onFocus(event) {
        this.focusedItem = (/** @type {?} */ (event.target));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onBlur(event) {
        this.focusedItem = null;
        this.onModelTouched();
    }
    /**
     * @param {?} option
     * @return {?}
     */
    isSelected(option) {
        if (this.multiple)
            return this.findItemIndex(option) != -1;
        else
            return ObjectUtils.equals(option.value, this.value, this.dataKey);
    }
    /**
     * @param {?} option
     * @return {?}
     */
    findItemIndex(option) {
        /** @type {?} */
        let index = -1;
        if (this.value) {
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == option.value) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    }
}
SelectButton.decorators = [
    { type: Component, args: [{
                selector: 'p-selectButton',
                template: `
        <div [ngClass]="'ui-selectbutton ui-buttonset ui-widget ui-corner-all ui-buttonset-' + (options ? options.length : 0)" [ngStyle]="style" [class]="styleClass">
            <div *ngFor="let option of options; let i = index" #btn class="ui-button ui-widget ui-state-default ui-button-text-only {{option.styleClass}}"
                [ngClass]="{'ui-state-active':isSelected(option), 'ui-state-disabled': disabled || option.disabled, 'ui-state-focus': btn == focusedItem, 
                'ui-button-text-icon-left': (option.icon != null), 'ui-button-icon-only': (option.icon && !option.label)}" (click)="onItemClick($event,option,i)" (keydown.enter)="onItemClick($event,option,i)"
                [attr.title]="option.title" [attr.aria-label]="option.label" (focus)="onFocus($event)" (blur)="onBlur($event)" [attr.tabindex]="tabindex">
                <ng-container *ngIf="!itemTemplate else customcontent">
                    <span [ngClass]="['ui-clickable', 'ui-button-icon-left']" [class]="option.icon" *ngIf="option.icon"></span>
                    <span class="ui-button-text ui-clickable">{{option.label||'ui-btn'}}</span>
                </ng-container>
                <ng-template #customcontent>
                    <ng-container *ngTemplateOutlet="itemTemplate; context: {$implicit: option, index: i}"></ng-container>
                </ng-template>
            </div>
        </div>
    `,
                providers: [SELECTBUTTON_VALUE_ACCESSOR]
            }] }
];
/** @nocollapse */
SelectButton.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
SelectButton.propDecorators = {
    tabindex: [{ type: Input }],
    multiple: [{ type: Input }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    disabled: [{ type: Input }],
    dataKey: [{ type: Input }],
    optionLabel: [{ type: Input }],
    onOptionClick: [{ type: Output }],
    onChange: [{ type: Output }],
    itemTemplate: [{ type: ContentChild, args: [TemplateRef, { static: false },] }],
    options: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SelectButton.prototype.tabindex;
    /** @type {?} */
    SelectButton.prototype.multiple;
    /** @type {?} */
    SelectButton.prototype.style;
    /** @type {?} */
    SelectButton.prototype.styleClass;
    /** @type {?} */
    SelectButton.prototype.disabled;
    /** @type {?} */
    SelectButton.prototype.dataKey;
    /** @type {?} */
    SelectButton.prototype.optionLabel;
    /** @type {?} */
    SelectButton.prototype.onOptionClick;
    /** @type {?} */
    SelectButton.prototype.onChange;
    /** @type {?} */
    SelectButton.prototype.itemTemplate;
    /** @type {?} */
    SelectButton.prototype.value;
    /** @type {?} */
    SelectButton.prototype.focusedItem;
    /** @type {?} */
    SelectButton.prototype._options;
    /** @type {?} */
    SelectButton.prototype.onModelChange;
    /** @type {?} */
    SelectButton.prototype.onModelTouched;
    /**
     * @type {?}
     * @private
     */
    SelectButton.prototype.cd;
}
export class SelectButtonModule {
}
SelectButtonModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                exports: [SelectButton],
                declarations: [SelectButton]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0YnV0dG9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGJpdC9zZWxlY3RidXR0b24vIiwic291cmNlcyI6WyJzZWxlY3RidXR0b24vc2VsZWN0YnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLFlBQVksRUFBQyxVQUFVLEVBQUMsaUJBQWlCLEVBQUMsWUFBWSxFQUFDLFdBQVcsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNqSSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFN0MsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxpQkFBaUIsRUFBdUIsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFdkUsTUFBTSxPQUFPLDJCQUEyQixHQUFRO0lBQzlDLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLEdBQUcsRUFBRSxDQUFDLFlBQVksRUFBQztJQUMzQyxLQUFLLEVBQUUsSUFBSTtDQUNaO0FBc0JELE1BQU0sT0FBTyxZQUFZOzs7O0lBZ0NyQixZQUFvQixFQUFxQjtRQUFyQixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQTlCaEMsYUFBUSxHQUFXLENBQUMsQ0FBQztRQWNwQixrQkFBYSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXRELGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQVUzRCxrQkFBYTs7O1FBQWEsR0FBRyxFQUFFLEdBQUUsQ0FBQyxFQUFDO1FBRW5DLG1CQUFjOzs7UUFBYSxHQUFHLEVBQUUsR0FBRSxDQUFDLEVBQUM7SUFFUSxDQUFDOzs7O0lBRTdDLElBQWEsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCxJQUFJLE9BQU8sQ0FBQyxHQUFVOztZQUNkLElB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ZHVsZSxDb21wb25lbnQsSW5wdXQsT3V0cHV0LEV2ZW50RW1pdHRlcixmb3J3YXJkUmVmLENoYW5nZURldGVjdG9yUmVmLENvbnRlbnRDaGlsZCxUZW1wbGF0ZVJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7U2VsZWN0SXRlbX0gZnJvbSAnLi4vY29tbW9uL3NlbGVjdGl0ZW0nO1xuaW1wb3J0IHtPYmplY3RVdGlsc30gZnJvbSAnLi4vdXRpbHMvb2JqZWN0dXRpbHMnO1xuaW1wb3J0IHtOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3J9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGNvbnN0IFNFTEVDVEJVVFRPTl9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU2VsZWN0QnV0dG9uKSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncC1zZWxlY3RCdXR0b24nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgW25nQ2xhc3NdPVwiJ3VpLXNlbGVjdGJ1dHRvbiB1aS1idXR0b25zZXQgdWktd2lkZ2V0IHVpLWNvcm5lci1hbGwgdWktYnV0dG9uc2V0LScgKyAob3B0aW9ucyA/IG9wdGlvbnMubGVuZ3RoIDogMClcIiBbbmdTdHlsZV09XCJzdHlsZVwiIFtjbGFzc109XCJzdHlsZUNsYXNzXCI+XG4gICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBvcHRpb24gb2Ygb3B0aW9uczsgbGV0IGkgPSBpbmRleFwiICNidG4gY2xhc3M9XCJ1aS1idXR0b24gdWktd2lkZ2V0IHVpLXN0YXRlLWRlZmF1bHQgdWktYnV0dG9uLXRleHQtb25seSB7e29wdGlvbi5zdHlsZUNsYXNzfX1cIlxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsndWktc3RhdGUtYWN0aXZlJzppc1NlbGVjdGVkKG9wdGlvbiksICd1aS1zdGF0ZS1kaXNhYmxlZCc6IGRpc2FibGVkIHx8IG9wdGlvbi5kaXNhYmxlZCwgJ3VpLXN0YXRlLWZvY3VzJzogYnRuID09IGZvY3VzZWRJdGVtLCBcbiAgICAgICAgICAgICAgICAndWktYnV0dG9uLXRleHQtaWNvbi1sZWZ0JzogKG9wdGlvbi5pY29uICE9IG51bGwpLCAndWktYnV0dG9uLWljb24tb25seSc6IChvcHRpb24uaWNvbiAmJiAhb3B0aW9uLmxhYmVsKX1cIiAoY2xpY2spPVwib25JdGVtQ2xpY2soJGV2ZW50LG9wdGlvbixpKVwiIChrZXlkb3duLmVudGVyKT1cIm9uSXRlbUNsaWNrKCRldmVudCxvcHRpb24saSlcIlxuICAgICAgICAgICAgICAgIFthdHRyLnRpdGxlXT1cIm9wdGlvbi50aXRsZVwiIFthdHRyLmFyaWEtbGFiZWxdPVwib3B0aW9uLmxhYmVsXCIgKGZvY3VzKT1cIm9uRm9jdXMoJGV2ZW50KVwiIChibHVyKT1cIm9uQmx1cigkZXZlbnQpXCIgW2F0dHIudGFiaW5kZXhdPVwidGFiaW5kZXhcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWl0ZW1UZW1wbGF0ZSBlbHNlIGN1c3RvbWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gW25nQ2xhc3NdPVwiWyd1aS1jbGlja2FibGUnLCAndWktYnV0dG9uLWljb24tbGVmdCddXCIgW2NsYXNzXT1cIm9wdGlvbi5pY29uXCIgKm5nSWY9XCJvcHRpb24uaWNvblwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1aS1idXR0b24tdGV4dCB1aS1jbGlja2FibGVcIj57e29wdGlvbi5sYWJlbHx8J3VpLWJ0bid9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI2N1c3RvbWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJpdGVtVGVtcGxhdGU7IGNvbnRleHQ6IHskaW1wbGljaXQ6IG9wdGlvbiwgaW5kZXg6IGl9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHByb3ZpZGVyczogW1NFTEVDVEJVVFRPTl9WQUxVRV9BQ0NFU1NPUl1cbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0QnV0dG9uIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG4gICAgQElucHV0KCkgdGFiaW5kZXg6IG51bWJlciA9IDA7XG5cbiAgICBASW5wdXQoKSBtdWx0aXBsZTogYm9vbGVhbjtcbiAgICBcbiAgICBASW5wdXQoKSBzdHlsZTogYW55O1xuICAgICAgICBcbiAgICBASW5wdXQoKSBzdHlsZUNsYXNzOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIGRhdGFLZXk6IHN0cmluZ1xuICAgIFxuICAgIEBJbnB1dCgpIG9wdGlvbkxhYmVsOiBzdHJpbmc7XG4gICAgXG4gICAgQE91dHB1dCgpIG9uT3B0aW9uQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBDb250ZW50Q2hpbGQoVGVtcGxhdGVSZWYsIHsgc3RhdGljOiBmYWxzZSB9KSBpdGVtVGVtcGxhdGU7XG4gICAgXG4gICAgdmFsdWU6IGFueTtcbiAgICBcbiAgICBmb2N1c2VkSXRlbTogSFRNTERpdkVsZW1lbnQ7XG4gICAgXG4gICAgX29wdGlvbnM6IGFueVtdO1xuICAgIFxuICAgIG9uTW9kZWxDaGFuZ2U6IEZ1bmN0aW9uID0gKCkgPT4ge307XG4gICAgXG4gICAgb25Nb2RlbFRvdWNoZWQ6IEZ1bmN0aW9uID0gKCkgPT4ge307XG4gICAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG4gICAgXG4gICAgQElucHV0KCkgZ2V0IG9wdGlvbnMoKTogYW55W10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fb3B0aW9ucztcbiAgICB9XG5cbiAgICBzZXQgb3B0aW9ucyh2YWw6IGFueVtdKSB7XG4gICAgICAgIGxldCBvcHRzID0gdGhpcy5vcHRpb25MYWJlbCA/IE9iamVjdFV0aWxzLmdlbmVyYXRlU2VsZWN0SXRlbXModmFsLCB0aGlzLm9wdGlvbkxhYmVsKSA6IHZhbDtcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IG9wdHM7XG4gICAgfVxuICAgIFxuICAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSkgOiB2b2lkIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgICBcbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UgPSBmbjtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vbk1vZGVsVG91Y2hlZCA9IGZuO1xuICAgIH1cbiAgICBcbiAgICBzZXREaXNhYmxlZFN0YXRlKHZhbDogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gdmFsO1xuICAgIH1cbiAgICBcbiAgICBvbkl0ZW1DbGljayhldmVudCwgb3B0aW9uOiBTZWxlY3RJdGVtLCBpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGlmKHRoaXMuZGlzYWJsZWQgfHwgb3B0aW9uLmRpc2FibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgaWYodGhpcy5tdWx0aXBsZSkge1xuICAgICAgICAgICAgbGV0IGl0ZW1JbmRleCA9IHRoaXMuZmluZEl0ZW1JbmRleChvcHRpb24pO1xuICAgICAgICAgICAgaWYoaXRlbUluZGV4ICE9IC0xKVxuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlLmZpbHRlcigodmFsLGkpID0+IGkhPWl0ZW1JbmRleCk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IFsuLi50aGlzLnZhbHVlfHxbXSwgb3B0aW9uLnZhbHVlXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBvcHRpb24udmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMub25PcHRpb25DbGljay5lbWl0KHtcbiAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgb3B0aW9uOiBvcHRpb24sXG4gICAgICAgICAgICBpbmRleDogaW5kZXhcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoe1xuICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgb25Gb2N1cyhldmVudDogRXZlbnQpIHtcbiAgICAgICAgdGhpcy5mb2N1c2VkSXRlbSA9IDxIVE1MRGl2RWxlbWVudD4gZXZlbnQudGFyZ2V0O1xuICAgIH1cbiAgICBcbiAgICBvbkJsdXIoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5mb2N1c2VkSXRlbSA9IG51bGw7XG4gICAgICAgIHRoaXMub25Nb2RlbFRvdWNoZWQoKTtcbiAgICB9XG4gICAgXG4gICAgaXNTZWxlY3RlZChvcHRpb246IFNlbGVjdEl0ZW0pIHtcbiAgICAgICAgaWYodGhpcy5tdWx0aXBsZSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZpbmRJdGVtSW5kZXgob3B0aW9uKSAhPSAtMTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdFV0aWxzLmVxdWFscyhvcHRpb24udmFsdWUsIHRoaXMudmFsdWUsIHRoaXMuZGF0YUtleSk7XG4gICAgfVxuICAgIFxuICAgIGZpbmRJdGVtSW5kZXgob3B0aW9uOiBTZWxlY3RJdGVtKSB7XG4gICAgICAgIGxldCBpbmRleCA9IC0xO1xuICAgICAgICBpZih0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy52YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmKHRoaXMudmFsdWVbaV0gPT0gb3B0aW9uLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gICAgZXhwb3J0czogW1NlbGVjdEJ1dHRvbl0sXG4gICAgZGVjbGFyYXRpb25zOiBbU2VsZWN0QnV0dG9uXVxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RCdXR0b25Nb2R1bGUgeyB9XG4iXX0=