/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TypeaheadContainerComponent } from './typeahead-container.component';
import { TypeaheadDirective } from './typeahead.directive';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { TypeaheadConfig } from './typeahead.config';
export class TypeaheadModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: TypeaheadModule,
            providers: [ComponentLoaderFactory, PositioningService, TypeaheadConfig]
        };
    }
}
TypeaheadModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [TypeaheadContainerComponent, TypeaheadDirective],
                exports: [TypeaheadContainerComponent, TypeaheadDirective],
                entryComponents: [TypeaheadContainerComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZWFoZWFkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BiaXQvdHlwZWFoZWFkL3R5cGVhaGVhZC8iLCJzb3VyY2VzIjpbInR5cGVhaGVhZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFRckQsTUFBTSxPQUFPLGVBQWU7Ozs7SUFDMUIsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLGVBQWU7WUFDekIsU0FBUyxFQUFFLENBQUMsc0JBQXNCLEVBQUUsa0JBQWtCLEVBQUUsZUFBZSxDQUFDO1NBQ3pFLENBQUM7SUFDSixDQUFDOzs7WUFaRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN2QixZQUFZLEVBQUUsQ0FBQywyQkFBMkIsRUFBRSxrQkFBa0IsQ0FBQztnQkFDL0QsT0FBTyxFQUFFLENBQUMsMkJBQTJCLEVBQUUsa0JBQWtCLENBQUM7Z0JBQzFELGVBQWUsRUFBRSxDQUFDLDJCQUEyQixDQUFDO2FBQy9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFR5cGVhaGVhZENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdHlwZWFoZWFkLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHlwZWFoZWFkRGlyZWN0aXZlIH0gZnJvbSAnLi90eXBlYWhlYWQuZGlyZWN0aXZlJztcbmltcG9ydCB7IENvbXBvbmVudExvYWRlckZhY3RvcnkgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbXBvbmVudC1sb2FkZXInO1xuaW1wb3J0IHsgUG9zaXRpb25pbmdTZXJ2aWNlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZyc7XG5pbXBvcnQgeyBUeXBlYWhlYWRDb25maWcgfSBmcm9tICcuL3R5cGVhaGVhZC5jb25maWcnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbVHlwZWFoZWFkQ29udGFpbmVyQ29tcG9uZW50LCBUeXBlYWhlYWREaXJlY3RpdmVdLFxuICBleHBvcnRzOiBbVHlwZWFoZWFkQ29udGFpbmVyQ29tcG9uZW50LCBUeXBlYWhlYWREaXJlY3RpdmVdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtUeXBlYWhlYWRDb250YWluZXJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFR5cGVhaGVhZE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogVHlwZWFoZWFkTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbQ29tcG9uZW50TG9hZGVyRmFjdG9yeSwgUG9zaXRpb25pbmdTZXJ2aWNlLCBUeXBlYWhlYWRDb25maWddXG4gICAgfTtcbiAgfVxufVxuIl19