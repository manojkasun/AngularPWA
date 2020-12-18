/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { animate, style, state, transition, trigger } from '@angular/animations';
/** @type {?} */
export const TYPEAHEAD_ANIMATION_TIMING = '220ms cubic-bezier(0, 0, 0.2, 1)';
/** @type {?} */
export const typeaheadAnimation = trigger('typeaheadAnimation', [
    state('animated-down', style({ height: '*', overflow: 'hidden' })),
    transition('* => animated-down', [
        style({ height: 0, overflow: 'hidden' }),
        animate(TYPEAHEAD_ANIMATION_TIMING)
    ]),
    state('animated-up', style({ height: '*', overflow: 'hidden' })),
    transition('* => animated-up', [
        style({ height: '*', overflow: 'hidden' }),
        animate(TYPEAHEAD_ANIMATION_TIMING)
    ]),
    transition('* => unanimated', animate('0s'))
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZWFoZWFkLWFuaW1hdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYml0L3R5cGVhaGVhZC90eXBlYWhlYWQvIiwic291cmNlcyI6WyJ0eXBlYWhlYWQtYW5pbWF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLE9BQU8sRUFDUCxLQUFLLEVBRUwsS0FBSyxFQUNMLFVBQVUsRUFDVixPQUFPLEVBQ1IsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFN0IsTUFBTSxPQUFPLDBCQUEwQixHQUFHLGtDQUFrQzs7QUFFNUUsTUFBTSxPQUFPLGtCQUFrQixHQUM3QixPQUFPLENBQUMsb0JBQW9CLEVBQUU7SUFDNUIsS0FBSyxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFDO0lBQ2pFLFVBQVUsQ0FBQyxvQkFBb0IsRUFBRTtRQUMvQixLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQztRQUN4QyxPQUFPLENBQUMsMEJBQTBCLENBQUM7S0FDcEMsQ0FBQztJQUNGLEtBQUssQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFDLENBQUMsQ0FBQztJQUMvRCxVQUFVLENBQUMsa0JBQWtCLEVBQUU7UUFDN0IsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUM7UUFDMUMsT0FBTyxDQUFDLDBCQUEwQixDQUFDO0tBQ3BDLENBQUM7SUFDRixVQUFVLENBQUMsaUJBQWlCLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0NBQzdDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBhbmltYXRlLFxuICBzdHlsZSxcbiAgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhLFxuICBzdGF0ZSxcbiAgdHJhbnNpdGlvbixcbiAgdHJpZ2dlclxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuZXhwb3J0IGNvbnN0IFRZUEVBSEVBRF9BTklNQVRJT05fVElNSU5HID0gJzIyMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpJztcblxuZXhwb3J0IGNvbnN0IHR5cGVhaGVhZEFuaW1hdGlvbjogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhID1cbiAgdHJpZ2dlcigndHlwZWFoZWFkQW5pbWF0aW9uJywgW1xuICAgIHN0YXRlKCdhbmltYXRlZC1kb3duJywgc3R5bGUoeyBoZWlnaHQ6ICcqJywgb3ZlcmZsb3c6ICdoaWRkZW4nfSkpLFxuICAgIHRyYW5zaXRpb24oJyogPT4gYW5pbWF0ZWQtZG93bicsIFtcbiAgICAgIHN0eWxlKHsgaGVpZ2h0OiAwLCBvdmVyZmxvdzogJ2hpZGRlbicgfSksXG4gICAgICBhbmltYXRlKFRZUEVBSEVBRF9BTklNQVRJT05fVElNSU5HKVxuICAgIF0pLFxuICAgIHN0YXRlKCdhbmltYXRlZC11cCcsIHN0eWxlKHsgaGVpZ2h0OiAnKicsIG92ZXJmbG93OiAnaGlkZGVuJ30pKSxcbiAgICB0cmFuc2l0aW9uKCcqID0+IGFuaW1hdGVkLXVwJywgW1xuICAgICAgc3R5bGUoeyBoZWlnaHQ6ICcqJywgb3ZlcmZsb3c6ICdoaWRkZW4nIH0pLFxuICAgICAgYW5pbWF0ZShUWVBFQUhFQURfQU5JTUFUSU9OX1RJTUlORylcbiAgICBdKSxcbiAgICB0cmFuc2l0aW9uKCcqID0+IHVuYW5pbWF0ZWQnLCBhbmltYXRlKCcwcycpKVxuICBdKTtcbiJdfQ==