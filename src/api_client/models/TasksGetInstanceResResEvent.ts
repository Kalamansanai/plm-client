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
 * @interface TasksGetInstanceResResEvent
 */
export interface TasksGetInstanceResResEvent {
    /**
     * 
     * @type {number}
     * @memberof TasksGetInstanceResResEvent
     */
    id?: number;
    /**
     * 
     * @type {Date}
     * @memberof TasksGetInstanceResResEvent
     */
    timeStamp?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof TasksGetInstanceResResEvent
     */
    eventResultSuccess?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TasksGetInstanceResResEvent
     */
    failureReason?: string | null;
    /**
     * 
     * @type {number}
     * @memberof TasksGetInstanceResResEvent
     */
    stepId?: number;
    /**
     * 
     * @type {number}
     * @memberof TasksGetInstanceResResEvent
     */
    taskInstanceId?: number;
}

/**
 * Check if a given object implements the TasksGetInstanceResResEvent interface.
 */
export function instanceOfTasksGetInstanceResResEvent(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TasksGetInstanceResResEventFromJSON(json: any): TasksGetInstanceResResEvent {
    return TasksGetInstanceResResEventFromJSONTyped(json, false);
}

export function TasksGetInstanceResResEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): TasksGetInstanceResResEvent {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'Id') ? undefined : json['Id'],
        'timeStamp': !exists(json, 'TimeStamp') ? undefined : (new Date(json['TimeStamp'])),
        'eventResultSuccess': !exists(json, 'EventResultSuccess') ? undefined : json['EventResultSuccess'],
        'failureReason': !exists(json, 'FailureReason') ? undefined : json['FailureReason'],
        'stepId': !exists(json, 'StepId') ? undefined : json['StepId'],
        'taskInstanceId': !exists(json, 'TaskInstanceId') ? undefined : json['TaskInstanceId'],
    };
}

export function TasksGetInstanceResResEventToJSON(value?: TasksGetInstanceResResEvent | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Id': value.id,
        'TimeStamp': value.timeStamp === undefined ? undefined : (value.timeStamp.toISOString()),
        'EventResultSuccess': value.eventResultSuccess,
        'FailureReason': value.failureReason,
        'StepId': value.stepId,
        'TaskInstanceId': value.taskInstanceId,
    };
}

