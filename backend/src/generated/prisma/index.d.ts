
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model Picture
 * 
 */
export type Picture = $Result.DefaultSelection<Prisma.$PicturePayload>
/**
 * Model Favorite
 * 
 */
export type Favorite = $Result.DefaultSelection<Prisma.$FavoritePayload>
/**
 * Model ViewedApartment
 * 
 */
export type ViewedApartment = $Result.DefaultSelection<Prisma.$ViewedApartmentPayload>
/**
 * Model Preferences
 * 
 */
export type Preferences = $Result.DefaultSelection<Prisma.$PreferencesPayload>
/**
 * Model Apartment
 * 
 */
export type Apartment = $Result.DefaultSelection<Prisma.$ApartmentPayload>
/**
 * Model Request
 * 
 */
export type Request = $Result.DefaultSelection<Prisma.$RequestPayload>
/**
 * Model Swipe
 * 
 */
export type Swipe = $Result.DefaultSelection<Prisma.$SwipePayload>
/**
 * Model Match
 * 
 */
export type Match = $Result.DefaultSelection<Prisma.$MatchPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model RequestDocument
 * 
 */
export type RequestDocument = $Result.DefaultSelection<Prisma.$RequestDocumentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  user: 'user',
  owner: 'owner',
  agency: 'agency'
};

export type Role = (typeof Role)[keyof typeof Role]


export const PictureType: {
  profile: 'profile',
  apartment: 'apartment'
};

export type PictureType = (typeof PictureType)[keyof typeof PictureType]


export const PropertyType: {
  apartment: 'apartment',
  house: 'house',
  studio: 'studio',
  villa: 'villa',
  land: 'land',
  commercial_space: 'commercial_space',
  other: 'other'
};

export type PropertyType = (typeof PropertyType)[keyof typeof PropertyType]


export const ListingType: {
  rent: 'rent',
  sale: 'sale'
};

export type ListingType = (typeof ListingType)[keyof typeof ListingType]


export const RequestStatus: {
  waiting: 'waiting',
  contacted: 'contacted',
  visit_planned: 'visit_planned',
  accepted: 'accepted',
  refused: 'refused'
};

export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus]


export const SwipeDirection: {
  like: 'like',
  dislike: 'dislike'
};

export type SwipeDirection = (typeof SwipeDirection)[keyof typeof SwipeDirection]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type PictureType = $Enums.PictureType

export const PictureType: typeof $Enums.PictureType

export type PropertyType = $Enums.PropertyType

export const PropertyType: typeof $Enums.PropertyType

export type ListingType = $Enums.ListingType

export const ListingType: typeof $Enums.ListingType

export type RequestStatus = $Enums.RequestStatus

export const RequestStatus: typeof $Enums.RequestStatus

export type SwipeDirection = $Enums.SwipeDirection

export const SwipeDirection: typeof $Enums.SwipeDirection

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.picture`: Exposes CRUD operations for the **Picture** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pictures
    * const pictures = await prisma.picture.findMany()
    * ```
    */
  get picture(): Prisma.PictureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favorite`: Exposes CRUD operations for the **Favorite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favorites
    * const favorites = await prisma.favorite.findMany()
    * ```
    */
  get favorite(): Prisma.FavoriteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.viewedApartment`: Exposes CRUD operations for the **ViewedApartment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ViewedApartments
    * const viewedApartments = await prisma.viewedApartment.findMany()
    * ```
    */
  get viewedApartment(): Prisma.ViewedApartmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.preferences`: Exposes CRUD operations for the **Preferences** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Preferences
    * const preferences = await prisma.preferences.findMany()
    * ```
    */
  get preferences(): Prisma.PreferencesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apartment`: Exposes CRUD operations for the **Apartment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Apartments
    * const apartments = await prisma.apartment.findMany()
    * ```
    */
  get apartment(): Prisma.ApartmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.request`: Exposes CRUD operations for the **Request** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Requests
    * const requests = await prisma.request.findMany()
    * ```
    */
  get request(): Prisma.RequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.swipe`: Exposes CRUD operations for the **Swipe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Swipes
    * const swipes = await prisma.swipe.findMany()
    * ```
    */
  get swipe(): Prisma.SwipeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.match`: Exposes CRUD operations for the **Match** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matches
    * const matches = await prisma.match.findMany()
    * ```
    */
  get match(): Prisma.MatchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.requestDocument`: Exposes CRUD operations for the **RequestDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RequestDocuments
    * const requestDocuments = await prisma.requestDocument.findMany()
    * ```
    */
  get requestDocument(): Prisma.RequestDocumentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Profile: 'Profile',
    Picture: 'Picture',
    Favorite: 'Favorite',
    ViewedApartment: 'ViewedApartment',
    Preferences: 'Preferences',
    Apartment: 'Apartment',
    Request: 'Request',
    Swipe: 'Swipe',
    Match: 'Match',
    Message: 'Message',
    RequestDocument: 'RequestDocument'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "profile" | "picture" | "favorite" | "viewedApartment" | "preferences" | "apartment" | "request" | "swipe" | "match" | "message" | "requestDocument"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      Picture: {
        payload: Prisma.$PicturePayload<ExtArgs>
        fields: Prisma.PictureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PictureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PictureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>
          }
          findFirst: {
            args: Prisma.PictureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PictureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>
          }
          findMany: {
            args: Prisma.PictureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>[]
          }
          create: {
            args: Prisma.PictureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>
          }
          createMany: {
            args: Prisma.PictureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PictureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>[]
          }
          delete: {
            args: Prisma.PictureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>
          }
          update: {
            args: Prisma.PictureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>
          }
          deleteMany: {
            args: Prisma.PictureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PictureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PictureUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>[]
          }
          upsert: {
            args: Prisma.PictureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PicturePayload>
          }
          aggregate: {
            args: Prisma.PictureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePicture>
          }
          groupBy: {
            args: Prisma.PictureGroupByArgs<ExtArgs>
            result: $Utils.Optional<PictureGroupByOutputType>[]
          }
          count: {
            args: Prisma.PictureCountArgs<ExtArgs>
            result: $Utils.Optional<PictureCountAggregateOutputType> | number
          }
        }
      }
      Favorite: {
        payload: Prisma.$FavoritePayload<ExtArgs>
        fields: Prisma.FavoriteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoriteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoriteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          findFirst: {
            args: Prisma.FavoriteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoriteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          findMany: {
            args: Prisma.FavoriteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          create: {
            args: Prisma.FavoriteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          createMany: {
            args: Prisma.FavoriteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FavoriteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          delete: {
            args: Prisma.FavoriteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          update: {
            args: Prisma.FavoriteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          deleteMany: {
            args: Prisma.FavoriteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavoriteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FavoriteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          upsert: {
            args: Prisma.FavoriteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          aggregate: {
            args: Prisma.FavoriteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavorite>
          }
          groupBy: {
            args: Prisma.FavoriteGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoriteGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoriteCountArgs<ExtArgs>
            result: $Utils.Optional<FavoriteCountAggregateOutputType> | number
          }
        }
      }
      ViewedApartment: {
        payload: Prisma.$ViewedApartmentPayload<ExtArgs>
        fields: Prisma.ViewedApartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ViewedApartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewedApartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ViewedApartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewedApartmentPayload>
          }
          findFirst: {
            args: Prisma.ViewedApartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewedApartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ViewedApartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewedApartmentPayload>
          }
          findMany: {
            args: Prisma.ViewedApartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewedApartmentPayload>[]
          }
          create: {
            args: Prisma.ViewedApartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewedApartmentPayload>
          }
          createMany: {
            args: Prisma.ViewedApartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ViewedApartmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewedApartmentPayload>[]
          }
          delete: {
            args: Prisma.ViewedApartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewedApartmentPayload>
          }
          update: {
            args: Prisma.ViewedApartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewedApartmentPayload>
          }
          deleteMany: {
            args: Prisma.ViewedApartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ViewedApartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ViewedApartmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewedApartmentPayload>[]
          }
          upsert: {
            args: Prisma.ViewedApartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewedApartmentPayload>
          }
          aggregate: {
            args: Prisma.ViewedApartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateViewedApartment>
          }
          groupBy: {
            args: Prisma.ViewedApartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ViewedApartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ViewedApartmentCountArgs<ExtArgs>
            result: $Utils.Optional<ViewedApartmentCountAggregateOutputType> | number
          }
        }
      }
      Preferences: {
        payload: Prisma.$PreferencesPayload<ExtArgs>
        fields: Prisma.PreferencesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PreferencesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PreferencesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload>
          }
          findFirst: {
            args: Prisma.PreferencesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PreferencesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload>
          }
          findMany: {
            args: Prisma.PreferencesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload>[]
          }
          create: {
            args: Prisma.PreferencesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload>
          }
          createMany: {
            args: Prisma.PreferencesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PreferencesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload>[]
          }
          delete: {
            args: Prisma.PreferencesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload>
          }
          update: {
            args: Prisma.PreferencesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload>
          }
          deleteMany: {
            args: Prisma.PreferencesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PreferencesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PreferencesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload>[]
          }
          upsert: {
            args: Prisma.PreferencesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload>
          }
          aggregate: {
            args: Prisma.PreferencesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePreferences>
          }
          groupBy: {
            args: Prisma.PreferencesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PreferencesGroupByOutputType>[]
          }
          count: {
            args: Prisma.PreferencesCountArgs<ExtArgs>
            result: $Utils.Optional<PreferencesCountAggregateOutputType> | number
          }
        }
      }
      Apartment: {
        payload: Prisma.$ApartmentPayload<ExtArgs>
        fields: Prisma.ApartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentPayload>
          }
          findFirst: {
            args: Prisma.ApartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentPayload>
          }
          findMany: {
            args: Prisma.ApartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentPayload>[]
          }
          create: {
            args: Prisma.ApartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentPayload>
          }
          createMany: {
            args: Prisma.ApartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApartmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentPayload>[]
          }
          delete: {
            args: Prisma.ApartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentPayload>
          }
          update: {
            args: Prisma.ApartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentPayload>
          }
          deleteMany: {
            args: Prisma.ApartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApartmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentPayload>[]
          }
          upsert: {
            args: Prisma.ApartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApartmentPayload>
          }
          aggregate: {
            args: Prisma.ApartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApartment>
          }
          groupBy: {
            args: Prisma.ApartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApartmentCountArgs<ExtArgs>
            result: $Utils.Optional<ApartmentCountAggregateOutputType> | number
          }
        }
      }
      Request: {
        payload: Prisma.$RequestPayload<ExtArgs>
        fields: Prisma.RequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          findFirst: {
            args: Prisma.RequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          findMany: {
            args: Prisma.RequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>[]
          }
          create: {
            args: Prisma.RequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          createMany: {
            args: Prisma.RequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>[]
          }
          delete: {
            args: Prisma.RequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          update: {
            args: Prisma.RequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          deleteMany: {
            args: Prisma.RequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>[]
          }
          upsert: {
            args: Prisma.RequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          aggregate: {
            args: Prisma.RequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRequest>
          }
          groupBy: {
            args: Prisma.RequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<RequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.RequestCountArgs<ExtArgs>
            result: $Utils.Optional<RequestCountAggregateOutputType> | number
          }
        }
      }
      Swipe: {
        payload: Prisma.$SwipePayload<ExtArgs>
        fields: Prisma.SwipeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SwipeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SwipeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipePayload>
          }
          findFirst: {
            args: Prisma.SwipeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SwipeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipePayload>
          }
          findMany: {
            args: Prisma.SwipeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipePayload>[]
          }
          create: {
            args: Prisma.SwipeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipePayload>
          }
          createMany: {
            args: Prisma.SwipeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SwipeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipePayload>[]
          }
          delete: {
            args: Prisma.SwipeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipePayload>
          }
          update: {
            args: Prisma.SwipeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipePayload>
          }
          deleteMany: {
            args: Prisma.SwipeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SwipeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SwipeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipePayload>[]
          }
          upsert: {
            args: Prisma.SwipeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipePayload>
          }
          aggregate: {
            args: Prisma.SwipeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSwipe>
          }
          groupBy: {
            args: Prisma.SwipeGroupByArgs<ExtArgs>
            result: $Utils.Optional<SwipeGroupByOutputType>[]
          }
          count: {
            args: Prisma.SwipeCountArgs<ExtArgs>
            result: $Utils.Optional<SwipeCountAggregateOutputType> | number
          }
        }
      }
      Match: {
        payload: Prisma.$MatchPayload<ExtArgs>
        fields: Prisma.MatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findFirst: {
            args: Prisma.MatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findMany: {
            args: Prisma.MatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          create: {
            args: Prisma.MatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          createMany: {
            args: Prisma.MatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          delete: {
            args: Prisma.MatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          update: {
            args: Prisma.MatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          deleteMany: {
            args: Prisma.MatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          upsert: {
            args: Prisma.MatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          aggregate: {
            args: Prisma.MatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatch>
          }
          groupBy: {
            args: Prisma.MatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchCountArgs<ExtArgs>
            result: $Utils.Optional<MatchCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      RequestDocument: {
        payload: Prisma.$RequestDocumentPayload<ExtArgs>
        fields: Prisma.RequestDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RequestDocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RequestDocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestDocumentPayload>
          }
          findFirst: {
            args: Prisma.RequestDocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RequestDocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestDocumentPayload>
          }
          findMany: {
            args: Prisma.RequestDocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestDocumentPayload>[]
          }
          create: {
            args: Prisma.RequestDocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestDocumentPayload>
          }
          createMany: {
            args: Prisma.RequestDocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RequestDocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestDocumentPayload>[]
          }
          delete: {
            args: Prisma.RequestDocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestDocumentPayload>
          }
          update: {
            args: Prisma.RequestDocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestDocumentPayload>
          }
          deleteMany: {
            args: Prisma.RequestDocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RequestDocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RequestDocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestDocumentPayload>[]
          }
          upsert: {
            args: Prisma.RequestDocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestDocumentPayload>
          }
          aggregate: {
            args: Prisma.RequestDocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRequestDocument>
          }
          groupBy: {
            args: Prisma.RequestDocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<RequestDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.RequestDocumentCountArgs<ExtArgs>
            result: $Utils.Optional<RequestDocumentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    profile?: ProfileOmit
    picture?: PictureOmit
    favorite?: FavoriteOmit
    viewedApartment?: ViewedApartmentOmit
    preferences?: PreferencesOmit
    apartment?: ApartmentOmit
    request?: RequestOmit
    swipe?: SwipeOmit
    match?: MatchOmit
    message?: MessageOmit
    requestDocument?: RequestDocumentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    pictures: number
    favorites: number
    viewed_apartments: number
    swipes: number
    matches: number
    requests: number
    messages: number
    owned_apartments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pictures?: boolean | UserCountOutputTypeCountPicturesArgs
    favorites?: boolean | UserCountOutputTypeCountFavoritesArgs
    viewed_apartments?: boolean | UserCountOutputTypeCountViewed_apartmentsArgs
    swipes?: boolean | UserCountOutputTypeCountSwipesArgs
    matches?: boolean | UserCountOutputTypeCountMatchesArgs
    requests?: boolean | UserCountOutputTypeCountRequestsArgs
    messages?: boolean | UserCountOutputTypeCountMessagesArgs
    owned_apartments?: boolean | UserCountOutputTypeCountOwned_apartmentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPicturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PictureWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountViewed_apartmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewedApartmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSwipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SwipeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwned_apartmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApartmentWhereInput
  }


  /**
   * Count Type ApartmentCountOutputType
   */

  export type ApartmentCountOutputType = {
    pictures: number
    favorites: number
    viewedBy: number
    swipes: number
    matches: number
    requests: number
  }

  export type ApartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pictures?: boolean | ApartmentCountOutputTypeCountPicturesArgs
    favorites?: boolean | ApartmentCountOutputTypeCountFavoritesArgs
    viewedBy?: boolean | ApartmentCountOutputTypeCountViewedByArgs
    swipes?: boolean | ApartmentCountOutputTypeCountSwipesArgs
    matches?: boolean | ApartmentCountOutputTypeCountMatchesArgs
    requests?: boolean | ApartmentCountOutputTypeCountRequestsArgs
  }

  // Custom InputTypes
  /**
   * ApartmentCountOutputType without action
   */
  export type ApartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApartmentCountOutputType
     */
    select?: ApartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ApartmentCountOutputType without action
   */
  export type ApartmentCountOutputTypeCountPicturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PictureWhereInput
  }

  /**
   * ApartmentCountOutputType without action
   */
  export type ApartmentCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
  }

  /**
   * ApartmentCountOutputType without action
   */
  export type ApartmentCountOutputTypeCountViewedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewedApartmentWhereInput
  }

  /**
   * ApartmentCountOutputType without action
   */
  export type ApartmentCountOutputTypeCountSwipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SwipeWhereInput
  }

  /**
   * ApartmentCountOutputType without action
   */
  export type ApartmentCountOutputTypeCountMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }

  /**
   * ApartmentCountOutputType without action
   */
  export type ApartmentCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestWhereInput
  }


  /**
   * Count Type RequestCountOutputType
   */

  export type RequestCountOutputType = {
    documents: number
  }

  export type RequestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | RequestCountOutputTypeCountDocumentsArgs
  }

  // Custom InputTypes
  /**
   * RequestCountOutputType without action
   */
  export type RequestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestCountOutputType
     */
    select?: RequestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RequestCountOutputType without action
   */
  export type RequestCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestDocumentWhereInput
  }


  /**
   * Count Type MatchCountOutputType
   */

  export type MatchCountOutputType = {
    messages: number
  }

  export type MatchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | MatchCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * MatchCountOutputType without action
   */
  export type MatchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchCountOutputType
     */
    select?: MatchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MatchCountOutputType without action
   */
  export type MatchCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    username: string | null
    role: $Enums.Role | null
    phone: string | null
    avatar: string | null
    email_notifications: boolean | null
    company_name: string | null
    siret: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    username: string | null
    role: $Enums.Role | null
    phone: string | null
    avatar: string | null
    email_notifications: boolean | null
    company_name: string | null
    siret: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    username: number
    role: number
    phone: number
    avatar: number
    email_notifications: number
    company_name: number
    siret: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    username?: true
    role?: true
    phone?: true
    avatar?: true
    email_notifications?: true
    company_name?: true
    siret?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    username?: true
    role?: true
    phone?: true
    avatar?: true
    email_notifications?: true
    company_name?: true
    siret?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    username?: true
    role?: true
    phone?: true
    avatar?: true
    email_notifications?: true
    company_name?: true
    siret?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    username: string
    role: $Enums.Role
    phone: string | null
    avatar: string | null
    email_notifications: boolean
    company_name: string | null
    siret: string | null
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    role?: boolean
    phone?: boolean
    avatar?: boolean
    email_notifications?: boolean
    company_name?: boolean
    siret?: boolean
    created_at?: boolean
    updated_at?: boolean
    profile?: boolean | User$profileArgs<ExtArgs>
    pictures?: boolean | User$picturesArgs<ExtArgs>
    favorites?: boolean | User$favoritesArgs<ExtArgs>
    viewed_apartments?: boolean | User$viewed_apartmentsArgs<ExtArgs>
    swipes?: boolean | User$swipesArgs<ExtArgs>
    matches?: boolean | User$matchesArgs<ExtArgs>
    requests?: boolean | User$requestsArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    owned_apartments?: boolean | User$owned_apartmentsArgs<ExtArgs>
    preferences?: boolean | User$preferencesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    role?: boolean
    phone?: boolean
    avatar?: boolean
    email_notifications?: boolean
    company_name?: boolean
    siret?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    role?: boolean
    phone?: boolean
    avatar?: boolean
    email_notifications?: boolean
    company_name?: boolean
    siret?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    role?: boolean
    phone?: boolean
    avatar?: boolean
    email_notifications?: boolean
    company_name?: boolean
    siret?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "username" | "role" | "phone" | "avatar" | "email_notifications" | "company_name" | "siret" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | User$profileArgs<ExtArgs>
    pictures?: boolean | User$picturesArgs<ExtArgs>
    favorites?: boolean | User$favoritesArgs<ExtArgs>
    viewed_apartments?: boolean | User$viewed_apartmentsArgs<ExtArgs>
    swipes?: boolean | User$swipesArgs<ExtArgs>
    matches?: boolean | User$matchesArgs<ExtArgs>
    requests?: boolean | User$requestsArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    owned_apartments?: boolean | User$owned_apartmentsArgs<ExtArgs>
    preferences?: boolean | User$preferencesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs> | null
      pictures: Prisma.$PicturePayload<ExtArgs>[]
      favorites: Prisma.$FavoritePayload<ExtArgs>[]
      viewed_apartments: Prisma.$ViewedApartmentPayload<ExtArgs>[]
      swipes: Prisma.$SwipePayload<ExtArgs>[]
      matches: Prisma.$MatchPayload<ExtArgs>[]
      requests: Prisma.$RequestPayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
      owned_apartments: Prisma.$ApartmentPayload<ExtArgs>[]
      preferences: Prisma.$PreferencesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      username: string
      role: $Enums.Role
      phone: string | null
      avatar: string | null
      email_notifications: boolean
      company_name: string | null
      siret: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pictures<T extends User$picturesArgs<ExtArgs> = {}>(args?: Subset<T, User$picturesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favorites<T extends User$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, User$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    viewed_apartments<T extends User$viewed_apartmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$viewed_apartmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewedApartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    swipes<T extends User$swipesArgs<ExtArgs> = {}>(args?: Subset<T, User$swipesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SwipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matches<T extends User$matchesArgs<ExtArgs> = {}>(args?: Subset<T, User$matchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    requests<T extends User$requestsArgs<ExtArgs> = {}>(args?: Subset<T, User$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends User$messagesArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    owned_apartments<T extends User$owned_apartmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$owned_apartmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    preferences<T extends User$preferencesArgs<ExtArgs> = {}>(args?: Subset<T, User$preferencesArgs<ExtArgs>>): Prisma__PreferencesClient<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly phone: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly email_notifications: FieldRef<"User", 'Boolean'>
    readonly company_name: FieldRef<"User", 'String'>
    readonly siret: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
  }

  /**
   * User.pictures
   */
  export type User$picturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    where?: PictureWhereInput
    orderBy?: PictureOrderByWithRelationInput | PictureOrderByWithRelationInput[]
    cursor?: PictureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PictureScalarFieldEnum | PictureScalarFieldEnum[]
  }

  /**
   * User.favorites
   */
  export type User$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    cursor?: FavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * User.viewed_apartments
   */
  export type User$viewed_apartmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewedApartment
     */
    select?: ViewedApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewedApartment
     */
    omit?: ViewedApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewedApartmentInclude<ExtArgs> | null
    where?: ViewedApartmentWhereInput
    orderBy?: ViewedApartmentOrderByWithRelationInput | ViewedApartmentOrderByWithRelationInput[]
    cursor?: ViewedApartmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewedApartmentScalarFieldEnum | ViewedApartmentScalarFieldEnum[]
  }

  /**
   * User.swipes
   */
  export type User$swipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Swipe
     */
    select?: SwipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Swipe
     */
    omit?: SwipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeInclude<ExtArgs> | null
    where?: SwipeWhereInput
    orderBy?: SwipeOrderByWithRelationInput | SwipeOrderByWithRelationInput[]
    cursor?: SwipeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SwipeScalarFieldEnum | SwipeScalarFieldEnum[]
  }

  /**
   * User.matches
   */
  export type User$matchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * User.requests
   */
  export type User$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    where?: RequestWhereInput
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    cursor?: RequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * User.messages
   */
  export type User$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.owned_apartments
   */
  export type User$owned_apartmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apartment
     */
    select?: ApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apartment
     */
    omit?: ApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentInclude<ExtArgs> | null
    where?: ApartmentWhereInput
    orderBy?: ApartmentOrderByWithRelationInput | ApartmentOrderByWithRelationInput[]
    cursor?: ApartmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApartmentScalarFieldEnum | ApartmentScalarFieldEnum[]
  }

  /**
   * User.preferences
   */
  export type User$preferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencesInclude<ExtArgs> | null
    where?: PreferencesWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    income: number | null
    guarantors: number | null
  }

  export type ProfileSumAggregateOutputType = {
    income: number | null
    guarantors: number | null
  }

  export type ProfileMinAggregateOutputType = {
    id: string | null
    bio: string | null
    job: string | null
    income: number | null
    guarantors: number | null
    user_id: string | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: string | null
    bio: string | null
    job: string | null
    income: number | null
    guarantors: number | null
    user_id: string | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    bio: number
    job: number
    income: number
    guarantors: number
    user_id: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    income?: true
    guarantors?: true
  }

  export type ProfileSumAggregateInputType = {
    income?: true
    guarantors?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    bio?: true
    job?: true
    income?: true
    guarantors?: true
    user_id?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    bio?: true
    job?: true
    income?: true
    guarantors?: true
    user_id?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    bio?: true
    job?: true
    income?: true
    guarantors?: true
    user_id?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: string
    bio: string | null
    job: string | null
    income: number | null
    guarantors: number | null
    user_id: string
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bio?: boolean
    job?: boolean
    income?: boolean
    guarantors?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bio?: boolean
    job?: boolean
    income?: boolean
    guarantors?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bio?: boolean
    job?: boolean
    income?: boolean
    guarantors?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    bio?: boolean
    job?: boolean
    income?: boolean
    guarantors?: boolean
    user_id?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bio" | "job" | "income" | "guarantors" | "user_id", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bio: string | null
      job: string | null
      income: number | null
      guarantors: number | null
      user_id: string
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'String'>
    readonly bio: FieldRef<"Profile", 'String'>
    readonly job: FieldRef<"Profile", 'String'>
    readonly income: FieldRef<"Profile", 'Float'>
    readonly guarantors: FieldRef<"Profile", 'Int'>
    readonly user_id: FieldRef<"Profile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model Picture
   */

  export type AggregatePicture = {
    _count: PictureCountAggregateOutputType | null
    _min: PictureMinAggregateOutputType | null
    _max: PictureMaxAggregateOutputType | null
  }

  export type PictureMinAggregateOutputType = {
    id: string | null
    url: string | null
    type: $Enums.PictureType | null
    uploaded_at: Date | null
    user_id: string | null
    apartment_id: string | null
  }

  export type PictureMaxAggregateOutputType = {
    id: string | null
    url: string | null
    type: $Enums.PictureType | null
    uploaded_at: Date | null
    user_id: string | null
    apartment_id: string | null
  }

  export type PictureCountAggregateOutputType = {
    id: number
    url: number
    type: number
    uploaded_at: number
    user_id: number
    apartment_id: number
    _all: number
  }


  export type PictureMinAggregateInputType = {
    id?: true
    url?: true
    type?: true
    uploaded_at?: true
    user_id?: true
    apartment_id?: true
  }

  export type PictureMaxAggregateInputType = {
    id?: true
    url?: true
    type?: true
    uploaded_at?: true
    user_id?: true
    apartment_id?: true
  }

  export type PictureCountAggregateInputType = {
    id?: true
    url?: true
    type?: true
    uploaded_at?: true
    user_id?: true
    apartment_id?: true
    _all?: true
  }

  export type PictureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Picture to aggregate.
     */
    where?: PictureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pictures to fetch.
     */
    orderBy?: PictureOrderByWithRelationInput | PictureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PictureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pictures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pictures
    **/
    _count?: true | PictureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PictureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PictureMaxAggregateInputType
  }

  export type GetPictureAggregateType<T extends PictureAggregateArgs> = {
        [P in keyof T & keyof AggregatePicture]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePicture[P]>
      : GetScalarType<T[P], AggregatePicture[P]>
  }




  export type PictureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PictureWhereInput
    orderBy?: PictureOrderByWithAggregationInput | PictureOrderByWithAggregationInput[]
    by: PictureScalarFieldEnum[] | PictureScalarFieldEnum
    having?: PictureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PictureCountAggregateInputType | true
    _min?: PictureMinAggregateInputType
    _max?: PictureMaxAggregateInputType
  }

  export type PictureGroupByOutputType = {
    id: string
    url: string
    type: $Enums.PictureType
    uploaded_at: Date
    user_id: string | null
    apartment_id: string | null
    _count: PictureCountAggregateOutputType | null
    _min: PictureMinAggregateOutputType | null
    _max: PictureMaxAggregateOutputType | null
  }

  type GetPictureGroupByPayload<T extends PictureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PictureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PictureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PictureGroupByOutputType[P]>
            : GetScalarType<T[P], PictureGroupByOutputType[P]>
        }
      >
    >


  export type PictureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    type?: boolean
    uploaded_at?: boolean
    user_id?: boolean
    apartment_id?: boolean
    user?: boolean | Picture$userArgs<ExtArgs>
    apartment?: boolean | Picture$apartmentArgs<ExtArgs>
  }, ExtArgs["result"]["picture"]>

  export type PictureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    type?: boolean
    uploaded_at?: boolean
    user_id?: boolean
    apartment_id?: boolean
    user?: boolean | Picture$userArgs<ExtArgs>
    apartment?: boolean | Picture$apartmentArgs<ExtArgs>
  }, ExtArgs["result"]["picture"]>

  export type PictureSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    type?: boolean
    uploaded_at?: boolean
    user_id?: boolean
    apartment_id?: boolean
    user?: boolean | Picture$userArgs<ExtArgs>
    apartment?: boolean | Picture$apartmentArgs<ExtArgs>
  }, ExtArgs["result"]["picture"]>

  export type PictureSelectScalar = {
    id?: boolean
    url?: boolean
    type?: boolean
    uploaded_at?: boolean
    user_id?: boolean
    apartment_id?: boolean
  }

  export type PictureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "type" | "uploaded_at" | "user_id" | "apartment_id", ExtArgs["result"]["picture"]>
  export type PictureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Picture$userArgs<ExtArgs>
    apartment?: boolean | Picture$apartmentArgs<ExtArgs>
  }
  export type PictureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Picture$userArgs<ExtArgs>
    apartment?: boolean | Picture$apartmentArgs<ExtArgs>
  }
  export type PictureIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Picture$userArgs<ExtArgs>
    apartment?: boolean | Picture$apartmentArgs<ExtArgs>
  }

  export type $PicturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Picture"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      apartment: Prisma.$ApartmentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      type: $Enums.PictureType
      uploaded_at: Date
      user_id: string | null
      apartment_id: string | null
    }, ExtArgs["result"]["picture"]>
    composites: {}
  }

  type PictureGetPayload<S extends boolean | null | undefined | PictureDefaultArgs> = $Result.GetResult<Prisma.$PicturePayload, S>

  type PictureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PictureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PictureCountAggregateInputType | true
    }

  export interface PictureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Picture'], meta: { name: 'Picture' } }
    /**
     * Find zero or one Picture that matches the filter.
     * @param {PictureFindUniqueArgs} args - Arguments to find a Picture
     * @example
     * // Get one Picture
     * const picture = await prisma.picture.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PictureFindUniqueArgs>(args: SelectSubset<T, PictureFindUniqueArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Picture that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PictureFindUniqueOrThrowArgs} args - Arguments to find a Picture
     * @example
     * // Get one Picture
     * const picture = await prisma.picture.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PictureFindUniqueOrThrowArgs>(args: SelectSubset<T, PictureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Picture that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureFindFirstArgs} args - Arguments to find a Picture
     * @example
     * // Get one Picture
     * const picture = await prisma.picture.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PictureFindFirstArgs>(args?: SelectSubset<T, PictureFindFirstArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Picture that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureFindFirstOrThrowArgs} args - Arguments to find a Picture
     * @example
     * // Get one Picture
     * const picture = await prisma.picture.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PictureFindFirstOrThrowArgs>(args?: SelectSubset<T, PictureFindFirstOrThrowArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pictures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pictures
     * const pictures = await prisma.picture.findMany()
     * 
     * // Get first 10 Pictures
     * const pictures = await prisma.picture.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pictureWithIdOnly = await prisma.picture.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PictureFindManyArgs>(args?: SelectSubset<T, PictureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Picture.
     * @param {PictureCreateArgs} args - Arguments to create a Picture.
     * @example
     * // Create one Picture
     * const Picture = await prisma.picture.create({
     *   data: {
     *     // ... data to create a Picture
     *   }
     * })
     * 
     */
    create<T extends PictureCreateArgs>(args: SelectSubset<T, PictureCreateArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pictures.
     * @param {PictureCreateManyArgs} args - Arguments to create many Pictures.
     * @example
     * // Create many Pictures
     * const picture = await prisma.picture.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PictureCreateManyArgs>(args?: SelectSubset<T, PictureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pictures and returns the data saved in the database.
     * @param {PictureCreateManyAndReturnArgs} args - Arguments to create many Pictures.
     * @example
     * // Create many Pictures
     * const picture = await prisma.picture.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pictures and only return the `id`
     * const pictureWithIdOnly = await prisma.picture.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PictureCreateManyAndReturnArgs>(args?: SelectSubset<T, PictureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Picture.
     * @param {PictureDeleteArgs} args - Arguments to delete one Picture.
     * @example
     * // Delete one Picture
     * const Picture = await prisma.picture.delete({
     *   where: {
     *     // ... filter to delete one Picture
     *   }
     * })
     * 
     */
    delete<T extends PictureDeleteArgs>(args: SelectSubset<T, PictureDeleteArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Picture.
     * @param {PictureUpdateArgs} args - Arguments to update one Picture.
     * @example
     * // Update one Picture
     * const picture = await prisma.picture.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PictureUpdateArgs>(args: SelectSubset<T, PictureUpdateArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pictures.
     * @param {PictureDeleteManyArgs} args - Arguments to filter Pictures to delete.
     * @example
     * // Delete a few Pictures
     * const { count } = await prisma.picture.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PictureDeleteManyArgs>(args?: SelectSubset<T, PictureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pictures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pictures
     * const picture = await prisma.picture.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PictureUpdateManyArgs>(args: SelectSubset<T, PictureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pictures and returns the data updated in the database.
     * @param {PictureUpdateManyAndReturnArgs} args - Arguments to update many Pictures.
     * @example
     * // Update many Pictures
     * const picture = await prisma.picture.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pictures and only return the `id`
     * const pictureWithIdOnly = await prisma.picture.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PictureUpdateManyAndReturnArgs>(args: SelectSubset<T, PictureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Picture.
     * @param {PictureUpsertArgs} args - Arguments to update or create a Picture.
     * @example
     * // Update or create a Picture
     * const picture = await prisma.picture.upsert({
     *   create: {
     *     // ... data to create a Picture
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Picture we want to update
     *   }
     * })
     */
    upsert<T extends PictureUpsertArgs>(args: SelectSubset<T, PictureUpsertArgs<ExtArgs>>): Prisma__PictureClient<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pictures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureCountArgs} args - Arguments to filter Pictures to count.
     * @example
     * // Count the number of Pictures
     * const count = await prisma.picture.count({
     *   where: {
     *     // ... the filter for the Pictures we want to count
     *   }
     * })
    **/
    count<T extends PictureCountArgs>(
      args?: Subset<T, PictureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PictureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Picture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PictureAggregateArgs>(args: Subset<T, PictureAggregateArgs>): Prisma.PrismaPromise<GetPictureAggregateType<T>>

    /**
     * Group by Picture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PictureGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PictureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PictureGroupByArgs['orderBy'] }
        : { orderBy?: PictureGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PictureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPictureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Picture model
   */
  readonly fields: PictureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Picture.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PictureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Picture$userArgs<ExtArgs> = {}>(args?: Subset<T, Picture$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    apartment<T extends Picture$apartmentArgs<ExtArgs> = {}>(args?: Subset<T, Picture$apartmentArgs<ExtArgs>>): Prisma__ApartmentClient<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Picture model
   */
  interface PictureFieldRefs {
    readonly id: FieldRef<"Picture", 'String'>
    readonly url: FieldRef<"Picture", 'String'>
    readonly type: FieldRef<"Picture", 'PictureType'>
    readonly uploaded_at: FieldRef<"Picture", 'DateTime'>
    readonly user_id: FieldRef<"Picture", 'String'>
    readonly apartment_id: FieldRef<"Picture", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Picture findUnique
   */
  export type PictureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * Filter, which Picture to fetch.
     */
    where: PictureWhereUniqueInput
  }

  /**
   * Picture findUniqueOrThrow
   */
  export type PictureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * Filter, which Picture to fetch.
     */
    where: PictureWhereUniqueInput
  }

  /**
   * Picture findFirst
   */
  export type PictureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * Filter, which Picture to fetch.
     */
    where?: PictureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pictures to fetch.
     */
    orderBy?: PictureOrderByWithRelationInput | PictureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pictures.
     */
    cursor?: PictureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pictures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pictures.
     */
    distinct?: PictureScalarFieldEnum | PictureScalarFieldEnum[]
  }

  /**
   * Picture findFirstOrThrow
   */
  export type PictureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * Filter, which Picture to fetch.
     */
    where?: PictureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pictures to fetch.
     */
    orderBy?: PictureOrderByWithRelationInput | PictureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pictures.
     */
    cursor?: PictureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pictures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pictures.
     */
    distinct?: PictureScalarFieldEnum | PictureScalarFieldEnum[]
  }

  /**
   * Picture findMany
   */
  export type PictureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * Filter, which Pictures to fetch.
     */
    where?: PictureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pictures to fetch.
     */
    orderBy?: PictureOrderByWithRelationInput | PictureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pictures.
     */
    cursor?: PictureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pictures.
     */
    skip?: number
    distinct?: PictureScalarFieldEnum | PictureScalarFieldEnum[]
  }

  /**
   * Picture create
   */
  export type PictureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * The data needed to create a Picture.
     */
    data: XOR<PictureCreateInput, PictureUncheckedCreateInput>
  }

  /**
   * Picture createMany
   */
  export type PictureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pictures.
     */
    data: PictureCreateManyInput | PictureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Picture createManyAndReturn
   */
  export type PictureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * The data used to create many Pictures.
     */
    data: PictureCreateManyInput | PictureCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Picture update
   */
  export type PictureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * The data needed to update a Picture.
     */
    data: XOR<PictureUpdateInput, PictureUncheckedUpdateInput>
    /**
     * Choose, which Picture to update.
     */
    where: PictureWhereUniqueInput
  }

  /**
   * Picture updateMany
   */
  export type PictureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pictures.
     */
    data: XOR<PictureUpdateManyMutationInput, PictureUncheckedUpdateManyInput>
    /**
     * Filter which Pictures to update
     */
    where?: PictureWhereInput
    /**
     * Limit how many Pictures to update.
     */
    limit?: number
  }

  /**
   * Picture updateManyAndReturn
   */
  export type PictureUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * The data used to update Pictures.
     */
    data: XOR<PictureUpdateManyMutationInput, PictureUncheckedUpdateManyInput>
    /**
     * Filter which Pictures to update
     */
    where?: PictureWhereInput
    /**
     * Limit how many Pictures to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Picture upsert
   */
  export type PictureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * The filter to search for the Picture to update in case it exists.
     */
    where: PictureWhereUniqueInput
    /**
     * In case the Picture found by the `where` argument doesn't exist, create a new Picture with this data.
     */
    create: XOR<PictureCreateInput, PictureUncheckedCreateInput>
    /**
     * In case the Picture was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PictureUpdateInput, PictureUncheckedUpdateInput>
  }

  /**
   * Picture delete
   */
  export type PictureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    /**
     * Filter which Picture to delete.
     */
    where: PictureWhereUniqueInput
  }

  /**
   * Picture deleteMany
   */
  export type PictureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pictures to delete
     */
    where?: PictureWhereInput
    /**
     * Limit how many Pictures to delete.
     */
    limit?: number
  }

  /**
   * Picture.user
   */
  export type Picture$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Picture.apartment
   */
  export type Picture$apartmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apartment
     */
    select?: ApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apartment
     */
    omit?: ApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentInclude<ExtArgs> | null
    where?: ApartmentWhereInput
  }

  /**
   * Picture without action
   */
  export type PictureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
  }


  /**
   * Model Favorite
   */

  export type AggregateFavorite = {
    _count: FavoriteCountAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  export type FavoriteMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    apartment_id: string | null
  }

  export type FavoriteMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    apartment_id: string | null
  }

  export type FavoriteCountAggregateOutputType = {
    id: number
    user_id: number
    apartment_id: number
    _all: number
  }


  export type FavoriteMinAggregateInputType = {
    id?: true
    user_id?: true
    apartment_id?: true
  }

  export type FavoriteMaxAggregateInputType = {
    id?: true
    user_id?: true
    apartment_id?: true
  }

  export type FavoriteCountAggregateInputType = {
    id?: true
    user_id?: true
    apartment_id?: true
    _all?: true
  }

  export type FavoriteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorite to aggregate.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Favorites
    **/
    _count?: true | FavoriteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoriteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoriteMaxAggregateInputType
  }

  export type GetFavoriteAggregateType<T extends FavoriteAggregateArgs> = {
        [P in keyof T & keyof AggregateFavorite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavorite[P]>
      : GetScalarType<T[P], AggregateFavorite[P]>
  }




  export type FavoriteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithAggregationInput | FavoriteOrderByWithAggregationInput[]
    by: FavoriteScalarFieldEnum[] | FavoriteScalarFieldEnum
    having?: FavoriteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoriteCountAggregateInputType | true
    _min?: FavoriteMinAggregateInputType
    _max?: FavoriteMaxAggregateInputType
  }

  export type FavoriteGroupByOutputType = {
    id: string
    user_id: string
    apartment_id: string
    _count: FavoriteCountAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  type GetFavoriteGroupByPayload<T extends FavoriteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoriteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoriteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
            : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
        }
      >
    >


  export type FavoriteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    apartment_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    apartment?: boolean | ApartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    apartment_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    apartment?: boolean | ApartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    apartment_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    apartment?: boolean | ApartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectScalar = {
    id?: boolean
    user_id?: boolean
    apartment_id?: boolean
  }

  export type FavoriteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "apartment_id", ExtArgs["result"]["favorite"]>
  export type FavoriteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    apartment?: boolean | ApartmentDefaultArgs<ExtArgs>
  }
  export type FavoriteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    apartment?: boolean | ApartmentDefaultArgs<ExtArgs>
  }
  export type FavoriteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    apartment?: boolean | ApartmentDefaultArgs<ExtArgs>
  }

  export type $FavoritePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Favorite"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      apartment: Prisma.$ApartmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      apartment_id: string
    }, ExtArgs["result"]["favorite"]>
    composites: {}
  }

  type FavoriteGetPayload<S extends boolean | null | undefined | FavoriteDefaultArgs> = $Result.GetResult<Prisma.$FavoritePayload, S>

  type FavoriteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavoriteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoriteCountAggregateInputType | true
    }

  export interface FavoriteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Favorite'], meta: { name: 'Favorite' } }
    /**
     * Find zero or one Favorite that matches the filter.
     * @param {FavoriteFindUniqueArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoriteFindUniqueArgs>(args: SelectSubset<T, FavoriteFindUniqueArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Favorite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoriteFindUniqueOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoriteFindUniqueOrThrowArgs>(args: SelectSubset<T, FavoriteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoriteFindFirstArgs>(args?: SelectSubset<T, FavoriteFindFirstArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoriteFindFirstOrThrowArgs>(args?: SelectSubset<T, FavoriteFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Favorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favorites
     * const favorites = await prisma.favorite.findMany()
     * 
     * // Get first 10 Favorites
     * const favorites = await prisma.favorite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoriteWithIdOnly = await prisma.favorite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FavoriteFindManyArgs>(args?: SelectSubset<T, FavoriteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Favorite.
     * @param {FavoriteCreateArgs} args - Arguments to create a Favorite.
     * @example
     * // Create one Favorite
     * const Favorite = await prisma.favorite.create({
     *   data: {
     *     // ... data to create a Favorite
     *   }
     * })
     * 
     */
    create<T extends FavoriteCreateArgs>(args: SelectSubset<T, FavoriteCreateArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Favorites.
     * @param {FavoriteCreateManyArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavoriteCreateManyArgs>(args?: SelectSubset<T, FavoriteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Favorites and returns the data saved in the database.
     * @param {FavoriteCreateManyAndReturnArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Favorites and only return the `id`
     * const favoriteWithIdOnly = await prisma.favorite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FavoriteCreateManyAndReturnArgs>(args?: SelectSubset<T, FavoriteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Favorite.
     * @param {FavoriteDeleteArgs} args - Arguments to delete one Favorite.
     * @example
     * // Delete one Favorite
     * const Favorite = await prisma.favorite.delete({
     *   where: {
     *     // ... filter to delete one Favorite
     *   }
     * })
     * 
     */
    delete<T extends FavoriteDeleteArgs>(args: SelectSubset<T, FavoriteDeleteArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Favorite.
     * @param {FavoriteUpdateArgs} args - Arguments to update one Favorite.
     * @example
     * // Update one Favorite
     * const favorite = await prisma.favorite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavoriteUpdateArgs>(args: SelectSubset<T, FavoriteUpdateArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Favorites.
     * @param {FavoriteDeleteManyArgs} args - Arguments to filter Favorites to delete.
     * @example
     * // Delete a few Favorites
     * const { count } = await prisma.favorite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavoriteDeleteManyArgs>(args?: SelectSubset<T, FavoriteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavoriteUpdateManyArgs>(args: SelectSubset<T, FavoriteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites and returns the data updated in the database.
     * @param {FavoriteUpdateManyAndReturnArgs} args - Arguments to update many Favorites.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Favorites and only return the `id`
     * const favoriteWithIdOnly = await prisma.favorite.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FavoriteUpdateManyAndReturnArgs>(args: SelectSubset<T, FavoriteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Favorite.
     * @param {FavoriteUpsertArgs} args - Arguments to update or create a Favorite.
     * @example
     * // Update or create a Favorite
     * const favorite = await prisma.favorite.upsert({
     *   create: {
     *     // ... data to create a Favorite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favorite we want to update
     *   }
     * })
     */
    upsert<T extends FavoriteUpsertArgs>(args: SelectSubset<T, FavoriteUpsertArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteCountArgs} args - Arguments to filter Favorites to count.
     * @example
     * // Count the number of Favorites
     * const count = await prisma.favorite.count({
     *   where: {
     *     // ... the filter for the Favorites we want to count
     *   }
     * })
    **/
    count<T extends FavoriteCountArgs>(
      args?: Subset<T, FavoriteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoriteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FavoriteAggregateArgs>(args: Subset<T, FavoriteAggregateArgs>): Prisma.PrismaPromise<GetFavoriteAggregateType<T>>

    /**
     * Group by Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FavoriteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoriteGroupByArgs['orderBy'] }
        : { orderBy?: FavoriteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FavoriteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoriteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Favorite model
   */
  readonly fields: FavoriteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Favorite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoriteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    apartment<T extends ApartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApartmentDefaultArgs<ExtArgs>>): Prisma__ApartmentClient<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Favorite model
   */
  interface FavoriteFieldRefs {
    readonly id: FieldRef<"Favorite", 'String'>
    readonly user_id: FieldRef<"Favorite", 'String'>
    readonly apartment_id: FieldRef<"Favorite", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Favorite findUnique
   */
  export type FavoriteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite findUniqueOrThrow
   */
  export type FavoriteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite findFirst
   */
  export type FavoriteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite findFirstOrThrow
   */
  export type FavoriteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite findMany
   */
  export type FavoriteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorites to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite create
   */
  export type FavoriteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The data needed to create a Favorite.
     */
    data: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
  }

  /**
   * Favorite createMany
   */
  export type FavoriteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Favorites.
     */
    data: FavoriteCreateManyInput | FavoriteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Favorite createManyAndReturn
   */
  export type FavoriteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * The data used to create many Favorites.
     */
    data: FavoriteCreateManyInput | FavoriteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorite update
   */
  export type FavoriteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The data needed to update a Favorite.
     */
    data: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
    /**
     * Choose, which Favorite to update.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite updateMany
   */
  export type FavoriteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Favorites.
     */
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyInput>
    /**
     * Filter which Favorites to update
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to update.
     */
    limit?: number
  }

  /**
   * Favorite updateManyAndReturn
   */
  export type FavoriteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * The data used to update Favorites.
     */
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyInput>
    /**
     * Filter which Favorites to update
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorite upsert
   */
  export type FavoriteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The filter to search for the Favorite to update in case it exists.
     */
    where: FavoriteWhereUniqueInput
    /**
     * In case the Favorite found by the `where` argument doesn't exist, create a new Favorite with this data.
     */
    create: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
    /**
     * In case the Favorite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
  }

  /**
   * Favorite delete
   */
  export type FavoriteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter which Favorite to delete.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite deleteMany
   */
  export type FavoriteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorites to delete
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to delete.
     */
    limit?: number
  }

  /**
   * Favorite without action
   */
  export type FavoriteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
  }


  /**
   * Model ViewedApartment
   */

  export type AggregateViewedApartment = {
    _count: ViewedApartmentCountAggregateOutputType | null
    _min: ViewedApartmentMinAggregateOutputType | null
    _max: ViewedApartmentMaxAggregateOutputType | null
  }

  export type ViewedApartmentMinAggregateOutputType = {
    id: string | null
    viewed_at: Date | null
    user_id: string | null
    apartment_id: string | null
  }

  export type ViewedApartmentMaxAggregateOutputType = {
    id: string | null
    viewed_at: Date | null
    user_id: string | null
    apartment_id: string | null
  }

  export type ViewedApartmentCountAggregateOutputType = {
    id: number
    viewed_at: number
    user_id: number
    apartment_id: number
    _all: number
  }


  export type ViewedApartmentMinAggregateInputType = {
    id?: true
    viewed_at?: true
    user_id?: true
    apartment_id?: true
  }

  export type ViewedApartmentMaxAggregateInputType = {
    id?: true
    viewed_at?: true
    user_id?: true
    apartment_id?: true
  }

  export type ViewedApartmentCountAggregateInputType = {
    id?: true
    viewed_at?: true
    user_id?: true
    apartment_id?: true
    _all?: true
  }

  export type ViewedApartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ViewedApartment to aggregate.
     */
    where?: ViewedApartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewedApartments to fetch.
     */
    orderBy?: ViewedApartmentOrderByWithRelationInput | ViewedApartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ViewedApartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewedApartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewedApartments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ViewedApartments
    **/
    _count?: true | ViewedApartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ViewedApartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ViewedApartmentMaxAggregateInputType
  }

  export type GetViewedApartmentAggregateType<T extends ViewedApartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateViewedApartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateViewedApartment[P]>
      : GetScalarType<T[P], AggregateViewedApartment[P]>
  }




  export type ViewedApartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewedApartmentWhereInput
    orderBy?: ViewedApartmentOrderByWithAggregationInput | ViewedApartmentOrderByWithAggregationInput[]
    by: ViewedApartmentScalarFieldEnum[] | ViewedApartmentScalarFieldEnum
    having?: ViewedApartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ViewedApartmentCountAggregateInputType | true
    _min?: ViewedApartmentMinAggregateInputType
    _max?: ViewedApartmentMaxAggregateInputType
  }

  export type ViewedApartmentGroupByOutputType = {
    id: string
    viewed_at: Date
    user_id: string
    apartment_id: string
    _count: ViewedApartmentCountAggregateOutputType | null
    _min: ViewedApartmentMinAggregateOutputType | null
    _max: ViewedApartmentMaxAggregateOutputType | null
  }

  type GetViewedApartmentGroupByPayload<T extends ViewedApartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ViewedApartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ViewedApartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ViewedApartmentGroupByOutputType[P]>
            : GetScalarType<T[P], ViewedApartmentGroupByOutputType[P]>
        }
      >
    >


  export type ViewedApartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    viewed_at?: boolean
    user_id?: boolean
    apartment_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    apartment?: boolean | ApartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["viewedApartment"]>

  export type ViewedApartmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    viewed_at?: boolean
    user_id?: boolean
    apartment_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    apartment?: boolean | ApartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["viewedApartment"]>

  export type ViewedApartmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    viewed_at?: boolean
    user_id?: boolean
    apartment_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    apartment?: boolean | ApartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["viewedApartment"]>

  export type ViewedApartmentSelectScalar = {
    id?: boolean
    viewed_at?: boolean
    user_id?: boolean
    apartment_id?: boolean
  }

  export type ViewedApartmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "viewed_at" | "user_id" | "apartment_id", ExtArgs["result"]["viewedApartment"]>
  export type ViewedApartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    apartment?: boolean | ApartmentDefaultArgs<ExtArgs>
  }
  export type ViewedApartmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    apartment?: boolean | ApartmentDefaultArgs<ExtArgs>
  }
  export type ViewedApartmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    apartment?: boolean | ApartmentDefaultArgs<ExtArgs>
  }

  export type $ViewedApartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ViewedApartment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      apartment: Prisma.$ApartmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      viewed_at: Date
      user_id: string
      apartment_id: string
    }, ExtArgs["result"]["viewedApartment"]>
    composites: {}
  }

  type ViewedApartmentGetPayload<S extends boolean | null | undefined | ViewedApartmentDefaultArgs> = $Result.GetResult<Prisma.$ViewedApartmentPayload, S>

  type ViewedApartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ViewedApartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ViewedApartmentCountAggregateInputType | true
    }

  export interface ViewedApartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ViewedApartment'], meta: { name: 'ViewedApartment' } }
    /**
     * Find zero or one ViewedApartment that matches the filter.
     * @param {ViewedApartmentFindUniqueArgs} args - Arguments to find a ViewedApartment
     * @example
     * // Get one ViewedApartment
     * const viewedApartment = await prisma.viewedApartment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ViewedApartmentFindUniqueArgs>(args: SelectSubset<T, ViewedApartmentFindUniqueArgs<ExtArgs>>): Prisma__ViewedApartmentClient<$Result.GetResult<Prisma.$ViewedApartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ViewedApartment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ViewedApartmentFindUniqueOrThrowArgs} args - Arguments to find a ViewedApartment
     * @example
     * // Get one ViewedApartment
     * const viewedApartment = await prisma.viewedApartment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ViewedApartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, ViewedApartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ViewedApartmentClient<$Result.GetResult<Prisma.$ViewedApartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ViewedApartment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewedApartmentFindFirstArgs} args - Arguments to find a ViewedApartment
     * @example
     * // Get one ViewedApartment
     * const viewedApartment = await prisma.viewedApartment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ViewedApartmentFindFirstArgs>(args?: SelectSubset<T, ViewedApartmentFindFirstArgs<ExtArgs>>): Prisma__ViewedApartmentClient<$Result.GetResult<Prisma.$ViewedApartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ViewedApartment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewedApartmentFindFirstOrThrowArgs} args - Arguments to find a ViewedApartment
     * @example
     * // Get one ViewedApartment
     * const viewedApartment = await prisma.viewedApartment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ViewedApartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, ViewedApartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ViewedApartmentClient<$Result.GetResult<Prisma.$ViewedApartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ViewedApartments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewedApartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ViewedApartments
     * const viewedApartments = await prisma.viewedApartment.findMany()
     * 
     * // Get first 10 ViewedApartments
     * const viewedApartments = await prisma.viewedApartment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const viewedApartmentWithIdOnly = await prisma.viewedApartment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ViewedApartmentFindManyArgs>(args?: SelectSubset<T, ViewedApartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewedApartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ViewedApartment.
     * @param {ViewedApartmentCreateArgs} args - Arguments to create a ViewedApartment.
     * @example
     * // Create one ViewedApartment
     * const ViewedApartment = await prisma.viewedApartment.create({
     *   data: {
     *     // ... data to create a ViewedApartment
     *   }
     * })
     * 
     */
    create<T extends ViewedApartmentCreateArgs>(args: SelectSubset<T, ViewedApartmentCreateArgs<ExtArgs>>): Prisma__ViewedApartmentClient<$Result.GetResult<Prisma.$ViewedApartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ViewedApartments.
     * @param {ViewedApartmentCreateManyArgs} args - Arguments to create many ViewedApartments.
     * @example
     * // Create many ViewedApartments
     * const viewedApartment = await prisma.viewedApartment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ViewedApartmentCreateManyArgs>(args?: SelectSubset<T, ViewedApartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ViewedApartments and returns the data saved in the database.
     * @param {ViewedApartmentCreateManyAndReturnArgs} args - Arguments to create many ViewedApartments.
     * @example
     * // Create many ViewedApartments
     * const viewedApartment = await prisma.viewedApartment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ViewedApartments and only return the `id`
     * const viewedApartmentWithIdOnly = await prisma.viewedApartment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ViewedApartmentCreateManyAndReturnArgs>(args?: SelectSubset<T, ViewedApartmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewedApartmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ViewedApartment.
     * @param {ViewedApartmentDeleteArgs} args - Arguments to delete one ViewedApartment.
     * @example
     * // Delete one ViewedApartment
     * const ViewedApartment = await prisma.viewedApartment.delete({
     *   where: {
     *     // ... filter to delete one ViewedApartment
     *   }
     * })
     * 
     */
    delete<T extends ViewedApartmentDeleteArgs>(args: SelectSubset<T, ViewedApartmentDeleteArgs<ExtArgs>>): Prisma__ViewedApartmentClient<$Result.GetResult<Prisma.$ViewedApartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ViewedApartment.
     * @param {ViewedApartmentUpdateArgs} args - Arguments to update one ViewedApartment.
     * @example
     * // Update one ViewedApartment
     * const viewedApartment = await prisma.viewedApartment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ViewedApartmentUpdateArgs>(args: SelectSubset<T, ViewedApartmentUpdateArgs<ExtArgs>>): Prisma__ViewedApartmentClient<$Result.GetResult<Prisma.$ViewedApartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ViewedApartments.
     * @param {ViewedApartmentDeleteManyArgs} args - Arguments to filter ViewedApartments to delete.
     * @example
     * // Delete a few ViewedApartments
     * const { count } = await prisma.viewedApartment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ViewedApartmentDeleteManyArgs>(args?: SelectSubset<T, ViewedApartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ViewedApartments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewedApartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ViewedApartments
     * const viewedApartment = await prisma.viewedApartment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ViewedApartmentUpdateManyArgs>(args: SelectSubset<T, ViewedApartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ViewedApartments and returns the data updated in the database.
     * @param {ViewedApartmentUpdateManyAndReturnArgs} args - Arguments to update many ViewedApartments.
     * @example
     * // Update many ViewedApartments
     * const viewedApartment = await prisma.viewedApartment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ViewedApartments and only return the `id`
     * const viewedApartmentWithIdOnly = await prisma.viewedApartment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ViewedApartmentUpdateManyAndReturnArgs>(args: SelectSubset<T, ViewedApartmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewedApartmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ViewedApartment.
     * @param {ViewedApartmentUpsertArgs} args - Arguments to update or create a ViewedApartment.
     * @example
     * // Update or create a ViewedApartment
     * const viewedApartment = await prisma.viewedApartment.upsert({
     *   create: {
     *     // ... data to create a ViewedApartment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ViewedApartment we want to update
     *   }
     * })
     */
    upsert<T extends ViewedApartmentUpsertArgs>(args: SelectSubset<T, ViewedApartmentUpsertArgs<ExtArgs>>): Prisma__ViewedApartmentClient<$Result.GetResult<Prisma.$ViewedApartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ViewedApartments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewedApartmentCountArgs} args - Arguments to filter ViewedApartments to count.
     * @example
     * // Count the number of ViewedApartments
     * const count = await prisma.viewedApartment.count({
     *   where: {
     *     // ... the filter for the ViewedApartments we want to count
     *   }
     * })
    **/
    count<T extends ViewedApartmentCountArgs>(
      args?: Subset<T, ViewedApartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ViewedApartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ViewedApartment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewedApartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ViewedApartmentAggregateArgs>(args: Subset<T, ViewedApartmentAggregateArgs>): Prisma.PrismaPromise<GetViewedApartmentAggregateType<T>>

    /**
     * Group by ViewedApartment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewedApartmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ViewedApartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ViewedApartmentGroupByArgs['orderBy'] }
        : { orderBy?: ViewedApartmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ViewedApartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetViewedApartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ViewedApartment model
   */
  readonly fields: ViewedApartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ViewedApartment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ViewedApartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    apartment<T extends ApartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApartmentDefaultArgs<ExtArgs>>): Prisma__ApartmentClient<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ViewedApartment model
   */
  interface ViewedApartmentFieldRefs {
    readonly id: FieldRef<"ViewedApartment", 'String'>
    readonly viewed_at: FieldRef<"ViewedApartment", 'DateTime'>
    readonly user_id: FieldRef<"ViewedApartment", 'String'>
    readonly apartment_id: FieldRef<"ViewedApartment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ViewedApartment findUnique
   */
  export type ViewedApartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewedApartment
     */
    select?: ViewedApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewedApartment
     */
    omit?: ViewedApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewedApartmentInclude<ExtArgs> | null
    /**
     * Filter, which ViewedApartment to fetch.
     */
    where: ViewedApartmentWhereUniqueInput
  }

  /**
   * ViewedApartment findUniqueOrThrow
   */
  export type ViewedApartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewedApartment
     */
    select?: ViewedApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewedApartment
     */
    omit?: ViewedApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewedApartmentInclude<ExtArgs> | null
    /**
     * Filter, which ViewedApartment to fetch.
     */
    where: ViewedApartmentWhereUniqueInput
  }

  /**
   * ViewedApartment findFirst
   */
  export type ViewedApartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewedApartment
     */
    select?: ViewedApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewedApartment
     */
    omit?: ViewedApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewedApartmentInclude<ExtArgs> | null
    /**
     * Filter, which ViewedApartment to fetch.
     */
    where?: ViewedApartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewedApartments to fetch.
     */
    orderBy?: ViewedApartmentOrderByWithRelationInput | ViewedApartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ViewedApartments.
     */
    cursor?: ViewedApartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewedApartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewedApartments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ViewedApartments.
     */
    distinct?: ViewedApartmentScalarFieldEnum | ViewedApartmentScalarFieldEnum[]
  }

  /**
   * ViewedApartment findFirstOrThrow
   */
  export type ViewedApartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewedApartment
     */
    select?: ViewedApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewedApartment
     */
    omit?: ViewedApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewedApartmentInclude<ExtArgs> | null
    /**
     * Filter, which ViewedApartment to fetch.
     */
    where?: ViewedApartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewedApartments to fetch.
     */
    orderBy?: ViewedApartmentOrderByWithRelationInput | ViewedApartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ViewedApartments.
     */
    cursor?: ViewedApartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewedApartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewedApartments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ViewedApartments.
     */
    distinct?: ViewedApartmentScalarFieldEnum | ViewedApartmentScalarFieldEnum[]
  }

  /**
   * ViewedApartment findMany
   */
  export type ViewedApartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewedApartment
     */
    select?: ViewedApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewedApartment
     */
    omit?: ViewedApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewedApartmentInclude<ExtArgs> | null
    /**
     * Filter, which ViewedApartments to fetch.
     */
    where?: ViewedApartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewedApartments to fetch.
     */
    orderBy?: ViewedApartmentOrderByWithRelationInput | ViewedApartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ViewedApartments.
     */
    cursor?: ViewedApartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewedApartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewedApartments.
     */
    skip?: number
    distinct?: ViewedApartmentScalarFieldEnum | ViewedApartmentScalarFieldEnum[]
  }

  /**
   * ViewedApartment create
   */
  export type ViewedApartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewedApartment
     */
    select?: ViewedApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewedApartment
     */
    omit?: ViewedApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewedApartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a ViewedApartment.
     */
    data: XOR<ViewedApartmentCreateInput, ViewedApartmentUncheckedCreateInput>
  }

  /**
   * ViewedApartment createMany
   */
  export type ViewedApartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ViewedApartments.
     */
    data: ViewedApartmentCreateManyInput | ViewedApartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ViewedApartment createManyAndReturn
   */
  export type ViewedApartmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewedApartment
     */
    select?: ViewedApartmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ViewedApartment
     */
    omit?: ViewedApartmentOmit<ExtArgs> | null
    /**
     * The data used to create many ViewedApartments.
     */
    data: ViewedApartmentCreateManyInput | ViewedApartmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewedApartmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ViewedApartment update
   */
  export type ViewedApartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewedApartment
     */
    select?: ViewedApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewedApartment
     */
    omit?: ViewedApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewedApartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a ViewedApartment.
     */
    data: XOR<ViewedApartmentUpdateInput, ViewedApartmentUncheckedUpdateInput>
    /**
     * Choose, which ViewedApartment to update.
     */
    where: ViewedApartmentWhereUniqueInput
  }

  /**
   * ViewedApartment updateMany
   */
  export type ViewedApartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ViewedApartments.
     */
    data: XOR<ViewedApartmentUpdateManyMutationInput, ViewedApartmentUncheckedUpdateManyInput>
    /**
     * Filter which ViewedApartments to update
     */
    where?: ViewedApartmentWhereInput
    /**
     * Limit how many ViewedApartments to update.
     */
    limit?: number
  }

  /**
   * ViewedApartment updateManyAndReturn
   */
  export type ViewedApartmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewedApartment
     */
    select?: ViewedApartmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ViewedApartment
     */
    omit?: ViewedApartmentOmit<ExtArgs> | null
    /**
     * The data used to update ViewedApartments.
     */
    data: XOR<ViewedApartmentUpdateManyMutationInput, ViewedApartmentUncheckedUpdateManyInput>
    /**
     * Filter which ViewedApartments to update
     */
    where?: ViewedApartmentWhereInput
    /**
     * Limit how many ViewedApartments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewedApartmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ViewedApartment upsert
   */
  export type ViewedApartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewedApartment
     */
    select?: ViewedApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewedApartment
     */
    omit?: ViewedApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewedApartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the ViewedApartment to update in case it exists.
     */
    where: ViewedApartmentWhereUniqueInput
    /**
     * In case the ViewedApartment found by the `where` argument doesn't exist, create a new ViewedApartment with this data.
     */
    create: XOR<ViewedApartmentCreateInput, ViewedApartmentUncheckedCreateInput>
    /**
     * In case the ViewedApartment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ViewedApartmentUpdateInput, ViewedApartmentUncheckedUpdateInput>
  }

  /**
   * ViewedApartment delete
   */
  export type ViewedApartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewedApartment
     */
    select?: ViewedApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewedApartment
     */
    omit?: ViewedApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewedApartmentInclude<ExtArgs> | null
    /**
     * Filter which ViewedApartment to delete.
     */
    where: ViewedApartmentWhereUniqueInput
  }

  /**
   * ViewedApartment deleteMany
   */
  export type ViewedApartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ViewedApartments to delete
     */
    where?: ViewedApartmentWhereInput
    /**
     * Limit how many ViewedApartments to delete.
     */
    limit?: number
  }

  /**
   * ViewedApartment without action
   */
  export type ViewedApartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewedApartment
     */
    select?: ViewedApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewedApartment
     */
    omit?: ViewedApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewedApartmentInclude<ExtArgs> | null
  }


  /**
   * Model Preferences
   */

  export type AggregatePreferences = {
    _count: PreferencesCountAggregateOutputType | null
    _avg: PreferencesAvgAggregateOutputType | null
    _sum: PreferencesSumAggregateOutputType | null
    _min: PreferencesMinAggregateOutputType | null
    _max: PreferencesMaxAggregateOutputType | null
  }

  export type PreferencesAvgAggregateOutputType = {
    min_price: number | null
    max_price: number | null
    min_surface: number | null
  }

  export type PreferencesSumAggregateOutputType = {
    min_price: number | null
    max_price: number | null
    min_surface: number | null
  }

  export type PreferencesMinAggregateOutputType = {
    id: string | null
    listing_type: string | null
    min_price: number | null
    max_price: number | null
    min_surface: number | null
    user_id: string | null
  }

  export type PreferencesMaxAggregateOutputType = {
    id: string | null
    listing_type: string | null
    min_price: number | null
    max_price: number | null
    min_surface: number | null
    user_id: string | null
  }

  export type PreferencesCountAggregateOutputType = {
    id: number
    property_type: number
    listing_type: number
    min_price: number
    max_price: number
    min_surface: number
    regions: number
    tags: number
    user_id: number
    _all: number
  }


  export type PreferencesAvgAggregateInputType = {
    min_price?: true
    max_price?: true
    min_surface?: true
  }

  export type PreferencesSumAggregateInputType = {
    min_price?: true
    max_price?: true
    min_surface?: true
  }

  export type PreferencesMinAggregateInputType = {
    id?: true
    listing_type?: true
    min_price?: true
    max_price?: true
    min_surface?: true
    user_id?: true
  }

  export type PreferencesMaxAggregateInputType = {
    id?: true
    listing_type?: true
    min_price?: true
    max_price?: true
    min_surface?: true
    user_id?: true
  }

  export type PreferencesCountAggregateInputType = {
    id?: true
    property_type?: true
    listing_type?: true
    min_price?: true
    max_price?: true
    min_surface?: true
    regions?: true
    tags?: true
    user_id?: true
    _all?: true
  }

  export type PreferencesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Preferences to aggregate.
     */
    where?: PreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preferences to fetch.
     */
    orderBy?: PreferencesOrderByWithRelationInput | PreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Preferences
    **/
    _count?: true | PreferencesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PreferencesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PreferencesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PreferencesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PreferencesMaxAggregateInputType
  }

  export type GetPreferencesAggregateType<T extends PreferencesAggregateArgs> = {
        [P in keyof T & keyof AggregatePreferences]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePreferences[P]>
      : GetScalarType<T[P], AggregatePreferences[P]>
  }




  export type PreferencesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PreferencesWhereInput
    orderBy?: PreferencesOrderByWithAggregationInput | PreferencesOrderByWithAggregationInput[]
    by: PreferencesScalarFieldEnum[] | PreferencesScalarFieldEnum
    having?: PreferencesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PreferencesCountAggregateInputType | true
    _avg?: PreferencesAvgAggregateInputType
    _sum?: PreferencesSumAggregateInputType
    _min?: PreferencesMinAggregateInputType
    _max?: PreferencesMaxAggregateInputType
  }

  export type PreferencesGroupByOutputType = {
    id: string
    property_type: string[]
    listing_type: string | null
    min_price: number | null
    max_price: number | null
    min_surface: number | null
    regions: string[]
    tags: string[]
    user_id: string
    _count: PreferencesCountAggregateOutputType | null
    _avg: PreferencesAvgAggregateOutputType | null
    _sum: PreferencesSumAggregateOutputType | null
    _min: PreferencesMinAggregateOutputType | null
    _max: PreferencesMaxAggregateOutputType | null
  }

  type GetPreferencesGroupByPayload<T extends PreferencesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PreferencesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PreferencesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PreferencesGroupByOutputType[P]>
            : GetScalarType<T[P], PreferencesGroupByOutputType[P]>
        }
      >
    >


  export type PreferencesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    property_type?: boolean
    listing_type?: boolean
    min_price?: boolean
    max_price?: boolean
    min_surface?: boolean
    regions?: boolean
    tags?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["preferences"]>

  export type PreferencesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    property_type?: boolean
    listing_type?: boolean
    min_price?: boolean
    max_price?: boolean
    min_surface?: boolean
    regions?: boolean
    tags?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["preferences"]>

  export type PreferencesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    property_type?: boolean
    listing_type?: boolean
    min_price?: boolean
    max_price?: boolean
    min_surface?: boolean
    regions?: boolean
    tags?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["preferences"]>

  export type PreferencesSelectScalar = {
    id?: boolean
    property_type?: boolean
    listing_type?: boolean
    min_price?: boolean
    max_price?: boolean
    min_surface?: boolean
    regions?: boolean
    tags?: boolean
    user_id?: boolean
  }

  export type PreferencesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "property_type" | "listing_type" | "min_price" | "max_price" | "min_surface" | "regions" | "tags" | "user_id", ExtArgs["result"]["preferences"]>
  export type PreferencesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PreferencesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PreferencesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PreferencesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Preferences"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      property_type: string[]
      listing_type: string | null
      min_price: number | null
      max_price: number | null
      min_surface: number | null
      regions: string[]
      tags: string[]
      user_id: string
    }, ExtArgs["result"]["preferences"]>
    composites: {}
  }

  type PreferencesGetPayload<S extends boolean | null | undefined | PreferencesDefaultArgs> = $Result.GetResult<Prisma.$PreferencesPayload, S>

  type PreferencesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PreferencesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PreferencesCountAggregateInputType | true
    }

  export interface PreferencesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Preferences'], meta: { name: 'Preferences' } }
    /**
     * Find zero or one Preferences that matches the filter.
     * @param {PreferencesFindUniqueArgs} args - Arguments to find a Preferences
     * @example
     * // Get one Preferences
     * const preferences = await prisma.preferences.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PreferencesFindUniqueArgs>(args: SelectSubset<T, PreferencesFindUniqueArgs<ExtArgs>>): Prisma__PreferencesClient<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Preferences that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PreferencesFindUniqueOrThrowArgs} args - Arguments to find a Preferences
     * @example
     * // Get one Preferences
     * const preferences = await prisma.preferences.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PreferencesFindUniqueOrThrowArgs>(args: SelectSubset<T, PreferencesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PreferencesClient<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Preferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferencesFindFirstArgs} args - Arguments to find a Preferences
     * @example
     * // Get one Preferences
     * const preferences = await prisma.preferences.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PreferencesFindFirstArgs>(args?: SelectSubset<T, PreferencesFindFirstArgs<ExtArgs>>): Prisma__PreferencesClient<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Preferences that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferencesFindFirstOrThrowArgs} args - Arguments to find a Preferences
     * @example
     * // Get one Preferences
     * const preferences = await prisma.preferences.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PreferencesFindFirstOrThrowArgs>(args?: SelectSubset<T, PreferencesFindFirstOrThrowArgs<ExtArgs>>): Prisma__PreferencesClient<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Preferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferencesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Preferences
     * const preferences = await prisma.preferences.findMany()
     * 
     * // Get first 10 Preferences
     * const preferences = await prisma.preferences.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const preferencesWithIdOnly = await prisma.preferences.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PreferencesFindManyArgs>(args?: SelectSubset<T, PreferencesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Preferences.
     * @param {PreferencesCreateArgs} args - Arguments to create a Preferences.
     * @example
     * // Create one Preferences
     * const Preferences = await prisma.preferences.create({
     *   data: {
     *     // ... data to create a Preferences
     *   }
     * })
     * 
     */
    create<T extends PreferencesCreateArgs>(args: SelectSubset<T, PreferencesCreateArgs<ExtArgs>>): Prisma__PreferencesClient<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Preferences.
     * @param {PreferencesCreateManyArgs} args - Arguments to create many Preferences.
     * @example
     * // Create many Preferences
     * const preferences = await prisma.preferences.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PreferencesCreateManyArgs>(args?: SelectSubset<T, PreferencesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Preferences and returns the data saved in the database.
     * @param {PreferencesCreateManyAndReturnArgs} args - Arguments to create many Preferences.
     * @example
     * // Create many Preferences
     * const preferences = await prisma.preferences.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Preferences and only return the `id`
     * const preferencesWithIdOnly = await prisma.preferences.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PreferencesCreateManyAndReturnArgs>(args?: SelectSubset<T, PreferencesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Preferences.
     * @param {PreferencesDeleteArgs} args - Arguments to delete one Preferences.
     * @example
     * // Delete one Preferences
     * const Preferences = await prisma.preferences.delete({
     *   where: {
     *     // ... filter to delete one Preferences
     *   }
     * })
     * 
     */
    delete<T extends PreferencesDeleteArgs>(args: SelectSubset<T, PreferencesDeleteArgs<ExtArgs>>): Prisma__PreferencesClient<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Preferences.
     * @param {PreferencesUpdateArgs} args - Arguments to update one Preferences.
     * @example
     * // Update one Preferences
     * const preferences = await prisma.preferences.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PreferencesUpdateArgs>(args: SelectSubset<T, PreferencesUpdateArgs<ExtArgs>>): Prisma__PreferencesClient<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Preferences.
     * @param {PreferencesDeleteManyArgs} args - Arguments to filter Preferences to delete.
     * @example
     * // Delete a few Preferences
     * const { count } = await prisma.preferences.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PreferencesDeleteManyArgs>(args?: SelectSubset<T, PreferencesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Preferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferencesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Preferences
     * const preferences = await prisma.preferences.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PreferencesUpdateManyArgs>(args: SelectSubset<T, PreferencesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Preferences and returns the data updated in the database.
     * @param {PreferencesUpdateManyAndReturnArgs} args - Arguments to update many Preferences.
     * @example
     * // Update many Preferences
     * const preferences = await prisma.preferences.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Preferences and only return the `id`
     * const preferencesWithIdOnly = await prisma.preferences.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PreferencesUpdateManyAndReturnArgs>(args: SelectSubset<T, PreferencesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Preferences.
     * @param {PreferencesUpsertArgs} args - Arguments to update or create a Preferences.
     * @example
     * // Update or create a Preferences
     * const preferences = await prisma.preferences.upsert({
     *   create: {
     *     // ... data to create a Preferences
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Preferences we want to update
     *   }
     * })
     */
    upsert<T extends PreferencesUpsertArgs>(args: SelectSubset<T, PreferencesUpsertArgs<ExtArgs>>): Prisma__PreferencesClient<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Preferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferencesCountArgs} args - Arguments to filter Preferences to count.
     * @example
     * // Count the number of Preferences
     * const count = await prisma.preferences.count({
     *   where: {
     *     // ... the filter for the Preferences we want to count
     *   }
     * })
    **/
    count<T extends PreferencesCountArgs>(
      args?: Subset<T, PreferencesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PreferencesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Preferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferencesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PreferencesAggregateArgs>(args: Subset<T, PreferencesAggregateArgs>): Prisma.PrismaPromise<GetPreferencesAggregateType<T>>

    /**
     * Group by Preferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferencesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PreferencesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PreferencesGroupByArgs['orderBy'] }
        : { orderBy?: PreferencesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PreferencesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPreferencesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Preferences model
   */
  readonly fields: PreferencesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Preferences.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PreferencesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Preferences model
   */
  interface PreferencesFieldRefs {
    readonly id: FieldRef<"Preferences", 'String'>
    readonly property_type: FieldRef<"Preferences", 'String[]'>
    readonly listing_type: FieldRef<"Preferences", 'String'>
    readonly min_price: FieldRef<"Preferences", 'Float'>
    readonly max_price: FieldRef<"Preferences", 'Float'>
    readonly min_surface: FieldRef<"Preferences", 'Float'>
    readonly regions: FieldRef<"Preferences", 'String[]'>
    readonly tags: FieldRef<"Preferences", 'String[]'>
    readonly user_id: FieldRef<"Preferences", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Preferences findUnique
   */
  export type PreferencesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencesInclude<ExtArgs> | null
    /**
     * Filter, which Preferences to fetch.
     */
    where: PreferencesWhereUniqueInput
  }

  /**
   * Preferences findUniqueOrThrow
   */
  export type PreferencesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencesInclude<ExtArgs> | null
    /**
     * Filter, which Preferences to fetch.
     */
    where: PreferencesWhereUniqueInput
  }

  /**
   * Preferences findFirst
   */
  export type PreferencesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencesInclude<ExtArgs> | null
    /**
     * Filter, which Preferences to fetch.
     */
    where?: PreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preferences to fetch.
     */
    orderBy?: PreferencesOrderByWithRelationInput | PreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Preferences.
     */
    cursor?: PreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Preferences.
     */
    distinct?: PreferencesScalarFieldEnum | PreferencesScalarFieldEnum[]
  }

  /**
   * Preferences findFirstOrThrow
   */
  export type PreferencesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencesInclude<ExtArgs> | null
    /**
     * Filter, which Preferences to fetch.
     */
    where?: PreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preferences to fetch.
     */
    orderBy?: PreferencesOrderByWithRelationInput | PreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Preferences.
     */
    cursor?: PreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Preferences.
     */
    distinct?: PreferencesScalarFieldEnum | PreferencesScalarFieldEnum[]
  }

  /**
   * Preferences findMany
   */
  export type PreferencesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencesInclude<ExtArgs> | null
    /**
     * Filter, which Preferences to fetch.
     */
    where?: PreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preferences to fetch.
     */
    orderBy?: PreferencesOrderByWithRelationInput | PreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Preferences.
     */
    cursor?: PreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preferences.
     */
    skip?: number
    distinct?: PreferencesScalarFieldEnum | PreferencesScalarFieldEnum[]
  }

  /**
   * Preferences create
   */
  export type PreferencesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencesInclude<ExtArgs> | null
    /**
     * The data needed to create a Preferences.
     */
    data: XOR<PreferencesCreateInput, PreferencesUncheckedCreateInput>
  }

  /**
   * Preferences createMany
   */
  export type PreferencesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Preferences.
     */
    data: PreferencesCreateManyInput | PreferencesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Preferences createManyAndReturn
   */
  export type PreferencesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * The data used to create many Preferences.
     */
    data: PreferencesCreateManyInput | PreferencesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Preferences update
   */
  export type PreferencesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencesInclude<ExtArgs> | null
    /**
     * The data needed to update a Preferences.
     */
    data: XOR<PreferencesUpdateInput, PreferencesUncheckedUpdateInput>
    /**
     * Choose, which Preferences to update.
     */
    where: PreferencesWhereUniqueInput
  }

  /**
   * Preferences updateMany
   */
  export type PreferencesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Preferences.
     */
    data: XOR<PreferencesUpdateManyMutationInput, PreferencesUncheckedUpdateManyInput>
    /**
     * Filter which Preferences to update
     */
    where?: PreferencesWhereInput
    /**
     * Limit how many Preferences to update.
     */
    limit?: number
  }

  /**
   * Preferences updateManyAndReturn
   */
  export type PreferencesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * The data used to update Preferences.
     */
    data: XOR<PreferencesUpdateManyMutationInput, PreferencesUncheckedUpdateManyInput>
    /**
     * Filter which Preferences to update
     */
    where?: PreferencesWhereInput
    /**
     * Limit how many Preferences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Preferences upsert
   */
  export type PreferencesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencesInclude<ExtArgs> | null
    /**
     * The filter to search for the Preferences to update in case it exists.
     */
    where: PreferencesWhereUniqueInput
    /**
     * In case the Preferences found by the `where` argument doesn't exist, create a new Preferences with this data.
     */
    create: XOR<PreferencesCreateInput, PreferencesUncheckedCreateInput>
    /**
     * In case the Preferences was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PreferencesUpdateInput, PreferencesUncheckedUpdateInput>
  }

  /**
   * Preferences delete
   */
  export type PreferencesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencesInclude<ExtArgs> | null
    /**
     * Filter which Preferences to delete.
     */
    where: PreferencesWhereUniqueInput
  }

  /**
   * Preferences deleteMany
   */
  export type PreferencesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Preferences to delete
     */
    where?: PreferencesWhereInput
    /**
     * Limit how many Preferences to delete.
     */
    limit?: number
  }

  /**
   * Preferences without action
   */
  export type PreferencesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencesInclude<ExtArgs> | null
  }


  /**
   * Model Apartment
   */

  export type AggregateApartment = {
    _count: ApartmentCountAggregateOutputType | null
    _avg: ApartmentAvgAggregateOutputType | null
    _sum: ApartmentSumAggregateOutputType | null
    _min: ApartmentMinAggregateOutputType | null
    _max: ApartmentMaxAggregateOutputType | null
  }

  export type ApartmentAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    price: number | null
    surface: number | null
    rooms: number | null
  }

  export type ApartmentSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    price: number | null
    surface: number | null
    rooms: number | null
  }

  export type ApartmentMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    address: string | null
    region: string | null
    city: string | null
    postal_code: string | null
    country: string | null
    latitude: number | null
    longitude: number | null
    property_type: $Enums.PropertyType | null
    listing_type: $Enums.ListingType | null
    price: number | null
    surface: number | null
    rooms: number | null
    availability: boolean | null
    owner_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ApartmentMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    address: string | null
    region: string | null
    city: string | null
    postal_code: string | null
    country: string | null
    latitude: number | null
    longitude: number | null
    property_type: $Enums.PropertyType | null
    listing_type: $Enums.ListingType | null
    price: number | null
    surface: number | null
    rooms: number | null
    availability: boolean | null
    owner_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ApartmentCountAggregateOutputType = {
    id: number
    title: number
    description: number
    address: number
    region: number
    city: number
    postal_code: number
    country: number
    latitude: number
    longitude: number
    property_type: number
    listing_type: number
    price: number
    surface: number
    rooms: number
    tags: number
    availability: number
    owner_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ApartmentAvgAggregateInputType = {
    latitude?: true
    longitude?: true
    price?: true
    surface?: true
    rooms?: true
  }

  export type ApartmentSumAggregateInputType = {
    latitude?: true
    longitude?: true
    price?: true
    surface?: true
    rooms?: true
  }

  export type ApartmentMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    address?: true
    region?: true
    city?: true
    postal_code?: true
    country?: true
    latitude?: true
    longitude?: true
    property_type?: true
    listing_type?: true
    price?: true
    surface?: true
    rooms?: true
    availability?: true
    owner_id?: true
    created_at?: true
    updated_at?: true
  }

  export type ApartmentMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    address?: true
    region?: true
    city?: true
    postal_code?: true
    country?: true
    latitude?: true
    longitude?: true
    property_type?: true
    listing_type?: true
    price?: true
    surface?: true
    rooms?: true
    availability?: true
    owner_id?: true
    created_at?: true
    updated_at?: true
  }

  export type ApartmentCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    address?: true
    region?: true
    city?: true
    postal_code?: true
    country?: true
    latitude?: true
    longitude?: true
    property_type?: true
    listing_type?: true
    price?: true
    surface?: true
    rooms?: true
    tags?: true
    availability?: true
    owner_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ApartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Apartment to aggregate.
     */
    where?: ApartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apartments to fetch.
     */
    orderBy?: ApartmentOrderByWithRelationInput | ApartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apartments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Apartments
    **/
    _count?: true | ApartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApartmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApartmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApartmentMaxAggregateInputType
  }

  export type GetApartmentAggregateType<T extends ApartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateApartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApartment[P]>
      : GetScalarType<T[P], AggregateApartment[P]>
  }




  export type ApartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApartmentWhereInput
    orderBy?: ApartmentOrderByWithAggregationInput | ApartmentOrderByWithAggregationInput[]
    by: ApartmentScalarFieldEnum[] | ApartmentScalarFieldEnum
    having?: ApartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApartmentCountAggregateInputType | true
    _avg?: ApartmentAvgAggregateInputType
    _sum?: ApartmentSumAggregateInputType
    _min?: ApartmentMinAggregateInputType
    _max?: ApartmentMaxAggregateInputType
  }

  export type ApartmentGroupByOutputType = {
    id: string
    title: string
    description: string | null
    address: string
    region: string
    city: string | null
    postal_code: string | null
    country: string
    latitude: number | null
    longitude: number | null
    property_type: $Enums.PropertyType
    listing_type: $Enums.ListingType
    price: number
    surface: number
    rooms: number
    tags: string[]
    availability: boolean
    owner_id: string
    created_at: Date
    updated_at: Date
    _count: ApartmentCountAggregateOutputType | null
    _avg: ApartmentAvgAggregateOutputType | null
    _sum: ApartmentSumAggregateOutputType | null
    _min: ApartmentMinAggregateOutputType | null
    _max: ApartmentMaxAggregateOutputType | null
  }

  type GetApartmentGroupByPayload<T extends ApartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApartmentGroupByOutputType[P]>
            : GetScalarType<T[P], ApartmentGroupByOutputType[P]>
        }
      >
    >


  export type ApartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    address?: boolean
    region?: boolean
    city?: boolean
    postal_code?: boolean
    country?: boolean
    latitude?: boolean
    longitude?: boolean
    property_type?: boolean
    listing_type?: boolean
    price?: boolean
    surface?: boolean
    rooms?: boolean
    tags?: boolean
    availability?: boolean
    owner_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    pictures?: boolean | Apartment$picturesArgs<ExtArgs>
    favorites?: boolean | Apartment$favoritesArgs<ExtArgs>
    viewedBy?: boolean | Apartment$viewedByArgs<ExtArgs>
    swipes?: boolean | Apartment$swipesArgs<ExtArgs>
    matches?: boolean | Apartment$matchesArgs<ExtArgs>
    requests?: boolean | Apartment$requestsArgs<ExtArgs>
    _count?: boolean | ApartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apartment"]>

  export type ApartmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    address?: boolean
    region?: boolean
    city?: boolean
    postal_code?: boolean
    country?: boolean
    latitude?: boolean
    longitude?: boolean
    property_type?: boolean
    listing_type?: boolean
    price?: boolean
    surface?: boolean
    rooms?: boolean
    tags?: boolean
    availability?: boolean
    owner_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apartment"]>

  export type ApartmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    address?: boolean
    region?: boolean
    city?: boolean
    postal_code?: boolean
    country?: boolean
    latitude?: boolean
    longitude?: boolean
    property_type?: boolean
    listing_type?: boolean
    price?: boolean
    surface?: boolean
    rooms?: boolean
    tags?: boolean
    availability?: boolean
    owner_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apartment"]>

  export type ApartmentSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    address?: boolean
    region?: boolean
    city?: boolean
    postal_code?: boolean
    country?: boolean
    latitude?: boolean
    longitude?: boolean
    property_type?: boolean
    listing_type?: boolean
    price?: boolean
    surface?: boolean
    rooms?: boolean
    tags?: boolean
    availability?: boolean
    owner_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ApartmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "address" | "region" | "city" | "postal_code" | "country" | "latitude" | "longitude" | "property_type" | "listing_type" | "price" | "surface" | "rooms" | "tags" | "availability" | "owner_id" | "created_at" | "updated_at", ExtArgs["result"]["apartment"]>
  export type ApartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    pictures?: boolean | Apartment$picturesArgs<ExtArgs>
    favorites?: boolean | Apartment$favoritesArgs<ExtArgs>
    viewedBy?: boolean | Apartment$viewedByArgs<ExtArgs>
    swipes?: boolean | Apartment$swipesArgs<ExtArgs>
    matches?: boolean | Apartment$matchesArgs<ExtArgs>
    requests?: boolean | Apartment$requestsArgs<ExtArgs>
    _count?: boolean | ApartmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ApartmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ApartmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ApartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Apartment"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      pictures: Prisma.$PicturePayload<ExtArgs>[]
      favorites: Prisma.$FavoritePayload<ExtArgs>[]
      viewedBy: Prisma.$ViewedApartmentPayload<ExtArgs>[]
      swipes: Prisma.$SwipePayload<ExtArgs>[]
      matches: Prisma.$MatchPayload<ExtArgs>[]
      requests: Prisma.$RequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      address: string
      region: string
      city: string | null
      postal_code: string | null
      country: string
      latitude: number | null
      longitude: number | null
      property_type: $Enums.PropertyType
      listing_type: $Enums.ListingType
      price: number
      surface: number
      rooms: number
      tags: string[]
      availability: boolean
      owner_id: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["apartment"]>
    composites: {}
  }

  type ApartmentGetPayload<S extends boolean | null | undefined | ApartmentDefaultArgs> = $Result.GetResult<Prisma.$ApartmentPayload, S>

  type ApartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApartmentCountAggregateInputType | true
    }

  export interface ApartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Apartment'], meta: { name: 'Apartment' } }
    /**
     * Find zero or one Apartment that matches the filter.
     * @param {ApartmentFindUniqueArgs} args - Arguments to find a Apartment
     * @example
     * // Get one Apartment
     * const apartment = await prisma.apartment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApartmentFindUniqueArgs>(args: SelectSubset<T, ApartmentFindUniqueArgs<ExtArgs>>): Prisma__ApartmentClient<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Apartment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApartmentFindUniqueOrThrowArgs} args - Arguments to find a Apartment
     * @example
     * // Get one Apartment
     * const apartment = await prisma.apartment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, ApartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApartmentClient<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Apartment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentFindFirstArgs} args - Arguments to find a Apartment
     * @example
     * // Get one Apartment
     * const apartment = await prisma.apartment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApartmentFindFirstArgs>(args?: SelectSubset<T, ApartmentFindFirstArgs<ExtArgs>>): Prisma__ApartmentClient<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Apartment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentFindFirstOrThrowArgs} args - Arguments to find a Apartment
     * @example
     * // Get one Apartment
     * const apartment = await prisma.apartment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, ApartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApartmentClient<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Apartments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Apartments
     * const apartments = await prisma.apartment.findMany()
     * 
     * // Get first 10 Apartments
     * const apartments = await prisma.apartment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apartmentWithIdOnly = await prisma.apartment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApartmentFindManyArgs>(args?: SelectSubset<T, ApartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Apartment.
     * @param {ApartmentCreateArgs} args - Arguments to create a Apartment.
     * @example
     * // Create one Apartment
     * const Apartment = await prisma.apartment.create({
     *   data: {
     *     // ... data to create a Apartment
     *   }
     * })
     * 
     */
    create<T extends ApartmentCreateArgs>(args: SelectSubset<T, ApartmentCreateArgs<ExtArgs>>): Prisma__ApartmentClient<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Apartments.
     * @param {ApartmentCreateManyArgs} args - Arguments to create many Apartments.
     * @example
     * // Create many Apartments
     * const apartment = await prisma.apartment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApartmentCreateManyArgs>(args?: SelectSubset<T, ApartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Apartments and returns the data saved in the database.
     * @param {ApartmentCreateManyAndReturnArgs} args - Arguments to create many Apartments.
     * @example
     * // Create many Apartments
     * const apartment = await prisma.apartment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Apartments and only return the `id`
     * const apartmentWithIdOnly = await prisma.apartment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApartmentCreateManyAndReturnArgs>(args?: SelectSubset<T, ApartmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Apartment.
     * @param {ApartmentDeleteArgs} args - Arguments to delete one Apartment.
     * @example
     * // Delete one Apartment
     * const Apartment = await prisma.apartment.delete({
     *   where: {
     *     // ... filter to delete one Apartment
     *   }
     * })
     * 
     */
    delete<T extends ApartmentDeleteArgs>(args: SelectSubset<T, ApartmentDeleteArgs<ExtArgs>>): Prisma__ApartmentClient<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Apartment.
     * @param {ApartmentUpdateArgs} args - Arguments to update one Apartment.
     * @example
     * // Update one Apartment
     * const apartment = await prisma.apartment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApartmentUpdateArgs>(args: SelectSubset<T, ApartmentUpdateArgs<ExtArgs>>): Prisma__ApartmentClient<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Apartments.
     * @param {ApartmentDeleteManyArgs} args - Arguments to filter Apartments to delete.
     * @example
     * // Delete a few Apartments
     * const { count } = await prisma.apartment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApartmentDeleteManyArgs>(args?: SelectSubset<T, ApartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Apartments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Apartments
     * const apartment = await prisma.apartment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApartmentUpdateManyArgs>(args: SelectSubset<T, ApartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Apartments and returns the data updated in the database.
     * @param {ApartmentUpdateManyAndReturnArgs} args - Arguments to update many Apartments.
     * @example
     * // Update many Apartments
     * const apartment = await prisma.apartment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Apartments and only return the `id`
     * const apartmentWithIdOnly = await prisma.apartment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApartmentUpdateManyAndReturnArgs>(args: SelectSubset<T, ApartmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Apartment.
     * @param {ApartmentUpsertArgs} args - Arguments to update or create a Apartment.
     * @example
     * // Update or create a Apartment
     * const apartment = await prisma.apartment.upsert({
     *   create: {
     *     // ... data to create a Apartment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Apartment we want to update
     *   }
     * })
     */
    upsert<T extends ApartmentUpsertArgs>(args: SelectSubset<T, ApartmentUpsertArgs<ExtArgs>>): Prisma__ApartmentClient<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Apartments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentCountArgs} args - Arguments to filter Apartments to count.
     * @example
     * // Count the number of Apartments
     * const count = await prisma.apartment.count({
     *   where: {
     *     // ... the filter for the Apartments we want to count
     *   }
     * })
    **/
    count<T extends ApartmentCountArgs>(
      args?: Subset<T, ApartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Apartment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApartmentAggregateArgs>(args: Subset<T, ApartmentAggregateArgs>): Prisma.PrismaPromise<GetApartmentAggregateType<T>>

    /**
     * Group by Apartment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApartmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApartmentGroupByArgs['orderBy'] }
        : { orderBy?: ApartmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Apartment model
   */
  readonly fields: ApartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Apartment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pictures<T extends Apartment$picturesArgs<ExtArgs> = {}>(args?: Subset<T, Apartment$picturesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PicturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favorites<T extends Apartment$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, Apartment$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    viewedBy<T extends Apartment$viewedByArgs<ExtArgs> = {}>(args?: Subset<T, Apartment$viewedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewedApartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    swipes<T extends Apartment$swipesArgs<ExtArgs> = {}>(args?: Subset<T, Apartment$swipesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SwipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matches<T extends Apartment$matchesArgs<ExtArgs> = {}>(args?: Subset<T, Apartment$matchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    requests<T extends Apartment$requestsArgs<ExtArgs> = {}>(args?: Subset<T, Apartment$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Apartment model
   */
  interface ApartmentFieldRefs {
    readonly id: FieldRef<"Apartment", 'String'>
    readonly title: FieldRef<"Apartment", 'String'>
    readonly description: FieldRef<"Apartment", 'String'>
    readonly address: FieldRef<"Apartment", 'String'>
    readonly region: FieldRef<"Apartment", 'String'>
    readonly city: FieldRef<"Apartment", 'String'>
    readonly postal_code: FieldRef<"Apartment", 'String'>
    readonly country: FieldRef<"Apartment", 'String'>
    readonly latitude: FieldRef<"Apartment", 'Float'>
    readonly longitude: FieldRef<"Apartment", 'Float'>
    readonly property_type: FieldRef<"Apartment", 'PropertyType'>
    readonly listing_type: FieldRef<"Apartment", 'ListingType'>
    readonly price: FieldRef<"Apartment", 'Float'>
    readonly surface: FieldRef<"Apartment", 'Float'>
    readonly rooms: FieldRef<"Apartment", 'Int'>
    readonly tags: FieldRef<"Apartment", 'String[]'>
    readonly availability: FieldRef<"Apartment", 'Boolean'>
    readonly owner_id: FieldRef<"Apartment", 'String'>
    readonly created_at: FieldRef<"Apartment", 'DateTime'>
    readonly updated_at: FieldRef<"Apartment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Apartment findUnique
   */
  export type ApartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apartment
     */
    select?: ApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apartment
     */
    omit?: ApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentInclude<ExtArgs> | null
    /**
     * Filter, which Apartment to fetch.
     */
    where: ApartmentWhereUniqueInput
  }

  /**
   * Apartment findUniqueOrThrow
   */
  export type ApartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apartment
     */
    select?: ApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apartment
     */
    omit?: ApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentInclude<ExtArgs> | null
    /**
     * Filter, which Apartment to fetch.
     */
    where: ApartmentWhereUniqueInput
  }

  /**
   * Apartment findFirst
   */
  export type ApartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apartment
     */
    select?: ApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apartment
     */
    omit?: ApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentInclude<ExtArgs> | null
    /**
     * Filter, which Apartment to fetch.
     */
    where?: ApartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apartments to fetch.
     */
    orderBy?: ApartmentOrderByWithRelationInput | ApartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Apartments.
     */
    cursor?: ApartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apartments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Apartments.
     */
    distinct?: ApartmentScalarFieldEnum | ApartmentScalarFieldEnum[]
  }

  /**
   * Apartment findFirstOrThrow
   */
  export type ApartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apartment
     */
    select?: ApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apartment
     */
    omit?: ApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentInclude<ExtArgs> | null
    /**
     * Filter, which Apartment to fetch.
     */
    where?: ApartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apartments to fetch.
     */
    orderBy?: ApartmentOrderByWithRelationInput | ApartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Apartments.
     */
    cursor?: ApartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apartments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Apartments.
     */
    distinct?: ApartmentScalarFieldEnum | ApartmentScalarFieldEnum[]
  }

  /**
   * Apartment findMany
   */
  export type ApartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apartment
     */
    select?: ApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apartment
     */
    omit?: ApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentInclude<ExtArgs> | null
    /**
     * Filter, which Apartments to fetch.
     */
    where?: ApartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apartments to fetch.
     */
    orderBy?: ApartmentOrderByWithRelationInput | ApartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Apartments.
     */
    cursor?: ApartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apartments.
     */
    skip?: number
    distinct?: ApartmentScalarFieldEnum | ApartmentScalarFieldEnum[]
  }

  /**
   * Apartment create
   */
  export type ApartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apartment
     */
    select?: ApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apartment
     */
    omit?: ApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Apartment.
     */
    data: XOR<ApartmentCreateInput, ApartmentUncheckedCreateInput>
  }

  /**
   * Apartment createMany
   */
  export type ApartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Apartments.
     */
    data: ApartmentCreateManyInput | ApartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Apartment createManyAndReturn
   */
  export type ApartmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apartment
     */
    select?: ApartmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Apartment
     */
    omit?: ApartmentOmit<ExtArgs> | null
    /**
     * The data used to create many Apartments.
     */
    data: ApartmentCreateManyInput | ApartmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Apartment update
   */
  export type ApartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apartment
     */
    select?: ApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apartment
     */
    omit?: ApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Apartment.
     */
    data: XOR<ApartmentUpdateInput, ApartmentUncheckedUpdateInput>
    /**
     * Choose, which Apartment to update.
     */
    where: ApartmentWhereUniqueInput
  }

  /**
   * Apartment updateMany
   */
  export type ApartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Apartments.
     */
    data: XOR<ApartmentUpdateManyMutationInput, ApartmentUncheckedUpdateManyInput>
    /**
     * Filter which Apartments to update
     */
    where?: ApartmentWhereInput
    /**
     * Limit how many Apartments to update.
     */
    limit?: number
  }

  /**
   * Apartment updateManyAndReturn
   */
  export type ApartmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apartment
     */
    select?: ApartmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Apartment
     */
    omit?: ApartmentOmit<ExtArgs> | null
    /**
     * The data used to update Apartments.
     */
    data: XOR<ApartmentUpdateManyMutationInput, ApartmentUncheckedUpdateManyInput>
    /**
     * Filter which Apartments to update
     */
    where?: ApartmentWhereInput
    /**
     * Limit how many Apartments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Apartment upsert
   */
  export type ApartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apartment
     */
    select?: ApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apartment
     */
    omit?: ApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Apartment to update in case it exists.
     */
    where: ApartmentWhereUniqueInput
    /**
     * In case the Apartment found by the `where` argument doesn't exist, create a new Apartment with this data.
     */
    create: XOR<ApartmentCreateInput, ApartmentUncheckedCreateInput>
    /**
     * In case the Apartment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApartmentUpdateInput, ApartmentUncheckedUpdateInput>
  }

  /**
   * Apartment delete
   */
  export type ApartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apartment
     */
    select?: ApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apartment
     */
    omit?: ApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentInclude<ExtArgs> | null
    /**
     * Filter which Apartment to delete.
     */
    where: ApartmentWhereUniqueInput
  }

  /**
   * Apartment deleteMany
   */
  export type ApartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Apartments to delete
     */
    where?: ApartmentWhereInput
    /**
     * Limit how many Apartments to delete.
     */
    limit?: number
  }

  /**
   * Apartment.pictures
   */
  export type Apartment$picturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Picture
     */
    select?: PictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Picture
     */
    omit?: PictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PictureInclude<ExtArgs> | null
    where?: PictureWhereInput
    orderBy?: PictureOrderByWithRelationInput | PictureOrderByWithRelationInput[]
    cursor?: PictureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PictureScalarFieldEnum | PictureScalarFieldEnum[]
  }

  /**
   * Apartment.favorites
   */
  export type Apartment$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    cursor?: FavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Apartment.viewedBy
   */
  export type Apartment$viewedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewedApartment
     */
    select?: ViewedApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewedApartment
     */
    omit?: ViewedApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewedApartmentInclude<ExtArgs> | null
    where?: ViewedApartmentWhereInput
    orderBy?: ViewedApartmentOrderByWithRelationInput | ViewedApartmentOrderByWithRelationInput[]
    cursor?: ViewedApartmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewedApartmentScalarFieldEnum | ViewedApartmentScalarFieldEnum[]
  }

  /**
   * Apartment.swipes
   */
  export type Apartment$swipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Swipe
     */
    select?: SwipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Swipe
     */
    omit?: SwipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeInclude<ExtArgs> | null
    where?: SwipeWhereInput
    orderBy?: SwipeOrderByWithRelationInput | SwipeOrderByWithRelationInput[]
    cursor?: SwipeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SwipeScalarFieldEnum | SwipeScalarFieldEnum[]
  }

  /**
   * Apartment.matches
   */
  export type Apartment$matchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Apartment.requests
   */
  export type Apartment$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    where?: RequestWhereInput
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    cursor?: RequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * Apartment without action
   */
  export type ApartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Apartment
     */
    select?: ApartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Apartment
     */
    omit?: ApartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApartmentInclude<ExtArgs> | null
  }


  /**
   * Model Request
   */

  export type AggregateRequest = {
    _count: RequestCountAggregateOutputType | null
    _min: RequestMinAggregateOutputType | null
    _max: RequestMaxAggregateOutputType | null
  }

  export type RequestMinAggregateOutputType = {
    id: string | null
    apartment_id: string | null
    user_id: string | null
    status: $Enums.RequestStatus | null
    message: string | null
    visit_date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RequestMaxAggregateOutputType = {
    id: string | null
    apartment_id: string | null
    user_id: string | null
    status: $Enums.RequestStatus | null
    message: string | null
    visit_date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RequestCountAggregateOutputType = {
    id: number
    apartment_id: number
    user_id: number
    status: number
    message: number
    visit_date: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type RequestMinAggregateInputType = {
    id?: true
    apartment_id?: true
    user_id?: true
    status?: true
    message?: true
    visit_date?: true
    created_at?: true
    updated_at?: true
  }

  export type RequestMaxAggregateInputType = {
    id?: true
    apartment_id?: true
    user_id?: true
    status?: true
    message?: true
    visit_date?: true
    created_at?: true
    updated_at?: true
  }

  export type RequestCountAggregateInputType = {
    id?: true
    apartment_id?: true
    user_id?: true
    status?: true
    message?: true
    visit_date?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type RequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Request to aggregate.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Requests
    **/
    _count?: true | RequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequestMaxAggregateInputType
  }

  export type GetRequestAggregateType<T extends RequestAggregateArgs> = {
        [P in keyof T & keyof AggregateRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequest[P]>
      : GetScalarType<T[P], AggregateRequest[P]>
  }




  export type RequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestWhereInput
    orderBy?: RequestOrderByWithAggregationInput | RequestOrderByWithAggregationInput[]
    by: RequestScalarFieldEnum[] | RequestScalarFieldEnum
    having?: RequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequestCountAggregateInputType | true
    _min?: RequestMinAggregateInputType
    _max?: RequestMaxAggregateInputType
  }

  export type RequestGroupByOutputType = {
    id: string
    apartment_id: string
    user_id: string
    status: $Enums.RequestStatus
    message: string | null
    visit_date: Date | null
    created_at: Date
    updated_at: Date
    _count: RequestCountAggregateOutputType | null
    _min: RequestMinAggregateOutputType | null
    _max: RequestMaxAggregateOutputType | null
  }

  type GetRequestGroupByPayload<T extends RequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequestGroupByOutputType[P]>
            : GetScalarType<T[P], RequestGroupByOutputType[P]>
        }
      >
    >


  export type RequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apartment_id?: boolean
    user_id?: boolean
    status?: boolean
    message?: boolean
    visit_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    apartment?: boolean | ApartmentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    documents?: boolean | Request$documentsArgs<ExtArgs>
    _count?: boolean | RequestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["request"]>

  export type RequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apartment_id?: boolean
    user_id?: boolean
    status?: boolean
    message?: boolean
    visit_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    apartment?: boolean | ApartmentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["request"]>

  export type RequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apartment_id?: boolean
    user_id?: boolean
    status?: boolean
    message?: boolean
    visit_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    apartment?: boolean | ApartmentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["request"]>

  export type RequestSelectScalar = {
    id?: boolean
    apartment_id?: boolean
    user_id?: boolean
    status?: boolean
    message?: boolean
    visit_date?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type RequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "apartment_id" | "user_id" | "status" | "message" | "visit_date" | "created_at" | "updated_at", ExtArgs["result"]["request"]>
  export type RequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apartment?: boolean | ApartmentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    documents?: boolean | Request$documentsArgs<ExtArgs>
    _count?: boolean | RequestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apartment?: boolean | ApartmentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apartment?: boolean | ApartmentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Request"
    objects: {
      apartment: Prisma.$ApartmentPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      documents: Prisma.$RequestDocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      apartment_id: string
      user_id: string
      status: $Enums.RequestStatus
      message: string | null
      visit_date: Date | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["request"]>
    composites: {}
  }

  type RequestGetPayload<S extends boolean | null | undefined | RequestDefaultArgs> = $Result.GetResult<Prisma.$RequestPayload, S>

  type RequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RequestCountAggregateInputType | true
    }

  export interface RequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Request'], meta: { name: 'Request' } }
    /**
     * Find zero or one Request that matches the filter.
     * @param {RequestFindUniqueArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RequestFindUniqueArgs>(args: SelectSubset<T, RequestFindUniqueArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Request that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RequestFindUniqueOrThrowArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RequestFindUniqueOrThrowArgs>(args: SelectSubset<T, RequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Request that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindFirstArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RequestFindFirstArgs>(args?: SelectSubset<T, RequestFindFirstArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Request that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindFirstOrThrowArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RequestFindFirstOrThrowArgs>(args?: SelectSubset<T, RequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Requests
     * const requests = await prisma.request.findMany()
     * 
     * // Get first 10 Requests
     * const requests = await prisma.request.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const requestWithIdOnly = await prisma.request.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RequestFindManyArgs>(args?: SelectSubset<T, RequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Request.
     * @param {RequestCreateArgs} args - Arguments to create a Request.
     * @example
     * // Create one Request
     * const Request = await prisma.request.create({
     *   data: {
     *     // ... data to create a Request
     *   }
     * })
     * 
     */
    create<T extends RequestCreateArgs>(args: SelectSubset<T, RequestCreateArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Requests.
     * @param {RequestCreateManyArgs} args - Arguments to create many Requests.
     * @example
     * // Create many Requests
     * const request = await prisma.request.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RequestCreateManyArgs>(args?: SelectSubset<T, RequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Requests and returns the data saved in the database.
     * @param {RequestCreateManyAndReturnArgs} args - Arguments to create many Requests.
     * @example
     * // Create many Requests
     * const request = await prisma.request.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Requests and only return the `id`
     * const requestWithIdOnly = await prisma.request.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RequestCreateManyAndReturnArgs>(args?: SelectSubset<T, RequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Request.
     * @param {RequestDeleteArgs} args - Arguments to delete one Request.
     * @example
     * // Delete one Request
     * const Request = await prisma.request.delete({
     *   where: {
     *     // ... filter to delete one Request
     *   }
     * })
     * 
     */
    delete<T extends RequestDeleteArgs>(args: SelectSubset<T, RequestDeleteArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Request.
     * @param {RequestUpdateArgs} args - Arguments to update one Request.
     * @example
     * // Update one Request
     * const request = await prisma.request.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RequestUpdateArgs>(args: SelectSubset<T, RequestUpdateArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Requests.
     * @param {RequestDeleteManyArgs} args - Arguments to filter Requests to delete.
     * @example
     * // Delete a few Requests
     * const { count } = await prisma.request.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RequestDeleteManyArgs>(args?: SelectSubset<T, RequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Requests
     * const request = await prisma.request.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RequestUpdateManyArgs>(args: SelectSubset<T, RequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Requests and returns the data updated in the database.
     * @param {RequestUpdateManyAndReturnArgs} args - Arguments to update many Requests.
     * @example
     * // Update many Requests
     * const request = await prisma.request.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Requests and only return the `id`
     * const requestWithIdOnly = await prisma.request.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RequestUpdateManyAndReturnArgs>(args: SelectSubset<T, RequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Request.
     * @param {RequestUpsertArgs} args - Arguments to update or create a Request.
     * @example
     * // Update or create a Request
     * const request = await prisma.request.upsert({
     *   create: {
     *     // ... data to create a Request
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Request we want to update
     *   }
     * })
     */
    upsert<T extends RequestUpsertArgs>(args: SelectSubset<T, RequestUpsertArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestCountArgs} args - Arguments to filter Requests to count.
     * @example
     * // Count the number of Requests
     * const count = await prisma.request.count({
     *   where: {
     *     // ... the filter for the Requests we want to count
     *   }
     * })
    **/
    count<T extends RequestCountArgs>(
      args?: Subset<T, RequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RequestAggregateArgs>(args: Subset<T, RequestAggregateArgs>): Prisma.PrismaPromise<GetRequestAggregateType<T>>

    /**
     * Group by Request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RequestGroupByArgs['orderBy'] }
        : { orderBy?: RequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Request model
   */
  readonly fields: RequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Request.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    apartment<T extends ApartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApartmentDefaultArgs<ExtArgs>>): Prisma__ApartmentClient<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    documents<T extends Request$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Request$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Request model
   */
  interface RequestFieldRefs {
    readonly id: FieldRef<"Request", 'String'>
    readonly apartment_id: FieldRef<"Request", 'String'>
    readonly user_id: FieldRef<"Request", 'String'>
    readonly status: FieldRef<"Request", 'RequestStatus'>
    readonly message: FieldRef<"Request", 'String'>
    readonly visit_date: FieldRef<"Request", 'DateTime'>
    readonly created_at: FieldRef<"Request", 'DateTime'>
    readonly updated_at: FieldRef<"Request", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Request findUnique
   */
  export type RequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request findUniqueOrThrow
   */
  export type RequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request findFirst
   */
  export type RequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Requests.
     */
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * Request findFirstOrThrow
   */
  export type RequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Requests.
     */
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * Request findMany
   */
  export type RequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Requests to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * Request create
   */
  export type RequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * The data needed to create a Request.
     */
    data: XOR<RequestCreateInput, RequestUncheckedCreateInput>
  }

  /**
   * Request createMany
   */
  export type RequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Requests.
     */
    data: RequestCreateManyInput | RequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Request createManyAndReturn
   */
  export type RequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * The data used to create many Requests.
     */
    data: RequestCreateManyInput | RequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Request update
   */
  export type RequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * The data needed to update a Request.
     */
    data: XOR<RequestUpdateInput, RequestUncheckedUpdateInput>
    /**
     * Choose, which Request to update.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request updateMany
   */
  export type RequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Requests.
     */
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyInput>
    /**
     * Filter which Requests to update
     */
    where?: RequestWhereInput
    /**
     * Limit how many Requests to update.
     */
    limit?: number
  }

  /**
   * Request updateManyAndReturn
   */
  export type RequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * The data used to update Requests.
     */
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyInput>
    /**
     * Filter which Requests to update
     */
    where?: RequestWhereInput
    /**
     * Limit how many Requests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Request upsert
   */
  export type RequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * The filter to search for the Request to update in case it exists.
     */
    where: RequestWhereUniqueInput
    /**
     * In case the Request found by the `where` argument doesn't exist, create a new Request with this data.
     */
    create: XOR<RequestCreateInput, RequestUncheckedCreateInput>
    /**
     * In case the Request was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RequestUpdateInput, RequestUncheckedUpdateInput>
  }

  /**
   * Request delete
   */
  export type RequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter which Request to delete.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request deleteMany
   */
  export type RequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Requests to delete
     */
    where?: RequestWhereInput
    /**
     * Limit how many Requests to delete.
     */
    limit?: number
  }

  /**
   * Request.documents
   */
  export type Request$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestDocument
     */
    select?: RequestDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestDocument
     */
    omit?: RequestDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestDocumentInclude<ExtArgs> | null
    where?: RequestDocumentWhereInput
    orderBy?: RequestDocumentOrderByWithRelationInput | RequestDocumentOrderByWithRelationInput[]
    cursor?: RequestDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestDocumentScalarFieldEnum | RequestDocumentScalarFieldEnum[]
  }

  /**
   * Request without action
   */
  export type RequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
  }


  /**
   * Model Swipe
   */

  export type AggregateSwipe = {
    _count: SwipeCountAggregateOutputType | null
    _min: SwipeMinAggregateOutputType | null
    _max: SwipeMaxAggregateOutputType | null
  }

  export type SwipeMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    apartment_id: string | null
    direction: $Enums.SwipeDirection | null
    created_at: Date | null
  }

  export type SwipeMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    apartment_id: string | null
    direction: $Enums.SwipeDirection | null
    created_at: Date | null
  }

  export type SwipeCountAggregateOutputType = {
    id: number
    user_id: number
    apartment_id: number
    direction: number
    created_at: number
    _all: number
  }


  export type SwipeMinAggregateInputType = {
    id?: true
    user_id?: true
    apartment_id?: true
    direction?: true
    created_at?: true
  }

  export type SwipeMaxAggregateInputType = {
    id?: true
    user_id?: true
    apartment_id?: true
    direction?: true
    created_at?: true
  }

  export type SwipeCountAggregateInputType = {
    id?: true
    user_id?: true
    apartment_id?: true
    direction?: true
    created_at?: true
    _all?: true
  }

  export type SwipeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Swipe to aggregate.
     */
    where?: SwipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Swipes to fetch.
     */
    orderBy?: SwipeOrderByWithRelationInput | SwipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SwipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Swipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Swipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Swipes
    **/
    _count?: true | SwipeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SwipeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SwipeMaxAggregateInputType
  }

  export type GetSwipeAggregateType<T extends SwipeAggregateArgs> = {
        [P in keyof T & keyof AggregateSwipe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSwipe[P]>
      : GetScalarType<T[P], AggregateSwipe[P]>
  }




  export type SwipeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SwipeWhereInput
    orderBy?: SwipeOrderByWithAggregationInput | SwipeOrderByWithAggregationInput[]
    by: SwipeScalarFieldEnum[] | SwipeScalarFieldEnum
    having?: SwipeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SwipeCountAggregateInputType | true
    _min?: SwipeMinAggregateInputType
    _max?: SwipeMaxAggregateInputType
  }

  export type SwipeGroupByOutputType = {
    id: string
    user_id: string
    apartment_id: string
    direction: $Enums.SwipeDirection
    created_at: Date
    _count: SwipeCountAggregateOutputType | null
    _min: SwipeMinAggregateOutputType | null
    _max: SwipeMaxAggregateOutputType | null
  }

  type GetSwipeGroupByPayload<T extends SwipeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SwipeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SwipeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SwipeGroupByOutputType[P]>
            : GetScalarType<T[P], SwipeGroupByOutputType[P]>
        }
      >
    >


  export type SwipeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    apartment_id?: boolean
    direction?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    apartment?: boolean | ApartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["swipe"]>

  export type SwipeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    apartment_id?: boolean
    direction?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    apartment?: boolean | ApartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["swipe"]>

  export type SwipeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    apartment_id?: boolean
    direction?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    apartment?: boolean | ApartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["swipe"]>

  export type SwipeSelectScalar = {
    id?: boolean
    user_id?: boolean
    apartment_id?: boolean
    direction?: boolean
    created_at?: boolean
  }

  export type SwipeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "apartment_id" | "direction" | "created_at", ExtArgs["result"]["swipe"]>
  export type SwipeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    apartment?: boolean | ApartmentDefaultArgs<ExtArgs>
  }
  export type SwipeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    apartment?: boolean | ApartmentDefaultArgs<ExtArgs>
  }
  export type SwipeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    apartment?: boolean | ApartmentDefaultArgs<ExtArgs>
  }

  export type $SwipePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Swipe"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      apartment: Prisma.$ApartmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      apartment_id: string
      direction: $Enums.SwipeDirection
      created_at: Date
    }, ExtArgs["result"]["swipe"]>
    composites: {}
  }

  type SwipeGetPayload<S extends boolean | null | undefined | SwipeDefaultArgs> = $Result.GetResult<Prisma.$SwipePayload, S>

  type SwipeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SwipeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SwipeCountAggregateInputType | true
    }

  export interface SwipeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Swipe'], meta: { name: 'Swipe' } }
    /**
     * Find zero or one Swipe that matches the filter.
     * @param {SwipeFindUniqueArgs} args - Arguments to find a Swipe
     * @example
     * // Get one Swipe
     * const swipe = await prisma.swipe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SwipeFindUniqueArgs>(args: SelectSubset<T, SwipeFindUniqueArgs<ExtArgs>>): Prisma__SwipeClient<$Result.GetResult<Prisma.$SwipePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Swipe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SwipeFindUniqueOrThrowArgs} args - Arguments to find a Swipe
     * @example
     * // Get one Swipe
     * const swipe = await prisma.swipe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SwipeFindUniqueOrThrowArgs>(args: SelectSubset<T, SwipeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SwipeClient<$Result.GetResult<Prisma.$SwipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Swipe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwipeFindFirstArgs} args - Arguments to find a Swipe
     * @example
     * // Get one Swipe
     * const swipe = await prisma.swipe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SwipeFindFirstArgs>(args?: SelectSubset<T, SwipeFindFirstArgs<ExtArgs>>): Prisma__SwipeClient<$Result.GetResult<Prisma.$SwipePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Swipe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwipeFindFirstOrThrowArgs} args - Arguments to find a Swipe
     * @example
     * // Get one Swipe
     * const swipe = await prisma.swipe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SwipeFindFirstOrThrowArgs>(args?: SelectSubset<T, SwipeFindFirstOrThrowArgs<ExtArgs>>): Prisma__SwipeClient<$Result.GetResult<Prisma.$SwipePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Swipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwipeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Swipes
     * const swipes = await prisma.swipe.findMany()
     * 
     * // Get first 10 Swipes
     * const swipes = await prisma.swipe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const swipeWithIdOnly = await prisma.swipe.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SwipeFindManyArgs>(args?: SelectSubset<T, SwipeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SwipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Swipe.
     * @param {SwipeCreateArgs} args - Arguments to create a Swipe.
     * @example
     * // Create one Swipe
     * const Swipe = await prisma.swipe.create({
     *   data: {
     *     // ... data to create a Swipe
     *   }
     * })
     * 
     */
    create<T extends SwipeCreateArgs>(args: SelectSubset<T, SwipeCreateArgs<ExtArgs>>): Prisma__SwipeClient<$Result.GetResult<Prisma.$SwipePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Swipes.
     * @param {SwipeCreateManyArgs} args - Arguments to create many Swipes.
     * @example
     * // Create many Swipes
     * const swipe = await prisma.swipe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SwipeCreateManyArgs>(args?: SelectSubset<T, SwipeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Swipes and returns the data saved in the database.
     * @param {SwipeCreateManyAndReturnArgs} args - Arguments to create many Swipes.
     * @example
     * // Create many Swipes
     * const swipe = await prisma.swipe.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Swipes and only return the `id`
     * const swipeWithIdOnly = await prisma.swipe.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SwipeCreateManyAndReturnArgs>(args?: SelectSubset<T, SwipeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SwipePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Swipe.
     * @param {SwipeDeleteArgs} args - Arguments to delete one Swipe.
     * @example
     * // Delete one Swipe
     * const Swipe = await prisma.swipe.delete({
     *   where: {
     *     // ... filter to delete one Swipe
     *   }
     * })
     * 
     */
    delete<T extends SwipeDeleteArgs>(args: SelectSubset<T, SwipeDeleteArgs<ExtArgs>>): Prisma__SwipeClient<$Result.GetResult<Prisma.$SwipePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Swipe.
     * @param {SwipeUpdateArgs} args - Arguments to update one Swipe.
     * @example
     * // Update one Swipe
     * const swipe = await prisma.swipe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SwipeUpdateArgs>(args: SelectSubset<T, SwipeUpdateArgs<ExtArgs>>): Prisma__SwipeClient<$Result.GetResult<Prisma.$SwipePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Swipes.
     * @param {SwipeDeleteManyArgs} args - Arguments to filter Swipes to delete.
     * @example
     * // Delete a few Swipes
     * const { count } = await prisma.swipe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SwipeDeleteManyArgs>(args?: SelectSubset<T, SwipeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Swipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwipeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Swipes
     * const swipe = await prisma.swipe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SwipeUpdateManyArgs>(args: SelectSubset<T, SwipeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Swipes and returns the data updated in the database.
     * @param {SwipeUpdateManyAndReturnArgs} args - Arguments to update many Swipes.
     * @example
     * // Update many Swipes
     * const swipe = await prisma.swipe.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Swipes and only return the `id`
     * const swipeWithIdOnly = await prisma.swipe.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SwipeUpdateManyAndReturnArgs>(args: SelectSubset<T, SwipeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SwipePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Swipe.
     * @param {SwipeUpsertArgs} args - Arguments to update or create a Swipe.
     * @example
     * // Update or create a Swipe
     * const swipe = await prisma.swipe.upsert({
     *   create: {
     *     // ... data to create a Swipe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Swipe we want to update
     *   }
     * })
     */
    upsert<T extends SwipeUpsertArgs>(args: SelectSubset<T, SwipeUpsertArgs<ExtArgs>>): Prisma__SwipeClient<$Result.GetResult<Prisma.$SwipePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Swipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwipeCountArgs} args - Arguments to filter Swipes to count.
     * @example
     * // Count the number of Swipes
     * const count = await prisma.swipe.count({
     *   where: {
     *     // ... the filter for the Swipes we want to count
     *   }
     * })
    **/
    count<T extends SwipeCountArgs>(
      args?: Subset<T, SwipeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SwipeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Swipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwipeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SwipeAggregateArgs>(args: Subset<T, SwipeAggregateArgs>): Prisma.PrismaPromise<GetSwipeAggregateType<T>>

    /**
     * Group by Swipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwipeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SwipeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SwipeGroupByArgs['orderBy'] }
        : { orderBy?: SwipeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SwipeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSwipeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Swipe model
   */
  readonly fields: SwipeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Swipe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SwipeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    apartment<T extends ApartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApartmentDefaultArgs<ExtArgs>>): Prisma__ApartmentClient<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Swipe model
   */
  interface SwipeFieldRefs {
    readonly id: FieldRef<"Swipe", 'String'>
    readonly user_id: FieldRef<"Swipe", 'String'>
    readonly apartment_id: FieldRef<"Swipe", 'String'>
    readonly direction: FieldRef<"Swipe", 'SwipeDirection'>
    readonly created_at: FieldRef<"Swipe", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Swipe findUnique
   */
  export type SwipeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Swipe
     */
    select?: SwipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Swipe
     */
    omit?: SwipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeInclude<ExtArgs> | null
    /**
     * Filter, which Swipe to fetch.
     */
    where: SwipeWhereUniqueInput
  }

  /**
   * Swipe findUniqueOrThrow
   */
  export type SwipeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Swipe
     */
    select?: SwipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Swipe
     */
    omit?: SwipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeInclude<ExtArgs> | null
    /**
     * Filter, which Swipe to fetch.
     */
    where: SwipeWhereUniqueInput
  }

  /**
   * Swipe findFirst
   */
  export type SwipeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Swipe
     */
    select?: SwipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Swipe
     */
    omit?: SwipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeInclude<ExtArgs> | null
    /**
     * Filter, which Swipe to fetch.
     */
    where?: SwipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Swipes to fetch.
     */
    orderBy?: SwipeOrderByWithRelationInput | SwipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Swipes.
     */
    cursor?: SwipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Swipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Swipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Swipes.
     */
    distinct?: SwipeScalarFieldEnum | SwipeScalarFieldEnum[]
  }

  /**
   * Swipe findFirstOrThrow
   */
  export type SwipeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Swipe
     */
    select?: SwipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Swipe
     */
    omit?: SwipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeInclude<ExtArgs> | null
    /**
     * Filter, which Swipe to fetch.
     */
    where?: SwipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Swipes to fetch.
     */
    orderBy?: SwipeOrderByWithRelationInput | SwipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Swipes.
     */
    cursor?: SwipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Swipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Swipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Swipes.
     */
    distinct?: SwipeScalarFieldEnum | SwipeScalarFieldEnum[]
  }

  /**
   * Swipe findMany
   */
  export type SwipeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Swipe
     */
    select?: SwipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Swipe
     */
    omit?: SwipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeInclude<ExtArgs> | null
    /**
     * Filter, which Swipes to fetch.
     */
    where?: SwipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Swipes to fetch.
     */
    orderBy?: SwipeOrderByWithRelationInput | SwipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Swipes.
     */
    cursor?: SwipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Swipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Swipes.
     */
    skip?: number
    distinct?: SwipeScalarFieldEnum | SwipeScalarFieldEnum[]
  }

  /**
   * Swipe create
   */
  export type SwipeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Swipe
     */
    select?: SwipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Swipe
     */
    omit?: SwipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeInclude<ExtArgs> | null
    /**
     * The data needed to create a Swipe.
     */
    data: XOR<SwipeCreateInput, SwipeUncheckedCreateInput>
  }

  /**
   * Swipe createMany
   */
  export type SwipeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Swipes.
     */
    data: SwipeCreateManyInput | SwipeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Swipe createManyAndReturn
   */
  export type SwipeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Swipe
     */
    select?: SwipeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Swipe
     */
    omit?: SwipeOmit<ExtArgs> | null
    /**
     * The data used to create many Swipes.
     */
    data: SwipeCreateManyInput | SwipeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Swipe update
   */
  export type SwipeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Swipe
     */
    select?: SwipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Swipe
     */
    omit?: SwipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeInclude<ExtArgs> | null
    /**
     * The data needed to update a Swipe.
     */
    data: XOR<SwipeUpdateInput, SwipeUncheckedUpdateInput>
    /**
     * Choose, which Swipe to update.
     */
    where: SwipeWhereUniqueInput
  }

  /**
   * Swipe updateMany
   */
  export type SwipeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Swipes.
     */
    data: XOR<SwipeUpdateManyMutationInput, SwipeUncheckedUpdateManyInput>
    /**
     * Filter which Swipes to update
     */
    where?: SwipeWhereInput
    /**
     * Limit how many Swipes to update.
     */
    limit?: number
  }

  /**
   * Swipe updateManyAndReturn
   */
  export type SwipeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Swipe
     */
    select?: SwipeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Swipe
     */
    omit?: SwipeOmit<ExtArgs> | null
    /**
     * The data used to update Swipes.
     */
    data: XOR<SwipeUpdateManyMutationInput, SwipeUncheckedUpdateManyInput>
    /**
     * Filter which Swipes to update
     */
    where?: SwipeWhereInput
    /**
     * Limit how many Swipes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Swipe upsert
   */
  export type SwipeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Swipe
     */
    select?: SwipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Swipe
     */
    omit?: SwipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeInclude<ExtArgs> | null
    /**
     * The filter to search for the Swipe to update in case it exists.
     */
    where: SwipeWhereUniqueInput
    /**
     * In case the Swipe found by the `where` argument doesn't exist, create a new Swipe with this data.
     */
    create: XOR<SwipeCreateInput, SwipeUncheckedCreateInput>
    /**
     * In case the Swipe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SwipeUpdateInput, SwipeUncheckedUpdateInput>
  }

  /**
   * Swipe delete
   */
  export type SwipeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Swipe
     */
    select?: SwipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Swipe
     */
    omit?: SwipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeInclude<ExtArgs> | null
    /**
     * Filter which Swipe to delete.
     */
    where: SwipeWhereUniqueInput
  }

  /**
   * Swipe deleteMany
   */
  export type SwipeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Swipes to delete
     */
    where?: SwipeWhereInput
    /**
     * Limit how many Swipes to delete.
     */
    limit?: number
  }

  /**
   * Swipe without action
   */
  export type SwipeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Swipe
     */
    select?: SwipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Swipe
     */
    omit?: SwipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeInclude<ExtArgs> | null
  }


  /**
   * Model Match
   */

  export type AggregateMatch = {
    _count: MatchCountAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  export type MatchMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    apartment_id: string | null
    created_at: Date | null
  }

  export type MatchMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    apartment_id: string | null
    created_at: Date | null
  }

  export type MatchCountAggregateOutputType = {
    id: number
    user_id: number
    apartment_id: number
    created_at: number
    _all: number
  }


  export type MatchMinAggregateInputType = {
    id?: true
    user_id?: true
    apartment_id?: true
    created_at?: true
  }

  export type MatchMaxAggregateInputType = {
    id?: true
    user_id?: true
    apartment_id?: true
    created_at?: true
  }

  export type MatchCountAggregateInputType = {
    id?: true
    user_id?: true
    apartment_id?: true
    created_at?: true
    _all?: true
  }

  export type MatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Match to aggregate.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Matches
    **/
    _count?: true | MatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchMaxAggregateInputType
  }

  export type GetMatchAggregateType<T extends MatchAggregateArgs> = {
        [P in keyof T & keyof AggregateMatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatch[P]>
      : GetScalarType<T[P], AggregateMatch[P]>
  }




  export type MatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithAggregationInput | MatchOrderByWithAggregationInput[]
    by: MatchScalarFieldEnum[] | MatchScalarFieldEnum
    having?: MatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchCountAggregateInputType | true
    _min?: MatchMinAggregateInputType
    _max?: MatchMaxAggregateInputType
  }

  export type MatchGroupByOutputType = {
    id: string
    user_id: string
    apartment_id: string
    created_at: Date
    _count: MatchCountAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  type GetMatchGroupByPayload<T extends MatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchGroupByOutputType[P]>
            : GetScalarType<T[P], MatchGroupByOutputType[P]>
        }
      >
    >


  export type MatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    apartment_id?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    apartment?: boolean | ApartmentDefaultArgs<ExtArgs>
    messages?: boolean | Match$messagesArgs<ExtArgs>
    _count?: boolean | MatchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    apartment_id?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    apartment?: boolean | ApartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    apartment_id?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    apartment?: boolean | ApartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectScalar = {
    id?: boolean
    user_id?: boolean
    apartment_id?: boolean
    created_at?: boolean
  }

  export type MatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "apartment_id" | "created_at", ExtArgs["result"]["match"]>
  export type MatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    apartment?: boolean | ApartmentDefaultArgs<ExtArgs>
    messages?: boolean | Match$messagesArgs<ExtArgs>
    _count?: boolean | MatchCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MatchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    apartment?: boolean | ApartmentDefaultArgs<ExtArgs>
  }
  export type MatchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    apartment?: boolean | ApartmentDefaultArgs<ExtArgs>
  }

  export type $MatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Match"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      apartment: Prisma.$ApartmentPayload<ExtArgs>
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      apartment_id: string
      created_at: Date
    }, ExtArgs["result"]["match"]>
    composites: {}
  }

  type MatchGetPayload<S extends boolean | null | undefined | MatchDefaultArgs> = $Result.GetResult<Prisma.$MatchPayload, S>

  type MatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchCountAggregateInputType | true
    }

  export interface MatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Match'], meta: { name: 'Match' } }
    /**
     * Find zero or one Match that matches the filter.
     * @param {MatchFindUniqueArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchFindUniqueArgs>(args: SelectSubset<T, MatchFindUniqueArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Match that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchFindUniqueOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchFindFirstArgs>(args?: SelectSubset<T, MatchFindFirstArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Matches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matches
     * const matches = await prisma.match.findMany()
     * 
     * // Get first 10 Matches
     * const matches = await prisma.match.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchWithIdOnly = await prisma.match.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchFindManyArgs>(args?: SelectSubset<T, MatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Match.
     * @param {MatchCreateArgs} args - Arguments to create a Match.
     * @example
     * // Create one Match
     * const Match = await prisma.match.create({
     *   data: {
     *     // ... data to create a Match
     *   }
     * })
     * 
     */
    create<T extends MatchCreateArgs>(args: SelectSubset<T, MatchCreateArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Matches.
     * @param {MatchCreateManyArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchCreateManyArgs>(args?: SelectSubset<T, MatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Matches and returns the data saved in the database.
     * @param {MatchCreateManyAndReturnArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Matches and only return the `id`
     * const matchWithIdOnly = await prisma.match.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Match.
     * @param {MatchDeleteArgs} args - Arguments to delete one Match.
     * @example
     * // Delete one Match
     * const Match = await prisma.match.delete({
     *   where: {
     *     // ... filter to delete one Match
     *   }
     * })
     * 
     */
    delete<T extends MatchDeleteArgs>(args: SelectSubset<T, MatchDeleteArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Match.
     * @param {MatchUpdateArgs} args - Arguments to update one Match.
     * @example
     * // Update one Match
     * const match = await prisma.match.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchUpdateArgs>(args: SelectSubset<T, MatchUpdateArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Matches.
     * @param {MatchDeleteManyArgs} args - Arguments to filter Matches to delete.
     * @example
     * // Delete a few Matches
     * const { count } = await prisma.match.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchDeleteManyArgs>(args?: SelectSubset<T, MatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchUpdateManyArgs>(args: SelectSubset<T, MatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches and returns the data updated in the database.
     * @param {MatchUpdateManyAndReturnArgs} args - Arguments to update many Matches.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Matches and only return the `id`
     * const matchWithIdOnly = await prisma.match.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MatchUpdateManyAndReturnArgs>(args: SelectSubset<T, MatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Match.
     * @param {MatchUpsertArgs} args - Arguments to update or create a Match.
     * @example
     * // Update or create a Match
     * const match = await prisma.match.upsert({
     *   create: {
     *     // ... data to create a Match
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Match we want to update
     *   }
     * })
     */
    upsert<T extends MatchUpsertArgs>(args: SelectSubset<T, MatchUpsertArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchCountArgs} args - Arguments to filter Matches to count.
     * @example
     * // Count the number of Matches
     * const count = await prisma.match.count({
     *   where: {
     *     // ... the filter for the Matches we want to count
     *   }
     * })
    **/
    count<T extends MatchCountArgs>(
      args?: Subset<T, MatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MatchAggregateArgs>(args: Subset<T, MatchAggregateArgs>): Prisma.PrismaPromise<GetMatchAggregateType<T>>

    /**
     * Group by Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchGroupByArgs['orderBy'] }
        : { orderBy?: MatchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Match model
   */
  readonly fields: MatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Match.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    apartment<T extends ApartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApartmentDefaultArgs<ExtArgs>>): Prisma__ApartmentClient<$Result.GetResult<Prisma.$ApartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    messages<T extends Match$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Match$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Match model
   */
  interface MatchFieldRefs {
    readonly id: FieldRef<"Match", 'String'>
    readonly user_id: FieldRef<"Match", 'String'>
    readonly apartment_id: FieldRef<"Match", 'String'>
    readonly created_at: FieldRef<"Match", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Match findUnique
   */
  export type MatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match findUniqueOrThrow
   */
  export type MatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match findFirst
   */
  export type MatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match findFirstOrThrow
   */
  export type MatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match findMany
   */
  export type MatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Matches to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match create
   */
  export type MatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The data needed to create a Match.
     */
    data: XOR<MatchCreateInput, MatchUncheckedCreateInput>
  }

  /**
   * Match createMany
   */
  export type MatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Match createManyAndReturn
   */
  export type MatchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Match update
   */
  export type MatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The data needed to update a Match.
     */
    data: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
    /**
     * Choose, which Match to update.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match updateMany
   */
  export type MatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to update.
     */
    limit?: number
  }

  /**
   * Match updateManyAndReturn
   */
  export type MatchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Match upsert
   */
  export type MatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The filter to search for the Match to update in case it exists.
     */
    where: MatchWhereUniqueInput
    /**
     * In case the Match found by the `where` argument doesn't exist, create a new Match with this data.
     */
    create: XOR<MatchCreateInput, MatchUncheckedCreateInput>
    /**
     * In case the Match was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
  }

  /**
   * Match delete
   */
  export type MatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter which Match to delete.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match deleteMany
   */
  export type MatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matches to delete
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to delete.
     */
    limit?: number
  }

  /**
   * Match.messages
   */
  export type Match$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Match without action
   */
  export type MatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    content: string | null
    match_id: string | null
    sender_id: string | null
    created_at: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    content: string | null
    match_id: string | null
    sender_id: string | null
    created_at: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    content: number
    match_id: number
    sender_id: number
    created_at: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    content?: true
    match_id?: true
    sender_id?: true
    created_at?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    content?: true
    match_id?: true
    sender_id?: true
    created_at?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    content?: true
    match_id?: true
    sender_id?: true
    created_at?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    content: string
    match_id: string
    sender_id: string
    created_at: Date
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    match_id?: boolean
    sender_id?: boolean
    created_at?: boolean
    match?: boolean | MatchDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    match_id?: boolean
    sender_id?: boolean
    created_at?: boolean
    match?: boolean | MatchDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    match_id?: boolean
    sender_id?: boolean
    created_at?: boolean
    match?: boolean | MatchDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    content?: boolean
    match_id?: boolean
    sender_id?: boolean
    created_at?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "match_id" | "sender_id" | "created_at", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | MatchDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | MatchDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | MatchDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      match: Prisma.$MatchPayload<ExtArgs>
      sender: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      match_id: string
      sender_id: string
      created_at: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    match<T extends MatchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MatchDefaultArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly content: FieldRef<"Message", 'String'>
    readonly match_id: FieldRef<"Message", 'String'>
    readonly sender_id: FieldRef<"Message", 'String'>
    readonly created_at: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model RequestDocument
   */

  export type AggregateRequestDocument = {
    _count: RequestDocumentCountAggregateOutputType | null
    _min: RequestDocumentMinAggregateOutputType | null
    _max: RequestDocumentMaxAggregateOutputType | null
  }

  export type RequestDocumentMinAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    uploaded_at: Date | null
    request_id: string | null
  }

  export type RequestDocumentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    uploaded_at: Date | null
    request_id: string | null
  }

  export type RequestDocumentCountAggregateOutputType = {
    id: number
    name: number
    url: number
    uploaded_at: number
    request_id: number
    _all: number
  }


  export type RequestDocumentMinAggregateInputType = {
    id?: true
    name?: true
    url?: true
    uploaded_at?: true
    request_id?: true
  }

  export type RequestDocumentMaxAggregateInputType = {
    id?: true
    name?: true
    url?: true
    uploaded_at?: true
    request_id?: true
  }

  export type RequestDocumentCountAggregateInputType = {
    id?: true
    name?: true
    url?: true
    uploaded_at?: true
    request_id?: true
    _all?: true
  }

  export type RequestDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RequestDocument to aggregate.
     */
    where?: RequestDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestDocuments to fetch.
     */
    orderBy?: RequestDocumentOrderByWithRelationInput | RequestDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RequestDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RequestDocuments
    **/
    _count?: true | RequestDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequestDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequestDocumentMaxAggregateInputType
  }

  export type GetRequestDocumentAggregateType<T extends RequestDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateRequestDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequestDocument[P]>
      : GetScalarType<T[P], AggregateRequestDocument[P]>
  }




  export type RequestDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestDocumentWhereInput
    orderBy?: RequestDocumentOrderByWithAggregationInput | RequestDocumentOrderByWithAggregationInput[]
    by: RequestDocumentScalarFieldEnum[] | RequestDocumentScalarFieldEnum
    having?: RequestDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequestDocumentCountAggregateInputType | true
    _min?: RequestDocumentMinAggregateInputType
    _max?: RequestDocumentMaxAggregateInputType
  }

  export type RequestDocumentGroupByOutputType = {
    id: string
    name: string
    url: string
    uploaded_at: Date
    request_id: string
    _count: RequestDocumentCountAggregateOutputType | null
    _min: RequestDocumentMinAggregateOutputType | null
    _max: RequestDocumentMaxAggregateOutputType | null
  }

  type GetRequestDocumentGroupByPayload<T extends RequestDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RequestDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequestDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequestDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], RequestDocumentGroupByOutputType[P]>
        }
      >
    >


  export type RequestDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    uploaded_at?: boolean
    request_id?: boolean
    request?: boolean | RequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["requestDocument"]>

  export type RequestDocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    uploaded_at?: boolean
    request_id?: boolean
    request?: boolean | RequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["requestDocument"]>

  export type RequestDocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    uploaded_at?: boolean
    request_id?: boolean
    request?: boolean | RequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["requestDocument"]>

  export type RequestDocumentSelectScalar = {
    id?: boolean
    name?: boolean
    url?: boolean
    uploaded_at?: boolean
    request_id?: boolean
  }

  export type RequestDocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "url" | "uploaded_at" | "request_id", ExtArgs["result"]["requestDocument"]>
  export type RequestDocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | RequestDefaultArgs<ExtArgs>
  }
  export type RequestDocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | RequestDefaultArgs<ExtArgs>
  }
  export type RequestDocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | RequestDefaultArgs<ExtArgs>
  }

  export type $RequestDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RequestDocument"
    objects: {
      request: Prisma.$RequestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      url: string
      uploaded_at: Date
      request_id: string
    }, ExtArgs["result"]["requestDocument"]>
    composites: {}
  }

  type RequestDocumentGetPayload<S extends boolean | null | undefined | RequestDocumentDefaultArgs> = $Result.GetResult<Prisma.$RequestDocumentPayload, S>

  type RequestDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RequestDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RequestDocumentCountAggregateInputType | true
    }

  export interface RequestDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RequestDocument'], meta: { name: 'RequestDocument' } }
    /**
     * Find zero or one RequestDocument that matches the filter.
     * @param {RequestDocumentFindUniqueArgs} args - Arguments to find a RequestDocument
     * @example
     * // Get one RequestDocument
     * const requestDocument = await prisma.requestDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RequestDocumentFindUniqueArgs>(args: SelectSubset<T, RequestDocumentFindUniqueArgs<ExtArgs>>): Prisma__RequestDocumentClient<$Result.GetResult<Prisma.$RequestDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RequestDocument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RequestDocumentFindUniqueOrThrowArgs} args - Arguments to find a RequestDocument
     * @example
     * // Get one RequestDocument
     * const requestDocument = await prisma.requestDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RequestDocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, RequestDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RequestDocumentClient<$Result.GetResult<Prisma.$RequestDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RequestDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestDocumentFindFirstArgs} args - Arguments to find a RequestDocument
     * @example
     * // Get one RequestDocument
     * const requestDocument = await prisma.requestDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RequestDocumentFindFirstArgs>(args?: SelectSubset<T, RequestDocumentFindFirstArgs<ExtArgs>>): Prisma__RequestDocumentClient<$Result.GetResult<Prisma.$RequestDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RequestDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestDocumentFindFirstOrThrowArgs} args - Arguments to find a RequestDocument
     * @example
     * // Get one RequestDocument
     * const requestDocument = await prisma.requestDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RequestDocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, RequestDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__RequestDocumentClient<$Result.GetResult<Prisma.$RequestDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RequestDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RequestDocuments
     * const requestDocuments = await prisma.requestDocument.findMany()
     * 
     * // Get first 10 RequestDocuments
     * const requestDocuments = await prisma.requestDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const requestDocumentWithIdOnly = await prisma.requestDocument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RequestDocumentFindManyArgs>(args?: SelectSubset<T, RequestDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RequestDocument.
     * @param {RequestDocumentCreateArgs} args - Arguments to create a RequestDocument.
     * @example
     * // Create one RequestDocument
     * const RequestDocument = await prisma.requestDocument.create({
     *   data: {
     *     // ... data to create a RequestDocument
     *   }
     * })
     * 
     */
    create<T extends RequestDocumentCreateArgs>(args: SelectSubset<T, RequestDocumentCreateArgs<ExtArgs>>): Prisma__RequestDocumentClient<$Result.GetResult<Prisma.$RequestDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RequestDocuments.
     * @param {RequestDocumentCreateManyArgs} args - Arguments to create many RequestDocuments.
     * @example
     * // Create many RequestDocuments
     * const requestDocument = await prisma.requestDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RequestDocumentCreateManyArgs>(args?: SelectSubset<T, RequestDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RequestDocuments and returns the data saved in the database.
     * @param {RequestDocumentCreateManyAndReturnArgs} args - Arguments to create many RequestDocuments.
     * @example
     * // Create many RequestDocuments
     * const requestDocument = await prisma.requestDocument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RequestDocuments and only return the `id`
     * const requestDocumentWithIdOnly = await prisma.requestDocument.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RequestDocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, RequestDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestDocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RequestDocument.
     * @param {RequestDocumentDeleteArgs} args - Arguments to delete one RequestDocument.
     * @example
     * // Delete one RequestDocument
     * const RequestDocument = await prisma.requestDocument.delete({
     *   where: {
     *     // ... filter to delete one RequestDocument
     *   }
     * })
     * 
     */
    delete<T extends RequestDocumentDeleteArgs>(args: SelectSubset<T, RequestDocumentDeleteArgs<ExtArgs>>): Prisma__RequestDocumentClient<$Result.GetResult<Prisma.$RequestDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RequestDocument.
     * @param {RequestDocumentUpdateArgs} args - Arguments to update one RequestDocument.
     * @example
     * // Update one RequestDocument
     * const requestDocument = await prisma.requestDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RequestDocumentUpdateArgs>(args: SelectSubset<T, RequestDocumentUpdateArgs<ExtArgs>>): Prisma__RequestDocumentClient<$Result.GetResult<Prisma.$RequestDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RequestDocuments.
     * @param {RequestDocumentDeleteManyArgs} args - Arguments to filter RequestDocuments to delete.
     * @example
     * // Delete a few RequestDocuments
     * const { count } = await prisma.requestDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RequestDocumentDeleteManyArgs>(args?: SelectSubset<T, RequestDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RequestDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RequestDocuments
     * const requestDocument = await prisma.requestDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RequestDocumentUpdateManyArgs>(args: SelectSubset<T, RequestDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RequestDocuments and returns the data updated in the database.
     * @param {RequestDocumentUpdateManyAndReturnArgs} args - Arguments to update many RequestDocuments.
     * @example
     * // Update many RequestDocuments
     * const requestDocument = await prisma.requestDocument.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RequestDocuments and only return the `id`
     * const requestDocumentWithIdOnly = await prisma.requestDocument.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RequestDocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, RequestDocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestDocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RequestDocument.
     * @param {RequestDocumentUpsertArgs} args - Arguments to update or create a RequestDocument.
     * @example
     * // Update or create a RequestDocument
     * const requestDocument = await prisma.requestDocument.upsert({
     *   create: {
     *     // ... data to create a RequestDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RequestDocument we want to update
     *   }
     * })
     */
    upsert<T extends RequestDocumentUpsertArgs>(args: SelectSubset<T, RequestDocumentUpsertArgs<ExtArgs>>): Prisma__RequestDocumentClient<$Result.GetResult<Prisma.$RequestDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RequestDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestDocumentCountArgs} args - Arguments to filter RequestDocuments to count.
     * @example
     * // Count the number of RequestDocuments
     * const count = await prisma.requestDocument.count({
     *   where: {
     *     // ... the filter for the RequestDocuments we want to count
     *   }
     * })
    **/
    count<T extends RequestDocumentCountArgs>(
      args?: Subset<T, RequestDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequestDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RequestDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RequestDocumentAggregateArgs>(args: Subset<T, RequestDocumentAggregateArgs>): Prisma.PrismaPromise<GetRequestDocumentAggregateType<T>>

    /**
     * Group by RequestDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestDocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RequestDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RequestDocumentGroupByArgs['orderBy'] }
        : { orderBy?: RequestDocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RequestDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequestDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RequestDocument model
   */
  readonly fields: RequestDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RequestDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RequestDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    request<T extends RequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RequestDefaultArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RequestDocument model
   */
  interface RequestDocumentFieldRefs {
    readonly id: FieldRef<"RequestDocument", 'String'>
    readonly name: FieldRef<"RequestDocument", 'String'>
    readonly url: FieldRef<"RequestDocument", 'String'>
    readonly uploaded_at: FieldRef<"RequestDocument", 'DateTime'>
    readonly request_id: FieldRef<"RequestDocument", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RequestDocument findUnique
   */
  export type RequestDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestDocument
     */
    select?: RequestDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestDocument
     */
    omit?: RequestDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestDocumentInclude<ExtArgs> | null
    /**
     * Filter, which RequestDocument to fetch.
     */
    where: RequestDocumentWhereUniqueInput
  }

  /**
   * RequestDocument findUniqueOrThrow
   */
  export type RequestDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestDocument
     */
    select?: RequestDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestDocument
     */
    omit?: RequestDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestDocumentInclude<ExtArgs> | null
    /**
     * Filter, which RequestDocument to fetch.
     */
    where: RequestDocumentWhereUniqueInput
  }

  /**
   * RequestDocument findFirst
   */
  export type RequestDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestDocument
     */
    select?: RequestDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestDocument
     */
    omit?: RequestDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestDocumentInclude<ExtArgs> | null
    /**
     * Filter, which RequestDocument to fetch.
     */
    where?: RequestDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestDocuments to fetch.
     */
    orderBy?: RequestDocumentOrderByWithRelationInput | RequestDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequestDocuments.
     */
    cursor?: RequestDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequestDocuments.
     */
    distinct?: RequestDocumentScalarFieldEnum | RequestDocumentScalarFieldEnum[]
  }

  /**
   * RequestDocument findFirstOrThrow
   */
  export type RequestDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestDocument
     */
    select?: RequestDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestDocument
     */
    omit?: RequestDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestDocumentInclude<ExtArgs> | null
    /**
     * Filter, which RequestDocument to fetch.
     */
    where?: RequestDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestDocuments to fetch.
     */
    orderBy?: RequestDocumentOrderByWithRelationInput | RequestDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequestDocuments.
     */
    cursor?: RequestDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequestDocuments.
     */
    distinct?: RequestDocumentScalarFieldEnum | RequestDocumentScalarFieldEnum[]
  }

  /**
   * RequestDocument findMany
   */
  export type RequestDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestDocument
     */
    select?: RequestDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestDocument
     */
    omit?: RequestDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestDocumentInclude<ExtArgs> | null
    /**
     * Filter, which RequestDocuments to fetch.
     */
    where?: RequestDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestDocuments to fetch.
     */
    orderBy?: RequestDocumentOrderByWithRelationInput | RequestDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RequestDocuments.
     */
    cursor?: RequestDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestDocuments.
     */
    skip?: number
    distinct?: RequestDocumentScalarFieldEnum | RequestDocumentScalarFieldEnum[]
  }

  /**
   * RequestDocument create
   */
  export type RequestDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestDocument
     */
    select?: RequestDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestDocument
     */
    omit?: RequestDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestDocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a RequestDocument.
     */
    data: XOR<RequestDocumentCreateInput, RequestDocumentUncheckedCreateInput>
  }

  /**
   * RequestDocument createMany
   */
  export type RequestDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RequestDocuments.
     */
    data: RequestDocumentCreateManyInput | RequestDocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RequestDocument createManyAndReturn
   */
  export type RequestDocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestDocument
     */
    select?: RequestDocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RequestDocument
     */
    omit?: RequestDocumentOmit<ExtArgs> | null
    /**
     * The data used to create many RequestDocuments.
     */
    data: RequestDocumentCreateManyInput | RequestDocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestDocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RequestDocument update
   */
  export type RequestDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestDocument
     */
    select?: RequestDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestDocument
     */
    omit?: RequestDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestDocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a RequestDocument.
     */
    data: XOR<RequestDocumentUpdateInput, RequestDocumentUncheckedUpdateInput>
    /**
     * Choose, which RequestDocument to update.
     */
    where: RequestDocumentWhereUniqueInput
  }

  /**
   * RequestDocument updateMany
   */
  export type RequestDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RequestDocuments.
     */
    data: XOR<RequestDocumentUpdateManyMutationInput, RequestDocumentUncheckedUpdateManyInput>
    /**
     * Filter which RequestDocuments to update
     */
    where?: RequestDocumentWhereInput
    /**
     * Limit how many RequestDocuments to update.
     */
    limit?: number
  }

  /**
   * RequestDocument updateManyAndReturn
   */
  export type RequestDocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestDocument
     */
    select?: RequestDocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RequestDocument
     */
    omit?: RequestDocumentOmit<ExtArgs> | null
    /**
     * The data used to update RequestDocuments.
     */
    data: XOR<RequestDocumentUpdateManyMutationInput, RequestDocumentUncheckedUpdateManyInput>
    /**
     * Filter which RequestDocuments to update
     */
    where?: RequestDocumentWhereInput
    /**
     * Limit how many RequestDocuments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestDocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RequestDocument upsert
   */
  export type RequestDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestDocument
     */
    select?: RequestDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestDocument
     */
    omit?: RequestDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestDocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the RequestDocument to update in case it exists.
     */
    where: RequestDocumentWhereUniqueInput
    /**
     * In case the RequestDocument found by the `where` argument doesn't exist, create a new RequestDocument with this data.
     */
    create: XOR<RequestDocumentCreateInput, RequestDocumentUncheckedCreateInput>
    /**
     * In case the RequestDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RequestDocumentUpdateInput, RequestDocumentUncheckedUpdateInput>
  }

  /**
   * RequestDocument delete
   */
  export type RequestDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestDocument
     */
    select?: RequestDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestDocument
     */
    omit?: RequestDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestDocumentInclude<ExtArgs> | null
    /**
     * Filter which RequestDocument to delete.
     */
    where: RequestDocumentWhereUniqueInput
  }

  /**
   * RequestDocument deleteMany
   */
  export type RequestDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RequestDocuments to delete
     */
    where?: RequestDocumentWhereInput
    /**
     * Limit how many RequestDocuments to delete.
     */
    limit?: number
  }

  /**
   * RequestDocument without action
   */
  export type RequestDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestDocument
     */
    select?: RequestDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestDocument
     */
    omit?: RequestDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestDocumentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    username: 'username',
    role: 'role',
    phone: 'phone',
    avatar: 'avatar',
    email_notifications: 'email_notifications',
    company_name: 'company_name',
    siret: 'siret',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    bio: 'bio',
    job: 'job',
    income: 'income',
    guarantors: 'guarantors',
    user_id: 'user_id'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const PictureScalarFieldEnum: {
    id: 'id',
    url: 'url',
    type: 'type',
    uploaded_at: 'uploaded_at',
    user_id: 'user_id',
    apartment_id: 'apartment_id'
  };

  export type PictureScalarFieldEnum = (typeof PictureScalarFieldEnum)[keyof typeof PictureScalarFieldEnum]


  export const FavoriteScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    apartment_id: 'apartment_id'
  };

  export type FavoriteScalarFieldEnum = (typeof FavoriteScalarFieldEnum)[keyof typeof FavoriteScalarFieldEnum]


  export const ViewedApartmentScalarFieldEnum: {
    id: 'id',
    viewed_at: 'viewed_at',
    user_id: 'user_id',
    apartment_id: 'apartment_id'
  };

  export type ViewedApartmentScalarFieldEnum = (typeof ViewedApartmentScalarFieldEnum)[keyof typeof ViewedApartmentScalarFieldEnum]


  export const PreferencesScalarFieldEnum: {
    id: 'id',
    property_type: 'property_type',
    listing_type: 'listing_type',
    min_price: 'min_price',
    max_price: 'max_price',
    min_surface: 'min_surface',
    regions: 'regions',
    tags: 'tags',
    user_id: 'user_id'
  };

  export type PreferencesScalarFieldEnum = (typeof PreferencesScalarFieldEnum)[keyof typeof PreferencesScalarFieldEnum]


  export const ApartmentScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    address: 'address',
    region: 'region',
    city: 'city',
    postal_code: 'postal_code',
    country: 'country',
    latitude: 'latitude',
    longitude: 'longitude',
    property_type: 'property_type',
    listing_type: 'listing_type',
    price: 'price',
    surface: 'surface',
    rooms: 'rooms',
    tags: 'tags',
    availability: 'availability',
    owner_id: 'owner_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ApartmentScalarFieldEnum = (typeof ApartmentScalarFieldEnum)[keyof typeof ApartmentScalarFieldEnum]


  export const RequestScalarFieldEnum: {
    id: 'id',
    apartment_id: 'apartment_id',
    user_id: 'user_id',
    status: 'status',
    message: 'message',
    visit_date: 'visit_date',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type RequestScalarFieldEnum = (typeof RequestScalarFieldEnum)[keyof typeof RequestScalarFieldEnum]


  export const SwipeScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    apartment_id: 'apartment_id',
    direction: 'direction',
    created_at: 'created_at'
  };

  export type SwipeScalarFieldEnum = (typeof SwipeScalarFieldEnum)[keyof typeof SwipeScalarFieldEnum]


  export const MatchScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    apartment_id: 'apartment_id',
    created_at: 'created_at'
  };

  export type MatchScalarFieldEnum = (typeof MatchScalarFieldEnum)[keyof typeof MatchScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    content: 'content',
    match_id: 'match_id',
    sender_id: 'sender_id',
    created_at: 'created_at'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const RequestDocumentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    url: 'url',
    uploaded_at: 'uploaded_at',
    request_id: 'request_id'
  };

  export type RequestDocumentScalarFieldEnum = (typeof RequestDocumentScalarFieldEnum)[keyof typeof RequestDocumentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'PictureType'
   */
  export type EnumPictureTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PictureType'>
    


  /**
   * Reference to a field of type 'PictureType[]'
   */
  export type ListEnumPictureTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PictureType[]'>
    


  /**
   * Reference to a field of type 'PropertyType'
   */
  export type EnumPropertyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PropertyType'>
    


  /**
   * Reference to a field of type 'PropertyType[]'
   */
  export type ListEnumPropertyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PropertyType[]'>
    


  /**
   * Reference to a field of type 'ListingType'
   */
  export type EnumListingTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ListingType'>
    


  /**
   * Reference to a field of type 'ListingType[]'
   */
  export type ListEnumListingTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ListingType[]'>
    


  /**
   * Reference to a field of type 'RequestStatus'
   */
  export type EnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus'>
    


  /**
   * Reference to a field of type 'RequestStatus[]'
   */
  export type ListEnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus[]'>
    


  /**
   * Reference to a field of type 'SwipeDirection'
   */
  export type EnumSwipeDirectionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SwipeDirection'>
    


  /**
   * Reference to a field of type 'SwipeDirection[]'
   */
  export type ListEnumSwipeDirectionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SwipeDirection[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    phone?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    email_notifications?: BoolFilter<"User"> | boolean
    company_name?: StringNullableFilter<"User"> | string | null
    siret?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    pictures?: PictureListRelationFilter
    favorites?: FavoriteListRelationFilter
    viewed_apartments?: ViewedApartmentListRelationFilter
    swipes?: SwipeListRelationFilter
    matches?: MatchListRelationFilter
    requests?: RequestListRelationFilter
    messages?: MessageListRelationFilter
    owned_apartments?: ApartmentListRelationFilter
    preferences?: XOR<PreferencesNullableScalarRelationFilter, PreferencesWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    role?: SortOrder
    phone?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    email_notifications?: SortOrder
    company_name?: SortOrderInput | SortOrder
    siret?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    profile?: ProfileOrderByWithRelationInput
    pictures?: PictureOrderByRelationAggregateInput
    favorites?: FavoriteOrderByRelationAggregateInput
    viewed_apartments?: ViewedApartmentOrderByRelationAggregateInput
    swipes?: SwipeOrderByRelationAggregateInput
    matches?: MatchOrderByRelationAggregateInput
    requests?: RequestOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
    owned_apartments?: ApartmentOrderByRelationAggregateInput
    preferences?: PreferencesOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    phone?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    email_notifications?: BoolFilter<"User"> | boolean
    company_name?: StringNullableFilter<"User"> | string | null
    siret?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    pictures?: PictureListRelationFilter
    favorites?: FavoriteListRelationFilter
    viewed_apartments?: ViewedApartmentListRelationFilter
    swipes?: SwipeListRelationFilter
    matches?: MatchListRelationFilter
    requests?: RequestListRelationFilter
    messages?: MessageListRelationFilter
    owned_apartments?: ApartmentListRelationFilter
    preferences?: XOR<PreferencesNullableScalarRelationFilter, PreferencesWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    role?: SortOrder
    phone?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    email_notifications?: SortOrder
    company_name?: SortOrderInput | SortOrder
    siret?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    email_notifications?: BoolWithAggregatesFilter<"User"> | boolean
    company_name?: StringNullableWithAggregatesFilter<"User"> | string | null
    siret?: StringNullableWithAggregatesFilter<"User"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: StringFilter<"Profile"> | string
    bio?: StringNullableFilter<"Profile"> | string | null
    job?: StringNullableFilter<"Profile"> | string | null
    income?: FloatNullableFilter<"Profile"> | number | null
    guarantors?: IntNullableFilter<"Profile"> | number | null
    user_id?: StringFilter<"Profile"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    bio?: SortOrderInput | SortOrder
    job?: SortOrderInput | SortOrder
    income?: SortOrderInput | SortOrder
    guarantors?: SortOrderInput | SortOrder
    user_id?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id?: string
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    bio?: StringNullableFilter<"Profile"> | string | null
    job?: StringNullableFilter<"Profile"> | string | null
    income?: FloatNullableFilter<"Profile"> | number | null
    guarantors?: IntNullableFilter<"Profile"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "user_id">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    bio?: SortOrderInput | SortOrder
    job?: SortOrderInput | SortOrder
    income?: SortOrderInput | SortOrder
    guarantors?: SortOrderInput | SortOrder
    user_id?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _avg?: ProfileAvgOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
    _sum?: ProfileSumOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Profile"> | string
    bio?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    job?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    income?: FloatNullableWithAggregatesFilter<"Profile"> | number | null
    guarantors?: IntNullableWithAggregatesFilter<"Profile"> | number | null
    user_id?: StringWithAggregatesFilter<"Profile"> | string
  }

  export type PictureWhereInput = {
    AND?: PictureWhereInput | PictureWhereInput[]
    OR?: PictureWhereInput[]
    NOT?: PictureWhereInput | PictureWhereInput[]
    id?: StringFilter<"Picture"> | string
    url?: StringFilter<"Picture"> | string
    type?: EnumPictureTypeFilter<"Picture"> | $Enums.PictureType
    uploaded_at?: DateTimeFilter<"Picture"> | Date | string
    user_id?: StringNullableFilter<"Picture"> | string | null
    apartment_id?: StringNullableFilter<"Picture"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    apartment?: XOR<ApartmentNullableScalarRelationFilter, ApartmentWhereInput> | null
  }

  export type PictureOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    uploaded_at?: SortOrder
    user_id?: SortOrderInput | SortOrder
    apartment_id?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    apartment?: ApartmentOrderByWithRelationInput
  }

  export type PictureWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PictureWhereInput | PictureWhereInput[]
    OR?: PictureWhereInput[]
    NOT?: PictureWhereInput | PictureWhereInput[]
    url?: StringFilter<"Picture"> | string
    type?: EnumPictureTypeFilter<"Picture"> | $Enums.PictureType
    uploaded_at?: DateTimeFilter<"Picture"> | Date | string
    user_id?: StringNullableFilter<"Picture"> | string | null
    apartment_id?: StringNullableFilter<"Picture"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    apartment?: XOR<ApartmentNullableScalarRelationFilter, ApartmentWhereInput> | null
  }, "id">

  export type PictureOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    uploaded_at?: SortOrder
    user_id?: SortOrderInput | SortOrder
    apartment_id?: SortOrderInput | SortOrder
    _count?: PictureCountOrderByAggregateInput
    _max?: PictureMaxOrderByAggregateInput
    _min?: PictureMinOrderByAggregateInput
  }

  export type PictureScalarWhereWithAggregatesInput = {
    AND?: PictureScalarWhereWithAggregatesInput | PictureScalarWhereWithAggregatesInput[]
    OR?: PictureScalarWhereWithAggregatesInput[]
    NOT?: PictureScalarWhereWithAggregatesInput | PictureScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Picture"> | string
    url?: StringWithAggregatesFilter<"Picture"> | string
    type?: EnumPictureTypeWithAggregatesFilter<"Picture"> | $Enums.PictureType
    uploaded_at?: DateTimeWithAggregatesFilter<"Picture"> | Date | string
    user_id?: StringNullableWithAggregatesFilter<"Picture"> | string | null
    apartment_id?: StringNullableWithAggregatesFilter<"Picture"> | string | null
  }

  export type FavoriteWhereInput = {
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    id?: StringFilter<"Favorite"> | string
    user_id?: StringFilter<"Favorite"> | string
    apartment_id?: StringFilter<"Favorite"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    apartment?: XOR<ApartmentScalarRelationFilter, ApartmentWhereInput>
  }

  export type FavoriteOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    apartment_id?: SortOrder
    user?: UserOrderByWithRelationInput
    apartment?: ApartmentOrderByWithRelationInput
  }

  export type FavoriteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id_apartment_id?: FavoriteUser_idApartment_idCompoundUniqueInput
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    user_id?: StringFilter<"Favorite"> | string
    apartment_id?: StringFilter<"Favorite"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    apartment?: XOR<ApartmentScalarRelationFilter, ApartmentWhereInput>
  }, "id" | "user_id_apartment_id">

  export type FavoriteOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    apartment_id?: SortOrder
    _count?: FavoriteCountOrderByAggregateInput
    _max?: FavoriteMaxOrderByAggregateInput
    _min?: FavoriteMinOrderByAggregateInput
  }

  export type FavoriteScalarWhereWithAggregatesInput = {
    AND?: FavoriteScalarWhereWithAggregatesInput | FavoriteScalarWhereWithAggregatesInput[]
    OR?: FavoriteScalarWhereWithAggregatesInput[]
    NOT?: FavoriteScalarWhereWithAggregatesInput | FavoriteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Favorite"> | string
    user_id?: StringWithAggregatesFilter<"Favorite"> | string
    apartment_id?: StringWithAggregatesFilter<"Favorite"> | string
  }

  export type ViewedApartmentWhereInput = {
    AND?: ViewedApartmentWhereInput | ViewedApartmentWhereInput[]
    OR?: ViewedApartmentWhereInput[]
    NOT?: ViewedApartmentWhereInput | ViewedApartmentWhereInput[]
    id?: StringFilter<"ViewedApartment"> | string
    viewed_at?: DateTimeFilter<"ViewedApartment"> | Date | string
    user_id?: StringFilter<"ViewedApartment"> | string
    apartment_id?: StringFilter<"ViewedApartment"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    apartment?: XOR<ApartmentScalarRelationFilter, ApartmentWhereInput>
  }

  export type ViewedApartmentOrderByWithRelationInput = {
    id?: SortOrder
    viewed_at?: SortOrder
    user_id?: SortOrder
    apartment_id?: SortOrder
    user?: UserOrderByWithRelationInput
    apartment?: ApartmentOrderByWithRelationInput
  }

  export type ViewedApartmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ViewedApartmentWhereInput | ViewedApartmentWhereInput[]
    OR?: ViewedApartmentWhereInput[]
    NOT?: ViewedApartmentWhereInput | ViewedApartmentWhereInput[]
    viewed_at?: DateTimeFilter<"ViewedApartment"> | Date | string
    user_id?: StringFilter<"ViewedApartment"> | string
    apartment_id?: StringFilter<"ViewedApartment"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    apartment?: XOR<ApartmentScalarRelationFilter, ApartmentWhereInput>
  }, "id">

  export type ViewedApartmentOrderByWithAggregationInput = {
    id?: SortOrder
    viewed_at?: SortOrder
    user_id?: SortOrder
    apartment_id?: SortOrder
    _count?: ViewedApartmentCountOrderByAggregateInput
    _max?: ViewedApartmentMaxOrderByAggregateInput
    _min?: ViewedApartmentMinOrderByAggregateInput
  }

  export type ViewedApartmentScalarWhereWithAggregatesInput = {
    AND?: ViewedApartmentScalarWhereWithAggregatesInput | ViewedApartmentScalarWhereWithAggregatesInput[]
    OR?: ViewedApartmentScalarWhereWithAggregatesInput[]
    NOT?: ViewedApartmentScalarWhereWithAggregatesInput | ViewedApartmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ViewedApartment"> | string
    viewed_at?: DateTimeWithAggregatesFilter<"ViewedApartment"> | Date | string
    user_id?: StringWithAggregatesFilter<"ViewedApartment"> | string
    apartment_id?: StringWithAggregatesFilter<"ViewedApartment"> | string
  }

  export type PreferencesWhereInput = {
    AND?: PreferencesWhereInput | PreferencesWhereInput[]
    OR?: PreferencesWhereInput[]
    NOT?: PreferencesWhereInput | PreferencesWhereInput[]
    id?: StringFilter<"Preferences"> | string
    property_type?: StringNullableListFilter<"Preferences">
    listing_type?: StringNullableFilter<"Preferences"> | string | null
    min_price?: FloatNullableFilter<"Preferences"> | number | null
    max_price?: FloatNullableFilter<"Preferences"> | number | null
    min_surface?: FloatNullableFilter<"Preferences"> | number | null
    regions?: StringNullableListFilter<"Preferences">
    tags?: StringNullableListFilter<"Preferences">
    user_id?: StringFilter<"Preferences"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PreferencesOrderByWithRelationInput = {
    id?: SortOrder
    property_type?: SortOrder
    listing_type?: SortOrderInput | SortOrder
    min_price?: SortOrderInput | SortOrder
    max_price?: SortOrderInput | SortOrder
    min_surface?: SortOrderInput | SortOrder
    regions?: SortOrder
    tags?: SortOrder
    user_id?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PreferencesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id?: string
    AND?: PreferencesWhereInput | PreferencesWhereInput[]
    OR?: PreferencesWhereInput[]
    NOT?: PreferencesWhereInput | PreferencesWhereInput[]
    property_type?: StringNullableListFilter<"Preferences">
    listing_type?: StringNullableFilter<"Preferences"> | string | null
    min_price?: FloatNullableFilter<"Preferences"> | number | null
    max_price?: FloatNullableFilter<"Preferences"> | number | null
    min_surface?: FloatNullableFilter<"Preferences"> | number | null
    regions?: StringNullableListFilter<"Preferences">
    tags?: StringNullableListFilter<"Preferences">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "user_id">

  export type PreferencesOrderByWithAggregationInput = {
    id?: SortOrder
    property_type?: SortOrder
    listing_type?: SortOrderInput | SortOrder
    min_price?: SortOrderInput | SortOrder
    max_price?: SortOrderInput | SortOrder
    min_surface?: SortOrderInput | SortOrder
    regions?: SortOrder
    tags?: SortOrder
    user_id?: SortOrder
    _count?: PreferencesCountOrderByAggregateInput
    _avg?: PreferencesAvgOrderByAggregateInput
    _max?: PreferencesMaxOrderByAggregateInput
    _min?: PreferencesMinOrderByAggregateInput
    _sum?: PreferencesSumOrderByAggregateInput
  }

  export type PreferencesScalarWhereWithAggregatesInput = {
    AND?: PreferencesScalarWhereWithAggregatesInput | PreferencesScalarWhereWithAggregatesInput[]
    OR?: PreferencesScalarWhereWithAggregatesInput[]
    NOT?: PreferencesScalarWhereWithAggregatesInput | PreferencesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Preferences"> | string
    property_type?: StringNullableListFilter<"Preferences">
    listing_type?: StringNullableWithAggregatesFilter<"Preferences"> | string | null
    min_price?: FloatNullableWithAggregatesFilter<"Preferences"> | number | null
    max_price?: FloatNullableWithAggregatesFilter<"Preferences"> | number | null
    min_surface?: FloatNullableWithAggregatesFilter<"Preferences"> | number | null
    regions?: StringNullableListFilter<"Preferences">
    tags?: StringNullableListFilter<"Preferences">
    user_id?: StringWithAggregatesFilter<"Preferences"> | string
  }

  export type ApartmentWhereInput = {
    AND?: ApartmentWhereInput | ApartmentWhereInput[]
    OR?: ApartmentWhereInput[]
    NOT?: ApartmentWhereInput | ApartmentWhereInput[]
    id?: StringFilter<"Apartment"> | string
    title?: StringFilter<"Apartment"> | string
    description?: StringNullableFilter<"Apartment"> | string | null
    address?: StringFilter<"Apartment"> | string
    region?: StringFilter<"Apartment"> | string
    city?: StringNullableFilter<"Apartment"> | string | null
    postal_code?: StringNullableFilter<"Apartment"> | string | null
    country?: StringFilter<"Apartment"> | string
    latitude?: FloatNullableFilter<"Apartment"> | number | null
    longitude?: FloatNullableFilter<"Apartment"> | number | null
    property_type?: EnumPropertyTypeFilter<"Apartment"> | $Enums.PropertyType
    listing_type?: EnumListingTypeFilter<"Apartment"> | $Enums.ListingType
    price?: FloatFilter<"Apartment"> | number
    surface?: FloatFilter<"Apartment"> | number
    rooms?: IntFilter<"Apartment"> | number
    tags?: StringNullableListFilter<"Apartment">
    availability?: BoolFilter<"Apartment"> | boolean
    owner_id?: StringFilter<"Apartment"> | string
    created_at?: DateTimeFilter<"Apartment"> | Date | string
    updated_at?: DateTimeFilter<"Apartment"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    pictures?: PictureListRelationFilter
    favorites?: FavoriteListRelationFilter
    viewedBy?: ViewedApartmentListRelationFilter
    swipes?: SwipeListRelationFilter
    matches?: MatchListRelationFilter
    requests?: RequestListRelationFilter
  }

  export type ApartmentOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    address?: SortOrder
    region?: SortOrder
    city?: SortOrderInput | SortOrder
    postal_code?: SortOrderInput | SortOrder
    country?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    property_type?: SortOrder
    listing_type?: SortOrder
    price?: SortOrder
    surface?: SortOrder
    rooms?: SortOrder
    tags?: SortOrder
    availability?: SortOrder
    owner_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    owner?: UserOrderByWithRelationInput
    pictures?: PictureOrderByRelationAggregateInput
    favorites?: FavoriteOrderByRelationAggregateInput
    viewedBy?: ViewedApartmentOrderByRelationAggregateInput
    swipes?: SwipeOrderByRelationAggregateInput
    matches?: MatchOrderByRelationAggregateInput
    requests?: RequestOrderByRelationAggregateInput
  }

  export type ApartmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ApartmentWhereInput | ApartmentWhereInput[]
    OR?: ApartmentWhereInput[]
    NOT?: ApartmentWhereInput | ApartmentWhereInput[]
    title?: StringFilter<"Apartment"> | string
    description?: StringNullableFilter<"Apartment"> | string | null
    address?: StringFilter<"Apartment"> | string
    region?: StringFilter<"Apartment"> | string
    city?: StringNullableFilter<"Apartment"> | string | null
    postal_code?: StringNullableFilter<"Apartment"> | string | null
    country?: StringFilter<"Apartment"> | string
    latitude?: FloatNullableFilter<"Apartment"> | number | null
    longitude?: FloatNullableFilter<"Apartment"> | number | null
    property_type?: EnumPropertyTypeFilter<"Apartment"> | $Enums.PropertyType
    listing_type?: EnumListingTypeFilter<"Apartment"> | $Enums.ListingType
    price?: FloatFilter<"Apartment"> | number
    surface?: FloatFilter<"Apartment"> | number
    rooms?: IntFilter<"Apartment"> | number
    tags?: StringNullableListFilter<"Apartment">
    availability?: BoolFilter<"Apartment"> | boolean
    owner_id?: StringFilter<"Apartment"> | string
    created_at?: DateTimeFilter<"Apartment"> | Date | string
    updated_at?: DateTimeFilter<"Apartment"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    pictures?: PictureListRelationFilter
    favorites?: FavoriteListRelationFilter
    viewedBy?: ViewedApartmentListRelationFilter
    swipes?: SwipeListRelationFilter
    matches?: MatchListRelationFilter
    requests?: RequestListRelationFilter
  }, "id">

  export type ApartmentOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    address?: SortOrder
    region?: SortOrder
    city?: SortOrderInput | SortOrder
    postal_code?: SortOrderInput | SortOrder
    country?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    property_type?: SortOrder
    listing_type?: SortOrder
    price?: SortOrder
    surface?: SortOrder
    rooms?: SortOrder
    tags?: SortOrder
    availability?: SortOrder
    owner_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ApartmentCountOrderByAggregateInput
    _avg?: ApartmentAvgOrderByAggregateInput
    _max?: ApartmentMaxOrderByAggregateInput
    _min?: ApartmentMinOrderByAggregateInput
    _sum?: ApartmentSumOrderByAggregateInput
  }

  export type ApartmentScalarWhereWithAggregatesInput = {
    AND?: ApartmentScalarWhereWithAggregatesInput | ApartmentScalarWhereWithAggregatesInput[]
    OR?: ApartmentScalarWhereWithAggregatesInput[]
    NOT?: ApartmentScalarWhereWithAggregatesInput | ApartmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Apartment"> | string
    title?: StringWithAggregatesFilter<"Apartment"> | string
    description?: StringNullableWithAggregatesFilter<"Apartment"> | string | null
    address?: StringWithAggregatesFilter<"Apartment"> | string
    region?: StringWithAggregatesFilter<"Apartment"> | string
    city?: StringNullableWithAggregatesFilter<"Apartment"> | string | null
    postal_code?: StringNullableWithAggregatesFilter<"Apartment"> | string | null
    country?: StringWithAggregatesFilter<"Apartment"> | string
    latitude?: FloatNullableWithAggregatesFilter<"Apartment"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"Apartment"> | number | null
    property_type?: EnumPropertyTypeWithAggregatesFilter<"Apartment"> | $Enums.PropertyType
    listing_type?: EnumListingTypeWithAggregatesFilter<"Apartment"> | $Enums.ListingType
    price?: FloatWithAggregatesFilter<"Apartment"> | number
    surface?: FloatWithAggregatesFilter<"Apartment"> | number
    rooms?: IntWithAggregatesFilter<"Apartment"> | number
    tags?: StringNullableListFilter<"Apartment">
    availability?: BoolWithAggregatesFilter<"Apartment"> | boolean
    owner_id?: StringWithAggregatesFilter<"Apartment"> | string
    created_at?: DateTimeWithAggregatesFilter<"Apartment"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Apartment"> | Date | string
  }

  export type RequestWhereInput = {
    AND?: RequestWhereInput | RequestWhereInput[]
    OR?: RequestWhereInput[]
    NOT?: RequestWhereInput | RequestWhereInput[]
    id?: StringFilter<"Request"> | string
    apartment_id?: StringFilter<"Request"> | string
    user_id?: StringFilter<"Request"> | string
    status?: EnumRequestStatusFilter<"Request"> | $Enums.RequestStatus
    message?: StringNullableFilter<"Request"> | string | null
    visit_date?: DateTimeNullableFilter<"Request"> | Date | string | null
    created_at?: DateTimeFilter<"Request"> | Date | string
    updated_at?: DateTimeFilter<"Request"> | Date | string
    apartment?: XOR<ApartmentScalarRelationFilter, ApartmentWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    documents?: RequestDocumentListRelationFilter
  }

  export type RequestOrderByWithRelationInput = {
    id?: SortOrder
    apartment_id?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
    message?: SortOrderInput | SortOrder
    visit_date?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    apartment?: ApartmentOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    documents?: RequestDocumentOrderByRelationAggregateInput
  }

  export type RequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    apartment_id_user_id?: RequestApartment_idUser_idCompoundUniqueInput
    AND?: RequestWhereInput | RequestWhereInput[]
    OR?: RequestWhereInput[]
    NOT?: RequestWhereInput | RequestWhereInput[]
    apartment_id?: StringFilter<"Request"> | string
    user_id?: StringFilter<"Request"> | string
    status?: EnumRequestStatusFilter<"Request"> | $Enums.RequestStatus
    message?: StringNullableFilter<"Request"> | string | null
    visit_date?: DateTimeNullableFilter<"Request"> | Date | string | null
    created_at?: DateTimeFilter<"Request"> | Date | string
    updated_at?: DateTimeFilter<"Request"> | Date | string
    apartment?: XOR<ApartmentScalarRelationFilter, ApartmentWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    documents?: RequestDocumentListRelationFilter
  }, "id" | "apartment_id_user_id">

  export type RequestOrderByWithAggregationInput = {
    id?: SortOrder
    apartment_id?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
    message?: SortOrderInput | SortOrder
    visit_date?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: RequestCountOrderByAggregateInput
    _max?: RequestMaxOrderByAggregateInput
    _min?: RequestMinOrderByAggregateInput
  }

  export type RequestScalarWhereWithAggregatesInput = {
    AND?: RequestScalarWhereWithAggregatesInput | RequestScalarWhereWithAggregatesInput[]
    OR?: RequestScalarWhereWithAggregatesInput[]
    NOT?: RequestScalarWhereWithAggregatesInput | RequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Request"> | string
    apartment_id?: StringWithAggregatesFilter<"Request"> | string
    user_id?: StringWithAggregatesFilter<"Request"> | string
    status?: EnumRequestStatusWithAggregatesFilter<"Request"> | $Enums.RequestStatus
    message?: StringNullableWithAggregatesFilter<"Request"> | string | null
    visit_date?: DateTimeNullableWithAggregatesFilter<"Request"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"Request"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Request"> | Date | string
  }

  export type SwipeWhereInput = {
    AND?: SwipeWhereInput | SwipeWhereInput[]
    OR?: SwipeWhereInput[]
    NOT?: SwipeWhereInput | SwipeWhereInput[]
    id?: StringFilter<"Swipe"> | string
    user_id?: StringFilter<"Swipe"> | string
    apartment_id?: StringFilter<"Swipe"> | string
    direction?: EnumSwipeDirectionFilter<"Swipe"> | $Enums.SwipeDirection
    created_at?: DateTimeFilter<"Swipe"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    apartment?: XOR<ApartmentScalarRelationFilter, ApartmentWhereInput>
  }

  export type SwipeOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    apartment_id?: SortOrder
    direction?: SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
    apartment?: ApartmentOrderByWithRelationInput
  }

  export type SwipeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id_apartment_id?: SwipeUser_idApartment_idCompoundUniqueInput
    AND?: SwipeWhereInput | SwipeWhereInput[]
    OR?: SwipeWhereInput[]
    NOT?: SwipeWhereInput | SwipeWhereInput[]
    user_id?: StringFilter<"Swipe"> | string
    apartment_id?: StringFilter<"Swipe"> | string
    direction?: EnumSwipeDirectionFilter<"Swipe"> | $Enums.SwipeDirection
    created_at?: DateTimeFilter<"Swipe"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    apartment?: XOR<ApartmentScalarRelationFilter, ApartmentWhereInput>
  }, "id" | "user_id_apartment_id">

  export type SwipeOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    apartment_id?: SortOrder
    direction?: SortOrder
    created_at?: SortOrder
    _count?: SwipeCountOrderByAggregateInput
    _max?: SwipeMaxOrderByAggregateInput
    _min?: SwipeMinOrderByAggregateInput
  }

  export type SwipeScalarWhereWithAggregatesInput = {
    AND?: SwipeScalarWhereWithAggregatesInput | SwipeScalarWhereWithAggregatesInput[]
    OR?: SwipeScalarWhereWithAggregatesInput[]
    NOT?: SwipeScalarWhereWithAggregatesInput | SwipeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Swipe"> | string
    user_id?: StringWithAggregatesFilter<"Swipe"> | string
    apartment_id?: StringWithAggregatesFilter<"Swipe"> | string
    direction?: EnumSwipeDirectionWithAggregatesFilter<"Swipe"> | $Enums.SwipeDirection
    created_at?: DateTimeWithAggregatesFilter<"Swipe"> | Date | string
  }

  export type MatchWhereInput = {
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    id?: StringFilter<"Match"> | string
    user_id?: StringFilter<"Match"> | string
    apartment_id?: StringFilter<"Match"> | string
    created_at?: DateTimeFilter<"Match"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    apartment?: XOR<ApartmentScalarRelationFilter, ApartmentWhereInput>
    messages?: MessageListRelationFilter
  }

  export type MatchOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    apartment_id?: SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
    apartment?: ApartmentOrderByWithRelationInput
    messages?: MessageOrderByRelationAggregateInput
  }

  export type MatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id_apartment_id?: MatchUser_idApartment_idCompoundUniqueInput
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    user_id?: StringFilter<"Match"> | string
    apartment_id?: StringFilter<"Match"> | string
    created_at?: DateTimeFilter<"Match"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    apartment?: XOR<ApartmentScalarRelationFilter, ApartmentWhereInput>
    messages?: MessageListRelationFilter
  }, "id" | "user_id_apartment_id">

  export type MatchOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    apartment_id?: SortOrder
    created_at?: SortOrder
    _count?: MatchCountOrderByAggregateInput
    _max?: MatchMaxOrderByAggregateInput
    _min?: MatchMinOrderByAggregateInput
  }

  export type MatchScalarWhereWithAggregatesInput = {
    AND?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    OR?: MatchScalarWhereWithAggregatesInput[]
    NOT?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Match"> | string
    user_id?: StringWithAggregatesFilter<"Match"> | string
    apartment_id?: StringWithAggregatesFilter<"Match"> | string
    created_at?: DateTimeWithAggregatesFilter<"Match"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    match_id?: StringFilter<"Message"> | string
    sender_id?: StringFilter<"Message"> | string
    created_at?: DateTimeFilter<"Message"> | Date | string
    match?: XOR<MatchScalarRelationFilter, MatchWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    match_id?: SortOrder
    sender_id?: SortOrder
    created_at?: SortOrder
    match?: MatchOrderByWithRelationInput
    sender?: UserOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    content?: StringFilter<"Message"> | string
    match_id?: StringFilter<"Message"> | string
    sender_id?: StringFilter<"Message"> | string
    created_at?: DateTimeFilter<"Message"> | Date | string
    match?: XOR<MatchScalarRelationFilter, MatchWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    match_id?: SortOrder
    sender_id?: SortOrder
    created_at?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    content?: StringWithAggregatesFilter<"Message"> | string
    match_id?: StringWithAggregatesFilter<"Message"> | string
    sender_id?: StringWithAggregatesFilter<"Message"> | string
    created_at?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type RequestDocumentWhereInput = {
    AND?: RequestDocumentWhereInput | RequestDocumentWhereInput[]
    OR?: RequestDocumentWhereInput[]
    NOT?: RequestDocumentWhereInput | RequestDocumentWhereInput[]
    id?: StringFilter<"RequestDocument"> | string
    name?: StringFilter<"RequestDocument"> | string
    url?: StringFilter<"RequestDocument"> | string
    uploaded_at?: DateTimeFilter<"RequestDocument"> | Date | string
    request_id?: StringFilter<"RequestDocument"> | string
    request?: XOR<RequestScalarRelationFilter, RequestWhereInput>
  }

  export type RequestDocumentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    uploaded_at?: SortOrder
    request_id?: SortOrder
    request?: RequestOrderByWithRelationInput
  }

  export type RequestDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RequestDocumentWhereInput | RequestDocumentWhereInput[]
    OR?: RequestDocumentWhereInput[]
    NOT?: RequestDocumentWhereInput | RequestDocumentWhereInput[]
    name?: StringFilter<"RequestDocument"> | string
    url?: StringFilter<"RequestDocument"> | string
    uploaded_at?: DateTimeFilter<"RequestDocument"> | Date | string
    request_id?: StringFilter<"RequestDocument"> | string
    request?: XOR<RequestScalarRelationFilter, RequestWhereInput>
  }, "id">

  export type RequestDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    uploaded_at?: SortOrder
    request_id?: SortOrder
    _count?: RequestDocumentCountOrderByAggregateInput
    _max?: RequestDocumentMaxOrderByAggregateInput
    _min?: RequestDocumentMinOrderByAggregateInput
  }

  export type RequestDocumentScalarWhereWithAggregatesInput = {
    AND?: RequestDocumentScalarWhereWithAggregatesInput | RequestDocumentScalarWhereWithAggregatesInput[]
    OR?: RequestDocumentScalarWhereWithAggregatesInput[]
    NOT?: RequestDocumentScalarWhereWithAggregatesInput | RequestDocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RequestDocument"> | string
    name?: StringWithAggregatesFilter<"RequestDocument"> | string
    url?: StringWithAggregatesFilter<"RequestDocument"> | string
    uploaded_at?: DateTimeWithAggregatesFilter<"RequestDocument"> | Date | string
    request_id?: StringWithAggregatesFilter<"RequestDocument"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    username: string
    role?: $Enums.Role
    phone?: string | null
    avatar?: string | null
    email_notifications?: boolean
    company_name?: string | null
    siret?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    pictures?: PictureCreateNestedManyWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    viewed_apartments?: ViewedApartmentCreateNestedManyWithoutUserInput
    swipes?: SwipeCreateNestedManyWithoutUserInput
    matches?: MatchCreateNestedManyWithoutUserInput
    requests?: RequestCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    owned_apartments?: ApartmentCreateNestedManyWithoutOwnerInput
    preferences?: PreferencesCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    username: string
    role?: $Enums.Role
    phone?: string | null
    avatar?: string | null
    email_notifications?: boolean
    company_name?: string | null
    siret?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    pictures?: PictureUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    viewed_apartments?: ViewedApartmentUncheckedCreateNestedManyWithoutUserInput
    swipes?: SwipeUncheckedCreateNestedManyWithoutUserInput
    matches?: MatchUncheckedCreateNestedManyWithoutUserInput
    requests?: RequestUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    owned_apartments?: ApartmentUncheckedCreateNestedManyWithoutOwnerInput
    preferences?: PreferencesUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    email_notifications?: BoolFieldUpdateOperationsInput | boolean
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    siret?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    pictures?: PictureUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    viewed_apartments?: ViewedApartmentUpdateManyWithoutUserNestedInput
    swipes?: SwipeUpdateManyWithoutUserNestedInput
    matches?: MatchUpdateManyWithoutUserNestedInput
    requests?: RequestUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    owned_apartments?: ApartmentUpdateManyWithoutOwnerNestedInput
    preferences?: PreferencesUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    email_notifications?: BoolFieldUpdateOperationsInput | boolean
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    siret?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    pictures?: PictureUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    viewed_apartments?: ViewedApartmentUncheckedUpdateManyWithoutUserNestedInput
    swipes?: SwipeUncheckedUpdateManyWithoutUserNestedInput
    matches?: MatchUncheckedUpdateManyWithoutUserNestedInput
    requests?: RequestUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    owned_apartments?: ApartmentUncheckedUpdateManyWithoutOwnerNestedInput
    preferences?: PreferencesUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    username: string
    role?: $Enums.Role
    phone?: string | null
    avatar?: string | null
    email_notifications?: boolean
    company_name?: string | null
    siret?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    email_notifications?: BoolFieldUpdateOperationsInput | boolean
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    siret?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    email_notifications?: BoolFieldUpdateOperationsInput | boolean
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    siret?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileCreateInput = {
    id?: string
    bio?: string | null
    job?: string | null
    income?: number | null
    guarantors?: number | null
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: string
    bio?: string | null
    job?: string | null
    income?: number | null
    guarantors?: number | null
    user_id: string
  }

  export type ProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    income?: NullableFloatFieldUpdateOperationsInput | number | null
    guarantors?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    income?: NullableFloatFieldUpdateOperationsInput | number | null
    guarantors?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type ProfileCreateManyInput = {
    id?: string
    bio?: string | null
    job?: string | null
    income?: number | null
    guarantors?: number | null
    user_id: string
  }

  export type ProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    income?: NullableFloatFieldUpdateOperationsInput | number | null
    guarantors?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    income?: NullableFloatFieldUpdateOperationsInput | number | null
    guarantors?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type PictureCreateInput = {
    id?: string
    url: string
    type: $Enums.PictureType
    uploaded_at?: Date | string
    user?: UserCreateNestedOneWithoutPicturesInput
    apartment?: ApartmentCreateNestedOneWithoutPicturesInput
  }

  export type PictureUncheckedCreateInput = {
    id?: string
    url: string
    type: $Enums.PictureType
    uploaded_at?: Date | string
    user_id?: string | null
    apartment_id?: string | null
  }

  export type PictureUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumPictureTypeFieldUpdateOperationsInput | $Enums.PictureType
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutPicturesNestedInput
    apartment?: ApartmentUpdateOneWithoutPicturesNestedInput
  }

  export type PictureUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumPictureTypeFieldUpdateOperationsInput | $Enums.PictureType
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    apartment_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PictureCreateManyInput = {
    id?: string
    url: string
    type: $Enums.PictureType
    uploaded_at?: Date | string
    user_id?: string | null
    apartment_id?: string | null
  }

  export type PictureUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumPictureTypeFieldUpdateOperationsInput | $Enums.PictureType
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PictureUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumPictureTypeFieldUpdateOperationsInput | $Enums.PictureType
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    apartment_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FavoriteCreateInput = {
    id?: string
    user: UserCreateNestedOneWithoutFavoritesInput
    apartment: ApartmentCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteUncheckedCreateInput = {
    id?: string
    user_id: string
    apartment_id: string
  }

  export type FavoriteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutFavoritesNestedInput
    apartment?: ApartmentUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoriteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    apartment_id?: StringFieldUpdateOperationsInput | string
  }

  export type FavoriteCreateManyInput = {
    id?: string
    user_id: string
    apartment_id: string
  }

  export type FavoriteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type FavoriteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    apartment_id?: StringFieldUpdateOperationsInput | string
  }

  export type ViewedApartmentCreateInput = {
    id?: string
    viewed_at?: Date | string
    user: UserCreateNestedOneWithoutViewed_apartmentsInput
    apartment: ApartmentCreateNestedOneWithoutViewedByInput
  }

  export type ViewedApartmentUncheckedCreateInput = {
    id?: string
    viewed_at?: Date | string
    user_id: string
    apartment_id: string
  }

  export type ViewedApartmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutViewed_apartmentsNestedInput
    apartment?: ApartmentUpdateOneRequiredWithoutViewedByNestedInput
  }

  export type ViewedApartmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
    apartment_id?: StringFieldUpdateOperationsInput | string
  }

  export type ViewedApartmentCreateManyInput = {
    id?: string
    viewed_at?: Date | string
    user_id: string
    apartment_id: string
  }

  export type ViewedApartmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewedApartmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
    apartment_id?: StringFieldUpdateOperationsInput | string
  }

  export type PreferencesCreateInput = {
    id?: string
    property_type?: PreferencesCreateproperty_typeInput | string[]
    listing_type?: string | null
    min_price?: number | null
    max_price?: number | null
    min_surface?: number | null
    regions?: PreferencesCreateregionsInput | string[]
    tags?: PreferencesCreatetagsInput | string[]
    user: UserCreateNestedOneWithoutPreferencesInput
  }

  export type PreferencesUncheckedCreateInput = {
    id?: string
    property_type?: PreferencesCreateproperty_typeInput | string[]
    listing_type?: string | null
    min_price?: number | null
    max_price?: number | null
    min_surface?: number | null
    regions?: PreferencesCreateregionsInput | string[]
    tags?: PreferencesCreatetagsInput | string[]
    user_id: string
  }

  export type PreferencesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    property_type?: PreferencesUpdateproperty_typeInput | string[]
    listing_type?: NullableStringFieldUpdateOperationsInput | string | null
    min_price?: NullableFloatFieldUpdateOperationsInput | number | null
    max_price?: NullableFloatFieldUpdateOperationsInput | number | null
    min_surface?: NullableFloatFieldUpdateOperationsInput | number | null
    regions?: PreferencesUpdateregionsInput | string[]
    tags?: PreferencesUpdatetagsInput | string[]
    user?: UserUpdateOneRequiredWithoutPreferencesNestedInput
  }

  export type PreferencesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    property_type?: PreferencesUpdateproperty_typeInput | string[]
    listing_type?: NullableStringFieldUpdateOperationsInput | string | null
    min_price?: NullableFloatFieldUpdateOperationsInput | number | null
    max_price?: NullableFloatFieldUpdateOperationsInput | number | null
    min_surface?: NullableFloatFieldUpdateOperationsInput | number | null
    regions?: PreferencesUpdateregionsInput | string[]
    tags?: PreferencesUpdatetagsInput | string[]
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type PreferencesCreateManyInput = {
    id?: string
    property_type?: PreferencesCreateproperty_typeInput | string[]
    listing_type?: string | null
    min_price?: number | null
    max_price?: number | null
    min_surface?: number | null
    regions?: PreferencesCreateregionsInput | string[]
    tags?: PreferencesCreatetagsInput | string[]
    user_id: string
  }

  export type PreferencesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    property_type?: PreferencesUpdateproperty_typeInput | string[]
    listing_type?: NullableStringFieldUpdateOperationsInput | string | null
    min_price?: NullableFloatFieldUpdateOperationsInput | number | null
    max_price?: NullableFloatFieldUpdateOperationsInput | number | null
    min_surface?: NullableFloatFieldUpdateOperationsInput | number | null
    regions?: PreferencesUpdateregionsInput | string[]
    tags?: PreferencesUpdatetagsInput | string[]
  }

  export type PreferencesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    property_type?: PreferencesUpdateproperty_typeInput | string[]
    listing_type?: NullableStringFieldUpdateOperationsInput | string | null
    min_price?: NullableFloatFieldUpdateOperationsInput | number | null
    max_price?: NullableFloatFieldUpdateOperationsInput | number | null
    min_surface?: NullableFloatFieldUpdateOperationsInput | number | null
    regions?: PreferencesUpdateregionsInput | string[]
    tags?: PreferencesUpdatetagsInput | string[]
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type ApartmentCreateInput = {
    id?: string
    title: string
    description?: string | null
    address: string
    region: string
    city?: string | null
    postal_code?: string | null
    country?: string
    latitude?: number | null
    longitude?: number | null
    property_type?: $Enums.PropertyType
    listing_type?: $Enums.ListingType
    price: number
    surface: number
    rooms: number
    tags?: ApartmentCreatetagsInput | string[]
    availability?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    owner: UserCreateNestedOneWithoutOwned_apartmentsInput
    pictures?: PictureCreateNestedManyWithoutApartmentInput
    favorites?: FavoriteCreateNestedManyWithoutApartmentInput
    viewedBy?: ViewedApartmentCreateNestedManyWithoutApartmentInput
    swipes?: SwipeCreateNestedManyWithoutApartmentInput
    matches?: MatchCreateNestedManyWithoutApartmentInput
    requests?: RequestCreateNestedManyWithoutApartmentInput
  }

  export type ApartmentUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    address: string
    region: string
    city?: string | null
    postal_code?: string | null
    country?: string
    latitude?: number | null
    longitude?: number | null
    property_type?: $Enums.PropertyType
    listing_type?: $Enums.ListingType
    price: number
    surface: number
    rooms: number
    tags?: ApartmentCreatetagsInput | string[]
    availability?: boolean
    owner_id: string
    created_at?: Date | string
    updated_at?: Date | string
    pictures?: PictureUncheckedCreateNestedManyWithoutApartmentInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutApartmentInput
    viewedBy?: ViewedApartmentUncheckedCreateNestedManyWithoutApartmentInput
    swipes?: SwipeUncheckedCreateNestedManyWithoutApartmentInput
    matches?: MatchUncheckedCreateNestedManyWithoutApartmentInput
    requests?: RequestUncheckedCreateNestedManyWithoutApartmentInput
  }

  export type ApartmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    property_type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    listing_type?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    price?: FloatFieldUpdateOperationsInput | number
    surface?: FloatFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    tags?: ApartmentUpdatetagsInput | string[]
    availability?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwned_apartmentsNestedInput
    pictures?: PictureUpdateManyWithoutApartmentNestedInput
    favorites?: FavoriteUpdateManyWithoutApartmentNestedInput
    viewedBy?: ViewedApartmentUpdateManyWithoutApartmentNestedInput
    swipes?: SwipeUpdateManyWithoutApartmentNestedInput
    matches?: MatchUpdateManyWithoutApartmentNestedInput
    requests?: RequestUpdateManyWithoutApartmentNestedInput
  }

  export type ApartmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    property_type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    listing_type?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    price?: FloatFieldUpdateOperationsInput | number
    surface?: FloatFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    tags?: ApartmentUpdatetagsInput | string[]
    availability?: BoolFieldUpdateOperationsInput | boolean
    owner_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pictures?: PictureUncheckedUpdateManyWithoutApartmentNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutApartmentNestedInput
    viewedBy?: ViewedApartmentUncheckedUpdateManyWithoutApartmentNestedInput
    swipes?: SwipeUncheckedUpdateManyWithoutApartmentNestedInput
    matches?: MatchUncheckedUpdateManyWithoutApartmentNestedInput
    requests?: RequestUncheckedUpdateManyWithoutApartmentNestedInput
  }

  export type ApartmentCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    address: string
    region: string
    city?: string | null
    postal_code?: string | null
    country?: string
    latitude?: number | null
    longitude?: number | null
    property_type?: $Enums.PropertyType
    listing_type?: $Enums.ListingType
    price: number
    surface: number
    rooms: number
    tags?: ApartmentCreatetagsInput | string[]
    availability?: boolean
    owner_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ApartmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    property_type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    listing_type?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    price?: FloatFieldUpdateOperationsInput | number
    surface?: FloatFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    tags?: ApartmentUpdatetagsInput | string[]
    availability?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApartmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    property_type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    listing_type?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    price?: FloatFieldUpdateOperationsInput | number
    surface?: FloatFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    tags?: ApartmentUpdatetagsInput | string[]
    availability?: BoolFieldUpdateOperationsInput | boolean
    owner_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestCreateInput = {
    id?: string
    status?: $Enums.RequestStatus
    message?: string | null
    visit_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    apartment: ApartmentCreateNestedOneWithoutRequestsInput
    user: UserCreateNestedOneWithoutRequestsInput
    documents?: RequestDocumentCreateNestedManyWithoutRequestInput
  }

  export type RequestUncheckedCreateInput = {
    id?: string
    apartment_id: string
    user_id: string
    status?: $Enums.RequestStatus
    message?: string | null
    visit_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    documents?: RequestDocumentUncheckedCreateNestedManyWithoutRequestInput
  }

  export type RequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    visit_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    apartment?: ApartmentUpdateOneRequiredWithoutRequestsNestedInput
    user?: UserUpdateOneRequiredWithoutRequestsNestedInput
    documents?: RequestDocumentUpdateManyWithoutRequestNestedInput
  }

  export type RequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    apartment_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    visit_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: RequestDocumentUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type RequestCreateManyInput = {
    id?: string
    apartment_id: string
    user_id: string
    status?: $Enums.RequestStatus
    message?: string | null
    visit_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    visit_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    apartment_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    visit_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SwipeCreateInput = {
    id?: string
    direction: $Enums.SwipeDirection
    created_at?: Date | string
    user: UserCreateNestedOneWithoutSwipesInput
    apartment: ApartmentCreateNestedOneWithoutSwipesInput
  }

  export type SwipeUncheckedCreateInput = {
    id?: string
    user_id: string
    apartment_id: string
    direction: $Enums.SwipeDirection
    created_at?: Date | string
  }

  export type SwipeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    direction?: EnumSwipeDirectionFieldUpdateOperationsInput | $Enums.SwipeDirection
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSwipesNestedInput
    apartment?: ApartmentUpdateOneRequiredWithoutSwipesNestedInput
  }

  export type SwipeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    apartment_id?: StringFieldUpdateOperationsInput | string
    direction?: EnumSwipeDirectionFieldUpdateOperationsInput | $Enums.SwipeDirection
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SwipeCreateManyInput = {
    id?: string
    user_id: string
    apartment_id: string
    direction: $Enums.SwipeDirection
    created_at?: Date | string
  }

  export type SwipeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    direction?: EnumSwipeDirectionFieldUpdateOperationsInput | $Enums.SwipeDirection
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SwipeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    apartment_id?: StringFieldUpdateOperationsInput | string
    direction?: EnumSwipeDirectionFieldUpdateOperationsInput | $Enums.SwipeDirection
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchCreateInput = {
    id?: string
    created_at?: Date | string
    user: UserCreateNestedOneWithoutMatchesInput
    apartment: ApartmentCreateNestedOneWithoutMatchesInput
    messages?: MessageCreateNestedManyWithoutMatchInput
  }

  export type MatchUncheckedCreateInput = {
    id?: string
    user_id: string
    apartment_id: string
    created_at?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutMatchInput
  }

  export type MatchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMatchesNestedInput
    apartment?: ApartmentUpdateOneRequiredWithoutMatchesNestedInput
    messages?: MessageUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    apartment_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type MatchCreateManyInput = {
    id?: string
    user_id: string
    apartment_id: string
    created_at?: Date | string
  }

  export type MatchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    apartment_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    id?: string
    content: string
    created_at?: Date | string
    match: MatchCreateNestedOneWithoutMessagesInput
    sender: UserCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    content: string
    match_id: string
    sender_id: string
    created_at?: Date | string
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    match?: MatchUpdateOneRequiredWithoutMessagesNestedInput
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    match_id?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyInput = {
    id?: string
    content: string
    match_id: string
    sender_id: string
    created_at?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    match_id?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestDocumentCreateInput = {
    id?: string
    name: string
    url: string
    uploaded_at?: Date | string
    request: RequestCreateNestedOneWithoutDocumentsInput
  }

  export type RequestDocumentUncheckedCreateInput = {
    id?: string
    name: string
    url: string
    uploaded_at?: Date | string
    request_id: string
  }

  export type RequestDocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    request?: RequestUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type RequestDocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    request_id?: StringFieldUpdateOperationsInput | string
  }

  export type RequestDocumentCreateManyInput = {
    id?: string
    name: string
    url: string
    uploaded_at?: Date | string
    request_id: string
  }

  export type RequestDocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestDocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    request_id?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProfileNullableScalarRelationFilter = {
    is?: ProfileWhereInput | null
    isNot?: ProfileWhereInput | null
  }

  export type PictureListRelationFilter = {
    every?: PictureWhereInput
    some?: PictureWhereInput
    none?: PictureWhereInput
  }

  export type FavoriteListRelationFilter = {
    every?: FavoriteWhereInput
    some?: FavoriteWhereInput
    none?: FavoriteWhereInput
  }

  export type ViewedApartmentListRelationFilter = {
    every?: ViewedApartmentWhereInput
    some?: ViewedApartmentWhereInput
    none?: ViewedApartmentWhereInput
  }

  export type SwipeListRelationFilter = {
    every?: SwipeWhereInput
    some?: SwipeWhereInput
    none?: SwipeWhereInput
  }

  export type MatchListRelationFilter = {
    every?: MatchWhereInput
    some?: MatchWhereInput
    none?: MatchWhereInput
  }

  export type RequestListRelationFilter = {
    every?: RequestWhereInput
    some?: RequestWhereInput
    none?: RequestWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type ApartmentListRelationFilter = {
    every?: ApartmentWhereInput
    some?: ApartmentWhereInput
    none?: ApartmentWhereInput
  }

  export type PreferencesNullableScalarRelationFilter = {
    is?: PreferencesWhereInput | null
    isNot?: PreferencesWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PictureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FavoriteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ViewedApartmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SwipeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApartmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    avatar?: SortOrder
    email_notifications?: SortOrder
    company_name?: SortOrder
    siret?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    avatar?: SortOrder
    email_notifications?: SortOrder
    company_name?: SortOrder
    siret?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    avatar?: SortOrder
    email_notifications?: SortOrder
    company_name?: SortOrder
    siret?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    bio?: SortOrder
    job?: SortOrder
    income?: SortOrder
    guarantors?: SortOrder
    user_id?: SortOrder
  }

  export type ProfileAvgOrderByAggregateInput = {
    income?: SortOrder
    guarantors?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    bio?: SortOrder
    job?: SortOrder
    income?: SortOrder
    guarantors?: SortOrder
    user_id?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    bio?: SortOrder
    job?: SortOrder
    income?: SortOrder
    guarantors?: SortOrder
    user_id?: SortOrder
  }

  export type ProfileSumOrderByAggregateInput = {
    income?: SortOrder
    guarantors?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumPictureTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PictureType | EnumPictureTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PictureType[] | ListEnumPictureTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PictureType[] | ListEnumPictureTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPictureTypeFilter<$PrismaModel> | $Enums.PictureType
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ApartmentNullableScalarRelationFilter = {
    is?: ApartmentWhereInput | null
    isNot?: ApartmentWhereInput | null
  }

  export type PictureCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    uploaded_at?: SortOrder
    user_id?: SortOrder
    apartment_id?: SortOrder
  }

  export type PictureMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    uploaded_at?: SortOrder
    user_id?: SortOrder
    apartment_id?: SortOrder
  }

  export type PictureMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    uploaded_at?: SortOrder
    user_id?: SortOrder
    apartment_id?: SortOrder
  }

  export type EnumPictureTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PictureType | EnumPictureTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PictureType[] | ListEnumPictureTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PictureType[] | ListEnumPictureTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPictureTypeWithAggregatesFilter<$PrismaModel> | $Enums.PictureType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPictureTypeFilter<$PrismaModel>
    _max?: NestedEnumPictureTypeFilter<$PrismaModel>
  }

  export type ApartmentScalarRelationFilter = {
    is?: ApartmentWhereInput
    isNot?: ApartmentWhereInput
  }

  export type FavoriteUser_idApartment_idCompoundUniqueInput = {
    user_id: string
    apartment_id: string
  }

  export type FavoriteCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    apartment_id?: SortOrder
  }

  export type FavoriteMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    apartment_id?: SortOrder
  }

  export type FavoriteMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    apartment_id?: SortOrder
  }

  export type ViewedApartmentCountOrderByAggregateInput = {
    id?: SortOrder
    viewed_at?: SortOrder
    user_id?: SortOrder
    apartment_id?: SortOrder
  }

  export type ViewedApartmentMaxOrderByAggregateInput = {
    id?: SortOrder
    viewed_at?: SortOrder
    user_id?: SortOrder
    apartment_id?: SortOrder
  }

  export type ViewedApartmentMinOrderByAggregateInput = {
    id?: SortOrder
    viewed_at?: SortOrder
    user_id?: SortOrder
    apartment_id?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type PreferencesCountOrderByAggregateInput = {
    id?: SortOrder
    property_type?: SortOrder
    listing_type?: SortOrder
    min_price?: SortOrder
    max_price?: SortOrder
    min_surface?: SortOrder
    regions?: SortOrder
    tags?: SortOrder
    user_id?: SortOrder
  }

  export type PreferencesAvgOrderByAggregateInput = {
    min_price?: SortOrder
    max_price?: SortOrder
    min_surface?: SortOrder
  }

  export type PreferencesMaxOrderByAggregateInput = {
    id?: SortOrder
    listing_type?: SortOrder
    min_price?: SortOrder
    max_price?: SortOrder
    min_surface?: SortOrder
    user_id?: SortOrder
  }

  export type PreferencesMinOrderByAggregateInput = {
    id?: SortOrder
    listing_type?: SortOrder
    min_price?: SortOrder
    max_price?: SortOrder
    min_surface?: SortOrder
    user_id?: SortOrder
  }

  export type PreferencesSumOrderByAggregateInput = {
    min_price?: SortOrder
    max_price?: SortOrder
    min_surface?: SortOrder
  }

  export type EnumPropertyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyType | EnumPropertyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyTypeFilter<$PrismaModel> | $Enums.PropertyType
  }

  export type EnumListingTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingType | EnumListingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ListingType[] | ListEnumListingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingType[] | ListEnumListingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumListingTypeFilter<$PrismaModel> | $Enums.ListingType
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ApartmentCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    address?: SortOrder
    region?: SortOrder
    city?: SortOrder
    postal_code?: SortOrder
    country?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    property_type?: SortOrder
    listing_type?: SortOrder
    price?: SortOrder
    surface?: SortOrder
    rooms?: SortOrder
    tags?: SortOrder
    availability?: SortOrder
    owner_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ApartmentAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    price?: SortOrder
    surface?: SortOrder
    rooms?: SortOrder
  }

  export type ApartmentMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    address?: SortOrder
    region?: SortOrder
    city?: SortOrder
    postal_code?: SortOrder
    country?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    property_type?: SortOrder
    listing_type?: SortOrder
    price?: SortOrder
    surface?: SortOrder
    rooms?: SortOrder
    availability?: SortOrder
    owner_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ApartmentMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    address?: SortOrder
    region?: SortOrder
    city?: SortOrder
    postal_code?: SortOrder
    country?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    property_type?: SortOrder
    listing_type?: SortOrder
    price?: SortOrder
    surface?: SortOrder
    rooms?: SortOrder
    availability?: SortOrder
    owner_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ApartmentSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    price?: SortOrder
    surface?: SortOrder
    rooms?: SortOrder
  }

  export type EnumPropertyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyType | EnumPropertyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyTypeWithAggregatesFilter<$PrismaModel> | $Enums.PropertyType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPropertyTypeFilter<$PrismaModel>
    _max?: NestedEnumPropertyTypeFilter<$PrismaModel>
  }

  export type EnumListingTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingType | EnumListingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ListingType[] | ListEnumListingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingType[] | ListEnumListingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumListingTypeWithAggregatesFilter<$PrismaModel> | $Enums.ListingType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumListingTypeFilter<$PrismaModel>
    _max?: NestedEnumListingTypeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type RequestDocumentListRelationFilter = {
    every?: RequestDocumentWhereInput
    some?: RequestDocumentWhereInput
    none?: RequestDocumentWhereInput
  }

  export type RequestDocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RequestApartment_idUser_idCompoundUniqueInput = {
    apartment_id: string
    user_id: string
  }

  export type RequestCountOrderByAggregateInput = {
    id?: SortOrder
    apartment_id?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
    message?: SortOrder
    visit_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RequestMaxOrderByAggregateInput = {
    id?: SortOrder
    apartment_id?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
    message?: SortOrder
    visit_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RequestMinOrderByAggregateInput = {
    id?: SortOrder
    apartment_id?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
    message?: SortOrder
    visit_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumSwipeDirectionFilter<$PrismaModel = never> = {
    equals?: $Enums.SwipeDirection | EnumSwipeDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.SwipeDirection[] | ListEnumSwipeDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.SwipeDirection[] | ListEnumSwipeDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumSwipeDirectionFilter<$PrismaModel> | $Enums.SwipeDirection
  }

  export type SwipeUser_idApartment_idCompoundUniqueInput = {
    user_id: string
    apartment_id: string
  }

  export type SwipeCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    apartment_id?: SortOrder
    direction?: SortOrder
    created_at?: SortOrder
  }

  export type SwipeMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    apartment_id?: SortOrder
    direction?: SortOrder
    created_at?: SortOrder
  }

  export type SwipeMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    apartment_id?: SortOrder
    direction?: SortOrder
    created_at?: SortOrder
  }

  export type EnumSwipeDirectionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SwipeDirection | EnumSwipeDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.SwipeDirection[] | ListEnumSwipeDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.SwipeDirection[] | ListEnumSwipeDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumSwipeDirectionWithAggregatesFilter<$PrismaModel> | $Enums.SwipeDirection
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSwipeDirectionFilter<$PrismaModel>
    _max?: NestedEnumSwipeDirectionFilter<$PrismaModel>
  }

  export type MatchUser_idApartment_idCompoundUniqueInput = {
    user_id: string
    apartment_id: string
  }

  export type MatchCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    apartment_id?: SortOrder
    created_at?: SortOrder
  }

  export type MatchMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    apartment_id?: SortOrder
    created_at?: SortOrder
  }

  export type MatchMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    apartment_id?: SortOrder
    created_at?: SortOrder
  }

  export type MatchScalarRelationFilter = {
    is?: MatchWhereInput
    isNot?: MatchWhereInput
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    match_id?: SortOrder
    sender_id?: SortOrder
    created_at?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    match_id?: SortOrder
    sender_id?: SortOrder
    created_at?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    match_id?: SortOrder
    sender_id?: SortOrder
    created_at?: SortOrder
  }

  export type RequestScalarRelationFilter = {
    is?: RequestWhereInput
    isNot?: RequestWhereInput
  }

  export type RequestDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    uploaded_at?: SortOrder
    request_id?: SortOrder
  }

  export type RequestDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    uploaded_at?: SortOrder
    request_id?: SortOrder
  }

  export type RequestDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    uploaded_at?: SortOrder
    request_id?: SortOrder
  }

  export type ProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type PictureCreateNestedManyWithoutUserInput = {
    create?: XOR<PictureCreateWithoutUserInput, PictureUncheckedCreateWithoutUserInput> | PictureCreateWithoutUserInput[] | PictureUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PictureCreateOrConnectWithoutUserInput | PictureCreateOrConnectWithoutUserInput[]
    createMany?: PictureCreateManyUserInputEnvelope
    connect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
  }

  export type FavoriteCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type ViewedApartmentCreateNestedManyWithoutUserInput = {
    create?: XOR<ViewedApartmentCreateWithoutUserInput, ViewedApartmentUncheckedCreateWithoutUserInput> | ViewedApartmentCreateWithoutUserInput[] | ViewedApartmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ViewedApartmentCreateOrConnectWithoutUserInput | ViewedApartmentCreateOrConnectWithoutUserInput[]
    createMany?: ViewedApartmentCreateManyUserInputEnvelope
    connect?: ViewedApartmentWhereUniqueInput | ViewedApartmentWhereUniqueInput[]
  }

  export type SwipeCreateNestedManyWithoutUserInput = {
    create?: XOR<SwipeCreateWithoutUserInput, SwipeUncheckedCreateWithoutUserInput> | SwipeCreateWithoutUserInput[] | SwipeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SwipeCreateOrConnectWithoutUserInput | SwipeCreateOrConnectWithoutUserInput[]
    createMany?: SwipeCreateManyUserInputEnvelope
    connect?: SwipeWhereUniqueInput | SwipeWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutUserInput = {
    create?: XOR<MatchCreateWithoutUserInput, MatchUncheckedCreateWithoutUserInput> | MatchCreateWithoutUserInput[] | MatchUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutUserInput | MatchCreateOrConnectWithoutUserInput[]
    createMany?: MatchCreateManyUserInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type RequestCreateNestedManyWithoutUserInput = {
    create?: XOR<RequestCreateWithoutUserInput, RequestUncheckedCreateWithoutUserInput> | RequestCreateWithoutUserInput[] | RequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutUserInput | RequestCreateOrConnectWithoutUserInput[]
    createMany?: RequestCreateManyUserInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ApartmentCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ApartmentCreateWithoutOwnerInput, ApartmentUncheckedCreateWithoutOwnerInput> | ApartmentCreateWithoutOwnerInput[] | ApartmentUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ApartmentCreateOrConnectWithoutOwnerInput | ApartmentCreateOrConnectWithoutOwnerInput[]
    createMany?: ApartmentCreateManyOwnerInputEnvelope
    connect?: ApartmentWhereUniqueInput | ApartmentWhereUniqueInput[]
  }

  export type PreferencesCreateNestedOneWithoutUserInput = {
    create?: XOR<PreferencesCreateWithoutUserInput, PreferencesUncheckedCreateWithoutUserInput>
    connectOrCreate?: PreferencesCreateOrConnectWithoutUserInput
    connect?: PreferencesWhereUniqueInput
  }

  export type ProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type PictureUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PictureCreateWithoutUserInput, PictureUncheckedCreateWithoutUserInput> | PictureCreateWithoutUserInput[] | PictureUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PictureCreateOrConnectWithoutUserInput | PictureCreateOrConnectWithoutUserInput[]
    createMany?: PictureCreateManyUserInputEnvelope
    connect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
  }

  export type FavoriteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type ViewedApartmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ViewedApartmentCreateWithoutUserInput, ViewedApartmentUncheckedCreateWithoutUserInput> | ViewedApartmentCreateWithoutUserInput[] | ViewedApartmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ViewedApartmentCreateOrConnectWithoutUserInput | ViewedApartmentCreateOrConnectWithoutUserInput[]
    createMany?: ViewedApartmentCreateManyUserInputEnvelope
    connect?: ViewedApartmentWhereUniqueInput | ViewedApartmentWhereUniqueInput[]
  }

  export type SwipeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SwipeCreateWithoutUserInput, SwipeUncheckedCreateWithoutUserInput> | SwipeCreateWithoutUserInput[] | SwipeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SwipeCreateOrConnectWithoutUserInput | SwipeCreateOrConnectWithoutUserInput[]
    createMany?: SwipeCreateManyUserInputEnvelope
    connect?: SwipeWhereUniqueInput | SwipeWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MatchCreateWithoutUserInput, MatchUncheckedCreateWithoutUserInput> | MatchCreateWithoutUserInput[] | MatchUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutUserInput | MatchCreateOrConnectWithoutUserInput[]
    createMany?: MatchCreateManyUserInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type RequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RequestCreateWithoutUserInput, RequestUncheckedCreateWithoutUserInput> | RequestCreateWithoutUserInput[] | RequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutUserInput | RequestCreateOrConnectWithoutUserInput[]
    createMany?: RequestCreateManyUserInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ApartmentUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ApartmentCreateWithoutOwnerInput, ApartmentUncheckedCreateWithoutOwnerInput> | ApartmentCreateWithoutOwnerInput[] | ApartmentUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ApartmentCreateOrConnectWithoutOwnerInput | ApartmentCreateOrConnectWithoutOwnerInput[]
    createMany?: ApartmentCreateManyOwnerInputEnvelope
    connect?: ApartmentWhereUniqueInput | ApartmentWhereUniqueInput[]
  }

  export type PreferencesUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PreferencesCreateWithoutUserInput, PreferencesUncheckedCreateWithoutUserInput>
    connectOrCreate?: PreferencesCreateOrConnectWithoutUserInput
    connect?: PreferencesWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type PictureUpdateManyWithoutUserNestedInput = {
    create?: XOR<PictureCreateWithoutUserInput, PictureUncheckedCreateWithoutUserInput> | PictureCreateWithoutUserInput[] | PictureUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PictureCreateOrConnectWithoutUserInput | PictureCreateOrConnectWithoutUserInput[]
    upsert?: PictureUpsertWithWhereUniqueWithoutUserInput | PictureUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PictureCreateManyUserInputEnvelope
    set?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    disconnect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    delete?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    connect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    update?: PictureUpdateWithWhereUniqueWithoutUserInput | PictureUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PictureUpdateManyWithWhereWithoutUserInput | PictureUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PictureScalarWhereInput | PictureScalarWhereInput[]
  }

  export type FavoriteUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutUserInput | FavoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutUserInput | FavoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutUserInput | FavoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type ViewedApartmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<ViewedApartmentCreateWithoutUserInput, ViewedApartmentUncheckedCreateWithoutUserInput> | ViewedApartmentCreateWithoutUserInput[] | ViewedApartmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ViewedApartmentCreateOrConnectWithoutUserInput | ViewedApartmentCreateOrConnectWithoutUserInput[]
    upsert?: ViewedApartmentUpsertWithWhereUniqueWithoutUserInput | ViewedApartmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ViewedApartmentCreateManyUserInputEnvelope
    set?: ViewedApartmentWhereUniqueInput | ViewedApartmentWhereUniqueInput[]
    disconnect?: ViewedApartmentWhereUniqueInput | ViewedApartmentWhereUniqueInput[]
    delete?: ViewedApartmentWhereUniqueInput | ViewedApartmentWhereUniqueInput[]
    connect?: ViewedApartmentWhereUniqueInput | ViewedApartmentWhereUniqueInput[]
    update?: ViewedApartmentUpdateWithWhereUniqueWithoutUserInput | ViewedApartmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ViewedApartmentUpdateManyWithWhereWithoutUserInput | ViewedApartmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ViewedApartmentScalarWhereInput | ViewedApartmentScalarWhereInput[]
  }

  export type SwipeUpdateManyWithoutUserNestedInput = {
    create?: XOR<SwipeCreateWithoutUserInput, SwipeUncheckedCreateWithoutUserInput> | SwipeCreateWithoutUserInput[] | SwipeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SwipeCreateOrConnectWithoutUserInput | SwipeCreateOrConnectWithoutUserInput[]
    upsert?: SwipeUpsertWithWhereUniqueWithoutUserInput | SwipeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SwipeCreateManyUserInputEnvelope
    set?: SwipeWhereUniqueInput | SwipeWhereUniqueInput[]
    disconnect?: SwipeWhereUniqueInput | SwipeWhereUniqueInput[]
    delete?: SwipeWhereUniqueInput | SwipeWhereUniqueInput[]
    connect?: SwipeWhereUniqueInput | SwipeWhereUniqueInput[]
    update?: SwipeUpdateWithWhereUniqueWithoutUserInput | SwipeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SwipeUpdateManyWithWhereWithoutUserInput | SwipeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SwipeScalarWhereInput | SwipeScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutUserNestedInput = {
    create?: XOR<MatchCreateWithoutUserInput, MatchUncheckedCreateWithoutUserInput> | MatchCreateWithoutUserInput[] | MatchUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutUserInput | MatchCreateOrConnectWithoutUserInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutUserInput | MatchUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MatchCreateManyUserInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutUserInput | MatchUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutUserInput | MatchUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type RequestUpdateManyWithoutUserNestedInput = {
    create?: XOR<RequestCreateWithoutUserInput, RequestUncheckedCreateWithoutUserInput> | RequestCreateWithoutUserInput[] | RequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutUserInput | RequestCreateOrConnectWithoutUserInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutUserInput | RequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RequestCreateManyUserInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutUserInput | RequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutUserInput | RequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ApartmentUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ApartmentCreateWithoutOwnerInput, ApartmentUncheckedCreateWithoutOwnerInput> | ApartmentCreateWithoutOwnerInput[] | ApartmentUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ApartmentCreateOrConnectWithoutOwnerInput | ApartmentCreateOrConnectWithoutOwnerInput[]
    upsert?: ApartmentUpsertWithWhereUniqueWithoutOwnerInput | ApartmentUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ApartmentCreateManyOwnerInputEnvelope
    set?: ApartmentWhereUniqueInput | ApartmentWhereUniqueInput[]
    disconnect?: ApartmentWhereUniqueInput | ApartmentWhereUniqueInput[]
    delete?: ApartmentWhereUniqueInput | ApartmentWhereUniqueInput[]
    connect?: ApartmentWhereUniqueInput | ApartmentWhereUniqueInput[]
    update?: ApartmentUpdateWithWhereUniqueWithoutOwnerInput | ApartmentUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ApartmentUpdateManyWithWhereWithoutOwnerInput | ApartmentUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ApartmentScalarWhereInput | ApartmentScalarWhereInput[]
  }

  export type PreferencesUpdateOneWithoutUserNestedInput = {
    create?: XOR<PreferencesCreateWithoutUserInput, PreferencesUncheckedCreateWithoutUserInput>
    connectOrCreate?: PreferencesCreateOrConnectWithoutUserInput
    upsert?: PreferencesUpsertWithoutUserInput
    disconnect?: PreferencesWhereInput | boolean
    delete?: PreferencesWhereInput | boolean
    connect?: PreferencesWhereUniqueInput
    update?: XOR<XOR<PreferencesUpdateToOneWithWhereWithoutUserInput, PreferencesUpdateWithoutUserInput>, PreferencesUncheckedUpdateWithoutUserInput>
  }

  export type ProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type PictureUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PictureCreateWithoutUserInput, PictureUncheckedCreateWithoutUserInput> | PictureCreateWithoutUserInput[] | PictureUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PictureCreateOrConnectWithoutUserInput | PictureCreateOrConnectWithoutUserInput[]
    upsert?: PictureUpsertWithWhereUniqueWithoutUserInput | PictureUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PictureCreateManyUserInputEnvelope
    set?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    disconnect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    delete?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    connect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    update?: PictureUpdateWithWhereUniqueWithoutUserInput | PictureUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PictureUpdateManyWithWhereWithoutUserInput | PictureUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PictureScalarWhereInput | PictureScalarWhereInput[]
  }

  export type FavoriteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutUserInput | FavoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutUserInput | FavoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutUserInput | FavoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type ViewedApartmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ViewedApartmentCreateWithoutUserInput, ViewedApartmentUncheckedCreateWithoutUserInput> | ViewedApartmentCreateWithoutUserInput[] | ViewedApartmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ViewedApartmentCreateOrConnectWithoutUserInput | ViewedApartmentCreateOrConnectWithoutUserInput[]
    upsert?: ViewedApartmentUpsertWithWhereUniqueWithoutUserInput | ViewedApartmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ViewedApartmentCreateManyUserInputEnvelope
    set?: ViewedApartmentWhereUniqueInput | ViewedApartmentWhereUniqueInput[]
    disconnect?: ViewedApartmentWhereUniqueInput | ViewedApartmentWhereUniqueInput[]
    delete?: ViewedApartmentWhereUniqueInput | ViewedApartmentWhereUniqueInput[]
    connect?: ViewedApartmentWhereUniqueInput | ViewedApartmentWhereUniqueInput[]
    update?: ViewedApartmentUpdateWithWhereUniqueWithoutUserInput | ViewedApartmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ViewedApartmentUpdateManyWithWhereWithoutUserInput | ViewedApartmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ViewedApartmentScalarWhereInput | ViewedApartmentScalarWhereInput[]
  }

  export type SwipeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SwipeCreateWithoutUserInput, SwipeUncheckedCreateWithoutUserInput> | SwipeCreateWithoutUserInput[] | SwipeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SwipeCreateOrConnectWithoutUserInput | SwipeCreateOrConnectWithoutUserInput[]
    upsert?: SwipeUpsertWithWhereUniqueWithoutUserInput | SwipeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SwipeCreateManyUserInputEnvelope
    set?: SwipeWhereUniqueInput | SwipeWhereUniqueInput[]
    disconnect?: SwipeWhereUniqueInput | SwipeWhereUniqueInput[]
    delete?: SwipeWhereUniqueInput | SwipeWhereUniqueInput[]
    connect?: SwipeWhereUniqueInput | SwipeWhereUniqueInput[]
    update?: SwipeUpdateWithWhereUniqueWithoutUserInput | SwipeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SwipeUpdateManyWithWhereWithoutUserInput | SwipeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SwipeScalarWhereInput | SwipeScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MatchCreateWithoutUserInput, MatchUncheckedCreateWithoutUserInput> | MatchCreateWithoutUserInput[] | MatchUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutUserInput | MatchCreateOrConnectWithoutUserInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutUserInput | MatchUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MatchCreateManyUserInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutUserInput | MatchUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutUserInput | MatchUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type RequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RequestCreateWithoutUserInput, RequestUncheckedCreateWithoutUserInput> | RequestCreateWithoutUserInput[] | RequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutUserInput | RequestCreateOrConnectWithoutUserInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutUserInput | RequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RequestCreateManyUserInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutUserInput | RequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutUserInput | RequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ApartmentUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ApartmentCreateWithoutOwnerInput, ApartmentUncheckedCreateWithoutOwnerInput> | ApartmentCreateWithoutOwnerInput[] | ApartmentUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ApartmentCreateOrConnectWithoutOwnerInput | ApartmentCreateOrConnectWithoutOwnerInput[]
    upsert?: ApartmentUpsertWithWhereUniqueWithoutOwnerInput | ApartmentUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ApartmentCreateManyOwnerInputEnvelope
    set?: ApartmentWhereUniqueInput | ApartmentWhereUniqueInput[]
    disconnect?: ApartmentWhereUniqueInput | ApartmentWhereUniqueInput[]
    delete?: ApartmentWhereUniqueInput | ApartmentWhereUniqueInput[]
    connect?: ApartmentWhereUniqueInput | ApartmentWhereUniqueInput[]
    update?: ApartmentUpdateWithWhereUniqueWithoutOwnerInput | ApartmentUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ApartmentUpdateManyWithWhereWithoutOwnerInput | ApartmentUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ApartmentScalarWhereInput | ApartmentScalarWhereInput[]
  }

  export type PreferencesUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PreferencesCreateWithoutUserInput, PreferencesUncheckedCreateWithoutUserInput>
    connectOrCreate?: PreferencesCreateOrConnectWithoutUserInput
    upsert?: PreferencesUpsertWithoutUserInput
    disconnect?: PreferencesWhereInput | boolean
    delete?: PreferencesWhereInput | boolean
    connect?: PreferencesWhereUniqueInput
    update?: XOR<XOR<PreferencesUpdateToOneWithWhereWithoutUserInput, PreferencesUpdateWithoutUserInput>, PreferencesUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserCreateNestedOneWithoutPicturesInput = {
    create?: XOR<UserCreateWithoutPicturesInput, UserUncheckedCreateWithoutPicturesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPicturesInput
    connect?: UserWhereUniqueInput
  }

  export type ApartmentCreateNestedOneWithoutPicturesInput = {
    create?: XOR<ApartmentCreateWithoutPicturesInput, ApartmentUncheckedCreateWithoutPicturesInput>
    connectOrCreate?: ApartmentCreateOrConnectWithoutPicturesInput
    connect?: ApartmentWhereUniqueInput
  }

  export type EnumPictureTypeFieldUpdateOperationsInput = {
    set?: $Enums.PictureType
  }

  export type UserUpdateOneWithoutPicturesNestedInput = {
    create?: XOR<UserCreateWithoutPicturesInput, UserUncheckedCreateWithoutPicturesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPicturesInput
    upsert?: UserUpsertWithoutPicturesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPicturesInput, UserUpdateWithoutPicturesInput>, UserUncheckedUpdateWithoutPicturesInput>
  }

  export type ApartmentUpdateOneWithoutPicturesNestedInput = {
    create?: XOR<ApartmentCreateWithoutPicturesInput, ApartmentUncheckedCreateWithoutPicturesInput>
    connectOrCreate?: ApartmentCreateOrConnectWithoutPicturesInput
    upsert?: ApartmentUpsertWithoutPicturesInput
    disconnect?: ApartmentWhereInput | boolean
    delete?: ApartmentWhereInput | boolean
    connect?: ApartmentWhereUniqueInput
    update?: XOR<XOR<ApartmentUpdateToOneWithWhereWithoutPicturesInput, ApartmentUpdateWithoutPicturesInput>, ApartmentUncheckedUpdateWithoutPicturesInput>
  }

  export type UserCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput
    connect?: UserWhereUniqueInput
  }

  export type ApartmentCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<ApartmentCreateWithoutFavoritesInput, ApartmentUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: ApartmentCreateOrConnectWithoutFavoritesInput
    connect?: ApartmentWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput
    upsert?: UserUpsertWithoutFavoritesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavoritesInput, UserUpdateWithoutFavoritesInput>, UserUncheckedUpdateWithoutFavoritesInput>
  }

  export type ApartmentUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<ApartmentCreateWithoutFavoritesInput, ApartmentUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: ApartmentCreateOrConnectWithoutFavoritesInput
    upsert?: ApartmentUpsertWithoutFavoritesInput
    connect?: ApartmentWhereUniqueInput
    update?: XOR<XOR<ApartmentUpdateToOneWithWhereWithoutFavoritesInput, ApartmentUpdateWithoutFavoritesInput>, ApartmentUncheckedUpdateWithoutFavoritesInput>
  }

  export type UserCreateNestedOneWithoutViewed_apartmentsInput = {
    create?: XOR<UserCreateWithoutViewed_apartmentsInput, UserUncheckedCreateWithoutViewed_apartmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutViewed_apartmentsInput
    connect?: UserWhereUniqueInput
  }

  export type ApartmentCreateNestedOneWithoutViewedByInput = {
    create?: XOR<ApartmentCreateWithoutViewedByInput, ApartmentUncheckedCreateWithoutViewedByInput>
    connectOrCreate?: ApartmentCreateOrConnectWithoutViewedByInput
    connect?: ApartmentWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutViewed_apartmentsNestedInput = {
    create?: XOR<UserCreateWithoutViewed_apartmentsInput, UserUncheckedCreateWithoutViewed_apartmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutViewed_apartmentsInput
    upsert?: UserUpsertWithoutViewed_apartmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutViewed_apartmentsInput, UserUpdateWithoutViewed_apartmentsInput>, UserUncheckedUpdateWithoutViewed_apartmentsInput>
  }

  export type ApartmentUpdateOneRequiredWithoutViewedByNestedInput = {
    create?: XOR<ApartmentCreateWithoutViewedByInput, ApartmentUncheckedCreateWithoutViewedByInput>
    connectOrCreate?: ApartmentCreateOrConnectWithoutViewedByInput
    upsert?: ApartmentUpsertWithoutViewedByInput
    connect?: ApartmentWhereUniqueInput
    update?: XOR<XOR<ApartmentUpdateToOneWithWhereWithoutViewedByInput, ApartmentUpdateWithoutViewedByInput>, ApartmentUncheckedUpdateWithoutViewedByInput>
  }

  export type PreferencesCreateproperty_typeInput = {
    set: string[]
  }

  export type PreferencesCreateregionsInput = {
    set: string[]
  }

  export type PreferencesCreatetagsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutPreferencesInput = {
    create?: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreferencesInput
    connect?: UserWhereUniqueInput
  }

  export type PreferencesUpdateproperty_typeInput = {
    set?: string[]
    push?: string | string[]
  }

  export type PreferencesUpdateregionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type PreferencesUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutPreferencesNestedInput = {
    create?: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreferencesInput
    upsert?: UserUpsertWithoutPreferencesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPreferencesInput, UserUpdateWithoutPreferencesInput>, UserUncheckedUpdateWithoutPreferencesInput>
  }

  export type ApartmentCreatetagsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutOwned_apartmentsInput = {
    create?: XOR<UserCreateWithoutOwned_apartmentsInput, UserUncheckedCreateWithoutOwned_apartmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwned_apartmentsInput
    connect?: UserWhereUniqueInput
  }

  export type PictureCreateNestedManyWithoutApartmentInput = {
    create?: XOR<PictureCreateWithoutApartmentInput, PictureUncheckedCreateWithoutApartmentInput> | PictureCreateWithoutApartmentInput[] | PictureUncheckedCreateWithoutApartmentInput[]
    connectOrCreate?: PictureCreateOrConnectWithoutApartmentInput | PictureCreateOrConnectWithoutApartmentInput[]
    createMany?: PictureCreateManyApartmentInputEnvelope
    connect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
  }

  export type FavoriteCreateNestedManyWithoutApartmentInput = {
    create?: XOR<FavoriteCreateWithoutApartmentInput, FavoriteUncheckedCreateWithoutApartmentInput> | FavoriteCreateWithoutApartmentInput[] | FavoriteUncheckedCreateWithoutApartmentInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutApartmentInput | FavoriteCreateOrConnectWithoutApartmentInput[]
    createMany?: FavoriteCreateManyApartmentInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type ViewedApartmentCreateNestedManyWithoutApartmentInput = {
    create?: XOR<ViewedApartmentCreateWithoutApartmentInput, ViewedApartmentUncheckedCreateWithoutApartmentInput> | ViewedApartmentCreateWithoutApartmentInput[] | ViewedApartmentUncheckedCreateWithoutApartmentInput[]
    connectOrCreate?: ViewedApartmentCreateOrConnectWithoutApartmentInput | ViewedApartmentCreateOrConnectWithoutApartmentInput[]
    createMany?: ViewedApartmentCreateManyApartmentInputEnvelope
    connect?: ViewedApartmentWhereUniqueInput | ViewedApartmentWhereUniqueInput[]
  }

  export type SwipeCreateNestedManyWithoutApartmentInput = {
    create?: XOR<SwipeCreateWithoutApartmentInput, SwipeUncheckedCreateWithoutApartmentInput> | SwipeCreateWithoutApartmentInput[] | SwipeUncheckedCreateWithoutApartmentInput[]
    connectOrCreate?: SwipeCreateOrConnectWithoutApartmentInput | SwipeCreateOrConnectWithoutApartmentInput[]
    createMany?: SwipeCreateManyApartmentInputEnvelope
    connect?: SwipeWhereUniqueInput | SwipeWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutApartmentInput = {
    create?: XOR<MatchCreateWithoutApartmentInput, MatchUncheckedCreateWithoutApartmentInput> | MatchCreateWithoutApartmentInput[] | MatchUncheckedCreateWithoutApartmentInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutApartmentInput | MatchCreateOrConnectWithoutApartmentInput[]
    createMany?: MatchCreateManyApartmentInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type RequestCreateNestedManyWithoutApartmentInput = {
    create?: XOR<RequestCreateWithoutApartmentInput, RequestUncheckedCreateWithoutApartmentInput> | RequestCreateWithoutApartmentInput[] | RequestUncheckedCreateWithoutApartmentInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutApartmentInput | RequestCreateOrConnectWithoutApartmentInput[]
    createMany?: RequestCreateManyApartmentInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type PictureUncheckedCreateNestedManyWithoutApartmentInput = {
    create?: XOR<PictureCreateWithoutApartmentInput, PictureUncheckedCreateWithoutApartmentInput> | PictureCreateWithoutApartmentInput[] | PictureUncheckedCreateWithoutApartmentInput[]
    connectOrCreate?: PictureCreateOrConnectWithoutApartmentInput | PictureCreateOrConnectWithoutApartmentInput[]
    createMany?: PictureCreateManyApartmentInputEnvelope
    connect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
  }

  export type FavoriteUncheckedCreateNestedManyWithoutApartmentInput = {
    create?: XOR<FavoriteCreateWithoutApartmentInput, FavoriteUncheckedCreateWithoutApartmentInput> | FavoriteCreateWithoutApartmentInput[] | FavoriteUncheckedCreateWithoutApartmentInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutApartmentInput | FavoriteCreateOrConnectWithoutApartmentInput[]
    createMany?: FavoriteCreateManyApartmentInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type ViewedApartmentUncheckedCreateNestedManyWithoutApartmentInput = {
    create?: XOR<ViewedApartmentCreateWithoutApartmentInput, ViewedApartmentUncheckedCreateWithoutApartmentInput> | ViewedApartmentCreateWithoutApartmentInput[] | ViewedApartmentUncheckedCreateWithoutApartmentInput[]
    connectOrCreate?: ViewedApartmentCreateOrConnectWithoutApartmentInput | ViewedApartmentCreateOrConnectWithoutApartmentInput[]
    createMany?: ViewedApartmentCreateManyApartmentInputEnvelope
    connect?: ViewedApartmentWhereUniqueInput | ViewedApartmentWhereUniqueInput[]
  }

  export type SwipeUncheckedCreateNestedManyWithoutApartmentInput = {
    create?: XOR<SwipeCreateWithoutApartmentInput, SwipeUncheckedCreateWithoutApartmentInput> | SwipeCreateWithoutApartmentInput[] | SwipeUncheckedCreateWithoutApartmentInput[]
    connectOrCreate?: SwipeCreateOrConnectWithoutApartmentInput | SwipeCreateOrConnectWithoutApartmentInput[]
    createMany?: SwipeCreateManyApartmentInputEnvelope
    connect?: SwipeWhereUniqueInput | SwipeWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutApartmentInput = {
    create?: XOR<MatchCreateWithoutApartmentInput, MatchUncheckedCreateWithoutApartmentInput> | MatchCreateWithoutApartmentInput[] | MatchUncheckedCreateWithoutApartmentInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutApartmentInput | MatchCreateOrConnectWithoutApartmentInput[]
    createMany?: MatchCreateManyApartmentInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type RequestUncheckedCreateNestedManyWithoutApartmentInput = {
    create?: XOR<RequestCreateWithoutApartmentInput, RequestUncheckedCreateWithoutApartmentInput> | RequestCreateWithoutApartmentInput[] | RequestUncheckedCreateWithoutApartmentInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutApartmentInput | RequestCreateOrConnectWithoutApartmentInput[]
    createMany?: RequestCreateManyApartmentInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type EnumPropertyTypeFieldUpdateOperationsInput = {
    set?: $Enums.PropertyType
  }

  export type EnumListingTypeFieldUpdateOperationsInput = {
    set?: $Enums.ListingType
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ApartmentUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutOwned_apartmentsNestedInput = {
    create?: XOR<UserCreateWithoutOwned_apartmentsInput, UserUncheckedCreateWithoutOwned_apartmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwned_apartmentsInput
    upsert?: UserUpsertWithoutOwned_apartmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOwned_apartmentsInput, UserUpdateWithoutOwned_apartmentsInput>, UserUncheckedUpdateWithoutOwned_apartmentsInput>
  }

  export type PictureUpdateManyWithoutApartmentNestedInput = {
    create?: XOR<PictureCreateWithoutApartmentInput, PictureUncheckedCreateWithoutApartmentInput> | PictureCreateWithoutApartmentInput[] | PictureUncheckedCreateWithoutApartmentInput[]
    connectOrCreate?: PictureCreateOrConnectWithoutApartmentInput | PictureCreateOrConnectWithoutApartmentInput[]
    upsert?: PictureUpsertWithWhereUniqueWithoutApartmentInput | PictureUpsertWithWhereUniqueWithoutApartmentInput[]
    createMany?: PictureCreateManyApartmentInputEnvelope
    set?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    disconnect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    delete?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    connect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    update?: PictureUpdateWithWhereUniqueWithoutApartmentInput | PictureUpdateWithWhereUniqueWithoutApartmentInput[]
    updateMany?: PictureUpdateManyWithWhereWithoutApartmentInput | PictureUpdateManyWithWhereWithoutApartmentInput[]
    deleteMany?: PictureScalarWhereInput | PictureScalarWhereInput[]
  }

  export type FavoriteUpdateManyWithoutApartmentNestedInput = {
    create?: XOR<FavoriteCreateWithoutApartmentInput, FavoriteUncheckedCreateWithoutApartmentInput> | FavoriteCreateWithoutApartmentInput[] | FavoriteUncheckedCreateWithoutApartmentInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutApartmentInput | FavoriteCreateOrConnectWithoutApartmentInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutApartmentInput | FavoriteUpsertWithWhereUniqueWithoutApartmentInput[]
    createMany?: FavoriteCreateManyApartmentInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutApartmentInput | FavoriteUpdateWithWhereUniqueWithoutApartmentInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutApartmentInput | FavoriteUpdateManyWithWhereWithoutApartmentInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type ViewedApartmentUpdateManyWithoutApartmentNestedInput = {
    create?: XOR<ViewedApartmentCreateWithoutApartmentInput, ViewedApartmentUncheckedCreateWithoutApartmentInput> | ViewedApartmentCreateWithoutApartmentInput[] | ViewedApartmentUncheckedCreateWithoutApartmentInput[]
    connectOrCreate?: ViewedApartmentCreateOrConnectWithoutApartmentInput | ViewedApartmentCreateOrConnectWithoutApartmentInput[]
    upsert?: ViewedApartmentUpsertWithWhereUniqueWithoutApartmentInput | ViewedApartmentUpsertWithWhereUniqueWithoutApartmentInput[]
    createMany?: ViewedApartmentCreateManyApartmentInputEnvelope
    set?: ViewedApartmentWhereUniqueInput | ViewedApartmentWhereUniqueInput[]
    disconnect?: ViewedApartmentWhereUniqueInput | ViewedApartmentWhereUniqueInput[]
    delete?: ViewedApartmentWhereUniqueInput | ViewedApartmentWhereUniqueInput[]
    connect?: ViewedApartmentWhereUniqueInput | ViewedApartmentWhereUniqueInput[]
    update?: ViewedApartmentUpdateWithWhereUniqueWithoutApartmentInput | ViewedApartmentUpdateWithWhereUniqueWithoutApartmentInput[]
    updateMany?: ViewedApartmentUpdateManyWithWhereWithoutApartmentInput | ViewedApartmentUpdateManyWithWhereWithoutApartmentInput[]
    deleteMany?: ViewedApartmentScalarWhereInput | ViewedApartmentScalarWhereInput[]
  }

  export type SwipeUpdateManyWithoutApartmentNestedInput = {
    create?: XOR<SwipeCreateWithoutApartmentInput, SwipeUncheckedCreateWithoutApartmentInput> | SwipeCreateWithoutApartmentInput[] | SwipeUncheckedCreateWithoutApartmentInput[]
    connectOrCreate?: SwipeCreateOrConnectWithoutApartmentInput | SwipeCreateOrConnectWithoutApartmentInput[]
    upsert?: SwipeUpsertWithWhereUniqueWithoutApartmentInput | SwipeUpsertWithWhereUniqueWithoutApartmentInput[]
    createMany?: SwipeCreateManyApartmentInputEnvelope
    set?: SwipeWhereUniqueInput | SwipeWhereUniqueInput[]
    disconnect?: SwipeWhereUniqueInput | SwipeWhereUniqueInput[]
    delete?: SwipeWhereUniqueInput | SwipeWhereUniqueInput[]
    connect?: SwipeWhereUniqueInput | SwipeWhereUniqueInput[]
    update?: SwipeUpdateWithWhereUniqueWithoutApartmentInput | SwipeUpdateWithWhereUniqueWithoutApartmentInput[]
    updateMany?: SwipeUpdateManyWithWhereWithoutApartmentInput | SwipeUpdateManyWithWhereWithoutApartmentInput[]
    deleteMany?: SwipeScalarWhereInput | SwipeScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutApartmentNestedInput = {
    create?: XOR<MatchCreateWithoutApartmentInput, MatchUncheckedCreateWithoutApartmentInput> | MatchCreateWithoutApartmentInput[] | MatchUncheckedCreateWithoutApartmentInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutApartmentInput | MatchCreateOrConnectWithoutApartmentInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutApartmentInput | MatchUpsertWithWhereUniqueWithoutApartmentInput[]
    createMany?: MatchCreateManyApartmentInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutApartmentInput | MatchUpdateWithWhereUniqueWithoutApartmentInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutApartmentInput | MatchUpdateManyWithWhereWithoutApartmentInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type RequestUpdateManyWithoutApartmentNestedInput = {
    create?: XOR<RequestCreateWithoutApartmentInput, RequestUncheckedCreateWithoutApartmentInput> | RequestCreateWithoutApartmentInput[] | RequestUncheckedCreateWithoutApartmentInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutApartmentInput | RequestCreateOrConnectWithoutApartmentInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutApartmentInput | RequestUpsertWithWhereUniqueWithoutApartmentInput[]
    createMany?: RequestCreateManyApartmentInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutApartmentInput | RequestUpdateWithWhereUniqueWithoutApartmentInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutApartmentInput | RequestUpdateManyWithWhereWithoutApartmentInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type PictureUncheckedUpdateManyWithoutApartmentNestedInput = {
    create?: XOR<PictureCreateWithoutApartmentInput, PictureUncheckedCreateWithoutApartmentInput> | PictureCreateWithoutApartmentInput[] | PictureUncheckedCreateWithoutApartmentInput[]
    connectOrCreate?: PictureCreateOrConnectWithoutApartmentInput | PictureCreateOrConnectWithoutApartmentInput[]
    upsert?: PictureUpsertWithWhereUniqueWithoutApartmentInput | PictureUpsertWithWhereUniqueWithoutApartmentInput[]
    createMany?: PictureCreateManyApartmentInputEnvelope
    set?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    disconnect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    delete?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    connect?: PictureWhereUniqueInput | PictureWhereUniqueInput[]
    update?: PictureUpdateWithWhereUniqueWithoutApartmentInput | PictureUpdateWithWhereUniqueWithoutApartmentInput[]
    updateMany?: PictureUpdateManyWithWhereWithoutApartmentInput | PictureUpdateManyWithWhereWithoutApartmentInput[]
    deleteMany?: PictureScalarWhereInput | PictureScalarWhereInput[]
  }

  export type FavoriteUncheckedUpdateManyWithoutApartmentNestedInput = {
    create?: XOR<FavoriteCreateWithoutApartmentInput, FavoriteUncheckedCreateWithoutApartmentInput> | FavoriteCreateWithoutApartmentInput[] | FavoriteUncheckedCreateWithoutApartmentInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutApartmentInput | FavoriteCreateOrConnectWithoutApartmentInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutApartmentInput | FavoriteUpsertWithWhereUniqueWithoutApartmentInput[]
    createMany?: FavoriteCreateManyApartmentInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutApartmentInput | FavoriteUpdateWithWhereUniqueWithoutApartmentInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutApartmentInput | FavoriteUpdateManyWithWhereWithoutApartmentInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type ViewedApartmentUncheckedUpdateManyWithoutApartmentNestedInput = {
    create?: XOR<ViewedApartmentCreateWithoutApartmentInput, ViewedApartmentUncheckedCreateWithoutApartmentInput> | ViewedApartmentCreateWithoutApartmentInput[] | ViewedApartmentUncheckedCreateWithoutApartmentInput[]
    connectOrCreate?: ViewedApartmentCreateOrConnectWithoutApartmentInput | ViewedApartmentCreateOrConnectWithoutApartmentInput[]
    upsert?: ViewedApartmentUpsertWithWhereUniqueWithoutApartmentInput | ViewedApartmentUpsertWithWhereUniqueWithoutApartmentInput[]
    createMany?: ViewedApartmentCreateManyApartmentInputEnvelope
    set?: ViewedApartmentWhereUniqueInput | ViewedApartmentWhereUniqueInput[]
    disconnect?: ViewedApartmentWhereUniqueInput | ViewedApartmentWhereUniqueInput[]
    delete?: ViewedApartmentWhereUniqueInput | ViewedApartmentWhereUniqueInput[]
    connect?: ViewedApartmentWhereUniqueInput | ViewedApartmentWhereUniqueInput[]
    update?: ViewedApartmentUpdateWithWhereUniqueWithoutApartmentInput | ViewedApartmentUpdateWithWhereUniqueWithoutApartmentInput[]
    updateMany?: ViewedApartmentUpdateManyWithWhereWithoutApartmentInput | ViewedApartmentUpdateManyWithWhereWithoutApartmentInput[]
    deleteMany?: ViewedApartmentScalarWhereInput | ViewedApartmentScalarWhereInput[]
  }

  export type SwipeUncheckedUpdateManyWithoutApartmentNestedInput = {
    create?: XOR<SwipeCreateWithoutApartmentInput, SwipeUncheckedCreateWithoutApartmentInput> | SwipeCreateWithoutApartmentInput[] | SwipeUncheckedCreateWithoutApartmentInput[]
    connectOrCreate?: SwipeCreateOrConnectWithoutApartmentInput | SwipeCreateOrConnectWithoutApartmentInput[]
    upsert?: SwipeUpsertWithWhereUniqueWithoutApartmentInput | SwipeUpsertWithWhereUniqueWithoutApartmentInput[]
    createMany?: SwipeCreateManyApartmentInputEnvelope
    set?: SwipeWhereUniqueInput | SwipeWhereUniqueInput[]
    disconnect?: SwipeWhereUniqueInput | SwipeWhereUniqueInput[]
    delete?: SwipeWhereUniqueInput | SwipeWhereUniqueInput[]
    connect?: SwipeWhereUniqueInput | SwipeWhereUniqueInput[]
    update?: SwipeUpdateWithWhereUniqueWithoutApartmentInput | SwipeUpdateWithWhereUniqueWithoutApartmentInput[]
    updateMany?: SwipeUpdateManyWithWhereWithoutApartmentInput | SwipeUpdateManyWithWhereWithoutApartmentInput[]
    deleteMany?: SwipeScalarWhereInput | SwipeScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutApartmentNestedInput = {
    create?: XOR<MatchCreateWithoutApartmentInput, MatchUncheckedCreateWithoutApartmentInput> | MatchCreateWithoutApartmentInput[] | MatchUncheckedCreateWithoutApartmentInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutApartmentInput | MatchCreateOrConnectWithoutApartmentInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutApartmentInput | MatchUpsertWithWhereUniqueWithoutApartmentInput[]
    createMany?: MatchCreateManyApartmentInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutApartmentInput | MatchUpdateWithWhereUniqueWithoutApartmentInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutApartmentInput | MatchUpdateManyWithWhereWithoutApartmentInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type RequestUncheckedUpdateManyWithoutApartmentNestedInput = {
    create?: XOR<RequestCreateWithoutApartmentInput, RequestUncheckedCreateWithoutApartmentInput> | RequestCreateWithoutApartmentInput[] | RequestUncheckedCreateWithoutApartmentInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutApartmentInput | RequestCreateOrConnectWithoutApartmentInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutApartmentInput | RequestUpsertWithWhereUniqueWithoutApartmentInput[]
    createMany?: RequestCreateManyApartmentInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutApartmentInput | RequestUpdateWithWhereUniqueWithoutApartmentInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutApartmentInput | RequestUpdateManyWithWhereWithoutApartmentInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type ApartmentCreateNestedOneWithoutRequestsInput = {
    create?: XOR<ApartmentCreateWithoutRequestsInput, ApartmentUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: ApartmentCreateOrConnectWithoutRequestsInput
    connect?: ApartmentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRequestsInput = {
    create?: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type RequestDocumentCreateNestedManyWithoutRequestInput = {
    create?: XOR<RequestDocumentCreateWithoutRequestInput, RequestDocumentUncheckedCreateWithoutRequestInput> | RequestDocumentCreateWithoutRequestInput[] | RequestDocumentUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: RequestDocumentCreateOrConnectWithoutRequestInput | RequestDocumentCreateOrConnectWithoutRequestInput[]
    createMany?: RequestDocumentCreateManyRequestInputEnvelope
    connect?: RequestDocumentWhereUniqueInput | RequestDocumentWhereUniqueInput[]
  }

  export type RequestDocumentUncheckedCreateNestedManyWithoutRequestInput = {
    create?: XOR<RequestDocumentCreateWithoutRequestInput, RequestDocumentUncheckedCreateWithoutRequestInput> | RequestDocumentCreateWithoutRequestInput[] | RequestDocumentUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: RequestDocumentCreateOrConnectWithoutRequestInput | RequestDocumentCreateOrConnectWithoutRequestInput[]
    createMany?: RequestDocumentCreateManyRequestInputEnvelope
    connect?: RequestDocumentWhereUniqueInput | RequestDocumentWhereUniqueInput[]
  }

  export type EnumRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.RequestStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ApartmentUpdateOneRequiredWithoutRequestsNestedInput = {
    create?: XOR<ApartmentCreateWithoutRequestsInput, ApartmentUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: ApartmentCreateOrConnectWithoutRequestsInput
    upsert?: ApartmentUpsertWithoutRequestsInput
    connect?: ApartmentWhereUniqueInput
    update?: XOR<XOR<ApartmentUpdateToOneWithWhereWithoutRequestsInput, ApartmentUpdateWithoutRequestsInput>, ApartmentUncheckedUpdateWithoutRequestsInput>
  }

  export type UserUpdateOneRequiredWithoutRequestsNestedInput = {
    create?: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestsInput
    upsert?: UserUpsertWithoutRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRequestsInput, UserUpdateWithoutRequestsInput>, UserUncheckedUpdateWithoutRequestsInput>
  }

  export type RequestDocumentUpdateManyWithoutRequestNestedInput = {
    create?: XOR<RequestDocumentCreateWithoutRequestInput, RequestDocumentUncheckedCreateWithoutRequestInput> | RequestDocumentCreateWithoutRequestInput[] | RequestDocumentUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: RequestDocumentCreateOrConnectWithoutRequestInput | RequestDocumentCreateOrConnectWithoutRequestInput[]
    upsert?: RequestDocumentUpsertWithWhereUniqueWithoutRequestInput | RequestDocumentUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: RequestDocumentCreateManyRequestInputEnvelope
    set?: RequestDocumentWhereUniqueInput | RequestDocumentWhereUniqueInput[]
    disconnect?: RequestDocumentWhereUniqueInput | RequestDocumentWhereUniqueInput[]
    delete?: RequestDocumentWhereUniqueInput | RequestDocumentWhereUniqueInput[]
    connect?: RequestDocumentWhereUniqueInput | RequestDocumentWhereUniqueInput[]
    update?: RequestDocumentUpdateWithWhereUniqueWithoutRequestInput | RequestDocumentUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: RequestDocumentUpdateManyWithWhereWithoutRequestInput | RequestDocumentUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: RequestDocumentScalarWhereInput | RequestDocumentScalarWhereInput[]
  }

  export type RequestDocumentUncheckedUpdateManyWithoutRequestNestedInput = {
    create?: XOR<RequestDocumentCreateWithoutRequestInput, RequestDocumentUncheckedCreateWithoutRequestInput> | RequestDocumentCreateWithoutRequestInput[] | RequestDocumentUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: RequestDocumentCreateOrConnectWithoutRequestInput | RequestDocumentCreateOrConnectWithoutRequestInput[]
    upsert?: RequestDocumentUpsertWithWhereUniqueWithoutRequestInput | RequestDocumentUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: RequestDocumentCreateManyRequestInputEnvelope
    set?: RequestDocumentWhereUniqueInput | RequestDocumentWhereUniqueInput[]
    disconnect?: RequestDocumentWhereUniqueInput | RequestDocumentWhereUniqueInput[]
    delete?: RequestDocumentWhereUniqueInput | RequestDocumentWhereUniqueInput[]
    connect?: RequestDocumentWhereUniqueInput | RequestDocumentWhereUniqueInput[]
    update?: RequestDocumentUpdateWithWhereUniqueWithoutRequestInput | RequestDocumentUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: RequestDocumentUpdateManyWithWhereWithoutRequestInput | RequestDocumentUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: RequestDocumentScalarWhereInput | RequestDocumentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSwipesInput = {
    create?: XOR<UserCreateWithoutSwipesInput, UserUncheckedCreateWithoutSwipesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSwipesInput
    connect?: UserWhereUniqueInput
  }

  export type ApartmentCreateNestedOneWithoutSwipesInput = {
    create?: XOR<ApartmentCreateWithoutSwipesInput, ApartmentUncheckedCreateWithoutSwipesInput>
    connectOrCreate?: ApartmentCreateOrConnectWithoutSwipesInput
    connect?: ApartmentWhereUniqueInput
  }

  export type EnumSwipeDirectionFieldUpdateOperationsInput = {
    set?: $Enums.SwipeDirection
  }

  export type UserUpdateOneRequiredWithoutSwipesNestedInput = {
    create?: XOR<UserCreateWithoutSwipesInput, UserUncheckedCreateWithoutSwipesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSwipesInput
    upsert?: UserUpsertWithoutSwipesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSwipesInput, UserUpdateWithoutSwipesInput>, UserUncheckedUpdateWithoutSwipesInput>
  }

  export type ApartmentUpdateOneRequiredWithoutSwipesNestedInput = {
    create?: XOR<ApartmentCreateWithoutSwipesInput, ApartmentUncheckedCreateWithoutSwipesInput>
    connectOrCreate?: ApartmentCreateOrConnectWithoutSwipesInput
    upsert?: ApartmentUpsertWithoutSwipesInput
    connect?: ApartmentWhereUniqueInput
    update?: XOR<XOR<ApartmentUpdateToOneWithWhereWithoutSwipesInput, ApartmentUpdateWithoutSwipesInput>, ApartmentUncheckedUpdateWithoutSwipesInput>
  }

  export type UserCreateNestedOneWithoutMatchesInput = {
    create?: XOR<UserCreateWithoutMatchesInput, UserUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesInput
    connect?: UserWhereUniqueInput
  }

  export type ApartmentCreateNestedOneWithoutMatchesInput = {
    create?: XOR<ApartmentCreateWithoutMatchesInput, ApartmentUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: ApartmentCreateOrConnectWithoutMatchesInput
    connect?: ApartmentWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutMatchInput = {
    create?: XOR<MessageCreateWithoutMatchInput, MessageUncheckedCreateWithoutMatchInput> | MessageCreateWithoutMatchInput[] | MessageUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutMatchInput | MessageCreateOrConnectWithoutMatchInput[]
    createMany?: MessageCreateManyMatchInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutMatchInput = {
    create?: XOR<MessageCreateWithoutMatchInput, MessageUncheckedCreateWithoutMatchInput> | MessageCreateWithoutMatchInput[] | MessageUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutMatchInput | MessageCreateOrConnectWithoutMatchInput[]
    createMany?: MessageCreateManyMatchInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutMatchesNestedInput = {
    create?: XOR<UserCreateWithoutMatchesInput, UserUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesInput
    upsert?: UserUpsertWithoutMatchesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMatchesInput, UserUpdateWithoutMatchesInput>, UserUncheckedUpdateWithoutMatchesInput>
  }

  export type ApartmentUpdateOneRequiredWithoutMatchesNestedInput = {
    create?: XOR<ApartmentCreateWithoutMatchesInput, ApartmentUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: ApartmentCreateOrConnectWithoutMatchesInput
    upsert?: ApartmentUpsertWithoutMatchesInput
    connect?: ApartmentWhereUniqueInput
    update?: XOR<XOR<ApartmentUpdateToOneWithWhereWithoutMatchesInput, ApartmentUpdateWithoutMatchesInput>, ApartmentUncheckedUpdateWithoutMatchesInput>
  }

  export type MessageUpdateManyWithoutMatchNestedInput = {
    create?: XOR<MessageCreateWithoutMatchInput, MessageUncheckedCreateWithoutMatchInput> | MessageCreateWithoutMatchInput[] | MessageUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutMatchInput | MessageCreateOrConnectWithoutMatchInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutMatchInput | MessageUpsertWithWhereUniqueWithoutMatchInput[]
    createMany?: MessageCreateManyMatchInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutMatchInput | MessageUpdateWithWhereUniqueWithoutMatchInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutMatchInput | MessageUpdateManyWithWhereWithoutMatchInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutMatchNestedInput = {
    create?: XOR<MessageCreateWithoutMatchInput, MessageUncheckedCreateWithoutMatchInput> | MessageCreateWithoutMatchInput[] | MessageUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutMatchInput | MessageCreateOrConnectWithoutMatchInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutMatchInput | MessageUpsertWithWhereUniqueWithoutMatchInput[]
    createMany?: MessageCreateManyMatchInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutMatchInput | MessageUpdateWithWhereUniqueWithoutMatchInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutMatchInput | MessageUpdateManyWithWhereWithoutMatchInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MatchCreateNestedOneWithoutMessagesInput = {
    create?: XOR<MatchCreateWithoutMessagesInput, MatchUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: MatchCreateOrConnectWithoutMessagesInput
    connect?: MatchWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMessagesInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type MatchUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<MatchCreateWithoutMessagesInput, MatchUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: MatchCreateOrConnectWithoutMessagesInput
    upsert?: MatchUpsertWithoutMessagesInput
    connect?: MatchWhereUniqueInput
    update?: XOR<XOR<MatchUpdateToOneWithWhereWithoutMessagesInput, MatchUpdateWithoutMessagesInput>, MatchUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    upsert?: UserUpsertWithoutMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesInput, UserUpdateWithoutMessagesInput>, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type RequestCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<RequestCreateWithoutDocumentsInput, RequestUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: RequestCreateOrConnectWithoutDocumentsInput
    connect?: RequestWhereUniqueInput
  }

  export type RequestUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<RequestCreateWithoutDocumentsInput, RequestUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: RequestCreateOrConnectWithoutDocumentsInput
    upsert?: RequestUpsertWithoutDocumentsInput
    connect?: RequestWhereUniqueInput
    update?: XOR<XOR<RequestUpdateToOneWithWhereWithoutDocumentsInput, RequestUpdateWithoutDocumentsInput>, RequestUncheckedUpdateWithoutDocumentsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedEnumPictureTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PictureType | EnumPictureTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PictureType[] | ListEnumPictureTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PictureType[] | ListEnumPictureTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPictureTypeFilter<$PrismaModel> | $Enums.PictureType
  }

  export type NestedEnumPictureTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PictureType | EnumPictureTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PictureType[] | ListEnumPictureTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PictureType[] | ListEnumPictureTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPictureTypeWithAggregatesFilter<$PrismaModel> | $Enums.PictureType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPictureTypeFilter<$PrismaModel>
    _max?: NestedEnumPictureTypeFilter<$PrismaModel>
  }

  export type NestedEnumPropertyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyType | EnumPropertyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyTypeFilter<$PrismaModel> | $Enums.PropertyType
  }

  export type NestedEnumListingTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingType | EnumListingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ListingType[] | ListEnumListingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingType[] | ListEnumListingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumListingTypeFilter<$PrismaModel> | $Enums.ListingType
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumPropertyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyType | EnumPropertyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyTypeWithAggregatesFilter<$PrismaModel> | $Enums.PropertyType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPropertyTypeFilter<$PrismaModel>
    _max?: NestedEnumPropertyTypeFilter<$PrismaModel>
  }

  export type NestedEnumListingTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingType | EnumListingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ListingType[] | ListEnumListingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingType[] | ListEnumListingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumListingTypeWithAggregatesFilter<$PrismaModel> | $Enums.ListingType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumListingTypeFilter<$PrismaModel>
    _max?: NestedEnumListingTypeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumSwipeDirectionFilter<$PrismaModel = never> = {
    equals?: $Enums.SwipeDirection | EnumSwipeDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.SwipeDirection[] | ListEnumSwipeDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.SwipeDirection[] | ListEnumSwipeDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumSwipeDirectionFilter<$PrismaModel> | $Enums.SwipeDirection
  }

  export type NestedEnumSwipeDirectionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SwipeDirection | EnumSwipeDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.SwipeDirection[] | ListEnumSwipeDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.SwipeDirection[] | ListEnumSwipeDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumSwipeDirectionWithAggregatesFilter<$PrismaModel> | $Enums.SwipeDirection
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSwipeDirectionFilter<$PrismaModel>
    _max?: NestedEnumSwipeDirectionFilter<$PrismaModel>
  }

  export type ProfileCreateWithoutUserInput = {
    id?: string
    bio?: string | null
    job?: string | null
    income?: number | null
    guarantors?: number | null
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    id?: string
    bio?: string | null
    job?: string | null
    income?: number | null
    guarantors?: number | null
  }

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type PictureCreateWithoutUserInput = {
    id?: string
    url: string
    type: $Enums.PictureType
    uploaded_at?: Date | string
    apartment?: ApartmentCreateNestedOneWithoutPicturesInput
  }

  export type PictureUncheckedCreateWithoutUserInput = {
    id?: string
    url: string
    type: $Enums.PictureType
    uploaded_at?: Date | string
    apartment_id?: string | null
  }

  export type PictureCreateOrConnectWithoutUserInput = {
    where: PictureWhereUniqueInput
    create: XOR<PictureCreateWithoutUserInput, PictureUncheckedCreateWithoutUserInput>
  }

  export type PictureCreateManyUserInputEnvelope = {
    data: PictureCreateManyUserInput | PictureCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FavoriteCreateWithoutUserInput = {
    id?: string
    apartment: ApartmentCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteUncheckedCreateWithoutUserInput = {
    id?: string
    apartment_id: string
  }

  export type FavoriteCreateOrConnectWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    create: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput>
  }

  export type FavoriteCreateManyUserInputEnvelope = {
    data: FavoriteCreateManyUserInput | FavoriteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ViewedApartmentCreateWithoutUserInput = {
    id?: string
    viewed_at?: Date | string
    apartment: ApartmentCreateNestedOneWithoutViewedByInput
  }

  export type ViewedApartmentUncheckedCreateWithoutUserInput = {
    id?: string
    viewed_at?: Date | string
    apartment_id: string
  }

  export type ViewedApartmentCreateOrConnectWithoutUserInput = {
    where: ViewedApartmentWhereUniqueInput
    create: XOR<ViewedApartmentCreateWithoutUserInput, ViewedApartmentUncheckedCreateWithoutUserInput>
  }

  export type ViewedApartmentCreateManyUserInputEnvelope = {
    data: ViewedApartmentCreateManyUserInput | ViewedApartmentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SwipeCreateWithoutUserInput = {
    id?: string
    direction: $Enums.SwipeDirection
    created_at?: Date | string
    apartment: ApartmentCreateNestedOneWithoutSwipesInput
  }

  export type SwipeUncheckedCreateWithoutUserInput = {
    id?: string
    apartment_id: string
    direction: $Enums.SwipeDirection
    created_at?: Date | string
  }

  export type SwipeCreateOrConnectWithoutUserInput = {
    where: SwipeWhereUniqueInput
    create: XOR<SwipeCreateWithoutUserInput, SwipeUncheckedCreateWithoutUserInput>
  }

  export type SwipeCreateManyUserInputEnvelope = {
    data: SwipeCreateManyUserInput | SwipeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MatchCreateWithoutUserInput = {
    id?: string
    created_at?: Date | string
    apartment: ApartmentCreateNestedOneWithoutMatchesInput
    messages?: MessageCreateNestedManyWithoutMatchInput
  }

  export type MatchUncheckedCreateWithoutUserInput = {
    id?: string
    apartment_id: string
    created_at?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutMatchInput
  }

  export type MatchCreateOrConnectWithoutUserInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutUserInput, MatchUncheckedCreateWithoutUserInput>
  }

  export type MatchCreateManyUserInputEnvelope = {
    data: MatchCreateManyUserInput | MatchCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RequestCreateWithoutUserInput = {
    id?: string
    status?: $Enums.RequestStatus
    message?: string | null
    visit_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    apartment: ApartmentCreateNestedOneWithoutRequestsInput
    documents?: RequestDocumentCreateNestedManyWithoutRequestInput
  }

  export type RequestUncheckedCreateWithoutUserInput = {
    id?: string
    apartment_id: string
    status?: $Enums.RequestStatus
    message?: string | null
    visit_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    documents?: RequestDocumentUncheckedCreateNestedManyWithoutRequestInput
  }

  export type RequestCreateOrConnectWithoutUserInput = {
    where: RequestWhereUniqueInput
    create: XOR<RequestCreateWithoutUserInput, RequestUncheckedCreateWithoutUserInput>
  }

  export type RequestCreateManyUserInputEnvelope = {
    data: RequestCreateManyUserInput | RequestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutSenderInput = {
    id?: string
    content: string
    created_at?: Date | string
    match: MatchCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: string
    content: string
    match_id: string
    created_at?: Date | string
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageCreateManySenderInputEnvelope = {
    data: MessageCreateManySenderInput | MessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type ApartmentCreateWithoutOwnerInput = {
    id?: string
    title: string
    description?: string | null
    address: string
    region: string
    city?: string | null
    postal_code?: string | null
    country?: string
    latitude?: number | null
    longitude?: number | null
    property_type?: $Enums.PropertyType
    listing_type?: $Enums.ListingType
    price: number
    surface: number
    rooms: number
    tags?: ApartmentCreatetagsInput | string[]
    availability?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    pictures?: PictureCreateNestedManyWithoutApartmentInput
    favorites?: FavoriteCreateNestedManyWithoutApartmentInput
    viewedBy?: ViewedApartmentCreateNestedManyWithoutApartmentInput
    swipes?: SwipeCreateNestedManyWithoutApartmentInput
    matches?: MatchCreateNestedManyWithoutApartmentInput
    requests?: RequestCreateNestedManyWithoutApartmentInput
  }

  export type ApartmentUncheckedCreateWithoutOwnerInput = {
    id?: string
    title: string
    description?: string | null
    address: string
    region: string
    city?: string | null
    postal_code?: string | null
    country?: string
    latitude?: number | null
    longitude?: number | null
    property_type?: $Enums.PropertyType
    listing_type?: $Enums.ListingType
    price: number
    surface: number
    rooms: number
    tags?: ApartmentCreatetagsInput | string[]
    availability?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    pictures?: PictureUncheckedCreateNestedManyWithoutApartmentInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutApartmentInput
    viewedBy?: ViewedApartmentUncheckedCreateNestedManyWithoutApartmentInput
    swipes?: SwipeUncheckedCreateNestedManyWithoutApartmentInput
    matches?: MatchUncheckedCreateNestedManyWithoutApartmentInput
    requests?: RequestUncheckedCreateNestedManyWithoutApartmentInput
  }

  export type ApartmentCreateOrConnectWithoutOwnerInput = {
    where: ApartmentWhereUniqueInput
    create: XOR<ApartmentCreateWithoutOwnerInput, ApartmentUncheckedCreateWithoutOwnerInput>
  }

  export type ApartmentCreateManyOwnerInputEnvelope = {
    data: ApartmentCreateManyOwnerInput | ApartmentCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type PreferencesCreateWithoutUserInput = {
    id?: string
    property_type?: PreferencesCreateproperty_typeInput | string[]
    listing_type?: string | null
    min_price?: number | null
    max_price?: number | null
    min_surface?: number | null
    regions?: PreferencesCreateregionsInput | string[]
    tags?: PreferencesCreatetagsInput | string[]
  }

  export type PreferencesUncheckedCreateWithoutUserInput = {
    id?: string
    property_type?: PreferencesCreateproperty_typeInput | string[]
    listing_type?: string | null
    min_price?: number | null
    max_price?: number | null
    min_surface?: number | null
    regions?: PreferencesCreateregionsInput | string[]
    tags?: PreferencesCreatetagsInput | string[]
  }

  export type PreferencesCreateOrConnectWithoutUserInput = {
    where: PreferencesWhereUniqueInput
    create: XOR<PreferencesCreateWithoutUserInput, PreferencesUncheckedCreateWithoutUserInput>
  }

  export type ProfileUpsertWithoutUserInput = {
    update: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    income?: NullableFloatFieldUpdateOperationsInput | number | null
    guarantors?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    income?: NullableFloatFieldUpdateOperationsInput | number | null
    guarantors?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PictureUpsertWithWhereUniqueWithoutUserInput = {
    where: PictureWhereUniqueInput
    update: XOR<PictureUpdateWithoutUserInput, PictureUncheckedUpdateWithoutUserInput>
    create: XOR<PictureCreateWithoutUserInput, PictureUncheckedCreateWithoutUserInput>
  }

  export type PictureUpdateWithWhereUniqueWithoutUserInput = {
    where: PictureWhereUniqueInput
    data: XOR<PictureUpdateWithoutUserInput, PictureUncheckedUpdateWithoutUserInput>
  }

  export type PictureUpdateManyWithWhereWithoutUserInput = {
    where: PictureScalarWhereInput
    data: XOR<PictureUpdateManyMutationInput, PictureUncheckedUpdateManyWithoutUserInput>
  }

  export type PictureScalarWhereInput = {
    AND?: PictureScalarWhereInput | PictureScalarWhereInput[]
    OR?: PictureScalarWhereInput[]
    NOT?: PictureScalarWhereInput | PictureScalarWhereInput[]
    id?: StringFilter<"Picture"> | string
    url?: StringFilter<"Picture"> | string
    type?: EnumPictureTypeFilter<"Picture"> | $Enums.PictureType
    uploaded_at?: DateTimeFilter<"Picture"> | Date | string
    user_id?: StringNullableFilter<"Picture"> | string | null
    apartment_id?: StringNullableFilter<"Picture"> | string | null
  }

  export type FavoriteUpsertWithWhereUniqueWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    update: XOR<FavoriteUpdateWithoutUserInput, FavoriteUncheckedUpdateWithoutUserInput>
    create: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput>
  }

  export type FavoriteUpdateWithWhereUniqueWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    data: XOR<FavoriteUpdateWithoutUserInput, FavoriteUncheckedUpdateWithoutUserInput>
  }

  export type FavoriteUpdateManyWithWhereWithoutUserInput = {
    where: FavoriteScalarWhereInput
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyWithoutUserInput>
  }

  export type FavoriteScalarWhereInput = {
    AND?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
    OR?: FavoriteScalarWhereInput[]
    NOT?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
    id?: StringFilter<"Favorite"> | string
    user_id?: StringFilter<"Favorite"> | string
    apartment_id?: StringFilter<"Favorite"> | string
  }

  export type ViewedApartmentUpsertWithWhereUniqueWithoutUserInput = {
    where: ViewedApartmentWhereUniqueInput
    update: XOR<ViewedApartmentUpdateWithoutUserInput, ViewedApartmentUncheckedUpdateWithoutUserInput>
    create: XOR<ViewedApartmentCreateWithoutUserInput, ViewedApartmentUncheckedCreateWithoutUserInput>
  }

  export type ViewedApartmentUpdateWithWhereUniqueWithoutUserInput = {
    where: ViewedApartmentWhereUniqueInput
    data: XOR<ViewedApartmentUpdateWithoutUserInput, ViewedApartmentUncheckedUpdateWithoutUserInput>
  }

  export type ViewedApartmentUpdateManyWithWhereWithoutUserInput = {
    where: ViewedApartmentScalarWhereInput
    data: XOR<ViewedApartmentUpdateManyMutationInput, ViewedApartmentUncheckedUpdateManyWithoutUserInput>
  }

  export type ViewedApartmentScalarWhereInput = {
    AND?: ViewedApartmentScalarWhereInput | ViewedApartmentScalarWhereInput[]
    OR?: ViewedApartmentScalarWhereInput[]
    NOT?: ViewedApartmentScalarWhereInput | ViewedApartmentScalarWhereInput[]
    id?: StringFilter<"ViewedApartment"> | string
    viewed_at?: DateTimeFilter<"ViewedApartment"> | Date | string
    user_id?: StringFilter<"ViewedApartment"> | string
    apartment_id?: StringFilter<"ViewedApartment"> | string
  }

  export type SwipeUpsertWithWhereUniqueWithoutUserInput = {
    where: SwipeWhereUniqueInput
    update: XOR<SwipeUpdateWithoutUserInput, SwipeUncheckedUpdateWithoutUserInput>
    create: XOR<SwipeCreateWithoutUserInput, SwipeUncheckedCreateWithoutUserInput>
  }

  export type SwipeUpdateWithWhereUniqueWithoutUserInput = {
    where: SwipeWhereUniqueInput
    data: XOR<SwipeUpdateWithoutUserInput, SwipeUncheckedUpdateWithoutUserInput>
  }

  export type SwipeUpdateManyWithWhereWithoutUserInput = {
    where: SwipeScalarWhereInput
    data: XOR<SwipeUpdateManyMutationInput, SwipeUncheckedUpdateManyWithoutUserInput>
  }

  export type SwipeScalarWhereInput = {
    AND?: SwipeScalarWhereInput | SwipeScalarWhereInput[]
    OR?: SwipeScalarWhereInput[]
    NOT?: SwipeScalarWhereInput | SwipeScalarWhereInput[]
    id?: StringFilter<"Swipe"> | string
    user_id?: StringFilter<"Swipe"> | string
    apartment_id?: StringFilter<"Swipe"> | string
    direction?: EnumSwipeDirectionFilter<"Swipe"> | $Enums.SwipeDirection
    created_at?: DateTimeFilter<"Swipe"> | Date | string
  }

  export type MatchUpsertWithWhereUniqueWithoutUserInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutUserInput, MatchUncheckedUpdateWithoutUserInput>
    create: XOR<MatchCreateWithoutUserInput, MatchUncheckedCreateWithoutUserInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutUserInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutUserInput, MatchUncheckedUpdateWithoutUserInput>
  }

  export type MatchUpdateManyWithWhereWithoutUserInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutUserInput>
  }

  export type MatchScalarWhereInput = {
    AND?: MatchScalarWhereInput | MatchScalarWhereInput[]
    OR?: MatchScalarWhereInput[]
    NOT?: MatchScalarWhereInput | MatchScalarWhereInput[]
    id?: StringFilter<"Match"> | string
    user_id?: StringFilter<"Match"> | string
    apartment_id?: StringFilter<"Match"> | string
    created_at?: DateTimeFilter<"Match"> | Date | string
  }

  export type RequestUpsertWithWhereUniqueWithoutUserInput = {
    where: RequestWhereUniqueInput
    update: XOR<RequestUpdateWithoutUserInput, RequestUncheckedUpdateWithoutUserInput>
    create: XOR<RequestCreateWithoutUserInput, RequestUncheckedCreateWithoutUserInput>
  }

  export type RequestUpdateWithWhereUniqueWithoutUserInput = {
    where: RequestWhereUniqueInput
    data: XOR<RequestUpdateWithoutUserInput, RequestUncheckedUpdateWithoutUserInput>
  }

  export type RequestUpdateManyWithWhereWithoutUserInput = {
    where: RequestScalarWhereInput
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyWithoutUserInput>
  }

  export type RequestScalarWhereInput = {
    AND?: RequestScalarWhereInput | RequestScalarWhereInput[]
    OR?: RequestScalarWhereInput[]
    NOT?: RequestScalarWhereInput | RequestScalarWhereInput[]
    id?: StringFilter<"Request"> | string
    apartment_id?: StringFilter<"Request"> | string
    user_id?: StringFilter<"Request"> | string
    status?: EnumRequestStatusFilter<"Request"> | $Enums.RequestStatus
    message?: StringNullableFilter<"Request"> | string | null
    visit_date?: DateTimeNullableFilter<"Request"> | Date | string | null
    created_at?: DateTimeFilter<"Request"> | Date | string
    updated_at?: DateTimeFilter<"Request"> | Date | string
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    match_id?: StringFilter<"Message"> | string
    sender_id?: StringFilter<"Message"> | string
    created_at?: DateTimeFilter<"Message"> | Date | string
  }

  export type ApartmentUpsertWithWhereUniqueWithoutOwnerInput = {
    where: ApartmentWhereUniqueInput
    update: XOR<ApartmentUpdateWithoutOwnerInput, ApartmentUncheckedUpdateWithoutOwnerInput>
    create: XOR<ApartmentCreateWithoutOwnerInput, ApartmentUncheckedCreateWithoutOwnerInput>
  }

  export type ApartmentUpdateWithWhereUniqueWithoutOwnerInput = {
    where: ApartmentWhereUniqueInput
    data: XOR<ApartmentUpdateWithoutOwnerInput, ApartmentUncheckedUpdateWithoutOwnerInput>
  }

  export type ApartmentUpdateManyWithWhereWithoutOwnerInput = {
    where: ApartmentScalarWhereInput
    data: XOR<ApartmentUpdateManyMutationInput, ApartmentUncheckedUpdateManyWithoutOwnerInput>
  }

  export type ApartmentScalarWhereInput = {
    AND?: ApartmentScalarWhereInput | ApartmentScalarWhereInput[]
    OR?: ApartmentScalarWhereInput[]
    NOT?: ApartmentScalarWhereInput | ApartmentScalarWhereInput[]
    id?: StringFilter<"Apartment"> | string
    title?: StringFilter<"Apartment"> | string
    description?: StringNullableFilter<"Apartment"> | string | null
    address?: StringFilter<"Apartment"> | string
    region?: StringFilter<"Apartment"> | string
    city?: StringNullableFilter<"Apartment"> | string | null
    postal_code?: StringNullableFilter<"Apartment"> | string | null
    country?: StringFilter<"Apartment"> | string
    latitude?: FloatNullableFilter<"Apartment"> | number | null
    longitude?: FloatNullableFilter<"Apartment"> | number | null
    property_type?: EnumPropertyTypeFilter<"Apartment"> | $Enums.PropertyType
    listing_type?: EnumListingTypeFilter<"Apartment"> | $Enums.ListingType
    price?: FloatFilter<"Apartment"> | number
    surface?: FloatFilter<"Apartment"> | number
    rooms?: IntFilter<"Apartment"> | number
    tags?: StringNullableListFilter<"Apartment">
    availability?: BoolFilter<"Apartment"> | boolean
    owner_id?: StringFilter<"Apartment"> | string
    created_at?: DateTimeFilter<"Apartment"> | Date | string
    updated_at?: DateTimeFilter<"Apartment"> | Date | string
  }

  export type PreferencesUpsertWithoutUserInput = {
    update: XOR<PreferencesUpdateWithoutUserInput, PreferencesUncheckedUpdateWithoutUserInput>
    create: XOR<PreferencesCreateWithoutUserInput, PreferencesUncheckedCreateWithoutUserInput>
    where?: PreferencesWhereInput
  }

  export type PreferencesUpdateToOneWithWhereWithoutUserInput = {
    where?: PreferencesWhereInput
    data: XOR<PreferencesUpdateWithoutUserInput, PreferencesUncheckedUpdateWithoutUserInput>
  }

  export type PreferencesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    property_type?: PreferencesUpdateproperty_typeInput | string[]
    listing_type?: NullableStringFieldUpdateOperationsInput | string | null
    min_price?: NullableFloatFieldUpdateOperationsInput | number | null
    max_price?: NullableFloatFieldUpdateOperationsInput | number | null
    min_surface?: NullableFloatFieldUpdateOperationsInput | number | null
    regions?: PreferencesUpdateregionsInput | string[]
    tags?: PreferencesUpdatetagsInput | string[]
  }

  export type PreferencesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    property_type?: PreferencesUpdateproperty_typeInput | string[]
    listing_type?: NullableStringFieldUpdateOperationsInput | string | null
    min_price?: NullableFloatFieldUpdateOperationsInput | number | null
    max_price?: NullableFloatFieldUpdateOperationsInput | number | null
    min_surface?: NullableFloatFieldUpdateOperationsInput | number | null
    regions?: PreferencesUpdateregionsInput | string[]
    tags?: PreferencesUpdatetagsInput | string[]
  }

  export type UserCreateWithoutProfileInput = {
    id?: string
    email: string
    password: string
    username: string
    role?: $Enums.Role
    phone?: string | null
    avatar?: string | null
    email_notifications?: boolean
    company_name?: string | null
    siret?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    pictures?: PictureCreateNestedManyWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    viewed_apartments?: ViewedApartmentCreateNestedManyWithoutUserInput
    swipes?: SwipeCreateNestedManyWithoutUserInput
    matches?: MatchCreateNestedManyWithoutUserInput
    requests?: RequestCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    owned_apartments?: ApartmentCreateNestedManyWithoutOwnerInput
    preferences?: PreferencesCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: string
    email: string
    password: string
    username: string
    role?: $Enums.Role
    phone?: string | null
    avatar?: string | null
    email_notifications?: boolean
    company_name?: string | null
    siret?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    pictures?: PictureUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    viewed_apartments?: ViewedApartmentUncheckedCreateNestedManyWithoutUserInput
    swipes?: SwipeUncheckedCreateNestedManyWithoutUserInput
    matches?: MatchUncheckedCreateNestedManyWithoutUserInput
    requests?: RequestUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    owned_apartments?: ApartmentUncheckedCreateNestedManyWithoutOwnerInput
    preferences?: PreferencesUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    email_notifications?: BoolFieldUpdateOperationsInput | boolean
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    siret?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pictures?: PictureUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    viewed_apartments?: ViewedApartmentUpdateManyWithoutUserNestedInput
    swipes?: SwipeUpdateManyWithoutUserNestedInput
    matches?: MatchUpdateManyWithoutUserNestedInput
    requests?: RequestUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    owned_apartments?: ApartmentUpdateManyWithoutOwnerNestedInput
    preferences?: PreferencesUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    email_notifications?: BoolFieldUpdateOperationsInput | boolean
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    siret?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pictures?: PictureUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    viewed_apartments?: ViewedApartmentUncheckedUpdateManyWithoutUserNestedInput
    swipes?: SwipeUncheckedUpdateManyWithoutUserNestedInput
    matches?: MatchUncheckedUpdateManyWithoutUserNestedInput
    requests?: RequestUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    owned_apartments?: ApartmentUncheckedUpdateManyWithoutOwnerNestedInput
    preferences?: PreferencesUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutPicturesInput = {
    id?: string
    email: string
    password: string
    username: string
    role?: $Enums.Role
    phone?: string | null
    avatar?: string | null
    email_notifications?: boolean
    company_name?: string | null
    siret?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    viewed_apartments?: ViewedApartmentCreateNestedManyWithoutUserInput
    swipes?: SwipeCreateNestedManyWithoutUserInput
    matches?: MatchCreateNestedManyWithoutUserInput
    requests?: RequestCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    owned_apartments?: ApartmentCreateNestedManyWithoutOwnerInput
    preferences?: PreferencesCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPicturesInput = {
    id?: string
    email: string
    password: string
    username: string
    role?: $Enums.Role
    phone?: string | null
    avatar?: string | null
    email_notifications?: boolean
    company_name?: string | null
    siret?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    viewed_apartments?: ViewedApartmentUncheckedCreateNestedManyWithoutUserInput
    swipes?: SwipeUncheckedCreateNestedManyWithoutUserInput
    matches?: MatchUncheckedCreateNestedManyWithoutUserInput
    requests?: RequestUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    owned_apartments?: ApartmentUncheckedCreateNestedManyWithoutOwnerInput
    preferences?: PreferencesUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPicturesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPicturesInput, UserUncheckedCreateWithoutPicturesInput>
  }

  export type ApartmentCreateWithoutPicturesInput = {
    id?: string
    title: string
    description?: string | null
    address: string
    region: string
    city?: string | null
    postal_code?: string | null
    country?: string
    latitude?: number | null
    longitude?: number | null
    property_type?: $Enums.PropertyType
    listing_type?: $Enums.ListingType
    price: number
    surface: number
    rooms: number
    tags?: ApartmentCreatetagsInput | string[]
    availability?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    owner: UserCreateNestedOneWithoutOwned_apartmentsInput
    favorites?: FavoriteCreateNestedManyWithoutApartmentInput
    viewedBy?: ViewedApartmentCreateNestedManyWithoutApartmentInput
    swipes?: SwipeCreateNestedManyWithoutApartmentInput
    matches?: MatchCreateNestedManyWithoutApartmentInput
    requests?: RequestCreateNestedManyWithoutApartmentInput
  }

  export type ApartmentUncheckedCreateWithoutPicturesInput = {
    id?: string
    title: string
    description?: string | null
    address: string
    region: string
    city?: string | null
    postal_code?: string | null
    country?: string
    latitude?: number | null
    longitude?: number | null
    property_type?: $Enums.PropertyType
    listing_type?: $Enums.ListingType
    price: number
    surface: number
    rooms: number
    tags?: ApartmentCreatetagsInput | string[]
    availability?: boolean
    owner_id: string
    created_at?: Date | string
    updated_at?: Date | string
    favorites?: FavoriteUncheckedCreateNestedManyWithoutApartmentInput
    viewedBy?: ViewedApartmentUncheckedCreateNestedManyWithoutApartmentInput
    swipes?: SwipeUncheckedCreateNestedManyWithoutApartmentInput
    matches?: MatchUncheckedCreateNestedManyWithoutApartmentInput
    requests?: RequestUncheckedCreateNestedManyWithoutApartmentInput
  }

  export type ApartmentCreateOrConnectWithoutPicturesInput = {
    where: ApartmentWhereUniqueInput
    create: XOR<ApartmentCreateWithoutPicturesInput, ApartmentUncheckedCreateWithoutPicturesInput>
  }

  export type UserUpsertWithoutPicturesInput = {
    update: XOR<UserUpdateWithoutPicturesInput, UserUncheckedUpdateWithoutPicturesInput>
    create: XOR<UserCreateWithoutPicturesInput, UserUncheckedCreateWithoutPicturesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPicturesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPicturesInput, UserUncheckedUpdateWithoutPicturesInput>
  }

  export type UserUpdateWithoutPicturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    email_notifications?: BoolFieldUpdateOperationsInput | boolean
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    siret?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    viewed_apartments?: ViewedApartmentUpdateManyWithoutUserNestedInput
    swipes?: SwipeUpdateManyWithoutUserNestedInput
    matches?: MatchUpdateManyWithoutUserNestedInput
    requests?: RequestUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    owned_apartments?: ApartmentUpdateManyWithoutOwnerNestedInput
    preferences?: PreferencesUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPicturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    email_notifications?: BoolFieldUpdateOperationsInput | boolean
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    siret?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    viewed_apartments?: ViewedApartmentUncheckedUpdateManyWithoutUserNestedInput
    swipes?: SwipeUncheckedUpdateManyWithoutUserNestedInput
    matches?: MatchUncheckedUpdateManyWithoutUserNestedInput
    requests?: RequestUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    owned_apartments?: ApartmentUncheckedUpdateManyWithoutOwnerNestedInput
    preferences?: PreferencesUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ApartmentUpsertWithoutPicturesInput = {
    update: XOR<ApartmentUpdateWithoutPicturesInput, ApartmentUncheckedUpdateWithoutPicturesInput>
    create: XOR<ApartmentCreateWithoutPicturesInput, ApartmentUncheckedCreateWithoutPicturesInput>
    where?: ApartmentWhereInput
  }

  export type ApartmentUpdateToOneWithWhereWithoutPicturesInput = {
    where?: ApartmentWhereInput
    data: XOR<ApartmentUpdateWithoutPicturesInput, ApartmentUncheckedUpdateWithoutPicturesInput>
  }

  export type ApartmentUpdateWithoutPicturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    property_type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    listing_type?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    price?: FloatFieldUpdateOperationsInput | number
    surface?: FloatFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    tags?: ApartmentUpdatetagsInput | string[]
    availability?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwned_apartmentsNestedInput
    favorites?: FavoriteUpdateManyWithoutApartmentNestedInput
    viewedBy?: ViewedApartmentUpdateManyWithoutApartmentNestedInput
    swipes?: SwipeUpdateManyWithoutApartmentNestedInput
    matches?: MatchUpdateManyWithoutApartmentNestedInput
    requests?: RequestUpdateManyWithoutApartmentNestedInput
  }

  export type ApartmentUncheckedUpdateWithoutPicturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    property_type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    listing_type?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    price?: FloatFieldUpdateOperationsInput | number
    surface?: FloatFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    tags?: ApartmentUpdatetagsInput | string[]
    availability?: BoolFieldUpdateOperationsInput | boolean
    owner_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    favorites?: FavoriteUncheckedUpdateManyWithoutApartmentNestedInput
    viewedBy?: ViewedApartmentUncheckedUpdateManyWithoutApartmentNestedInput
    swipes?: SwipeUncheckedUpdateManyWithoutApartmentNestedInput
    matches?: MatchUncheckedUpdateManyWithoutApartmentNestedInput
    requests?: RequestUncheckedUpdateManyWithoutApartmentNestedInput
  }

  export type UserCreateWithoutFavoritesInput = {
    id?: string
    email: string
    password: string
    username: string
    role?: $Enums.Role
    phone?: string | null
    avatar?: string | null
    email_notifications?: boolean
    company_name?: string | null
    siret?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    pictures?: PictureCreateNestedManyWithoutUserInput
    viewed_apartments?: ViewedApartmentCreateNestedManyWithoutUserInput
    swipes?: SwipeCreateNestedManyWithoutUserInput
    matches?: MatchCreateNestedManyWithoutUserInput
    requests?: RequestCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    owned_apartments?: ApartmentCreateNestedManyWithoutOwnerInput
    preferences?: PreferencesCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFavoritesInput = {
    id?: string
    email: string
    password: string
    username: string
    role?: $Enums.Role
    phone?: string | null
    avatar?: string | null
    email_notifications?: boolean
    company_name?: string | null
    siret?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    pictures?: PictureUncheckedCreateNestedManyWithoutUserInput
    viewed_apartments?: ViewedApartmentUncheckedCreateNestedManyWithoutUserInput
    swipes?: SwipeUncheckedCreateNestedManyWithoutUserInput
    matches?: MatchUncheckedCreateNestedManyWithoutUserInput
    requests?: RequestUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    owned_apartments?: ApartmentUncheckedCreateNestedManyWithoutOwnerInput
    preferences?: PreferencesUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFavoritesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
  }

  export type ApartmentCreateWithoutFavoritesInput = {
    id?: string
    title: string
    description?: string | null
    address: string
    region: string
    city?: string | null
    postal_code?: string | null
    country?: string
    latitude?: number | null
    longitude?: number | null
    property_type?: $Enums.PropertyType
    listing_type?: $Enums.ListingType
    price: number
    surface: number
    rooms: number
    tags?: ApartmentCreatetagsInput | string[]
    availability?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    owner: UserCreateNestedOneWithoutOwned_apartmentsInput
    pictures?: PictureCreateNestedManyWithoutApartmentInput
    viewedBy?: ViewedApartmentCreateNestedManyWithoutApartmentInput
    swipes?: SwipeCreateNestedManyWithoutApartmentInput
    matches?: MatchCreateNestedManyWithoutApartmentInput
    requests?: RequestCreateNestedManyWithoutApartmentInput
  }

  export type ApartmentUncheckedCreateWithoutFavoritesInput = {
    id?: string
    title: string
    description?: string | null
    address: string
    region: string
    city?: string | null
    postal_code?: string | null
    country?: string
    latitude?: number | null
    longitude?: number | null
    property_type?: $Enums.PropertyType
    listing_type?: $Enums.ListingType
    price: number
    surface: number
    rooms: number
    tags?: ApartmentCreatetagsInput | string[]
    availability?: boolean
    owner_id: string
    created_at?: Date | string
    updated_at?: Date | string
    pictures?: PictureUncheckedCreateNestedManyWithoutApartmentInput
    viewedBy?: ViewedApartmentUncheckedCreateNestedManyWithoutApartmentInput
    swipes?: SwipeUncheckedCreateNestedManyWithoutApartmentInput
    matches?: MatchUncheckedCreateNestedManyWithoutApartmentInput
    requests?: RequestUncheckedCreateNestedManyWithoutApartmentInput
  }

  export type ApartmentCreateOrConnectWithoutFavoritesInput = {
    where: ApartmentWhereUniqueInput
    create: XOR<ApartmentCreateWithoutFavoritesInput, ApartmentUncheckedCreateWithoutFavoritesInput>
  }

  export type UserUpsertWithoutFavoritesInput = {
    update: XOR<UserUpdateWithoutFavoritesInput, UserUncheckedUpdateWithoutFavoritesInput>
    create: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavoritesInput, UserUncheckedUpdateWithoutFavoritesInput>
  }

  export type UserUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    email_notifications?: BoolFieldUpdateOperationsInput | boolean
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    siret?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    pictures?: PictureUpdateManyWithoutUserNestedInput
    viewed_apartments?: ViewedApartmentUpdateManyWithoutUserNestedInput
    swipes?: SwipeUpdateManyWithoutUserNestedInput
    matches?: MatchUpdateManyWithoutUserNestedInput
    requests?: RequestUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    owned_apartments?: ApartmentUpdateManyWithoutOwnerNestedInput
    preferences?: PreferencesUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    email_notifications?: BoolFieldUpdateOperationsInput | boolean
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    siret?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    pictures?: PictureUncheckedUpdateManyWithoutUserNestedInput
    viewed_apartments?: ViewedApartmentUncheckedUpdateManyWithoutUserNestedInput
    swipes?: SwipeUncheckedUpdateManyWithoutUserNestedInput
    matches?: MatchUncheckedUpdateManyWithoutUserNestedInput
    requests?: RequestUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    owned_apartments?: ApartmentUncheckedUpdateManyWithoutOwnerNestedInput
    preferences?: PreferencesUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ApartmentUpsertWithoutFavoritesInput = {
    update: XOR<ApartmentUpdateWithoutFavoritesInput, ApartmentUncheckedUpdateWithoutFavoritesInput>
    create: XOR<ApartmentCreateWithoutFavoritesInput, ApartmentUncheckedCreateWithoutFavoritesInput>
    where?: ApartmentWhereInput
  }

  export type ApartmentUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: ApartmentWhereInput
    data: XOR<ApartmentUpdateWithoutFavoritesInput, ApartmentUncheckedUpdateWithoutFavoritesInput>
  }

  export type ApartmentUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    property_type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    listing_type?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    price?: FloatFieldUpdateOperationsInput | number
    surface?: FloatFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    tags?: ApartmentUpdatetagsInput | string[]
    availability?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwned_apartmentsNestedInput
    pictures?: PictureUpdateManyWithoutApartmentNestedInput
    viewedBy?: ViewedApartmentUpdateManyWithoutApartmentNestedInput
    swipes?: SwipeUpdateManyWithoutApartmentNestedInput
    matches?: MatchUpdateManyWithoutApartmentNestedInput
    requests?: RequestUpdateManyWithoutApartmentNestedInput
  }

  export type ApartmentUncheckedUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    property_type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    listing_type?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    price?: FloatFieldUpdateOperationsInput | number
    surface?: FloatFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    tags?: ApartmentUpdatetagsInput | string[]
    availability?: BoolFieldUpdateOperationsInput | boolean
    owner_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pictures?: PictureUncheckedUpdateManyWithoutApartmentNestedInput
    viewedBy?: ViewedApartmentUncheckedUpdateManyWithoutApartmentNestedInput
    swipes?: SwipeUncheckedUpdateManyWithoutApartmentNestedInput
    matches?: MatchUncheckedUpdateManyWithoutApartmentNestedInput
    requests?: RequestUncheckedUpdateManyWithoutApartmentNestedInput
  }

  export type UserCreateWithoutViewed_apartmentsInput = {
    id?: string
    email: string
    password: string
    username: string
    role?: $Enums.Role
    phone?: string | null
    avatar?: string | null
    email_notifications?: boolean
    company_name?: string | null
    siret?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    pictures?: PictureCreateNestedManyWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    swipes?: SwipeCreateNestedManyWithoutUserInput
    matches?: MatchCreateNestedManyWithoutUserInput
    requests?: RequestCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    owned_apartments?: ApartmentCreateNestedManyWithoutOwnerInput
    preferences?: PreferencesCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutViewed_apartmentsInput = {
    id?: string
    email: string
    password: string
    username: string
    role?: $Enums.Role
    phone?: string | null
    avatar?: string | null
    email_notifications?: boolean
    company_name?: string | null
    siret?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    pictures?: PictureUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    swipes?: SwipeUncheckedCreateNestedManyWithoutUserInput
    matches?: MatchUncheckedCreateNestedManyWithoutUserInput
    requests?: RequestUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    owned_apartments?: ApartmentUncheckedCreateNestedManyWithoutOwnerInput
    preferences?: PreferencesUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutViewed_apartmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutViewed_apartmentsInput, UserUncheckedCreateWithoutViewed_apartmentsInput>
  }

  export type ApartmentCreateWithoutViewedByInput = {
    id?: string
    title: string
    description?: string | null
    address: string
    region: string
    city?: string | null
    postal_code?: string | null
    country?: string
    latitude?: number | null
    longitude?: number | null
    property_type?: $Enums.PropertyType
    listing_type?: $Enums.ListingType
    price: number
    surface: number
    rooms: number
    tags?: ApartmentCreatetagsInput | string[]
    availability?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    owner: UserCreateNestedOneWithoutOwned_apartmentsInput
    pictures?: PictureCreateNestedManyWithoutApartmentInput
    favorites?: FavoriteCreateNestedManyWithoutApartmentInput
    swipes?: SwipeCreateNestedManyWithoutApartmentInput
    matches?: MatchCreateNestedManyWithoutApartmentInput
    requests?: RequestCreateNestedManyWithoutApartmentInput
  }

  export type ApartmentUncheckedCreateWithoutViewedByInput = {
    id?: string
    title: string
    description?: string | null
    address: string
    region: string
    city?: string | null
    postal_code?: string | null
    country?: string
    latitude?: number | null
    longitude?: number | null
    property_type?: $Enums.PropertyType
    listing_type?: $Enums.ListingType
    price: number
    surface: number
    rooms: number
    tags?: ApartmentCreatetagsInput | string[]
    availability?: boolean
    owner_id: string
    created_at?: Date | string
    updated_at?: Date | string
    pictures?: PictureUncheckedCreateNestedManyWithoutApartmentInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutApartmentInput
    swipes?: SwipeUncheckedCreateNestedManyWithoutApartmentInput
    matches?: MatchUncheckedCreateNestedManyWithoutApartmentInput
    requests?: RequestUncheckedCreateNestedManyWithoutApartmentInput
  }

  export type ApartmentCreateOrConnectWithoutViewedByInput = {
    where: ApartmentWhereUniqueInput
    create: XOR<ApartmentCreateWithoutViewedByInput, ApartmentUncheckedCreateWithoutViewedByInput>
  }

  export type UserUpsertWithoutViewed_apartmentsInput = {
    update: XOR<UserUpdateWithoutViewed_apartmentsInput, UserUncheckedUpdateWithoutViewed_apartmentsInput>
    create: XOR<UserCreateWithoutViewed_apartmentsInput, UserUncheckedCreateWithoutViewed_apartmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutViewed_apartmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutViewed_apartmentsInput, UserUncheckedUpdateWithoutViewed_apartmentsInput>
  }

  export type UserUpdateWithoutViewed_apartmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    email_notifications?: BoolFieldUpdateOperationsInput | boolean
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    siret?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    pictures?: PictureUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    swipes?: SwipeUpdateManyWithoutUserNestedInput
    matches?: MatchUpdateManyWithoutUserNestedInput
    requests?: RequestUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    owned_apartments?: ApartmentUpdateManyWithoutOwnerNestedInput
    preferences?: PreferencesUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutViewed_apartmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    email_notifications?: BoolFieldUpdateOperationsInput | boolean
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    siret?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    pictures?: PictureUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    swipes?: SwipeUncheckedUpdateManyWithoutUserNestedInput
    matches?: MatchUncheckedUpdateManyWithoutUserNestedInput
    requests?: RequestUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    owned_apartments?: ApartmentUncheckedUpdateManyWithoutOwnerNestedInput
    preferences?: PreferencesUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ApartmentUpsertWithoutViewedByInput = {
    update: XOR<ApartmentUpdateWithoutViewedByInput, ApartmentUncheckedUpdateWithoutViewedByInput>
    create: XOR<ApartmentCreateWithoutViewedByInput, ApartmentUncheckedCreateWithoutViewedByInput>
    where?: ApartmentWhereInput
  }

  export type ApartmentUpdateToOneWithWhereWithoutViewedByInput = {
    where?: ApartmentWhereInput
    data: XOR<ApartmentUpdateWithoutViewedByInput, ApartmentUncheckedUpdateWithoutViewedByInput>
  }

  export type ApartmentUpdateWithoutViewedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    property_type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    listing_type?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    price?: FloatFieldUpdateOperationsInput | number
    surface?: FloatFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    tags?: ApartmentUpdatetagsInput | string[]
    availability?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwned_apartmentsNestedInput
    pictures?: PictureUpdateManyWithoutApartmentNestedInput
    favorites?: FavoriteUpdateManyWithoutApartmentNestedInput
    swipes?: SwipeUpdateManyWithoutApartmentNestedInput
    matches?: MatchUpdateManyWithoutApartmentNestedInput
    requests?: RequestUpdateManyWithoutApartmentNestedInput
  }

  export type ApartmentUncheckedUpdateWithoutViewedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    property_type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    listing_type?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    price?: FloatFieldUpdateOperationsInput | number
    surface?: FloatFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    tags?: ApartmentUpdatetagsInput | string[]
    availability?: BoolFieldUpdateOperationsInput | boolean
    owner_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pictures?: PictureUncheckedUpdateManyWithoutApartmentNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutApartmentNestedInput
    swipes?: SwipeUncheckedUpdateManyWithoutApartmentNestedInput
    matches?: MatchUncheckedUpdateManyWithoutApartmentNestedInput
    requests?: RequestUncheckedUpdateManyWithoutApartmentNestedInput
  }

  export type UserCreateWithoutPreferencesInput = {
    id?: string
    email: string
    password: string
    username: string
    role?: $Enums.Role
    phone?: string | null
    avatar?: string | null
    email_notifications?: boolean
    company_name?: string | null
    siret?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    pictures?: PictureCreateNestedManyWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    viewed_apartments?: ViewedApartmentCreateNestedManyWithoutUserInput
    swipes?: SwipeCreateNestedManyWithoutUserInput
    matches?: MatchCreateNestedManyWithoutUserInput
    requests?: RequestCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    owned_apartments?: ApartmentCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutPreferencesInput = {
    id?: string
    email: string
    password: string
    username: string
    role?: $Enums.Role
    phone?: string | null
    avatar?: string | null
    email_notifications?: boolean
    company_name?: string | null
    siret?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    pictures?: PictureUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    viewed_apartments?: ViewedApartmentUncheckedCreateNestedManyWithoutUserInput
    swipes?: SwipeUncheckedCreateNestedManyWithoutUserInput
    matches?: MatchUncheckedCreateNestedManyWithoutUserInput
    requests?: RequestUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    owned_apartments?: ApartmentUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutPreferencesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
  }

  export type UserUpsertWithoutPreferencesInput = {
    update: XOR<UserUpdateWithoutPreferencesInput, UserUncheckedUpdateWithoutPreferencesInput>
    create: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPreferencesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPreferencesInput, UserUncheckedUpdateWithoutPreferencesInput>
  }

  export type UserUpdateWithoutPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    email_notifications?: BoolFieldUpdateOperationsInput | boolean
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    siret?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    pictures?: PictureUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    viewed_apartments?: ViewedApartmentUpdateManyWithoutUserNestedInput
    swipes?: SwipeUpdateManyWithoutUserNestedInput
    matches?: MatchUpdateManyWithoutUserNestedInput
    requests?: RequestUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    owned_apartments?: ApartmentUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    email_notifications?: BoolFieldUpdateOperationsInput | boolean
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    siret?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    pictures?: PictureUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    viewed_apartments?: ViewedApartmentUncheckedUpdateManyWithoutUserNestedInput
    swipes?: SwipeUncheckedUpdateManyWithoutUserNestedInput
    matches?: MatchUncheckedUpdateManyWithoutUserNestedInput
    requests?: RequestUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    owned_apartments?: ApartmentUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateWithoutOwned_apartmentsInput = {
    id?: string
    email: string
    password: string
    username: string
    role?: $Enums.Role
    phone?: string | null
    avatar?: string | null
    email_notifications?: boolean
    company_name?: string | null
    siret?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    pictures?: PictureCreateNestedManyWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    viewed_apartments?: ViewedApartmentCreateNestedManyWithoutUserInput
    swipes?: SwipeCreateNestedManyWithoutUserInput
    matches?: MatchCreateNestedManyWithoutUserInput
    requests?: RequestCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    preferences?: PreferencesCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOwned_apartmentsInput = {
    id?: string
    email: string
    password: string
    username: string
    role?: $Enums.Role
    phone?: string | null
    avatar?: string | null
    email_notifications?: boolean
    company_name?: string | null
    siret?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    pictures?: PictureUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    viewed_apartments?: ViewedApartmentUncheckedCreateNestedManyWithoutUserInput
    swipes?: SwipeUncheckedCreateNestedManyWithoutUserInput
    matches?: MatchUncheckedCreateNestedManyWithoutUserInput
    requests?: RequestUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    preferences?: PreferencesUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOwned_apartmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwned_apartmentsInput, UserUncheckedCreateWithoutOwned_apartmentsInput>
  }

  export type PictureCreateWithoutApartmentInput = {
    id?: string
    url: string
    type: $Enums.PictureType
    uploaded_at?: Date | string
    user?: UserCreateNestedOneWithoutPicturesInput
  }

  export type PictureUncheckedCreateWithoutApartmentInput = {
    id?: string
    url: string
    type: $Enums.PictureType
    uploaded_at?: Date | string
    user_id?: string | null
  }

  export type PictureCreateOrConnectWithoutApartmentInput = {
    where: PictureWhereUniqueInput
    create: XOR<PictureCreateWithoutApartmentInput, PictureUncheckedCreateWithoutApartmentInput>
  }

  export type PictureCreateManyApartmentInputEnvelope = {
    data: PictureCreateManyApartmentInput | PictureCreateManyApartmentInput[]
    skipDuplicates?: boolean
  }

  export type FavoriteCreateWithoutApartmentInput = {
    id?: string
    user: UserCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteUncheckedCreateWithoutApartmentInput = {
    id?: string
    user_id: string
  }

  export type FavoriteCreateOrConnectWithoutApartmentInput = {
    where: FavoriteWhereUniqueInput
    create: XOR<FavoriteCreateWithoutApartmentInput, FavoriteUncheckedCreateWithoutApartmentInput>
  }

  export type FavoriteCreateManyApartmentInputEnvelope = {
    data: FavoriteCreateManyApartmentInput | FavoriteCreateManyApartmentInput[]
    skipDuplicates?: boolean
  }

  export type ViewedApartmentCreateWithoutApartmentInput = {
    id?: string
    viewed_at?: Date | string
    user: UserCreateNestedOneWithoutViewed_apartmentsInput
  }

  export type ViewedApartmentUncheckedCreateWithoutApartmentInput = {
    id?: string
    viewed_at?: Date | string
    user_id: string
  }

  export type ViewedApartmentCreateOrConnectWithoutApartmentInput = {
    where: ViewedApartmentWhereUniqueInput
    create: XOR<ViewedApartmentCreateWithoutApartmentInput, ViewedApartmentUncheckedCreateWithoutApartmentInput>
  }

  export type ViewedApartmentCreateManyApartmentInputEnvelope = {
    data: ViewedApartmentCreateManyApartmentInput | ViewedApartmentCreateManyApartmentInput[]
    skipDuplicates?: boolean
  }

  export type SwipeCreateWithoutApartmentInput = {
    id?: string
    direction: $Enums.SwipeDirection
    created_at?: Date | string
    user: UserCreateNestedOneWithoutSwipesInput
  }

  export type SwipeUncheckedCreateWithoutApartmentInput = {
    id?: string
    user_id: string
    direction: $Enums.SwipeDirection
    created_at?: Date | string
  }

  export type SwipeCreateOrConnectWithoutApartmentInput = {
    where: SwipeWhereUniqueInput
    create: XOR<SwipeCreateWithoutApartmentInput, SwipeUncheckedCreateWithoutApartmentInput>
  }

  export type SwipeCreateManyApartmentInputEnvelope = {
    data: SwipeCreateManyApartmentInput | SwipeCreateManyApartmentInput[]
    skipDuplicates?: boolean
  }

  export type MatchCreateWithoutApartmentInput = {
    id?: string
    created_at?: Date | string
    user: UserCreateNestedOneWithoutMatchesInput
    messages?: MessageCreateNestedManyWithoutMatchInput
  }

  export type MatchUncheckedCreateWithoutApartmentInput = {
    id?: string
    user_id: string
    created_at?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutMatchInput
  }

  export type MatchCreateOrConnectWithoutApartmentInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutApartmentInput, MatchUncheckedCreateWithoutApartmentInput>
  }

  export type MatchCreateManyApartmentInputEnvelope = {
    data: MatchCreateManyApartmentInput | MatchCreateManyApartmentInput[]
    skipDuplicates?: boolean
  }

  export type RequestCreateWithoutApartmentInput = {
    id?: string
    status?: $Enums.RequestStatus
    message?: string | null
    visit_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutRequestsInput
    documents?: RequestDocumentCreateNestedManyWithoutRequestInput
  }

  export type RequestUncheckedCreateWithoutApartmentInput = {
    id?: string
    user_id: string
    status?: $Enums.RequestStatus
    message?: string | null
    visit_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    documents?: RequestDocumentUncheckedCreateNestedManyWithoutRequestInput
  }

  export type RequestCreateOrConnectWithoutApartmentInput = {
    where: RequestWhereUniqueInput
    create: XOR<RequestCreateWithoutApartmentInput, RequestUncheckedCreateWithoutApartmentInput>
  }

  export type RequestCreateManyApartmentInputEnvelope = {
    data: RequestCreateManyApartmentInput | RequestCreateManyApartmentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOwned_apartmentsInput = {
    update: XOR<UserUpdateWithoutOwned_apartmentsInput, UserUncheckedUpdateWithoutOwned_apartmentsInput>
    create: XOR<UserCreateWithoutOwned_apartmentsInput, UserUncheckedCreateWithoutOwned_apartmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOwned_apartmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOwned_apartmentsInput, UserUncheckedUpdateWithoutOwned_apartmentsInput>
  }

  export type UserUpdateWithoutOwned_apartmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    email_notifications?: BoolFieldUpdateOperationsInput | boolean
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    siret?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    pictures?: PictureUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    viewed_apartments?: ViewedApartmentUpdateManyWithoutUserNestedInput
    swipes?: SwipeUpdateManyWithoutUserNestedInput
    matches?: MatchUpdateManyWithoutUserNestedInput
    requests?: RequestUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    preferences?: PreferencesUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOwned_apartmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    email_notifications?: BoolFieldUpdateOperationsInput | boolean
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    siret?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    pictures?: PictureUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    viewed_apartments?: ViewedApartmentUncheckedUpdateManyWithoutUserNestedInput
    swipes?: SwipeUncheckedUpdateManyWithoutUserNestedInput
    matches?: MatchUncheckedUpdateManyWithoutUserNestedInput
    requests?: RequestUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    preferences?: PreferencesUncheckedUpdateOneWithoutUserNestedInput
  }

  export type PictureUpsertWithWhereUniqueWithoutApartmentInput = {
    where: PictureWhereUniqueInput
    update: XOR<PictureUpdateWithoutApartmentInput, PictureUncheckedUpdateWithoutApartmentInput>
    create: XOR<PictureCreateWithoutApartmentInput, PictureUncheckedCreateWithoutApartmentInput>
  }

  export type PictureUpdateWithWhereUniqueWithoutApartmentInput = {
    where: PictureWhereUniqueInput
    data: XOR<PictureUpdateWithoutApartmentInput, PictureUncheckedUpdateWithoutApartmentInput>
  }

  export type PictureUpdateManyWithWhereWithoutApartmentInput = {
    where: PictureScalarWhereInput
    data: XOR<PictureUpdateManyMutationInput, PictureUncheckedUpdateManyWithoutApartmentInput>
  }

  export type FavoriteUpsertWithWhereUniqueWithoutApartmentInput = {
    where: FavoriteWhereUniqueInput
    update: XOR<FavoriteUpdateWithoutApartmentInput, FavoriteUncheckedUpdateWithoutApartmentInput>
    create: XOR<FavoriteCreateWithoutApartmentInput, FavoriteUncheckedCreateWithoutApartmentInput>
  }

  export type FavoriteUpdateWithWhereUniqueWithoutApartmentInput = {
    where: FavoriteWhereUniqueInput
    data: XOR<FavoriteUpdateWithoutApartmentInput, FavoriteUncheckedUpdateWithoutApartmentInput>
  }

  export type FavoriteUpdateManyWithWhereWithoutApartmentInput = {
    where: FavoriteScalarWhereInput
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyWithoutApartmentInput>
  }

  export type ViewedApartmentUpsertWithWhereUniqueWithoutApartmentInput = {
    where: ViewedApartmentWhereUniqueInput
    update: XOR<ViewedApartmentUpdateWithoutApartmentInput, ViewedApartmentUncheckedUpdateWithoutApartmentInput>
    create: XOR<ViewedApartmentCreateWithoutApartmentInput, ViewedApartmentUncheckedCreateWithoutApartmentInput>
  }

  export type ViewedApartmentUpdateWithWhereUniqueWithoutApartmentInput = {
    where: ViewedApartmentWhereUniqueInput
    data: XOR<ViewedApartmentUpdateWithoutApartmentInput, ViewedApartmentUncheckedUpdateWithoutApartmentInput>
  }

  export type ViewedApartmentUpdateManyWithWhereWithoutApartmentInput = {
    where: ViewedApartmentScalarWhereInput
    data: XOR<ViewedApartmentUpdateManyMutationInput, ViewedApartmentUncheckedUpdateManyWithoutApartmentInput>
  }

  export type SwipeUpsertWithWhereUniqueWithoutApartmentInput = {
    where: SwipeWhereUniqueInput
    update: XOR<SwipeUpdateWithoutApartmentInput, SwipeUncheckedUpdateWithoutApartmentInput>
    create: XOR<SwipeCreateWithoutApartmentInput, SwipeUncheckedCreateWithoutApartmentInput>
  }

  export type SwipeUpdateWithWhereUniqueWithoutApartmentInput = {
    where: SwipeWhereUniqueInput
    data: XOR<SwipeUpdateWithoutApartmentInput, SwipeUncheckedUpdateWithoutApartmentInput>
  }

  export type SwipeUpdateManyWithWhereWithoutApartmentInput = {
    where: SwipeScalarWhereInput
    data: XOR<SwipeUpdateManyMutationInput, SwipeUncheckedUpdateManyWithoutApartmentInput>
  }

  export type MatchUpsertWithWhereUniqueWithoutApartmentInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutApartmentInput, MatchUncheckedUpdateWithoutApartmentInput>
    create: XOR<MatchCreateWithoutApartmentInput, MatchUncheckedCreateWithoutApartmentInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutApartmentInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutApartmentInput, MatchUncheckedUpdateWithoutApartmentInput>
  }

  export type MatchUpdateManyWithWhereWithoutApartmentInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutApartmentInput>
  }

  export type RequestUpsertWithWhereUniqueWithoutApartmentInput = {
    where: RequestWhereUniqueInput
    update: XOR<RequestUpdateWithoutApartmentInput, RequestUncheckedUpdateWithoutApartmentInput>
    create: XOR<RequestCreateWithoutApartmentInput, RequestUncheckedCreateWithoutApartmentInput>
  }

  export type RequestUpdateWithWhereUniqueWithoutApartmentInput = {
    where: RequestWhereUniqueInput
    data: XOR<RequestUpdateWithoutApartmentInput, RequestUncheckedUpdateWithoutApartmentInput>
  }

  export type RequestUpdateManyWithWhereWithoutApartmentInput = {
    where: RequestScalarWhereInput
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyWithoutApartmentInput>
  }

  export type ApartmentCreateWithoutRequestsInput = {
    id?: string
    title: string
    description?: string | null
    address: string
    region: string
    city?: string | null
    postal_code?: string | null
    country?: string
    latitude?: number | null
    longitude?: number | null
    property_type?: $Enums.PropertyType
    listing_type?: $Enums.ListingType
    price: number
    surface: number
    rooms: number
    tags?: ApartmentCreatetagsInput | string[]
    availability?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    owner: UserCreateNestedOneWithoutOwned_apartmentsInput
    pictures?: PictureCreateNestedManyWithoutApartmentInput
    favorites?: FavoriteCreateNestedManyWithoutApartmentInput
    viewedBy?: ViewedApartmentCreateNestedManyWithoutApartmentInput
    swipes?: SwipeCreateNestedManyWithoutApartmentInput
    matches?: MatchCreateNestedManyWithoutApartmentInput
  }

  export type ApartmentUncheckedCreateWithoutRequestsInput = {
    id?: string
    title: string
    description?: string | null
    address: string
    region: string
    city?: string | null
    postal_code?: string | null
    country?: string
    latitude?: number | null
    longitude?: number | null
    property_type?: $Enums.PropertyType
    listing_type?: $Enums.ListingType
    price: number
    surface: number
    rooms: number
    tags?: ApartmentCreatetagsInput | string[]
    availability?: boolean
    owner_id: string
    created_at?: Date | string
    updated_at?: Date | string
    pictures?: PictureUncheckedCreateNestedManyWithoutApartmentInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutApartmentInput
    viewedBy?: ViewedApartmentUncheckedCreateNestedManyWithoutApartmentInput
    swipes?: SwipeUncheckedCreateNestedManyWithoutApartmentInput
    matches?: MatchUncheckedCreateNestedManyWithoutApartmentInput
  }

  export type ApartmentCreateOrConnectWithoutRequestsInput = {
    where: ApartmentWhereUniqueInput
    create: XOR<ApartmentCreateWithoutRequestsInput, ApartmentUncheckedCreateWithoutRequestsInput>
  }

  export type UserCreateWithoutRequestsInput = {
    id?: string
    email: string
    password: string
    username: string
    role?: $Enums.Role
    phone?: string | null
    avatar?: string | null
    email_notifications?: boolean
    company_name?: string | null
    siret?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    pictures?: PictureCreateNestedManyWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    viewed_apartments?: ViewedApartmentCreateNestedManyWithoutUserInput
    swipes?: SwipeCreateNestedManyWithoutUserInput
    matches?: MatchCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    owned_apartments?: ApartmentCreateNestedManyWithoutOwnerInput
    preferences?: PreferencesCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRequestsInput = {
    id?: string
    email: string
    password: string
    username: string
    role?: $Enums.Role
    phone?: string | null
    avatar?: string | null
    email_notifications?: boolean
    company_name?: string | null
    siret?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    pictures?: PictureUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    viewed_apartments?: ViewedApartmentUncheckedCreateNestedManyWithoutUserInput
    swipes?: SwipeUncheckedCreateNestedManyWithoutUserInput
    matches?: MatchUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    owned_apartments?: ApartmentUncheckedCreateNestedManyWithoutOwnerInput
    preferences?: PreferencesUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
  }

  export type RequestDocumentCreateWithoutRequestInput = {
    id?: string
    name: string
    url: string
    uploaded_at?: Date | string
  }

  export type RequestDocumentUncheckedCreateWithoutRequestInput = {
    id?: string
    name: string
    url: string
    uploaded_at?: Date | string
  }

  export type RequestDocumentCreateOrConnectWithoutRequestInput = {
    where: RequestDocumentWhereUniqueInput
    create: XOR<RequestDocumentCreateWithoutRequestInput, RequestDocumentUncheckedCreateWithoutRequestInput>
  }

  export type RequestDocumentCreateManyRequestInputEnvelope = {
    data: RequestDocumentCreateManyRequestInput | RequestDocumentCreateManyRequestInput[]
    skipDuplicates?: boolean
  }

  export type ApartmentUpsertWithoutRequestsInput = {
    update: XOR<ApartmentUpdateWithoutRequestsInput, ApartmentUncheckedUpdateWithoutRequestsInput>
    create: XOR<ApartmentCreateWithoutRequestsInput, ApartmentUncheckedCreateWithoutRequestsInput>
    where?: ApartmentWhereInput
  }

  export type ApartmentUpdateToOneWithWhereWithoutRequestsInput = {
    where?: ApartmentWhereInput
    data: XOR<ApartmentUpdateWithoutRequestsInput, ApartmentUncheckedUpdateWithoutRequestsInput>
  }

  export type ApartmentUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    property_type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    listing_type?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    price?: FloatFieldUpdateOperationsInput | number
    surface?: FloatFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    tags?: ApartmentUpdatetagsInput | string[]
    availability?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwned_apartmentsNestedInput
    pictures?: PictureUpdateManyWithoutApartmentNestedInput
    favorites?: FavoriteUpdateManyWithoutApartmentNestedInput
    viewedBy?: ViewedApartmentUpdateManyWithoutApartmentNestedInput
    swipes?: SwipeUpdateManyWithoutApartmentNestedInput
    matches?: MatchUpdateManyWithoutApartmentNestedInput
  }

  export type ApartmentUncheckedUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    property_type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    listing_type?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    price?: FloatFieldUpdateOperationsInput | number
    surface?: FloatFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    tags?: ApartmentUpdatetagsInput | string[]
    availability?: BoolFieldUpdateOperationsInput | boolean
    owner_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pictures?: PictureUncheckedUpdateManyWithoutApartmentNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutApartmentNestedInput
    viewedBy?: ViewedApartmentUncheckedUpdateManyWithoutApartmentNestedInput
    swipes?: SwipeUncheckedUpdateManyWithoutApartmentNestedInput
    matches?: MatchUncheckedUpdateManyWithoutApartmentNestedInput
  }

  export type UserUpsertWithoutRequestsInput = {
    update: XOR<UserUpdateWithoutRequestsInput, UserUncheckedUpdateWithoutRequestsInput>
    create: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRequestsInput, UserUncheckedUpdateWithoutRequestsInput>
  }

  export type UserUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    email_notifications?: BoolFieldUpdateOperationsInput | boolean
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    siret?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    pictures?: PictureUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    viewed_apartments?: ViewedApartmentUpdateManyWithoutUserNestedInput
    swipes?: SwipeUpdateManyWithoutUserNestedInput
    matches?: MatchUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    owned_apartments?: ApartmentUpdateManyWithoutOwnerNestedInput
    preferences?: PreferencesUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    email_notifications?: BoolFieldUpdateOperationsInput | boolean
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    siret?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    pictures?: PictureUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    viewed_apartments?: ViewedApartmentUncheckedUpdateManyWithoutUserNestedInput
    swipes?: SwipeUncheckedUpdateManyWithoutUserNestedInput
    matches?: MatchUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    owned_apartments?: ApartmentUncheckedUpdateManyWithoutOwnerNestedInput
    preferences?: PreferencesUncheckedUpdateOneWithoutUserNestedInput
  }

  export type RequestDocumentUpsertWithWhereUniqueWithoutRequestInput = {
    where: RequestDocumentWhereUniqueInput
    update: XOR<RequestDocumentUpdateWithoutRequestInput, RequestDocumentUncheckedUpdateWithoutRequestInput>
    create: XOR<RequestDocumentCreateWithoutRequestInput, RequestDocumentUncheckedCreateWithoutRequestInput>
  }

  export type RequestDocumentUpdateWithWhereUniqueWithoutRequestInput = {
    where: RequestDocumentWhereUniqueInput
    data: XOR<RequestDocumentUpdateWithoutRequestInput, RequestDocumentUncheckedUpdateWithoutRequestInput>
  }

  export type RequestDocumentUpdateManyWithWhereWithoutRequestInput = {
    where: RequestDocumentScalarWhereInput
    data: XOR<RequestDocumentUpdateManyMutationInput, RequestDocumentUncheckedUpdateManyWithoutRequestInput>
  }

  export type RequestDocumentScalarWhereInput = {
    AND?: RequestDocumentScalarWhereInput | RequestDocumentScalarWhereInput[]
    OR?: RequestDocumentScalarWhereInput[]
    NOT?: RequestDocumentScalarWhereInput | RequestDocumentScalarWhereInput[]
    id?: StringFilter<"RequestDocument"> | string
    name?: StringFilter<"RequestDocument"> | string
    url?: StringFilter<"RequestDocument"> | string
    uploaded_at?: DateTimeFilter<"RequestDocument"> | Date | string
    request_id?: StringFilter<"RequestDocument"> | string
  }

  export type UserCreateWithoutSwipesInput = {
    id?: string
    email: string
    password: string
    username: string
    role?: $Enums.Role
    phone?: string | null
    avatar?: string | null
    email_notifications?: boolean
    company_name?: string | null
    siret?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    pictures?: PictureCreateNestedManyWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    viewed_apartments?: ViewedApartmentCreateNestedManyWithoutUserInput
    matches?: MatchCreateNestedManyWithoutUserInput
    requests?: RequestCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    owned_apartments?: ApartmentCreateNestedManyWithoutOwnerInput
    preferences?: PreferencesCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSwipesInput = {
    id?: string
    email: string
    password: string
    username: string
    role?: $Enums.Role
    phone?: string | null
    avatar?: string | null
    email_notifications?: boolean
    company_name?: string | null
    siret?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    pictures?: PictureUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    viewed_apartments?: ViewedApartmentUncheckedCreateNestedManyWithoutUserInput
    matches?: MatchUncheckedCreateNestedManyWithoutUserInput
    requests?: RequestUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    owned_apartments?: ApartmentUncheckedCreateNestedManyWithoutOwnerInput
    preferences?: PreferencesUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSwipesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSwipesInput, UserUncheckedCreateWithoutSwipesInput>
  }

  export type ApartmentCreateWithoutSwipesInput = {
    id?: string
    title: string
    description?: string | null
    address: string
    region: string
    city?: string | null
    postal_code?: string | null
    country?: string
    latitude?: number | null
    longitude?: number | null
    property_type?: $Enums.PropertyType
    listing_type?: $Enums.ListingType
    price: number
    surface: number
    rooms: number
    tags?: ApartmentCreatetagsInput | string[]
    availability?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    owner: UserCreateNestedOneWithoutOwned_apartmentsInput
    pictures?: PictureCreateNestedManyWithoutApartmentInput
    favorites?: FavoriteCreateNestedManyWithoutApartmentInput
    viewedBy?: ViewedApartmentCreateNestedManyWithoutApartmentInput
    matches?: MatchCreateNestedManyWithoutApartmentInput
    requests?: RequestCreateNestedManyWithoutApartmentInput
  }

  export type ApartmentUncheckedCreateWithoutSwipesInput = {
    id?: string
    title: string
    description?: string | null
    address: string
    region: string
    city?: string | null
    postal_code?: string | null
    country?: string
    latitude?: number | null
    longitude?: number | null
    property_type?: $Enums.PropertyType
    listing_type?: $Enums.ListingType
    price: number
    surface: number
    rooms: number
    tags?: ApartmentCreatetagsInput | string[]
    availability?: boolean
    owner_id: string
    created_at?: Date | string
    updated_at?: Date | string
    pictures?: PictureUncheckedCreateNestedManyWithoutApartmentInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutApartmentInput
    viewedBy?: ViewedApartmentUncheckedCreateNestedManyWithoutApartmentInput
    matches?: MatchUncheckedCreateNestedManyWithoutApartmentInput
    requests?: RequestUncheckedCreateNestedManyWithoutApartmentInput
  }

  export type ApartmentCreateOrConnectWithoutSwipesInput = {
    where: ApartmentWhereUniqueInput
    create: XOR<ApartmentCreateWithoutSwipesInput, ApartmentUncheckedCreateWithoutSwipesInput>
  }

  export type UserUpsertWithoutSwipesInput = {
    update: XOR<UserUpdateWithoutSwipesInput, UserUncheckedUpdateWithoutSwipesInput>
    create: XOR<UserCreateWithoutSwipesInput, UserUncheckedCreateWithoutSwipesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSwipesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSwipesInput, UserUncheckedUpdateWithoutSwipesInput>
  }

  export type UserUpdateWithoutSwipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    email_notifications?: BoolFieldUpdateOperationsInput | boolean
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    siret?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    pictures?: PictureUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    viewed_apartments?: ViewedApartmentUpdateManyWithoutUserNestedInput
    matches?: MatchUpdateManyWithoutUserNestedInput
    requests?: RequestUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    owned_apartments?: ApartmentUpdateManyWithoutOwnerNestedInput
    preferences?: PreferencesUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSwipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    email_notifications?: BoolFieldUpdateOperationsInput | boolean
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    siret?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    pictures?: PictureUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    viewed_apartments?: ViewedApartmentUncheckedUpdateManyWithoutUserNestedInput
    matches?: MatchUncheckedUpdateManyWithoutUserNestedInput
    requests?: RequestUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    owned_apartments?: ApartmentUncheckedUpdateManyWithoutOwnerNestedInput
    preferences?: PreferencesUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ApartmentUpsertWithoutSwipesInput = {
    update: XOR<ApartmentUpdateWithoutSwipesInput, ApartmentUncheckedUpdateWithoutSwipesInput>
    create: XOR<ApartmentCreateWithoutSwipesInput, ApartmentUncheckedCreateWithoutSwipesInput>
    where?: ApartmentWhereInput
  }

  export type ApartmentUpdateToOneWithWhereWithoutSwipesInput = {
    where?: ApartmentWhereInput
    data: XOR<ApartmentUpdateWithoutSwipesInput, ApartmentUncheckedUpdateWithoutSwipesInput>
  }

  export type ApartmentUpdateWithoutSwipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    property_type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    listing_type?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    price?: FloatFieldUpdateOperationsInput | number
    surface?: FloatFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    tags?: ApartmentUpdatetagsInput | string[]
    availability?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwned_apartmentsNestedInput
    pictures?: PictureUpdateManyWithoutApartmentNestedInput
    favorites?: FavoriteUpdateManyWithoutApartmentNestedInput
    viewedBy?: ViewedApartmentUpdateManyWithoutApartmentNestedInput
    matches?: MatchUpdateManyWithoutApartmentNestedInput
    requests?: RequestUpdateManyWithoutApartmentNestedInput
  }

  export type ApartmentUncheckedUpdateWithoutSwipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    property_type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    listing_type?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    price?: FloatFieldUpdateOperationsInput | number
    surface?: FloatFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    tags?: ApartmentUpdatetagsInput | string[]
    availability?: BoolFieldUpdateOperationsInput | boolean
    owner_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pictures?: PictureUncheckedUpdateManyWithoutApartmentNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutApartmentNestedInput
    viewedBy?: ViewedApartmentUncheckedUpdateManyWithoutApartmentNestedInput
    matches?: MatchUncheckedUpdateManyWithoutApartmentNestedInput
    requests?: RequestUncheckedUpdateManyWithoutApartmentNestedInput
  }

  export type UserCreateWithoutMatchesInput = {
    id?: string
    email: string
    password: string
    username: string
    role?: $Enums.Role
    phone?: string | null
    avatar?: string | null
    email_notifications?: boolean
    company_name?: string | null
    siret?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    pictures?: PictureCreateNestedManyWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    viewed_apartments?: ViewedApartmentCreateNestedManyWithoutUserInput
    swipes?: SwipeCreateNestedManyWithoutUserInput
    requests?: RequestCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    owned_apartments?: ApartmentCreateNestedManyWithoutOwnerInput
    preferences?: PreferencesCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMatchesInput = {
    id?: string
    email: string
    password: string
    username: string
    role?: $Enums.Role
    phone?: string | null
    avatar?: string | null
    email_notifications?: boolean
    company_name?: string | null
    siret?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    pictures?: PictureUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    viewed_apartments?: ViewedApartmentUncheckedCreateNestedManyWithoutUserInput
    swipes?: SwipeUncheckedCreateNestedManyWithoutUserInput
    requests?: RequestUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    owned_apartments?: ApartmentUncheckedCreateNestedManyWithoutOwnerInput
    preferences?: PreferencesUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMatchesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMatchesInput, UserUncheckedCreateWithoutMatchesInput>
  }

  export type ApartmentCreateWithoutMatchesInput = {
    id?: string
    title: string
    description?: string | null
    address: string
    region: string
    city?: string | null
    postal_code?: string | null
    country?: string
    latitude?: number | null
    longitude?: number | null
    property_type?: $Enums.PropertyType
    listing_type?: $Enums.ListingType
    price: number
    surface: number
    rooms: number
    tags?: ApartmentCreatetagsInput | string[]
    availability?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    owner: UserCreateNestedOneWithoutOwned_apartmentsInput
    pictures?: PictureCreateNestedManyWithoutApartmentInput
    favorites?: FavoriteCreateNestedManyWithoutApartmentInput
    viewedBy?: ViewedApartmentCreateNestedManyWithoutApartmentInput
    swipes?: SwipeCreateNestedManyWithoutApartmentInput
    requests?: RequestCreateNestedManyWithoutApartmentInput
  }

  export type ApartmentUncheckedCreateWithoutMatchesInput = {
    id?: string
    title: string
    description?: string | null
    address: string
    region: string
    city?: string | null
    postal_code?: string | null
    country?: string
    latitude?: number | null
    longitude?: number | null
    property_type?: $Enums.PropertyType
    listing_type?: $Enums.ListingType
    price: number
    surface: number
    rooms: number
    tags?: ApartmentCreatetagsInput | string[]
    availability?: boolean
    owner_id: string
    created_at?: Date | string
    updated_at?: Date | string
    pictures?: PictureUncheckedCreateNestedManyWithoutApartmentInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutApartmentInput
    viewedBy?: ViewedApartmentUncheckedCreateNestedManyWithoutApartmentInput
    swipes?: SwipeUncheckedCreateNestedManyWithoutApartmentInput
    requests?: RequestUncheckedCreateNestedManyWithoutApartmentInput
  }

  export type ApartmentCreateOrConnectWithoutMatchesInput = {
    where: ApartmentWhereUniqueInput
    create: XOR<ApartmentCreateWithoutMatchesInput, ApartmentUncheckedCreateWithoutMatchesInput>
  }

  export type MessageCreateWithoutMatchInput = {
    id?: string
    content: string
    created_at?: Date | string
    sender: UserCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutMatchInput = {
    id?: string
    content: string
    sender_id: string
    created_at?: Date | string
  }

  export type MessageCreateOrConnectWithoutMatchInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutMatchInput, MessageUncheckedCreateWithoutMatchInput>
  }

  export type MessageCreateManyMatchInputEnvelope = {
    data: MessageCreateManyMatchInput | MessageCreateManyMatchInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutMatchesInput = {
    update: XOR<UserUpdateWithoutMatchesInput, UserUncheckedUpdateWithoutMatchesInput>
    create: XOR<UserCreateWithoutMatchesInput, UserUncheckedCreateWithoutMatchesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMatchesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMatchesInput, UserUncheckedUpdateWithoutMatchesInput>
  }

  export type UserUpdateWithoutMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    email_notifications?: BoolFieldUpdateOperationsInput | boolean
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    siret?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    pictures?: PictureUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    viewed_apartments?: ViewedApartmentUpdateManyWithoutUserNestedInput
    swipes?: SwipeUpdateManyWithoutUserNestedInput
    requests?: RequestUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    owned_apartments?: ApartmentUpdateManyWithoutOwnerNestedInput
    preferences?: PreferencesUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    email_notifications?: BoolFieldUpdateOperationsInput | boolean
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    siret?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    pictures?: PictureUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    viewed_apartments?: ViewedApartmentUncheckedUpdateManyWithoutUserNestedInput
    swipes?: SwipeUncheckedUpdateManyWithoutUserNestedInput
    requests?: RequestUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    owned_apartments?: ApartmentUncheckedUpdateManyWithoutOwnerNestedInput
    preferences?: PreferencesUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ApartmentUpsertWithoutMatchesInput = {
    update: XOR<ApartmentUpdateWithoutMatchesInput, ApartmentUncheckedUpdateWithoutMatchesInput>
    create: XOR<ApartmentCreateWithoutMatchesInput, ApartmentUncheckedCreateWithoutMatchesInput>
    where?: ApartmentWhereInput
  }

  export type ApartmentUpdateToOneWithWhereWithoutMatchesInput = {
    where?: ApartmentWhereInput
    data: XOR<ApartmentUpdateWithoutMatchesInput, ApartmentUncheckedUpdateWithoutMatchesInput>
  }

  export type ApartmentUpdateWithoutMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    property_type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    listing_type?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    price?: FloatFieldUpdateOperationsInput | number
    surface?: FloatFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    tags?: ApartmentUpdatetagsInput | string[]
    availability?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwned_apartmentsNestedInput
    pictures?: PictureUpdateManyWithoutApartmentNestedInput
    favorites?: FavoriteUpdateManyWithoutApartmentNestedInput
    viewedBy?: ViewedApartmentUpdateManyWithoutApartmentNestedInput
    swipes?: SwipeUpdateManyWithoutApartmentNestedInput
    requests?: RequestUpdateManyWithoutApartmentNestedInput
  }

  export type ApartmentUncheckedUpdateWithoutMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    property_type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    listing_type?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    price?: FloatFieldUpdateOperationsInput | number
    surface?: FloatFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    tags?: ApartmentUpdatetagsInput | string[]
    availability?: BoolFieldUpdateOperationsInput | boolean
    owner_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pictures?: PictureUncheckedUpdateManyWithoutApartmentNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutApartmentNestedInput
    viewedBy?: ViewedApartmentUncheckedUpdateManyWithoutApartmentNestedInput
    swipes?: SwipeUncheckedUpdateManyWithoutApartmentNestedInput
    requests?: RequestUncheckedUpdateManyWithoutApartmentNestedInput
  }

  export type MessageUpsertWithWhereUniqueWithoutMatchInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutMatchInput, MessageUncheckedUpdateWithoutMatchInput>
    create: XOR<MessageCreateWithoutMatchInput, MessageUncheckedCreateWithoutMatchInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutMatchInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutMatchInput, MessageUncheckedUpdateWithoutMatchInput>
  }

  export type MessageUpdateManyWithWhereWithoutMatchInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutMatchInput>
  }

  export type MatchCreateWithoutMessagesInput = {
    id?: string
    created_at?: Date | string
    user: UserCreateNestedOneWithoutMatchesInput
    apartment: ApartmentCreateNestedOneWithoutMatchesInput
  }

  export type MatchUncheckedCreateWithoutMessagesInput = {
    id?: string
    user_id: string
    apartment_id: string
    created_at?: Date | string
  }

  export type MatchCreateOrConnectWithoutMessagesInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutMessagesInput, MatchUncheckedCreateWithoutMessagesInput>
  }

  export type UserCreateWithoutMessagesInput = {
    id?: string
    email: string
    password: string
    username: string
    role?: $Enums.Role
    phone?: string | null
    avatar?: string | null
    email_notifications?: boolean
    company_name?: string | null
    siret?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    pictures?: PictureCreateNestedManyWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
    viewed_apartments?: ViewedApartmentCreateNestedManyWithoutUserInput
    swipes?: SwipeCreateNestedManyWithoutUserInput
    matches?: MatchCreateNestedManyWithoutUserInput
    requests?: RequestCreateNestedManyWithoutUserInput
    owned_apartments?: ApartmentCreateNestedManyWithoutOwnerInput
    preferences?: PreferencesCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMessagesInput = {
    id?: string
    email: string
    password: string
    username: string
    role?: $Enums.Role
    phone?: string | null
    avatar?: string | null
    email_notifications?: boolean
    company_name?: string | null
    siret?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    pictures?: PictureUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
    viewed_apartments?: ViewedApartmentUncheckedCreateNestedManyWithoutUserInput
    swipes?: SwipeUncheckedCreateNestedManyWithoutUserInput
    matches?: MatchUncheckedCreateNestedManyWithoutUserInput
    requests?: RequestUncheckedCreateNestedManyWithoutUserInput
    owned_apartments?: ApartmentUncheckedCreateNestedManyWithoutOwnerInput
    preferences?: PreferencesUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
  }

  export type MatchUpsertWithoutMessagesInput = {
    update: XOR<MatchUpdateWithoutMessagesInput, MatchUncheckedUpdateWithoutMessagesInput>
    create: XOR<MatchCreateWithoutMessagesInput, MatchUncheckedCreateWithoutMessagesInput>
    where?: MatchWhereInput
  }

  export type MatchUpdateToOneWithWhereWithoutMessagesInput = {
    where?: MatchWhereInput
    data: XOR<MatchUpdateWithoutMessagesInput, MatchUncheckedUpdateWithoutMessagesInput>
  }

  export type MatchUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMatchesNestedInput
    apartment?: ApartmentUpdateOneRequiredWithoutMatchesNestedInput
  }

  export type MatchUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    apartment_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutMessagesInput = {
    update: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    email_notifications?: BoolFieldUpdateOperationsInput | boolean
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    siret?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    pictures?: PictureUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
    viewed_apartments?: ViewedApartmentUpdateManyWithoutUserNestedInput
    swipes?: SwipeUpdateManyWithoutUserNestedInput
    matches?: MatchUpdateManyWithoutUserNestedInput
    requests?: RequestUpdateManyWithoutUserNestedInput
    owned_apartments?: ApartmentUpdateManyWithoutOwnerNestedInput
    preferences?: PreferencesUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    email_notifications?: BoolFieldUpdateOperationsInput | boolean
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    siret?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    pictures?: PictureUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
    viewed_apartments?: ViewedApartmentUncheckedUpdateManyWithoutUserNestedInput
    swipes?: SwipeUncheckedUpdateManyWithoutUserNestedInput
    matches?: MatchUncheckedUpdateManyWithoutUserNestedInput
    requests?: RequestUncheckedUpdateManyWithoutUserNestedInput
    owned_apartments?: ApartmentUncheckedUpdateManyWithoutOwnerNestedInput
    preferences?: PreferencesUncheckedUpdateOneWithoutUserNestedInput
  }

  export type RequestCreateWithoutDocumentsInput = {
    id?: string
    status?: $Enums.RequestStatus
    message?: string | null
    visit_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    apartment: ApartmentCreateNestedOneWithoutRequestsInput
    user: UserCreateNestedOneWithoutRequestsInput
  }

  export type RequestUncheckedCreateWithoutDocumentsInput = {
    id?: string
    apartment_id: string
    user_id: string
    status?: $Enums.RequestStatus
    message?: string | null
    visit_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RequestCreateOrConnectWithoutDocumentsInput = {
    where: RequestWhereUniqueInput
    create: XOR<RequestCreateWithoutDocumentsInput, RequestUncheckedCreateWithoutDocumentsInput>
  }

  export type RequestUpsertWithoutDocumentsInput = {
    update: XOR<RequestUpdateWithoutDocumentsInput, RequestUncheckedUpdateWithoutDocumentsInput>
    create: XOR<RequestCreateWithoutDocumentsInput, RequestUncheckedCreateWithoutDocumentsInput>
    where?: RequestWhereInput
  }

  export type RequestUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: RequestWhereInput
    data: XOR<RequestUpdateWithoutDocumentsInput, RequestUncheckedUpdateWithoutDocumentsInput>
  }

  export type RequestUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    visit_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    apartment?: ApartmentUpdateOneRequiredWithoutRequestsNestedInput
    user?: UserUpdateOneRequiredWithoutRequestsNestedInput
  }

  export type RequestUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    apartment_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    visit_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PictureCreateManyUserInput = {
    id?: string
    url: string
    type: $Enums.PictureType
    uploaded_at?: Date | string
    apartment_id?: string | null
  }

  export type FavoriteCreateManyUserInput = {
    id?: string
    apartment_id: string
  }

  export type ViewedApartmentCreateManyUserInput = {
    id?: string
    viewed_at?: Date | string
    apartment_id: string
  }

  export type SwipeCreateManyUserInput = {
    id?: string
    apartment_id: string
    direction: $Enums.SwipeDirection
    created_at?: Date | string
  }

  export type MatchCreateManyUserInput = {
    id?: string
    apartment_id: string
    created_at?: Date | string
  }

  export type RequestCreateManyUserInput = {
    id?: string
    apartment_id: string
    status?: $Enums.RequestStatus
    message?: string | null
    visit_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MessageCreateManySenderInput = {
    id?: string
    content: string
    match_id: string
    created_at?: Date | string
  }

  export type ApartmentCreateManyOwnerInput = {
    id?: string
    title: string
    description?: string | null
    address: string
    region: string
    city?: string | null
    postal_code?: string | null
    country?: string
    latitude?: number | null
    longitude?: number | null
    property_type?: $Enums.PropertyType
    listing_type?: $Enums.ListingType
    price: number
    surface: number
    rooms: number
    tags?: ApartmentCreatetagsInput | string[]
    availability?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PictureUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumPictureTypeFieldUpdateOperationsInput | $Enums.PictureType
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    apartment?: ApartmentUpdateOneWithoutPicturesNestedInput
  }

  export type PictureUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumPictureTypeFieldUpdateOperationsInput | $Enums.PictureType
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    apartment_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PictureUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumPictureTypeFieldUpdateOperationsInput | $Enums.PictureType
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    apartment_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FavoriteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    apartment?: ApartmentUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoriteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    apartment_id?: StringFieldUpdateOperationsInput | string
  }

  export type FavoriteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    apartment_id?: StringFieldUpdateOperationsInput | string
  }

  export type ViewedApartmentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    apartment?: ApartmentUpdateOneRequiredWithoutViewedByNestedInput
  }

  export type ViewedApartmentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    apartment_id?: StringFieldUpdateOperationsInput | string
  }

  export type ViewedApartmentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    apartment_id?: StringFieldUpdateOperationsInput | string
  }

  export type SwipeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    direction?: EnumSwipeDirectionFieldUpdateOperationsInput | $Enums.SwipeDirection
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    apartment?: ApartmentUpdateOneRequiredWithoutSwipesNestedInput
  }

  export type SwipeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    apartment_id?: StringFieldUpdateOperationsInput | string
    direction?: EnumSwipeDirectionFieldUpdateOperationsInput | $Enums.SwipeDirection
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SwipeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    apartment_id?: StringFieldUpdateOperationsInput | string
    direction?: EnumSwipeDirectionFieldUpdateOperationsInput | $Enums.SwipeDirection
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    apartment?: ApartmentUpdateOneRequiredWithoutMatchesNestedInput
    messages?: MessageUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    apartment_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    apartment_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    visit_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    apartment?: ApartmentUpdateOneRequiredWithoutRequestsNestedInput
    documents?: RequestDocumentUpdateManyWithoutRequestNestedInput
  }

  export type RequestUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    apartment_id?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    visit_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: RequestDocumentUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type RequestUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    apartment_id?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    visit_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    match?: MatchUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    match_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    match_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApartmentUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    property_type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    listing_type?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    price?: FloatFieldUpdateOperationsInput | number
    surface?: FloatFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    tags?: ApartmentUpdatetagsInput | string[]
    availability?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pictures?: PictureUpdateManyWithoutApartmentNestedInput
    favorites?: FavoriteUpdateManyWithoutApartmentNestedInput
    viewedBy?: ViewedApartmentUpdateManyWithoutApartmentNestedInput
    swipes?: SwipeUpdateManyWithoutApartmentNestedInput
    matches?: MatchUpdateManyWithoutApartmentNestedInput
    requests?: RequestUpdateManyWithoutApartmentNestedInput
  }

  export type ApartmentUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    property_type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    listing_type?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    price?: FloatFieldUpdateOperationsInput | number
    surface?: FloatFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    tags?: ApartmentUpdatetagsInput | string[]
    availability?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pictures?: PictureUncheckedUpdateManyWithoutApartmentNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutApartmentNestedInput
    viewedBy?: ViewedApartmentUncheckedUpdateManyWithoutApartmentNestedInput
    swipes?: SwipeUncheckedUpdateManyWithoutApartmentNestedInput
    matches?: MatchUncheckedUpdateManyWithoutApartmentNestedInput
    requests?: RequestUncheckedUpdateManyWithoutApartmentNestedInput
  }

  export type ApartmentUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    property_type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    listing_type?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    price?: FloatFieldUpdateOperationsInput | number
    surface?: FloatFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    tags?: ApartmentUpdatetagsInput | string[]
    availability?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PictureCreateManyApartmentInput = {
    id?: string
    url: string
    type: $Enums.PictureType
    uploaded_at?: Date | string
    user_id?: string | null
  }

  export type FavoriteCreateManyApartmentInput = {
    id?: string
    user_id: string
  }

  export type ViewedApartmentCreateManyApartmentInput = {
    id?: string
    viewed_at?: Date | string
    user_id: string
  }

  export type SwipeCreateManyApartmentInput = {
    id?: string
    user_id: string
    direction: $Enums.SwipeDirection
    created_at?: Date | string
  }

  export type MatchCreateManyApartmentInput = {
    id?: string
    user_id: string
    created_at?: Date | string
  }

  export type RequestCreateManyApartmentInput = {
    id?: string
    user_id: string
    status?: $Enums.RequestStatus
    message?: string | null
    visit_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PictureUpdateWithoutApartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumPictureTypeFieldUpdateOperationsInput | $Enums.PictureType
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutPicturesNestedInput
  }

  export type PictureUncheckedUpdateWithoutApartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumPictureTypeFieldUpdateOperationsInput | $Enums.PictureType
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PictureUncheckedUpdateManyWithoutApartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumPictureTypeFieldUpdateOperationsInput | $Enums.PictureType
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FavoriteUpdateWithoutApartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoriteUncheckedUpdateWithoutApartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type FavoriteUncheckedUpdateManyWithoutApartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type ViewedApartmentUpdateWithoutApartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutViewed_apartmentsNestedInput
  }

  export type ViewedApartmentUncheckedUpdateWithoutApartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type ViewedApartmentUncheckedUpdateManyWithoutApartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type SwipeUpdateWithoutApartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    direction?: EnumSwipeDirectionFieldUpdateOperationsInput | $Enums.SwipeDirection
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSwipesNestedInput
  }

  export type SwipeUncheckedUpdateWithoutApartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    direction?: EnumSwipeDirectionFieldUpdateOperationsInput | $Enums.SwipeDirection
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SwipeUncheckedUpdateManyWithoutApartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    direction?: EnumSwipeDirectionFieldUpdateOperationsInput | $Enums.SwipeDirection
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUpdateWithoutApartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMatchesNestedInput
    messages?: MessageUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutApartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateManyWithoutApartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestUpdateWithoutApartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    visit_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRequestsNestedInput
    documents?: RequestDocumentUpdateManyWithoutRequestNestedInput
  }

  export type RequestUncheckedUpdateWithoutApartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    visit_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: RequestDocumentUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type RequestUncheckedUpdateManyWithoutApartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    visit_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestDocumentCreateManyRequestInput = {
    id?: string
    name: string
    url: string
    uploaded_at?: Date | string
  }

  export type RequestDocumentUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestDocumentUncheckedUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestDocumentUncheckedUpdateManyWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyMatchInput = {
    id?: string
    content: string
    sender_id: string
    created_at?: Date | string
  }

  export type MessageUpdateWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}