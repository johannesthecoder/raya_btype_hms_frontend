export enum HTTPStatusCodes {
  /**
   * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.2.1
   *
   * This interim response indicates that everything so far is OK and that the client should continue with the request or ignore it if it is already finished.
   */
  Continue = 100,
  /**
   * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.2.2
   *
   * This code is sent in response to an Upgrade request header by the client, and indicates the protocol the server is switching too.
   */
  SwitchingProtocols = 101,
  /**
   * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.1
   *
   * This code indicates that the server has received and is processing the request, but no response is available yet.
   */
  Processing = 102,
  /**
   * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.1
   *
   * The request has succeeded. The meaning of a success varies depending on the HTTP method:
   * GET: The resource has been fetched and is transmitted in the message body.
   * HEAD: The entity headers are in the message body.
   * POST: The resource describing the result of the action is transmitted in the message body.
   * TRACE: The message body contains the request message as received by the server
   */
  Ok = 200,
  /**
   * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.2
   *
   * The request has succeeded and a new resource has been created as a result of it. This is typically the response sent after a PUT request.
   */
  Created = 201,
  /**
   * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.3
   *
   * The request has been received but not yet acted upon. It is non-committal, meaning that there is no way in HTTP to later send an asynchronous response indicating the outcome of processing the request. It is intended for cases where another process or server handles the request, or for batch processing.
   */
  Accepted = 202,
  /**
   * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.4
   *
   * This response code means returned meta-information set is not exact set as available from the origin server, but collected from a local or a third party copy. Except this condition, 200 OK response should be preferred instead of this response.
   */
  NonAuthoritativeInformation = 203,
  /**
   * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.5
   *
   * There is no content to send for this request, but the headers may be useful. The user-agent may update its cached headers for this resource with the new ones.
   */
  NoContent = 204,
  /**
   * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.6
   *
   * This response code is sent after accomplishing request to tell user agent reset document view which sent this request.
   */
  ResetContent = 205,
  /**
   * Official Documentation @ https://tools.ietf.org/html/rfc7233#section-4.1
   *
   * This response code is used because of range header sent by the client to separate download into multiple streams.
   */
  PartialContent = 206,
  /**
   * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.2
   *
   * A Multi-Status response conveys information about multiple resources in situations where multiple status codes might be appropriate.
   */
  MultiStatus = 207,
  /**
   * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.1
   *
   * The request has more than one possible responses. User-agent or user should choose one of them. There is no standardized way to choose one of the responses.
   */
  MultipleChoices = 300,
  /**
   * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.2
   *
   * This response code means that URI of requested resource has been changed. Probably, new URI would be given in the response.
   */
  MovedPermanently = 301,
  /**
   * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.3
   *
   * This response code means that URI of requested resource has been changed temporarily. New changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests.
   */
  MovedTemporarily = 302,
  /**
   * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.4
   *
   * Server sent this response to directing client to get requested resource to another URI with an GET request.
   */
  SeeOther = 303,
  /**
   * Official Documentation @ https://tools.ietf.org/html/rfc7232#section-4.1
   *
   * This is used for caching purposes. It is telling to client that response has not been modified. So, client can continue to use same cached version of response.
   */
  NotModified = 304,
  /**
   * @deprecated
   * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.6
   *
   * Was defined in a previous version of the HTTP specification to indicate that a requested response must be accessed by a proxy. It has been deprecated due to security concerns regarding in-band configuration of a proxy.
   */
  UseProxy = 305,
  /**
   * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.7
   *
   * Server sent this response to directing client to get requested resource to another URI with same method that used prior request. This has the same semantic than the 302 Found HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request.
   */
  TemporaryRedirect = 307,
  /**
   * Official Documentation @ https://tools.ietf.org/html/rfc7538#section-3
   *
   * This means that the resource is now permanently located at another URI, specified by the Location: HTTP Response header. This has the same semantics as the 301 Moved Permanently HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request.
   */
  PermanentRedirect = 308,
  /**
   * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.1
   *
   * This response means that server could not understand the request due to invalid syntax.
   */
  BadRequest = 400,
  /**
   * Official Documentation @ https://tools.ietf.org/html/rfc7235#section-3.1
   *
   * Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.
   */
  Unauthorized = 401,
  /**
   * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.2
   *
   * This response code is reserved for future use. Initial aim for creating this code was using it for digital payment systems however this is not used currently.
   */
  PaymentRequired = 402,
  /**
   * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.3
   *
   * The client does not have access rights to the content, i.e. they are unauthorized, so server is rejecting to give proper response. Unlike 401, the client's identity is known to the server.
   */
  Forbidden = 403,
  /**
   * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.4
   *
   * The server can not find requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 to hide the existence of a resource from an unauthorized client. This response code is probably the most famous one due to its frequent occurrence on the web.
   */
  NotFound = 404,
  /**
   * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.5
   *
   * The request method is known by the server but has been disabled and cannot be used. For example, an API may forbid DELETE-ing a resource. The two mandatory methods, GET and HEAD, must never be disabled and should not return this error code.
   */
  MethodNotAllowed = 405,
  /**
   * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.6
   *
   * This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content following the criteria given by the user agent.
   */
  NotAcceptable = 406,
  /**
   * Official Documentation @ https://tools.ietf.org/html/rfc7235#section-3.2
   *
   * This is similar to 401 but authentication is needed to be done by a proxy.
   */
  ProxyAuthenticationRequired = 407,
  /**
   * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.7
   *
   * This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection. This response is used much more since some browsers, like Chrome, Firefox 27+, or IE9, use HTTP pre-connection mechanisms to speed up surfing. Also note that some servers merely shut down the connection without sending this message.
   */
  RequestTimeout = 408,
  /**
   * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.8
   *
   * This response is sent when a request conflicts with the current state of the server.
   */
  Conflict = 409,
  /**
   * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.9
   *
   * This response would be sent when the requested content has been permanently deleted from server, with no forwarding address. Clients are expected to remove their caches and links to the resource. The HTTP specification intends this status code to be used for "limited-time, promotional services". APIs should not feel compelled to indicate resources that have been deleted with this status code.
   */
  Gone = 410,
  /**
   * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.10
   *
   * The server rejected the request because the Content-Length header field is not defined and the server requires it.
   */
  LengthRequired = 411,
  /**
   * Official Documentation @ https://tools.ietf.org/html/rfc7232#section-4.2
   *
   * The client has indicated preconditions in its headers which the server does not meet.
   */
  PreconditionFailed = 412,
  /**
   * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.11
   *
   * Request entity is larger than limits defined by server; the server might close the connection or return an Retry-After header field.
   */
  RequestTooLong = 413,
  /**
   * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.12
   *
   * The URI requested by the client is longer than the server is willing to interpret.
   */
  RequestUriTooLong = 414,
  /**
   * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.13
   *
   * The media format of the requested data is not supported by the server, so the server is rejecting the request.
   */
  UnsupportedMediaType = 415,
  /**
   * Official Documentation @ https://tools.ietf.org/html/rfc7233#section-4.4
   *
   * The range specified by the Range header field in the request can't be fulfilled; it's possible that the range is outside the size of the target URI's data.
   */
  RequestedRangeNotSatisfiable = 416,
  /**
   * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.14
   *
   * This response code means the expectation indicated by the Expect request header field can't be met by the server.
   */
  ExpectationFailed = 417,
  /**
   * Official Documentation @ https://tools.ietf.org/html/rfc2324#section-2.3.2
   *
   * Any attempt to brew coffee with a teapot should result in the error code "418 I'm a teapot". The resulting entity body MAY be short and stout.
   */
  ImATeapot = 418,
  /**
   * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.6
   *
   * The 507 (Insufficient Storage) status code means the method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request. This condition is considered to be temporary. If the request which received this status code was the result of a user action, the request MUST NOT be repeated until it is requested by a separate user action.
   */
  InsufficientSpaceOnResource = 419,
  /**
   * @deprecated
   * Official Documentation @ https://tools.ietf.org/rfcdiff?difftype=--hwdiff&url2=draft-ietf-webdav-protocol-06.txt
   *
   * A deprecated response used by the Spring Framework when a method has failed.
   */
  MethodFailure = 420,
  /**
   * Official Documentation @ https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
   *
   * Defined in the specification of HTTP/2 to indicate that a server is not able to produce a response for the combination of scheme and authority that are included in the request URI.
   */
  MisdirectedRequest = 421,
  /**
   * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.3
   *
   * The request was well-formed but was unable to be followed due to semantic errors.
   */
  UnprocessableEntity = 422,
  /**
   * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.4
   *
   * The resource that is being accessed is locked.
   */
  Locked = 423,
  /**
   * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.5
   *
   * The request failed due to failure of a previous request.
   */
  FailedDependency = 424,
  /**
   * Official Documentation @ https://tools.ietf.org/html/rfc6585#section-3
   *
   * The origin server requires the request to be conditional. Intended to prevent the 'lost update' problem, where a client GETs a resource's state, modifies it, and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict.
   */
  PreconditionRequired = 428,
  /**
   * Official Documentation @ https://tools.ietf.org/html/rfc6585#section-4
   *
   * The user has sent too many requests in a given amount of time ("rate limiting").
   */
  TooManyRequests = 429,
  /**
   * Official Documentation @ https://tools.ietf.org/html/rfc6585#section-5
   *
   * The server is unwilling to process the request because its header fields are too large. The request MAY be resubmitted after reducing the size of the request header fields.
   */
  RequestHeaderFieldsTooLarge = 431,
  /**
   * Official Documentation @ https://tools.ietf.org/html/rfc7725
   *
   * The user-agent requested a resource that cannot legally be provided, such as a web page censored by a government.
   */
  UnavailableForLegalReasons = 451,
  /**
   * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.1
   *
   * The server encountered an unexpected condition that prevented it from fulfilling the request.
   */
  InternalServerError = 500,
  /**
   * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.2
   *
   * The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are GET and HEAD.
   */
  NotImplemented = 501,
  /**
   * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.3
   *
   * This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.
   */
  BadGateway = 502,
  /**
   * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.4
   *
   * The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent. This responses should be used for temporary conditions and the Retry-After: HTTP header should, if possible, contain the estimated time before the recovery of the service. The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached.
   */
  ServiceUnavailable = 503,
  /**
   * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.5
   *
   * This error response is given when the server is acting as a gateway and cannot get a response in time.
   */
  GatewayTimeout = 504,
  /**
   * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.6
   *
   * The HTTP version used in the request is not supported by the server.
   */
  HttpVersionNotSupported = 505,
  /**
   * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.6
   *
   * The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.
   */
  InsufficientStorage = 507,
  /**
   * Official Documentation @ https://tools.ietf.org/html/rfc6585#section-6
   *
   * The 511 status code indicates that the client needs to authenticate to gain network access.
   */
  NetworkAuthenticationRequired = 511,
}

