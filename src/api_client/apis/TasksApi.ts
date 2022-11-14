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


import * as runtime from '../runtime';
import type {
  TasksCreateReq,
  TasksCreateRes,
  TasksDeleteReq,
  TasksGetByIdRes,
  TasksGetInstanceRes,
  TasksGetObjectsAndStepsRes,
  TasksUpdateReq,
} from '../models';
import {
    TasksCreateReqFromJSON,
    TasksCreateReqToJSON,
    TasksCreateResFromJSON,
    TasksCreateResToJSON,
    TasksDeleteReqFromJSON,
    TasksDeleteReqToJSON,
    TasksGetByIdResFromJSON,
    TasksGetByIdResToJSON,
    TasksGetInstanceResFromJSON,
    TasksGetInstanceResToJSON,
    TasksGetObjectsAndStepsResFromJSON,
    TasksGetObjectsAndStepsResToJSON,
    TasksUpdateReqFromJSON,
    TasksUpdateReqToJSON,
} from '../models';

export interface ApiEndpointsTasksCreateRequest {
    tasksCreateReq: TasksCreateReq;
}

export interface ApiEndpointsTasksDeleteRequest {
    id: number;
    tasksDeleteReq: TasksDeleteReq;
}

export interface ApiEndpointsTasksGetByIdRequest {
    id: number;
}

export interface ApiEndpointsTasksGetInstanceRequest {
    id: string;
    taskId: number;
}

export interface ApiEndpointsTasksGetObjectsAndStepsRequest {
    taskId: number;
}

export interface ApiEndpointsTasksUpdateRequest {
    id: number;
    tasksUpdateReq: TasksUpdateReq;
}

/**
 * 
 */
export class TasksApi extends runtime.BaseAPI {

    /**
     */
    async apiEndpointsTasksCreateRaw(requestParameters: ApiEndpointsTasksCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TasksCreateRes>> {
        if (requestParameters.tasksCreateReq === null || requestParameters.tasksCreateReq === undefined) {
            throw new runtime.RequiredError('tasksCreateReq','Required parameter requestParameters.tasksCreateReq was null or undefined when calling apiEndpointsTasksCreate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/tasks`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TasksCreateReqToJSON(requestParameters.tasksCreateReq),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TasksCreateResFromJSON(jsonValue));
    }

    /**
     */
    async apiEndpointsTasksCreate(requestParameters: ApiEndpointsTasksCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TasksCreateRes> {
        const response = await this.apiEndpointsTasksCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiEndpointsTasksDeleteRaw(requestParameters: ApiEndpointsTasksDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiEndpointsTasksDelete.');
        }

        if (requestParameters.tasksDeleteReq === null || requestParameters.tasksDeleteReq === undefined) {
            throw new runtime.RequiredError('tasksDeleteReq','Required parameter requestParameters.tasksDeleteReq was null or undefined when calling apiEndpointsTasksDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/tasks/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: TasksDeleteReqToJSON(requestParameters.tasksDeleteReq),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async apiEndpointsTasksDelete(requestParameters: ApiEndpointsTasksDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.apiEndpointsTasksDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiEndpointsTasksGetByIdRaw(requestParameters: ApiEndpointsTasksGetByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TasksGetByIdRes>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiEndpointsTasksGetById.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/tasks/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TasksGetByIdResFromJSON(jsonValue));
    }

    /**
     */
    async apiEndpointsTasksGetById(requestParameters: ApiEndpointsTasksGetByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TasksGetByIdRes> {
        const response = await this.apiEndpointsTasksGetByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiEndpointsTasksGetInstanceRaw(requestParameters: ApiEndpointsTasksGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TasksGetInstanceRes>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiEndpointsTasksGetInstance.');
        }

        if (requestParameters.taskId === null || requestParameters.taskId === undefined) {
            throw new runtime.RequiredError('taskId','Required parameter requestParameters.taskId was null or undefined when calling apiEndpointsTasksGetInstance.');
        }

        const queryParameters: any = {};

        if (requestParameters.taskId !== undefined) {
            queryParameters['TaskId'] = requestParameters.taskId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/tasks/instance/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TasksGetInstanceResFromJSON(jsonValue));
    }

    /**
     */
    async apiEndpointsTasksGetInstance(requestParameters: ApiEndpointsTasksGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TasksGetInstanceRes> {
        const response = await this.apiEndpointsTasksGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiEndpointsTasksGetObjectsAndStepsRaw(requestParameters: ApiEndpointsTasksGetObjectsAndStepsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TasksGetObjectsAndStepsRes>> {
        if (requestParameters.taskId === null || requestParameters.taskId === undefined) {
            throw new runtime.RequiredError('taskId','Required parameter requestParameters.taskId was null or undefined when calling apiEndpointsTasksGetObjectsAndSteps.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/tasks/{TaskId}/objects_and_steps`.replace(`{${"TaskId"}}`, encodeURIComponent(String(requestParameters.taskId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TasksGetObjectsAndStepsResFromJSON(jsonValue));
    }

    /**
     */
    async apiEndpointsTasksGetObjectsAndSteps(requestParameters: ApiEndpointsTasksGetObjectsAndStepsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TasksGetObjectsAndStepsRes> {
        const response = await this.apiEndpointsTasksGetObjectsAndStepsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiEndpointsTasksUpdateRaw(requestParameters: ApiEndpointsTasksUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiEndpointsTasksUpdate.');
        }

        if (requestParameters.tasksUpdateReq === null || requestParameters.tasksUpdateReq === undefined) {
            throw new runtime.RequiredError('tasksUpdateReq','Required parameter requestParameters.tasksUpdateReq was null or undefined when calling apiEndpointsTasksUpdate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/tasks/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: TasksUpdateReqToJSON(requestParameters.tasksUpdateReq),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async apiEndpointsTasksUpdate(requestParameters: ApiEndpointsTasksUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.apiEndpointsTasksUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
