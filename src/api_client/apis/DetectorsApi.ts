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
  DetectorsCommandReq,
  DetectorsHeartBeatReq,
  DetectorsIdentifyReq,
} from '../models';

export interface ApiEndpointsDetectorsAttachRequest {
    locationId: number;
    detectorId: number;
}

export interface ApiEndpointsDetectorsCommandRequest {
    id: number;
    detectorsCommandReq: DetectorsCommandReq;
}

export interface ApiEndpointsDetectorsDetachRequest {
    locationId: number;
}

export interface ApiEndpointsDetectorsHeartBeatRequest {
    macAddress: string;
    detectorsHeartBeatReq: DetectorsHeartBeatReq;
}

export interface ApiEndpointsDetectorsIdentifyRequest {
    locationId: number;
    detectorsIdentifyReq: DetectorsIdentifyReq;
}

export interface ApiEndpointsDetectorsSnapshotRequest {
    id: number;
}

export interface ApiEndpointsDetectorsStreamRequest {
    id: number;
}

/**
 * 
 */
export class DetectorsApi extends runtime.BaseAPI {

    /**
     */
    async apiEndpointsDetectorsAttachRaw(requestParameters: ApiEndpointsDetectorsAttachRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.locationId === null || requestParameters.locationId === undefined) {
            throw new runtime.RequiredError('locationId','Required parameter requestParameters.locationId was null or undefined when calling apiEndpointsDetectorsAttach.');
        }

        if (requestParameters.detectorId === null || requestParameters.detectorId === undefined) {
            throw new runtime.RequiredError('detectorId','Required parameter requestParameters.detectorId was null or undefined when calling apiEndpointsDetectorsAttach.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/detectors/{LocationId}/attach/{DetectorId}`.replace(`{${"LocationId"}}`, encodeURIComponent(String(requestParameters.locationId))).replace(`{${"DetectorId"}}`, encodeURIComponent(String(requestParameters.detectorId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async apiEndpointsDetectorsAttach(requestParameters: ApiEndpointsDetectorsAttachRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.apiEndpointsDetectorsAttachRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiEndpointsDetectorsCommandRaw(requestParameters: ApiEndpointsDetectorsCommandRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiEndpointsDetectorsCommand.');
        }

        if (requestParameters.detectorsCommandReq === null || requestParameters.detectorsCommandReq === undefined) {
            throw new runtime.RequiredError('detectorsCommandReq','Required parameter requestParameters.detectorsCommandReq was null or undefined when calling apiEndpointsDetectorsCommand.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/detectors/{id}/command`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.detectorsCommandReq,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async apiEndpointsDetectorsCommand(requestParameters: ApiEndpointsDetectorsCommandRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.apiEndpointsDetectorsCommandRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiEndpointsDetectorsDetachRaw(requestParameters: ApiEndpointsDetectorsDetachRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.locationId === null || requestParameters.locationId === undefined) {
            throw new runtime.RequiredError('locationId','Required parameter requestParameters.locationId was null or undefined when calling apiEndpointsDetectorsDetach.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/detectors/{LocationId}/detach`.replace(`{${"LocationId"}}`, encodeURIComponent(String(requestParameters.locationId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async apiEndpointsDetectorsDetach(requestParameters: ApiEndpointsDetectorsDetachRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.apiEndpointsDetectorsDetachRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiEndpointsDetectorsHeartBeatRaw(requestParameters: ApiEndpointsDetectorsHeartBeatRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.macAddress === null || requestParameters.macAddress === undefined) {
            throw new runtime.RequiredError('macAddress','Required parameter requestParameters.macAddress was null or undefined when calling apiEndpointsDetectorsHeartBeat.');
        }

        if (requestParameters.detectorsHeartBeatReq === null || requestParameters.detectorsHeartBeatReq === undefined) {
            throw new runtime.RequiredError('detectorsHeartBeatReq','Required parameter requestParameters.detectorsHeartBeatReq was null or undefined when calling apiEndpointsDetectorsHeartBeat.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/detectors/{MacAddress}/heartbeat`.replace(`{${"MacAddress"}}`, encodeURIComponent(String(requestParameters.macAddress))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.detectorsHeartBeatReq,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async apiEndpointsDetectorsHeartBeat(requestParameters: ApiEndpointsDetectorsHeartBeatRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.apiEndpointsDetectorsHeartBeatRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiEndpointsDetectorsIdentifyRaw(requestParameters: ApiEndpointsDetectorsIdentifyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.locationId === null || requestParameters.locationId === undefined) {
            throw new runtime.RequiredError('locationId','Required parameter requestParameters.locationId was null or undefined when calling apiEndpointsDetectorsIdentify.');
        }

        if (requestParameters.detectorsIdentifyReq === null || requestParameters.detectorsIdentifyReq === undefined) {
            throw new runtime.RequiredError('detectorsIdentifyReq','Required parameter requestParameters.detectorsIdentifyReq was null or undefined when calling apiEndpointsDetectorsIdentify.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/detectors/{LocationId}/identify`.replace(`{${"LocationId"}}`, encodeURIComponent(String(requestParameters.locationId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.detectorsIdentifyReq,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async apiEndpointsDetectorsIdentify(requestParameters: ApiEndpointsDetectorsIdentifyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.apiEndpointsDetectorsIdentifyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiEndpointsDetectorsSnapshotRaw(requestParameters: ApiEndpointsDetectorsSnapshotRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiEndpointsDetectorsSnapshot.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/detectors/{id}/snapshot`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     */
    async apiEndpointsDetectorsSnapshot(requestParameters: ApiEndpointsDetectorsSnapshotRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.apiEndpointsDetectorsSnapshotRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiEndpointsDetectorsStreamRaw(requestParameters: ApiEndpointsDetectorsStreamRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiEndpointsDetectorsStream.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/detectors/{id}/stream`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     */
    async apiEndpointsDetectorsStream(requestParameters: ApiEndpointsDetectorsStreamRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.apiEndpointsDetectorsStreamRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
