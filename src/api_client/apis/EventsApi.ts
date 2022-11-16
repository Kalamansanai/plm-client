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
  EventsCreateReq,
} from '../models';

export interface ApiEndpointsEventsCreateRequest {
    eventsCreateReq: EventsCreateReq;
}

/**
 * 
 */
export class EventsApi extends runtime.BaseAPI {

    /**
     */
    async apiEndpointsEventsCreateRaw(requestParameters: ApiEndpointsEventsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.eventsCreateReq === null || requestParameters.eventsCreateReq === undefined) {
            throw new runtime.RequiredError('eventsCreateReq','Required parameter requestParameters.eventsCreateReq was null or undefined when calling apiEndpointsEventsCreate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/events`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.eventsCreateReq,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async apiEndpointsEventsCreate(requestParameters: ApiEndpointsEventsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.apiEndpointsEventsCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
