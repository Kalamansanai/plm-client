/* tslint:disable */
/* eslint-disable */
/**
 * dotnet-nswag
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * 
 * @export
 */
export const TemplateState = {
    Present: 'Present',
    Missing: 'Missing',
    Uncertain: 'Uncertain',
    UnknownObject: 'UnknownObject'
} as const;
export type TemplateState = typeof TemplateState[keyof typeof TemplateState];


export function TemplateStateFromJSON(json: any): TemplateState {
    return TemplateStateFromJSONTyped(json, false);
}

export function TemplateStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateState {
    return json as TemplateState;
}

export function TemplateStateToJSON(value?: TemplateState | null): any {
    return value as any;
}

