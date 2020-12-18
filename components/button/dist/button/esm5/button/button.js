/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, Directive, Component, ElementRef, EventEmitter, Output, Input } from '@angular/core';
import { DomHandler } from '../dom/domhandler';
import { CommonModule } from '@angular/common';
var ButtonDirective = /** @class */ (function () {
    function ButtonDirective(el) {
        this.el = el;
        this.iconPos = 'left';
        this.cornerStyleClass = 'ui-corner-all';
    }
    /**
     * @return {?}
     */
    ButtonDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        DomHandler.addMultipleClasses(this.el.nativeElement, this.getStyleClass());
        if (this.icon) {
            /** @type {?} */
            var iconElement = document.createElement("span");
            iconElement.setAttribute("aria-hidden", "true");
            /** @type {?} */
            var iconPosClass = (this.iconPos == 'right') ? 'ui-button-icon-right' : 'ui-button-icon-left';
            iconElement.className = iconPosClass + ' ui-clickable ' + this.icon;
            this.el.nativeElement.appendChild(iconElement);
        }
        /** @type {?} */
        var labelElement = document.createElement("span");
        labelElement.className = 'ui-button-text ui-clickable';
        labelElement.appendChild(document.createTextNode(this.label || 'ui-btn'));
        this.el.nativeElement.appendChild(labelElement);
        this.initialized = true;
    };
    /**
     * @return {?}
     */
    ButtonDirective.prototype.getStyleClass = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var styleClass = 'ui-button ui-widget ui-state-default ' + this.cornerStyleClass;
        if (this.icon) {
            if (this.label != null && this.label != undefined) {
                if (this.iconPos == 'left')
                    styleClass = styleClass + ' ui-button-text-icon-left';
                else
                    styleClass = styleClass + ' ui-button-text-icon-right';
            }
            else {
                styleClass = styleClass + ' ui-button-icon-only';
            }
        }
        else {
            if (this.label) {
                styleClass = styleClass + ' ui-button-text-only';
            }
            else {
                styleClass = styleClass + ' ui-button-text-empty';
            }
        }
        return styleClass;
    };
    Object.defineProperty(ButtonDirective.prototype, "label", {
        get: /**
         * @return {?}
         */
        function () {
            return this._label;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._label = val;
            if (this.initialized) {
                DomHandler.findSingle(this.el.nativeElement, '.ui-button-text').textContent = this._label;
                if (!this.icon) {
                    if (this._label) {
                        DomHandler.removeClass(this.el.nativeElement, 'ui-button-text-empty');
                        DomHandler.addClass(this.el.nativeElement, 'ui-button-text-only');
                    }
                    else {
                        DomHandler.addClass(this.el.nativeElement, 'ui-button-text-empty');
                        DomHandler.removeClass(this.el.nativeElement, 'ui-button-text-only');
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonDirective.prototype, "icon", {
        get: /**
         * @return {?}
         */
        function () {
            return this._icon;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._icon = val;
            if (this.initialized) {
                /** @type {?} */
                var iconPosClass = (this.iconPos == 'right') ? 'ui-button-icon-right' : 'ui-button-icon-left';
                DomHandler.findSingle(this.el.nativeElement, '.ui-clickable').className =
                    iconPosClass + ' ui-clickable ' + this.icon;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ButtonDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        while (this.el.nativeElement.hasChildNodes()) {
            this.el.nativeElement.removeChild(this.el.nativeElement.lastChild);
        }
        this.initialized = false;
    };
    ButtonDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[pButton]'
                },] }
    ];
    /** @nocollapse */
    ButtonDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    ButtonDirective.propDecorators = {
        iconPos: [{ type: Input }],
        cornerStyleClass: [{ type: Input }],
        label: [{ type: Input }],
        icon: [{ type: Input }]
    };
    return ButtonDirective;
}());
export { ButtonDirective };
if (false) {
    /** @type {?} */
    ButtonDirective.prototype.iconPos;
    /** @type {?} */
    ButtonDirective.prototype.cornerStyleClass;
    /** @type {?} */
    ButtonDirective.prototype._label;
    /** @type {?} */
    ButtonDirective.prototype._icon;
    /** @type {?} */
    ButtonDirective.prototype.initialized;
    /** @type {?} */
    ButtonDirective.prototype.el;
}
var Button = /** @class */ (function () {
    function Button() {
        this.iconPos = 'left';
        this.onClick = new EventEmitter();
        this.onFocus = new EventEmitter();
        this.onBlur = new EventEmitter();
    }
    Button.decorators = [
        { type: Component, args: [{
                    selector: 'p-button',
                    template: "\n        <button [attr.type]=\"type\" [class]=\"styleClass\" [style]=\"style\" [disabled]=\"disabled\"\n            [ngClass]=\"{'ui-button ui-widget ui-state-default ui-corner-all':true,\n                        'ui-button-icon-only': (icon && !label),\n                        'ui-button-text-icon-left': (icon && label && iconPos === 'left'),\n                        'ui-button-text-icon-right': (icon && label && iconPos === 'right'),\n                        'ui-button-text-only': (!icon && label),\n                        'ui-button-text-empty': (!icon && !label),\n                        'ui-state-disabled': disabled}\"\n                        (click)=\"onClick.emit($event)\" (focus)=\"onFocus.emit($event)\" (blur)=\"onBlur.emit($event)\">\n            <ng-content></ng-content>\n            <span [ngClass]=\"{'ui-clickable': true,\n                        'ui-button-icon-left': (iconPos === 'left'), \n                        'ui-button-icon-right': (iconPos === 'right')}\"\n                        [class]=\"icon\" *ngIf=\"icon\"></span>\n            <span class=\"ui-button-text ui-clickable\">{{label||'ui-btn'}}</span>\n        </button>\n    "
                }] }
    ];
    Button.propDecorators = {
        type: [{ type: Input }],
        iconPos: [{ type: Input }],
        icon: [{ type: Input }],
        label: [{ type: Input }],
        disabled: [{ type: Input }],
        style: [{ type: Input }],
        styleClass: [{ type: Input }],
        onClick: [{ type: Output }],
        onFocus: [{ type: Output }],
        onBlur: [{ type: Output }]
    };
    return Button;
}());
export { Button };
if (false) {
    /** @type {?} */
    Button.prototype.type;
    /** @type {?} */
    Button.prototype.iconPos;
    /** @type {?} */
    Button.prototype.icon;
    /** @type {?} */
    Button.prototype.label;
    /** @type {?} */
    Button.prototype.disabled;
    /** @type {?} */
    Button.prototype.style;
    /** @type {?} */
    Button.prototype.styleClass;
    /** @type {?} */
    Button.prototype.onClick;
    /** @type {?} */
    Button.prototype.onFocus;
    /** @type {?} */
    Button.prototype.onBlur;
}
var ButtonModule = /** @class */ (function () {
    function ButtonModule() {
    }
    ButtonModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [ButtonDirective, Button],
                    declarations: [ButtonDirective, Button]
                },] }
    ];
    return ButtonModule;
}());
export { ButtonModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGJpdC9idXR0b24vIiwic291cmNlcyI6WyJidXR0b24vYnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLFlBQVksRUFBZSxNQUFNLEVBQW9DLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNqSixPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDN0MsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRTdDO0lBZUkseUJBQW1CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBVnhCLFlBQU8sR0FBcUIsTUFBTSxDQUFDO1FBRW5DLHFCQUFnQixHQUFXLGVBQWUsQ0FBQztJQVFoQixDQUFDOzs7O0lBRXJDLHlDQUFlOzs7SUFBZjtRQUNJLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztRQUMzRSxJQUFHLElBQUksQ0FBQyxJQUFJLEVBQUU7O2dCQUNOLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztZQUNoRCxXQUFXLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQzs7Z0JBQzVDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLHNCQUFzQixDQUFBLENBQUMsQ0FBQyxxQkFBcUI7WUFDNUYsV0FBVyxDQUFDLFNBQVMsR0FBRyxZQUFZLEdBQUksZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNyRSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDbEQ7O1lBRUcs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SUFFdEIseUJBQWtDOztJQUVsQyxzQkFBc0I7O0lBRXRCLHVCQUF1Qjs7SUFFdkIsMEJBQTJCOztJQUUzQix1QkFBb0I7O0lBRXBCLDRCQUE0Qjs7SUFFNUIseUJBQTBEOztJQUUxRCx5QkFBMEQ7O0lBRTFELHdCQUF5RDs7QUFHN0Q7SUFBQTtJQUs0QixDQUFDOztnQkFMNUIsUUFBUSxTQUFDO29CQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsT0FBTyxFQUFFLENBQUMsZUFBZSxFQUFDLE1BQU0sQ0FBQztvQkFDakMsWUFBWSxFQUFFLENBQUMsZUFBZSxFQUFDLE1BQU0sQ0FBQztpQkFDekM7O0lBQzJCLG1CQUFDO0NBQUEsQUFMN0IsSUFLNkI7U0FBaEIsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsRGlyZWN0aXZlLENvbXBvbmVudCxFbGVtZW50UmVmLEV2ZW50RW1pdHRlcixBZnRlclZpZXdJbml0LE91dHB1dCxPbkRlc3Ryb3ksSG9zdEJpbmRpbmcsSG9zdExpc3RlbmVyLElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RG9tSGFuZGxlcn0gZnJvbSAnLi4vZG9tL2RvbWhhbmRsZXInO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3BCdXR0b25dJ1xufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25EaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgQElucHV0KCkgaWNvblBvczogJ2xlZnQnIHwgJ3JpZ2h0JyA9ICdsZWZ0JztcbiAgICBcbiAgICBASW5wdXQoKSBjb3JuZXJTdHlsZUNsYXNzOiBzdHJpbmcgPSAndWktY29ybmVyLWFsbCc7XG4gICAgICAgIFxuICAgIHB1YmxpYyBfbGFiZWw6IHN0cmluZztcbiAgICBcbiAgICBwdWJsaWMgX2ljb246IHN0cmluZztcbiAgICAgICAgICAgIFxuICAgIHB1YmxpYyBpbml0aWFsaXplZDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbDogRWxlbWVudFJlZikge31cbiAgICBcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIERvbUhhbmRsZXIuYWRkTXVsdGlwbGVDbGFzc2VzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5nZXRTdHlsZUNsYXNzKCkpO1xuICAgICAgICBpZih0aGlzLmljb24pIHtcbiAgICAgICAgICAgIGxldCBpY29uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgICAgaWNvbkVsZW1lbnQuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgXCJ0cnVlXCIpO1xuICAgICAgICAgICAgbGV0IGljb25Qb3NDbGFzcyA9ICh0aGlzLmljb25Qb3MgPT0gJ3JpZ2h0JykgPyAndWktYnV0dG9uLWljb24tcmlnaHQnOiAndWktYnV0dG9uLWljb24tbGVmdCc7XG4gICAgICAgICAgICBpY29uRWxlbWVudC5jbGFzc05hbWUgPSBpY29uUG9zQ2xhc3MgICsgJyB1aS1jbGlja2FibGUgJyArIHRoaXMuaWNvbjtcbiAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZChpY29uRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxldCBsYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgbGFiZWxFbGVtZW50LmNsYXNzTmFtZSA9ICd1aS1idXR0b24tdGV4dCB1aS1jbGlja2FibGUnO1xuICAgICAgICBsYWJlbEVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGhpcy5sYWJlbHx8J3VpLWJ0bicpKTtcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKGxhYmVsRWxlbWVudCk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIH1cbiAgICAgICAgXG4gICAgZ2V0U3R5bGVDbGFzcygpOiBzdHJpbmcge1xuICAgICAgICBsZXQgc3R5bGVDbGFzcyA9ICd1aS1idXR0b24gdWktd2lkZ2V0IHVpLXN0YXRlLWRlZmF1bHQgJyArIHRoaXMuY29ybmVyU3R5bGVDbGFzcztcbiAgICAgICAgaWYodGhpcy5pY29uKSB7XG4gICAgICAgICAgICBpZih0aGlzLmxhYmVsICE9IG51bGwgJiYgdGhpcy5sYWJlbCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmljb25Qb3MgPT0gJ2xlZnQnKVxuICAgICAgICAgICAgICAgICAgICBzdHlsZUNsYXNzID0gc3R5bGVDbGFzcyArICcgdWktYnV0dG9uLXRleHQtaWNvbi1sZWZ0JztcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlQ2xhc3MgPSBzdHlsZUNsYXNzICsgJyB1aS1idXR0b24tdGV4dC1pY29uLXJpZ2h0JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0eWxlQ2xhc3MgPSBzdHlsZUNsYXNzICsgJyB1aS1idXR0b24taWNvbi1vbmx5JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmKHRoaXMubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBzdHlsZUNsYXNzID0gc3R5bGVDbGFzcyArICcgdWktYnV0dG9uLXRleHQtb25seSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdHlsZUNsYXNzID0gc3R5bGVDbGFzcyArICcgdWktYnV0dG9uLXRleHQtZW1wdHknO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gc3R5bGVDbGFzcztcbiAgICB9XG4gICAgXG4gICAgQElucHV0KCkgZ2V0IGxhYmVsKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sYWJlbDtcbiAgICB9XG5cbiAgICBzZXQgbGFiZWwodmFsOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fbGFiZWwgPSB2YWw7XG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICAgICAgICBEb21IYW5kbGVyLmZpbmRTaW5nbGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnLnVpLWJ1dHRvbi10ZXh0JykudGV4dENvbnRlbnQgPSB0aGlzLl9sYWJlbDtcblxuICAgICAgICAgICAgaWYoIXRoaXMuaWNvbikge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBEb21IYW5kbGVyLnJlbW92ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3VpLWJ1dHRvbi10ZXh0LWVtcHR5Jyk7XG4gICAgICAgICAgICAgICAgICAgIERvbUhhbmRsZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAndWktYnV0dG9uLXRleHQtb25seScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgRG9tSGFuZGxlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd1aS1idXR0b24tdGV4dC1lbXB0eScpO1xuICAgICAgICAgICAgICAgICAgICBEb21IYW5kbGVyLnJlbW92ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3VpLWJ1dHRvbi10ZXh0LW9ubHknKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgQElucHV0KCkgZ2V0IGljb24oKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ljb247XG4gICAgfVxuXG4gICAgc2V0IGljb24odmFsOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5faWNvbiA9IHZhbDtcbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIGxldCBpY29uUG9zQ2xhc3MgPSAodGhpcy5pY29uUG9zID09ICdyaWdodCcpID8gJ3VpLWJ1dHRvbi1pY29uLXJpZ2h0JzogJ3VpLWJ1dHRvbi1pY29uLWxlZnQnO1xuICAgICAgICAgICAgRG9tSGFuZGxlci5maW5kU2luZ2xlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJy51aS1jbGlja2FibGUnKS5jbGFzc05hbWUgPVxuICAgICAgICAgICAgICAgIGljb25Qb3NDbGFzcyArICcgdWktY2xpY2thYmxlICcgKyB0aGlzLmljb247XG4gICAgICAgIH1cbiAgICB9XG4gICAgICAgIFxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB3aGlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5lbC5uYXRpdmVFbGVtZW50Lmxhc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncC1idXR0b24nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxidXR0b24gW2F0dHIudHlwZV09XCJ0eXBlXCIgW2NsYXNzXT1cInN0eWxlQ2xhc3NcIiBbc3R5bGVdPVwic3R5bGVcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgICAgW25nQ2xhc3NdPVwieyd1aS1idXR0b24gdWktd2lkZ2V0IHVpLXN0YXRlLWRlZmF1bHQgdWktY29ybmVyLWFsbCc6dHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICd1aS1idXR0b24taWNvbi1vbmx5JzogKGljb24gJiYgIWxhYmVsKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICd1aS1idXR0b24tdGV4dC1pY29uLWxlZnQnOiAoaWNvbiAmJiBsYWJlbCAmJiBpY29uUG9zID09PSAnbGVmdCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3VpLWJ1dHRvbi10ZXh0LWljb24tcmlnaHQnOiAoaWNvbiAmJiBsYWJlbCAmJiBpY29uUG9zID09PSAncmlnaHQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICd1aS1idXR0b24tdGV4dC1vbmx5JzogKCFpY29uICYmIGxhYmVsKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICd1aS1idXR0b24tdGV4dC1lbXB0eSc6ICghaWNvbiAmJiAhbGFiZWwpLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3VpLXN0YXRlLWRpc2FibGVkJzogZGlzYWJsZWR9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkNsaWNrLmVtaXQoJGV2ZW50KVwiIChmb2N1cyk9XCJvbkZvY3VzLmVtaXQoJGV2ZW50KVwiIChibHVyKT1cIm9uQmx1ci5lbWl0KCRldmVudClcIj5cbiAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgICAgIDxzcGFuIFtuZ0NsYXNzXT1cInsndWktY2xpY2thYmxlJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICd1aS1idXR0b24taWNvbi1sZWZ0JzogKGljb25Qb3MgPT09ICdsZWZ0JyksIFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3VpLWJ1dHRvbi1pY29uLXJpZ2h0JzogKGljb25Qb3MgPT09ICdyaWdodCcpfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3NdPVwiaWNvblwiICpuZ0lmPVwiaWNvblwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidWktYnV0dG9uLXRleHQgdWktY2xpY2thYmxlXCI+e3tsYWJlbHx8J3VpLWJ0bid9fTwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b24ge1xuXG4gICAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgaWNvblBvczogc3RyaW5nID0gJ2xlZnQnO1xuXG4gICAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgc3R5bGU6IGFueTtcblxuICAgIEBJbnB1dCgpIHN0eWxlQ2xhc3M6IHN0cmluZztcblxuICAgIEBPdXRwdXQoKSBvbkNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBvbkZvY3VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBvbkJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xufVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtCdXR0b25EaXJlY3RpdmUsQnV0dG9uXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtCdXR0b25EaXJlY3RpdmUsQnV0dG9uXVxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Nb2R1bGUgeyB9XG4iXX0=