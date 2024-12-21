/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** @example [{"amount":0,"currency":"BTC","type":"crypto"},{"amount":0,"currency":"ETH","type":"crypto"},{"amount":0,"currency":"USDT_ERC20","type":"crypto"},{"amount":0,"currency":"USDT_TRC20","type":"crypto"},{"amount":0,"currency":"USDT_BEP20","type":"crypto"},{"amount":0,"currency":"ETH_BEP20","type":"crypto"},{"amount":0,"currency":"USDC_BEP20","type":"crypto"},{"amount":0,"currency":"USDC","type":"crypto"},{"amount":0,"currency":"BUSD","type":"crypto"},{"amount":0,"currency":"DAI","type":"crypto"},{"amount":0,"currency":"BNB","type":"crypto"},{"amount":0,"currency":"MATIC_Polygon","type":"crypto"},{"amount":0,"currency":"USDT_Polygon","type":"crypto"},{"amount":0,"currency":"TRX","type":"crypto"},{"amount":0,"currency":"TON","type":"crypto"},{"amount":0,"currency":"EUR","type":"fiat"},{"amount":0,"currency":"USD","type":"fiat"},{"amount":0,"currency":"RUB","type":"fiat"}] */
export type IBalance = object;

export interface ICallbackResponse {
  callbackId: number;
  /** @format uuidv4 */
  id: string;
  operations?: IDeposit[];
  referenceId?: string | null;
  /** @example "incoming" */
  status: ICallbackResponseStatusEnum;
  /** @example "Deposit successfully executed" */
  statusNote?: string | null;
  /** @format date-time */
  timestampCreated: string;
  /** @format date-time */
  timestampUpdated?: string;
  /** @example "incoming" */
  type: ICallbackResponseTypeEnum;
}

export interface ICallbacks {
  /** @format date-time */
  createAt: string;
  /** @example ["incoming","outgoing","withdrawal","fiat_manual_withdrawal","deposit"] */
  events: string[];
  /** @example "1" */
  id: number;
  /** @example "https:/example.com/123?q=1&p=2" */
  url: string;
}

export interface IDeposit {
  addressDestination?: string;
  addressSource?: string | null;
  /** @format float */
  amount: number;
  /** @format float */
  amountFinal: number;
  currency: string;
  id: number;
  serviceFee?: string;
  /** @example "processing" */
  status: IDepositStatusEnum;
  txHash: string;
  /** @example "deposit" */
  type: IDepositTypeEnum;
}

export interface IError {
  code?: string;
  issueID?: string;
  message: string;
}

export interface IExchange {
  /** @format float */
  amount: number;
  /** @format float */
  amountFinal?: number | null;
  /** @example "BTC" */
  currency: string;
  /** @example "EUR" */
  exchangeFrom: string;
  id: number;
  /** @format float */
  rate?: number | null;
  /** @example "processing" */
  status: IExchangeStatusEnum;
  /** @example "exchange" */
  type: IExchangeTypeEnum;
}

export interface IFiatManualWithdrawal {
  /** @format float */
  amount: number;
  currency: string;
  ibanFrom: string;
  ibanTo: string;
  id: number;
  /** @example "processing" */
  status: IFiatManualWithdrawalStatusEnum;
  /** @example "fiat_manual_withdrawal" */
  type: IFiatManualWithdrawalTypeEnum;
}

export interface ITransactions {
  /** @format float */
  amount: number;
  /** @example "gross" */
  amountType?: ITransactionsAmountTypeEnum;
  /** @format uuidv4 */
  id: string;
  operations?: IDeposit[];
  referenceId?: string | null;
  /** @example "processing" */
  status: ITransactionsStatusEnum;
  /** @example "Deposit successfully executed" */
  statusNote?: string | null;
  /** @format date-time */
  timestampCreated: string;
  /** @format date-time */
  timestampUpdated?: string;
  /** @example "incoming" */
  type: ITransactionsTypeEnum;
}

export interface IWithdrawal {
  address: string;
  /** @format float */
  amount: number;
  /** @format float */
  amountFinal: number;
  currency: string;
  id: number;
  serviceFee: string;
  /** @example "processing" */
  status: IWithdrawalStatusEnum;
  txHash?: string | null;
  /** @example "withdrawal" */
  type: IWithdrawalTypeEnum;
}

/** @example "incoming" */
export enum ICallbackResponseStatusEnum {
  New = "new",
  Processing = "processing",
  Executed = "executed",
  Cancelled = "cancelled",
  Reversed = "reversed",
}

