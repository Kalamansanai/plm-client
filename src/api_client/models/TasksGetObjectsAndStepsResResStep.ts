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
import type { TemplateState } from './TemplateState';
import {
    TemplateStateFromJSON,
    TemplateStateFromJSONTyped,
    TemplateStateToJSON,
} from './TemplateState';

/**
 * 
 * @export
 * @interface TasksGetObjectsAndStepsResResStep
 */
export interface TasksGetObjectsAndStepsResResStep {
    /**
     * 
     * @type {number}
     * @memberof TasksGetObjectsAndStepsResResStep
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof TasksGetObjectsAndStepsResResStep
     */
    orderNum?: number | null;
    /**
     * 
     * @type {TemplateState}
     * @memberof TasksGetObjectsAndStepsResResStep
     */
    expectedInitialState?: TemplateState;
    /**
     * 
     * @type {TemplateState}
     * @memberof TasksGetObjectsAndStepsResResStep
     */
    expectedSubsequentState?: TemplateState;
    /**
     * 
     * @type {number}
     * @memberof TasksGetObjectsAndStepsResResStep
     */
    objectId?: number;
}

/**
 * Check if a given object implements the TasksGetObjectsAndStepsResResStep interface.
 */
export function instanceOfTasksGetObjectsAndStepsResResStep(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TasksGetObjectsAndStepsResResStepFromJSON(json: any): TasksGetObjectsAndStepsResResStep {
    return TasksGetObjectsAndStepsResResStepFromJSONTyped(json, false);
}

export function TasksGetObjectsAndStepsResResStepFromJSONTyped(json: any, ignoreDiscriminator: boolean): TasksGetObjectsAndStepsResResStep {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'Id') ? undefined : json['Id'],
        'orderNum': !exists(json, 'OrderNum') ? undefined : json['OrderNum'],
        'expectedInitialState': !exists(json, 'ExpectedInitialState') ? undefined : TemplateStateFromJSON(json['ExpectedInitialState']),
        'expectedSubsequentState': !exists(json, 'ExpectedSubsequentState') ? undefined : TemplateStateFromJSON(json['ExpectedSubsequentState']),
        'objectId': !exists(json, 'ObjectId') ? undefined : json['ObjectId'],
    };
}

export function TasksGetObjectsAndStepsResResStepToJSON(value?: TasksGetObjectsAndStepsResResStep | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Id': value.id,
        'OrderNum': value.orderNum,
        'ExpectedInitialState': TemplateStateToJSON(value.expectedInitialState),
        'ExpectedSubsequentState': TemplateStateToJSON(value.expectedSubsequentState),
        'ObjectId': value.objectId,
    };
}

