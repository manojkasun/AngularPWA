import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal/';

/**

 * @fileoverview added by tsickle

 * Generated from: my-button.component.ts

 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc

 */

class MyButtonComponent {

    /**

     * @param {?} modalService

     */

    constructor(modalService) {

        this.modalService = modalService;

        this.buttonText = "My Button";

        this.modalRef = new BsModalRef();

    }

    /**

     * @param {?} template

     * @return {?}

     */

    openModal(template) {

        this.modalRef = this.modalService.show(template);

    }

}

MyButtonComponent.decorators = [

    { type: Component, args: [{

                selector: "app-my-button",

                template: "<button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal(template)\">{{buttonText}}</button>\n<ng-template #template>\n <div class=\"modal-header\">\n  <h4 class=\"modal-title pull-left\">Modal</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\"    (click)=\"modalRef.hide()\">\n  <span aria-hidden=\"true\">&times;</span>\n  </button>\n </div>\n <div class=\"modal-body\">\n This is a modal.\n </div>\n</ng-template>\n",

                styles: [""]

            }] }

];

/** @nocollapse */

MyButtonComponent.ctorParameters = () => [

    { type: BsModalService }

];

MyButtonComponent.propDecorators = {

    buttonText: [{ type: Input }]

};

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

class MyButtonModule {

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

/**

 * @fileoverview added by tsickle

 * Generated from: bit-my-button.ts

 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc

 */

export { MyButtonModule, MyButtonComponent as ɵa };
//# sourceMappingURL=bit-my-button.js.map
