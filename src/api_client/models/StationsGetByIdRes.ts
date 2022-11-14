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
import type { StationsGetByIdResLocationRes } from './StationsGetByIdResLocationRes';
import {
    StationsGetByIdResLocationResFromJSON,
    StationsGetByIdResLocationResFromJSONTyped,
    StationsGetByIdResLocationResToJSON,
} from './StationsGetByIdResLocationRes';

/**
 * 
 * @export
 * @interface StationsGetByIdRes
 */
export interface StationsGetByIdRes {
    /**
     * 
     * @type {number}
     * @memberof StationsGetByIdRes
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof StationsGetByIdRes
     */
    name?: string;
    /**
     * 
     * @type {Array<StationsGetByIdResLocationRes>}
     * @memberof StationsGetByIdRes
     */
    locations?: Array<StationsGetByIdResLocationRes>;
}

/**
 * Check if a given object implements the StationsGetByIdRes interface.
 */
export function instanceOfStationsGetByIdRes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function StationsGetByIdResFromJSON(json: any): StationsGetByIdRes {
    return StationsGetByIdResFromJSONTyped(json, false);
}

export function StationsGetByIdResFromJSONTyped(json: any, ignoreDiscriminator: boolean): StationsGetByIdRes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'Id') ? undefined : json['Id'],
        'name': !exists(json, 'Name') ? undefined : json['Name'],
        'locations': !exists(json, 'Locations') ? undefined : ((json['Locations'] as Array<any>).map(StationsGetByIdResLocationResFromJSON)),
    };
}

export function StationsGetByIdResToJSON(value?: StationsGetByIdRes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Id': value.id,
        'Name': value.name,
        'Locations': value.locations === undefined ? undefined : ((value.locations as Array<any>).map(StationsGetByIdResLocationResToJSON)),
    };
}