/** @example "incoming" */
export enum ICallbackResponseTypeEnum {
  Incoming = "incoming",
  Outgoing = "outgoing",
  Withdrawal = "withdrawal",
  FiatManualWithdrawal = "fiat_manual_withdrawal",
  Deposit = "deposit",
}

/** @example "processing" */
export enum IDepositStatusEnum {
  New = "new",
  Processing = "processing",
  Executed = "executed",
  Cancelled = "cancelled",
  Reversed = "reversed",
}

/** @example "deposit" */
export enum IDepositTypeEnum {
  Deposit = "deposit",
  Exchange = "exchange",
  Withdrawal = "withdrawal",
  FiatManualWithdrawal = "fiat_manual_withdrawal",
}

/** @example "processing" */
export enum IExchangeStatusEnum {
  New = "new",
  Processing = "processing",
  Executed = "executed",
  Cancelled = "cancelled",
  Reversed = "reversed",
}

/** @example "exchange" */
export enum IExchangeTypeEnum {
  Deposit = "deposit",
  Exchange = "exchange",
  Withdrawal = "withdrawal",
  FiatManualWithdrawal = "fiat_manual_withdrawal",
}

/** @example "processing" */
export enum IFiatManualWithdrawalStatusEnum {
  New = "new",
  Processing = "processing",
  Executed = "executed",
  Cancelled = "cancelled",
  Reversed = "reversed",
}

/** @example "fiat_manual_withdrawal" */
export enum IFiatManualWithdrawalTypeEnum {
  Deposit = "deposit",
  Exchange = "exchange",
  Withdrawal = "withdrawal",
  FiatManualWithdrawal = "fiat_manual_withdrawal",
}

/** @example "gross" */
export enum ITransactionsAmountTypeEnum {
  Gross = "gross",
  Net = "net",
  Purchase = "purchase",
}

/** @example "processing" */
export enum ITransactionsStatusEnum {
  New = "new",
  Processing = "processing",
  Executed = "executed",
  Cancelled = "cancelled",
  Reversed = "reversed",
}

/** @example "incoming" */
export enum ITransactionsTypeEnum {
  Incoming = "incoming",
  Outgoing = "outgoing",
  Withdrawal = "withdrawal",
  FiatManualWithdrawal = "fiat_manual_withdrawal",
  Deposit = "deposit",
}

/** @example "processing" */
export enum IWithdrawalStatusEnum {
  New = "new",
  Processing = "processing",
  Executed = "executed",
  Cancelled = "cancelled",
  Reversed = "reversed",
}

/** @example "withdrawal" */
export enum IWithdrawalTypeEnum {
  Deposit = "deposit",
  Exchange = "exchange",
  Withdrawal = "withdrawal",
  FiatManualWithdrawal = "fiat_manual_withdrawal",
}

/** The name of currency to be deposited */
export enum IPostApiCreateAddressCurrencyEnum {
  BTC = "BTC",
  ETH = "ETH",
  USDTERC20 = "USDT_ERC20",
  USDTBEP20 = "USDT_BEP20",
  USDTTRC20 = "USDT_TRC20",
  ETHBEP20 = "ETH_BEP20",
  USDCBEP20 = "USDC_BEP20",
  USDC = "USDC",
  BUSD = "BUSD",
  DAI = "DAI",
  BNB = "BNB",
  USDTPolygon = "USDT_Polygon",
  TRX = "TRX",
  TON = "TON",
}

/** The name of currency */
export enum IGetApiAssetsNetworkFeeParamsCurrencyEnum {
  BTC = "BTC",
  ETH = "ETH",
  TRX = "TRX",
  TON = "TON",
  StableERC20 = "Stable_ERC20",
  StableTRC20 = "Stable_TRC20",
}

export enum IGetApiAssetsNetworkFeeParamsEnum {
  BTC = "BTC",
  ETH = "ETH",
  TRX = "TRX",
  TON = "TON",
  StableERC20 = "Stable_ERC20",
  StableTRC20 = "Stable_TRC20",
}