export enum Nationalities {
  "afghan" = "afghan",
  "albanian" = "albanian",
  "algerian" = "algerian",
  "american" = "american",
  "andorran" = "andorran",
  "angolan" = "angolan",
  "anguillan" = "anguillan",
  "argentine" = "argentine",
  "armenian" = "armenian",
  "australian" = "australian",
  "austrian" = "austrian",
  "azerbaijani" = "azerbaijani",
  "bahamian" = "bahamian",
  "bahraini" = "bahraini",
  "bangladeshi" = "bangladeshi",
  "barbadian" = "barbadian",
  "belarusian" = "belarusian",
  "belgian" = "belgian",
  "belizean" = "belizean",
  "beninese" = "beninese",
  "bermudian" = "bermudian",
  "bhutanese" = "bhutanese",
  "bolivian" = "bolivian",
  "botswanan" = "botswanan",
  "brazilian" = "brazilian",
  "british" = "british",
  "britishVirginIslander" = "british virgin islander",
  "bruneian" = "bruneian",
  "bulgarian" = "bulgarian",
  "burkinan" = "burkinan",
  "burmese" = "burmese",
  "burundian" = "burundian",
  "cambodian" = "cambodian",
  "cameroonian" = "cameroonian",
  "canadian" = "canadian",
  "capeVerdean" = "cape verdean",
  "caymanIslander" = "cayman islander",
  "centralAfrican" = "central african",
  "chadian" = "chadian",
  "chilean" = "chilean",
  "chinese" = "chinese",
  "citizenOfAntiguaandBarbuda" = "citizen of antigua and barbuda",
  "citizenOfBosniaandHerzegovina" = "citizen of bosnia and herzegovina",
  "citizenOfGuinea-Bissau" = "citizen of guinea-bissau",
  "citizenOfKiribati" = "citizen of kiribati",
  "citizenOfSeychelles" = "citizen of seychelles",
  "citizenOftheDominicanRepublic" = "citizen of the dominican republic",
  "citizenOfVanuatu" = "citizen of vanuatu",
  "colombian" = "colombian",
  "comoran" = "comoran",
  "congolese(Congo)" = "congolese (congo)",
  "congolese(DRC)" = "congolese (drc)",
  "cookIslander" = "cook islander",
  "costaRican" = "costa rican",
  "croatian" = "croatian",
  "cuban" = "cuban",
  "cymraes" = "cymraes",
  "cymro" = "cymro",
  "cypriot" = "cypriot",
  "czech" = "czech",
  "danish" = "danish",
  "djiboutian" = "djiboutian",
  "dominican" = "dominican",
  "dutch" = "dutch",
  "eastTimorese" = "east timorese",
  "ecuadorean" = "ecuadorean",
  "egyptian" = "egyptian",
  "emirati" = "emirati",
  "english" = "english",
  "equatorialGuinean" = "equatorial guinean",
  "eritrean" = "eritrean",
  "estonian" = "estonian",
  "ethiopian" = "ethiopian",
  "faroese" = "faroese",
  "fijian" = "fijian",
  "filipino" = "filipino",
  "finnish" = "finnish",
  "french" = "french",
  "gabonese" = "gabonese",
  "gambian" = "gambian",
  "georgian" = "georgian",
  "german" = "german",
  "ghanaian" = "ghanaian",
  "gibraltarian" = "gibraltarian",
  "greek" = "greek",
  "greenlandic" = "greenlandic",
  "grenadian" = "grenadian",
  "guamanian" = "guamanian",
  "guatemalan" = "guatemalan",
  "guinean" = "guinean",
  "guyanese" = "guyanese",
  "haitian" = "haitian",
  "honduran" = "honduran",
  "hongKonger" = "hong konger",
  "hungarian" = "hungarian",
  "icelandic" = "icelandic",
  "indian" = "indian",
  "indonesian" = "indonesian",
  "iranian" = "iranian",
  "iraqi" = "iraqi",
  "irish" = "irish",
  "israeli" = "israeli",
  "italian" = "italian",
  "ivorian" = "ivorian",
  "jamaican" = "jamaican",
  "japanese" = "japanese",
  "jordanian" = "jordanian",
  "kazakh" = "kazakh",
  "kenyan" = "kenyan",
  "kittitian" = "kittitian",
  "kosovan" = "kosovan",
  "kuwaiti" = "kuwaiti",
  "kyrgyz" = "kyrgyz",
  "lao" = "lao",
  "latvian" = "latvian",
  "lebanese" = "lebanese",
  "liberian" = "liberian",
  "libyan" = "libyan",
  "liechtensteinCitizen" = "liechtenstein citizen",
  "lithuanian" = "lithuanian",
  "luxembourger" = "luxembourger",
  "macanese" = "macanese",
  "macedonian" = "macedonian",
  "malagasy" = "malagasy",
  "malawian" = "malawian",
  "malaysian" = "malaysian",
  "maldivian" = "maldivian",
  "malian" = "malian",
  "maltese" = "maltese",
  "marshallese" = "marshallese",
  "martiniquais" = "martiniquais",
  "mauritanian" = "mauritanian",
  "mauritian" = "mauritian",
  "mexican" = "mexican",
  "micronesian" = "micronesian",
  "moldovan" = "moldovan",
  "monegasque" = "monegasque",
  "mongolian" = "mongolian",
  "montenegrin" = "montenegrin",
  "montserratian" = "montserratian",
  "moroccan" = "moroccan",
  "mosotho" = "mosotho",
  "mozambican" = "mozambican",
  "namibian" = "namibian",
  "nauruan" = "nauruan",
  "nepalese" = "nepalese",
  "newZealander" = "new zealander",
  "nicaraguan" = "nicaraguan",
  "nigerian" = "nigerian",
  "nigerien" = "nigerien",
  "niuean" = "niuean",
  "northKorean" = "north korean",
  "northernIrish" = "northern irish",
  "norwegian" = "norwegian",
  "omani" = "omani",
  "pakistani" = "pakistani",
  "palauan" = "palauan",
  "palestinian" = "palestinian",
  "panamanian" = "panamanian",
  "papuaNewGuinean" = "papua new guinean",
  "paraguayan" = "paraguayan",
  "peruvian" = "peruvian",
  "pitcairnIslander" = "pitcairn islander",
  "polish" = "polish",
  "portuguese" = "portuguese",
  "prydeinig" = "prydeinig",
  "puertoRican" = "puerto rican",
  "qatari" = "qatari",
  "romanian" = "romanian",
  "russian" = "russian",
  "rwandan" = "rwandan",
  "salvadorean" = "salvadorean",
  "sammarinese" = "sammarinese",
  "samoan" = "samoan",
  "saoTomean" = "sao tomean",
  "saudiArabian" = "saudi arabian",
  "scottish" = "scottish",
  "senegalese" = "senegalese",
  "serbian" = "serbian",
  "sierraLeonean" = "sierra leonean",
  "singaporean" = "singaporean",
  "slovak" = "slovak",
  "slovenian" = "slovenian",
  "solomonIslander" = "solomon islander",
  "somali" = "somali",
  "southAfrican" = "south african",
  "southKorean" = "south korean",
  "southSudanese" = "south sudanese",
  "spanish" = "spanish",
  "sriLankan" = "sri lankan",
  "stHelenian" = "st helenian",
  "stLucian" = "st lucian",
  "stateless" = "stateless",
  "sudanese" = "sudanese",
  "surinamese" = "surinamese",
  "swazi" = "swazi",
  "swedish" = "swedish",
  "swiss" = "swiss",
  "syrian" = "syrian",
  "taiwanese" = "taiwanese",
  "tajik" = "tajik",
  "tanzanian" = "tanzanian",
  "thai" = "thai",
  "togolese" = "togolese",
  "tongan" = "tongan",
  "trinidadian" = "trinidadian",
  "tristanian" = "tristanian",
  "tunisian" = "tunisian",
  "turkish" = "turkish",
  "turkmen" = "turkmen",
  "turksAndCaicosIslander" = "turks and caicos islander",
  "tuvaluan" = "tuvaluan",
  "ugandan" = "ugandan",
  "ukrainian" = "ukrainian",
  "uruguayan" = "uruguayan",
  "uzbek" = "uzbek",
  "vaticanCitizen" = "vatican citizen",
  "venezuelan" = "venezuelan",
  "vietnamese" = "vietnamese",
  "vincentian" = "vincentian",
  "wallisian" = "wallisian",
  "welsh" = "welsh",
  "yemeni" = "yemeni",
  "zambian" = "zambian",
  "zimbabwean" = "zimbabwean",
}

