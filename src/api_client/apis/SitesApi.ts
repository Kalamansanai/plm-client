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
  SitesCreateReq,
  SitesCreateRes,
  SitesGetByIdRes,
  SitesListRes,
  SitesRenameReq,
} from '../models';

export interface ApiEndpointsSitesCreateRequest {
    sitesCreateReq: SitesCreateReq;
}

export interface ApiEndpointsSitesDeleteRequest {
    id: number;
}

export interface ApiEndpointsSitesGetByIdRequest {
    id: number;
}

export interface ApiEndpointsSitesRenameRequest {
    id: number;
    sitesRenameReq: SitesRenameReq;
}

/**
 * 
 */
export class SitesApi extends runtime.BaseAPI {

    /**
     */
    async apiEndpointsSitesCreateRaw(requestParameters: ApiEndpointsSitesCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SitesCreateRes>> {
        if (requestParameters.sitesCreateReq === null || requestParameters.sitesCreateReq === undefined) {
            throw new runtime.RequiredError('sitesCreateReq','Required parameter requestParameters.sitesCreateReq was null or undefined when calling apiEndpointsSitesCreate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/sites`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.sitesCreateReq,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     */
    async apiEndpointsSitesCreate(requestParameters: ApiEndpointsSitesCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SitesCreateRes> {
        const response = await this.apiEndpointsSitesCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiEndpointsSitesDeleteRaw(requestParameters: ApiEndpointsSitesDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiEndpointsSitesDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/sites/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async apiEndpointsSitesDelete(requestParameters: ApiEndpointsSitesDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.apiEndpointsSitesDeleteRaw(requestParameters, initOverrides);
    }

    /**
     */
    async apiEndpointsSitesGetByIdRaw(requestParameters: ApiEndpointsSitesGetByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SitesGetByIdRes>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiEndpointsSitesGetById.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/sites/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     */
    async apiEndpointsSitesGetById(requestParameters: ApiEndpointsSitesGetByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SitesGetByIdRes> {
        const response = await this.apiEndpointsSitesGetByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiEndpointsSitesListRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<SitesListRes>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/sites`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     */
    async apiEndpointsSitesList(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<SitesListRes>> {
        const response = await this.apiEndpointsSitesListRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async apiEndpointsSitesRenameRaw(requestParameters: ApiEndpointsSitesRenameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiEndpointsSitesRename.');
        }

        if (requestParameters.sitesRenameReq === null || requestParameters.sitesRenameReq === undefined) {
            throw new runtime.RequiredError('sitesRenameReq','Required parameter requestParameters.sitesRenameReq was null or undefined when calling apiEndpointsSitesRename.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/sites/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.sitesRenameReq,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async apiEndpointsSitesRename(requestParameters: ApiEndpointsSitesRenameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.apiEndpointsSitesRenameRaw(requestParameters, initOverrides);
    }

}