/** The pair of two currencies */
export enum IGetApiRateParamsPairEnum {
  BTCUSD = "BTC:USD",
  ETHUSD = "ETH:USD",
  USDTERC20USD = "USDT_ERC20:USD",
  USDTTRC20USD = "USDT_TRC20:USD",
  BTCEUR = "BTC:EUR",
  BTCUSDTERC20 = "BTC:USDT_ERC20",
  ETHEUR = "ETH:EUR",
  ETHUSDTERC20 = "ETH:USDT_ERC20",
  USDTERC20EUR = "USDT_ERC20:EUR",
  USDTTRC20EUR = "USDT_TRC20:EUR",
  ETHBEP20EUR = "ETH_BEP20:EUR",
  USDCBEP20EUR = "USDC_BEP20:EUR",
  ETHBEP20USDTERC20 = "ETH_BEP20:USDT_ERC20",
  ETHBEP20USD = "ETH_BEP20:USD",
  USDCBEP20USD = "USDC_BEP20:USD",
  USDTPolygonUSD = "USDT_Polygon:USD",
}

export enum IGetApiRateParamsEnum {
  BTCUSD = "BTC:USD",
  ETHUSD = "ETH:USD",
  USDTERC20USD = "USDT_ERC20:USD",
  USDTTRC20USD = "USDT_TRC20:USD",
  BTCEUR = "BTC:EUR",
  BTCUSDTERC20 = "BTC:USDT_ERC20",
  ETHEUR = "ETH:EUR",
  ETHUSDTERC20 = "ETH:USDT_ERC20",
  USDTERC20EUR = "USDT_ERC20:EUR",
  USDTTRC20EUR = "USDT_TRC20:EUR",
  ETHBEP20EUR = "ETH_BEP20:EUR",
  USDCBEP20EUR = "USDC_BEP20:EUR",
  ETHBEP20USDTERC20 = "ETH_BEP20:USDT_ERC20",
  ETHBEP20USD = "ETH_BEP20:USD",
  USDCBEP20USD = "USDC_BEP20:USD",
  USDTPolygonUSD = "USDT_Polygon:USD",
}

export enum IPostApiCallbackCreateTransactionsEnum {
  Incoming = "incoming",
  Outgoing = "outgoing",
  Withdrawal = "withdrawal",
  FiatManualWithdrawal = "fiat_manual_withdrawal",
  Deposit = "deposit",
}

export enum IGetApiGetBanksParamsCurrencyEnum {
  EUR = "EUR",
  USD = "USD",
}

/** @example "new" */
export enum IPostApiCreateDraStatusEnum {
  New = "new",
  Confirmed = "confirmed",
  Canceled = "canceled",
}

/** The name of currency to be deposited */
export enum IPostApiCreateDraCurrencyEnum {
  EUR = "EUR",
  USD = "USD",
}

/** @example "confirmed" */
export enum IGetApiGetDraStatusEnum {
  New = "new",
  Confirmed = "confirmed",
  Canceled = "canceled",
}

/** The name of currency to be deposited */
export enum IPostApiCreateIncomingCurrencyEnum {
  BTC = "BTC",
  ETH = "ETH",
  USDTERC20 = "USDT_ERC20",
  USDTTRC20 = "USDT_TRC20",
  USDCBEP20 = "USDC_BEP20",
  ETHBEP20 = "ETH_BEP20",
  USDTPolygon = "USDT_Polygon",
}

/** The exchange currency name */
export enum IPostApiCreateIncomingExchangeToEnum {
  EUR = "EUR",
  USD = "USD",
  USDTERC20 = "USDT_ERC20",
}

/** Allows to specify if amount value represents actual 'gross' amount, 'net' amount (a crypto amount after service fee deductions and what actually recipient will recieve) or 'purchase' amount (a crypto amount to be purchased) */
export enum IPostApiCreateOutgoingAmountTypeEnum {
  Gross = "gross",
  Net = "net",
  Purchase = "purchase",
}

/** The currency of funds to be withdrawn */
export enum IPostApiCreateOutgoingCurrencyEnum {
  BTC = "BTC",
  ETH = "ETH",
  USDTERC20 = "USDT_ERC20",
  USDTTRC20 = "USDT_TRC20",
  USDCBEP20 = "USDC_BEP20",
  ETHBEP20 = "ETH_BEP20",
  USDTPolygon = "USDT_Polygon",
}

/** The FIAT/stablecoin currency name to exchange crypto from */
export enum IPostApiCreateOutgoingExchangeFromEnum {
  EUR = "EUR",
  USDTERC20 = "USDT_ERC20",
  USD = "USD",
}

export enum IGetApiTransactionsGetPageLimitParamsNameEnum {
  Incoming = "incoming",
  Outgoing = "outgoing",
  Withdrawal = "withdrawal",
  FiatManualWithdrawal = "fiat_manual_withdrawal",
  Deposit = "deposit",
}

/**
 * Sorting for create datetime
 * @default "descending"
 */