export const NationalitiesMapping = {
  afghan: Nationalities.afghan,
  albanian: Nationalities.albanian,
  algerian: Nationalities.algerian,
  american: Nationalities.american,
  andorran: Nationalities.andorran,
  angolan: Nationalities.angolan,
  anguillan: Nationalities.anguillan,
  argentine: Nationalities.argentine,
  armenian: Nationalities.armenian,
  australian: Nationalities.australian,
  austrian: Nationalities.austrian,
  azerbaijani: Nationalities.azerbaijani,
  bahamian: Nationalities.bahamian,
  bahraini: Nationalities.bahraini,
  bangladeshi: Nationalities.bangladeshi,
  barbadian: Nationalities.barbadian,
  belarusian: Nationalities.belarusian,
  belgian: Nationalities.belgian,
  belizean: Nationalities.belizean,
  beninese: Nationalities.beninese,
  bermudian: Nationalities.bermudian,
  bhutanese: Nationalities.bhutanese,
  bolivian: Nationalities.bolivian,
  botswanan: Nationalities.botswanan,
  brazilian: Nationalities.brazilian,
  british: Nationalities.british,
  "british virgin islander": Nationalities.britishVirginIslander,
  bruneian: Nationalities.bruneian,
  bulgarian: Nationalities.bulgarian,
  burkinan: Nationalities.burkinan,
  burmese: Nationalities.burmese,
  burundian: Nationalities.burundian,
  cambodian: Nationalities.cambodian,
  cameroonian: Nationalities.cameroonian,
  canadian: Nationalities.canadian,
  "cape verdean": Nationalities.capeVerdean,
  "cayman islander": Nationalities.caymanIslander,
  "central african": Nationalities.centralAfrican,
  chadian: Nationalities.chadian,
  chilean: Nationalities.chilean,
  chinese: Nationalities.chinese,
  "citizen of antigua and barbuda": Nationalities.citizenOfAntiguaandBarbuda,
  "citizen of bosnia and herzegovina": Nationalities.citizenOfBosniaandHerzegovina,
  "citizen of guinea-bissau": Nationalities["citizenOfGuinea-Bissau"],
  "citizen of kiribati": Nationalities.citizenOfKiribati,
  "citizen of seychelles": Nationalities.citizenOfSeychelles,
  "citizen of the dominican republic": Nationalities.citizenOftheDominicanRepublic,
  "citizen of vanuatu": Nationalities.citizenOfVanuatu,
  colombian: Nationalities.colombian,
  comoran: Nationalities.comoran,
  "congolese (congo)": Nationalities["congolese(Congo)"],
  "congolese (drc)": Nationalities["congolese(DRC)"],
  "cook islander": Nationalities.cookIslander,
  "costa rican": Nationalities.costaRican,
  croatian: Nationalities.croatian,
  cuban: Nationalities.cuban,
  cymraes: Nationalities.cymraes,
  cymro: Nationalities.cymro,
  cypriot: Nationalities.cypriot,
  czech: Nationalities.czech,
  danish: Nationalities.danish,
  djiboutian: Nationalities.djiboutian,
  dominican: Nationalities.dominican,
  dutch: Nationalities.dutch,
  "east timorese": Nationalities.eastTimorese,
  ecuadorean: Nationalities.ecuadorean,
  egyptian: Nationalities.egyptian,
  emirati: Nationalities.emirati,
  english: Nationalities.english,
  "equatorial guinean": Nationalities.equatorialGuinean,
  eritrean: Nationalities.eritrean,
  estonian: Nationalities.estonian,
  ethiopian: Nationalities.ethiopian,
  faroese: Nationalities.faroese,
  fijian: Nationalities.fijian,
  filipino: Nationalities.filipino,
  finnish: Nationalities.finnish,
  french: Nationalities.french,
  gabonese: Nationalities.gabonese,
  gambian: Nationalities.gambian,
  georgian: Nationalities.georgian,
  german: Nationalities.german,
  ghanaian: Nationalities.ghanaian,
  gibraltarian: Nationalities.gibraltarian,
  greek: Nationalities.greek,
  greenlandic: Nationalities.greenlandic,
  grenadian: Nationalities.grenadian,
  guamanian: Nationalities.guamanian,
  guatemalan: Nationalities.guatemalan,
  guinean: Nationalities.guinean,
  guyanese: Nationalities.guyanese,
  haitian: Nationalities.haitian,
  honduran: Nationalities.honduran,
  "hong konger": Nationalities.hongKonger,
  hungarian: Nationalities.hungarian,
  icelandic: Nationalities.icelandic,
  indian: Nationalities.indian,
  indonesian: Nationalities.indonesian,
  iranian: Nationalities.iranian,
  iraqi: Nationalities.iraqi,
  irish: Nationalities.irish,
  israeli: Nationalities.israeli,
  italian: Nationalities.italian,
  ivorian: Nationalities.ivorian,
  jamaican: Nationalities.jamaican,
  japanese: Nationalities.japanese,
  jordanian: Nationalities.jordanian,
  kazakh: Nationalities.kazakh,
  kenyan: Nationalities.kenyan,
  kittitian: Nationalities.kittitian,
  kosovan: Nationalities.kosovan,
  kuwaiti: Nationalities.kuwaiti,
  kyrgyz: Nationalities.kyrgyz,
  lao: Nationalities.lao,
  latvian: Nationalities.latvian,
  lebanese: Nationalities.lebanese,
  liberian: Nationalities.liberian,
  libyan: Nationalities.libyan,
  "liechtenstein citizen": Nationalities.liechtensteinCitizen,
  lithuanian: Nationalities.lithuanian,
  luxembourger: Nationalities.luxembourger,
  macanese: Nationalities.macanese,
  macedonian: Nationalities.macedonian,
  malagasy: Nationalities.malagasy,
  malawian: Nationalities.malawian,
  malaysian: Nationalities.malaysian,
  maldivian: Nationalities.maldivian,
  malian: Nationalities.malian,
  maltese: Nationalities.maltese,
  marshallese: Nationalities.marshallese,
  martiniquais: Nationalities.martiniquais,
  mauritanian: Nationalities.mauritanian,
  mauritian: Nationalities.mauritian,
  mexican: Nationalities.mexican,
  micronesian: Nationalities.micronesian,
  moldovan: Nationalities.moldovan,
  monegasque: Nationalities.monegasque,
  mongolian: Nationalities.mongolian,
  montenegrin: Nationalities.montenegrin,
  montserratian: Nationalities.montserratian,
  moroccan: Nationalities.moroccan,
  mosotho: Nationalities.mosotho,
  mozambican: Nationalities.mozambican,
  namibian: Nationalities.namibian,
  nauruan: Nationalities.nauruan,
  nepalese: Nationalities.nepalese,
  "new zealander": Nationalities.newZealander,
  nicaraguan: Nationalities.nicaraguan,
  nigerian: Nationalities.nigerian,
  nigerien: Nationalities.nigerien,
  niuean: Nationalities.niuean,
  "north korean": Nationalities.northKorean,
  "northern irish": Nationalities.northernIrish,
  norwegian: Nationalities.norwegian,
  omani: Nationalities.omani,
  pakistani: Nationalities.pakistani,
  palauan: Nationalities.palauan,
  palestinian: Nationalities.palestinian,
  panamanian: Nationalities.panamanian,
  "papua new guinean": Nationalities.papuaNewGuinean,
  paraguayan: Nationalities.paraguayan,
  peruvian: Nationalities.peruvian,
  "pitcairn islander": Nationalities.pitcairnIslander,
  polish: Nationalities.polish,
  portuguese: Nationalities.portuguese,
  prydeinig: Nationalities.prydeinig,
  "puerto rican": Nationalities.puertoRican,
  qatari: Nationalities.qatari,
  romanian: Nationalities.romanian,
  russian: Nationalities.russian,
  rwandan: Nationalities.rwandan,
  salvadorean: Nationalities.salvadorean,
  sammarinese: Nationalities.sammarinese,
  samoan: Nationalities.samoan,
  "sao tomean": Nationalities.saoTomean,
  "saudi arabian": Nationalities.saudiArabian,
  scottish: Nationalities.scottish,
  senegalese: Nationalities.senegalese,
  serbian: Nationalities.serbian,
  "sierra leonean": Nationalities.sierraLeonean,
  singaporean: Nationalities.singaporean,
  slovak: Nationalities.slovak,
  slovenian: Nationalities.slovenian,
  "solomon islander": Nationalities.solomonIslander,
  somali: Nationalities.somali,
  "south african": Nationalities.southAfrican,
  "south korean": Nationalities.southKorean,
  "south sudanese": Nationalities.southSudanese,
  spanish: Nationalities.spanish,
  "sri lankan": Nationalities.sriLankan,
  "st helenian": Nationalities.stHelenian,
  "st lucian": Nationalities.stLucian,
  stateless: Nationalities.stateless,
  sudanese: Nationalities.sudanese,
  surinamese: Nationalities.surinamese,
  swazi: Nationalities.swazi,
  swedish: Nationalities.swedish,
  swiss: Nationalities.swiss,
  syrian: Nationalities.syrian,
  taiwanese: Nationalities.taiwanese,
  tajik: Nationalities.tajik,
  tanzanian: Nationalities.tanzanian,
  thai: Nationalities.thai,
  togolese: Nationalities.togolese,
  tongan: Nationalities.tongan,
  trinidadian: Nationalities.trinidadian,
  tristanian: Nationalities.tristanian,
  tunisian: Nationalities.tunisian,
  turkish: Nationalities.turkish,
  turkmen: Nationalities.turkmen,
  "turks and caicos islander": Nationalities.turksAndCaicosIslander,
  tuvaluan: Nationalities.tuvaluan,
  ugandan: Nationalities.ugandan,
  ukrainian: Nationalities.ukrainian,
  uruguayan: Nationalities.uruguayan,
  uzbek: Nationalities.uzbek,
  "vatican citizen": Nationalities.vaticanCitizen,
  venezuelan: Nationalities.venezuelan,
  vietnamese: Nationalities.vietnamese,
  vincentian: Nationalities.vincentian,
  wallisian: Nationalities.wallisian,
  welsh: Nationalities.welsh,
  yemeni: Nationalities.yemeni,
  zambian: Nationalities.zambian,
  zimbabwean: Nationalities.zimbabwean,
};
