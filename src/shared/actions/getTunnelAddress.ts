"use server";

import {IError, IPostApiCreateAddressCurrencyEnum, TunnelServiceApi} from "@/shared/services/TunnelServiceApi";
import {getDbUser} from "@/shared/actions/getDbUser";
import * as crypto from "node:crypto";
import {BinaryLike} from "node:crypto";

export async function getTunnelAddress(currency: IPostApiCreateAddressCurrencyEnum) {
    try {
        console.log("called")
        const service = new TunnelServiceApi({
            securityWorker: async (securityData: { token: string; secret: string } | null, body?: unknown) => {
                if (!securityData) {
                    return {};
                }

                console.log("body", body)

                // Compute HMAC-SHA512 signature
                const signature = crypto.createHmac('sha512', securityData.secret)
                    .update(<BinaryLike>body)
                    .digest('hex');

                return {
                    headers: {
                        'X-API-SIGNATURE': signature,
                        'X-API-KEY': securityData.token, // Assuming you also want to add the API Key
                    },
                };
            }
        });
        const user = await getDbUser();
        service.setSecurityData({ token: process.env.CRYPTO_GATEWAY_API_TOKEN!, secret: process.env.CRYPTO_GATEWAY_API_SECRET! })
        // const response = await fetch(baseUrl + url, { next: { revalidate: 300 }, headers: {
        //         "Authorization": `bearer ${process.env.STRAPI_TOKEN}`
        //     } });
        const previous_address = await service.referenceId.getApiReferenceId(user._id as unknown as string)
        if(previous_address.data)
            return previous_address.data.list ? previous_address.data.list[previous_address.data.list?.length - 1] : null;

        const new_address = await service.addresses.postApiCreateAddress({
            currency: currency,
            referenceId: user._id as unknown as string
        })
        return new_address.data
    } catch (error) {
        throw error;
    }
}