export enum IGetApiTransactionsGetPageLimitParamsSortEnum {
  Ascending = "ascending",
  Descending = "descending",
}

/**
 * Allows to specify if amount value represents actual 'gross' amount or 'net' amount (after service fee deductions and what actually recipient will recieve)
 * @example "gross"
 */
export enum IPostApiCreateWithdrawAmountTypeEnum {
  Gross = "gross",
  Net = "net",
}

/** The currency of funds to be withdrawn */
export enum IPostApiCreateWithdrawCurrencyEnum {
  BTC = "BTC",
  ETH = "ETH",
  USDTERC20 = "USDT_ERC20",
  USDTBEP20 = "USDT_BEP20",
  USDTTRC20 = "USDT_TRC20",
  ETHBEP20 = "ETH_BEP20",
  USDCBEP20 = "USDC_BEP20",
  USDC = "USDC",
  BUSD = "BUSD",
  DAI = "DAI",
  BNB = "BNB",
  USDTPolygon = "USDT_Polygon",
  TRX = "TRX",
  TON = "TON",
}

/** @example "new" */
export enum IPostApiCreateFiatManualWithdrawalStatusEnum {
  New = "new",
  Processing = "processing",
  Executed = "executed",
  Cancelled = "cancelled",
  Reversed = "reversed",
}

