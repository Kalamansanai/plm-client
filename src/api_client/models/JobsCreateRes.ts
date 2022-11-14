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
 * @interface JobsCreateRes
 */
export interface JobsCreateRes {
    /**
     * 
     * @type {number}
     * @memberof JobsCreateRes
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof JobsCreateRes
     */
    name?: string;
}

/**
 * Check if a given object implements the JobsCreateRes interface.
 */
export function instanceOfJobsCreateRes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function JobsCreateResFromJSON(json: any): JobsCreateRes {
    return JobsCreateResFromJSONTyped(json, false);
}

export function JobsCreateResFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobsCreateRes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'Id') ? undefined : json['Id'],
        'name': !exists(json, 'Name') ? undefined : json['Name'],
    };
}

export function JobsCreateResToJSON(value?: JobsCreateRes | null): any {
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

