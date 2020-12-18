/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { latinMap } from './latin-map';
/**
 * @param {?} str
 * @return {?}
 */
export function latinize(str) {
    if (!str) {
        return '';
    }
    return str.replace(/[^A-Za-z0-9\[\] ]/g, (/**
     * @param {?} a
     * @return {?}
     */
    function (a) {
        return latinMap[a] || a;
    }));
}
/**
 * @param {?} queryToEscape
 * @return {?}
 */
export function escapeRegexp(queryToEscape) {
    // Regex: capture the whole query string and replace it with the string
    // that will be used to match the results, for example if the capture is
    // 'a' the result will be \a
    return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
}
/* tslint:disable */
/**
 * @param {?} str
 * @param {?=} wordRegexDelimiters
 * @param {?=} phraseRegexDelimiters
 * @return {?}
 */
export function tokenize(str, wordRegexDelimiters = ' ', phraseRegexDelimiters = '') {
    /* tslint:enable */
    /** @type {?} */
    const regexStr = `(?:[${phraseRegexDelimiters}])([^${phraseRegexDelimiters}]+)` +
        `(?:[${phraseRegexDelimiters}])|([^${wordRegexDelimiters}]+)`;
    /** @type {?} */
    const preTokenized = str.split(new RegExp(regexStr, 'g'));
    /** @type {?} */
    const result = [];
    /** @type {?} */
    const preTokenizedLength = preTokenized.length;
    /** @type {?} */
    let token;
    /** @type {?} */
    const replacePhraseDelimiters = new RegExp(`[${phraseRegexDelimiters}]+`, 'g');
    for (let i = 0; i < preTokenizedLength; i += 1) {
        token = preTokenized[i];
        if (token && token.length && token !== wordRegexDelimiters) {
            result.push(token.replace(replacePhraseDelimiters, ''));
        }
    }
    return result;
}
// tslint:disable-next-line:no-any
/**
 * @param {?} object
 * @param {?} option
 * @return {?}
 */
