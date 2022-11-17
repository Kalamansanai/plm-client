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
  ErrorResponse,
  OPUsCreateReq,
  OPUsCreateRes,
  OPUsGetByIdRes,
  OPUsRenameReq,
} from '../models';

export interface ApiEndpointsOPUsCreateRequest {
    oPUsCreateReq: OPUsCreateReq;
}

export interface ApiEndpointsOPUsDeleteRequest {
    id: number;
}

export interface ApiEndpointsOPUsGetByIdRequest {
    id: number;
}

export interface ApiEndpointsOPUsRenameRequest {
    id: number;
    oPUsRenameReq: OPUsRenameReq;
}

/**
 * 
 */
export class OPUsApi extends runtime.BaseAPI {

    /**
     */
    async apiEndpointsOPUsCreateRaw(requestParameters: ApiEndpointsOPUsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OPUsCreateRes>> {
        if (requestParameters.oPUsCreateReq === null || requestParameters.oPUsCreateReq === undefined) {
            throw new runtime.RequiredError('oPUsCreateReq','Required parameter requestParameters.oPUsCreateReq was null or undefined when calling apiEndpointsOPUsCreate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/opus`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.oPUsCreateReq,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     */
    async apiEndpointsOPUsCreate(requestParameters: ApiEndpointsOPUsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OPUsCreateRes> {
        const response = await this.apiEndpointsOPUsCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiEndpointsOPUsDeleteRaw(requestParameters: ApiEndpointsOPUsDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiEndpointsOPUsDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/opus/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async apiEndpointsOPUsDelete(requestParameters: ApiEndpointsOPUsDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.apiEndpointsOPUsDeleteRaw(requestParameters, initOverrides);
    }

    /**
     */
    async apiEndpointsOPUsGetByIdRaw(requestParameters: ApiEndpointsOPUsGetByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OPUsGetByIdRes>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiEndpointsOPUsGetById.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/opus/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     */
    async apiEndpointsOPUsGetById(requestParameters: ApiEndpointsOPUsGetByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OPUsGetByIdRes> {
        const response = await this.apiEndpointsOPUsGetByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiEndpointsOPUsRenameRaw(requestParameters: ApiEndpointsOPUsRenameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiEndpointsOPUsRename.');
        }

        if (requestParameters.oPUsRenameReq === null || requestParameters.oPUsRenameReq === undefined) {
            throw new runtime.RequiredError('oPUsRenameReq','Required parameter requestParameters.oPUsRenameReq was null or undefined when calling apiEndpointsOPUsRename.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/opus/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.oPUsRenameReq,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async apiEndpointsOPUsRename(requestParameters: ApiEndpointsOPUsRenameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.apiEndpointsOPUsRenameRaw(requestParameters, initOverrides);
    }

}
