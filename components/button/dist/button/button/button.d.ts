import { ElementRef, EventEmitter, AfterViewInit, OnDestroy } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
export declare class ButtonDirective implements AfterViewInit, OnDestroy {
    el: ElementRef;
    iconPos: 'left' | 'right';
    cornerStyleClass: string;
    _label: string;
    _icon: string;
    initialized: boolean;
    constructor(el: ElementRef);
    ngAfterViewInit(): void;
    getStyleClass(): string;
    label: string;
    icon: string;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ButtonDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<ButtonDirective, "[pButton]", never, { "iconPos": "iconPos"; "cornerStyleClass": "cornerStyleClass"; "label": "label"; "icon": "icon"; }, {}, never>;
}
export declare class Button {
    type: string;
    iconPos: string;
    icon: string;
    label: string;
    disabled: boolean;
    style: any;
    styleClass: string;
    onClick: EventEmitter<any>;
    onFocus: EventEmitter<any>;
    onBlur: EventEmitter<any>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<Button, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<Button, "p-button", never, { "iconPos": "iconPos"; "type": "type"; "icon": "icon"; "label": "label"; "disabled": "disabled"; "style": "style"; "styleClass": "styleClass"; }, { "onClick": "onClick"; "onFocus": "onFocus"; "onBlur": "onBlur"; }, never, ["*"]>;
}
export declare class ButtonModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<ButtonModule, [typeof ButtonDirective, typeof Button], [typeof ɵngcc1.CommonModule], [typeof ButtonDirective, typeof Button]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<ButtonModule>;
}

//# sourceMappingURL=button.d.ts.map