export function getValueFromObject(object, option) {
    if (!option || typeof object !== 'object') {
        return object.toString();
    }
    if (option.endsWith('()')) {
        /** @type {?} */
        const functionName = option.slice(0, option.length - 2);
        return object[functionName]().toString();
    }
    /** @type {?} */
    const properties = option
        .replace(/\[(\w+)\]/g, '.$1')
        .replace(/^\./, '');
    /** @type {?} */
    const propertiesArray = properties.split('.');
    for (const property of propertiesArray) {
        if (property in object) {
            // tslint:disable-next-line
            object = object[property];
        }
    }
    if (!object) {
        return '';
    }
    return object.toString();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZWFoZWFkLXV0aWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGJpdC90eXBlYWhlYWQvdHlwZWFoZWFkLyIsInNvdXJjZXMiOlsidHlwZWFoZWFkLXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7OztBQUV2QyxNQUFNLFVBQVUsUUFBUSxDQUFDLEdBQVc7SUFDbEMsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUNSLE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFFRCxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsb0JBQW9COzs7O0lBQUUsVUFBVSxDQUFTO1FBQzFELE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDLEVBQUMsQ0FBQztBQUNMLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLFlBQVksQ0FBQyxhQUFxQjtJQUNoRCx1RUFBdUU7SUFDdkUsd0VBQXdFO0lBQ3hFLDRCQUE0QjtJQUM1QixPQUFPLGFBQWEsQ0FBQyxPQUFPLENBQUMsd0JBQXdCLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDakUsQ0FBQzs7Ozs7Ozs7QUFHRCxNQUFNLFVBQVUsUUFBUSxDQUFDLEdBQVcsRUFDWCxtQkFBbUIsR0FBRyxHQUFHLEVBQ3pCLHFCQUFxQixHQUFHLEVBQUU7OztVQUUzQyxRQUFRLEdBQUcsT0FBTyxxQkFBcUIsUUFBUSxxQkFBcUIsS0FBSztRQUM3RSxPQUFPLHFCQUFxQixTQUFTLG1CQUFtQixLQUFLOztVQUN6RCxZQUFZLEdBQWEsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7O1VBQzdELE1BQU0sR0FBYSxFQUFFOztVQUNyQixrQkFBa0IsR0FBVyxZQUFZLENBQUMsTUFBTTs7UUFDbEQsS0FBYTs7VUFDWCx1QkFBdUIsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLHFCQUFxQixJQUFJLEVBQUUsR0FBRyxDQUFDO0lBRTlFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxrQkFBa0IsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQzlDLEtBQUssR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEIsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxLQUFLLEtBQUssbUJBQW1CLEVBQUU7WUFDMUQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDekQ7S0FDRjtJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7Ozs7Ozs7QUFHRCxNQUFNLFVBQVUsa0JBQWtCLENBQUMsTUFBVyxFQUFFLE1BQWM7SUFDNUQsSUFBSSxDQUFDLE1BQU0sSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUU7UUFDekMsT0FBTyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDMUI7SUFFRCxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7O2NBQ25CLFlBQVksR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUV2RCxPQUFPLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQzFDOztVQUVLLFVBQVUsR0FBVyxNQUFNO1NBQzlCLE9BQU8sQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDO1NBQzVCLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDOztVQUNmLGVBQWUsR0FBYSxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUV2RCxLQUFLLE1BQU0sUUFBUSxJQUFJLGVBQWUsRUFBRTtRQUN0QyxJQUFJLFFBQVEsSUFBSSxNQUFNLEVBQUU7WUFDdEIsMkJBQTJCO1lBQzNCLE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDM0I7S0FDRjtJQUNELElBQUksQ0FBQyxNQUFNLEVBQUU7UUFBQyxPQUFPLEVBQUUsQ0FBQztLQUFFO0lBRTFCLE9BQU8sTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzNCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsYXRpbk1hcCB9IGZyb20gJy4vbGF0aW4tbWFwJztcblxuZXhwb3J0IGZ1bmN0aW9uIGxhdGluaXplKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKCFzdHIpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICByZXR1cm4gc3RyLnJlcGxhY2UoL1teQS1aYS16MC05XFxbXFxdIF0vZywgZnVuY3Rpb24gKGE6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGxhdGluTWFwW2FdIHx8IGE7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlUmVnZXhwKHF1ZXJ5VG9Fc2NhcGU6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIFJlZ2V4OiBjYXB0dXJlIHRoZSB3aG9sZSBxdWVyeSBzdHJpbmcgYW5kIHJlcGxhY2UgaXQgd2l0aCB0aGUgc3RyaW5nXG4gIC8vIHRoYXQgd2lsbCBiZSB1c2VkIHRvIG1hdGNoIHRoZSByZXN1bHRzLCBmb3IgZXhhbXBsZSBpZiB0aGUgY2FwdHVyZSBpc1xuICAvLyAnYScgdGhlIHJlc3VsdCB3aWxsIGJlIFxcYVxuICByZXR1cm4gcXVlcnlUb0VzY2FwZS5yZXBsYWNlKC8oWy4/KiteJFtcXF1cXFxcKCl7fXwtXSkvZywgJ1xcXFwkMScpO1xufVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRva2VuaXplKHN0cjogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmRSZWdleERlbGltaXRlcnMgPSAnICcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgcGhyYXNlUmVnZXhEZWxpbWl0ZXJzID0gJycpOiBBcnJheTxzdHJpbmc+IHtcbiAgLyogdHNsaW50OmVuYWJsZSAqL1xuICBjb25zdCByZWdleFN0ciA9IGAoPzpbJHtwaHJhc2VSZWdleERlbGltaXRlcnN9XSkoW14ke3BocmFzZVJlZ2V4RGVsaW1pdGVyc31dKylgICtcbiAgICBgKD86WyR7cGhyYXNlUmVnZXhEZWxpbWl0ZXJzfV0pfChbXiR7d29yZFJlZ2V4RGVsaW1pdGVyc31dKylgO1xuICBjb25zdCBwcmVUb2tlbml6ZWQ6IHN0cmluZ1tdID0gc3RyLnNwbGl0KG5ldyBSZWdFeHAocmVnZXhTdHIsICdnJykpO1xuICBjb25zdCByZXN1bHQ6IHN0cmluZ1tdID0gW107XG4gIGNvbnN0IHByZVRva2VuaXplZExlbmd0aDogbnVtYmVyID0gcHJlVG9rZW5pemVkLmxlbmd0aDtcbiAgbGV0IHRva2VuOiBzdHJpbmc7XG4gIGNvbnN0IHJlcGxhY2VQaHJhc2VEZWxpbWl0ZXJzID0gbmV3IFJlZ0V4cChgWyR7cGhyYXNlUmVnZXhEZWxpbWl0ZXJzfV0rYCwgJ2cnKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByZVRva2VuaXplZExlbmd0aDsgaSArPSAxKSB7XG4gICAgdG9rZW4gPSBwcmVUb2tlbml6ZWRbaV07XG4gICAgaWYgKHRva2VuICYmIHRva2VuLmxlbmd0aCAmJiB0b2tlbiAhPT0gd29yZFJlZ2V4RGVsaW1pdGVycykge1xuICAgICAgcmVzdWx0LnB1c2godG9rZW4ucmVwbGFjZShyZXBsYWNlUGhyYXNlRGVsaW1pdGVycywgJycpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWVGcm9tT2JqZWN0KG9iamVjdDogYW55LCBvcHRpb246IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmICghb3B0aW9uIHx8IHR5cGVvZiBvYmplY3QgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG9iamVjdC50b1N0cmluZygpO1xuICB9XG5cbiAgaWYgKG9wdGlvbi5lbmRzV2l0aCgnKCknKSkge1xuICAgIGNvbnN0IGZ1bmN0aW9uTmFtZSA9IG9wdGlvbi5zbGljZSgwLCBvcHRpb24ubGVuZ3RoIC0gMik7XG5cbiAgICByZXR1cm4gb2JqZWN0W2Z1bmN0aW9uTmFtZV0oKS50b1N0cmluZygpO1xuICB9XG5cbiAgY29uc3QgcHJvcGVydGllczogc3RyaW5nID0gb3B0aW9uXG4gICAgLnJlcGxhY2UoL1xcWyhcXHcrKVxcXS9nLCAnLiQxJylcbiAgICAucmVwbGFjZSgvXlxcLi8sICcnKTtcbiAgY29uc3QgcHJvcGVydGllc0FycmF5OiBzdHJpbmdbXSA9IHByb3BlcnRpZXMuc3BsaXQoJy4nKTtcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHByb3BlcnRpZXNBcnJheSkge1xuICAgIGlmIChwcm9wZXJ0eSBpbiBvYmplY3QpIHtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgb2JqZWN0ID0gb2JqZWN0W3Byb3BlcnR5XTtcbiAgICB9XG4gIH1cbiAgaWYgKCFvYmplY3QpIHtyZXR1cm4gJyc7IH1cblxuICByZXR1cm4gb2JqZWN0LnRvU3RyaW5nKCk7XG59XG4iXX0=