import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal/';

/**

 * @fileoverview added by tsickle

 * Generated from: my-button.component.ts

 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc

 */

var MyButtonComponent = /** @class */ (function () {

    function MyButtonComponent(modalService) {

        this.modalService = modalService;

        this.buttonText = "My Button";

        this.modalRef = new BsModalRef();

    }

    /**

     * @param {?} template

     * @return {?}

     */

    MyButtonComponent.prototype.openModal = /**

     * @param {?} template

     * @return {?}

     */

    function (template) {

        this.modalRef = this.modalService.show(template);

    };

    MyButtonComponent.decorators = [

        { type: Component, args: [{

                    selector: "app-my-button",

                    template: "<button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal(template)\">{{buttonText}}</button>\n<ng-template #template>\n <div class=\"modal-header\">\n  <h4 class=\"modal-title pull-left\">Modal</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\"    (click)=\"modalRef.hide()\">\n  <span aria-hidden=\"true\">&times;</span>\n  </button>\n </div>\n <div class=\"modal-body\">\n This is a modal.\n </div>\n</ng-template>\n",

                    styles: [""]

                }] }

    ];

    /** @nocollapse */

    MyButtonComponent.ctorParameters = function () { return [

        { type: BsModalService }

    ]; };

    MyButtonComponent.propDecorators = {

        buttonText: [{ type: Input }]

    };

    return MyButtonComponent;

}());

if (false) {

    /** @type {?} */

    MyButtonComponent.prototype.buttonText;

    /** @type {?} */

    MyButtonComponent.prototype.modalRef;

    /**

     * @type {?}

     * @private

     */

    MyButtonComponent.prototype.modalService;

}

/**

 * @fileoverview added by tsickle

 * Generated from: my-button.module.ts

 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc

 */

var MyButtonModule = /** @class */ (function () {

    function MyButtonModule() {

    }

    MyButtonModule.decorators = [

        { type: NgModule, args: [{

                    declarations: [MyButtonComponent],

                    imports: [

                        CommonModule

                    ],

                    exports: [MyButtonComponent]

                },] }

    ];

    return MyButtonModule;

}());

/**

 * @fileoverview added by tsickle

 * Generated from: bit-my-button.ts

 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc

 */

export { MyButtonModule, MyButtonComponent as ɵa };
//# sourceMappingURL=bit-my-button.js.map
