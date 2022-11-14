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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface LocationsGetByIdResDetectorRes
 */
export interface LocationsGetByIdResDetectorRes {
    /**
     * 
     * @type {number}
     * @memberof LocationsGetByIdResDetectorRes
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof LocationsGetByIdResDetectorRes
     */
    name?: string | null;
}

/**
 * Check if a given object implements the LocationsGetByIdResDetectorRes interface.
 */
export function instanceOfLocationsGetByIdResDetectorRes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LocationsGetByIdResDetectorResFromJSON(json: any): LocationsGetByIdResDetectorRes {
    return LocationsGetByIdResDetectorResFromJSONTyped(json, false);
}

export function LocationsGetByIdResDetectorResFromJSONTyped(json: any, ignoreDiscriminator: boolean): LocationsGetByIdResDetectorRes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'Id') ? undefined : json['Id'],
        'name': !exists(json, 'Name') ? undefined : json['Name'],
    };
}

export function LocationsGetByIdResDetectorResToJSON(value?: LocationsGetByIdResDetectorRes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Id': value.id,
        'Name': value.name,
    };
}

