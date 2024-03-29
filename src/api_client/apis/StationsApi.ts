/* tslint:disable */
/* eslint-disable */
/**
 * Api
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
  ErrorResponse,
  StationsCreateReq,
  StationsCreateRes,
  StationsGetByIdRes,
  StationsRenameReq,
} from '../models';

export interface ApiEndpointsStationsCreateRequest {
    stationsCreateReq: StationsCreateReq;
}

export interface ApiEndpointsStationsDeleteRequest {
    id: number;
}

export interface ApiEndpointsStationsGetByIdRequest {
    id: number;
}

export interface ApiEndpointsStationsRenameRequest {
    id: number;
    stationsRenameReq: StationsRenameReq;
}

/**
 * 
 */
export class StationsApi extends runtime.BaseAPI {

    /**
     */
    async apiEndpointsStationsCreateRaw(requestParameters: ApiEndpointsStationsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StationsCreateRes>> {
        if (requestParameters.stationsCreateReq === null || requestParameters.stationsCreateReq === undefined) {
            throw new runtime.RequiredError('stationsCreateReq','Required parameter requestParameters.stationsCreateReq was null or undefined when calling apiEndpointsStationsCreate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/stations`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.stationsCreateReq,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     */
    async apiEndpointsStationsCreate(requestParameters: ApiEndpointsStationsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StationsCreateRes> {
        const response = await this.apiEndpointsStationsCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiEndpointsStationsDeleteRaw(requestParameters: ApiEndpointsStationsDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiEndpointsStationsDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/stations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async apiEndpointsStationsDelete(requestParameters: ApiEndpointsStationsDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.apiEndpointsStationsDeleteRaw(requestParameters, initOverrides);
    }

    /**
     */
    async apiEndpointsStationsGetByIdRaw(requestParameters: ApiEndpointsStationsGetByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StationsGetByIdRes>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiEndpointsStationsGetById.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/stations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     */
    async apiEndpointsStationsGetById(requestParameters: ApiEndpointsStationsGetByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StationsGetByIdRes> {
        const response = await this.apiEndpointsStationsGetByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiEndpointsStationsRenameRaw(requestParameters: ApiEndpointsStationsRenameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiEndpointsStationsRename.');
        }

        if (requestParameters.stationsRenameReq === null || requestParameters.stationsRenameReq === undefined) {
            throw new runtime.RequiredError('stationsRenameReq','Required parameter requestParameters.stationsRenameReq was null or undefined when calling apiEndpointsStationsRename.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/stations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.stationsRenameReq,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async apiEndpointsStationsRename(requestParameters: ApiEndpointsStationsRenameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.apiEndpointsStationsRenameRaw(requestParameters, initOverrides);
    }

}