/** The currency of funds to be withdrawn */
export enum IPostApiCreateFiatManualWithdrawalCurrencyEnum {
  EUR = "EUR",
  USD = "USD",
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null, body: unknown) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "https://sandbox-live-tunell-gateway.ecng.digital";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    let formattedBody: string = '';

    function toUrlEncoded(obj: Record<string, any>): string {
      return Object.entries(obj)
          .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
          .join('&');
    }
    if (type === ContentType.UrlEncoded && body && typeof body === 'object') {
      formattedBody = toUrlEncoded(body as Record<string, any>);
    } else if (type === ContentType.Json && body && typeof body === 'object') {
      formattedBody = JSON.stringify(body);
    } else if (typeof body === 'string') {
      formattedBody = body;
    } else {
      formattedBody = body ? String(body) : '';
    }
    
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData, formattedBody))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    console.log("requestParams", requestParams)

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Tunell Gateway
 * @version 0.0.1
 * @termsOfService https://ecng.digital/TOS
 * @baseUrl https://sandbox-live-tunell-gateway.ecng.digital
 * @contact <support@ecng.digital>
 *
 * Tunell .finance GateWay API by [ECNG.digital](https://ecng.digital). <br>  This API is designed for merchants to use all functions of GateWay product via the API key assigned to their account. <br> Enter your API key to <b>“Authorize”</b> box in order to test out the functionality.
 */
export class TunnelServiceApi<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  addresses = {
    /**
 * No description
 *
 * @tags DEPOSITS
 * @name PostApiCreateAddress
 * @summary Create a new address to receive crypto funds
 * @request POST:/addresses
 * @secure
 * @response `200` `{
  \** @example "bc1q42lja79elem0anu8q8s3h2n687re9jax556pcc" *\
    address?: string,
  \** @example "BTC" *\
    currency?: string,
  \** @example "15e15hWo6CShMgbAfo8c2Ykj4C6BLq6Not" *\
    legacyAddress?: string,

}`
 * @response `401` `IError`
 * @response `500` `IError`
 * @response `504` `IError`
 */
    postApiCreateAddress: (
      data: {
        /** The name of currency to be deposited */
        currency: IPostApiCreateAddressCurrencyEnum;
        /** The external identifier of the transaction */
        referenceId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "bc1q42lja79elem0anu8q8s3h2n687re9jax556pcc" */
          address?: string;
          /** @example "BTC" */
          currency?: string;
          /** @example "15e15hWo6CShMgbAfo8c2Ykj4C6BLq6Not" */
          legacyAddress?: string;
        },
        IError
      >({
        path: `/addresses`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        format: "json",
        ...params,
      }),
  };
  assets = {
    /**
 * No description
 *
 * @tags ASSETS
 * @name GetApiAssetsNetworkFee
 * @summary Get live network fee for major currencies
 * @request GET:/assets/networkFee/{currency}
 * @secure
 * @response `200` `{
  \** @format float *\
    inNative?: number,
  \** @format float *\
    inStable?: number,

}`
 * @response `401` `IError`
 * @response `404` `IError`
 * @response `500` `IError`
 * @response `504` `IError`
 */
    getApiAssetsNetworkFee: (currency: IGetApiAssetsNetworkFeeParamsEnum, params: RequestParams = {}) =>
      this.request<
        {
          /** @format float */
          inNative?: number;
          /** @format float */
          inStable?: number;
        },
        IError
      >({
        path: `/assets/networkFee/${currency}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description Returns live bid for a trading pair. <br> * IMPORTANT: Prices do not include the service commission applied to the account.
 *
 * @tags ASSETS
 * @name GetApiRate
 * @summary Get live exchange rates for major currency pairs
 * @request GET:/assets/rates/{pair}
 * @secure
 * @response `200` `{
    ask?: number,
    bid?: number,
    pair?: string,

}`
 * @response `401` `IError`
 * @response `404` `IError`
 * @response `500` `IError`
 * @response `504` `IError`
 */
    getApiRate: (pair: IGetApiRateParamsEnum, params: RequestParams = {}) =>
      this.request<
        {
          ask?: number;
          bid?: number;
          pair?: string;
        },
        IError
      >({
        path: `/assets/rates/${pair}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * No description
 *
 * @tags ASSETS
 * @name GetApiSupportedAssets
 * @request GET:/assets/supported
 * @secure
 * @response `200` `{
    supportedCurrencies?: ({
  \** @example "BTC" *\
    currency?: string,
  \** @example "Bitcoin" *\
    currencyName?: string,
  \** @example "8" *\
    decimals?: number,
    transactionTypes?: ({
    deposit?: {
  \** @example true *\
    supported?: boolean,

},
    incoming?: {
  \** @example ["USD","EUR","USDT_ERC20"] *\
    exchangeTo?: (string)[],
  \** @example true *\
    supported?: boolean,

},
    outgoing?: {
  \** @example ["USD","EUR","USDT_ERC20"] *\
    exchangeFrom?: (string)[],
  \** @example true *\
    supported?: boolean,

},
    withdrawal?: {
  \** @example true *\
    supported?: boolean,

},

})[],

})[],

}`
 * @response `401` `IError`
 * @response `404` `IError`
 * @response `500` `IError`
 * @response `504` `IError`
 */
    getApiSupportedAssets: (params: RequestParams = {}) =>
      this.request<
        {
          supportedCurrencies?: {
            /** @example "BTC" */
            currency?: string;
            /** @example "Bitcoin" */
            currencyName?: string;
            /** @example "8" */
            decimals?: number;
            transactionTypes?: {
              deposit?: {
                /** @example true */
                supported?: boolean;
              };
              incoming?: {
                /** @example ["USD","EUR","USDT_ERC20"] */
                exchangeTo?: string[];
                /** @example true */
                supported?: boolean;
              };
              outgoing?: {
                /** @example ["USD","EUR","USDT_ERC20"] */
                exchangeFrom?: string[];
                /** @example true */
                supported?: boolean;
              };
              withdrawal?: {
                /** @example true */
                supported?: boolean;
              };
            }[];
          }[];
        },
        IError
      >({
        path: `/assets/supported`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  balance = {
    /**
     * No description
     *
     * @tags ACCOUNT
     * @name GetApiAccountBalance
     * @request GET:/balance
     * @secure
     * @response `200` `IBalance`
     * @response `401` `IError`
     * @response `404` `IError`
     * @response `500` `IError`
     * @response `504` `IError`
     */
    getApiAccountBalance: (params: RequestParams = {}) =>
      this.request<IBalance, IError>({
        path: `/balance`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  callbacks = {
    /**
     * No description
     *
     * @tags CALLBACKS
     * @name GetApiCallbackList
     * @summary Get list of all active callbacks
     * @request GET:/callbacks
     * @secure
     * @response `200` `(ICallbacks)[]`
     * @response `401` `IError`
     * @response `500` `IError`
     * @response `504` `IError`
     */
    getApiCallbackList: (params: RequestParams = {}) =>
      this.request<ICallbacks[], IError>({
        path: `/callbacks`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * No description
 *
 * @tags CALLBACKS
 * @name PostApiCallbackCreate
 * @summary Create a new callback
 * @request POST:/callbacks
 * @secure
 * @response `200` `{
    id?: number,

}`
 * @response `401` `IError`
 * @response `500` `IError`
 * @response `504` `IError`
 */
    postApiCallbackCreate: (
      data: {
        transactions: IPostApiCallbackCreateTransactionsEnum[];
        /** @example "https://example.com/123?q=1&p=2" */
        url: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          id?: number;
        },
        IError
      >({
        path: `/callbacks`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        format: "json",
        ...params,
      }),

    /**
 * No description
 *
 * @tags CALLBACKS
 * @name DeleteApiCallbackDelete
 * @summary Delete specific callback
 * @request DELETE:/callbacks/{id}
 * @secure
 * @response `204` `{
  \** @example "true" *\
    status?: boolean,

}`
 * @response `401` `IError`
 * @response `404` `IError`
 * @response `500` `IError`
 * @response `504` `IError`
 */
    deleteApiCallbackDelete: (id: number, params: RequestParams = {}) =>
      this.request<
        {
          /** @example "true" */
          status?: boolean;
        },
        IError
      >({
        path: `/callbacks/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  deposits = {
    /**
 * No description
 *
 * @tags DEPOSITS
 * @name GetApiGetBanks
 * @summary Get list of banks
 * @request GET:/deposits/fiat/accounts
 * @secure
 * @response `200` `{
    fiatDepositSupportedBanks?: ({
    account?: ({
  \** @example "EUR" *\
    currency?: string,
  \** @example "LT601010012345678901" *\
    iban?: string,

})[],
  \** @example "Bank Name" *\
    bank?: string,
  \** @example "123" *\
    bankId?: number,

})[],

}`
 * @response `401` `IError`
 * @response `404` `IError`
 * @response `500` `IError`
 * @response `504` `IError`
 */
    getApiGetBanks: (
      query: {
        currency: IGetApiGetBanksParamsCurrencyEnum;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          fiatDepositSupportedBanks?: {
            account?: {
              /** @example "EUR" */
              currency?: string;
              /** @example "LT601010012345678901" */
              iban?: string;
            }[];
            /** @example "Bank Name" */
            bank?: string;
            /** @example "123" */
            bankId?: number;
          }[];
        },
        IError
      >({
        path: `/deposits/fiat/accounts`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * No description
 *
 * @tags DEPOSITS
 * @name PostApiCreateDra
 * @summary Create a new deposit request acknowledgement
 * @request POST:/deposits/fiat/dra
 * @secure
 * @response `200` `{
  \** @example "1" *\
    id?: number,
  \** @example "new" *\
    status?: IPostApiCreateDraStatusEnum,

}`
 * @response `401` `IError`
 * @response `500` `IError`
 * @response `504` `IError`
 */
    postApiCreateDra: (
      data: {
        /**
         * The amount of funds to be deposited
         * @format float
         * @example "0.01"
         */
        amount: number;
        /**
         * The identifier of the bank
         * @example "1"
         */
        bankId: number;
        /** The name of currency to be deposited */
        currency: IPostApiCreateDraCurrencyEnum;
        /**
         * The destination IBAN
         * @example "LT601010012345678901"
         */
        iban: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "1" */
          id?: number;
          /** @example "new" */
          status?: IPostApiCreateDraStatusEnum;
        },
        IError
      >({
        path: `/deposits/fiat/dra`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        format: "json",
        ...params,
      }),

    /**
 * No description
 *
 * @tags DEPOSITS
 * @name GetApiGetDra
 * @summary Get a previously created deposit request acknowledgement
 * @request GET:/deposits/fiat/dra/{draId}
 * @secure
 * @response `200` `{
  \** @example "1" *\
    id?: number,
  \** @example "confirmed" *\
    status?: IGetApiGetDraStatusEnum,

}`
 * @response `401` `IError`
 * @response `404` `IError`
 * @response `500` `IError`
 * @response `504` `IError`
 */
    getApiGetDra: (draId: number, params: RequestParams = {}) =>
      this.request<
        {
          /** @example "1" */
          id?: number;
          /** @example "confirmed" */
          status?: IGetApiGetDraStatusEnum;
        },
        IError
      >({
        path: `/deposits/fiat/dra/${draId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  incomings = {
    /**
 * No description
 *
 * @tags DEPOSITS
 * @name PostApiCreateIncoming
 * @summary Create a new address to receive crypto funds and auto-exchange to fiat
 * @request POST:/incomings
 * @secure
 * @response `200` `{
  \** @example "bc1q42lja79elem0anu8q8s3h2n687re9jax556pcc" *\
    address?: string,
  \** @example "15e15hWo6CShMgbAfo8c2Ykj4C6BLq6Not" *\
    legacyAddress?: string,
  \** @example "BTC:EUR" *\
    pair?: string,

}`
 * @response `401` `IError`
 * @response `500` `IError`
 * @response `504` `IError`
 */
    postApiCreateIncoming: (
      data: {
        /** The name of currency to be deposited */
        currency: IPostApiCreateIncomingCurrencyEnum;
        /** The exchange currency name */
        exchangeTo: IPostApiCreateIncomingExchangeToEnum;
        /** The external identifier of the transaction */
        referenceId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "bc1q42lja79elem0anu8q8s3h2n687re9jax556pcc" */
          address?: string;
          /** @example "15e15hWo6CShMgbAfo8c2Ykj4C6BLq6Not" */
          legacyAddress?: string;
          /** @example "BTC:EUR" */
          pair?: string;
        },
        IError
      >({
        path: `/incomings`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        format: "json",
        ...params,
      }),
  };
  outgoings = {
    /**
 * No description
 *
 * @tags WITHDRAWALS
 * @name PostApiCreateOutgoing
 * @summary Create a new crypto withdrawal with auto-exchange from fiat or another crypto
 * @request POST:/outgoings
 * @secure
 * @response `200` `{
  \** @example "00000000-0000-0000-0000-000000000000" *\
    transactionId?: string,

}`
 * @response `401` `IError`
 * @response `500` `IError`
 * @response `504` `IError`
 */
    postApiCreateOutgoing: (
      data: {
        /**
         * The withdrawal destination address
         * @example "bc1q42lja79elem0anu8q8s3h2n687re9jax556pcc"
         */
        address: string;
        /**
         * The amount of funds to be withdrawn
         * @format float
         * @example "0.001"
         */
        amount: number;
        /** Allows to specify if amount value represents actual 'gross' amount, 'net' amount (a crypto amount after service fee deductions and what actually recipient will recieve) or 'purchase' amount (a crypto amount to be purchased) */
        amountType: IPostApiCreateOutgoingAmountTypeEnum;
        /** The currency of funds to be withdrawn */
        currency: IPostApiCreateOutgoingCurrencyEnum;
        /** The FIAT/stablecoin currency name to exchange crypto from */
        exchangeFrom: IPostApiCreateOutgoingExchangeFromEnum;
        /** The external identifier of the withdrawal */
        referenceId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "00000000-0000-0000-0000-000000000000" */
          transactionId?: string;
        },
        IError
      >({
        path: `/outgoings`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        format: "json",
        ...params,
      }),
  };
  referenceId = {
    /**
 * No description
 *
 * @tags DEPOSITS
 * @name GetApiReferenceId
 * @summary Get a previously generated address for a reference id
 * @request GET:/referenceId/{referenceId}
 * @secure
 * @response `200` `({
    list?: ({
  \** @example "bc1q42lja79elem0anu8q8s3h2n687re9jax556pcc" *\
    address?: string,
  \** @example "BTC" *\
    currency?: string,
  \** @example "15e15hWo6CShMgbAfo8c2Ykj4C6BLq6Not" *\
    legacyAddress?: string,

})[],

} | {
    list?: ({
  \** @example "bc1q42lja79elem0anu8q8s3h2n687re9jax556pcc" *\
    address?: string,
  \** @example "15e15hWo6CShMgbAfo8c2Ykj4C6BLq6Not" *\
    legacyAddress?: string,
  \** @example "BTC:EUR" *\
    pair?: string,

})[],

})`
 * @response `401` `IError`
 * @response `404` `IError`
 * @response `500` `IError`
 * @response `504` `IError`
 */
    getApiReferenceId: (referenceId: string, params: RequestParams = {}) =>
      this.request<
        | {
            list?: {
              /** @example "bc1q42lja79elem0anu8q8s3h2n687re9jax556pcc" */
              address?: string;
              /** @example "BTC" */
              currency?: string;
              /** @example "15e15hWo6CShMgbAfo8c2Ykj4C6BLq6Not" */
              legacyAddress?: string;
            }[];
          }
        | {
            list?: {
              /** @example "bc1q42lja79elem0anu8q8s3h2n687re9jax556pcc" */
              address?: string;
              /** @example "15e15hWo6CShMgbAfo8c2Ykj4C6BLq6Not" */
              legacyAddress?: string;
              /** @example "BTC:EUR" */
              pair?: string;
            }[];
          },
        IError
      >({
        path: `/referenceId/${referenceId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  time = {
    /**
 * No description
 *
 * @tags SERVER TIME
 * @name GetApiTime
 * @summary Check server time
 * @request GET:/time
 * @secure
 * @response `200` `{
  \** @format date-time *\
    serverTime?: string,

}`
 * @response `401` `IError`
 * @response `500` `IError`
 */
    getApiTime: (params: RequestParams = {}) =>
      this.request<
        {
          /** @format date-time */
          serverTime?: string;
        },
        IError
      >({
        path: `/time`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  transactions = {
    /**
 * No description
 *
 * @tags TRANSACTIONS
 * @name GetApiTransactionsGetPageLimit
 * @summary Get list of all transactions
 * @request GET:/transactions
 * @secure
 * @response `200` `{
    list?: (ITransactions)[],
    pagination?: {
    currentPage?: number,
    limitItems?: number,
    totalItems?: number,
    totalPages?: number,

},

}`
 * @response `401` `IError`
 * @response `404` `IError`
 * @response `500` `IError`
 * @response `504` `IError`
 */
    getApiTransactionsGetPageLimit: (
      query?: {
        /**
         * @min 1
         * @default "1"
         */
        page?: number;
        /**
         * @min 1
         * @default "10"
         */
        limit?: number;
        name?: IGetApiTransactionsGetPageLimitParamsNameEnum;
        /**
         * Sorting for create datetime
         * @default "descending"
         */
        sort?: IGetApiTransactionsGetPageLimitParamsSortEnum;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          list?: ITransactions[];
          pagination?: {
            currentPage?: number;
            limitItems?: number;
            totalItems?: number;
            totalPages?: number;
          };
        },
        IError
      >({
        path: `/transactions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TRANSACTIONS
     * @name GetApiTransactionsGetId
     * @summary Get specific transaction data
     * @request GET:/transactions/{id}
     * @secure
     * @response `200` `ITransactions`
     * @response `401` `IError`
     * @response `404` `IError`
     * @response `500` `IError`
     * @response `504` `IError`
     */
    getApiTransactionsGetId: (id: string, params: RequestParams = {}) =>
      this.request<ITransactions, IError>({
        path: `/transactions/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  withdrawals = {
    /**
 * No description
 *
 * @tags WITHDRAWALS
 * @name PostApiCreateWithdraw
 * @summary Create a new crypto withdrawal
 * @request POST:/withdrawals
 * @secure
 * @response `200` `{
  \** @example "00000000-0000-0000-0000-000000000000" *\
    transactionId?: string,

}`
 * @response `401` `IError`
 * @response `500` `IError`
 * @response `504` `IError`
 */
    postApiCreateWithdraw: (
      data: {
        /**
         * The withdrawal destination address
         * @example "bc1q42lja79elem0anu8q8s3h2n687re9jax556pcc"
         */
        address: string;
        /**
         * The amount of funds to be withdrawn
         * @format float
         * @example "0.001"
         */
        amount: number;
        /**
         * Allows to specify if amount value represents actual 'gross' amount or 'net' amount (after service fee deductions and what actually recipient will recieve)
         * @example "gross"
         */
        amountType: IPostApiCreateWithdrawAmountTypeEnum;
        /** The currency of funds to be withdrawn */
        currency: IPostApiCreateWithdrawCurrencyEnum;
        /** The external identifier of the withdrawal */
        referenceId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "00000000-0000-0000-0000-000000000000" */
          transactionId?: string;
        },
        IError
      >({
        path: `/withdrawals`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        format: "json",
        ...params,
      }),

    /**
 * No description
 *
 * @tags WITHDRAWALS
 * @name PostApiCreateFiatManualWithdrawal
 * @summary Create a new fiat manual withdrawal
 * @request POST:/withdrawals/fiat
 * @secure
 * @response `200` `{
  \** @example "00000000-0000-0000-0000-000000000000" *\
    id?: string,
  \** @example "new" *\
    status?: IPostApiCreateFiatManualWithdrawalStatusEnum,

}`
 * @response `401` `IError`
 * @response `500` `IError`
 * @response `504` `IError`
 */
    postApiCreateFiatManualWithdrawal: (
      data: {
        /**
         * The amount of funds to be withdrawn
         * @format float
         * @example "0.01"
         */
        amount: number;
        /** The currency of funds to be withdrawn */
        currency: IPostApiCreateFiatManualWithdrawalCurrencyEnum;
        /**
         * The withdrawal destination address
         * @example "LT663080020000000366"
         */
        ibanTo: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "00000000-0000-0000-0000-000000000000" */
          id?: string;
          /** @example "new" */
          status?: IPostApiCreateFiatManualWithdrawalStatusEnum;
        },
        IError
      >({
        path: `/withdrawals/fiat`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        format: "json",
        ...params,
      }),
  };
}
