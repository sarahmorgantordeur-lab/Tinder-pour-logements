
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
 * Model Agency
 * 
 */
export type Agency = $Result.DefaultSelection<Prisma.$AgencyPayload>
/**
 * Model TenantProfile
 * 
 */
export type TenantProfile = $Result.DefaultSelection<Prisma.$TenantProfilePayload>
/**
 * Model Property
 * 
 */
export type Property = $Result.DefaultSelection<Prisma.$PropertyPayload>
/**
 * Model AnnouncementPhoto
 * 
 */
export type AnnouncementPhoto = $Result.DefaultSelection<Prisma.$AnnouncementPhotoPayload>
/**
 * Model ProfilePhoto
 * 
 */
export type ProfilePhoto = $Result.DefaultSelection<Prisma.$ProfilePhotoPayload>
/**
 * Model Document
 * 
 */
export type Document = $Result.DefaultSelection<Prisma.$DocumentPayload>
/**
 * Model Swipe
 * 
 */
export type Swipe = $Result.DefaultSelection<Prisma.$SwipePayload>
/**
 * Model Conversation
 * 
 */
export type Conversation = $Result.DefaultSelection<Prisma.$ConversationPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>

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


export const PropertyType: {
  Bungalow: 'Bungalow',
  Chalet: 'Chalet',
  Castel: 'Castel',
  Farm: 'Farm',
  CountryHouse: 'CountryHouse',
  ApartmentBuilding: 'ApartmentBuilding',
  MixedUseBuilding: 'MixedUseBuilding',
  BelEtageHouse: 'BelEtageHouse',
  Mansion: 'Mansion',
  Villa: 'Villa',
  ManorHouse: 'ManorHouse',
  Pavilion: 'Pavilion',
  GroundFloor: 'GroundFloor',
  Duplex: 'Duplex',
  Triplex: 'Triplex',
  Studio: 'Studio',
  Penthouse: 'Penthouse',
  Loft: 'Loft',
  StudentHousing: 'StudentHousing',
  ServiceApartment: 'ServiceApartment',
  Appartement: 'Appartement',
  Other: 'Other'
};

export type PropertyType = (typeof PropertyType)[keyof typeof PropertyType]


export const PropertyStatus: {
  draft: 'draft',
  published: 'published',
  rented: 'rented',
  archived: 'archived'
};

export type PropertyStatus = (typeof PropertyStatus)[keyof typeof PropertyStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type PropertyType = $Enums.PropertyType

export const PropertyType: typeof $Enums.PropertyType

export type PropertyStatus = $Enums.PropertyStatus

export const PropertyStatus: typeof $Enums.PropertyStatus

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
   * `prisma.agency`: Exposes CRUD operations for the **Agency** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agencies
    * const agencies = await prisma.agency.findMany()
    * ```
    */
  get agency(): Prisma.AgencyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tenantProfile`: Exposes CRUD operations for the **TenantProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TenantProfiles
    * const tenantProfiles = await prisma.tenantProfile.findMany()
    * ```
    */
  get tenantProfile(): Prisma.TenantProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.property`: Exposes CRUD operations for the **Property** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Properties
    * const properties = await prisma.property.findMany()
    * ```
    */
  get property(): Prisma.PropertyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.announcementPhoto`: Exposes CRUD operations for the **AnnouncementPhoto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnnouncementPhotos
    * const announcementPhotos = await prisma.announcementPhoto.findMany()
    * ```
    */
  get announcementPhoto(): Prisma.AnnouncementPhotoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profilePhoto`: Exposes CRUD operations for the **ProfilePhoto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProfilePhotos
    * const profilePhotos = await prisma.profilePhoto.findMany()
    * ```
    */
  get profilePhoto(): Prisma.ProfilePhotoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.document`: Exposes CRUD operations for the **Document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.document.findMany()
    * ```
    */
  get document(): Prisma.DocumentDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.conversation`: Exposes CRUD operations for the **Conversation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conversations
    * const conversations = await prisma.conversation.findMany()
    * ```
    */
  get conversation(): Prisma.ConversationDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.4.0
   * Query Engine version: ab56fe763f921d033a6c195e7ddeb3e255bdbb57
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
    Agency: 'Agency',
    TenantProfile: 'TenantProfile',
    Property: 'Property',
    AnnouncementPhoto: 'AnnouncementPhoto',
    ProfilePhoto: 'ProfilePhoto',
    Document: 'Document',
    Swipe: 'Swipe',
    Conversation: 'Conversation',
    Message: 'Message',
    Address: 'Address'
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
      modelProps: "user" | "agency" | "tenantProfile" | "property" | "announcementPhoto" | "profilePhoto" | "document" | "swipe" | "conversation" | "message" | "address"
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
      Agency: {
        payload: Prisma.$AgencyPayload<ExtArgs>
        fields: Prisma.AgencyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgencyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgencyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>
          }
          findFirst: {
            args: Prisma.AgencyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgencyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>
          }
          findMany: {
            args: Prisma.AgencyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>[]
          }
          create: {
            args: Prisma.AgencyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>
          }
          createMany: {
            args: Prisma.AgencyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgencyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>[]
          }
          delete: {
            args: Prisma.AgencyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>
          }
          update: {
            args: Prisma.AgencyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>
          }
          deleteMany: {
            args: Prisma.AgencyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgencyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AgencyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>[]
          }
          upsert: {
            args: Prisma.AgencyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencyPayload>
          }
          aggregate: {
            args: Prisma.AgencyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgency>
          }
          groupBy: {
            args: Prisma.AgencyGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgencyGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgencyCountArgs<ExtArgs>
            result: $Utils.Optional<AgencyCountAggregateOutputType> | number
          }
        }
      }
      TenantProfile: {
        payload: Prisma.$TenantProfilePayload<ExtArgs>
        fields: Prisma.TenantProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenantProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenantProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantProfilePayload>
          }
          findFirst: {
            args: Prisma.TenantProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenantProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantProfilePayload>
          }
          findMany: {
            args: Prisma.TenantProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantProfilePayload>[]
          }
          create: {
            args: Prisma.TenantProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantProfilePayload>
          }
          createMany: {
            args: Prisma.TenantProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TenantProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantProfilePayload>[]
          }
          delete: {
            args: Prisma.TenantProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantProfilePayload>
          }
          update: {
            args: Prisma.TenantProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantProfilePayload>
          }
          deleteMany: {
            args: Prisma.TenantProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TenantProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TenantProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantProfilePayload>[]
          }
          upsert: {
            args: Prisma.TenantProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantProfilePayload>
          }
          aggregate: {
            args: Prisma.TenantProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenantProfile>
          }
          groupBy: {
            args: Prisma.TenantProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenantProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenantProfileCountArgs<ExtArgs>
            result: $Utils.Optional<TenantProfileCountAggregateOutputType> | number
          }
        }
      }
      Property: {
        payload: Prisma.$PropertyPayload<ExtArgs>
        fields: Prisma.PropertyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findFirst: {
            args: Prisma.PropertyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findMany: {
            args: Prisma.PropertyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          create: {
            args: Prisma.PropertyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          createMany: {
            args: Prisma.PropertyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          delete: {
            args: Prisma.PropertyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          update: {
            args: Prisma.PropertyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          deleteMany: {
            args: Prisma.PropertyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PropertyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          upsert: {
            args: Prisma.PropertyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          aggregate: {
            args: Prisma.PropertyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProperty>
          }
          groupBy: {
            args: Prisma.PropertyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyCountAggregateOutputType> | number
          }
        }
      }
      AnnouncementPhoto: {
        payload: Prisma.$AnnouncementPhotoPayload<ExtArgs>
        fields: Prisma.AnnouncementPhotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnnouncementPhotoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPhotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnnouncementPhotoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPhotoPayload>
          }
          findFirst: {
            args: Prisma.AnnouncementPhotoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPhotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnnouncementPhotoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPhotoPayload>
          }
          findMany: {
            args: Prisma.AnnouncementPhotoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPhotoPayload>[]
          }
          create: {
            args: Prisma.AnnouncementPhotoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPhotoPayload>
          }
          createMany: {
            args: Prisma.AnnouncementPhotoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnnouncementPhotoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPhotoPayload>[]
          }
          delete: {
            args: Prisma.AnnouncementPhotoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPhotoPayload>
          }
          update: {
            args: Prisma.AnnouncementPhotoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPhotoPayload>
          }
          deleteMany: {
            args: Prisma.AnnouncementPhotoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnnouncementPhotoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnnouncementPhotoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPhotoPayload>[]
          }
          upsert: {
            args: Prisma.AnnouncementPhotoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPhotoPayload>
          }
          aggregate: {
            args: Prisma.AnnouncementPhotoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnnouncementPhoto>
          }
          groupBy: {
            args: Prisma.AnnouncementPhotoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnnouncementPhotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnnouncementPhotoCountArgs<ExtArgs>
            result: $Utils.Optional<AnnouncementPhotoCountAggregateOutputType> | number
          }
        }
      }
      ProfilePhoto: {
        payload: Prisma.$ProfilePhotoPayload<ExtArgs>
        fields: Prisma.ProfilePhotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfilePhotoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePhotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfilePhotoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePhotoPayload>
          }
          findFirst: {
            args: Prisma.ProfilePhotoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePhotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfilePhotoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePhotoPayload>
          }
          findMany: {
            args: Prisma.ProfilePhotoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePhotoPayload>[]
          }
          create: {
            args: Prisma.ProfilePhotoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePhotoPayload>
          }
          createMany: {
            args: Prisma.ProfilePhotoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfilePhotoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePhotoPayload>[]
          }
          delete: {
            args: Prisma.ProfilePhotoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePhotoPayload>
          }
          update: {
            args: Prisma.ProfilePhotoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePhotoPayload>
          }
          deleteMany: {
            args: Prisma.ProfilePhotoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfilePhotoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfilePhotoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePhotoPayload>[]
          }
          upsert: {
            args: Prisma.ProfilePhotoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePhotoPayload>
          }
          aggregate: {
            args: Prisma.ProfilePhotoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfilePhoto>
          }
          groupBy: {
            args: Prisma.ProfilePhotoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfilePhotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfilePhotoCountArgs<ExtArgs>
            result: $Utils.Optional<ProfilePhotoCountAggregateOutputType> | number
          }
        }
      }
      Document: {
        payload: Prisma.$DocumentPayload<ExtArgs>
        fields: Prisma.DocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findFirst: {
            args: Prisma.DocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findMany: {
            args: Prisma.DocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          create: {
            args: Prisma.DocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          createMany: {
            args: Prisma.DocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          delete: {
            args: Prisma.DocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          update: {
            args: Prisma.DocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          deleteMany: {
            args: Prisma.DocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          upsert: {
            args: Prisma.DocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          aggregate: {
            args: Prisma.DocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument>
          }
          groupBy: {
            args: Prisma.DocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentCountAggregateOutputType> | number
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
      Conversation: {
        payload: Prisma.$ConversationPayload<ExtArgs>
        fields: Prisma.ConversationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConversationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConversationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          findFirst: {
            args: Prisma.ConversationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConversationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          findMany: {
            args: Prisma.ConversationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          create: {
            args: Prisma.ConversationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          createMany: {
            args: Prisma.ConversationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConversationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          delete: {
            args: Prisma.ConversationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          update: {
            args: Prisma.ConversationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          deleteMany: {
            args: Prisma.ConversationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConversationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConversationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          upsert: {
            args: Prisma.ConversationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          aggregate: {
            args: Prisma.ConversationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConversation>
          }
          groupBy: {
            args: Prisma.ConversationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConversationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConversationCountArgs<ExtArgs>
            result: $Utils.Optional<ConversationCountAggregateOutputType> | number
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
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
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
    agency?: AgencyOmit
    tenantProfile?: TenantProfileOmit
    property?: PropertyOmit
    announcementPhoto?: AnnouncementPhotoOmit
    profilePhoto?: ProfilePhotoOmit
    document?: DocumentOmit
    swipe?: SwipeOmit
    conversation?: ConversationOmit
    message?: MessageOmit
    address?: AddressOmit
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
    properties: number
    swipes: number
    conversations_as_tenant: number
    conversations_as_owner: number
    messages: number
    profile_photos: number
    documents: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | UserCountOutputTypeCountPropertiesArgs
    swipes?: boolean | UserCountOutputTypeCountSwipesArgs
    conversations_as_tenant?: boolean | UserCountOutputTypeCountConversations_as_tenantArgs
    conversations_as_owner?: boolean | UserCountOutputTypeCountConversations_as_ownerArgs
    messages?: boolean | UserCountOutputTypeCountMessagesArgs
    profile_photos?: boolean | UserCountOutputTypeCountProfile_photosArgs
    documents?: boolean | UserCountOutputTypeCountDocumentsArgs
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
  export type UserCountOutputTypeCountPropertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
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
  export type UserCountOutputTypeCountConversations_as_tenantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountConversations_as_ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
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
  export type UserCountOutputTypeCountProfile_photosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfilePhotoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }


  /**
   * Count Type PropertyCountOutputType
   */

  export type PropertyCountOutputType = {
    photos: number
    swipes: number
    conversations: number
  }

  export type PropertyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photos?: boolean | PropertyCountOutputTypeCountPhotosArgs
    swipes?: boolean | PropertyCountOutputTypeCountSwipesArgs
    conversations?: boolean | PropertyCountOutputTypeCountConversationsArgs
  }

  // Custom InputTypes
  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCountOutputType
     */
    select?: PropertyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnouncementPhotoWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountSwipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SwipeWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountConversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
  }


  /**
   * Count Type ConversationCountOutputType
   */

  export type ConversationCountOutputType = {
    messages: number
  }

  export type ConversationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ConversationCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationCountOutputType
     */
    select?: ConversationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Count Type AddressCountOutputType
   */

  export type AddressCountOutputType = {
    users: number
    agencies: number
    properties: number
  }

  export type AddressCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | AddressCountOutputTypeCountUsersArgs
    agencies?: boolean | AddressCountOutputTypeCountAgenciesArgs
    properties?: boolean | AddressCountOutputTypeCountPropertiesArgs
  }

  // Custom InputTypes
  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressCountOutputType
     */
    select?: AddressCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeCountAgenciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgencyWhereInput
  }

  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeCountPropertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
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
    firstname: string | null
    lastname: string | null
    phone: string | null
    bio: string | null
    role: $Enums.Role | null
    is_active: boolean | null
    address_id: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstname: string | null
    lastname: string | null
    phone: string | null
    bio: string | null
    role: $Enums.Role | null
    is_active: boolean | null
    address_id: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    firstname: number
    lastname: number
    phone: number
    bio: number
    role: number
    is_active: number
    address_id: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstname?: true
    lastname?: true
    phone?: true
    bio?: true
    role?: true
    is_active?: true
    address_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstname?: true
    lastname?: true
    phone?: true
    bio?: true
    role?: true
    is_active?: true
    address_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstname?: true
    lastname?: true
    phone?: true
    bio?: true
    role?: true
    is_active?: true
    address_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
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
    firstname: string
    lastname: string
    phone: string | null
    bio: string | null
    role: $Enums.Role
    is_active: boolean
    address_id: string
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
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
    firstname?: boolean
    lastname?: boolean
    phone?: boolean
    bio?: boolean
    role?: boolean
    is_active?: boolean
    address_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    agency?: boolean | User$agencyArgs<ExtArgs>
    tenant_profile?: boolean | User$tenant_profileArgs<ExtArgs>
    properties?: boolean | User$propertiesArgs<ExtArgs>
    swipes?: boolean | User$swipesArgs<ExtArgs>
    conversations_as_tenant?: boolean | User$conversations_as_tenantArgs<ExtArgs>
    conversations_as_owner?: boolean | User$conversations_as_ownerArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    profile_photos?: boolean | User$profile_photosArgs<ExtArgs>
    documents?: boolean | User$documentsArgs<ExtArgs>
    address?: boolean | AddressDefaultArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstname?: boolean
    lastname?: boolean
    phone?: boolean
    bio?: boolean
    role?: boolean
    is_active?: boolean
    address_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    address?: boolean | AddressDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstname?: boolean
    lastname?: boolean
    phone?: boolean
    bio?: boolean
    role?: boolean
    is_active?: boolean
    address_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    address?: boolean | AddressDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    firstname?: boolean
    lastname?: boolean
    phone?: boolean
    bio?: boolean
    role?: boolean
    is_active?: boolean
    address_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "firstname" | "lastname" | "phone" | "bio" | "role" | "is_active" | "address_id" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agency?: boolean | User$agencyArgs<ExtArgs>
    tenant_profile?: boolean | User$tenant_profileArgs<ExtArgs>
    properties?: boolean | User$propertiesArgs<ExtArgs>
    swipes?: boolean | User$swipesArgs<ExtArgs>
    conversations_as_tenant?: boolean | User$conversations_as_tenantArgs<ExtArgs>
    conversations_as_owner?: boolean | User$conversations_as_ownerArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    profile_photos?: boolean | User$profile_photosArgs<ExtArgs>
    documents?: boolean | User$documentsArgs<ExtArgs>
    address?: boolean | AddressDefaultArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | AddressDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | AddressDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      agency: Prisma.$AgencyPayload<ExtArgs> | null
      tenant_profile: Prisma.$TenantProfilePayload<ExtArgs> | null
      properties: Prisma.$PropertyPayload<ExtArgs>[]
      swipes: Prisma.$SwipePayload<ExtArgs>[]
      conversations_as_tenant: Prisma.$ConversationPayload<ExtArgs>[]
      conversations_as_owner: Prisma.$ConversationPayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
      profile_photos: Prisma.$ProfilePhotoPayload<ExtArgs>[]
      documents: Prisma.$DocumentPayload<ExtArgs>[]
      address: Prisma.$AddressPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      firstname: string
      lastname: string
      phone: string | null
      bio: string | null
      role: $Enums.Role
      is_active: boolean
      address_id: string
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
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
    agency<T extends User$agencyArgs<ExtArgs> = {}>(args?: Subset<T, User$agencyArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tenant_profile<T extends User$tenant_profileArgs<ExtArgs> = {}>(args?: Subset<T, User$tenant_profileArgs<ExtArgs>>): Prisma__TenantProfileClient<$Result.GetResult<Prisma.$TenantProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    properties<T extends User$propertiesArgs<ExtArgs> = {}>(args?: Subset<T, User$propertiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    swipes<T extends User$swipesArgs<ExtArgs> = {}>(args?: Subset<T, User$swipesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SwipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    conversations_as_tenant<T extends User$conversations_as_tenantArgs<ExtArgs> = {}>(args?: Subset<T, User$conversations_as_tenantArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    conversations_as_owner<T extends User$conversations_as_ownerArgs<ExtArgs> = {}>(args?: Subset<T, User$conversations_as_ownerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends User$messagesArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profile_photos<T extends User$profile_photosArgs<ExtArgs> = {}>(args?: Subset<T, User$profile_photosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documents<T extends User$documentsArgs<ExtArgs> = {}>(args?: Subset<T, User$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    address<T extends AddressDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AddressDefaultArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly firstname: FieldRef<"User", 'String'>
    readonly lastname: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly is_active: FieldRef<"User", 'Boolean'>
    readonly address_id: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
    readonly deleted_at: FieldRef<"User", 'DateTime'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * User.agency
   */
  export type User$agencyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    where?: AgencyWhereInput
  }

  /**
   * User.tenant_profile
   */
  export type User$tenant_profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantProfile
     */
    select?: TenantProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantProfile
     */
    omit?: TenantProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantProfileInclude<ExtArgs> | null
    where?: TenantProfileWhereInput
  }

  /**
   * User.properties
   */
  export type User$propertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    cursor?: PropertyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
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
   * User.conversations_as_tenant
   */
  export type User$conversations_as_tenantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    cursor?: ConversationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * User.conversations_as_owner
   */
  export type User$conversations_as_ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    cursor?: ConversationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
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
   * User.profile_photos
   */
  export type User$profile_photosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfilePhoto
     */
    select?: ProfilePhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfilePhoto
     */
    omit?: ProfilePhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilePhotoInclude<ExtArgs> | null
    where?: ProfilePhotoWhereInput
    orderBy?: ProfilePhotoOrderByWithRelationInput | ProfilePhotoOrderByWithRelationInput[]
    cursor?: ProfilePhotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfilePhotoScalarFieldEnum | ProfilePhotoScalarFieldEnum[]
  }

  /**
   * User.documents
   */
  export type User$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
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
   * Model Agency
   */

  export type AggregateAgency = {
    _count: AgencyCountAggregateOutputType | null
    _min: AgencyMinAggregateOutputType | null
    _max: AgencyMaxAggregateOutputType | null
  }

  export type AgencyMinAggregateOutputType = {
    id: string | null
    nom_agence: string | null
    numero_tva: string | null
    numero_bce: string | null
    site_web: string | null
    address_id: string | null
    user_id: string | null
    created_at: Date | null
  }

  export type AgencyMaxAggregateOutputType = {
    id: string | null
    nom_agence: string | null
    numero_tva: string | null
    numero_bce: string | null
    site_web: string | null
    address_id: string | null
    user_id: string | null
    created_at: Date | null
  }

  export type AgencyCountAggregateOutputType = {
    id: number
    nom_agence: number
    numero_tva: number
    numero_bce: number
    site_web: number
    address_id: number
    user_id: number
    created_at: number
    _all: number
  }


  export type AgencyMinAggregateInputType = {
    id?: true
    nom_agence?: true
    numero_tva?: true
    numero_bce?: true
    site_web?: true
    address_id?: true
    user_id?: true
    created_at?: true
  }

  export type AgencyMaxAggregateInputType = {
    id?: true
    nom_agence?: true
    numero_tva?: true
    numero_bce?: true
    site_web?: true
    address_id?: true
    user_id?: true
    created_at?: true
  }

  export type AgencyCountAggregateInputType = {
    id?: true
    nom_agence?: true
    numero_tva?: true
    numero_bce?: true
    site_web?: true
    address_id?: true
    user_id?: true
    created_at?: true
    _all?: true
  }

  export type AgencyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agency to aggregate.
     */
    where?: AgencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agencies to fetch.
     */
    orderBy?: AgencyOrderByWithRelationInput | AgencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Agencies
    **/
    _count?: true | AgencyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgencyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgencyMaxAggregateInputType
  }

  export type GetAgencyAggregateType<T extends AgencyAggregateArgs> = {
        [P in keyof T & keyof AggregateAgency]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgency[P]>
      : GetScalarType<T[P], AggregateAgency[P]>
  }




  export type AgencyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgencyWhereInput
    orderBy?: AgencyOrderByWithAggregationInput | AgencyOrderByWithAggregationInput[]
    by: AgencyScalarFieldEnum[] | AgencyScalarFieldEnum
    having?: AgencyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgencyCountAggregateInputType | true
    _min?: AgencyMinAggregateInputType
    _max?: AgencyMaxAggregateInputType
  }

  export type AgencyGroupByOutputType = {
    id: string
    nom_agence: string
    numero_tva: string | null
    numero_bce: string | null
    site_web: string | null
    address_id: string
    user_id: string
    created_at: Date
    _count: AgencyCountAggregateOutputType | null
    _min: AgencyMinAggregateOutputType | null
    _max: AgencyMaxAggregateOutputType | null
  }

  type GetAgencyGroupByPayload<T extends AgencyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgencyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgencyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgencyGroupByOutputType[P]>
            : GetScalarType<T[P], AgencyGroupByOutputType[P]>
        }
      >
    >


  export type AgencySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom_agence?: boolean
    numero_tva?: boolean
    numero_bce?: boolean
    site_web?: boolean
    address_id?: boolean
    user_id?: boolean
    created_at?: boolean
    address?: boolean | AddressDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agency"]>

  export type AgencySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom_agence?: boolean
    numero_tva?: boolean
    numero_bce?: boolean
    site_web?: boolean
    address_id?: boolean
    user_id?: boolean
    created_at?: boolean
    address?: boolean | AddressDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agency"]>

  export type AgencySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom_agence?: boolean
    numero_tva?: boolean
    numero_bce?: boolean
    site_web?: boolean
    address_id?: boolean
    user_id?: boolean
    created_at?: boolean
    address?: boolean | AddressDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agency"]>

  export type AgencySelectScalar = {
    id?: boolean
    nom_agence?: boolean
    numero_tva?: boolean
    numero_bce?: boolean
    site_web?: boolean
    address_id?: boolean
    user_id?: boolean
    created_at?: boolean
  }

  export type AgencyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom_agence" | "numero_tva" | "numero_bce" | "site_web" | "address_id" | "user_id" | "created_at", ExtArgs["result"]["agency"]>
  export type AgencyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | AddressDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AgencyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | AddressDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AgencyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | AddressDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AgencyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Agency"
    objects: {
      address: Prisma.$AddressPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nom_agence: string
      numero_tva: string | null
      numero_bce: string | null
      site_web: string | null
      address_id: string
      user_id: string
      created_at: Date
    }, ExtArgs["result"]["agency"]>
    composites: {}
  }

  type AgencyGetPayload<S extends boolean | null | undefined | AgencyDefaultArgs> = $Result.GetResult<Prisma.$AgencyPayload, S>

  type AgencyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgencyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgencyCountAggregateInputType | true
    }

  export interface AgencyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Agency'], meta: { name: 'Agency' } }
    /**
     * Find zero or one Agency that matches the filter.
     * @param {AgencyFindUniqueArgs} args - Arguments to find a Agency
     * @example
     * // Get one Agency
     * const agency = await prisma.agency.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgencyFindUniqueArgs>(args: SelectSubset<T, AgencyFindUniqueArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Agency that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgencyFindUniqueOrThrowArgs} args - Arguments to find a Agency
     * @example
     * // Get one Agency
     * const agency = await prisma.agency.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgencyFindUniqueOrThrowArgs>(args: SelectSubset<T, AgencyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agency that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyFindFirstArgs} args - Arguments to find a Agency
     * @example
     * // Get one Agency
     * const agency = await prisma.agency.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgencyFindFirstArgs>(args?: SelectSubset<T, AgencyFindFirstArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agency that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyFindFirstOrThrowArgs} args - Arguments to find a Agency
     * @example
     * // Get one Agency
     * const agency = await prisma.agency.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgencyFindFirstOrThrowArgs>(args?: SelectSubset<T, AgencyFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Agencies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agencies
     * const agencies = await prisma.agency.findMany()
     * 
     * // Get first 10 Agencies
     * const agencies = await prisma.agency.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agencyWithIdOnly = await prisma.agency.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgencyFindManyArgs>(args?: SelectSubset<T, AgencyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Agency.
     * @param {AgencyCreateArgs} args - Arguments to create a Agency.
     * @example
     * // Create one Agency
     * const Agency = await prisma.agency.create({
     *   data: {
     *     // ... data to create a Agency
     *   }
     * })
     * 
     */
    create<T extends AgencyCreateArgs>(args: SelectSubset<T, AgencyCreateArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Agencies.
     * @param {AgencyCreateManyArgs} args - Arguments to create many Agencies.
     * @example
     * // Create many Agencies
     * const agency = await prisma.agency.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgencyCreateManyArgs>(args?: SelectSubset<T, AgencyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Agencies and returns the data saved in the database.
     * @param {AgencyCreateManyAndReturnArgs} args - Arguments to create many Agencies.
     * @example
     * // Create many Agencies
     * const agency = await prisma.agency.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Agencies and only return the `id`
     * const agencyWithIdOnly = await prisma.agency.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgencyCreateManyAndReturnArgs>(args?: SelectSubset<T, AgencyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Agency.
     * @param {AgencyDeleteArgs} args - Arguments to delete one Agency.
     * @example
     * // Delete one Agency
     * const Agency = await prisma.agency.delete({
     *   where: {
     *     // ... filter to delete one Agency
     *   }
     * })
     * 
     */
    delete<T extends AgencyDeleteArgs>(args: SelectSubset<T, AgencyDeleteArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Agency.
     * @param {AgencyUpdateArgs} args - Arguments to update one Agency.
     * @example
     * // Update one Agency
     * const agency = await prisma.agency.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgencyUpdateArgs>(args: SelectSubset<T, AgencyUpdateArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Agencies.
     * @param {AgencyDeleteManyArgs} args - Arguments to filter Agencies to delete.
     * @example
     * // Delete a few Agencies
     * const { count } = await prisma.agency.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgencyDeleteManyArgs>(args?: SelectSubset<T, AgencyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agencies
     * const agency = await prisma.agency.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgencyUpdateManyArgs>(args: SelectSubset<T, AgencyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agencies and returns the data updated in the database.
     * @param {AgencyUpdateManyAndReturnArgs} args - Arguments to update many Agencies.
     * @example
     * // Update many Agencies
     * const agency = await prisma.agency.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Agencies and only return the `id`
     * const agencyWithIdOnly = await prisma.agency.updateManyAndReturn({
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
    updateManyAndReturn<T extends AgencyUpdateManyAndReturnArgs>(args: SelectSubset<T, AgencyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Agency.
     * @param {AgencyUpsertArgs} args - Arguments to update or create a Agency.
     * @example
     * // Update or create a Agency
     * const agency = await prisma.agency.upsert({
     *   create: {
     *     // ... data to create a Agency
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agency we want to update
     *   }
     * })
     */
    upsert<T extends AgencyUpsertArgs>(args: SelectSubset<T, AgencyUpsertArgs<ExtArgs>>): Prisma__AgencyClient<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Agencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyCountArgs} args - Arguments to filter Agencies to count.
     * @example
     * // Count the number of Agencies
     * const count = await prisma.agency.count({
     *   where: {
     *     // ... the filter for the Agencies we want to count
     *   }
     * })
    **/
    count<T extends AgencyCountArgs>(
      args?: Subset<T, AgencyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgencyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AgencyAggregateArgs>(args: Subset<T, AgencyAggregateArgs>): Prisma.PrismaPromise<GetAgencyAggregateType<T>>

    /**
     * Group by Agency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencyGroupByArgs} args - Group by arguments.
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
      T extends AgencyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgencyGroupByArgs['orderBy'] }
        : { orderBy?: AgencyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AgencyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgencyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Agency model
   */
  readonly fields: AgencyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Agency.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgencyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    address<T extends AddressDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AddressDefaultArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Agency model
   */
  interface AgencyFieldRefs {
    readonly id: FieldRef<"Agency", 'String'>
    readonly nom_agence: FieldRef<"Agency", 'String'>
    readonly numero_tva: FieldRef<"Agency", 'String'>
    readonly numero_bce: FieldRef<"Agency", 'String'>
    readonly site_web: FieldRef<"Agency", 'String'>
    readonly address_id: FieldRef<"Agency", 'String'>
    readonly user_id: FieldRef<"Agency", 'String'>
    readonly created_at: FieldRef<"Agency", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Agency findUnique
   */
  export type AgencyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * Filter, which Agency to fetch.
     */
    where: AgencyWhereUniqueInput
  }

  /**
   * Agency findUniqueOrThrow
   */
  export type AgencyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * Filter, which Agency to fetch.
     */
    where: AgencyWhereUniqueInput
  }

  /**
   * Agency findFirst
   */
  export type AgencyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * Filter, which Agency to fetch.
     */
    where?: AgencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agencies to fetch.
     */
    orderBy?: AgencyOrderByWithRelationInput | AgencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agencies.
     */
    cursor?: AgencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agencies.
     */
    distinct?: AgencyScalarFieldEnum | AgencyScalarFieldEnum[]
  }

  /**
   * Agency findFirstOrThrow
   */
  export type AgencyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * Filter, which Agency to fetch.
     */
    where?: AgencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agencies to fetch.
     */
    orderBy?: AgencyOrderByWithRelationInput | AgencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agencies.
     */
    cursor?: AgencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agencies.
     */
    distinct?: AgencyScalarFieldEnum | AgencyScalarFieldEnum[]
  }

  /**
   * Agency findMany
   */
  export type AgencyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * Filter, which Agencies to fetch.
     */
    where?: AgencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agencies to fetch.
     */
    orderBy?: AgencyOrderByWithRelationInput | AgencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Agencies.
     */
    cursor?: AgencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agencies.
     */
    skip?: number
    distinct?: AgencyScalarFieldEnum | AgencyScalarFieldEnum[]
  }

  /**
   * Agency create
   */
  export type AgencyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * The data needed to create a Agency.
     */
    data: XOR<AgencyCreateInput, AgencyUncheckedCreateInput>
  }

  /**
   * Agency createMany
   */
  export type AgencyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Agencies.
     */
    data: AgencyCreateManyInput | AgencyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Agency createManyAndReturn
   */
  export type AgencyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * The data used to create many Agencies.
     */
    data: AgencyCreateManyInput | AgencyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Agency update
   */
  export type AgencyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * The data needed to update a Agency.
     */
    data: XOR<AgencyUpdateInput, AgencyUncheckedUpdateInput>
    /**
     * Choose, which Agency to update.
     */
    where: AgencyWhereUniqueInput
  }

  /**
   * Agency updateMany
   */
  export type AgencyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Agencies.
     */
    data: XOR<AgencyUpdateManyMutationInput, AgencyUncheckedUpdateManyInput>
    /**
     * Filter which Agencies to update
     */
    where?: AgencyWhereInput
    /**
     * Limit how many Agencies to update.
     */
    limit?: number
  }

  /**
   * Agency updateManyAndReturn
   */
  export type AgencyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * The data used to update Agencies.
     */
    data: XOR<AgencyUpdateManyMutationInput, AgencyUncheckedUpdateManyInput>
    /**
     * Filter which Agencies to update
     */
    where?: AgencyWhereInput
    /**
     * Limit how many Agencies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Agency upsert
   */
  export type AgencyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * The filter to search for the Agency to update in case it exists.
     */
    where: AgencyWhereUniqueInput
    /**
     * In case the Agency found by the `where` argument doesn't exist, create a new Agency with this data.
     */
    create: XOR<AgencyCreateInput, AgencyUncheckedCreateInput>
    /**
     * In case the Agency was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgencyUpdateInput, AgencyUncheckedUpdateInput>
  }

  /**
   * Agency delete
   */
  export type AgencyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    /**
     * Filter which Agency to delete.
     */
    where: AgencyWhereUniqueInput
  }

  /**
   * Agency deleteMany
   */
  export type AgencyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agencies to delete
     */
    where?: AgencyWhereInput
    /**
     * Limit how many Agencies to delete.
     */
    limit?: number
  }

  /**
   * Agency without action
   */
  export type AgencyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
  }


  /**
   * Model TenantProfile
   */

  export type AggregateTenantProfile = {
    _count: TenantProfileCountAggregateOutputType | null
    _avg: TenantProfileAvgAggregateOutputType | null
    _sum: TenantProfileSumAggregateOutputType | null
    _min: TenantProfileMinAggregateOutputType | null
    _max: TenantProfileMaxAggregateOutputType | null
  }

  export type TenantProfileAvgAggregateOutputType = {
    household_size: number | null
    budget_max: number | null
    min_surface: number | null
    max_surface: number | null
  }

  export type TenantProfileSumAggregateOutputType = {
    household_size: number | null
    budget_max: number | null
    min_surface: number | null
    max_surface: number | null
  }

  export type TenantProfileMinAggregateOutputType = {
    id: string | null
    household_size: number | null
    budget_max: number | null
    min_surface: number | null
    max_surface: number | null
    user_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TenantProfileMaxAggregateOutputType = {
    id: string | null
    household_size: number | null
    budget_max: number | null
    min_surface: number | null
    max_surface: number | null
    user_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TenantProfileCountAggregateOutputType = {
    id: number
    household_size: number
    budget_max: number
    min_surface: number
    max_surface: number
    regions: number
    property_types: number
    user_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TenantProfileAvgAggregateInputType = {
    household_size?: true
    budget_max?: true
    min_surface?: true
    max_surface?: true
  }

  export type TenantProfileSumAggregateInputType = {
    household_size?: true
    budget_max?: true
    min_surface?: true
    max_surface?: true
  }

  export type TenantProfileMinAggregateInputType = {
    id?: true
    household_size?: true
    budget_max?: true
    min_surface?: true
    max_surface?: true
    user_id?: true
    created_at?: true
    updated_at?: true
  }

  export type TenantProfileMaxAggregateInputType = {
    id?: true
    household_size?: true
    budget_max?: true
    min_surface?: true
    max_surface?: true
    user_id?: true
    created_at?: true
    updated_at?: true
  }

  export type TenantProfileCountAggregateInputType = {
    id?: true
    household_size?: true
    budget_max?: true
    min_surface?: true
    max_surface?: true
    regions?: true
    property_types?: true
    user_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TenantProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TenantProfile to aggregate.
     */
    where?: TenantProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenantProfiles to fetch.
     */
    orderBy?: TenantProfileOrderByWithRelationInput | TenantProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TenantProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenantProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenantProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TenantProfiles
    **/
    _count?: true | TenantProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TenantProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TenantProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenantProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenantProfileMaxAggregateInputType
  }

  export type GetTenantProfileAggregateType<T extends TenantProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateTenantProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenantProfile[P]>
      : GetScalarType<T[P], AggregateTenantProfile[P]>
  }




  export type TenantProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantProfileWhereInput
    orderBy?: TenantProfileOrderByWithAggregationInput | TenantProfileOrderByWithAggregationInput[]
    by: TenantProfileScalarFieldEnum[] | TenantProfileScalarFieldEnum
    having?: TenantProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantProfileCountAggregateInputType | true
    _avg?: TenantProfileAvgAggregateInputType
    _sum?: TenantProfileSumAggregateInputType
    _min?: TenantProfileMinAggregateInputType
    _max?: TenantProfileMaxAggregateInputType
  }

  export type TenantProfileGroupByOutputType = {
    id: string
    household_size: number | null
    budget_max: number | null
    min_surface: number | null
    max_surface: number | null
    regions: string[]
    property_types: $Enums.PropertyType[]
    user_id: string
    created_at: Date
    updated_at: Date
    _count: TenantProfileCountAggregateOutputType | null
    _avg: TenantProfileAvgAggregateOutputType | null
    _sum: TenantProfileSumAggregateOutputType | null
    _min: TenantProfileMinAggregateOutputType | null
    _max: TenantProfileMaxAggregateOutputType | null
  }

  type GetTenantProfileGroupByPayload<T extends TenantProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenantProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenantProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenantProfileGroupByOutputType[P]>
            : GetScalarType<T[P], TenantProfileGroupByOutputType[P]>
        }
      >
    >


  export type TenantProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    household_size?: boolean
    budget_max?: boolean
    min_surface?: boolean
    max_surface?: boolean
    regions?: boolean
    property_types?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenantProfile"]>

  export type TenantProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    household_size?: boolean
    budget_max?: boolean
    min_surface?: boolean
    max_surface?: boolean
    regions?: boolean
    property_types?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenantProfile"]>

  export type TenantProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    household_size?: boolean
    budget_max?: boolean
    min_surface?: boolean
    max_surface?: boolean
    regions?: boolean
    property_types?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenantProfile"]>

  export type TenantProfileSelectScalar = {
    id?: boolean
    household_size?: boolean
    budget_max?: boolean
    min_surface?: boolean
    max_surface?: boolean
    regions?: boolean
    property_types?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type TenantProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "household_size" | "budget_max" | "min_surface" | "max_surface" | "regions" | "property_types" | "user_id" | "created_at" | "updated_at", ExtArgs["result"]["tenantProfile"]>
  export type TenantProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TenantProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TenantProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TenantProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TenantProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      household_size: number | null
      budget_max: number | null
      min_surface: number | null
      max_surface: number | null
      regions: string[]
      property_types: $Enums.PropertyType[]
      user_id: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["tenantProfile"]>
    composites: {}
  }

  type TenantProfileGetPayload<S extends boolean | null | undefined | TenantProfileDefaultArgs> = $Result.GetResult<Prisma.$TenantProfilePayload, S>

  type TenantProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TenantProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TenantProfileCountAggregateInputType | true
    }

  export interface TenantProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TenantProfile'], meta: { name: 'TenantProfile' } }
    /**
     * Find zero or one TenantProfile that matches the filter.
     * @param {TenantProfileFindUniqueArgs} args - Arguments to find a TenantProfile
     * @example
     * // Get one TenantProfile
     * const tenantProfile = await prisma.tenantProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TenantProfileFindUniqueArgs>(args: SelectSubset<T, TenantProfileFindUniqueArgs<ExtArgs>>): Prisma__TenantProfileClient<$Result.GetResult<Prisma.$TenantProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TenantProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TenantProfileFindUniqueOrThrowArgs} args - Arguments to find a TenantProfile
     * @example
     * // Get one TenantProfile
     * const tenantProfile = await prisma.tenantProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TenantProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, TenantProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TenantProfileClient<$Result.GetResult<Prisma.$TenantProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TenantProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantProfileFindFirstArgs} args - Arguments to find a TenantProfile
     * @example
     * // Get one TenantProfile
     * const tenantProfile = await prisma.tenantProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TenantProfileFindFirstArgs>(args?: SelectSubset<T, TenantProfileFindFirstArgs<ExtArgs>>): Prisma__TenantProfileClient<$Result.GetResult<Prisma.$TenantProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TenantProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantProfileFindFirstOrThrowArgs} args - Arguments to find a TenantProfile
     * @example
     * // Get one TenantProfile
     * const tenantProfile = await prisma.tenantProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TenantProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, TenantProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__TenantProfileClient<$Result.GetResult<Prisma.$TenantProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TenantProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TenantProfiles
     * const tenantProfiles = await prisma.tenantProfile.findMany()
     * 
     * // Get first 10 TenantProfiles
     * const tenantProfiles = await prisma.tenantProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenantProfileWithIdOnly = await prisma.tenantProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TenantProfileFindManyArgs>(args?: SelectSubset<T, TenantProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TenantProfile.
     * @param {TenantProfileCreateArgs} args - Arguments to create a TenantProfile.
     * @example
     * // Create one TenantProfile
     * const TenantProfile = await prisma.tenantProfile.create({
     *   data: {
     *     // ... data to create a TenantProfile
     *   }
     * })
     * 
     */
    create<T extends TenantProfileCreateArgs>(args: SelectSubset<T, TenantProfileCreateArgs<ExtArgs>>): Prisma__TenantProfileClient<$Result.GetResult<Prisma.$TenantProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TenantProfiles.
     * @param {TenantProfileCreateManyArgs} args - Arguments to create many TenantProfiles.
     * @example
     * // Create many TenantProfiles
     * const tenantProfile = await prisma.tenantProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TenantProfileCreateManyArgs>(args?: SelectSubset<T, TenantProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TenantProfiles and returns the data saved in the database.
     * @param {TenantProfileCreateManyAndReturnArgs} args - Arguments to create many TenantProfiles.
     * @example
     * // Create many TenantProfiles
     * const tenantProfile = await prisma.tenantProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TenantProfiles and only return the `id`
     * const tenantProfileWithIdOnly = await prisma.tenantProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TenantProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, TenantProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TenantProfile.
     * @param {TenantProfileDeleteArgs} args - Arguments to delete one TenantProfile.
     * @example
     * // Delete one TenantProfile
     * const TenantProfile = await prisma.tenantProfile.delete({
     *   where: {
     *     // ... filter to delete one TenantProfile
     *   }
     * })
     * 
     */
    delete<T extends TenantProfileDeleteArgs>(args: SelectSubset<T, TenantProfileDeleteArgs<ExtArgs>>): Prisma__TenantProfileClient<$Result.GetResult<Prisma.$TenantProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TenantProfile.
     * @param {TenantProfileUpdateArgs} args - Arguments to update one TenantProfile.
     * @example
     * // Update one TenantProfile
     * const tenantProfile = await prisma.tenantProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TenantProfileUpdateArgs>(args: SelectSubset<T, TenantProfileUpdateArgs<ExtArgs>>): Prisma__TenantProfileClient<$Result.GetResult<Prisma.$TenantProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TenantProfiles.
     * @param {TenantProfileDeleteManyArgs} args - Arguments to filter TenantProfiles to delete.
     * @example
     * // Delete a few TenantProfiles
     * const { count } = await prisma.tenantProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TenantProfileDeleteManyArgs>(args?: SelectSubset<T, TenantProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TenantProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TenantProfiles
     * const tenantProfile = await prisma.tenantProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TenantProfileUpdateManyArgs>(args: SelectSubset<T, TenantProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TenantProfiles and returns the data updated in the database.
     * @param {TenantProfileUpdateManyAndReturnArgs} args - Arguments to update many TenantProfiles.
     * @example
     * // Update many TenantProfiles
     * const tenantProfile = await prisma.tenantProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TenantProfiles and only return the `id`
     * const tenantProfileWithIdOnly = await prisma.tenantProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends TenantProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, TenantProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TenantProfile.
     * @param {TenantProfileUpsertArgs} args - Arguments to update or create a TenantProfile.
     * @example
     * // Update or create a TenantProfile
     * const tenantProfile = await prisma.tenantProfile.upsert({
     *   create: {
     *     // ... data to create a TenantProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TenantProfile we want to update
     *   }
     * })
     */
    upsert<T extends TenantProfileUpsertArgs>(args: SelectSubset<T, TenantProfileUpsertArgs<ExtArgs>>): Prisma__TenantProfileClient<$Result.GetResult<Prisma.$TenantProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TenantProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantProfileCountArgs} args - Arguments to filter TenantProfiles to count.
     * @example
     * // Count the number of TenantProfiles
     * const count = await prisma.tenantProfile.count({
     *   where: {
     *     // ... the filter for the TenantProfiles we want to count
     *   }
     * })
    **/
    count<T extends TenantProfileCountArgs>(
      args?: Subset<T, TenantProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TenantProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TenantProfileAggregateArgs>(args: Subset<T, TenantProfileAggregateArgs>): Prisma.PrismaPromise<GetTenantProfileAggregateType<T>>

    /**
     * Group by TenantProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantProfileGroupByArgs} args - Group by arguments.
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
      T extends TenantProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenantProfileGroupByArgs['orderBy'] }
        : { orderBy?: TenantProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TenantProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TenantProfile model
   */
  readonly fields: TenantProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TenantProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenantProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the TenantProfile model
   */
  interface TenantProfileFieldRefs {
    readonly id: FieldRef<"TenantProfile", 'String'>
    readonly household_size: FieldRef<"TenantProfile", 'Int'>
    readonly budget_max: FieldRef<"TenantProfile", 'Float'>
    readonly min_surface: FieldRef<"TenantProfile", 'Int'>
    readonly max_surface: FieldRef<"TenantProfile", 'Int'>
    readonly regions: FieldRef<"TenantProfile", 'String[]'>
    readonly property_types: FieldRef<"TenantProfile", 'PropertyType[]'>
    readonly user_id: FieldRef<"TenantProfile", 'String'>
    readonly created_at: FieldRef<"TenantProfile", 'DateTime'>
    readonly updated_at: FieldRef<"TenantProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TenantProfile findUnique
   */
  export type TenantProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantProfile
     */
    select?: TenantProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantProfile
     */
    omit?: TenantProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantProfileInclude<ExtArgs> | null
    /**
     * Filter, which TenantProfile to fetch.
     */
    where: TenantProfileWhereUniqueInput
  }

  /**
   * TenantProfile findUniqueOrThrow
   */
  export type TenantProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantProfile
     */
    select?: TenantProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantProfile
     */
    omit?: TenantProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantProfileInclude<ExtArgs> | null
    /**
     * Filter, which TenantProfile to fetch.
     */
    where: TenantProfileWhereUniqueInput
  }

  /**
   * TenantProfile findFirst
   */
  export type TenantProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantProfile
     */
    select?: TenantProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantProfile
     */
    omit?: TenantProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantProfileInclude<ExtArgs> | null
    /**
     * Filter, which TenantProfile to fetch.
     */
    where?: TenantProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenantProfiles to fetch.
     */
    orderBy?: TenantProfileOrderByWithRelationInput | TenantProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TenantProfiles.
     */
    cursor?: TenantProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenantProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenantProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TenantProfiles.
     */
    distinct?: TenantProfileScalarFieldEnum | TenantProfileScalarFieldEnum[]
  }

  /**
   * TenantProfile findFirstOrThrow
   */
  export type TenantProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantProfile
     */
    select?: TenantProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantProfile
     */
    omit?: TenantProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantProfileInclude<ExtArgs> | null
    /**
     * Filter, which TenantProfile to fetch.
     */
    where?: TenantProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenantProfiles to fetch.
     */
    orderBy?: TenantProfileOrderByWithRelationInput | TenantProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TenantProfiles.
     */
    cursor?: TenantProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenantProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenantProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TenantProfiles.
     */
    distinct?: TenantProfileScalarFieldEnum | TenantProfileScalarFieldEnum[]
  }

  /**
   * TenantProfile findMany
   */
  export type TenantProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantProfile
     */
    select?: TenantProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantProfile
     */
    omit?: TenantProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantProfileInclude<ExtArgs> | null
    /**
     * Filter, which TenantProfiles to fetch.
     */
    where?: TenantProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenantProfiles to fetch.
     */
    orderBy?: TenantProfileOrderByWithRelationInput | TenantProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TenantProfiles.
     */
    cursor?: TenantProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenantProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenantProfiles.
     */
    skip?: number
    distinct?: TenantProfileScalarFieldEnum | TenantProfileScalarFieldEnum[]
  }

  /**
   * TenantProfile create
   */
  export type TenantProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantProfile
     */
    select?: TenantProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantProfile
     */
    omit?: TenantProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a TenantProfile.
     */
    data: XOR<TenantProfileCreateInput, TenantProfileUncheckedCreateInput>
  }

  /**
   * TenantProfile createMany
   */
  export type TenantProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TenantProfiles.
     */
    data: TenantProfileCreateManyInput | TenantProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TenantProfile createManyAndReturn
   */
  export type TenantProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantProfile
     */
    select?: TenantProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TenantProfile
     */
    omit?: TenantProfileOmit<ExtArgs> | null
    /**
     * The data used to create many TenantProfiles.
     */
    data: TenantProfileCreateManyInput | TenantProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TenantProfile update
   */
  export type TenantProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantProfile
     */
    select?: TenantProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantProfile
     */
    omit?: TenantProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a TenantProfile.
     */
    data: XOR<TenantProfileUpdateInput, TenantProfileUncheckedUpdateInput>
    /**
     * Choose, which TenantProfile to update.
     */
    where: TenantProfileWhereUniqueInput
  }

  /**
   * TenantProfile updateMany
   */
  export type TenantProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TenantProfiles.
     */
    data: XOR<TenantProfileUpdateManyMutationInput, TenantProfileUncheckedUpdateManyInput>
    /**
     * Filter which TenantProfiles to update
     */
    where?: TenantProfileWhereInput
    /**
     * Limit how many TenantProfiles to update.
     */
    limit?: number
  }

  /**
   * TenantProfile updateManyAndReturn
   */
  export type TenantProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantProfile
     */
    select?: TenantProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TenantProfile
     */
    omit?: TenantProfileOmit<ExtArgs> | null
    /**
     * The data used to update TenantProfiles.
     */
    data: XOR<TenantProfileUpdateManyMutationInput, TenantProfileUncheckedUpdateManyInput>
    /**
     * Filter which TenantProfiles to update
     */
    where?: TenantProfileWhereInput
    /**
     * Limit how many TenantProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TenantProfile upsert
   */
  export type TenantProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantProfile
     */
    select?: TenantProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantProfile
     */
    omit?: TenantProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the TenantProfile to update in case it exists.
     */
    where: TenantProfileWhereUniqueInput
    /**
     * In case the TenantProfile found by the `where` argument doesn't exist, create a new TenantProfile with this data.
     */
    create: XOR<TenantProfileCreateInput, TenantProfileUncheckedCreateInput>
    /**
     * In case the TenantProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenantProfileUpdateInput, TenantProfileUncheckedUpdateInput>
  }

  /**
   * TenantProfile delete
   */
  export type TenantProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantProfile
     */
    select?: TenantProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantProfile
     */
    omit?: TenantProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantProfileInclude<ExtArgs> | null
    /**
     * Filter which TenantProfile to delete.
     */
    where: TenantProfileWhereUniqueInput
  }

  /**
   * TenantProfile deleteMany
   */
  export type TenantProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TenantProfiles to delete
     */
    where?: TenantProfileWhereInput
    /**
     * Limit how many TenantProfiles to delete.
     */
    limit?: number
  }

  /**
   * TenantProfile without action
   */
  export type TenantProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantProfile
     */
    select?: TenantProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantProfile
     */
    omit?: TenantProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantProfileInclude<ExtArgs> | null
  }


  /**
   * Model Property
   */

  export type AggregateProperty = {
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  export type PropertyAvgAggregateOutputType = {
    price: number | null
    surface: number | null
    rooms: number | null
  }

  export type PropertySumAggregateOutputType = {
    price: number | null
    surface: number | null
    rooms: number | null
  }

  export type PropertyMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    property_type: $Enums.PropertyType | null
    status: $Enums.PropertyStatus | null
    address_id: string | null
    price: number | null
    surface: number | null
    rooms: number | null
    parking: boolean | null
    owner_id: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type PropertyMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    property_type: $Enums.PropertyType | null
    status: $Enums.PropertyStatus | null
    address_id: string | null
    price: number | null
    surface: number | null
    rooms: number | null
    parking: boolean | null
    owner_id: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type PropertyCountAggregateOutputType = {
    id: number
    title: number
    description: number
    property_type: number
    status: number
    address_id: number
    price: number
    surface: number
    rooms: number
    parking: number
    owner_id: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type PropertyAvgAggregateInputType = {
    price?: true
    surface?: true
    rooms?: true
  }

  export type PropertySumAggregateInputType = {
    price?: true
    surface?: true
    rooms?: true
  }

  export type PropertyMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    property_type?: true
    status?: true
    address_id?: true
    price?: true
    surface?: true
    rooms?: true
    parking?: true
    owner_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type PropertyMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    property_type?: true
    status?: true
    address_id?: true
    price?: true
    surface?: true
    rooms?: true
    parking?: true
    owner_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type PropertyCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    property_type?: true
    status?: true
    address_id?: true
    price?: true
    surface?: true
    rooms?: true
    parking?: true
    owner_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type PropertyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Property to aggregate.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Properties
    **/
    _count?: true | PropertyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyMaxAggregateInputType
  }

  export type GetPropertyAggregateType<T extends PropertyAggregateArgs> = {
        [P in keyof T & keyof AggregateProperty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProperty[P]>
      : GetScalarType<T[P], AggregateProperty[P]>
  }




  export type PropertyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithAggregationInput | PropertyOrderByWithAggregationInput[]
    by: PropertyScalarFieldEnum[] | PropertyScalarFieldEnum
    having?: PropertyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyCountAggregateInputType | true
    _avg?: PropertyAvgAggregateInputType
    _sum?: PropertySumAggregateInputType
    _min?: PropertyMinAggregateInputType
    _max?: PropertyMaxAggregateInputType
  }

  export type PropertyGroupByOutputType = {
    id: string
    title: string
    description: string | null
    property_type: $Enums.PropertyType
    status: $Enums.PropertyStatus
    address_id: string
    price: number
    surface: number
    rooms: number
    parking: boolean
    owner_id: string
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  type GetPropertyGroupByPayload<T extends PropertyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyGroupByOutputType[P]>
        }
      >
    >


  export type PropertySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    property_type?: boolean
    status?: boolean
    address_id?: boolean
    price?: boolean
    surface?: boolean
    rooms?: boolean
    parking?: boolean
    owner_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    address?: boolean | AddressDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    photos?: boolean | Property$photosArgs<ExtArgs>
    swipes?: boolean | Property$swipesArgs<ExtArgs>
    conversations?: boolean | Property$conversationsArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    property_type?: boolean
    status?: boolean
    address_id?: boolean
    price?: boolean
    surface?: boolean
    rooms?: boolean
    parking?: boolean
    owner_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    address?: boolean | AddressDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    property_type?: boolean
    status?: boolean
    address_id?: boolean
    price?: boolean
    surface?: boolean
    rooms?: boolean
    parking?: boolean
    owner_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    address?: boolean | AddressDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    property_type?: boolean
    status?: boolean
    address_id?: boolean
    price?: boolean
    surface?: boolean
    rooms?: boolean
    parking?: boolean
    owner_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type PropertyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "property_type" | "status" | "address_id" | "price" | "surface" | "rooms" | "parking" | "owner_id" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["property"]>
  export type PropertyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | AddressDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    photos?: boolean | Property$photosArgs<ExtArgs>
    swipes?: boolean | Property$swipesArgs<ExtArgs>
    conversations?: boolean | Property$conversationsArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PropertyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | AddressDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PropertyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | AddressDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PropertyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Property"
    objects: {
      address: Prisma.$AddressPayload<ExtArgs>
      owner: Prisma.$UserPayload<ExtArgs>
      photos: Prisma.$AnnouncementPhotoPayload<ExtArgs>[]
      swipes: Prisma.$SwipePayload<ExtArgs>[]
      conversations: Prisma.$ConversationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      property_type: $Enums.PropertyType
      status: $Enums.PropertyStatus
      address_id: string
      price: number
      surface: number
      rooms: number
      parking: boolean
      owner_id: string
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["property"]>
    composites: {}
  }

  type PropertyGetPayload<S extends boolean | null | undefined | PropertyDefaultArgs> = $Result.GetResult<Prisma.$PropertyPayload, S>

  type PropertyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropertyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertyCountAggregateInputType | true
    }

  export interface PropertyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Property'], meta: { name: 'Property' } }
    /**
     * Find zero or one Property that matches the filter.
     * @param {PropertyFindUniqueArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyFindUniqueArgs>(args: SelectSubset<T, PropertyFindUniqueArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Property that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropertyFindUniqueOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Property that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyFindFirstArgs>(args?: SelectSubset<T, PropertyFindFirstArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Property that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Properties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Properties
     * const properties = await prisma.property.findMany()
     * 
     * // Get first 10 Properties
     * const properties = await prisma.property.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyWithIdOnly = await prisma.property.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyFindManyArgs>(args?: SelectSubset<T, PropertyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Property.
     * @param {PropertyCreateArgs} args - Arguments to create a Property.
     * @example
     * // Create one Property
     * const Property = await prisma.property.create({
     *   data: {
     *     // ... data to create a Property
     *   }
     * })
     * 
     */
    create<T extends PropertyCreateArgs>(args: SelectSubset<T, PropertyCreateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Properties.
     * @param {PropertyCreateManyArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyCreateManyArgs>(args?: SelectSubset<T, PropertyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Properties and returns the data saved in the database.
     * @param {PropertyCreateManyAndReturnArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Properties and only return the `id`
     * const propertyWithIdOnly = await prisma.property.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertyCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Property.
     * @param {PropertyDeleteArgs} args - Arguments to delete one Property.
     * @example
     * // Delete one Property
     * const Property = await prisma.property.delete({
     *   where: {
     *     // ... filter to delete one Property
     *   }
     * })
     * 
     */
    delete<T extends PropertyDeleteArgs>(args: SelectSubset<T, PropertyDeleteArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Property.
     * @param {PropertyUpdateArgs} args - Arguments to update one Property.
     * @example
     * // Update one Property
     * const property = await prisma.property.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyUpdateArgs>(args: SelectSubset<T, PropertyUpdateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Properties.
     * @param {PropertyDeleteManyArgs} args - Arguments to filter Properties to delete.
     * @example
     * // Delete a few Properties
     * const { count } = await prisma.property.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyDeleteManyArgs>(args?: SelectSubset<T, PropertyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyUpdateManyArgs>(args: SelectSubset<T, PropertyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties and returns the data updated in the database.
     * @param {PropertyUpdateManyAndReturnArgs} args - Arguments to update many Properties.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Properties and only return the `id`
     * const propertyWithIdOnly = await prisma.property.updateManyAndReturn({
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
    updateManyAndReturn<T extends PropertyUpdateManyAndReturnArgs>(args: SelectSubset<T, PropertyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Property.
     * @param {PropertyUpsertArgs} args - Arguments to update or create a Property.
     * @example
     * // Update or create a Property
     * const property = await prisma.property.upsert({
     *   create: {
     *     // ... data to create a Property
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Property we want to update
     *   }
     * })
     */
    upsert<T extends PropertyUpsertArgs>(args: SelectSubset<T, PropertyUpsertArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCountArgs} args - Arguments to filter Properties to count.
     * @example
     * // Count the number of Properties
     * const count = await prisma.property.count({
     *   where: {
     *     // ... the filter for the Properties we want to count
     *   }
     * })
    **/
    count<T extends PropertyCountArgs>(
      args?: Subset<T, PropertyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PropertyAggregateArgs>(args: Subset<T, PropertyAggregateArgs>): Prisma.PrismaPromise<GetPropertyAggregateType<T>>

    /**
     * Group by Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyGroupByArgs} args - Group by arguments.
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
      T extends PropertyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyGroupByArgs['orderBy'] }
        : { orderBy?: PropertyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PropertyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Property model
   */
  readonly fields: PropertyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Property.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    address<T extends AddressDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AddressDefaultArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    photos<T extends Property$photosArgs<ExtArgs> = {}>(args?: Subset<T, Property$photosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    swipes<T extends Property$swipesArgs<ExtArgs> = {}>(args?: Subset<T, Property$swipesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SwipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    conversations<T extends Property$conversationsArgs<ExtArgs> = {}>(args?: Subset<T, Property$conversationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Property model
   */
  interface PropertyFieldRefs {
    readonly id: FieldRef<"Property", 'String'>
    readonly title: FieldRef<"Property", 'String'>
    readonly description: FieldRef<"Property", 'String'>
    readonly property_type: FieldRef<"Property", 'PropertyType'>
    readonly status: FieldRef<"Property", 'PropertyStatus'>
    readonly address_id: FieldRef<"Property", 'String'>
    readonly price: FieldRef<"Property", 'Int'>
    readonly surface: FieldRef<"Property", 'Int'>
    readonly rooms: FieldRef<"Property", 'Int'>
    readonly parking: FieldRef<"Property", 'Boolean'>
    readonly owner_id: FieldRef<"Property", 'String'>
    readonly created_at: FieldRef<"Property", 'DateTime'>
    readonly updated_at: FieldRef<"Property", 'DateTime'>
    readonly deleted_at: FieldRef<"Property", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Property findUnique
   */
  export type PropertyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findUniqueOrThrow
   */
  export type PropertyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findFirst
   */
  export type PropertyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findFirstOrThrow
   */
  export type PropertyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findMany
   */
  export type PropertyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Properties to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property create
   */
  export type PropertyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to create a Property.
     */
    data: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
  }

  /**
   * Property createMany
   */
  export type PropertyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Property createManyAndReturn
   */
  export type PropertyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Property update
   */
  export type PropertyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to update a Property.
     */
    data: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
    /**
     * Choose, which Property to update.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property updateMany
   */
  export type PropertyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to update.
     */
    limit?: number
  }

  /**
   * Property updateManyAndReturn
   */
  export type PropertyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Property upsert
   */
  export type PropertyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The filter to search for the Property to update in case it exists.
     */
    where: PropertyWhereUniqueInput
    /**
     * In case the Property found by the `where` argument doesn't exist, create a new Property with this data.
     */
    create: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
    /**
     * In case the Property was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
  }

  /**
   * Property delete
   */
  export type PropertyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter which Property to delete.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property deleteMany
   */
  export type PropertyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Properties to delete
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to delete.
     */
    limit?: number
  }

  /**
   * Property.photos
   */
  export type Property$photosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementPhoto
     */
    select?: AnnouncementPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementPhoto
     */
    omit?: AnnouncementPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementPhotoInclude<ExtArgs> | null
    where?: AnnouncementPhotoWhereInput
    orderBy?: AnnouncementPhotoOrderByWithRelationInput | AnnouncementPhotoOrderByWithRelationInput[]
    cursor?: AnnouncementPhotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnnouncementPhotoScalarFieldEnum | AnnouncementPhotoScalarFieldEnum[]
  }

  /**
   * Property.swipes
   */
  export type Property$swipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Property.conversations
   */
  export type Property$conversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    cursor?: ConversationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Property without action
   */
  export type PropertyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
  }


  /**
   * Model AnnouncementPhoto
   */

  export type AggregateAnnouncementPhoto = {
    _count: AnnouncementPhotoCountAggregateOutputType | null
    _avg: AnnouncementPhotoAvgAggregateOutputType | null
    _sum: AnnouncementPhotoSumAggregateOutputType | null
    _min: AnnouncementPhotoMinAggregateOutputType | null
    _max: AnnouncementPhotoMaxAggregateOutputType | null
  }

  export type AnnouncementPhotoAvgAggregateOutputType = {
    order: number | null
  }

  export type AnnouncementPhotoSumAggregateOutputType = {
    order: number | null
  }

  export type AnnouncementPhotoMinAggregateOutputType = {
    id: string | null
    url: string | null
    order: number | null
    property_id: string | null
    uploaded_at: Date | null
  }

  export type AnnouncementPhotoMaxAggregateOutputType = {
    id: string | null
    url: string | null
    order: number | null
    property_id: string | null
    uploaded_at: Date | null
  }

  export type AnnouncementPhotoCountAggregateOutputType = {
    id: number
    url: number
    order: number
    property_id: number
    uploaded_at: number
    _all: number
  }


  export type AnnouncementPhotoAvgAggregateInputType = {
    order?: true
  }

  export type AnnouncementPhotoSumAggregateInputType = {
    order?: true
  }

  export type AnnouncementPhotoMinAggregateInputType = {
    id?: true
    url?: true
    order?: true
    property_id?: true
    uploaded_at?: true
  }

  export type AnnouncementPhotoMaxAggregateInputType = {
    id?: true
    url?: true
    order?: true
    property_id?: true
    uploaded_at?: true
  }

  export type AnnouncementPhotoCountAggregateInputType = {
    id?: true
    url?: true
    order?: true
    property_id?: true
    uploaded_at?: true
    _all?: true
  }

  export type AnnouncementPhotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnnouncementPhoto to aggregate.
     */
    where?: AnnouncementPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnnouncementPhotos to fetch.
     */
    orderBy?: AnnouncementPhotoOrderByWithRelationInput | AnnouncementPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnnouncementPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnnouncementPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnnouncementPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnnouncementPhotos
    **/
    _count?: true | AnnouncementPhotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnnouncementPhotoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnnouncementPhotoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnnouncementPhotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnnouncementPhotoMaxAggregateInputType
  }

  export type GetAnnouncementPhotoAggregateType<T extends AnnouncementPhotoAggregateArgs> = {
        [P in keyof T & keyof AggregateAnnouncementPhoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnnouncementPhoto[P]>
      : GetScalarType<T[P], AggregateAnnouncementPhoto[P]>
  }




  export type AnnouncementPhotoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnouncementPhotoWhereInput
    orderBy?: AnnouncementPhotoOrderByWithAggregationInput | AnnouncementPhotoOrderByWithAggregationInput[]
    by: AnnouncementPhotoScalarFieldEnum[] | AnnouncementPhotoScalarFieldEnum
    having?: AnnouncementPhotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnnouncementPhotoCountAggregateInputType | true
    _avg?: AnnouncementPhotoAvgAggregateInputType
    _sum?: AnnouncementPhotoSumAggregateInputType
    _min?: AnnouncementPhotoMinAggregateInputType
    _max?: AnnouncementPhotoMaxAggregateInputType
  }

  export type AnnouncementPhotoGroupByOutputType = {
    id: string
    url: string
    order: number
    property_id: string
    uploaded_at: Date
    _count: AnnouncementPhotoCountAggregateOutputType | null
    _avg: AnnouncementPhotoAvgAggregateOutputType | null
    _sum: AnnouncementPhotoSumAggregateOutputType | null
    _min: AnnouncementPhotoMinAggregateOutputType | null
    _max: AnnouncementPhotoMaxAggregateOutputType | null
  }

  type GetAnnouncementPhotoGroupByPayload<T extends AnnouncementPhotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnnouncementPhotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnnouncementPhotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnnouncementPhotoGroupByOutputType[P]>
            : GetScalarType<T[P], AnnouncementPhotoGroupByOutputType[P]>
        }
      >
    >


  export type AnnouncementPhotoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    order?: boolean
    property_id?: boolean
    uploaded_at?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["announcementPhoto"]>

  export type AnnouncementPhotoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    order?: boolean
    property_id?: boolean
    uploaded_at?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["announcementPhoto"]>

  export type AnnouncementPhotoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    order?: boolean
    property_id?: boolean
    uploaded_at?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["announcementPhoto"]>

  export type AnnouncementPhotoSelectScalar = {
    id?: boolean
    url?: boolean
    order?: boolean
    property_id?: boolean
    uploaded_at?: boolean
  }

  export type AnnouncementPhotoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "order" | "property_id" | "uploaded_at", ExtArgs["result"]["announcementPhoto"]>
  export type AnnouncementPhotoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type AnnouncementPhotoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type AnnouncementPhotoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }

  export type $AnnouncementPhotoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnnouncementPhoto"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      order: number
      property_id: string
      uploaded_at: Date
    }, ExtArgs["result"]["announcementPhoto"]>
    composites: {}
  }

  type AnnouncementPhotoGetPayload<S extends boolean | null | undefined | AnnouncementPhotoDefaultArgs> = $Result.GetResult<Prisma.$AnnouncementPhotoPayload, S>

  type AnnouncementPhotoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnnouncementPhotoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnnouncementPhotoCountAggregateInputType | true
    }

  export interface AnnouncementPhotoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnnouncementPhoto'], meta: { name: 'AnnouncementPhoto' } }
    /**
     * Find zero or one AnnouncementPhoto that matches the filter.
     * @param {AnnouncementPhotoFindUniqueArgs} args - Arguments to find a AnnouncementPhoto
     * @example
     * // Get one AnnouncementPhoto
     * const announcementPhoto = await prisma.announcementPhoto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnnouncementPhotoFindUniqueArgs>(args: SelectSubset<T, AnnouncementPhotoFindUniqueArgs<ExtArgs>>): Prisma__AnnouncementPhotoClient<$Result.GetResult<Prisma.$AnnouncementPhotoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AnnouncementPhoto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnnouncementPhotoFindUniqueOrThrowArgs} args - Arguments to find a AnnouncementPhoto
     * @example
     * // Get one AnnouncementPhoto
     * const announcementPhoto = await prisma.announcementPhoto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnnouncementPhotoFindUniqueOrThrowArgs>(args: SelectSubset<T, AnnouncementPhotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnnouncementPhotoClient<$Result.GetResult<Prisma.$AnnouncementPhotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnnouncementPhoto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementPhotoFindFirstArgs} args - Arguments to find a AnnouncementPhoto
     * @example
     * // Get one AnnouncementPhoto
     * const announcementPhoto = await prisma.announcementPhoto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnnouncementPhotoFindFirstArgs>(args?: SelectSubset<T, AnnouncementPhotoFindFirstArgs<ExtArgs>>): Prisma__AnnouncementPhotoClient<$Result.GetResult<Prisma.$AnnouncementPhotoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnnouncementPhoto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementPhotoFindFirstOrThrowArgs} args - Arguments to find a AnnouncementPhoto
     * @example
     * // Get one AnnouncementPhoto
     * const announcementPhoto = await prisma.announcementPhoto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnnouncementPhotoFindFirstOrThrowArgs>(args?: SelectSubset<T, AnnouncementPhotoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnnouncementPhotoClient<$Result.GetResult<Prisma.$AnnouncementPhotoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AnnouncementPhotos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementPhotoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnnouncementPhotos
     * const announcementPhotos = await prisma.announcementPhoto.findMany()
     * 
     * // Get first 10 AnnouncementPhotos
     * const announcementPhotos = await prisma.announcementPhoto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const announcementPhotoWithIdOnly = await prisma.announcementPhoto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnnouncementPhotoFindManyArgs>(args?: SelectSubset<T, AnnouncementPhotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AnnouncementPhoto.
     * @param {AnnouncementPhotoCreateArgs} args - Arguments to create a AnnouncementPhoto.
     * @example
     * // Create one AnnouncementPhoto
     * const AnnouncementPhoto = await prisma.announcementPhoto.create({
     *   data: {
     *     // ... data to create a AnnouncementPhoto
     *   }
     * })
     * 
     */
    create<T extends AnnouncementPhotoCreateArgs>(args: SelectSubset<T, AnnouncementPhotoCreateArgs<ExtArgs>>): Prisma__AnnouncementPhotoClient<$Result.GetResult<Prisma.$AnnouncementPhotoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AnnouncementPhotos.
     * @param {AnnouncementPhotoCreateManyArgs} args - Arguments to create many AnnouncementPhotos.
     * @example
     * // Create many AnnouncementPhotos
     * const announcementPhoto = await prisma.announcementPhoto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnnouncementPhotoCreateManyArgs>(args?: SelectSubset<T, AnnouncementPhotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnnouncementPhotos and returns the data saved in the database.
     * @param {AnnouncementPhotoCreateManyAndReturnArgs} args - Arguments to create many AnnouncementPhotos.
     * @example
     * // Create many AnnouncementPhotos
     * const announcementPhoto = await prisma.announcementPhoto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnnouncementPhotos and only return the `id`
     * const announcementPhotoWithIdOnly = await prisma.announcementPhoto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnnouncementPhotoCreateManyAndReturnArgs>(args?: SelectSubset<T, AnnouncementPhotoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPhotoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AnnouncementPhoto.
     * @param {AnnouncementPhotoDeleteArgs} args - Arguments to delete one AnnouncementPhoto.
     * @example
     * // Delete one AnnouncementPhoto
     * const AnnouncementPhoto = await prisma.announcementPhoto.delete({
     *   where: {
     *     // ... filter to delete one AnnouncementPhoto
     *   }
     * })
     * 
     */
    delete<T extends AnnouncementPhotoDeleteArgs>(args: SelectSubset<T, AnnouncementPhotoDeleteArgs<ExtArgs>>): Prisma__AnnouncementPhotoClient<$Result.GetResult<Prisma.$AnnouncementPhotoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AnnouncementPhoto.
     * @param {AnnouncementPhotoUpdateArgs} args - Arguments to update one AnnouncementPhoto.
     * @example
     * // Update one AnnouncementPhoto
     * const announcementPhoto = await prisma.announcementPhoto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnnouncementPhotoUpdateArgs>(args: SelectSubset<T, AnnouncementPhotoUpdateArgs<ExtArgs>>): Prisma__AnnouncementPhotoClient<$Result.GetResult<Prisma.$AnnouncementPhotoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AnnouncementPhotos.
     * @param {AnnouncementPhotoDeleteManyArgs} args - Arguments to filter AnnouncementPhotos to delete.
     * @example
     * // Delete a few AnnouncementPhotos
     * const { count } = await prisma.announcementPhoto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnnouncementPhotoDeleteManyArgs>(args?: SelectSubset<T, AnnouncementPhotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnnouncementPhotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementPhotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnnouncementPhotos
     * const announcementPhoto = await prisma.announcementPhoto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnnouncementPhotoUpdateManyArgs>(args: SelectSubset<T, AnnouncementPhotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnnouncementPhotos and returns the data updated in the database.
     * @param {AnnouncementPhotoUpdateManyAndReturnArgs} args - Arguments to update many AnnouncementPhotos.
     * @example
     * // Update many AnnouncementPhotos
     * const announcementPhoto = await prisma.announcementPhoto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AnnouncementPhotos and only return the `id`
     * const announcementPhotoWithIdOnly = await prisma.announcementPhoto.updateManyAndReturn({
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
    updateManyAndReturn<T extends AnnouncementPhotoUpdateManyAndReturnArgs>(args: SelectSubset<T, AnnouncementPhotoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPhotoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AnnouncementPhoto.
     * @param {AnnouncementPhotoUpsertArgs} args - Arguments to update or create a AnnouncementPhoto.
     * @example
     * // Update or create a AnnouncementPhoto
     * const announcementPhoto = await prisma.announcementPhoto.upsert({
     *   create: {
     *     // ... data to create a AnnouncementPhoto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnnouncementPhoto we want to update
     *   }
     * })
     */
    upsert<T extends AnnouncementPhotoUpsertArgs>(args: SelectSubset<T, AnnouncementPhotoUpsertArgs<ExtArgs>>): Prisma__AnnouncementPhotoClient<$Result.GetResult<Prisma.$AnnouncementPhotoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AnnouncementPhotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementPhotoCountArgs} args - Arguments to filter AnnouncementPhotos to count.
     * @example
     * // Count the number of AnnouncementPhotos
     * const count = await prisma.announcementPhoto.count({
     *   where: {
     *     // ... the filter for the AnnouncementPhotos we want to count
     *   }
     * })
    **/
    count<T extends AnnouncementPhotoCountArgs>(
      args?: Subset<T, AnnouncementPhotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnnouncementPhotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnnouncementPhoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementPhotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnnouncementPhotoAggregateArgs>(args: Subset<T, AnnouncementPhotoAggregateArgs>): Prisma.PrismaPromise<GetAnnouncementPhotoAggregateType<T>>

    /**
     * Group by AnnouncementPhoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementPhotoGroupByArgs} args - Group by arguments.
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
      T extends AnnouncementPhotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnnouncementPhotoGroupByArgs['orderBy'] }
        : { orderBy?: AnnouncementPhotoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnnouncementPhotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnnouncementPhotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnnouncementPhoto model
   */
  readonly fields: AnnouncementPhotoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnnouncementPhoto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnnouncementPhotoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AnnouncementPhoto model
   */
  interface AnnouncementPhotoFieldRefs {
    readonly id: FieldRef<"AnnouncementPhoto", 'String'>
    readonly url: FieldRef<"AnnouncementPhoto", 'String'>
    readonly order: FieldRef<"AnnouncementPhoto", 'Int'>
    readonly property_id: FieldRef<"AnnouncementPhoto", 'String'>
    readonly uploaded_at: FieldRef<"AnnouncementPhoto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AnnouncementPhoto findUnique
   */
  export type AnnouncementPhotoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementPhoto
     */
    select?: AnnouncementPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementPhoto
     */
    omit?: AnnouncementPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementPhotoInclude<ExtArgs> | null
    /**
     * Filter, which AnnouncementPhoto to fetch.
     */
    where: AnnouncementPhotoWhereUniqueInput
  }

  /**
   * AnnouncementPhoto findUniqueOrThrow
   */
  export type AnnouncementPhotoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementPhoto
     */
    select?: AnnouncementPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementPhoto
     */
    omit?: AnnouncementPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementPhotoInclude<ExtArgs> | null
    /**
     * Filter, which AnnouncementPhoto to fetch.
     */
    where: AnnouncementPhotoWhereUniqueInput
  }

  /**
   * AnnouncementPhoto findFirst
   */
  export type AnnouncementPhotoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementPhoto
     */
    select?: AnnouncementPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementPhoto
     */
    omit?: AnnouncementPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementPhotoInclude<ExtArgs> | null
    /**
     * Filter, which AnnouncementPhoto to fetch.
     */
    where?: AnnouncementPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnnouncementPhotos to fetch.
     */
    orderBy?: AnnouncementPhotoOrderByWithRelationInput | AnnouncementPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnnouncementPhotos.
     */
    cursor?: AnnouncementPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnnouncementPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnnouncementPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnnouncementPhotos.
     */
    distinct?: AnnouncementPhotoScalarFieldEnum | AnnouncementPhotoScalarFieldEnum[]
  }

  /**
   * AnnouncementPhoto findFirstOrThrow
   */
  export type AnnouncementPhotoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementPhoto
     */
    select?: AnnouncementPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementPhoto
     */
    omit?: AnnouncementPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementPhotoInclude<ExtArgs> | null
    /**
     * Filter, which AnnouncementPhoto to fetch.
     */
    where?: AnnouncementPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnnouncementPhotos to fetch.
     */
    orderBy?: AnnouncementPhotoOrderByWithRelationInput | AnnouncementPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnnouncementPhotos.
     */
    cursor?: AnnouncementPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnnouncementPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnnouncementPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnnouncementPhotos.
     */
    distinct?: AnnouncementPhotoScalarFieldEnum | AnnouncementPhotoScalarFieldEnum[]
  }

  /**
   * AnnouncementPhoto findMany
   */
  export type AnnouncementPhotoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementPhoto
     */
    select?: AnnouncementPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementPhoto
     */
    omit?: AnnouncementPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementPhotoInclude<ExtArgs> | null
    /**
     * Filter, which AnnouncementPhotos to fetch.
     */
    where?: AnnouncementPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnnouncementPhotos to fetch.
     */
    orderBy?: AnnouncementPhotoOrderByWithRelationInput | AnnouncementPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnnouncementPhotos.
     */
    cursor?: AnnouncementPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnnouncementPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnnouncementPhotos.
     */
    skip?: number
    distinct?: AnnouncementPhotoScalarFieldEnum | AnnouncementPhotoScalarFieldEnum[]
  }

  /**
   * AnnouncementPhoto create
   */
  export type AnnouncementPhotoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementPhoto
     */
    select?: AnnouncementPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementPhoto
     */
    omit?: AnnouncementPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementPhotoInclude<ExtArgs> | null
    /**
     * The data needed to create a AnnouncementPhoto.
     */
    data: XOR<AnnouncementPhotoCreateInput, AnnouncementPhotoUncheckedCreateInput>
  }

  /**
   * AnnouncementPhoto createMany
   */
  export type AnnouncementPhotoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnnouncementPhotos.
     */
    data: AnnouncementPhotoCreateManyInput | AnnouncementPhotoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnnouncementPhoto createManyAndReturn
   */
  export type AnnouncementPhotoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementPhoto
     */
    select?: AnnouncementPhotoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementPhoto
     */
    omit?: AnnouncementPhotoOmit<ExtArgs> | null
    /**
     * The data used to create many AnnouncementPhotos.
     */
    data: AnnouncementPhotoCreateManyInput | AnnouncementPhotoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementPhotoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnnouncementPhoto update
   */
  export type AnnouncementPhotoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementPhoto
     */
    select?: AnnouncementPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementPhoto
     */
    omit?: AnnouncementPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementPhotoInclude<ExtArgs> | null
    /**
     * The data needed to update a AnnouncementPhoto.
     */
    data: XOR<AnnouncementPhotoUpdateInput, AnnouncementPhotoUncheckedUpdateInput>
    /**
     * Choose, which AnnouncementPhoto to update.
     */
    where: AnnouncementPhotoWhereUniqueInput
  }

  /**
   * AnnouncementPhoto updateMany
   */
  export type AnnouncementPhotoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnnouncementPhotos.
     */
    data: XOR<AnnouncementPhotoUpdateManyMutationInput, AnnouncementPhotoUncheckedUpdateManyInput>
    /**
     * Filter which AnnouncementPhotos to update
     */
    where?: AnnouncementPhotoWhereInput
    /**
     * Limit how many AnnouncementPhotos to update.
     */
    limit?: number
  }

  /**
   * AnnouncementPhoto updateManyAndReturn
   */
  export type AnnouncementPhotoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementPhoto
     */
    select?: AnnouncementPhotoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementPhoto
     */
    omit?: AnnouncementPhotoOmit<ExtArgs> | null
    /**
     * The data used to update AnnouncementPhotos.
     */
    data: XOR<AnnouncementPhotoUpdateManyMutationInput, AnnouncementPhotoUncheckedUpdateManyInput>
    /**
     * Filter which AnnouncementPhotos to update
     */
    where?: AnnouncementPhotoWhereInput
    /**
     * Limit how many AnnouncementPhotos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementPhotoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnnouncementPhoto upsert
   */
  export type AnnouncementPhotoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementPhoto
     */
    select?: AnnouncementPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementPhoto
     */
    omit?: AnnouncementPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementPhotoInclude<ExtArgs> | null
    /**
     * The filter to search for the AnnouncementPhoto to update in case it exists.
     */
    where: AnnouncementPhotoWhereUniqueInput
    /**
     * In case the AnnouncementPhoto found by the `where` argument doesn't exist, create a new AnnouncementPhoto with this data.
     */
    create: XOR<AnnouncementPhotoCreateInput, AnnouncementPhotoUncheckedCreateInput>
    /**
     * In case the AnnouncementPhoto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnnouncementPhotoUpdateInput, AnnouncementPhotoUncheckedUpdateInput>
  }

  /**
   * AnnouncementPhoto delete
   */
  export type AnnouncementPhotoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementPhoto
     */
    select?: AnnouncementPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementPhoto
     */
    omit?: AnnouncementPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementPhotoInclude<ExtArgs> | null
    /**
     * Filter which AnnouncementPhoto to delete.
     */
    where: AnnouncementPhotoWhereUniqueInput
  }

  /**
   * AnnouncementPhoto deleteMany
   */
  export type AnnouncementPhotoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnnouncementPhotos to delete
     */
    where?: AnnouncementPhotoWhereInput
    /**
     * Limit how many AnnouncementPhotos to delete.
     */
    limit?: number
  }

  /**
   * AnnouncementPhoto without action
   */
  export type AnnouncementPhotoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementPhoto
     */
    select?: AnnouncementPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementPhoto
     */
    omit?: AnnouncementPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementPhotoInclude<ExtArgs> | null
  }


  /**
   * Model ProfilePhoto
   */

  export type AggregateProfilePhoto = {
    _count: ProfilePhotoCountAggregateOutputType | null
    _min: ProfilePhotoMinAggregateOutputType | null
    _max: ProfilePhotoMaxAggregateOutputType | null
  }

  export type ProfilePhotoMinAggregateOutputType = {
    id: string | null
    url: string | null
    user_id: string | null
    uploaded_at: Date | null
  }

  export type ProfilePhotoMaxAggregateOutputType = {
    id: string | null
    url: string | null
    user_id: string | null
    uploaded_at: Date | null
  }

  export type ProfilePhotoCountAggregateOutputType = {
    id: number
    url: number
    user_id: number
    uploaded_at: number
    _all: number
  }


  export type ProfilePhotoMinAggregateInputType = {
    id?: true
    url?: true
    user_id?: true
    uploaded_at?: true
  }

  export type ProfilePhotoMaxAggregateInputType = {
    id?: true
    url?: true
    user_id?: true
    uploaded_at?: true
  }

  export type ProfilePhotoCountAggregateInputType = {
    id?: true
    url?: true
    user_id?: true
    uploaded_at?: true
    _all?: true
  }

  export type ProfilePhotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfilePhoto to aggregate.
     */
    where?: ProfilePhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfilePhotos to fetch.
     */
    orderBy?: ProfilePhotoOrderByWithRelationInput | ProfilePhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfilePhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfilePhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfilePhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProfilePhotos
    **/
    _count?: true | ProfilePhotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfilePhotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfilePhotoMaxAggregateInputType
  }

  export type GetProfilePhotoAggregateType<T extends ProfilePhotoAggregateArgs> = {
        [P in keyof T & keyof AggregateProfilePhoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfilePhoto[P]>
      : GetScalarType<T[P], AggregateProfilePhoto[P]>
  }




  export type ProfilePhotoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfilePhotoWhereInput
    orderBy?: ProfilePhotoOrderByWithAggregationInput | ProfilePhotoOrderByWithAggregationInput[]
    by: ProfilePhotoScalarFieldEnum[] | ProfilePhotoScalarFieldEnum
    having?: ProfilePhotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfilePhotoCountAggregateInputType | true
    _min?: ProfilePhotoMinAggregateInputType
    _max?: ProfilePhotoMaxAggregateInputType
  }

  export type ProfilePhotoGroupByOutputType = {
    id: string
    url: string
    user_id: string
    uploaded_at: Date
    _count: ProfilePhotoCountAggregateOutputType | null
    _min: ProfilePhotoMinAggregateOutputType | null
    _max: ProfilePhotoMaxAggregateOutputType | null
  }

  type GetProfilePhotoGroupByPayload<T extends ProfilePhotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfilePhotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfilePhotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfilePhotoGroupByOutputType[P]>
            : GetScalarType<T[P], ProfilePhotoGroupByOutputType[P]>
        }
      >
    >


  export type ProfilePhotoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    user_id?: boolean
    uploaded_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profilePhoto"]>

  export type ProfilePhotoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    user_id?: boolean
    uploaded_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profilePhoto"]>

  export type ProfilePhotoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    user_id?: boolean
    uploaded_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profilePhoto"]>

  export type ProfilePhotoSelectScalar = {
    id?: boolean
    url?: boolean
    user_id?: boolean
    uploaded_at?: boolean
  }

  export type ProfilePhotoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "user_id" | "uploaded_at", ExtArgs["result"]["profilePhoto"]>
  export type ProfilePhotoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfilePhotoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfilePhotoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProfilePhotoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProfilePhoto"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      user_id: string
      uploaded_at: Date
    }, ExtArgs["result"]["profilePhoto"]>
    composites: {}
  }

  type ProfilePhotoGetPayload<S extends boolean | null | undefined | ProfilePhotoDefaultArgs> = $Result.GetResult<Prisma.$ProfilePhotoPayload, S>

  type ProfilePhotoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfilePhotoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfilePhotoCountAggregateInputType | true
    }

  export interface ProfilePhotoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProfilePhoto'], meta: { name: 'ProfilePhoto' } }
    /**
     * Find zero or one ProfilePhoto that matches the filter.
     * @param {ProfilePhotoFindUniqueArgs} args - Arguments to find a ProfilePhoto
     * @example
     * // Get one ProfilePhoto
     * const profilePhoto = await prisma.profilePhoto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfilePhotoFindUniqueArgs>(args: SelectSubset<T, ProfilePhotoFindUniqueArgs<ExtArgs>>): Prisma__ProfilePhotoClient<$Result.GetResult<Prisma.$ProfilePhotoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProfilePhoto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfilePhotoFindUniqueOrThrowArgs} args - Arguments to find a ProfilePhoto
     * @example
     * // Get one ProfilePhoto
     * const profilePhoto = await prisma.profilePhoto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfilePhotoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfilePhotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfilePhotoClient<$Result.GetResult<Prisma.$ProfilePhotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfilePhoto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilePhotoFindFirstArgs} args - Arguments to find a ProfilePhoto
     * @example
     * // Get one ProfilePhoto
     * const profilePhoto = await prisma.profilePhoto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfilePhotoFindFirstArgs>(args?: SelectSubset<T, ProfilePhotoFindFirstArgs<ExtArgs>>): Prisma__ProfilePhotoClient<$Result.GetResult<Prisma.$ProfilePhotoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfilePhoto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilePhotoFindFirstOrThrowArgs} args - Arguments to find a ProfilePhoto
     * @example
     * // Get one ProfilePhoto
     * const profilePhoto = await prisma.profilePhoto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfilePhotoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfilePhotoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfilePhotoClient<$Result.GetResult<Prisma.$ProfilePhotoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProfilePhotos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilePhotoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProfilePhotos
     * const profilePhotos = await prisma.profilePhoto.findMany()
     * 
     * // Get first 10 ProfilePhotos
     * const profilePhotos = await prisma.profilePhoto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profilePhotoWithIdOnly = await prisma.profilePhoto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfilePhotoFindManyArgs>(args?: SelectSubset<T, ProfilePhotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProfilePhoto.
     * @param {ProfilePhotoCreateArgs} args - Arguments to create a ProfilePhoto.
     * @example
     * // Create one ProfilePhoto
     * const ProfilePhoto = await prisma.profilePhoto.create({
     *   data: {
     *     // ... data to create a ProfilePhoto
     *   }
     * })
     * 
     */
    create<T extends ProfilePhotoCreateArgs>(args: SelectSubset<T, ProfilePhotoCreateArgs<ExtArgs>>): Prisma__ProfilePhotoClient<$Result.GetResult<Prisma.$ProfilePhotoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProfilePhotos.
     * @param {ProfilePhotoCreateManyArgs} args - Arguments to create many ProfilePhotos.
     * @example
     * // Create many ProfilePhotos
     * const profilePhoto = await prisma.profilePhoto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfilePhotoCreateManyArgs>(args?: SelectSubset<T, ProfilePhotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProfilePhotos and returns the data saved in the database.
     * @param {ProfilePhotoCreateManyAndReturnArgs} args - Arguments to create many ProfilePhotos.
     * @example
     * // Create many ProfilePhotos
     * const profilePhoto = await prisma.profilePhoto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProfilePhotos and only return the `id`
     * const profilePhotoWithIdOnly = await prisma.profilePhoto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfilePhotoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfilePhotoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePhotoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProfilePhoto.
     * @param {ProfilePhotoDeleteArgs} args - Arguments to delete one ProfilePhoto.
     * @example
     * // Delete one ProfilePhoto
     * const ProfilePhoto = await prisma.profilePhoto.delete({
     *   where: {
     *     // ... filter to delete one ProfilePhoto
     *   }
     * })
     * 
     */
    delete<T extends ProfilePhotoDeleteArgs>(args: SelectSubset<T, ProfilePhotoDeleteArgs<ExtArgs>>): Prisma__ProfilePhotoClient<$Result.GetResult<Prisma.$ProfilePhotoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProfilePhoto.
     * @param {ProfilePhotoUpdateArgs} args - Arguments to update one ProfilePhoto.
     * @example
     * // Update one ProfilePhoto
     * const profilePhoto = await prisma.profilePhoto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfilePhotoUpdateArgs>(args: SelectSubset<T, ProfilePhotoUpdateArgs<ExtArgs>>): Prisma__ProfilePhotoClient<$Result.GetResult<Prisma.$ProfilePhotoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProfilePhotos.
     * @param {ProfilePhotoDeleteManyArgs} args - Arguments to filter ProfilePhotos to delete.
     * @example
     * // Delete a few ProfilePhotos
     * const { count } = await prisma.profilePhoto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfilePhotoDeleteManyArgs>(args?: SelectSubset<T, ProfilePhotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfilePhotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilePhotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProfilePhotos
     * const profilePhoto = await prisma.profilePhoto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfilePhotoUpdateManyArgs>(args: SelectSubset<T, ProfilePhotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfilePhotos and returns the data updated in the database.
     * @param {ProfilePhotoUpdateManyAndReturnArgs} args - Arguments to update many ProfilePhotos.
     * @example
     * // Update many ProfilePhotos
     * const profilePhoto = await prisma.profilePhoto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProfilePhotos and only return the `id`
     * const profilePhotoWithIdOnly = await prisma.profilePhoto.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProfilePhotoUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfilePhotoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePhotoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProfilePhoto.
     * @param {ProfilePhotoUpsertArgs} args - Arguments to update or create a ProfilePhoto.
     * @example
     * // Update or create a ProfilePhoto
     * const profilePhoto = await prisma.profilePhoto.upsert({
     *   create: {
     *     // ... data to create a ProfilePhoto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProfilePhoto we want to update
     *   }
     * })
     */
    upsert<T extends ProfilePhotoUpsertArgs>(args: SelectSubset<T, ProfilePhotoUpsertArgs<ExtArgs>>): Prisma__ProfilePhotoClient<$Result.GetResult<Prisma.$ProfilePhotoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProfilePhotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilePhotoCountArgs} args - Arguments to filter ProfilePhotos to count.
     * @example
     * // Count the number of ProfilePhotos
     * const count = await prisma.profilePhoto.count({
     *   where: {
     *     // ... the filter for the ProfilePhotos we want to count
     *   }
     * })
    **/
    count<T extends ProfilePhotoCountArgs>(
      args?: Subset<T, ProfilePhotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfilePhotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProfilePhoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilePhotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfilePhotoAggregateArgs>(args: Subset<T, ProfilePhotoAggregateArgs>): Prisma.PrismaPromise<GetProfilePhotoAggregateType<T>>

    /**
     * Group by ProfilePhoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilePhotoGroupByArgs} args - Group by arguments.
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
      T extends ProfilePhotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfilePhotoGroupByArgs['orderBy'] }
        : { orderBy?: ProfilePhotoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfilePhotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfilePhotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProfilePhoto model
   */
  readonly fields: ProfilePhotoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProfilePhoto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfilePhotoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ProfilePhoto model
   */
  interface ProfilePhotoFieldRefs {
    readonly id: FieldRef<"ProfilePhoto", 'String'>
    readonly url: FieldRef<"ProfilePhoto", 'String'>
    readonly user_id: FieldRef<"ProfilePhoto", 'String'>
    readonly uploaded_at: FieldRef<"ProfilePhoto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProfilePhoto findUnique
   */
  export type ProfilePhotoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfilePhoto
     */
    select?: ProfilePhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfilePhoto
     */
    omit?: ProfilePhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilePhotoInclude<ExtArgs> | null
    /**
     * Filter, which ProfilePhoto to fetch.
     */
    where: ProfilePhotoWhereUniqueInput
  }

  /**
   * ProfilePhoto findUniqueOrThrow
   */
  export type ProfilePhotoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfilePhoto
     */
    select?: ProfilePhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfilePhoto
     */
    omit?: ProfilePhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilePhotoInclude<ExtArgs> | null
    /**
     * Filter, which ProfilePhoto to fetch.
     */
    where: ProfilePhotoWhereUniqueInput
  }

  /**
   * ProfilePhoto findFirst
   */
  export type ProfilePhotoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfilePhoto
     */
    select?: ProfilePhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfilePhoto
     */
    omit?: ProfilePhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilePhotoInclude<ExtArgs> | null
    /**
     * Filter, which ProfilePhoto to fetch.
     */
    where?: ProfilePhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfilePhotos to fetch.
     */
    orderBy?: ProfilePhotoOrderByWithRelationInput | ProfilePhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfilePhotos.
     */
    cursor?: ProfilePhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfilePhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfilePhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfilePhotos.
     */
    distinct?: ProfilePhotoScalarFieldEnum | ProfilePhotoScalarFieldEnum[]
  }

  /**
   * ProfilePhoto findFirstOrThrow
   */
  export type ProfilePhotoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfilePhoto
     */
    select?: ProfilePhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfilePhoto
     */
    omit?: ProfilePhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilePhotoInclude<ExtArgs> | null
    /**
     * Filter, which ProfilePhoto to fetch.
     */
    where?: ProfilePhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfilePhotos to fetch.
     */
    orderBy?: ProfilePhotoOrderByWithRelationInput | ProfilePhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfilePhotos.
     */
    cursor?: ProfilePhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfilePhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfilePhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfilePhotos.
     */
    distinct?: ProfilePhotoScalarFieldEnum | ProfilePhotoScalarFieldEnum[]
  }

  /**
   * ProfilePhoto findMany
   */
  export type ProfilePhotoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfilePhoto
     */
    select?: ProfilePhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfilePhoto
     */
    omit?: ProfilePhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilePhotoInclude<ExtArgs> | null
    /**
     * Filter, which ProfilePhotos to fetch.
     */
    where?: ProfilePhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfilePhotos to fetch.
     */
    orderBy?: ProfilePhotoOrderByWithRelationInput | ProfilePhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProfilePhotos.
     */
    cursor?: ProfilePhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfilePhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfilePhotos.
     */
    skip?: number
    distinct?: ProfilePhotoScalarFieldEnum | ProfilePhotoScalarFieldEnum[]
  }

  /**
   * ProfilePhoto create
   */
  export type ProfilePhotoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfilePhoto
     */
    select?: ProfilePhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfilePhoto
     */
    omit?: ProfilePhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilePhotoInclude<ExtArgs> | null
    /**
     * The data needed to create a ProfilePhoto.
     */
    data: XOR<ProfilePhotoCreateInput, ProfilePhotoUncheckedCreateInput>
  }

  /**
   * ProfilePhoto createMany
   */
  export type ProfilePhotoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProfilePhotos.
     */
    data: ProfilePhotoCreateManyInput | ProfilePhotoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProfilePhoto createManyAndReturn
   */
  export type ProfilePhotoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfilePhoto
     */
    select?: ProfilePhotoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfilePhoto
     */
    omit?: ProfilePhotoOmit<ExtArgs> | null
    /**
     * The data used to create many ProfilePhotos.
     */
    data: ProfilePhotoCreateManyInput | ProfilePhotoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilePhotoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProfilePhoto update
   */
  export type ProfilePhotoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfilePhoto
     */
    select?: ProfilePhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfilePhoto
     */
    omit?: ProfilePhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilePhotoInclude<ExtArgs> | null
    /**
     * The data needed to update a ProfilePhoto.
     */
    data: XOR<ProfilePhotoUpdateInput, ProfilePhotoUncheckedUpdateInput>
    /**
     * Choose, which ProfilePhoto to update.
     */
    where: ProfilePhotoWhereUniqueInput
  }

  /**
   * ProfilePhoto updateMany
   */
  export type ProfilePhotoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProfilePhotos.
     */
    data: XOR<ProfilePhotoUpdateManyMutationInput, ProfilePhotoUncheckedUpdateManyInput>
    /**
     * Filter which ProfilePhotos to update
     */
    where?: ProfilePhotoWhereInput
    /**
     * Limit how many ProfilePhotos to update.
     */
    limit?: number
  }

  /**
   * ProfilePhoto updateManyAndReturn
   */
  export type ProfilePhotoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfilePhoto
     */
    select?: ProfilePhotoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfilePhoto
     */
    omit?: ProfilePhotoOmit<ExtArgs> | null
    /**
     * The data used to update ProfilePhotos.
     */
    data: XOR<ProfilePhotoUpdateManyMutationInput, ProfilePhotoUncheckedUpdateManyInput>
    /**
     * Filter which ProfilePhotos to update
     */
    where?: ProfilePhotoWhereInput
    /**
     * Limit how many ProfilePhotos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilePhotoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProfilePhoto upsert
   */
  export type ProfilePhotoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfilePhoto
     */
    select?: ProfilePhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfilePhoto
     */
    omit?: ProfilePhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilePhotoInclude<ExtArgs> | null
    /**
     * The filter to search for the ProfilePhoto to update in case it exists.
     */
    where: ProfilePhotoWhereUniqueInput
    /**
     * In case the ProfilePhoto found by the `where` argument doesn't exist, create a new ProfilePhoto with this data.
     */
    create: XOR<ProfilePhotoCreateInput, ProfilePhotoUncheckedCreateInput>
    /**
     * In case the ProfilePhoto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfilePhotoUpdateInput, ProfilePhotoUncheckedUpdateInput>
  }

  /**
   * ProfilePhoto delete
   */
  export type ProfilePhotoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfilePhoto
     */
    select?: ProfilePhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfilePhoto
     */
    omit?: ProfilePhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilePhotoInclude<ExtArgs> | null
    /**
     * Filter which ProfilePhoto to delete.
     */
    where: ProfilePhotoWhereUniqueInput
  }

  /**
   * ProfilePhoto deleteMany
   */
  export type ProfilePhotoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfilePhotos to delete
     */
    where?: ProfilePhotoWhereInput
    /**
     * Limit how many ProfilePhotos to delete.
     */
    limit?: number
  }

  /**
   * ProfilePhoto without action
   */
  export type ProfilePhotoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfilePhoto
     */
    select?: ProfilePhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfilePhoto
     */
    omit?: ProfilePhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilePhotoInclude<ExtArgs> | null
  }


  /**
   * Model Document
   */

  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  export type DocumentMinAggregateOutputType = {
    id: string | null
    url: string | null
    label: string | null
    user_id: string | null
    uploaded_at: Date | null
  }

  export type DocumentMaxAggregateOutputType = {
    id: string | null
    url: string | null
    label: string | null
    user_id: string | null
    uploaded_at: Date | null
  }

  export type DocumentCountAggregateOutputType = {
    id: number
    url: number
    label: number
    user_id: number
    uploaded_at: number
    _all: number
  }


  export type DocumentMinAggregateInputType = {
    id?: true
    url?: true
    label?: true
    user_id?: true
    uploaded_at?: true
  }

  export type DocumentMaxAggregateInputType = {
    id?: true
    url?: true
    label?: true
    user_id?: true
    uploaded_at?: true
  }

  export type DocumentCountAggregateInputType = {
    id?: true
    url?: true
    label?: true
    user_id?: true
    uploaded_at?: true
    _all?: true
  }

  export type DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Document to aggregate.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentMaxAggregateInputType
  }

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>
  }




  export type DocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithAggregationInput | DocumentOrderByWithAggregationInput[]
    by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum
    having?: DocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCountAggregateInputType | true
    _min?: DocumentMinAggregateInputType
    _max?: DocumentMaxAggregateInputType
  }

  export type DocumentGroupByOutputType = {
    id: string
    url: string
    label: string | null
    user_id: string
    uploaded_at: Date
    _count: DocumentCountAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
        }
      >
    >


  export type DocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    label?: boolean
    user_id?: boolean
    uploaded_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    label?: boolean
    user_id?: boolean
    uploaded_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    label?: boolean
    user_id?: boolean
    uploaded_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectScalar = {
    id?: boolean
    url?: boolean
    label?: boolean
    user_id?: boolean
    uploaded_at?: boolean
  }

  export type DocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "label" | "user_id" | "uploaded_at", ExtArgs["result"]["document"]>
  export type DocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Document"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      label: string | null
      user_id: string
      uploaded_at: Date
    }, ExtArgs["result"]["document"]>
    composites: {}
  }

  type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = $Result.GetResult<Prisma.$DocumentPayload, S>

  type DocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentCountAggregateInputType | true
    }

  export interface DocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Document'], meta: { name: 'Document' } }
    /**
     * Find zero or one Document that matches the filter.
     * @param {DocumentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentFindUniqueArgs>(args: SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Document that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentFindUniqueOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentFindFirstArgs>(args?: SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentFindManyArgs>(args?: SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Document.
     * @param {DocumentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     * 
     */
    create<T extends DocumentCreateArgs>(args: SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {DocumentCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentCreateManyArgs>(args?: SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documents and returns the data saved in the database.
     * @param {DocumentCreateManyAndReturnArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Document.
     * @param {DocumentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     * 
     */
    delete<T extends DocumentDeleteArgs>(args: SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Document.
     * @param {DocumentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentUpdateArgs>(args: SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {DocumentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentDeleteManyArgs>(args?: SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentUpdateManyArgs>(args: SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents and returns the data updated in the database.
     * @param {DocumentUpdateManyAndReturnArgs} args - Arguments to update many Documents.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.updateManyAndReturn({
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
    updateManyAndReturn<T extends DocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Document.
     * @param {DocumentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
     */
    upsert<T extends DocumentUpsertArgs>(args: SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentCountArgs>(
      args?: Subset<T, DocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentAggregateArgs>(args: Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentGroupByArgs} args - Group by arguments.
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
      T extends DocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentGroupByArgs['orderBy'] }
        : { orderBy?: DocumentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Document model
   */
  readonly fields: DocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Document model
   */
  interface DocumentFieldRefs {
    readonly id: FieldRef<"Document", 'String'>
    readonly url: FieldRef<"Document", 'String'>
    readonly label: FieldRef<"Document", 'String'>
    readonly user_id: FieldRef<"Document", 'String'>
    readonly uploaded_at: FieldRef<"Document", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Document findUnique
   */
  export type DocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findUniqueOrThrow
   */
  export type DocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findFirst
   */
  export type DocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findFirstOrThrow
   */
  export type DocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findMany
   */
  export type DocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document create
   */
  export type DocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Document.
     */
    data: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
  }

  /**
   * Document createMany
   */
  export type DocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Document createManyAndReturn
   */
  export type DocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document update
   */
  export type DocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Document.
     */
    data: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
    /**
     * Choose, which Document to update.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document updateMany
   */
  export type DocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Document updateManyAndReturn
   */
  export type DocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document upsert
   */
  export type DocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Document to update in case it exists.
     */
    where: DocumentWhereUniqueInput
    /**
     * In case the Document found by the `where` argument doesn't exist, create a new Document with this data.
     */
    create: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
    /**
     * In case the Document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
  }

  /**
   * Document delete
   */
  export type DocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter which Document to delete.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document deleteMany
   */
  export type DocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to delete.
     */
    limit?: number
  }

  /**
   * Document without action
   */
  export type DocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
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
    direction: boolean | null
    user_id: string | null
    property_id: string | null
    created_at: Date | null
  }

  export type SwipeMaxAggregateOutputType = {
    id: string | null
    direction: boolean | null
    user_id: string | null
    property_id: string | null
    created_at: Date | null
  }

  export type SwipeCountAggregateOutputType = {
    id: number
    direction: number
    user_id: number
    property_id: number
    created_at: number
    _all: number
  }


  export type SwipeMinAggregateInputType = {
    id?: true
    direction?: true
    user_id?: true
    property_id?: true
    created_at?: true
  }

  export type SwipeMaxAggregateInputType = {
    id?: true
    direction?: true
    user_id?: true
    property_id?: true
    created_at?: true
  }

  export type SwipeCountAggregateInputType = {
    id?: true
    direction?: true
    user_id?: true
    property_id?: true
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
    direction: boolean
    user_id: string
    property_id: string
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
    direction?: boolean
    user_id?: boolean
    property_id?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    conversation?: boolean | Swipe$conversationArgs<ExtArgs>
  }, ExtArgs["result"]["swipe"]>

  export type SwipeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    direction?: boolean
    user_id?: boolean
    property_id?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["swipe"]>

  export type SwipeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    direction?: boolean
    user_id?: boolean
    property_id?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["swipe"]>

  export type SwipeSelectScalar = {
    id?: boolean
    direction?: boolean
    user_id?: boolean
    property_id?: boolean
    created_at?: boolean
  }

  export type SwipeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "direction" | "user_id" | "property_id" | "created_at", ExtArgs["result"]["swipe"]>
  export type SwipeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    conversation?: boolean | Swipe$conversationArgs<ExtArgs>
  }
  export type SwipeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type SwipeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }

  export type $SwipePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Swipe"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      property: Prisma.$PropertyPayload<ExtArgs>
      conversation: Prisma.$ConversationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      direction: boolean
      user_id: string
      property_id: string
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
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    conversation<T extends Swipe$conversationArgs<ExtArgs> = {}>(args?: Subset<T, Swipe$conversationArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly direction: FieldRef<"Swipe", 'Boolean'>
    readonly user_id: FieldRef<"Swipe", 'String'>
    readonly property_id: FieldRef<"Swipe", 'String'>
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
   * Swipe.conversation
   */
  export type Swipe$conversationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    where?: ConversationWhereInput
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
   * Model Conversation
   */

  export type AggregateConversation = {
    _count: ConversationCountAggregateOutputType | null
    _min: ConversationMinAggregateOutputType | null
    _max: ConversationMaxAggregateOutputType | null
  }

  export type ConversationMinAggregateOutputType = {
    id: string | null
    swipe_id: string | null
    property_id: string | null
    tenant_id: string | null
    owner_id: string | null
    created_at: Date | null
  }

  export type ConversationMaxAggregateOutputType = {
    id: string | null
    swipe_id: string | null
    property_id: string | null
    tenant_id: string | null
    owner_id: string | null
    created_at: Date | null
  }

  export type ConversationCountAggregateOutputType = {
    id: number
    swipe_id: number
    property_id: number
    tenant_id: number
    owner_id: number
    created_at: number
    _all: number
  }


  export type ConversationMinAggregateInputType = {
    id?: true
    swipe_id?: true
    property_id?: true
    tenant_id?: true
    owner_id?: true
    created_at?: true
  }

  export type ConversationMaxAggregateInputType = {
    id?: true
    swipe_id?: true
    property_id?: true
    tenant_id?: true
    owner_id?: true
    created_at?: true
  }

  export type ConversationCountAggregateInputType = {
    id?: true
    swipe_id?: true
    property_id?: true
    tenant_id?: true
    owner_id?: true
    created_at?: true
    _all?: true
  }

  export type ConversationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversation to aggregate.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conversations
    **/
    _count?: true | ConversationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversationMaxAggregateInputType
  }

  export type GetConversationAggregateType<T extends ConversationAggregateArgs> = {
        [P in keyof T & keyof AggregateConversation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversation[P]>
      : GetScalarType<T[P], AggregateConversation[P]>
  }




  export type ConversationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithAggregationInput | ConversationOrderByWithAggregationInput[]
    by: ConversationScalarFieldEnum[] | ConversationScalarFieldEnum
    having?: ConversationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversationCountAggregateInputType | true
    _min?: ConversationMinAggregateInputType
    _max?: ConversationMaxAggregateInputType
  }

  export type ConversationGroupByOutputType = {
    id: string
    swipe_id: string
    property_id: string
    tenant_id: string
    owner_id: string
    created_at: Date
    _count: ConversationCountAggregateOutputType | null
    _min: ConversationMinAggregateOutputType | null
    _max: ConversationMaxAggregateOutputType | null
  }

  type GetConversationGroupByPayload<T extends ConversationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversationGroupByOutputType[P]>
            : GetScalarType<T[P], ConversationGroupByOutputType[P]>
        }
      >
    >


  export type ConversationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    swipe_id?: boolean
    property_id?: boolean
    tenant_id?: boolean
    owner_id?: boolean
    created_at?: boolean
    swipe?: boolean | SwipeDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    tenant?: boolean | UserDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    messages?: boolean | Conversation$messagesArgs<ExtArgs>
    _count?: boolean | ConversationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    swipe_id?: boolean
    property_id?: boolean
    tenant_id?: boolean
    owner_id?: boolean
    created_at?: boolean
    swipe?: boolean | SwipeDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    tenant?: boolean | UserDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    swipe_id?: boolean
    property_id?: boolean
    tenant_id?: boolean
    owner_id?: boolean
    created_at?: boolean
    swipe?: boolean | SwipeDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    tenant?: boolean | UserDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectScalar = {
    id?: boolean
    swipe_id?: boolean
    property_id?: boolean
    tenant_id?: boolean
    owner_id?: boolean
    created_at?: boolean
  }

  export type ConversationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "swipe_id" | "property_id" | "tenant_id" | "owner_id" | "created_at", ExtArgs["result"]["conversation"]>
  export type ConversationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    swipe?: boolean | SwipeDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    tenant?: boolean | UserDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    messages?: boolean | Conversation$messagesArgs<ExtArgs>
    _count?: boolean | ConversationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConversationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    swipe?: boolean | SwipeDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    tenant?: boolean | UserDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ConversationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    swipe?: boolean | SwipeDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    tenant?: boolean | UserDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ConversationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Conversation"
    objects: {
      swipe: Prisma.$SwipePayload<ExtArgs>
      property: Prisma.$PropertyPayload<ExtArgs>
      tenant: Prisma.$UserPayload<ExtArgs>
      owner: Prisma.$UserPayload<ExtArgs>
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      swipe_id: string
      property_id: string
      tenant_id: string
      owner_id: string
      created_at: Date
    }, ExtArgs["result"]["conversation"]>
    composites: {}
  }

  type ConversationGetPayload<S extends boolean | null | undefined | ConversationDefaultArgs> = $Result.GetResult<Prisma.$ConversationPayload, S>

  type ConversationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConversationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConversationCountAggregateInputType | true
    }

  export interface ConversationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Conversation'], meta: { name: 'Conversation' } }
    /**
     * Find zero or one Conversation that matches the filter.
     * @param {ConversationFindUniqueArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConversationFindUniqueArgs>(args: SelectSubset<T, ConversationFindUniqueArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conversation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConversationFindUniqueOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConversationFindUniqueOrThrowArgs>(args: SelectSubset<T, ConversationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindFirstArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConversationFindFirstArgs>(args?: SelectSubset<T, ConversationFindFirstArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindFirstOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConversationFindFirstOrThrowArgs>(args?: SelectSubset<T, ConversationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conversations
     * const conversations = await prisma.conversation.findMany()
     * 
     * // Get first 10 Conversations
     * const conversations = await prisma.conversation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversationWithIdOnly = await prisma.conversation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConversationFindManyArgs>(args?: SelectSubset<T, ConversationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conversation.
     * @param {ConversationCreateArgs} args - Arguments to create a Conversation.
     * @example
     * // Create one Conversation
     * const Conversation = await prisma.conversation.create({
     *   data: {
     *     // ... data to create a Conversation
     *   }
     * })
     * 
     */
    create<T extends ConversationCreateArgs>(args: SelectSubset<T, ConversationCreateArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conversations.
     * @param {ConversationCreateManyArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversation = await prisma.conversation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConversationCreateManyArgs>(args?: SelectSubset<T, ConversationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Conversations and returns the data saved in the database.
     * @param {ConversationCreateManyAndReturnArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversation = await prisma.conversation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Conversations and only return the `id`
     * const conversationWithIdOnly = await prisma.conversation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConversationCreateManyAndReturnArgs>(args?: SelectSubset<T, ConversationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Conversation.
     * @param {ConversationDeleteArgs} args - Arguments to delete one Conversation.
     * @example
     * // Delete one Conversation
     * const Conversation = await prisma.conversation.delete({
     *   where: {
     *     // ... filter to delete one Conversation
     *   }
     * })
     * 
     */
    delete<T extends ConversationDeleteArgs>(args: SelectSubset<T, ConversationDeleteArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conversation.
     * @param {ConversationUpdateArgs} args - Arguments to update one Conversation.
     * @example
     * // Update one Conversation
     * const conversation = await prisma.conversation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConversationUpdateArgs>(args: SelectSubset<T, ConversationUpdateArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conversations.
     * @param {ConversationDeleteManyArgs} args - Arguments to filter Conversations to delete.
     * @example
     * // Delete a few Conversations
     * const { count } = await prisma.conversation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConversationDeleteManyArgs>(args?: SelectSubset<T, ConversationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conversations
     * const conversation = await prisma.conversation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConversationUpdateManyArgs>(args: SelectSubset<T, ConversationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations and returns the data updated in the database.
     * @param {ConversationUpdateManyAndReturnArgs} args - Arguments to update many Conversations.
     * @example
     * // Update many Conversations
     * const conversation = await prisma.conversation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Conversations and only return the `id`
     * const conversationWithIdOnly = await prisma.conversation.updateManyAndReturn({
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
    updateManyAndReturn<T extends ConversationUpdateManyAndReturnArgs>(args: SelectSubset<T, ConversationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Conversation.
     * @param {ConversationUpsertArgs} args - Arguments to update or create a Conversation.
     * @example
     * // Update or create a Conversation
     * const conversation = await prisma.conversation.upsert({
     *   create: {
     *     // ... data to create a Conversation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conversation we want to update
     *   }
     * })
     */
    upsert<T extends ConversationUpsertArgs>(args: SelectSubset<T, ConversationUpsertArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationCountArgs} args - Arguments to filter Conversations to count.
     * @example
     * // Count the number of Conversations
     * const count = await prisma.conversation.count({
     *   where: {
     *     // ... the filter for the Conversations we want to count
     *   }
     * })
    **/
    count<T extends ConversationCountArgs>(
      args?: Subset<T, ConversationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConversationAggregateArgs>(args: Subset<T, ConversationAggregateArgs>): Prisma.PrismaPromise<GetConversationAggregateType<T>>

    /**
     * Group by Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationGroupByArgs} args - Group by arguments.
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
      T extends ConversationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversationGroupByArgs['orderBy'] }
        : { orderBy?: ConversationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConversationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Conversation model
   */
  readonly fields: ConversationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conversation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConversationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    swipe<T extends SwipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SwipeDefaultArgs<ExtArgs>>): Prisma__SwipeClient<$Result.GetResult<Prisma.$SwipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tenant<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    messages<T extends Conversation$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Conversation$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Conversation model
   */
  interface ConversationFieldRefs {
    readonly id: FieldRef<"Conversation", 'String'>
    readonly swipe_id: FieldRef<"Conversation", 'String'>
    readonly property_id: FieldRef<"Conversation", 'String'>
    readonly tenant_id: FieldRef<"Conversation", 'String'>
    readonly owner_id: FieldRef<"Conversation", 'String'>
    readonly created_at: FieldRef<"Conversation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Conversation findUnique
   */
  export type ConversationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation findUniqueOrThrow
   */
  export type ConversationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation findFirst
   */
  export type ConversationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation findFirstOrThrow
   */
  export type ConversationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation findMany
   */
  export type ConversationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversations to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation create
   */
  export type ConversationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The data needed to create a Conversation.
     */
    data: XOR<ConversationCreateInput, ConversationUncheckedCreateInput>
  }

  /**
   * Conversation createMany
   */
  export type ConversationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conversations.
     */
    data: ConversationCreateManyInput | ConversationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Conversation createManyAndReturn
   */
  export type ConversationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * The data used to create many Conversations.
     */
    data: ConversationCreateManyInput | ConversationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conversation update
   */
  export type ConversationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The data needed to update a Conversation.
     */
    data: XOR<ConversationUpdateInput, ConversationUncheckedUpdateInput>
    /**
     * Choose, which Conversation to update.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation updateMany
   */
  export type ConversationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conversations.
     */
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyInput>
    /**
     * Filter which Conversations to update
     */
    where?: ConversationWhereInput
    /**
     * Limit how many Conversations to update.
     */
    limit?: number
  }

  /**
   * Conversation updateManyAndReturn
   */
  export type ConversationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * The data used to update Conversations.
     */
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyInput>
    /**
     * Filter which Conversations to update
     */
    where?: ConversationWhereInput
    /**
     * Limit how many Conversations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conversation upsert
   */
  export type ConversationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The filter to search for the Conversation to update in case it exists.
     */
    where: ConversationWhereUniqueInput
    /**
     * In case the Conversation found by the `where` argument doesn't exist, create a new Conversation with this data.
     */
    create: XOR<ConversationCreateInput, ConversationUncheckedCreateInput>
    /**
     * In case the Conversation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConversationUpdateInput, ConversationUncheckedUpdateInput>
  }

  /**
   * Conversation delete
   */
  export type ConversationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter which Conversation to delete.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation deleteMany
   */
  export type ConversationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversations to delete
     */
    where?: ConversationWhereInput
    /**
     * Limit how many Conversations to delete.
     */
    limit?: number
  }

  /**
   * Conversation.messages
   */
  export type Conversation$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Conversation without action
   */
  export type ConversationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
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
    read: boolean | null
    conversation_id: string | null
    sender_id: string | null
    created_at: Date | null
    deleted_at: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    content: string | null
    read: boolean | null
    conversation_id: string | null
    sender_id: string | null
    created_at: Date | null
    deleted_at: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    content: number
    read: number
    conversation_id: number
    sender_id: number
    created_at: number
    deleted_at: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    content?: true
    read?: true
    conversation_id?: true
    sender_id?: true
    created_at?: true
    deleted_at?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    content?: true
    read?: true
    conversation_id?: true
    sender_id?: true
    created_at?: true
    deleted_at?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    content?: true
    read?: true
    conversation_id?: true
    sender_id?: true
    created_at?: true
    deleted_at?: true
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
    read: boolean
    conversation_id: string
    sender_id: string
    created_at: Date
    deleted_at: Date | null
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
    read?: boolean
    conversation_id?: boolean
    sender_id?: boolean
    created_at?: boolean
    deleted_at?: boolean
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    read?: boolean
    conversation_id?: boolean
    sender_id?: boolean
    created_at?: boolean
    deleted_at?: boolean
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    read?: boolean
    conversation_id?: boolean
    sender_id?: boolean
    created_at?: boolean
    deleted_at?: boolean
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    content?: boolean
    read?: boolean
    conversation_id?: boolean
    sender_id?: boolean
    created_at?: boolean
    deleted_at?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "read" | "conversation_id" | "sender_id" | "created_at" | "deleted_at", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      conversation: Prisma.$ConversationPayload<ExtArgs>
      sender: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      read: boolean
      conversation_id: string
      sender_id: string
      created_at: Date
      deleted_at: Date | null
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
    conversation<T extends ConversationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConversationDefaultArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly read: FieldRef<"Message", 'Boolean'>
    readonly conversation_id: FieldRef<"Message", 'String'>
    readonly sender_id: FieldRef<"Message", 'String'>
    readonly created_at: FieldRef<"Message", 'DateTime'>
    readonly deleted_at: FieldRef<"Message", 'DateTime'>
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
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressMinAggregateOutputType = {
    id: string | null
    number: string | null
    box: string | null
    street: string | null
    city: string | null
    postal_code: string | null
    country: string | null
    created_at: Date | null
  }

  export type AddressMaxAggregateOutputType = {
    id: string | null
    number: string | null
    box: string | null
    street: string | null
    city: string | null
    postal_code: string | null
    country: string | null
    created_at: Date | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    number: number
    box: number
    street: number
    city: number
    postal_code: number
    country: number
    created_at: number
    _all: number
  }


  export type AddressMinAggregateInputType = {
    id?: true
    number?: true
    box?: true
    street?: true
    city?: true
    postal_code?: true
    country?: true
    created_at?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    number?: true
    box?: true
    street?: true
    city?: true
    postal_code?: true
    country?: true
    created_at?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    number?: true
    box?: true
    street?: true
    city?: true
    postal_code?: true
    country?: true
    created_at?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: string
    number: string
    box: string | null
    street: string
    city: string
    postal_code: string
    country: string
    created_at: Date
    _count: AddressCountAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    box?: boolean
    street?: boolean
    city?: boolean
    postal_code?: boolean
    country?: boolean
    created_at?: boolean
    users?: boolean | Address$usersArgs<ExtArgs>
    agencies?: boolean | Address$agenciesArgs<ExtArgs>
    properties?: boolean | Address$propertiesArgs<ExtArgs>
    _count?: boolean | AddressCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    box?: boolean
    street?: boolean
    city?: boolean
    postal_code?: boolean
    country?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["address"]>

  export type AddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    box?: boolean
    street?: boolean
    city?: boolean
    postal_code?: boolean
    country?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["address"]>

  export type AddressSelectScalar = {
    id?: boolean
    number?: boolean
    box?: boolean
    street?: boolean
    city?: boolean
    postal_code?: boolean
    country?: boolean
    created_at?: boolean
  }

  export type AddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "number" | "box" | "street" | "city" | "postal_code" | "country" | "created_at", ExtArgs["result"]["address"]>
  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Address$usersArgs<ExtArgs>
    agencies?: boolean | Address$agenciesArgs<ExtArgs>
    properties?: boolean | Address$propertiesArgs<ExtArgs>
    _count?: boolean | AddressCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      agencies: Prisma.$AgencyPayload<ExtArgs>[]
      properties: Prisma.$PropertyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      number: string
      box: string | null
      street: string
      city: string
      postal_code: string
      country: string
      created_at: Date
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddressFindManyArgs>(args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends AddressCreateArgs>(args: SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCreateManyArgs>(args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {AddressCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AddressCreateManyAndReturnArgs>(args?: SelectSubset<T, AddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends AddressDeleteArgs>(args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressUpdateArgs>(args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressDeleteManyArgs>(args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressUpdateManyArgs>(args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses and returns the data updated in the database.
     * @param {AddressUpdateManyAndReturnArgs} args - Arguments to update many Addresses.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.updateManyAndReturn({
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
    updateManyAndReturn<T extends AddressUpdateManyAndReturnArgs>(args: SelectSubset<T, AddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
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
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Address$usersArgs<ExtArgs> = {}>(args?: Subset<T, Address$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    agencies<T extends Address$agenciesArgs<ExtArgs> = {}>(args?: Subset<T, Address$agenciesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgencyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    properties<T extends Address$propertiesArgs<ExtArgs> = {}>(args?: Subset<T, Address$propertiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Address model
   */
  interface AddressFieldRefs {
    readonly id: FieldRef<"Address", 'String'>
    readonly number: FieldRef<"Address", 'String'>
    readonly box: FieldRef<"Address", 'String'>
    readonly street: FieldRef<"Address", 'String'>
    readonly city: FieldRef<"Address", 'String'>
    readonly postal_code: FieldRef<"Address", 'String'>
    readonly country: FieldRef<"Address", 'String'>
    readonly created_at: FieldRef<"Address", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address createManyAndReturn
   */
  export type AddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address updateManyAndReturn
   */
  export type AddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to delete.
     */
    limit?: number
  }

  /**
   * Address.users
   */
  export type Address$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Address.agencies
   */
  export type Address$agenciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agency
     */
    select?: AgencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agency
     */
    omit?: AgencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencyInclude<ExtArgs> | null
    where?: AgencyWhereInput
    orderBy?: AgencyOrderByWithRelationInput | AgencyOrderByWithRelationInput[]
    cursor?: AgencyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgencyScalarFieldEnum | AgencyScalarFieldEnum[]
  }

  /**
   * Address.properties
   */
  export type Address$propertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    cursor?: PropertyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
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
    firstname: 'firstname',
    lastname: 'lastname',
    phone: 'phone',
    bio: 'bio',
    role: 'role',
    is_active: 'is_active',
    address_id: 'address_id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AgencyScalarFieldEnum: {
    id: 'id',
    nom_agence: 'nom_agence',
    numero_tva: 'numero_tva',
    numero_bce: 'numero_bce',
    site_web: 'site_web',
    address_id: 'address_id',
    user_id: 'user_id',
    created_at: 'created_at'
  };

  export type AgencyScalarFieldEnum = (typeof AgencyScalarFieldEnum)[keyof typeof AgencyScalarFieldEnum]


  export const TenantProfileScalarFieldEnum: {
    id: 'id',
    household_size: 'household_size',
    budget_max: 'budget_max',
    min_surface: 'min_surface',
    max_surface: 'max_surface',
    regions: 'regions',
    property_types: 'property_types',
    user_id: 'user_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TenantProfileScalarFieldEnum = (typeof TenantProfileScalarFieldEnum)[keyof typeof TenantProfileScalarFieldEnum]


  export const PropertyScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    property_type: 'property_type',
    status: 'status',
    address_id: 'address_id',
    price: 'price',
    surface: 'surface',
    rooms: 'rooms',
    parking: 'parking',
    owner_id: 'owner_id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type PropertyScalarFieldEnum = (typeof PropertyScalarFieldEnum)[keyof typeof PropertyScalarFieldEnum]


  export const AnnouncementPhotoScalarFieldEnum: {
    id: 'id',
    url: 'url',
    order: 'order',
    property_id: 'property_id',
    uploaded_at: 'uploaded_at'
  };

  export type AnnouncementPhotoScalarFieldEnum = (typeof AnnouncementPhotoScalarFieldEnum)[keyof typeof AnnouncementPhotoScalarFieldEnum]


  export const ProfilePhotoScalarFieldEnum: {
    id: 'id',
    url: 'url',
    user_id: 'user_id',
    uploaded_at: 'uploaded_at'
  };

  export type ProfilePhotoScalarFieldEnum = (typeof ProfilePhotoScalarFieldEnum)[keyof typeof ProfilePhotoScalarFieldEnum]


  export const DocumentScalarFieldEnum: {
    id: 'id',
    url: 'url',
    label: 'label',
    user_id: 'user_id',
    uploaded_at: 'uploaded_at'
  };

  export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum]


  export const SwipeScalarFieldEnum: {
    id: 'id',
    direction: 'direction',
    user_id: 'user_id',
    property_id: 'property_id',
    created_at: 'created_at'
  };

  export type SwipeScalarFieldEnum = (typeof SwipeScalarFieldEnum)[keyof typeof SwipeScalarFieldEnum]


  export const ConversationScalarFieldEnum: {
    id: 'id',
    swipe_id: 'swipe_id',
    property_id: 'property_id',
    tenant_id: 'tenant_id',
    owner_id: 'owner_id',
    created_at: 'created_at'
  };

  export type ConversationScalarFieldEnum = (typeof ConversationScalarFieldEnum)[keyof typeof ConversationScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    content: 'content',
    read: 'read',
    conversation_id: 'conversation_id',
    sender_id: 'sender_id',
    created_at: 'created_at',
    deleted_at: 'deleted_at'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const AddressScalarFieldEnum: {
    id: 'id',
    number: 'number',
    box: 'box',
    street: 'street',
    city: 'city',
    postal_code: 'postal_code',
    country: 'country',
    created_at: 'created_at'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'PropertyType[]'
   */
  export type ListEnumPropertyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PropertyType[]'>
    


  /**
   * Reference to a field of type 'PropertyType'
   */
  export type EnumPropertyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PropertyType'>
    


  /**
   * Reference to a field of type 'PropertyStatus'
   */
  export type EnumPropertyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PropertyStatus'>
    


  /**
   * Reference to a field of type 'PropertyStatus[]'
   */
  export type ListEnumPropertyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PropertyStatus[]'>
    
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
    firstname?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    is_active?: BoolFilter<"User"> | boolean
    address_id?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    deleted_at?: DateTimeNullableFilter<"User"> | Date | string | null
    agency?: XOR<AgencyNullableScalarRelationFilter, AgencyWhereInput> | null
    tenant_profile?: XOR<TenantProfileNullableScalarRelationFilter, TenantProfileWhereInput> | null
    properties?: PropertyListRelationFilter
    swipes?: SwipeListRelationFilter
    conversations_as_tenant?: ConversationListRelationFilter
    conversations_as_owner?: ConversationListRelationFilter
    messages?: MessageListRelationFilter
    profile_photos?: ProfilePhotoListRelationFilter
    documents?: DocumentListRelationFilter
    address?: XOR<AddressScalarRelationFilter, AddressWhereInput>
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    phone?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    role?: SortOrder
    is_active?: SortOrder
    address_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    agency?: AgencyOrderByWithRelationInput
    tenant_profile?: TenantProfileOrderByWithRelationInput
    properties?: PropertyOrderByRelationAggregateInput
    swipes?: SwipeOrderByRelationAggregateInput
    conversations_as_tenant?: ConversationOrderByRelationAggregateInput
    conversations_as_owner?: ConversationOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
    profile_photos?: ProfilePhotoOrderByRelationAggregateInput
    documents?: DocumentOrderByRelationAggregateInput
    address?: AddressOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    firstname?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    is_active?: BoolFilter<"User"> | boolean
    address_id?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    deleted_at?: DateTimeNullableFilter<"User"> | Date | string | null
    agency?: XOR<AgencyNullableScalarRelationFilter, AgencyWhereInput> | null
    tenant_profile?: XOR<TenantProfileNullableScalarRelationFilter, TenantProfileWhereInput> | null
    properties?: PropertyListRelationFilter
    swipes?: SwipeListRelationFilter
    conversations_as_tenant?: ConversationListRelationFilter
    conversations_as_owner?: ConversationListRelationFilter
    messages?: MessageListRelationFilter
    profile_photos?: ProfilePhotoListRelationFilter
    documents?: DocumentListRelationFilter
    address?: XOR<AddressScalarRelationFilter, AddressWhereInput>
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    phone?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    role?: SortOrder
    is_active?: SortOrder
    address_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
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
    firstname?: StringWithAggregatesFilter<"User"> | string
    lastname?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    is_active?: BoolWithAggregatesFilter<"User"> | boolean
    address_id?: StringWithAggregatesFilter<"User"> | string
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type AgencyWhereInput = {
    AND?: AgencyWhereInput | AgencyWhereInput[]
    OR?: AgencyWhereInput[]
    NOT?: AgencyWhereInput | AgencyWhereInput[]
    id?: StringFilter<"Agency"> | string
    nom_agence?: StringFilter<"Agency"> | string
    numero_tva?: StringNullableFilter<"Agency"> | string | null
    numero_bce?: StringNullableFilter<"Agency"> | string | null
    site_web?: StringNullableFilter<"Agency"> | string | null
    address_id?: StringFilter<"Agency"> | string
    user_id?: StringFilter<"Agency"> | string
    created_at?: DateTimeFilter<"Agency"> | Date | string
    address?: XOR<AddressScalarRelationFilter, AddressWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AgencyOrderByWithRelationInput = {
    id?: SortOrder
    nom_agence?: SortOrder
    numero_tva?: SortOrderInput | SortOrder
    numero_bce?: SortOrderInput | SortOrder
    site_web?: SortOrderInput | SortOrder
    address_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    address?: AddressOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type AgencyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id?: string
    AND?: AgencyWhereInput | AgencyWhereInput[]
    OR?: AgencyWhereInput[]
    NOT?: AgencyWhereInput | AgencyWhereInput[]
    nom_agence?: StringFilter<"Agency"> | string
    numero_tva?: StringNullableFilter<"Agency"> | string | null
    numero_bce?: StringNullableFilter<"Agency"> | string | null
    site_web?: StringNullableFilter<"Agency"> | string | null
    address_id?: StringFilter<"Agency"> | string
    created_at?: DateTimeFilter<"Agency"> | Date | string
    address?: XOR<AddressScalarRelationFilter, AddressWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "user_id">

  export type AgencyOrderByWithAggregationInput = {
    id?: SortOrder
    nom_agence?: SortOrder
    numero_tva?: SortOrderInput | SortOrder
    numero_bce?: SortOrderInput | SortOrder
    site_web?: SortOrderInput | SortOrder
    address_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    _count?: AgencyCountOrderByAggregateInput
    _max?: AgencyMaxOrderByAggregateInput
    _min?: AgencyMinOrderByAggregateInput
  }

  export type AgencyScalarWhereWithAggregatesInput = {
    AND?: AgencyScalarWhereWithAggregatesInput | AgencyScalarWhereWithAggregatesInput[]
    OR?: AgencyScalarWhereWithAggregatesInput[]
    NOT?: AgencyScalarWhereWithAggregatesInput | AgencyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Agency"> | string
    nom_agence?: StringWithAggregatesFilter<"Agency"> | string
    numero_tva?: StringNullableWithAggregatesFilter<"Agency"> | string | null
    numero_bce?: StringNullableWithAggregatesFilter<"Agency"> | string | null
    site_web?: StringNullableWithAggregatesFilter<"Agency"> | string | null
    address_id?: StringWithAggregatesFilter<"Agency"> | string
    user_id?: StringWithAggregatesFilter<"Agency"> | string
    created_at?: DateTimeWithAggregatesFilter<"Agency"> | Date | string
  }

  export type TenantProfileWhereInput = {
    AND?: TenantProfileWhereInput | TenantProfileWhereInput[]
    OR?: TenantProfileWhereInput[]
    NOT?: TenantProfileWhereInput | TenantProfileWhereInput[]
    id?: StringFilter<"TenantProfile"> | string
    household_size?: IntNullableFilter<"TenantProfile"> | number | null
    budget_max?: FloatNullableFilter<"TenantProfile"> | number | null
    min_surface?: IntNullableFilter<"TenantProfile"> | number | null
    max_surface?: IntNullableFilter<"TenantProfile"> | number | null
    regions?: StringNullableListFilter<"TenantProfile">
    property_types?: EnumPropertyTypeNullableListFilter<"TenantProfile">
    user_id?: StringFilter<"TenantProfile"> | string
    created_at?: DateTimeFilter<"TenantProfile"> | Date | string
    updated_at?: DateTimeFilter<"TenantProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TenantProfileOrderByWithRelationInput = {
    id?: SortOrder
    household_size?: SortOrderInput | SortOrder
    budget_max?: SortOrderInput | SortOrder
    min_surface?: SortOrderInput | SortOrder
    max_surface?: SortOrderInput | SortOrder
    regions?: SortOrder
    property_types?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TenantProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id?: string
    AND?: TenantProfileWhereInput | TenantProfileWhereInput[]
    OR?: TenantProfileWhereInput[]
    NOT?: TenantProfileWhereInput | TenantProfileWhereInput[]
    household_size?: IntNullableFilter<"TenantProfile"> | number | null
    budget_max?: FloatNullableFilter<"TenantProfile"> | number | null
    min_surface?: IntNullableFilter<"TenantProfile"> | number | null
    max_surface?: IntNullableFilter<"TenantProfile"> | number | null
    regions?: StringNullableListFilter<"TenantProfile">
    property_types?: EnumPropertyTypeNullableListFilter<"TenantProfile">
    created_at?: DateTimeFilter<"TenantProfile"> | Date | string
    updated_at?: DateTimeFilter<"TenantProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "user_id">

  export type TenantProfileOrderByWithAggregationInput = {
    id?: SortOrder
    household_size?: SortOrderInput | SortOrder
    budget_max?: SortOrderInput | SortOrder
    min_surface?: SortOrderInput | SortOrder
    max_surface?: SortOrderInput | SortOrder
    regions?: SortOrder
    property_types?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: TenantProfileCountOrderByAggregateInput
    _avg?: TenantProfileAvgOrderByAggregateInput
    _max?: TenantProfileMaxOrderByAggregateInput
    _min?: TenantProfileMinOrderByAggregateInput
    _sum?: TenantProfileSumOrderByAggregateInput
  }

  export type TenantProfileScalarWhereWithAggregatesInput = {
    AND?: TenantProfileScalarWhereWithAggregatesInput | TenantProfileScalarWhereWithAggregatesInput[]
    OR?: TenantProfileScalarWhereWithAggregatesInput[]
    NOT?: TenantProfileScalarWhereWithAggregatesInput | TenantProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TenantProfile"> | string
    household_size?: IntNullableWithAggregatesFilter<"TenantProfile"> | number | null
    budget_max?: FloatNullableWithAggregatesFilter<"TenantProfile"> | number | null
    min_surface?: IntNullableWithAggregatesFilter<"TenantProfile"> | number | null
    max_surface?: IntNullableWithAggregatesFilter<"TenantProfile"> | number | null
    regions?: StringNullableListFilter<"TenantProfile">
    property_types?: EnumPropertyTypeNullableListFilter<"TenantProfile">
    user_id?: StringWithAggregatesFilter<"TenantProfile"> | string
    created_at?: DateTimeWithAggregatesFilter<"TenantProfile"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"TenantProfile"> | Date | string
  }

  export type PropertyWhereInput = {
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    id?: StringFilter<"Property"> | string
    title?: StringFilter<"Property"> | string
    description?: StringNullableFilter<"Property"> | string | null
    property_type?: EnumPropertyTypeFilter<"Property"> | $Enums.PropertyType
    status?: EnumPropertyStatusFilter<"Property"> | $Enums.PropertyStatus
    address_id?: StringFilter<"Property"> | string
    price?: IntFilter<"Property"> | number
    surface?: IntFilter<"Property"> | number
    rooms?: IntFilter<"Property"> | number
    parking?: BoolFilter<"Property"> | boolean
    owner_id?: StringFilter<"Property"> | string
    created_at?: DateTimeFilter<"Property"> | Date | string
    updated_at?: DateTimeFilter<"Property"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Property"> | Date | string | null
    address?: XOR<AddressScalarRelationFilter, AddressWhereInput>
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    photos?: AnnouncementPhotoListRelationFilter
    swipes?: SwipeListRelationFilter
    conversations?: ConversationListRelationFilter
  }

  export type PropertyOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    property_type?: SortOrder
    status?: SortOrder
    address_id?: SortOrder
    price?: SortOrder
    surface?: SortOrder
    rooms?: SortOrder
    parking?: SortOrder
    owner_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    address?: AddressOrderByWithRelationInput
    owner?: UserOrderByWithRelationInput
    photos?: AnnouncementPhotoOrderByRelationAggregateInput
    swipes?: SwipeOrderByRelationAggregateInput
    conversations?: ConversationOrderByRelationAggregateInput
  }

  export type PropertyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    title?: StringFilter<"Property"> | string
    description?: StringNullableFilter<"Property"> | string | null
    property_type?: EnumPropertyTypeFilter<"Property"> | $Enums.PropertyType
    status?: EnumPropertyStatusFilter<"Property"> | $Enums.PropertyStatus
    address_id?: StringFilter<"Property"> | string
    price?: IntFilter<"Property"> | number
    surface?: IntFilter<"Property"> | number
    rooms?: IntFilter<"Property"> | number
    parking?: BoolFilter<"Property"> | boolean
    owner_id?: StringFilter<"Property"> | string
    created_at?: DateTimeFilter<"Property"> | Date | string
    updated_at?: DateTimeFilter<"Property"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Property"> | Date | string | null
    address?: XOR<AddressScalarRelationFilter, AddressWhereInput>
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    photos?: AnnouncementPhotoListRelationFilter
    swipes?: SwipeListRelationFilter
    conversations?: ConversationListRelationFilter
  }, "id">

  export type PropertyOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    property_type?: SortOrder
    status?: SortOrder
    address_id?: SortOrder
    price?: SortOrder
    surface?: SortOrder
    rooms?: SortOrder
    parking?: SortOrder
    owner_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: PropertyCountOrderByAggregateInput
    _avg?: PropertyAvgOrderByAggregateInput
    _max?: PropertyMaxOrderByAggregateInput
    _min?: PropertyMinOrderByAggregateInput
    _sum?: PropertySumOrderByAggregateInput
  }

  export type PropertyScalarWhereWithAggregatesInput = {
    AND?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    OR?: PropertyScalarWhereWithAggregatesInput[]
    NOT?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Property"> | string
    title?: StringWithAggregatesFilter<"Property"> | string
    description?: StringNullableWithAggregatesFilter<"Property"> | string | null
    property_type?: EnumPropertyTypeWithAggregatesFilter<"Property"> | $Enums.PropertyType
    status?: EnumPropertyStatusWithAggregatesFilter<"Property"> | $Enums.PropertyStatus
    address_id?: StringWithAggregatesFilter<"Property"> | string
    price?: IntWithAggregatesFilter<"Property"> | number
    surface?: IntWithAggregatesFilter<"Property"> | number
    rooms?: IntWithAggregatesFilter<"Property"> | number
    parking?: BoolWithAggregatesFilter<"Property"> | boolean
    owner_id?: StringWithAggregatesFilter<"Property"> | string
    created_at?: DateTimeWithAggregatesFilter<"Property"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Property"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"Property"> | Date | string | null
  }

  export type AnnouncementPhotoWhereInput = {
    AND?: AnnouncementPhotoWhereInput | AnnouncementPhotoWhereInput[]
    OR?: AnnouncementPhotoWhereInput[]
    NOT?: AnnouncementPhotoWhereInput | AnnouncementPhotoWhereInput[]
    id?: StringFilter<"AnnouncementPhoto"> | string
    url?: StringFilter<"AnnouncementPhoto"> | string
    order?: IntFilter<"AnnouncementPhoto"> | number
    property_id?: StringFilter<"AnnouncementPhoto"> | string
    uploaded_at?: DateTimeFilter<"AnnouncementPhoto"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }

  export type AnnouncementPhotoOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    order?: SortOrder
    property_id?: SortOrder
    uploaded_at?: SortOrder
    property?: PropertyOrderByWithRelationInput
  }

  export type AnnouncementPhotoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnnouncementPhotoWhereInput | AnnouncementPhotoWhereInput[]
    OR?: AnnouncementPhotoWhereInput[]
    NOT?: AnnouncementPhotoWhereInput | AnnouncementPhotoWhereInput[]
    url?: StringFilter<"AnnouncementPhoto"> | string
    order?: IntFilter<"AnnouncementPhoto"> | number
    property_id?: StringFilter<"AnnouncementPhoto"> | string
    uploaded_at?: DateTimeFilter<"AnnouncementPhoto"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }, "id">

  export type AnnouncementPhotoOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    order?: SortOrder
    property_id?: SortOrder
    uploaded_at?: SortOrder
    _count?: AnnouncementPhotoCountOrderByAggregateInput
    _avg?: AnnouncementPhotoAvgOrderByAggregateInput
    _max?: AnnouncementPhotoMaxOrderByAggregateInput
    _min?: AnnouncementPhotoMinOrderByAggregateInput
    _sum?: AnnouncementPhotoSumOrderByAggregateInput
  }

  export type AnnouncementPhotoScalarWhereWithAggregatesInput = {
    AND?: AnnouncementPhotoScalarWhereWithAggregatesInput | AnnouncementPhotoScalarWhereWithAggregatesInput[]
    OR?: AnnouncementPhotoScalarWhereWithAggregatesInput[]
    NOT?: AnnouncementPhotoScalarWhereWithAggregatesInput | AnnouncementPhotoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AnnouncementPhoto"> | string
    url?: StringWithAggregatesFilter<"AnnouncementPhoto"> | string
    order?: IntWithAggregatesFilter<"AnnouncementPhoto"> | number
    property_id?: StringWithAggregatesFilter<"AnnouncementPhoto"> | string
    uploaded_at?: DateTimeWithAggregatesFilter<"AnnouncementPhoto"> | Date | string
  }

  export type ProfilePhotoWhereInput = {
    AND?: ProfilePhotoWhereInput | ProfilePhotoWhereInput[]
    OR?: ProfilePhotoWhereInput[]
    NOT?: ProfilePhotoWhereInput | ProfilePhotoWhereInput[]
    id?: StringFilter<"ProfilePhoto"> | string
    url?: StringFilter<"ProfilePhoto"> | string
    user_id?: StringFilter<"ProfilePhoto"> | string
    uploaded_at?: DateTimeFilter<"ProfilePhoto"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProfilePhotoOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    user_id?: SortOrder
    uploaded_at?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ProfilePhotoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProfilePhotoWhereInput | ProfilePhotoWhereInput[]
    OR?: ProfilePhotoWhereInput[]
    NOT?: ProfilePhotoWhereInput | ProfilePhotoWhereInput[]
    url?: StringFilter<"ProfilePhoto"> | string
    user_id?: StringFilter<"ProfilePhoto"> | string
    uploaded_at?: DateTimeFilter<"ProfilePhoto"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ProfilePhotoOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    user_id?: SortOrder
    uploaded_at?: SortOrder
    _count?: ProfilePhotoCountOrderByAggregateInput
    _max?: ProfilePhotoMaxOrderByAggregateInput
    _min?: ProfilePhotoMinOrderByAggregateInput
  }

  export type ProfilePhotoScalarWhereWithAggregatesInput = {
    AND?: ProfilePhotoScalarWhereWithAggregatesInput | ProfilePhotoScalarWhereWithAggregatesInput[]
    OR?: ProfilePhotoScalarWhereWithAggregatesInput[]
    NOT?: ProfilePhotoScalarWhereWithAggregatesInput | ProfilePhotoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProfilePhoto"> | string
    url?: StringWithAggregatesFilter<"ProfilePhoto"> | string
    user_id?: StringWithAggregatesFilter<"ProfilePhoto"> | string
    uploaded_at?: DateTimeWithAggregatesFilter<"ProfilePhoto"> | Date | string
  }

  export type DocumentWhereInput = {
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    id?: StringFilter<"Document"> | string
    url?: StringFilter<"Document"> | string
    label?: StringNullableFilter<"Document"> | string | null
    user_id?: StringFilter<"Document"> | string
    uploaded_at?: DateTimeFilter<"Document"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DocumentOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    label?: SortOrderInput | SortOrder
    user_id?: SortOrder
    uploaded_at?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    url?: StringFilter<"Document"> | string
    label?: StringNullableFilter<"Document"> | string | null
    user_id?: StringFilter<"Document"> | string
    uploaded_at?: DateTimeFilter<"Document"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type DocumentOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    label?: SortOrderInput | SortOrder
    user_id?: SortOrder
    uploaded_at?: SortOrder
    _count?: DocumentCountOrderByAggregateInput
    _max?: DocumentMaxOrderByAggregateInput
    _min?: DocumentMinOrderByAggregateInput
  }

  export type DocumentScalarWhereWithAggregatesInput = {
    AND?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    OR?: DocumentScalarWhereWithAggregatesInput[]
    NOT?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Document"> | string
    url?: StringWithAggregatesFilter<"Document"> | string
    label?: StringNullableWithAggregatesFilter<"Document"> | string | null
    user_id?: StringWithAggregatesFilter<"Document"> | string
    uploaded_at?: DateTimeWithAggregatesFilter<"Document"> | Date | string
  }

  export type SwipeWhereInput = {
    AND?: SwipeWhereInput | SwipeWhereInput[]
    OR?: SwipeWhereInput[]
    NOT?: SwipeWhereInput | SwipeWhereInput[]
    id?: StringFilter<"Swipe"> | string
    direction?: BoolFilter<"Swipe"> | boolean
    user_id?: StringFilter<"Swipe"> | string
    property_id?: StringFilter<"Swipe"> | string
    created_at?: DateTimeFilter<"Swipe"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    conversation?: XOR<ConversationNullableScalarRelationFilter, ConversationWhereInput> | null
  }

  export type SwipeOrderByWithRelationInput = {
    id?: SortOrder
    direction?: SortOrder
    user_id?: SortOrder
    property_id?: SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
    property?: PropertyOrderByWithRelationInput
    conversation?: ConversationOrderByWithRelationInput
  }

  export type SwipeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id_property_id?: SwipeUser_idProperty_idCompoundUniqueInput
    AND?: SwipeWhereInput | SwipeWhereInput[]
    OR?: SwipeWhereInput[]
    NOT?: SwipeWhereInput | SwipeWhereInput[]
    direction?: BoolFilter<"Swipe"> | boolean
    user_id?: StringFilter<"Swipe"> | string
    property_id?: StringFilter<"Swipe"> | string
    created_at?: DateTimeFilter<"Swipe"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    conversation?: XOR<ConversationNullableScalarRelationFilter, ConversationWhereInput> | null
  }, "id" | "user_id_property_id">

  export type SwipeOrderByWithAggregationInput = {
    id?: SortOrder
    direction?: SortOrder
    user_id?: SortOrder
    property_id?: SortOrder
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
    direction?: BoolWithAggregatesFilter<"Swipe"> | boolean
    user_id?: StringWithAggregatesFilter<"Swipe"> | string
    property_id?: StringWithAggregatesFilter<"Swipe"> | string
    created_at?: DateTimeWithAggregatesFilter<"Swipe"> | Date | string
  }

  export type ConversationWhereInput = {
    AND?: ConversationWhereInput | ConversationWhereInput[]
    OR?: ConversationWhereInput[]
    NOT?: ConversationWhereInput | ConversationWhereInput[]
    id?: StringFilter<"Conversation"> | string
    swipe_id?: StringFilter<"Conversation"> | string
    property_id?: StringFilter<"Conversation"> | string
    tenant_id?: StringFilter<"Conversation"> | string
    owner_id?: StringFilter<"Conversation"> | string
    created_at?: DateTimeFilter<"Conversation"> | Date | string
    swipe?: XOR<SwipeScalarRelationFilter, SwipeWhereInput>
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    tenant?: XOR<UserScalarRelationFilter, UserWhereInput>
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    messages?: MessageListRelationFilter
  }

  export type ConversationOrderByWithRelationInput = {
    id?: SortOrder
    swipe_id?: SortOrder
    property_id?: SortOrder
    tenant_id?: SortOrder
    owner_id?: SortOrder
    created_at?: SortOrder
    swipe?: SwipeOrderByWithRelationInput
    property?: PropertyOrderByWithRelationInput
    tenant?: UserOrderByWithRelationInput
    owner?: UserOrderByWithRelationInput
    messages?: MessageOrderByRelationAggregateInput
  }

  export type ConversationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    swipe_id?: string
    AND?: ConversationWhereInput | ConversationWhereInput[]
    OR?: ConversationWhereInput[]
    NOT?: ConversationWhereInput | ConversationWhereInput[]
    property_id?: StringFilter<"Conversation"> | string
    tenant_id?: StringFilter<"Conversation"> | string
    owner_id?: StringFilter<"Conversation"> | string
    created_at?: DateTimeFilter<"Conversation"> | Date | string
    swipe?: XOR<SwipeScalarRelationFilter, SwipeWhereInput>
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    tenant?: XOR<UserScalarRelationFilter, UserWhereInput>
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    messages?: MessageListRelationFilter
  }, "id" | "swipe_id">

  export type ConversationOrderByWithAggregationInput = {
    id?: SortOrder
    swipe_id?: SortOrder
    property_id?: SortOrder
    tenant_id?: SortOrder
    owner_id?: SortOrder
    created_at?: SortOrder
    _count?: ConversationCountOrderByAggregateInput
    _max?: ConversationMaxOrderByAggregateInput
    _min?: ConversationMinOrderByAggregateInput
  }

  export type ConversationScalarWhereWithAggregatesInput = {
    AND?: ConversationScalarWhereWithAggregatesInput | ConversationScalarWhereWithAggregatesInput[]
    OR?: ConversationScalarWhereWithAggregatesInput[]
    NOT?: ConversationScalarWhereWithAggregatesInput | ConversationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Conversation"> | string
    swipe_id?: StringWithAggregatesFilter<"Conversation"> | string
    property_id?: StringWithAggregatesFilter<"Conversation"> | string
    tenant_id?: StringWithAggregatesFilter<"Conversation"> | string
    owner_id?: StringWithAggregatesFilter<"Conversation"> | string
    created_at?: DateTimeWithAggregatesFilter<"Conversation"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    read?: BoolFilter<"Message"> | boolean
    conversation_id?: StringFilter<"Message"> | string
    sender_id?: StringFilter<"Message"> | string
    created_at?: DateTimeFilter<"Message"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Message"> | Date | string | null
    conversation?: XOR<ConversationScalarRelationFilter, ConversationWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    read?: SortOrder
    conversation_id?: SortOrder
    sender_id?: SortOrder
    created_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    conversation?: ConversationOrderByWithRelationInput
    sender?: UserOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    content?: StringFilter<"Message"> | string
    read?: BoolFilter<"Message"> | boolean
    conversation_id?: StringFilter<"Message"> | string
    sender_id?: StringFilter<"Message"> | string
    created_at?: DateTimeFilter<"Message"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Message"> | Date | string | null
    conversation?: XOR<ConversationScalarRelationFilter, ConversationWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    read?: SortOrder
    conversation_id?: SortOrder
    sender_id?: SortOrder
    created_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
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
    read?: BoolWithAggregatesFilter<"Message"> | boolean
    conversation_id?: StringWithAggregatesFilter<"Message"> | string
    sender_id?: StringWithAggregatesFilter<"Message"> | string
    created_at?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"Message"> | Date | string | null
  }

  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    id?: StringFilter<"Address"> | string
    number?: StringFilter<"Address"> | string
    box?: StringNullableFilter<"Address"> | string | null
    street?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    postal_code?: StringFilter<"Address"> | string
    country?: StringFilter<"Address"> | string
    created_at?: DateTimeFilter<"Address"> | Date | string
    users?: UserListRelationFilter
    agencies?: AgencyListRelationFilter
    properties?: PropertyListRelationFilter
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    number?: SortOrder
    box?: SortOrderInput | SortOrder
    street?: SortOrder
    city?: SortOrder
    postal_code?: SortOrder
    country?: SortOrder
    created_at?: SortOrder
    users?: UserOrderByRelationAggregateInput
    agencies?: AgencyOrderByRelationAggregateInput
    properties?: PropertyOrderByRelationAggregateInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    number?: StringFilter<"Address"> | string
    box?: StringNullableFilter<"Address"> | string | null
    street?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    postal_code?: StringFilter<"Address"> | string
    country?: StringFilter<"Address"> | string
    created_at?: DateTimeFilter<"Address"> | Date | string
    users?: UserListRelationFilter
    agencies?: AgencyListRelationFilter
    properties?: PropertyListRelationFilter
  }, "id">

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    number?: SortOrder
    box?: SortOrderInput | SortOrder
    street?: SortOrder
    city?: SortOrder
    postal_code?: SortOrder
    country?: SortOrder
    created_at?: SortOrder
    _count?: AddressCountOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Address"> | string
    number?: StringWithAggregatesFilter<"Address"> | string
    box?: StringNullableWithAggregatesFilter<"Address"> | string | null
    street?: StringWithAggregatesFilter<"Address"> | string
    city?: StringWithAggregatesFilter<"Address"> | string
    postal_code?: StringWithAggregatesFilter<"Address"> | string
    country?: StringWithAggregatesFilter<"Address"> | string
    created_at?: DateTimeWithAggregatesFilter<"Address"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    firstname: string
    lastname: string
    phone?: string | null
    bio?: string | null
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    agency?: AgencyCreateNestedOneWithoutUserInput
    tenant_profile?: TenantProfileCreateNestedOneWithoutUserInput
    properties?: PropertyCreateNestedManyWithoutOwnerInput
    swipes?: SwipeCreateNestedManyWithoutUserInput
    conversations_as_tenant?: ConversationCreateNestedManyWithoutTenantInput
    conversations_as_owner?: ConversationCreateNestedManyWithoutOwnerInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    profile_photos?: ProfilePhotoCreateNestedManyWithoutUserInput
    documents?: DocumentCreateNestedManyWithoutUserInput
    address: AddressCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    firstname: string
    lastname: string
    phone?: string | null
    bio?: string | null
    role?: $Enums.Role
    is_active?: boolean
    address_id: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    agency?: AgencyUncheckedCreateNestedOneWithoutUserInput
    tenant_profile?: TenantProfileUncheckedCreateNestedOneWithoutUserInput
    properties?: PropertyUncheckedCreateNestedManyWithoutOwnerInput
    swipes?: SwipeUncheckedCreateNestedManyWithoutUserInput
    conversations_as_tenant?: ConversationUncheckedCreateNestedManyWithoutTenantInput
    conversations_as_owner?: ConversationUncheckedCreateNestedManyWithoutOwnerInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    profile_photos?: ProfilePhotoUncheckedCreateNestedManyWithoutUserInput
    documents?: DocumentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agency?: AgencyUpdateOneWithoutUserNestedInput
    tenant_profile?: TenantProfileUpdateOneWithoutUserNestedInput
    properties?: PropertyUpdateManyWithoutOwnerNestedInput
    swipes?: SwipeUpdateManyWithoutUserNestedInput
    conversations_as_tenant?: ConversationUpdateManyWithoutTenantNestedInput
    conversations_as_owner?: ConversationUpdateManyWithoutOwnerNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    profile_photos?: ProfilePhotoUpdateManyWithoutUserNestedInput
    documents?: DocumentUpdateManyWithoutUserNestedInput
    address?: AddressUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    address_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agency?: AgencyUncheckedUpdateOneWithoutUserNestedInput
    tenant_profile?: TenantProfileUncheckedUpdateOneWithoutUserNestedInput
    properties?: PropertyUncheckedUpdateManyWithoutOwnerNestedInput
    swipes?: SwipeUncheckedUpdateManyWithoutUserNestedInput
    conversations_as_tenant?: ConversationUncheckedUpdateManyWithoutTenantNestedInput
    conversations_as_owner?: ConversationUncheckedUpdateManyWithoutOwnerNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    profile_photos?: ProfilePhotoUncheckedUpdateManyWithoutUserNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    firstname: string
    lastname: string
    phone?: string | null
    bio?: string | null
    role?: $Enums.Role
    is_active?: boolean
    address_id: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    address_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AgencyCreateInput = {
    id?: string
    nom_agence: string
    numero_tva?: string | null
    numero_bce?: string | null
    site_web?: string | null
    created_at?: Date | string
    address: AddressCreateNestedOneWithoutAgenciesInput
    user: UserCreateNestedOneWithoutAgencyInput
  }

  export type AgencyUncheckedCreateInput = {
    id?: string
    nom_agence: string
    numero_tva?: string | null
    numero_bce?: string | null
    site_web?: string | null
    address_id: string
    user_id: string
    created_at?: Date | string
  }

  export type AgencyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom_agence?: StringFieldUpdateOperationsInput | string
    numero_tva?: NullableStringFieldUpdateOperationsInput | string | null
    numero_bce?: NullableStringFieldUpdateOperationsInput | string | null
    site_web?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateOneRequiredWithoutAgenciesNestedInput
    user?: UserUpdateOneRequiredWithoutAgencyNestedInput
  }

  export type AgencyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom_agence?: StringFieldUpdateOperationsInput | string
    numero_tva?: NullableStringFieldUpdateOperationsInput | string | null
    numero_bce?: NullableStringFieldUpdateOperationsInput | string | null
    site_web?: NullableStringFieldUpdateOperationsInput | string | null
    address_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgencyCreateManyInput = {
    id?: string
    nom_agence: string
    numero_tva?: string | null
    numero_bce?: string | null
    site_web?: string | null
    address_id: string
    user_id: string
    created_at?: Date | string
  }

  export type AgencyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom_agence?: StringFieldUpdateOperationsInput | string
    numero_tva?: NullableStringFieldUpdateOperationsInput | string | null
    numero_bce?: NullableStringFieldUpdateOperationsInput | string | null
    site_web?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgencyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom_agence?: StringFieldUpdateOperationsInput | string
    numero_tva?: NullableStringFieldUpdateOperationsInput | string | null
    numero_bce?: NullableStringFieldUpdateOperationsInput | string | null
    site_web?: NullableStringFieldUpdateOperationsInput | string | null
    address_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantProfileCreateInput = {
    id?: string
    household_size?: number | null
    budget_max?: number | null
    min_surface?: number | null
    max_surface?: number | null
    regions?: TenantProfileCreateregionsInput | string[]
    property_types?: TenantProfileCreateproperty_typesInput | $Enums.PropertyType[]
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutTenant_profileInput
  }

  export type TenantProfileUncheckedCreateInput = {
    id?: string
    household_size?: number | null
    budget_max?: number | null
    min_surface?: number | null
    max_surface?: number | null
    regions?: TenantProfileCreateregionsInput | string[]
    property_types?: TenantProfileCreateproperty_typesInput | $Enums.PropertyType[]
    user_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TenantProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    household_size?: NullableIntFieldUpdateOperationsInput | number | null
    budget_max?: NullableFloatFieldUpdateOperationsInput | number | null
    min_surface?: NullableIntFieldUpdateOperationsInput | number | null
    max_surface?: NullableIntFieldUpdateOperationsInput | number | null
    regions?: TenantProfileUpdateregionsInput | string[]
    property_types?: TenantProfileUpdateproperty_typesInput | $Enums.PropertyType[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTenant_profileNestedInput
  }

  export type TenantProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    household_size?: NullableIntFieldUpdateOperationsInput | number | null
    budget_max?: NullableFloatFieldUpdateOperationsInput | number | null
    min_surface?: NullableIntFieldUpdateOperationsInput | number | null
    max_surface?: NullableIntFieldUpdateOperationsInput | number | null
    regions?: TenantProfileUpdateregionsInput | string[]
    property_types?: TenantProfileUpdateproperty_typesInput | $Enums.PropertyType[]
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantProfileCreateManyInput = {
    id?: string
    household_size?: number | null
    budget_max?: number | null
    min_surface?: number | null
    max_surface?: number | null
    regions?: TenantProfileCreateregionsInput | string[]
    property_types?: TenantProfileCreateproperty_typesInput | $Enums.PropertyType[]
    user_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TenantProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    household_size?: NullableIntFieldUpdateOperationsInput | number | null
    budget_max?: NullableFloatFieldUpdateOperationsInput | number | null
    min_surface?: NullableIntFieldUpdateOperationsInput | number | null
    max_surface?: NullableIntFieldUpdateOperationsInput | number | null
    regions?: TenantProfileUpdateregionsInput | string[]
    property_types?: TenantProfileUpdateproperty_typesInput | $Enums.PropertyType[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    household_size?: NullableIntFieldUpdateOperationsInput | number | null
    budget_max?: NullableFloatFieldUpdateOperationsInput | number | null
    min_surface?: NullableIntFieldUpdateOperationsInput | number | null
    max_surface?: NullableIntFieldUpdateOperationsInput | number | null
    regions?: TenantProfileUpdateregionsInput | string[]
    property_types?: TenantProfileUpdateproperty_typesInput | $Enums.PropertyType[]
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyCreateInput = {
    id?: string
    title: string
    description?: string | null
    property_type: $Enums.PropertyType
    status?: $Enums.PropertyStatus
    price: number
    surface: number
    rooms: number
    parking?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    address: AddressCreateNestedOneWithoutPropertiesInput
    owner: UserCreateNestedOneWithoutPropertiesInput
    photos?: AnnouncementPhotoCreateNestedManyWithoutPropertyInput
    swipes?: SwipeCreateNestedManyWithoutPropertyInput
    conversations?: ConversationCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    property_type: $Enums.PropertyType
    status?: $Enums.PropertyStatus
    address_id: string
    price: number
    surface: number
    rooms: number
    parking?: boolean
    owner_id: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    photos?: AnnouncementPhotoUncheckedCreateNestedManyWithoutPropertyInput
    swipes?: SwipeUncheckedCreateNestedManyWithoutPropertyInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    property_type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    status?: EnumPropertyStatusFieldUpdateOperationsInput | $Enums.PropertyStatus
    price?: IntFieldUpdateOperationsInput | number
    surface?: IntFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    parking?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: AddressUpdateOneRequiredWithoutPropertiesNestedInput
    owner?: UserUpdateOneRequiredWithoutPropertiesNestedInput
    photos?: AnnouncementPhotoUpdateManyWithoutPropertyNestedInput
    swipes?: SwipeUpdateManyWithoutPropertyNestedInput
    conversations?: ConversationUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    property_type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    status?: EnumPropertyStatusFieldUpdateOperationsInput | $Enums.PropertyStatus
    address_id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    surface?: IntFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    parking?: BoolFieldUpdateOperationsInput | boolean
    owner_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photos?: AnnouncementPhotoUncheckedUpdateManyWithoutPropertyNestedInput
    swipes?: SwipeUncheckedUpdateManyWithoutPropertyNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    property_type: $Enums.PropertyType
    status?: $Enums.PropertyStatus
    address_id: string
    price: number
    surface: number
    rooms: number
    parking?: boolean
    owner_id: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type PropertyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    property_type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    status?: EnumPropertyStatusFieldUpdateOperationsInput | $Enums.PropertyStatus
    price?: IntFieldUpdateOperationsInput | number
    surface?: IntFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    parking?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PropertyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    property_type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    status?: EnumPropertyStatusFieldUpdateOperationsInput | $Enums.PropertyStatus
    address_id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    surface?: IntFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    parking?: BoolFieldUpdateOperationsInput | boolean
    owner_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AnnouncementPhotoCreateInput = {
    id?: string
    url: string
    order?: number
    uploaded_at?: Date | string
    property: PropertyCreateNestedOneWithoutPhotosInput
  }

  export type AnnouncementPhotoUncheckedCreateInput = {
    id?: string
    url: string
    order?: number
    property_id: string
    uploaded_at?: Date | string
  }

  export type AnnouncementPhotoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutPhotosNestedInput
  }

  export type AnnouncementPhotoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    property_id?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementPhotoCreateManyInput = {
    id?: string
    url: string
    order?: number
    property_id: string
    uploaded_at?: Date | string
  }

  export type AnnouncementPhotoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementPhotoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    property_id?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfilePhotoCreateInput = {
    id?: string
    url: string
    uploaded_at?: Date | string
    user: UserCreateNestedOneWithoutProfile_photosInput
  }

  export type ProfilePhotoUncheckedCreateInput = {
    id?: string
    url: string
    user_id: string
    uploaded_at?: Date | string
  }

  export type ProfilePhotoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfile_photosNestedInput
  }

  export type ProfilePhotoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfilePhotoCreateManyInput = {
    id?: string
    url: string
    user_id: string
    uploaded_at?: Date | string
  }

  export type ProfilePhotoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfilePhotoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateInput = {
    id?: string
    url: string
    label?: string | null
    uploaded_at?: Date | string
    user: UserCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateInput = {
    id?: string
    url: string
    label?: string | null
    user_id: string
    uploaded_at?: Date | string
  }

  export type DocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateManyInput = {
    id?: string
    url: string
    label?: string | null
    user_id: string
    uploaded_at?: Date | string
  }

  export type DocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SwipeCreateInput = {
    id?: string
    direction: boolean
    created_at?: Date | string
    user: UserCreateNestedOneWithoutSwipesInput
    property: PropertyCreateNestedOneWithoutSwipesInput
    conversation?: ConversationCreateNestedOneWithoutSwipeInput
  }

  export type SwipeUncheckedCreateInput = {
    id?: string
    direction: boolean
    user_id: string
    property_id: string
    created_at?: Date | string
    conversation?: ConversationUncheckedCreateNestedOneWithoutSwipeInput
  }

  export type SwipeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    direction?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSwipesNestedInput
    property?: PropertyUpdateOneRequiredWithoutSwipesNestedInput
    conversation?: ConversationUpdateOneWithoutSwipeNestedInput
  }

  export type SwipeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    direction?: BoolFieldUpdateOperationsInput | boolean
    user_id?: StringFieldUpdateOperationsInput | string
    property_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: ConversationUncheckedUpdateOneWithoutSwipeNestedInput
  }

  export type SwipeCreateManyInput = {
    id?: string
    direction: boolean
    user_id: string
    property_id: string
    created_at?: Date | string
  }

  export type SwipeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    direction?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SwipeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    direction?: BoolFieldUpdateOperationsInput | boolean
    user_id?: StringFieldUpdateOperationsInput | string
    property_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationCreateInput = {
    id?: string
    created_at?: Date | string
    swipe: SwipeCreateNestedOneWithoutConversationInput
    property: PropertyCreateNestedOneWithoutConversationsInput
    tenant: UserCreateNestedOneWithoutConversations_as_tenantInput
    owner: UserCreateNestedOneWithoutConversations_as_ownerInput
    messages?: MessageCreateNestedManyWithoutConversationInput
  }

  export type ConversationUncheckedCreateInput = {
    id?: string
    swipe_id: string
    property_id: string
    tenant_id: string
    owner_id: string
    created_at?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    swipe?: SwipeUpdateOneRequiredWithoutConversationNestedInput
    property?: PropertyUpdateOneRequiredWithoutConversationsNestedInput
    tenant?: UserUpdateOneRequiredWithoutConversations_as_tenantNestedInput
    owner?: UserUpdateOneRequiredWithoutConversations_as_ownerNestedInput
    messages?: MessageUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    swipe_id?: StringFieldUpdateOperationsInput | string
    property_id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationCreateManyInput = {
    id?: string
    swipe_id: string
    property_id: string
    tenant_id: string
    owner_id: string
    created_at?: Date | string
  }

  export type ConversationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    swipe_id?: StringFieldUpdateOperationsInput | string
    property_id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    id?: string
    content: string
    read?: boolean
    created_at?: Date | string
    deleted_at?: Date | string | null
    conversation: ConversationCreateNestedOneWithoutMessagesInput
    sender: UserCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    content: string
    read?: boolean
    conversation_id: string
    sender_id: string
    created_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    conversation?: ConversationUpdateOneRequiredWithoutMessagesNestedInput
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    conversation_id?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MessageCreateManyInput = {
    id?: string
    content: string
    read?: boolean
    conversation_id: string
    sender_id: string
    created_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    conversation_id?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AddressCreateInput = {
    id?: string
    number: string
    box?: string | null
    street: string
    city: string
    postal_code: string
    country: string
    created_at?: Date | string
    users?: UserCreateNestedManyWithoutAddressInput
    agencies?: AgencyCreateNestedManyWithoutAddressInput
    properties?: PropertyCreateNestedManyWithoutAddressInput
  }

  export type AddressUncheckedCreateInput = {
    id?: string
    number: string
    box?: string | null
    street: string
    city: string
    postal_code: string
    country: string
    created_at?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutAddressInput
    agencies?: AgencyUncheckedCreateNestedManyWithoutAddressInput
    properties?: PropertyUncheckedCreateNestedManyWithoutAddressInput
  }

  export type AddressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    box?: NullableStringFieldUpdateOperationsInput | string | null
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutAddressNestedInput
    agencies?: AgencyUpdateManyWithoutAddressNestedInput
    properties?: PropertyUpdateManyWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    box?: NullableStringFieldUpdateOperationsInput | string | null
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutAddressNestedInput
    agencies?: AgencyUncheckedUpdateManyWithoutAddressNestedInput
    properties?: PropertyUncheckedUpdateManyWithoutAddressNestedInput
  }

  export type AddressCreateManyInput = {
    id?: string
    number: string
    box?: string | null
    street: string
    city: string
    postal_code: string
    country: string
    created_at?: Date | string
  }

  export type AddressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    box?: NullableStringFieldUpdateOperationsInput | string | null
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    box?: NullableStringFieldUpdateOperationsInput | string | null
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type AgencyNullableScalarRelationFilter = {
    is?: AgencyWhereInput | null
    isNot?: AgencyWhereInput | null
  }

  export type TenantProfileNullableScalarRelationFilter = {
    is?: TenantProfileWhereInput | null
    isNot?: TenantProfileWhereInput | null
  }

  export type PropertyListRelationFilter = {
    every?: PropertyWhereInput
    some?: PropertyWhereInput
    none?: PropertyWhereInput
  }

  export type SwipeListRelationFilter = {
    every?: SwipeWhereInput
    some?: SwipeWhereInput
    none?: SwipeWhereInput
  }

  export type ConversationListRelationFilter = {
    every?: ConversationWhereInput
    some?: ConversationWhereInput
    none?: ConversationWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type ProfilePhotoListRelationFilter = {
    every?: ProfilePhotoWhereInput
    some?: ProfilePhotoWhereInput
    none?: ProfilePhotoWhereInput
  }

  export type DocumentListRelationFilter = {
    every?: DocumentWhereInput
    some?: DocumentWhereInput
    none?: DocumentWhereInput
  }

  export type AddressScalarRelationFilter = {
    is?: AddressWhereInput
    isNot?: AddressWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PropertyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SwipeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConversationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfilePhotoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    phone?: SortOrder
    bio?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    address_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    phone?: SortOrder
    bio?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    address_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    phone?: SortOrder
    bio?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    address_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AgencyCountOrderByAggregateInput = {
    id?: SortOrder
    nom_agence?: SortOrder
    numero_tva?: SortOrder
    numero_bce?: SortOrder
    site_web?: SortOrder
    address_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type AgencyMaxOrderByAggregateInput = {
    id?: SortOrder
    nom_agence?: SortOrder
    numero_tva?: SortOrder
    numero_bce?: SortOrder
    site_web?: SortOrder
    address_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type AgencyMinOrderByAggregateInput = {
    id?: SortOrder
    nom_agence?: SortOrder
    numero_tva?: SortOrder
    numero_bce?: SortOrder
    site_web?: SortOrder
    address_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumPropertyTypeNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel> | null
    has?: $Enums.PropertyType | EnumPropertyTypeFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    hasSome?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type TenantProfileCountOrderByAggregateInput = {
    id?: SortOrder
    household_size?: SortOrder
    budget_max?: SortOrder
    min_surface?: SortOrder
    max_surface?: SortOrder
    regions?: SortOrder
    property_types?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TenantProfileAvgOrderByAggregateInput = {
    household_size?: SortOrder
    budget_max?: SortOrder
    min_surface?: SortOrder
    max_surface?: SortOrder
  }

  export type TenantProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    household_size?: SortOrder
    budget_max?: SortOrder
    min_surface?: SortOrder
    max_surface?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TenantProfileMinOrderByAggregateInput = {
    id?: SortOrder
    household_size?: SortOrder
    budget_max?: SortOrder
    min_surface?: SortOrder
    max_surface?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TenantProfileSumOrderByAggregateInput = {
    household_size?: SortOrder
    budget_max?: SortOrder
    min_surface?: SortOrder
    max_surface?: SortOrder
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

  export type EnumPropertyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyType | EnumPropertyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyTypeFilter<$PrismaModel> | $Enums.PropertyType
  }

  export type EnumPropertyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyStatus | EnumPropertyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyStatus[] | ListEnumPropertyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyStatus[] | ListEnumPropertyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyStatusFilter<$PrismaModel> | $Enums.PropertyStatus
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

  export type AnnouncementPhotoListRelationFilter = {
    every?: AnnouncementPhotoWhereInput
    some?: AnnouncementPhotoWhereInput
    none?: AnnouncementPhotoWhereInput
  }

  export type AnnouncementPhotoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropertyCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    property_type?: SortOrder
    status?: SortOrder
    address_id?: SortOrder
    price?: SortOrder
    surface?: SortOrder
    rooms?: SortOrder
    parking?: SortOrder
    owner_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type PropertyAvgOrderByAggregateInput = {
    price?: SortOrder
    surface?: SortOrder
    rooms?: SortOrder
  }

  export type PropertyMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    property_type?: SortOrder
    status?: SortOrder
    address_id?: SortOrder
    price?: SortOrder
    surface?: SortOrder
    rooms?: SortOrder
    parking?: SortOrder
    owner_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type PropertyMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    property_type?: SortOrder
    status?: SortOrder
    address_id?: SortOrder
    price?: SortOrder
    surface?: SortOrder
    rooms?: SortOrder
    parking?: SortOrder
    owner_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type PropertySumOrderByAggregateInput = {
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

  export type EnumPropertyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyStatus | EnumPropertyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyStatus[] | ListEnumPropertyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyStatus[] | ListEnumPropertyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyStatusWithAggregatesFilter<$PrismaModel> | $Enums.PropertyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPropertyStatusFilter<$PrismaModel>
    _max?: NestedEnumPropertyStatusFilter<$PrismaModel>
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

  export type PropertyScalarRelationFilter = {
    is?: PropertyWhereInput
    isNot?: PropertyWhereInput
  }

  export type AnnouncementPhotoCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    order?: SortOrder
    property_id?: SortOrder
    uploaded_at?: SortOrder
  }

  export type AnnouncementPhotoAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type AnnouncementPhotoMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    order?: SortOrder
    property_id?: SortOrder
    uploaded_at?: SortOrder
  }

  export type AnnouncementPhotoMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    order?: SortOrder
    property_id?: SortOrder
    uploaded_at?: SortOrder
  }

  export type AnnouncementPhotoSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type ProfilePhotoCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    user_id?: SortOrder
    uploaded_at?: SortOrder
  }

  export type ProfilePhotoMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    user_id?: SortOrder
    uploaded_at?: SortOrder
  }

  export type ProfilePhotoMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    user_id?: SortOrder
    uploaded_at?: SortOrder
  }

  export type DocumentCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    label?: SortOrder
    user_id?: SortOrder
    uploaded_at?: SortOrder
  }

  export type DocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    label?: SortOrder
    user_id?: SortOrder
    uploaded_at?: SortOrder
  }

  export type DocumentMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    label?: SortOrder
    user_id?: SortOrder
    uploaded_at?: SortOrder
  }

  export type ConversationNullableScalarRelationFilter = {
    is?: ConversationWhereInput | null
    isNot?: ConversationWhereInput | null
  }

  export type SwipeUser_idProperty_idCompoundUniqueInput = {
    user_id: string
    property_id: string
  }

  export type SwipeCountOrderByAggregateInput = {
    id?: SortOrder
    direction?: SortOrder
    user_id?: SortOrder
    property_id?: SortOrder
    created_at?: SortOrder
  }

  export type SwipeMaxOrderByAggregateInput = {
    id?: SortOrder
    direction?: SortOrder
    user_id?: SortOrder
    property_id?: SortOrder
    created_at?: SortOrder
  }

  export type SwipeMinOrderByAggregateInput = {
    id?: SortOrder
    direction?: SortOrder
    user_id?: SortOrder
    property_id?: SortOrder
    created_at?: SortOrder
  }

  export type SwipeScalarRelationFilter = {
    is?: SwipeWhereInput
    isNot?: SwipeWhereInput
  }

  export type ConversationCountOrderByAggregateInput = {
    id?: SortOrder
    swipe_id?: SortOrder
    property_id?: SortOrder
    tenant_id?: SortOrder
    owner_id?: SortOrder
    created_at?: SortOrder
  }

  export type ConversationMaxOrderByAggregateInput = {
    id?: SortOrder
    swipe_id?: SortOrder
    property_id?: SortOrder
    tenant_id?: SortOrder
    owner_id?: SortOrder
    created_at?: SortOrder
  }

  export type ConversationMinOrderByAggregateInput = {
    id?: SortOrder
    swipe_id?: SortOrder
    property_id?: SortOrder
    tenant_id?: SortOrder
    owner_id?: SortOrder
    created_at?: SortOrder
  }

  export type ConversationScalarRelationFilter = {
    is?: ConversationWhereInput
    isNot?: ConversationWhereInput
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    read?: SortOrder
    conversation_id?: SortOrder
    sender_id?: SortOrder
    created_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    read?: SortOrder
    conversation_id?: SortOrder
    sender_id?: SortOrder
    created_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    read?: SortOrder
    conversation_id?: SortOrder
    sender_id?: SortOrder
    created_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type AgencyListRelationFilter = {
    every?: AgencyWhereInput
    some?: AgencyWhereInput
    none?: AgencyWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AgencyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    box?: SortOrder
    street?: SortOrder
    city?: SortOrder
    postal_code?: SortOrder
    country?: SortOrder
    created_at?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    box?: SortOrder
    street?: SortOrder
    city?: SortOrder
    postal_code?: SortOrder
    country?: SortOrder
    created_at?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    box?: SortOrder
    street?: SortOrder
    city?: SortOrder
    postal_code?: SortOrder
    country?: SortOrder
    created_at?: SortOrder
  }

  export type AgencyCreateNestedOneWithoutUserInput = {
    create?: XOR<AgencyCreateWithoutUserInput, AgencyUncheckedCreateWithoutUserInput>
    connectOrCreate?: AgencyCreateOrConnectWithoutUserInput
    connect?: AgencyWhereUniqueInput
  }

  export type TenantProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<TenantProfileCreateWithoutUserInput, TenantProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: TenantProfileCreateOrConnectWithoutUserInput
    connect?: TenantProfileWhereUniqueInput
  }

  export type PropertyCreateNestedManyWithoutOwnerInput = {
    create?: XOR<PropertyCreateWithoutOwnerInput, PropertyUncheckedCreateWithoutOwnerInput> | PropertyCreateWithoutOwnerInput[] | PropertyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutOwnerInput | PropertyCreateOrConnectWithoutOwnerInput[]
    createMany?: PropertyCreateManyOwnerInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type SwipeCreateNestedManyWithoutUserInput = {
    create?: XOR<SwipeCreateWithoutUserInput, SwipeUncheckedCreateWithoutUserInput> | SwipeCreateWithoutUserInput[] | SwipeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SwipeCreateOrConnectWithoutUserInput | SwipeCreateOrConnectWithoutUserInput[]
    createMany?: SwipeCreateManyUserInputEnvelope
    connect?: SwipeWhereUniqueInput | SwipeWhereUniqueInput[]
  }

  export type ConversationCreateNestedManyWithoutTenantInput = {
    create?: XOR<ConversationCreateWithoutTenantInput, ConversationUncheckedCreateWithoutTenantInput> | ConversationCreateWithoutTenantInput[] | ConversationUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutTenantInput | ConversationCreateOrConnectWithoutTenantInput[]
    createMany?: ConversationCreateManyTenantInputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type ConversationCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ConversationCreateWithoutOwnerInput, ConversationUncheckedCreateWithoutOwnerInput> | ConversationCreateWithoutOwnerInput[] | ConversationUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutOwnerInput | ConversationCreateOrConnectWithoutOwnerInput[]
    createMany?: ConversationCreateManyOwnerInputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ProfilePhotoCreateNestedManyWithoutUserInput = {
    create?: XOR<ProfilePhotoCreateWithoutUserInput, ProfilePhotoUncheckedCreateWithoutUserInput> | ProfilePhotoCreateWithoutUserInput[] | ProfilePhotoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProfilePhotoCreateOrConnectWithoutUserInput | ProfilePhotoCreateOrConnectWithoutUserInput[]
    createMany?: ProfilePhotoCreateManyUserInputEnvelope
    connect?: ProfilePhotoWhereUniqueInput | ProfilePhotoWhereUniqueInput[]
  }

  export type DocumentCreateNestedManyWithoutUserInput = {
    create?: XOR<DocumentCreateWithoutUserInput, DocumentUncheckedCreateWithoutUserInput> | DocumentCreateWithoutUserInput[] | DocumentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutUserInput | DocumentCreateOrConnectWithoutUserInput[]
    createMany?: DocumentCreateManyUserInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type AddressCreateNestedOneWithoutUsersInput = {
    create?: XOR<AddressCreateWithoutUsersInput, AddressUncheckedCreateWithoutUsersInput>
    connectOrCreate?: AddressCreateOrConnectWithoutUsersInput
    connect?: AddressWhereUniqueInput
  }

  export type AgencyUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<AgencyCreateWithoutUserInput, AgencyUncheckedCreateWithoutUserInput>
    connectOrCreate?: AgencyCreateOrConnectWithoutUserInput
    connect?: AgencyWhereUniqueInput
  }

  export type TenantProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<TenantProfileCreateWithoutUserInput, TenantProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: TenantProfileCreateOrConnectWithoutUserInput
    connect?: TenantProfileWhereUniqueInput
  }

  export type PropertyUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<PropertyCreateWithoutOwnerInput, PropertyUncheckedCreateWithoutOwnerInput> | PropertyCreateWithoutOwnerInput[] | PropertyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutOwnerInput | PropertyCreateOrConnectWithoutOwnerInput[]
    createMany?: PropertyCreateManyOwnerInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type SwipeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SwipeCreateWithoutUserInput, SwipeUncheckedCreateWithoutUserInput> | SwipeCreateWithoutUserInput[] | SwipeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SwipeCreateOrConnectWithoutUserInput | SwipeCreateOrConnectWithoutUserInput[]
    createMany?: SwipeCreateManyUserInputEnvelope
    connect?: SwipeWhereUniqueInput | SwipeWhereUniqueInput[]
  }

  export type ConversationUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<ConversationCreateWithoutTenantInput, ConversationUncheckedCreateWithoutTenantInput> | ConversationCreateWithoutTenantInput[] | ConversationUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutTenantInput | ConversationCreateOrConnectWithoutTenantInput[]
    createMany?: ConversationCreateManyTenantInputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type ConversationUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ConversationCreateWithoutOwnerInput, ConversationUncheckedCreateWithoutOwnerInput> | ConversationCreateWithoutOwnerInput[] | ConversationUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutOwnerInput | ConversationCreateOrConnectWithoutOwnerInput[]
    createMany?: ConversationCreateManyOwnerInputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ProfilePhotoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProfilePhotoCreateWithoutUserInput, ProfilePhotoUncheckedCreateWithoutUserInput> | ProfilePhotoCreateWithoutUserInput[] | ProfilePhotoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProfilePhotoCreateOrConnectWithoutUserInput | ProfilePhotoCreateOrConnectWithoutUserInput[]
    createMany?: ProfilePhotoCreateManyUserInputEnvelope
    connect?: ProfilePhotoWhereUniqueInput | ProfilePhotoWhereUniqueInput[]
  }

  export type DocumentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DocumentCreateWithoutUserInput, DocumentUncheckedCreateWithoutUserInput> | DocumentCreateWithoutUserInput[] | DocumentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutUserInput | DocumentCreateOrConnectWithoutUserInput[]
    createMany?: DocumentCreateManyUserInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AgencyUpdateOneWithoutUserNestedInput = {
    create?: XOR<AgencyCreateWithoutUserInput, AgencyUncheckedCreateWithoutUserInput>
    connectOrCreate?: AgencyCreateOrConnectWithoutUserInput
    upsert?: AgencyUpsertWithoutUserInput
    disconnect?: AgencyWhereInput | boolean
    delete?: AgencyWhereInput | boolean
    connect?: AgencyWhereUniqueInput
    update?: XOR<XOR<AgencyUpdateToOneWithWhereWithoutUserInput, AgencyUpdateWithoutUserInput>, AgencyUncheckedUpdateWithoutUserInput>
  }

  export type TenantProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<TenantProfileCreateWithoutUserInput, TenantProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: TenantProfileCreateOrConnectWithoutUserInput
    upsert?: TenantProfileUpsertWithoutUserInput
    disconnect?: TenantProfileWhereInput | boolean
    delete?: TenantProfileWhereInput | boolean
    connect?: TenantProfileWhereUniqueInput
    update?: XOR<XOR<TenantProfileUpdateToOneWithWhereWithoutUserInput, TenantProfileUpdateWithoutUserInput>, TenantProfileUncheckedUpdateWithoutUserInput>
  }

  export type PropertyUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<PropertyCreateWithoutOwnerInput, PropertyUncheckedCreateWithoutOwnerInput> | PropertyCreateWithoutOwnerInput[] | PropertyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutOwnerInput | PropertyCreateOrConnectWithoutOwnerInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutOwnerInput | PropertyUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: PropertyCreateManyOwnerInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutOwnerInput | PropertyUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutOwnerInput | PropertyUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
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

  export type ConversationUpdateManyWithoutTenantNestedInput = {
    create?: XOR<ConversationCreateWithoutTenantInput, ConversationUncheckedCreateWithoutTenantInput> | ConversationCreateWithoutTenantInput[] | ConversationUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutTenantInput | ConversationCreateOrConnectWithoutTenantInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutTenantInput | ConversationUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: ConversationCreateManyTenantInputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutTenantInput | ConversationUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutTenantInput | ConversationUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type ConversationUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ConversationCreateWithoutOwnerInput, ConversationUncheckedCreateWithoutOwnerInput> | ConversationCreateWithoutOwnerInput[] | ConversationUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutOwnerInput | ConversationCreateOrConnectWithoutOwnerInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutOwnerInput | ConversationUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ConversationCreateManyOwnerInputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutOwnerInput | ConversationUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutOwnerInput | ConversationUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
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

  export type ProfilePhotoUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProfilePhotoCreateWithoutUserInput, ProfilePhotoUncheckedCreateWithoutUserInput> | ProfilePhotoCreateWithoutUserInput[] | ProfilePhotoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProfilePhotoCreateOrConnectWithoutUserInput | ProfilePhotoCreateOrConnectWithoutUserInput[]
    upsert?: ProfilePhotoUpsertWithWhereUniqueWithoutUserInput | ProfilePhotoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProfilePhotoCreateManyUserInputEnvelope
    set?: ProfilePhotoWhereUniqueInput | ProfilePhotoWhereUniqueInput[]
    disconnect?: ProfilePhotoWhereUniqueInput | ProfilePhotoWhereUniqueInput[]
    delete?: ProfilePhotoWhereUniqueInput | ProfilePhotoWhereUniqueInput[]
    connect?: ProfilePhotoWhereUniqueInput | ProfilePhotoWhereUniqueInput[]
    update?: ProfilePhotoUpdateWithWhereUniqueWithoutUserInput | ProfilePhotoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProfilePhotoUpdateManyWithWhereWithoutUserInput | ProfilePhotoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProfilePhotoScalarWhereInput | ProfilePhotoScalarWhereInput[]
  }

  export type DocumentUpdateManyWithoutUserNestedInput = {
    create?: XOR<DocumentCreateWithoutUserInput, DocumentUncheckedCreateWithoutUserInput> | DocumentCreateWithoutUserInput[] | DocumentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutUserInput | DocumentCreateOrConnectWithoutUserInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutUserInput | DocumentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DocumentCreateManyUserInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutUserInput | DocumentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutUserInput | DocumentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type AddressUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<AddressCreateWithoutUsersInput, AddressUncheckedCreateWithoutUsersInput>
    connectOrCreate?: AddressCreateOrConnectWithoutUsersInput
    upsert?: AddressUpsertWithoutUsersInput
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutUsersInput, AddressUpdateWithoutUsersInput>, AddressUncheckedUpdateWithoutUsersInput>
  }

  export type AgencyUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<AgencyCreateWithoutUserInput, AgencyUncheckedCreateWithoutUserInput>
    connectOrCreate?: AgencyCreateOrConnectWithoutUserInput
    upsert?: AgencyUpsertWithoutUserInput
    disconnect?: AgencyWhereInput | boolean
    delete?: AgencyWhereInput | boolean
    connect?: AgencyWhereUniqueInput
    update?: XOR<XOR<AgencyUpdateToOneWithWhereWithoutUserInput, AgencyUpdateWithoutUserInput>, AgencyUncheckedUpdateWithoutUserInput>
  }

  export type TenantProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<TenantProfileCreateWithoutUserInput, TenantProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: TenantProfileCreateOrConnectWithoutUserInput
    upsert?: TenantProfileUpsertWithoutUserInput
    disconnect?: TenantProfileWhereInput | boolean
    delete?: TenantProfileWhereInput | boolean
    connect?: TenantProfileWhereUniqueInput
    update?: XOR<XOR<TenantProfileUpdateToOneWithWhereWithoutUserInput, TenantProfileUpdateWithoutUserInput>, TenantProfileUncheckedUpdateWithoutUserInput>
  }

  export type PropertyUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<PropertyCreateWithoutOwnerInput, PropertyUncheckedCreateWithoutOwnerInput> | PropertyCreateWithoutOwnerInput[] | PropertyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutOwnerInput | PropertyCreateOrConnectWithoutOwnerInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutOwnerInput | PropertyUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: PropertyCreateManyOwnerInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutOwnerInput | PropertyUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutOwnerInput | PropertyUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
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

  export type ConversationUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<ConversationCreateWithoutTenantInput, ConversationUncheckedCreateWithoutTenantInput> | ConversationCreateWithoutTenantInput[] | ConversationUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutTenantInput | ConversationCreateOrConnectWithoutTenantInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutTenantInput | ConversationUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: ConversationCreateManyTenantInputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutTenantInput | ConversationUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutTenantInput | ConversationUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type ConversationUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ConversationCreateWithoutOwnerInput, ConversationUncheckedCreateWithoutOwnerInput> | ConversationCreateWithoutOwnerInput[] | ConversationUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutOwnerInput | ConversationCreateOrConnectWithoutOwnerInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutOwnerInput | ConversationUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ConversationCreateManyOwnerInputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutOwnerInput | ConversationUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutOwnerInput | ConversationUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
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

  export type ProfilePhotoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProfilePhotoCreateWithoutUserInput, ProfilePhotoUncheckedCreateWithoutUserInput> | ProfilePhotoCreateWithoutUserInput[] | ProfilePhotoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProfilePhotoCreateOrConnectWithoutUserInput | ProfilePhotoCreateOrConnectWithoutUserInput[]
    upsert?: ProfilePhotoUpsertWithWhereUniqueWithoutUserInput | ProfilePhotoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProfilePhotoCreateManyUserInputEnvelope
    set?: ProfilePhotoWhereUniqueInput | ProfilePhotoWhereUniqueInput[]
    disconnect?: ProfilePhotoWhereUniqueInput | ProfilePhotoWhereUniqueInput[]
    delete?: ProfilePhotoWhereUniqueInput | ProfilePhotoWhereUniqueInput[]
    connect?: ProfilePhotoWhereUniqueInput | ProfilePhotoWhereUniqueInput[]
    update?: ProfilePhotoUpdateWithWhereUniqueWithoutUserInput | ProfilePhotoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProfilePhotoUpdateManyWithWhereWithoutUserInput | ProfilePhotoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProfilePhotoScalarWhereInput | ProfilePhotoScalarWhereInput[]
  }

  export type DocumentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DocumentCreateWithoutUserInput, DocumentUncheckedCreateWithoutUserInput> | DocumentCreateWithoutUserInput[] | DocumentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutUserInput | DocumentCreateOrConnectWithoutUserInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutUserInput | DocumentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DocumentCreateManyUserInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutUserInput | DocumentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutUserInput | DocumentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type AddressCreateNestedOneWithoutAgenciesInput = {
    create?: XOR<AddressCreateWithoutAgenciesInput, AddressUncheckedCreateWithoutAgenciesInput>
    connectOrCreate?: AddressCreateOrConnectWithoutAgenciesInput
    connect?: AddressWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAgencyInput = {
    create?: XOR<UserCreateWithoutAgencyInput, UserUncheckedCreateWithoutAgencyInput>
    connectOrCreate?: UserCreateOrConnectWithoutAgencyInput
    connect?: UserWhereUniqueInput
  }

  export type AddressUpdateOneRequiredWithoutAgenciesNestedInput = {
    create?: XOR<AddressCreateWithoutAgenciesInput, AddressUncheckedCreateWithoutAgenciesInput>
    connectOrCreate?: AddressCreateOrConnectWithoutAgenciesInput
    upsert?: AddressUpsertWithoutAgenciesInput
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutAgenciesInput, AddressUpdateWithoutAgenciesInput>, AddressUncheckedUpdateWithoutAgenciesInput>
  }

  export type UserUpdateOneRequiredWithoutAgencyNestedInput = {
    create?: XOR<UserCreateWithoutAgencyInput, UserUncheckedCreateWithoutAgencyInput>
    connectOrCreate?: UserCreateOrConnectWithoutAgencyInput
    upsert?: UserUpsertWithoutAgencyInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAgencyInput, UserUpdateWithoutAgencyInput>, UserUncheckedUpdateWithoutAgencyInput>
  }

  export type TenantProfileCreateregionsInput = {
    set: string[]
  }

  export type TenantProfileCreateproperty_typesInput = {
    set: $Enums.PropertyType[]
  }

  export type UserCreateNestedOneWithoutTenant_profileInput = {
    create?: XOR<UserCreateWithoutTenant_profileInput, UserUncheckedCreateWithoutTenant_profileInput>
    connectOrCreate?: UserCreateOrConnectWithoutTenant_profileInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TenantProfileUpdateregionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TenantProfileUpdateproperty_typesInput = {
    set?: $Enums.PropertyType[]
    push?: $Enums.PropertyType | $Enums.PropertyType[]
  }

  export type UserUpdateOneRequiredWithoutTenant_profileNestedInput = {
    create?: XOR<UserCreateWithoutTenant_profileInput, UserUncheckedCreateWithoutTenant_profileInput>
    connectOrCreate?: UserCreateOrConnectWithoutTenant_profileInput
    upsert?: UserUpsertWithoutTenant_profileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTenant_profileInput, UserUpdateWithoutTenant_profileInput>, UserUncheckedUpdateWithoutTenant_profileInput>
  }

  export type AddressCreateNestedOneWithoutPropertiesInput = {
    create?: XOR<AddressCreateWithoutPropertiesInput, AddressUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: AddressCreateOrConnectWithoutPropertiesInput
    connect?: AddressWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPropertiesInput = {
    create?: XOR<UserCreateWithoutPropertiesInput, UserUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPropertiesInput
    connect?: UserWhereUniqueInput
  }

  export type AnnouncementPhotoCreateNestedManyWithoutPropertyInput = {
    create?: XOR<AnnouncementPhotoCreateWithoutPropertyInput, AnnouncementPhotoUncheckedCreateWithoutPropertyInput> | AnnouncementPhotoCreateWithoutPropertyInput[] | AnnouncementPhotoUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: AnnouncementPhotoCreateOrConnectWithoutPropertyInput | AnnouncementPhotoCreateOrConnectWithoutPropertyInput[]
    createMany?: AnnouncementPhotoCreateManyPropertyInputEnvelope
    connect?: AnnouncementPhotoWhereUniqueInput | AnnouncementPhotoWhereUniqueInput[]
  }

  export type SwipeCreateNestedManyWithoutPropertyInput = {
    create?: XOR<SwipeCreateWithoutPropertyInput, SwipeUncheckedCreateWithoutPropertyInput> | SwipeCreateWithoutPropertyInput[] | SwipeUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: SwipeCreateOrConnectWithoutPropertyInput | SwipeCreateOrConnectWithoutPropertyInput[]
    createMany?: SwipeCreateManyPropertyInputEnvelope
    connect?: SwipeWhereUniqueInput | SwipeWhereUniqueInput[]
  }

  export type ConversationCreateNestedManyWithoutPropertyInput = {
    create?: XOR<ConversationCreateWithoutPropertyInput, ConversationUncheckedCreateWithoutPropertyInput> | ConversationCreateWithoutPropertyInput[] | ConversationUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutPropertyInput | ConversationCreateOrConnectWithoutPropertyInput[]
    createMany?: ConversationCreateManyPropertyInputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type AnnouncementPhotoUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<AnnouncementPhotoCreateWithoutPropertyInput, AnnouncementPhotoUncheckedCreateWithoutPropertyInput> | AnnouncementPhotoCreateWithoutPropertyInput[] | AnnouncementPhotoUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: AnnouncementPhotoCreateOrConnectWithoutPropertyInput | AnnouncementPhotoCreateOrConnectWithoutPropertyInput[]
    createMany?: AnnouncementPhotoCreateManyPropertyInputEnvelope
    connect?: AnnouncementPhotoWhereUniqueInput | AnnouncementPhotoWhereUniqueInput[]
  }

  export type SwipeUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<SwipeCreateWithoutPropertyInput, SwipeUncheckedCreateWithoutPropertyInput> | SwipeCreateWithoutPropertyInput[] | SwipeUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: SwipeCreateOrConnectWithoutPropertyInput | SwipeCreateOrConnectWithoutPropertyInput[]
    createMany?: SwipeCreateManyPropertyInputEnvelope
    connect?: SwipeWhereUniqueInput | SwipeWhereUniqueInput[]
  }

  export type ConversationUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<ConversationCreateWithoutPropertyInput, ConversationUncheckedCreateWithoutPropertyInput> | ConversationCreateWithoutPropertyInput[] | ConversationUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutPropertyInput | ConversationCreateOrConnectWithoutPropertyInput[]
    createMany?: ConversationCreateManyPropertyInputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type EnumPropertyTypeFieldUpdateOperationsInput = {
    set?: $Enums.PropertyType
  }

  export type EnumPropertyStatusFieldUpdateOperationsInput = {
    set?: $Enums.PropertyStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AddressUpdateOneRequiredWithoutPropertiesNestedInput = {
    create?: XOR<AddressCreateWithoutPropertiesInput, AddressUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: AddressCreateOrConnectWithoutPropertiesInput
    upsert?: AddressUpsertWithoutPropertiesInput
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutPropertiesInput, AddressUpdateWithoutPropertiesInput>, AddressUncheckedUpdateWithoutPropertiesInput>
  }

  export type UserUpdateOneRequiredWithoutPropertiesNestedInput = {
    create?: XOR<UserCreateWithoutPropertiesInput, UserUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPropertiesInput
    upsert?: UserUpsertWithoutPropertiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPropertiesInput, UserUpdateWithoutPropertiesInput>, UserUncheckedUpdateWithoutPropertiesInput>
  }

  export type AnnouncementPhotoUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<AnnouncementPhotoCreateWithoutPropertyInput, AnnouncementPhotoUncheckedCreateWithoutPropertyInput> | AnnouncementPhotoCreateWithoutPropertyInput[] | AnnouncementPhotoUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: AnnouncementPhotoCreateOrConnectWithoutPropertyInput | AnnouncementPhotoCreateOrConnectWithoutPropertyInput[]
    upsert?: AnnouncementPhotoUpsertWithWhereUniqueWithoutPropertyInput | AnnouncementPhotoUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: AnnouncementPhotoCreateManyPropertyInputEnvelope
    set?: AnnouncementPhotoWhereUniqueInput | AnnouncementPhotoWhereUniqueInput[]
    disconnect?: AnnouncementPhotoWhereUniqueInput | AnnouncementPhotoWhereUniqueInput[]
    delete?: AnnouncementPhotoWhereUniqueInput | AnnouncementPhotoWhereUniqueInput[]
    connect?: AnnouncementPhotoWhereUniqueInput | AnnouncementPhotoWhereUniqueInput[]
    update?: AnnouncementPhotoUpdateWithWhereUniqueWithoutPropertyInput | AnnouncementPhotoUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: AnnouncementPhotoUpdateManyWithWhereWithoutPropertyInput | AnnouncementPhotoUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: AnnouncementPhotoScalarWhereInput | AnnouncementPhotoScalarWhereInput[]
  }

  export type SwipeUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<SwipeCreateWithoutPropertyInput, SwipeUncheckedCreateWithoutPropertyInput> | SwipeCreateWithoutPropertyInput[] | SwipeUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: SwipeCreateOrConnectWithoutPropertyInput | SwipeCreateOrConnectWithoutPropertyInput[]
    upsert?: SwipeUpsertWithWhereUniqueWithoutPropertyInput | SwipeUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: SwipeCreateManyPropertyInputEnvelope
    set?: SwipeWhereUniqueInput | SwipeWhereUniqueInput[]
    disconnect?: SwipeWhereUniqueInput | SwipeWhereUniqueInput[]
    delete?: SwipeWhereUniqueInput | SwipeWhereUniqueInput[]
    connect?: SwipeWhereUniqueInput | SwipeWhereUniqueInput[]
    update?: SwipeUpdateWithWhereUniqueWithoutPropertyInput | SwipeUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: SwipeUpdateManyWithWhereWithoutPropertyInput | SwipeUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: SwipeScalarWhereInput | SwipeScalarWhereInput[]
  }

  export type ConversationUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<ConversationCreateWithoutPropertyInput, ConversationUncheckedCreateWithoutPropertyInput> | ConversationCreateWithoutPropertyInput[] | ConversationUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutPropertyInput | ConversationCreateOrConnectWithoutPropertyInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutPropertyInput | ConversationUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: ConversationCreateManyPropertyInputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutPropertyInput | ConversationUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutPropertyInput | ConversationUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type AnnouncementPhotoUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<AnnouncementPhotoCreateWithoutPropertyInput, AnnouncementPhotoUncheckedCreateWithoutPropertyInput> | AnnouncementPhotoCreateWithoutPropertyInput[] | AnnouncementPhotoUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: AnnouncementPhotoCreateOrConnectWithoutPropertyInput | AnnouncementPhotoCreateOrConnectWithoutPropertyInput[]
    upsert?: AnnouncementPhotoUpsertWithWhereUniqueWithoutPropertyInput | AnnouncementPhotoUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: AnnouncementPhotoCreateManyPropertyInputEnvelope
    set?: AnnouncementPhotoWhereUniqueInput | AnnouncementPhotoWhereUniqueInput[]
    disconnect?: AnnouncementPhotoWhereUniqueInput | AnnouncementPhotoWhereUniqueInput[]
    delete?: AnnouncementPhotoWhereUniqueInput | AnnouncementPhotoWhereUniqueInput[]
    connect?: AnnouncementPhotoWhereUniqueInput | AnnouncementPhotoWhereUniqueInput[]
    update?: AnnouncementPhotoUpdateWithWhereUniqueWithoutPropertyInput | AnnouncementPhotoUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: AnnouncementPhotoUpdateManyWithWhereWithoutPropertyInput | AnnouncementPhotoUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: AnnouncementPhotoScalarWhereInput | AnnouncementPhotoScalarWhereInput[]
  }

  export type SwipeUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<SwipeCreateWithoutPropertyInput, SwipeUncheckedCreateWithoutPropertyInput> | SwipeCreateWithoutPropertyInput[] | SwipeUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: SwipeCreateOrConnectWithoutPropertyInput | SwipeCreateOrConnectWithoutPropertyInput[]
    upsert?: SwipeUpsertWithWhereUniqueWithoutPropertyInput | SwipeUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: SwipeCreateManyPropertyInputEnvelope
    set?: SwipeWhereUniqueInput | SwipeWhereUniqueInput[]
    disconnect?: SwipeWhereUniqueInput | SwipeWhereUniqueInput[]
    delete?: SwipeWhereUniqueInput | SwipeWhereUniqueInput[]
    connect?: SwipeWhereUniqueInput | SwipeWhereUniqueInput[]
    update?: SwipeUpdateWithWhereUniqueWithoutPropertyInput | SwipeUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: SwipeUpdateManyWithWhereWithoutPropertyInput | SwipeUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: SwipeScalarWhereInput | SwipeScalarWhereInput[]
  }

  export type ConversationUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<ConversationCreateWithoutPropertyInput, ConversationUncheckedCreateWithoutPropertyInput> | ConversationCreateWithoutPropertyInput[] | ConversationUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutPropertyInput | ConversationCreateOrConnectWithoutPropertyInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutPropertyInput | ConversationUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: ConversationCreateManyPropertyInputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutPropertyInput | ConversationUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutPropertyInput | ConversationUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type PropertyCreateNestedOneWithoutPhotosInput = {
    create?: XOR<PropertyCreateWithoutPhotosInput, PropertyUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutPhotosInput
    connect?: PropertyWhereUniqueInput
  }

  export type PropertyUpdateOneRequiredWithoutPhotosNestedInput = {
    create?: XOR<PropertyCreateWithoutPhotosInput, PropertyUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutPhotosInput
    upsert?: PropertyUpsertWithoutPhotosInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutPhotosInput, PropertyUpdateWithoutPhotosInput>, PropertyUncheckedUpdateWithoutPhotosInput>
  }

  export type UserCreateNestedOneWithoutProfile_photosInput = {
    create?: XOR<UserCreateWithoutProfile_photosInput, UserUncheckedCreateWithoutProfile_photosInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfile_photosInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProfile_photosNestedInput = {
    create?: XOR<UserCreateWithoutProfile_photosInput, UserUncheckedCreateWithoutProfile_photosInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfile_photosInput
    upsert?: UserUpsertWithoutProfile_photosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfile_photosInput, UserUpdateWithoutProfile_photosInput>, UserUncheckedUpdateWithoutProfile_photosInput>
  }

  export type UserCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<UserCreateWithoutDocumentsInput, UserUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDocumentsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<UserCreateWithoutDocumentsInput, UserUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDocumentsInput
    upsert?: UserUpsertWithoutDocumentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDocumentsInput, UserUpdateWithoutDocumentsInput>, UserUncheckedUpdateWithoutDocumentsInput>
  }

  export type UserCreateNestedOneWithoutSwipesInput = {
    create?: XOR<UserCreateWithoutSwipesInput, UserUncheckedCreateWithoutSwipesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSwipesInput
    connect?: UserWhereUniqueInput
  }

  export type PropertyCreateNestedOneWithoutSwipesInput = {
    create?: XOR<PropertyCreateWithoutSwipesInput, PropertyUncheckedCreateWithoutSwipesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutSwipesInput
    connect?: PropertyWhereUniqueInput
  }

  export type ConversationCreateNestedOneWithoutSwipeInput = {
    create?: XOR<ConversationCreateWithoutSwipeInput, ConversationUncheckedCreateWithoutSwipeInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutSwipeInput
    connect?: ConversationWhereUniqueInput
  }

  export type ConversationUncheckedCreateNestedOneWithoutSwipeInput = {
    create?: XOR<ConversationCreateWithoutSwipeInput, ConversationUncheckedCreateWithoutSwipeInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutSwipeInput
    connect?: ConversationWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSwipesNestedInput = {
    create?: XOR<UserCreateWithoutSwipesInput, UserUncheckedCreateWithoutSwipesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSwipesInput
    upsert?: UserUpsertWithoutSwipesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSwipesInput, UserUpdateWithoutSwipesInput>, UserUncheckedUpdateWithoutSwipesInput>
  }

  export type PropertyUpdateOneRequiredWithoutSwipesNestedInput = {
    create?: XOR<PropertyCreateWithoutSwipesInput, PropertyUncheckedCreateWithoutSwipesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutSwipesInput
    upsert?: PropertyUpsertWithoutSwipesInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutSwipesInput, PropertyUpdateWithoutSwipesInput>, PropertyUncheckedUpdateWithoutSwipesInput>
  }

  export type ConversationUpdateOneWithoutSwipeNestedInput = {
    create?: XOR<ConversationCreateWithoutSwipeInput, ConversationUncheckedCreateWithoutSwipeInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutSwipeInput
    upsert?: ConversationUpsertWithoutSwipeInput
    disconnect?: ConversationWhereInput | boolean
    delete?: ConversationWhereInput | boolean
    connect?: ConversationWhereUniqueInput
    update?: XOR<XOR<ConversationUpdateToOneWithWhereWithoutSwipeInput, ConversationUpdateWithoutSwipeInput>, ConversationUncheckedUpdateWithoutSwipeInput>
  }

  export type ConversationUncheckedUpdateOneWithoutSwipeNestedInput = {
    create?: XOR<ConversationCreateWithoutSwipeInput, ConversationUncheckedCreateWithoutSwipeInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutSwipeInput
    upsert?: ConversationUpsertWithoutSwipeInput
    disconnect?: ConversationWhereInput | boolean
    delete?: ConversationWhereInput | boolean
    connect?: ConversationWhereUniqueInput
    update?: XOR<XOR<ConversationUpdateToOneWithWhereWithoutSwipeInput, ConversationUpdateWithoutSwipeInput>, ConversationUncheckedUpdateWithoutSwipeInput>
  }

  export type SwipeCreateNestedOneWithoutConversationInput = {
    create?: XOR<SwipeCreateWithoutConversationInput, SwipeUncheckedCreateWithoutConversationInput>
    connectOrCreate?: SwipeCreateOrConnectWithoutConversationInput
    connect?: SwipeWhereUniqueInput
  }

  export type PropertyCreateNestedOneWithoutConversationsInput = {
    create?: XOR<PropertyCreateWithoutConversationsInput, PropertyUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutConversationsInput
    connect?: PropertyWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutConversations_as_tenantInput = {
    create?: XOR<UserCreateWithoutConversations_as_tenantInput, UserUncheckedCreateWithoutConversations_as_tenantInput>
    connectOrCreate?: UserCreateOrConnectWithoutConversations_as_tenantInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutConversations_as_ownerInput = {
    create?: XOR<UserCreateWithoutConversations_as_ownerInput, UserUncheckedCreateWithoutConversations_as_ownerInput>
    connectOrCreate?: UserCreateOrConnectWithoutConversations_as_ownerInput
    connect?: UserWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutConversationInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutConversationInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type SwipeUpdateOneRequiredWithoutConversationNestedInput = {
    create?: XOR<SwipeCreateWithoutConversationInput, SwipeUncheckedCreateWithoutConversationInput>
    connectOrCreate?: SwipeCreateOrConnectWithoutConversationInput
    upsert?: SwipeUpsertWithoutConversationInput
    connect?: SwipeWhereUniqueInput
    update?: XOR<XOR<SwipeUpdateToOneWithWhereWithoutConversationInput, SwipeUpdateWithoutConversationInput>, SwipeUncheckedUpdateWithoutConversationInput>
  }

  export type PropertyUpdateOneRequiredWithoutConversationsNestedInput = {
    create?: XOR<PropertyCreateWithoutConversationsInput, PropertyUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutConversationsInput
    upsert?: PropertyUpsertWithoutConversationsInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutConversationsInput, PropertyUpdateWithoutConversationsInput>, PropertyUncheckedUpdateWithoutConversationsInput>
  }

  export type UserUpdateOneRequiredWithoutConversations_as_tenantNestedInput = {
    create?: XOR<UserCreateWithoutConversations_as_tenantInput, UserUncheckedCreateWithoutConversations_as_tenantInput>
    connectOrCreate?: UserCreateOrConnectWithoutConversations_as_tenantInput
    upsert?: UserUpsertWithoutConversations_as_tenantInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutConversations_as_tenantInput, UserUpdateWithoutConversations_as_tenantInput>, UserUncheckedUpdateWithoutConversations_as_tenantInput>
  }

  export type UserUpdateOneRequiredWithoutConversations_as_ownerNestedInput = {
    create?: XOR<UserCreateWithoutConversations_as_ownerInput, UserUncheckedCreateWithoutConversations_as_ownerInput>
    connectOrCreate?: UserCreateOrConnectWithoutConversations_as_ownerInput
    upsert?: UserUpsertWithoutConversations_as_ownerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutConversations_as_ownerInput, UserUpdateWithoutConversations_as_ownerInput>, UserUncheckedUpdateWithoutConversations_as_ownerInput>
  }

  export type MessageUpdateManyWithoutConversationNestedInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutConversationInput | MessageUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutConversationInput | MessageUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutConversationInput | MessageUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutConversationNestedInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutConversationInput | MessageUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutConversationInput | MessageUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutConversationInput | MessageUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ConversationCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutMessagesInput
    connect?: ConversationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMessagesInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type ConversationUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutMessagesInput
    upsert?: ConversationUpsertWithoutMessagesInput
    connect?: ConversationWhereUniqueInput
    update?: XOR<XOR<ConversationUpdateToOneWithWhereWithoutMessagesInput, ConversationUpdateWithoutMessagesInput>, ConversationUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    upsert?: UserUpsertWithoutMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesInput, UserUpdateWithoutMessagesInput>, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type UserCreateNestedManyWithoutAddressInput = {
    create?: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput> | UserCreateWithoutAddressInput[] | UserUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAddressInput | UserCreateOrConnectWithoutAddressInput[]
    createMany?: UserCreateManyAddressInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type AgencyCreateNestedManyWithoutAddressInput = {
    create?: XOR<AgencyCreateWithoutAddressInput, AgencyUncheckedCreateWithoutAddressInput> | AgencyCreateWithoutAddressInput[] | AgencyUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: AgencyCreateOrConnectWithoutAddressInput | AgencyCreateOrConnectWithoutAddressInput[]
    createMany?: AgencyCreateManyAddressInputEnvelope
    connect?: AgencyWhereUniqueInput | AgencyWhereUniqueInput[]
  }

  export type PropertyCreateNestedManyWithoutAddressInput = {
    create?: XOR<PropertyCreateWithoutAddressInput, PropertyUncheckedCreateWithoutAddressInput> | PropertyCreateWithoutAddressInput[] | PropertyUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutAddressInput | PropertyCreateOrConnectWithoutAddressInput[]
    createMany?: PropertyCreateManyAddressInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutAddressInput = {
    create?: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput> | UserCreateWithoutAddressInput[] | UserUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAddressInput | UserCreateOrConnectWithoutAddressInput[]
    createMany?: UserCreateManyAddressInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type AgencyUncheckedCreateNestedManyWithoutAddressInput = {
    create?: XOR<AgencyCreateWithoutAddressInput, AgencyUncheckedCreateWithoutAddressInput> | AgencyCreateWithoutAddressInput[] | AgencyUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: AgencyCreateOrConnectWithoutAddressInput | AgencyCreateOrConnectWithoutAddressInput[]
    createMany?: AgencyCreateManyAddressInputEnvelope
    connect?: AgencyWhereUniqueInput | AgencyWhereUniqueInput[]
  }

  export type PropertyUncheckedCreateNestedManyWithoutAddressInput = {
    create?: XOR<PropertyCreateWithoutAddressInput, PropertyUncheckedCreateWithoutAddressInput> | PropertyCreateWithoutAddressInput[] | PropertyUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutAddressInput | PropertyCreateOrConnectWithoutAddressInput[]
    createMany?: PropertyCreateManyAddressInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutAddressNestedInput = {
    create?: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput> | UserCreateWithoutAddressInput[] | UserUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAddressInput | UserCreateOrConnectWithoutAddressInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutAddressInput | UserUpsertWithWhereUniqueWithoutAddressInput[]
    createMany?: UserCreateManyAddressInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutAddressInput | UserUpdateWithWhereUniqueWithoutAddressInput[]
    updateMany?: UserUpdateManyWithWhereWithoutAddressInput | UserUpdateManyWithWhereWithoutAddressInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type AgencyUpdateManyWithoutAddressNestedInput = {
    create?: XOR<AgencyCreateWithoutAddressInput, AgencyUncheckedCreateWithoutAddressInput> | AgencyCreateWithoutAddressInput[] | AgencyUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: AgencyCreateOrConnectWithoutAddressInput | AgencyCreateOrConnectWithoutAddressInput[]
    upsert?: AgencyUpsertWithWhereUniqueWithoutAddressInput | AgencyUpsertWithWhereUniqueWithoutAddressInput[]
    createMany?: AgencyCreateManyAddressInputEnvelope
    set?: AgencyWhereUniqueInput | AgencyWhereUniqueInput[]
    disconnect?: AgencyWhereUniqueInput | AgencyWhereUniqueInput[]
    delete?: AgencyWhereUniqueInput | AgencyWhereUniqueInput[]
    connect?: AgencyWhereUniqueInput | AgencyWhereUniqueInput[]
    update?: AgencyUpdateWithWhereUniqueWithoutAddressInput | AgencyUpdateWithWhereUniqueWithoutAddressInput[]
    updateMany?: AgencyUpdateManyWithWhereWithoutAddressInput | AgencyUpdateManyWithWhereWithoutAddressInput[]
    deleteMany?: AgencyScalarWhereInput | AgencyScalarWhereInput[]
  }

  export type PropertyUpdateManyWithoutAddressNestedInput = {
    create?: XOR<PropertyCreateWithoutAddressInput, PropertyUncheckedCreateWithoutAddressInput> | PropertyCreateWithoutAddressInput[] | PropertyUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutAddressInput | PropertyCreateOrConnectWithoutAddressInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutAddressInput | PropertyUpsertWithWhereUniqueWithoutAddressInput[]
    createMany?: PropertyCreateManyAddressInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutAddressInput | PropertyUpdateWithWhereUniqueWithoutAddressInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutAddressInput | PropertyUpdateManyWithWhereWithoutAddressInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutAddressNestedInput = {
    create?: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput> | UserCreateWithoutAddressInput[] | UserUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAddressInput | UserCreateOrConnectWithoutAddressInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutAddressInput | UserUpsertWithWhereUniqueWithoutAddressInput[]
    createMany?: UserCreateManyAddressInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutAddressInput | UserUpdateWithWhereUniqueWithoutAddressInput[]
    updateMany?: UserUpdateManyWithWhereWithoutAddressInput | UserUpdateManyWithWhereWithoutAddressInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type AgencyUncheckedUpdateManyWithoutAddressNestedInput = {
    create?: XOR<AgencyCreateWithoutAddressInput, AgencyUncheckedCreateWithoutAddressInput> | AgencyCreateWithoutAddressInput[] | AgencyUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: AgencyCreateOrConnectWithoutAddressInput | AgencyCreateOrConnectWithoutAddressInput[]
    upsert?: AgencyUpsertWithWhereUniqueWithoutAddressInput | AgencyUpsertWithWhereUniqueWithoutAddressInput[]
    createMany?: AgencyCreateManyAddressInputEnvelope
    set?: AgencyWhereUniqueInput | AgencyWhereUniqueInput[]
    disconnect?: AgencyWhereUniqueInput | AgencyWhereUniqueInput[]
    delete?: AgencyWhereUniqueInput | AgencyWhereUniqueInput[]
    connect?: AgencyWhereUniqueInput | AgencyWhereUniqueInput[]
    update?: AgencyUpdateWithWhereUniqueWithoutAddressInput | AgencyUpdateWithWhereUniqueWithoutAddressInput[]
    updateMany?: AgencyUpdateManyWithWhereWithoutAddressInput | AgencyUpdateManyWithWhereWithoutAddressInput[]
    deleteMany?: AgencyScalarWhereInput | AgencyScalarWhereInput[]
  }

  export type PropertyUncheckedUpdateManyWithoutAddressNestedInput = {
    create?: XOR<PropertyCreateWithoutAddressInput, PropertyUncheckedCreateWithoutAddressInput> | PropertyCreateWithoutAddressInput[] | PropertyUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutAddressInput | PropertyCreateOrConnectWithoutAddressInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutAddressInput | PropertyUpsertWithWhereUniqueWithoutAddressInput[]
    createMany?: PropertyCreateManyAddressInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutAddressInput | PropertyUpdateWithWhereUniqueWithoutAddressInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutAddressInput | PropertyUpdateManyWithWhereWithoutAddressInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedEnumPropertyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyType | EnumPropertyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyTypeFilter<$PrismaModel> | $Enums.PropertyType
  }

  export type NestedEnumPropertyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyStatus | EnumPropertyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyStatus[] | ListEnumPropertyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyStatus[] | ListEnumPropertyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyStatusFilter<$PrismaModel> | $Enums.PropertyStatus
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

  export type NestedEnumPropertyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyStatus | EnumPropertyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyStatus[] | ListEnumPropertyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyStatus[] | ListEnumPropertyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyStatusWithAggregatesFilter<$PrismaModel> | $Enums.PropertyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPropertyStatusFilter<$PrismaModel>
    _max?: NestedEnumPropertyStatusFilter<$PrismaModel>
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

  export type AgencyCreateWithoutUserInput = {
    id?: string
    nom_agence: string
    numero_tva?: string | null
    numero_bce?: string | null
    site_web?: string | null
    created_at?: Date | string
    address: AddressCreateNestedOneWithoutAgenciesInput
  }

  export type AgencyUncheckedCreateWithoutUserInput = {
    id?: string
    nom_agence: string
    numero_tva?: string | null
    numero_bce?: string | null
    site_web?: string | null
    address_id: string
    created_at?: Date | string
  }

  export type AgencyCreateOrConnectWithoutUserInput = {
    where: AgencyWhereUniqueInput
    create: XOR<AgencyCreateWithoutUserInput, AgencyUncheckedCreateWithoutUserInput>
  }

  export type TenantProfileCreateWithoutUserInput = {
    id?: string
    household_size?: number | null
    budget_max?: number | null
    min_surface?: number | null
    max_surface?: number | null
    regions?: TenantProfileCreateregionsInput | string[]
    property_types?: TenantProfileCreateproperty_typesInput | $Enums.PropertyType[]
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TenantProfileUncheckedCreateWithoutUserInput = {
    id?: string
    household_size?: number | null
    budget_max?: number | null
    min_surface?: number | null
    max_surface?: number | null
    regions?: TenantProfileCreateregionsInput | string[]
    property_types?: TenantProfileCreateproperty_typesInput | $Enums.PropertyType[]
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TenantProfileCreateOrConnectWithoutUserInput = {
    where: TenantProfileWhereUniqueInput
    create: XOR<TenantProfileCreateWithoutUserInput, TenantProfileUncheckedCreateWithoutUserInput>
  }

  export type PropertyCreateWithoutOwnerInput = {
    id?: string
    title: string
    description?: string | null
    property_type: $Enums.PropertyType
    status?: $Enums.PropertyStatus
    price: number
    surface: number
    rooms: number
    parking?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    address: AddressCreateNestedOneWithoutPropertiesInput
    photos?: AnnouncementPhotoCreateNestedManyWithoutPropertyInput
    swipes?: SwipeCreateNestedManyWithoutPropertyInput
    conversations?: ConversationCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutOwnerInput = {
    id?: string
    title: string
    description?: string | null
    property_type: $Enums.PropertyType
    status?: $Enums.PropertyStatus
    address_id: string
    price: number
    surface: number
    rooms: number
    parking?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    photos?: AnnouncementPhotoUncheckedCreateNestedManyWithoutPropertyInput
    swipes?: SwipeUncheckedCreateNestedManyWithoutPropertyInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutOwnerInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutOwnerInput, PropertyUncheckedCreateWithoutOwnerInput>
  }

  export type PropertyCreateManyOwnerInputEnvelope = {
    data: PropertyCreateManyOwnerInput | PropertyCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type SwipeCreateWithoutUserInput = {
    id?: string
    direction: boolean
    created_at?: Date | string
    property: PropertyCreateNestedOneWithoutSwipesInput
    conversation?: ConversationCreateNestedOneWithoutSwipeInput
  }

  export type SwipeUncheckedCreateWithoutUserInput = {
    id?: string
    direction: boolean
    property_id: string
    created_at?: Date | string
    conversation?: ConversationUncheckedCreateNestedOneWithoutSwipeInput
  }

  export type SwipeCreateOrConnectWithoutUserInput = {
    where: SwipeWhereUniqueInput
    create: XOR<SwipeCreateWithoutUserInput, SwipeUncheckedCreateWithoutUserInput>
  }

  export type SwipeCreateManyUserInputEnvelope = {
    data: SwipeCreateManyUserInput | SwipeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ConversationCreateWithoutTenantInput = {
    id?: string
    created_at?: Date | string
    swipe: SwipeCreateNestedOneWithoutConversationInput
    property: PropertyCreateNestedOneWithoutConversationsInput
    owner: UserCreateNestedOneWithoutConversations_as_ownerInput
    messages?: MessageCreateNestedManyWithoutConversationInput
  }

  export type ConversationUncheckedCreateWithoutTenantInput = {
    id?: string
    swipe_id: string
    property_id: string
    owner_id: string
    created_at?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationCreateOrConnectWithoutTenantInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutTenantInput, ConversationUncheckedCreateWithoutTenantInput>
  }

  export type ConversationCreateManyTenantInputEnvelope = {
    data: ConversationCreateManyTenantInput | ConversationCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type ConversationCreateWithoutOwnerInput = {
    id?: string
    created_at?: Date | string
    swipe: SwipeCreateNestedOneWithoutConversationInput
    property: PropertyCreateNestedOneWithoutConversationsInput
    tenant: UserCreateNestedOneWithoutConversations_as_tenantInput
    messages?: MessageCreateNestedManyWithoutConversationInput
  }

  export type ConversationUncheckedCreateWithoutOwnerInput = {
    id?: string
    swipe_id: string
    property_id: string
    tenant_id: string
    created_at?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationCreateOrConnectWithoutOwnerInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutOwnerInput, ConversationUncheckedCreateWithoutOwnerInput>
  }

  export type ConversationCreateManyOwnerInputEnvelope = {
    data: ConversationCreateManyOwnerInput | ConversationCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutSenderInput = {
    id?: string
    content: string
    read?: boolean
    created_at?: Date | string
    deleted_at?: Date | string | null
    conversation: ConversationCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: string
    content: string
    read?: boolean
    conversation_id: string
    created_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageCreateManySenderInputEnvelope = {
    data: MessageCreateManySenderInput | MessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type ProfilePhotoCreateWithoutUserInput = {
    id?: string
    url: string
    uploaded_at?: Date | string
  }

  export type ProfilePhotoUncheckedCreateWithoutUserInput = {
    id?: string
    url: string
    uploaded_at?: Date | string
  }

  export type ProfilePhotoCreateOrConnectWithoutUserInput = {
    where: ProfilePhotoWhereUniqueInput
    create: XOR<ProfilePhotoCreateWithoutUserInput, ProfilePhotoUncheckedCreateWithoutUserInput>
  }

  export type ProfilePhotoCreateManyUserInputEnvelope = {
    data: ProfilePhotoCreateManyUserInput | ProfilePhotoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DocumentCreateWithoutUserInput = {
    id?: string
    url: string
    label?: string | null
    uploaded_at?: Date | string
  }

  export type DocumentUncheckedCreateWithoutUserInput = {
    id?: string
    url: string
    label?: string | null
    uploaded_at?: Date | string
  }

  export type DocumentCreateOrConnectWithoutUserInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutUserInput, DocumentUncheckedCreateWithoutUserInput>
  }

  export type DocumentCreateManyUserInputEnvelope = {
    data: DocumentCreateManyUserInput | DocumentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AddressCreateWithoutUsersInput = {
    id?: string
    number: string
    box?: string | null
    street: string
    city: string
    postal_code: string
    country: string
    created_at?: Date | string
    agencies?: AgencyCreateNestedManyWithoutAddressInput
    properties?: PropertyCreateNestedManyWithoutAddressInput
  }

  export type AddressUncheckedCreateWithoutUsersInput = {
    id?: string
    number: string
    box?: string | null
    street: string
    city: string
    postal_code: string
    country: string
    created_at?: Date | string
    agencies?: AgencyUncheckedCreateNestedManyWithoutAddressInput
    properties?: PropertyUncheckedCreateNestedManyWithoutAddressInput
  }

  export type AddressCreateOrConnectWithoutUsersInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutUsersInput, AddressUncheckedCreateWithoutUsersInput>
  }

  export type AgencyUpsertWithoutUserInput = {
    update: XOR<AgencyUpdateWithoutUserInput, AgencyUncheckedUpdateWithoutUserInput>
    create: XOR<AgencyCreateWithoutUserInput, AgencyUncheckedCreateWithoutUserInput>
    where?: AgencyWhereInput
  }

  export type AgencyUpdateToOneWithWhereWithoutUserInput = {
    where?: AgencyWhereInput
    data: XOR<AgencyUpdateWithoutUserInput, AgencyUncheckedUpdateWithoutUserInput>
  }

  export type AgencyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom_agence?: StringFieldUpdateOperationsInput | string
    numero_tva?: NullableStringFieldUpdateOperationsInput | string | null
    numero_bce?: NullableStringFieldUpdateOperationsInput | string | null
    site_web?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateOneRequiredWithoutAgenciesNestedInput
  }

  export type AgencyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom_agence?: StringFieldUpdateOperationsInput | string
    numero_tva?: NullableStringFieldUpdateOperationsInput | string | null
    numero_bce?: NullableStringFieldUpdateOperationsInput | string | null
    site_web?: NullableStringFieldUpdateOperationsInput | string | null
    address_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantProfileUpsertWithoutUserInput = {
    update: XOR<TenantProfileUpdateWithoutUserInput, TenantProfileUncheckedUpdateWithoutUserInput>
    create: XOR<TenantProfileCreateWithoutUserInput, TenantProfileUncheckedCreateWithoutUserInput>
    where?: TenantProfileWhereInput
  }

  export type TenantProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: TenantProfileWhereInput
    data: XOR<TenantProfileUpdateWithoutUserInput, TenantProfileUncheckedUpdateWithoutUserInput>
  }

  export type TenantProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    household_size?: NullableIntFieldUpdateOperationsInput | number | null
    budget_max?: NullableFloatFieldUpdateOperationsInput | number | null
    min_surface?: NullableIntFieldUpdateOperationsInput | number | null
    max_surface?: NullableIntFieldUpdateOperationsInput | number | null
    regions?: TenantProfileUpdateregionsInput | string[]
    property_types?: TenantProfileUpdateproperty_typesInput | $Enums.PropertyType[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    household_size?: NullableIntFieldUpdateOperationsInput | number | null
    budget_max?: NullableFloatFieldUpdateOperationsInput | number | null
    min_surface?: NullableIntFieldUpdateOperationsInput | number | null
    max_surface?: NullableIntFieldUpdateOperationsInput | number | null
    regions?: TenantProfileUpdateregionsInput | string[]
    property_types?: TenantProfileUpdateproperty_typesInput | $Enums.PropertyType[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyUpsertWithWhereUniqueWithoutOwnerInput = {
    where: PropertyWhereUniqueInput
    update: XOR<PropertyUpdateWithoutOwnerInput, PropertyUncheckedUpdateWithoutOwnerInput>
    create: XOR<PropertyCreateWithoutOwnerInput, PropertyUncheckedCreateWithoutOwnerInput>
  }

  export type PropertyUpdateWithWhereUniqueWithoutOwnerInput = {
    where: PropertyWhereUniqueInput
    data: XOR<PropertyUpdateWithoutOwnerInput, PropertyUncheckedUpdateWithoutOwnerInput>
  }

  export type PropertyUpdateManyWithWhereWithoutOwnerInput = {
    where: PropertyScalarWhereInput
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyWithoutOwnerInput>
  }

  export type PropertyScalarWhereInput = {
    AND?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
    OR?: PropertyScalarWhereInput[]
    NOT?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
    id?: StringFilter<"Property"> | string
    title?: StringFilter<"Property"> | string
    description?: StringNullableFilter<"Property"> | string | null
    property_type?: EnumPropertyTypeFilter<"Property"> | $Enums.PropertyType
    status?: EnumPropertyStatusFilter<"Property"> | $Enums.PropertyStatus
    address_id?: StringFilter<"Property"> | string
    price?: IntFilter<"Property"> | number
    surface?: IntFilter<"Property"> | number
    rooms?: IntFilter<"Property"> | number
    parking?: BoolFilter<"Property"> | boolean
    owner_id?: StringFilter<"Property"> | string
    created_at?: DateTimeFilter<"Property"> | Date | string
    updated_at?: DateTimeFilter<"Property"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Property"> | Date | string | null
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
    direction?: BoolFilter<"Swipe"> | boolean
    user_id?: StringFilter<"Swipe"> | string
    property_id?: StringFilter<"Swipe"> | string
    created_at?: DateTimeFilter<"Swipe"> | Date | string
  }

  export type ConversationUpsertWithWhereUniqueWithoutTenantInput = {
    where: ConversationWhereUniqueInput
    update: XOR<ConversationUpdateWithoutTenantInput, ConversationUncheckedUpdateWithoutTenantInput>
    create: XOR<ConversationCreateWithoutTenantInput, ConversationUncheckedCreateWithoutTenantInput>
  }

  export type ConversationUpdateWithWhereUniqueWithoutTenantInput = {
    where: ConversationWhereUniqueInput
    data: XOR<ConversationUpdateWithoutTenantInput, ConversationUncheckedUpdateWithoutTenantInput>
  }

  export type ConversationUpdateManyWithWhereWithoutTenantInput = {
    where: ConversationScalarWhereInput
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyWithoutTenantInput>
  }

  export type ConversationScalarWhereInput = {
    AND?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
    OR?: ConversationScalarWhereInput[]
    NOT?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
    id?: StringFilter<"Conversation"> | string
    swipe_id?: StringFilter<"Conversation"> | string
    property_id?: StringFilter<"Conversation"> | string
    tenant_id?: StringFilter<"Conversation"> | string
    owner_id?: StringFilter<"Conversation"> | string
    created_at?: DateTimeFilter<"Conversation"> | Date | string
  }

  export type ConversationUpsertWithWhereUniqueWithoutOwnerInput = {
    where: ConversationWhereUniqueInput
    update: XOR<ConversationUpdateWithoutOwnerInput, ConversationUncheckedUpdateWithoutOwnerInput>
    create: XOR<ConversationCreateWithoutOwnerInput, ConversationUncheckedCreateWithoutOwnerInput>
  }

  export type ConversationUpdateWithWhereUniqueWithoutOwnerInput = {
    where: ConversationWhereUniqueInput
    data: XOR<ConversationUpdateWithoutOwnerInput, ConversationUncheckedUpdateWithoutOwnerInput>
  }

  export type ConversationUpdateManyWithWhereWithoutOwnerInput = {
    where: ConversationScalarWhereInput
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyWithoutOwnerInput>
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
    read?: BoolFilter<"Message"> | boolean
    conversation_id?: StringFilter<"Message"> | string
    sender_id?: StringFilter<"Message"> | string
    created_at?: DateTimeFilter<"Message"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Message"> | Date | string | null
  }

  export type ProfilePhotoUpsertWithWhereUniqueWithoutUserInput = {
    where: ProfilePhotoWhereUniqueInput
    update: XOR<ProfilePhotoUpdateWithoutUserInput, ProfilePhotoUncheckedUpdateWithoutUserInput>
    create: XOR<ProfilePhotoCreateWithoutUserInput, ProfilePhotoUncheckedCreateWithoutUserInput>
  }

  export type ProfilePhotoUpdateWithWhereUniqueWithoutUserInput = {
    where: ProfilePhotoWhereUniqueInput
    data: XOR<ProfilePhotoUpdateWithoutUserInput, ProfilePhotoUncheckedUpdateWithoutUserInput>
  }

  export type ProfilePhotoUpdateManyWithWhereWithoutUserInput = {
    where: ProfilePhotoScalarWhereInput
    data: XOR<ProfilePhotoUpdateManyMutationInput, ProfilePhotoUncheckedUpdateManyWithoutUserInput>
  }

  export type ProfilePhotoScalarWhereInput = {
    AND?: ProfilePhotoScalarWhereInput | ProfilePhotoScalarWhereInput[]
    OR?: ProfilePhotoScalarWhereInput[]
    NOT?: ProfilePhotoScalarWhereInput | ProfilePhotoScalarWhereInput[]
    id?: StringFilter<"ProfilePhoto"> | string
    url?: StringFilter<"ProfilePhoto"> | string
    user_id?: StringFilter<"ProfilePhoto"> | string
    uploaded_at?: DateTimeFilter<"ProfilePhoto"> | Date | string
  }

  export type DocumentUpsertWithWhereUniqueWithoutUserInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutUserInput, DocumentUncheckedUpdateWithoutUserInput>
    create: XOR<DocumentCreateWithoutUserInput, DocumentUncheckedCreateWithoutUserInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutUserInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutUserInput, DocumentUncheckedUpdateWithoutUserInput>
  }

  export type DocumentUpdateManyWithWhereWithoutUserInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutUserInput>
  }

  export type DocumentScalarWhereInput = {
    AND?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    OR?: DocumentScalarWhereInput[]
    NOT?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    id?: StringFilter<"Document"> | string
    url?: StringFilter<"Document"> | string
    label?: StringNullableFilter<"Document"> | string | null
    user_id?: StringFilter<"Document"> | string
    uploaded_at?: DateTimeFilter<"Document"> | Date | string
  }

  export type AddressUpsertWithoutUsersInput = {
    update: XOR<AddressUpdateWithoutUsersInput, AddressUncheckedUpdateWithoutUsersInput>
    create: XOR<AddressCreateWithoutUsersInput, AddressUncheckedCreateWithoutUsersInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutUsersInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutUsersInput, AddressUncheckedUpdateWithoutUsersInput>
  }

  export type AddressUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    box?: NullableStringFieldUpdateOperationsInput | string | null
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    agencies?: AgencyUpdateManyWithoutAddressNestedInput
    properties?: PropertyUpdateManyWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    box?: NullableStringFieldUpdateOperationsInput | string | null
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    agencies?: AgencyUncheckedUpdateManyWithoutAddressNestedInput
    properties?: PropertyUncheckedUpdateManyWithoutAddressNestedInput
  }

  export type AddressCreateWithoutAgenciesInput = {
    id?: string
    number: string
    box?: string | null
    street: string
    city: string
    postal_code: string
    country: string
    created_at?: Date | string
    users?: UserCreateNestedManyWithoutAddressInput
    properties?: PropertyCreateNestedManyWithoutAddressInput
  }

  export type AddressUncheckedCreateWithoutAgenciesInput = {
    id?: string
    number: string
    box?: string | null
    street: string
    city: string
    postal_code: string
    country: string
    created_at?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutAddressInput
    properties?: PropertyUncheckedCreateNestedManyWithoutAddressInput
  }

  export type AddressCreateOrConnectWithoutAgenciesInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutAgenciesInput, AddressUncheckedCreateWithoutAgenciesInput>
  }

  export type UserCreateWithoutAgencyInput = {
    id?: string
    email: string
    password: string
    firstname: string
    lastname: string
    phone?: string | null
    bio?: string | null
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    tenant_profile?: TenantProfileCreateNestedOneWithoutUserInput
    properties?: PropertyCreateNestedManyWithoutOwnerInput
    swipes?: SwipeCreateNestedManyWithoutUserInput
    conversations_as_tenant?: ConversationCreateNestedManyWithoutTenantInput
    conversations_as_owner?: ConversationCreateNestedManyWithoutOwnerInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    profile_photos?: ProfilePhotoCreateNestedManyWithoutUserInput
    documents?: DocumentCreateNestedManyWithoutUserInput
    address: AddressCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutAgencyInput = {
    id?: string
    email: string
    password: string
    firstname: string
    lastname: string
    phone?: string | null
    bio?: string | null
    role?: $Enums.Role
    is_active?: boolean
    address_id: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    tenant_profile?: TenantProfileUncheckedCreateNestedOneWithoutUserInput
    properties?: PropertyUncheckedCreateNestedManyWithoutOwnerInput
    swipes?: SwipeUncheckedCreateNestedManyWithoutUserInput
    conversations_as_tenant?: ConversationUncheckedCreateNestedManyWithoutTenantInput
    conversations_as_owner?: ConversationUncheckedCreateNestedManyWithoutOwnerInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    profile_photos?: ProfilePhotoUncheckedCreateNestedManyWithoutUserInput
    documents?: DocumentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAgencyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAgencyInput, UserUncheckedCreateWithoutAgencyInput>
  }

  export type AddressUpsertWithoutAgenciesInput = {
    update: XOR<AddressUpdateWithoutAgenciesInput, AddressUncheckedUpdateWithoutAgenciesInput>
    create: XOR<AddressCreateWithoutAgenciesInput, AddressUncheckedCreateWithoutAgenciesInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutAgenciesInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutAgenciesInput, AddressUncheckedUpdateWithoutAgenciesInput>
  }

  export type AddressUpdateWithoutAgenciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    box?: NullableStringFieldUpdateOperationsInput | string | null
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutAddressNestedInput
    properties?: PropertyUpdateManyWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateWithoutAgenciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    box?: NullableStringFieldUpdateOperationsInput | string | null
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutAddressNestedInput
    properties?: PropertyUncheckedUpdateManyWithoutAddressNestedInput
  }

  export type UserUpsertWithoutAgencyInput = {
    update: XOR<UserUpdateWithoutAgencyInput, UserUncheckedUpdateWithoutAgencyInput>
    create: XOR<UserCreateWithoutAgencyInput, UserUncheckedCreateWithoutAgencyInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAgencyInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAgencyInput, UserUncheckedUpdateWithoutAgencyInput>
  }

  export type UserUpdateWithoutAgencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenant_profile?: TenantProfileUpdateOneWithoutUserNestedInput
    properties?: PropertyUpdateManyWithoutOwnerNestedInput
    swipes?: SwipeUpdateManyWithoutUserNestedInput
    conversations_as_tenant?: ConversationUpdateManyWithoutTenantNestedInput
    conversations_as_owner?: ConversationUpdateManyWithoutOwnerNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    profile_photos?: ProfilePhotoUpdateManyWithoutUserNestedInput
    documents?: DocumentUpdateManyWithoutUserNestedInput
    address?: AddressUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutAgencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    address_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenant_profile?: TenantProfileUncheckedUpdateOneWithoutUserNestedInput
    properties?: PropertyUncheckedUpdateManyWithoutOwnerNestedInput
    swipes?: SwipeUncheckedUpdateManyWithoutUserNestedInput
    conversations_as_tenant?: ConversationUncheckedUpdateManyWithoutTenantNestedInput
    conversations_as_owner?: ConversationUncheckedUpdateManyWithoutOwnerNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    profile_photos?: ProfilePhotoUncheckedUpdateManyWithoutUserNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTenant_profileInput = {
    id?: string
    email: string
    password: string
    firstname: string
    lastname: string
    phone?: string | null
    bio?: string | null
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    agency?: AgencyCreateNestedOneWithoutUserInput
    properties?: PropertyCreateNestedManyWithoutOwnerInput
    swipes?: SwipeCreateNestedManyWithoutUserInput
    conversations_as_tenant?: ConversationCreateNestedManyWithoutTenantInput
    conversations_as_owner?: ConversationCreateNestedManyWithoutOwnerInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    profile_photos?: ProfilePhotoCreateNestedManyWithoutUserInput
    documents?: DocumentCreateNestedManyWithoutUserInput
    address: AddressCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutTenant_profileInput = {
    id?: string
    email: string
    password: string
    firstname: string
    lastname: string
    phone?: string | null
    bio?: string | null
    role?: $Enums.Role
    is_active?: boolean
    address_id: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    agency?: AgencyUncheckedCreateNestedOneWithoutUserInput
    properties?: PropertyUncheckedCreateNestedManyWithoutOwnerInput
    swipes?: SwipeUncheckedCreateNestedManyWithoutUserInput
    conversations_as_tenant?: ConversationUncheckedCreateNestedManyWithoutTenantInput
    conversations_as_owner?: ConversationUncheckedCreateNestedManyWithoutOwnerInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    profile_photos?: ProfilePhotoUncheckedCreateNestedManyWithoutUserInput
    documents?: DocumentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTenant_profileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTenant_profileInput, UserUncheckedCreateWithoutTenant_profileInput>
  }

  export type UserUpsertWithoutTenant_profileInput = {
    update: XOR<UserUpdateWithoutTenant_profileInput, UserUncheckedUpdateWithoutTenant_profileInput>
    create: XOR<UserCreateWithoutTenant_profileInput, UserUncheckedCreateWithoutTenant_profileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTenant_profileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTenant_profileInput, UserUncheckedUpdateWithoutTenant_profileInput>
  }

  export type UserUpdateWithoutTenant_profileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agency?: AgencyUpdateOneWithoutUserNestedInput
    properties?: PropertyUpdateManyWithoutOwnerNestedInput
    swipes?: SwipeUpdateManyWithoutUserNestedInput
    conversations_as_tenant?: ConversationUpdateManyWithoutTenantNestedInput
    conversations_as_owner?: ConversationUpdateManyWithoutOwnerNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    profile_photos?: ProfilePhotoUpdateManyWithoutUserNestedInput
    documents?: DocumentUpdateManyWithoutUserNestedInput
    address?: AddressUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutTenant_profileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    address_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agency?: AgencyUncheckedUpdateOneWithoutUserNestedInput
    properties?: PropertyUncheckedUpdateManyWithoutOwnerNestedInput
    swipes?: SwipeUncheckedUpdateManyWithoutUserNestedInput
    conversations_as_tenant?: ConversationUncheckedUpdateManyWithoutTenantNestedInput
    conversations_as_owner?: ConversationUncheckedUpdateManyWithoutOwnerNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    profile_photos?: ProfilePhotoUncheckedUpdateManyWithoutUserNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AddressCreateWithoutPropertiesInput = {
    id?: string
    number: string
    box?: string | null
    street: string
    city: string
    postal_code: string
    country: string
    created_at?: Date | string
    users?: UserCreateNestedManyWithoutAddressInput
    agencies?: AgencyCreateNestedManyWithoutAddressInput
  }

  export type AddressUncheckedCreateWithoutPropertiesInput = {
    id?: string
    number: string
    box?: string | null
    street: string
    city: string
    postal_code: string
    country: string
    created_at?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutAddressInput
    agencies?: AgencyUncheckedCreateNestedManyWithoutAddressInput
  }

  export type AddressCreateOrConnectWithoutPropertiesInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutPropertiesInput, AddressUncheckedCreateWithoutPropertiesInput>
  }

  export type UserCreateWithoutPropertiesInput = {
    id?: string
    email: string
    password: string
    firstname: string
    lastname: string
    phone?: string | null
    bio?: string | null
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    agency?: AgencyCreateNestedOneWithoutUserInput
    tenant_profile?: TenantProfileCreateNestedOneWithoutUserInput
    swipes?: SwipeCreateNestedManyWithoutUserInput
    conversations_as_tenant?: ConversationCreateNestedManyWithoutTenantInput
    conversations_as_owner?: ConversationCreateNestedManyWithoutOwnerInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    profile_photos?: ProfilePhotoCreateNestedManyWithoutUserInput
    documents?: DocumentCreateNestedManyWithoutUserInput
    address: AddressCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutPropertiesInput = {
    id?: string
    email: string
    password: string
    firstname: string
    lastname: string
    phone?: string | null
    bio?: string | null
    role?: $Enums.Role
    is_active?: boolean
    address_id: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    agency?: AgencyUncheckedCreateNestedOneWithoutUserInput
    tenant_profile?: TenantProfileUncheckedCreateNestedOneWithoutUserInput
    swipes?: SwipeUncheckedCreateNestedManyWithoutUserInput
    conversations_as_tenant?: ConversationUncheckedCreateNestedManyWithoutTenantInput
    conversations_as_owner?: ConversationUncheckedCreateNestedManyWithoutOwnerInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    profile_photos?: ProfilePhotoUncheckedCreateNestedManyWithoutUserInput
    documents?: DocumentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPropertiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPropertiesInput, UserUncheckedCreateWithoutPropertiesInput>
  }

  export type AnnouncementPhotoCreateWithoutPropertyInput = {
    id?: string
    url: string
    order?: number
    uploaded_at?: Date | string
  }

  export type AnnouncementPhotoUncheckedCreateWithoutPropertyInput = {
    id?: string
    url: string
    order?: number
    uploaded_at?: Date | string
  }

  export type AnnouncementPhotoCreateOrConnectWithoutPropertyInput = {
    where: AnnouncementPhotoWhereUniqueInput
    create: XOR<AnnouncementPhotoCreateWithoutPropertyInput, AnnouncementPhotoUncheckedCreateWithoutPropertyInput>
  }

  export type AnnouncementPhotoCreateManyPropertyInputEnvelope = {
    data: AnnouncementPhotoCreateManyPropertyInput | AnnouncementPhotoCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type SwipeCreateWithoutPropertyInput = {
    id?: string
    direction: boolean
    created_at?: Date | string
    user: UserCreateNestedOneWithoutSwipesInput
    conversation?: ConversationCreateNestedOneWithoutSwipeInput
  }

  export type SwipeUncheckedCreateWithoutPropertyInput = {
    id?: string
    direction: boolean
    user_id: string
    created_at?: Date | string
    conversation?: ConversationUncheckedCreateNestedOneWithoutSwipeInput
  }

  export type SwipeCreateOrConnectWithoutPropertyInput = {
    where: SwipeWhereUniqueInput
    create: XOR<SwipeCreateWithoutPropertyInput, SwipeUncheckedCreateWithoutPropertyInput>
  }

  export type SwipeCreateManyPropertyInputEnvelope = {
    data: SwipeCreateManyPropertyInput | SwipeCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type ConversationCreateWithoutPropertyInput = {
    id?: string
    created_at?: Date | string
    swipe: SwipeCreateNestedOneWithoutConversationInput
    tenant: UserCreateNestedOneWithoutConversations_as_tenantInput
    owner: UserCreateNestedOneWithoutConversations_as_ownerInput
    messages?: MessageCreateNestedManyWithoutConversationInput
  }

  export type ConversationUncheckedCreateWithoutPropertyInput = {
    id?: string
    swipe_id: string
    tenant_id: string
    owner_id: string
    created_at?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationCreateOrConnectWithoutPropertyInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutPropertyInput, ConversationUncheckedCreateWithoutPropertyInput>
  }

  export type ConversationCreateManyPropertyInputEnvelope = {
    data: ConversationCreateManyPropertyInput | ConversationCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type AddressUpsertWithoutPropertiesInput = {
    update: XOR<AddressUpdateWithoutPropertiesInput, AddressUncheckedUpdateWithoutPropertiesInput>
    create: XOR<AddressCreateWithoutPropertiesInput, AddressUncheckedCreateWithoutPropertiesInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutPropertiesInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutPropertiesInput, AddressUncheckedUpdateWithoutPropertiesInput>
  }

  export type AddressUpdateWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    box?: NullableStringFieldUpdateOperationsInput | string | null
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutAddressNestedInput
    agencies?: AgencyUpdateManyWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    box?: NullableStringFieldUpdateOperationsInput | string | null
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutAddressNestedInput
    agencies?: AgencyUncheckedUpdateManyWithoutAddressNestedInput
  }

  export type UserUpsertWithoutPropertiesInput = {
    update: XOR<UserUpdateWithoutPropertiesInput, UserUncheckedUpdateWithoutPropertiesInput>
    create: XOR<UserCreateWithoutPropertiesInput, UserUncheckedCreateWithoutPropertiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPropertiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPropertiesInput, UserUncheckedUpdateWithoutPropertiesInput>
  }

  export type UserUpdateWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agency?: AgencyUpdateOneWithoutUserNestedInput
    tenant_profile?: TenantProfileUpdateOneWithoutUserNestedInput
    swipes?: SwipeUpdateManyWithoutUserNestedInput
    conversations_as_tenant?: ConversationUpdateManyWithoutTenantNestedInput
    conversations_as_owner?: ConversationUpdateManyWithoutOwnerNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    profile_photos?: ProfilePhotoUpdateManyWithoutUserNestedInput
    documents?: DocumentUpdateManyWithoutUserNestedInput
    address?: AddressUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    address_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agency?: AgencyUncheckedUpdateOneWithoutUserNestedInput
    tenant_profile?: TenantProfileUncheckedUpdateOneWithoutUserNestedInput
    swipes?: SwipeUncheckedUpdateManyWithoutUserNestedInput
    conversations_as_tenant?: ConversationUncheckedUpdateManyWithoutTenantNestedInput
    conversations_as_owner?: ConversationUncheckedUpdateManyWithoutOwnerNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    profile_photos?: ProfilePhotoUncheckedUpdateManyWithoutUserNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AnnouncementPhotoUpsertWithWhereUniqueWithoutPropertyInput = {
    where: AnnouncementPhotoWhereUniqueInput
    update: XOR<AnnouncementPhotoUpdateWithoutPropertyInput, AnnouncementPhotoUncheckedUpdateWithoutPropertyInput>
    create: XOR<AnnouncementPhotoCreateWithoutPropertyInput, AnnouncementPhotoUncheckedCreateWithoutPropertyInput>
  }

  export type AnnouncementPhotoUpdateWithWhereUniqueWithoutPropertyInput = {
    where: AnnouncementPhotoWhereUniqueInput
    data: XOR<AnnouncementPhotoUpdateWithoutPropertyInput, AnnouncementPhotoUncheckedUpdateWithoutPropertyInput>
  }

  export type AnnouncementPhotoUpdateManyWithWhereWithoutPropertyInput = {
    where: AnnouncementPhotoScalarWhereInput
    data: XOR<AnnouncementPhotoUpdateManyMutationInput, AnnouncementPhotoUncheckedUpdateManyWithoutPropertyInput>
  }

  export type AnnouncementPhotoScalarWhereInput = {
    AND?: AnnouncementPhotoScalarWhereInput | AnnouncementPhotoScalarWhereInput[]
    OR?: AnnouncementPhotoScalarWhereInput[]
    NOT?: AnnouncementPhotoScalarWhereInput | AnnouncementPhotoScalarWhereInput[]
    id?: StringFilter<"AnnouncementPhoto"> | string
    url?: StringFilter<"AnnouncementPhoto"> | string
    order?: IntFilter<"AnnouncementPhoto"> | number
    property_id?: StringFilter<"AnnouncementPhoto"> | string
    uploaded_at?: DateTimeFilter<"AnnouncementPhoto"> | Date | string
  }

  export type SwipeUpsertWithWhereUniqueWithoutPropertyInput = {
    where: SwipeWhereUniqueInput
    update: XOR<SwipeUpdateWithoutPropertyInput, SwipeUncheckedUpdateWithoutPropertyInput>
    create: XOR<SwipeCreateWithoutPropertyInput, SwipeUncheckedCreateWithoutPropertyInput>
  }

  export type SwipeUpdateWithWhereUniqueWithoutPropertyInput = {
    where: SwipeWhereUniqueInput
    data: XOR<SwipeUpdateWithoutPropertyInput, SwipeUncheckedUpdateWithoutPropertyInput>
  }

  export type SwipeUpdateManyWithWhereWithoutPropertyInput = {
    where: SwipeScalarWhereInput
    data: XOR<SwipeUpdateManyMutationInput, SwipeUncheckedUpdateManyWithoutPropertyInput>
  }

  export type ConversationUpsertWithWhereUniqueWithoutPropertyInput = {
    where: ConversationWhereUniqueInput
    update: XOR<ConversationUpdateWithoutPropertyInput, ConversationUncheckedUpdateWithoutPropertyInput>
    create: XOR<ConversationCreateWithoutPropertyInput, ConversationUncheckedCreateWithoutPropertyInput>
  }

  export type ConversationUpdateWithWhereUniqueWithoutPropertyInput = {
    where: ConversationWhereUniqueInput
    data: XOR<ConversationUpdateWithoutPropertyInput, ConversationUncheckedUpdateWithoutPropertyInput>
  }

  export type ConversationUpdateManyWithWhereWithoutPropertyInput = {
    where: ConversationScalarWhereInput
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyWithoutPropertyInput>
  }

  export type PropertyCreateWithoutPhotosInput = {
    id?: string
    title: string
    description?: string | null
    property_type: $Enums.PropertyType
    status?: $Enums.PropertyStatus
    price: number
    surface: number
    rooms: number
    parking?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    address: AddressCreateNestedOneWithoutPropertiesInput
    owner: UserCreateNestedOneWithoutPropertiesInput
    swipes?: SwipeCreateNestedManyWithoutPropertyInput
    conversations?: ConversationCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutPhotosInput = {
    id?: string
    title: string
    description?: string | null
    property_type: $Enums.PropertyType
    status?: $Enums.PropertyStatus
    address_id: string
    price: number
    surface: number
    rooms: number
    parking?: boolean
    owner_id: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    swipes?: SwipeUncheckedCreateNestedManyWithoutPropertyInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutPhotosInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutPhotosInput, PropertyUncheckedCreateWithoutPhotosInput>
  }

  export type PropertyUpsertWithoutPhotosInput = {
    update: XOR<PropertyUpdateWithoutPhotosInput, PropertyUncheckedUpdateWithoutPhotosInput>
    create: XOR<PropertyCreateWithoutPhotosInput, PropertyUncheckedCreateWithoutPhotosInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutPhotosInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutPhotosInput, PropertyUncheckedUpdateWithoutPhotosInput>
  }

  export type PropertyUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    property_type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    status?: EnumPropertyStatusFieldUpdateOperationsInput | $Enums.PropertyStatus
    price?: IntFieldUpdateOperationsInput | number
    surface?: IntFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    parking?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: AddressUpdateOneRequiredWithoutPropertiesNestedInput
    owner?: UserUpdateOneRequiredWithoutPropertiesNestedInput
    swipes?: SwipeUpdateManyWithoutPropertyNestedInput
    conversations?: ConversationUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    property_type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    status?: EnumPropertyStatusFieldUpdateOperationsInput | $Enums.PropertyStatus
    address_id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    surface?: IntFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    parking?: BoolFieldUpdateOperationsInput | boolean
    owner_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    swipes?: SwipeUncheckedUpdateManyWithoutPropertyNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type UserCreateWithoutProfile_photosInput = {
    id?: string
    email: string
    password: string
    firstname: string
    lastname: string
    phone?: string | null
    bio?: string | null
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    agency?: AgencyCreateNestedOneWithoutUserInput
    tenant_profile?: TenantProfileCreateNestedOneWithoutUserInput
    properties?: PropertyCreateNestedManyWithoutOwnerInput
    swipes?: SwipeCreateNestedManyWithoutUserInput
    conversations_as_tenant?: ConversationCreateNestedManyWithoutTenantInput
    conversations_as_owner?: ConversationCreateNestedManyWithoutOwnerInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    documents?: DocumentCreateNestedManyWithoutUserInput
    address: AddressCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutProfile_photosInput = {
    id?: string
    email: string
    password: string
    firstname: string
    lastname: string
    phone?: string | null
    bio?: string | null
    role?: $Enums.Role
    is_active?: boolean
    address_id: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    agency?: AgencyUncheckedCreateNestedOneWithoutUserInput
    tenant_profile?: TenantProfileUncheckedCreateNestedOneWithoutUserInput
    properties?: PropertyUncheckedCreateNestedManyWithoutOwnerInput
    swipes?: SwipeUncheckedCreateNestedManyWithoutUserInput
    conversations_as_tenant?: ConversationUncheckedCreateNestedManyWithoutTenantInput
    conversations_as_owner?: ConversationUncheckedCreateNestedManyWithoutOwnerInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    documents?: DocumentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfile_photosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfile_photosInput, UserUncheckedCreateWithoutProfile_photosInput>
  }

  export type UserUpsertWithoutProfile_photosInput = {
    update: XOR<UserUpdateWithoutProfile_photosInput, UserUncheckedUpdateWithoutProfile_photosInput>
    create: XOR<UserCreateWithoutProfile_photosInput, UserUncheckedCreateWithoutProfile_photosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfile_photosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfile_photosInput, UserUncheckedUpdateWithoutProfile_photosInput>
  }

  export type UserUpdateWithoutProfile_photosInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agency?: AgencyUpdateOneWithoutUserNestedInput
    tenant_profile?: TenantProfileUpdateOneWithoutUserNestedInput
    properties?: PropertyUpdateManyWithoutOwnerNestedInput
    swipes?: SwipeUpdateManyWithoutUserNestedInput
    conversations_as_tenant?: ConversationUpdateManyWithoutTenantNestedInput
    conversations_as_owner?: ConversationUpdateManyWithoutOwnerNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    documents?: DocumentUpdateManyWithoutUserNestedInput
    address?: AddressUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutProfile_photosInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    address_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agency?: AgencyUncheckedUpdateOneWithoutUserNestedInput
    tenant_profile?: TenantProfileUncheckedUpdateOneWithoutUserNestedInput
    properties?: PropertyUncheckedUpdateManyWithoutOwnerNestedInput
    swipes?: SwipeUncheckedUpdateManyWithoutUserNestedInput
    conversations_as_tenant?: ConversationUncheckedUpdateManyWithoutTenantNestedInput
    conversations_as_owner?: ConversationUncheckedUpdateManyWithoutOwnerNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutDocumentsInput = {
    id?: string
    email: string
    password: string
    firstname: string
    lastname: string
    phone?: string | null
    bio?: string | null
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    agency?: AgencyCreateNestedOneWithoutUserInput
    tenant_profile?: TenantProfileCreateNestedOneWithoutUserInput
    properties?: PropertyCreateNestedManyWithoutOwnerInput
    swipes?: SwipeCreateNestedManyWithoutUserInput
    conversations_as_tenant?: ConversationCreateNestedManyWithoutTenantInput
    conversations_as_owner?: ConversationCreateNestedManyWithoutOwnerInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    profile_photos?: ProfilePhotoCreateNestedManyWithoutUserInput
    address: AddressCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutDocumentsInput = {
    id?: string
    email: string
    password: string
    firstname: string
    lastname: string
    phone?: string | null
    bio?: string | null
    role?: $Enums.Role
    is_active?: boolean
    address_id: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    agency?: AgencyUncheckedCreateNestedOneWithoutUserInput
    tenant_profile?: TenantProfileUncheckedCreateNestedOneWithoutUserInput
    properties?: PropertyUncheckedCreateNestedManyWithoutOwnerInput
    swipes?: SwipeUncheckedCreateNestedManyWithoutUserInput
    conversations_as_tenant?: ConversationUncheckedCreateNestedManyWithoutTenantInput
    conversations_as_owner?: ConversationUncheckedCreateNestedManyWithoutOwnerInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    profile_photos?: ProfilePhotoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDocumentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDocumentsInput, UserUncheckedCreateWithoutDocumentsInput>
  }

  export type UserUpsertWithoutDocumentsInput = {
    update: XOR<UserUpdateWithoutDocumentsInput, UserUncheckedUpdateWithoutDocumentsInput>
    create: XOR<UserCreateWithoutDocumentsInput, UserUncheckedCreateWithoutDocumentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDocumentsInput, UserUncheckedUpdateWithoutDocumentsInput>
  }

  export type UserUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agency?: AgencyUpdateOneWithoutUserNestedInput
    tenant_profile?: TenantProfileUpdateOneWithoutUserNestedInput
    properties?: PropertyUpdateManyWithoutOwnerNestedInput
    swipes?: SwipeUpdateManyWithoutUserNestedInput
    conversations_as_tenant?: ConversationUpdateManyWithoutTenantNestedInput
    conversations_as_owner?: ConversationUpdateManyWithoutOwnerNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    profile_photos?: ProfilePhotoUpdateManyWithoutUserNestedInput
    address?: AddressUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    address_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agency?: AgencyUncheckedUpdateOneWithoutUserNestedInput
    tenant_profile?: TenantProfileUncheckedUpdateOneWithoutUserNestedInput
    properties?: PropertyUncheckedUpdateManyWithoutOwnerNestedInput
    swipes?: SwipeUncheckedUpdateManyWithoutUserNestedInput
    conversations_as_tenant?: ConversationUncheckedUpdateManyWithoutTenantNestedInput
    conversations_as_owner?: ConversationUncheckedUpdateManyWithoutOwnerNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    profile_photos?: ProfilePhotoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSwipesInput = {
    id?: string
    email: string
    password: string
    firstname: string
    lastname: string
    phone?: string | null
    bio?: string | null
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    agency?: AgencyCreateNestedOneWithoutUserInput
    tenant_profile?: TenantProfileCreateNestedOneWithoutUserInput
    properties?: PropertyCreateNestedManyWithoutOwnerInput
    conversations_as_tenant?: ConversationCreateNestedManyWithoutTenantInput
    conversations_as_owner?: ConversationCreateNestedManyWithoutOwnerInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    profile_photos?: ProfilePhotoCreateNestedManyWithoutUserInput
    documents?: DocumentCreateNestedManyWithoutUserInput
    address: AddressCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutSwipesInput = {
    id?: string
    email: string
    password: string
    firstname: string
    lastname: string
    phone?: string | null
    bio?: string | null
    role?: $Enums.Role
    is_active?: boolean
    address_id: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    agency?: AgencyUncheckedCreateNestedOneWithoutUserInput
    tenant_profile?: TenantProfileUncheckedCreateNestedOneWithoutUserInput
    properties?: PropertyUncheckedCreateNestedManyWithoutOwnerInput
    conversations_as_tenant?: ConversationUncheckedCreateNestedManyWithoutTenantInput
    conversations_as_owner?: ConversationUncheckedCreateNestedManyWithoutOwnerInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    profile_photos?: ProfilePhotoUncheckedCreateNestedManyWithoutUserInput
    documents?: DocumentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSwipesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSwipesInput, UserUncheckedCreateWithoutSwipesInput>
  }

  export type PropertyCreateWithoutSwipesInput = {
    id?: string
    title: string
    description?: string | null
    property_type: $Enums.PropertyType
    status?: $Enums.PropertyStatus
    price: number
    surface: number
    rooms: number
    parking?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    address: AddressCreateNestedOneWithoutPropertiesInput
    owner: UserCreateNestedOneWithoutPropertiesInput
    photos?: AnnouncementPhotoCreateNestedManyWithoutPropertyInput
    conversations?: ConversationCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutSwipesInput = {
    id?: string
    title: string
    description?: string | null
    property_type: $Enums.PropertyType
    status?: $Enums.PropertyStatus
    address_id: string
    price: number
    surface: number
    rooms: number
    parking?: boolean
    owner_id: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    photos?: AnnouncementPhotoUncheckedCreateNestedManyWithoutPropertyInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutSwipesInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutSwipesInput, PropertyUncheckedCreateWithoutSwipesInput>
  }

  export type ConversationCreateWithoutSwipeInput = {
    id?: string
    created_at?: Date | string
    property: PropertyCreateNestedOneWithoutConversationsInput
    tenant: UserCreateNestedOneWithoutConversations_as_tenantInput
    owner: UserCreateNestedOneWithoutConversations_as_ownerInput
    messages?: MessageCreateNestedManyWithoutConversationInput
  }

  export type ConversationUncheckedCreateWithoutSwipeInput = {
    id?: string
    property_id: string
    tenant_id: string
    owner_id: string
    created_at?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationCreateOrConnectWithoutSwipeInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutSwipeInput, ConversationUncheckedCreateWithoutSwipeInput>
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
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agency?: AgencyUpdateOneWithoutUserNestedInput
    tenant_profile?: TenantProfileUpdateOneWithoutUserNestedInput
    properties?: PropertyUpdateManyWithoutOwnerNestedInput
    conversations_as_tenant?: ConversationUpdateManyWithoutTenantNestedInput
    conversations_as_owner?: ConversationUpdateManyWithoutOwnerNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    profile_photos?: ProfilePhotoUpdateManyWithoutUserNestedInput
    documents?: DocumentUpdateManyWithoutUserNestedInput
    address?: AddressUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutSwipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    address_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agency?: AgencyUncheckedUpdateOneWithoutUserNestedInput
    tenant_profile?: TenantProfileUncheckedUpdateOneWithoutUserNestedInput
    properties?: PropertyUncheckedUpdateManyWithoutOwnerNestedInput
    conversations_as_tenant?: ConversationUncheckedUpdateManyWithoutTenantNestedInput
    conversations_as_owner?: ConversationUncheckedUpdateManyWithoutOwnerNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    profile_photos?: ProfilePhotoUncheckedUpdateManyWithoutUserNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PropertyUpsertWithoutSwipesInput = {
    update: XOR<PropertyUpdateWithoutSwipesInput, PropertyUncheckedUpdateWithoutSwipesInput>
    create: XOR<PropertyCreateWithoutSwipesInput, PropertyUncheckedCreateWithoutSwipesInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutSwipesInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutSwipesInput, PropertyUncheckedUpdateWithoutSwipesInput>
  }

  export type PropertyUpdateWithoutSwipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    property_type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    status?: EnumPropertyStatusFieldUpdateOperationsInput | $Enums.PropertyStatus
    price?: IntFieldUpdateOperationsInput | number
    surface?: IntFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    parking?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: AddressUpdateOneRequiredWithoutPropertiesNestedInput
    owner?: UserUpdateOneRequiredWithoutPropertiesNestedInput
    photos?: AnnouncementPhotoUpdateManyWithoutPropertyNestedInput
    conversations?: ConversationUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutSwipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    property_type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    status?: EnumPropertyStatusFieldUpdateOperationsInput | $Enums.PropertyStatus
    address_id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    surface?: IntFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    parking?: BoolFieldUpdateOperationsInput | boolean
    owner_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photos?: AnnouncementPhotoUncheckedUpdateManyWithoutPropertyNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type ConversationUpsertWithoutSwipeInput = {
    update: XOR<ConversationUpdateWithoutSwipeInput, ConversationUncheckedUpdateWithoutSwipeInput>
    create: XOR<ConversationCreateWithoutSwipeInput, ConversationUncheckedCreateWithoutSwipeInput>
    where?: ConversationWhereInput
  }

  export type ConversationUpdateToOneWithWhereWithoutSwipeInput = {
    where?: ConversationWhereInput
    data: XOR<ConversationUpdateWithoutSwipeInput, ConversationUncheckedUpdateWithoutSwipeInput>
  }

  export type ConversationUpdateWithoutSwipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutConversationsNestedInput
    tenant?: UserUpdateOneRequiredWithoutConversations_as_tenantNestedInput
    owner?: UserUpdateOneRequiredWithoutConversations_as_ownerNestedInput
    messages?: MessageUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateWithoutSwipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    property_id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type SwipeCreateWithoutConversationInput = {
    id?: string
    direction: boolean
    created_at?: Date | string
    user: UserCreateNestedOneWithoutSwipesInput
    property: PropertyCreateNestedOneWithoutSwipesInput
  }

  export type SwipeUncheckedCreateWithoutConversationInput = {
    id?: string
    direction: boolean
    user_id: string
    property_id: string
    created_at?: Date | string
  }

  export type SwipeCreateOrConnectWithoutConversationInput = {
    where: SwipeWhereUniqueInput
    create: XOR<SwipeCreateWithoutConversationInput, SwipeUncheckedCreateWithoutConversationInput>
  }

  export type PropertyCreateWithoutConversationsInput = {
    id?: string
    title: string
    description?: string | null
    property_type: $Enums.PropertyType
    status?: $Enums.PropertyStatus
    price: number
    surface: number
    rooms: number
    parking?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    address: AddressCreateNestedOneWithoutPropertiesInput
    owner: UserCreateNestedOneWithoutPropertiesInput
    photos?: AnnouncementPhotoCreateNestedManyWithoutPropertyInput
    swipes?: SwipeCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutConversationsInput = {
    id?: string
    title: string
    description?: string | null
    property_type: $Enums.PropertyType
    status?: $Enums.PropertyStatus
    address_id: string
    price: number
    surface: number
    rooms: number
    parking?: boolean
    owner_id: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    photos?: AnnouncementPhotoUncheckedCreateNestedManyWithoutPropertyInput
    swipes?: SwipeUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutConversationsInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutConversationsInput, PropertyUncheckedCreateWithoutConversationsInput>
  }

  export type UserCreateWithoutConversations_as_tenantInput = {
    id?: string
    email: string
    password: string
    firstname: string
    lastname: string
    phone?: string | null
    bio?: string | null
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    agency?: AgencyCreateNestedOneWithoutUserInput
    tenant_profile?: TenantProfileCreateNestedOneWithoutUserInput
    properties?: PropertyCreateNestedManyWithoutOwnerInput
    swipes?: SwipeCreateNestedManyWithoutUserInput
    conversations_as_owner?: ConversationCreateNestedManyWithoutOwnerInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    profile_photos?: ProfilePhotoCreateNestedManyWithoutUserInput
    documents?: DocumentCreateNestedManyWithoutUserInput
    address: AddressCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutConversations_as_tenantInput = {
    id?: string
    email: string
    password: string
    firstname: string
    lastname: string
    phone?: string | null
    bio?: string | null
    role?: $Enums.Role
    is_active?: boolean
    address_id: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    agency?: AgencyUncheckedCreateNestedOneWithoutUserInput
    tenant_profile?: TenantProfileUncheckedCreateNestedOneWithoutUserInput
    properties?: PropertyUncheckedCreateNestedManyWithoutOwnerInput
    swipes?: SwipeUncheckedCreateNestedManyWithoutUserInput
    conversations_as_owner?: ConversationUncheckedCreateNestedManyWithoutOwnerInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    profile_photos?: ProfilePhotoUncheckedCreateNestedManyWithoutUserInput
    documents?: DocumentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutConversations_as_tenantInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutConversations_as_tenantInput, UserUncheckedCreateWithoutConversations_as_tenantInput>
  }

  export type UserCreateWithoutConversations_as_ownerInput = {
    id?: string
    email: string
    password: string
    firstname: string
    lastname: string
    phone?: string | null
    bio?: string | null
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    agency?: AgencyCreateNestedOneWithoutUserInput
    tenant_profile?: TenantProfileCreateNestedOneWithoutUserInput
    properties?: PropertyCreateNestedManyWithoutOwnerInput
    swipes?: SwipeCreateNestedManyWithoutUserInput
    conversations_as_tenant?: ConversationCreateNestedManyWithoutTenantInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    profile_photos?: ProfilePhotoCreateNestedManyWithoutUserInput
    documents?: DocumentCreateNestedManyWithoutUserInput
    address: AddressCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutConversations_as_ownerInput = {
    id?: string
    email: string
    password: string
    firstname: string
    lastname: string
    phone?: string | null
    bio?: string | null
    role?: $Enums.Role
    is_active?: boolean
    address_id: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    agency?: AgencyUncheckedCreateNestedOneWithoutUserInput
    tenant_profile?: TenantProfileUncheckedCreateNestedOneWithoutUserInput
    properties?: PropertyUncheckedCreateNestedManyWithoutOwnerInput
    swipes?: SwipeUncheckedCreateNestedManyWithoutUserInput
    conversations_as_tenant?: ConversationUncheckedCreateNestedManyWithoutTenantInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    profile_photos?: ProfilePhotoUncheckedCreateNestedManyWithoutUserInput
    documents?: DocumentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutConversations_as_ownerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutConversations_as_ownerInput, UserUncheckedCreateWithoutConversations_as_ownerInput>
  }

  export type MessageCreateWithoutConversationInput = {
    id?: string
    content: string
    read?: boolean
    created_at?: Date | string
    deleted_at?: Date | string | null
    sender: UserCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutConversationInput = {
    id?: string
    content: string
    read?: boolean
    sender_id: string
    created_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type MessageCreateOrConnectWithoutConversationInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput>
  }

  export type MessageCreateManyConversationInputEnvelope = {
    data: MessageCreateManyConversationInput | MessageCreateManyConversationInput[]
    skipDuplicates?: boolean
  }

  export type SwipeUpsertWithoutConversationInput = {
    update: XOR<SwipeUpdateWithoutConversationInput, SwipeUncheckedUpdateWithoutConversationInput>
    create: XOR<SwipeCreateWithoutConversationInput, SwipeUncheckedCreateWithoutConversationInput>
    where?: SwipeWhereInput
  }

  export type SwipeUpdateToOneWithWhereWithoutConversationInput = {
    where?: SwipeWhereInput
    data: XOR<SwipeUpdateWithoutConversationInput, SwipeUncheckedUpdateWithoutConversationInput>
  }

  export type SwipeUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    direction?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSwipesNestedInput
    property?: PropertyUpdateOneRequiredWithoutSwipesNestedInput
  }

  export type SwipeUncheckedUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    direction?: BoolFieldUpdateOperationsInput | boolean
    user_id?: StringFieldUpdateOperationsInput | string
    property_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyUpsertWithoutConversationsInput = {
    update: XOR<PropertyUpdateWithoutConversationsInput, PropertyUncheckedUpdateWithoutConversationsInput>
    create: XOR<PropertyCreateWithoutConversationsInput, PropertyUncheckedCreateWithoutConversationsInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutConversationsInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutConversationsInput, PropertyUncheckedUpdateWithoutConversationsInput>
  }

  export type PropertyUpdateWithoutConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    property_type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    status?: EnumPropertyStatusFieldUpdateOperationsInput | $Enums.PropertyStatus
    price?: IntFieldUpdateOperationsInput | number
    surface?: IntFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    parking?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: AddressUpdateOneRequiredWithoutPropertiesNestedInput
    owner?: UserUpdateOneRequiredWithoutPropertiesNestedInput
    photos?: AnnouncementPhotoUpdateManyWithoutPropertyNestedInput
    swipes?: SwipeUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    property_type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    status?: EnumPropertyStatusFieldUpdateOperationsInput | $Enums.PropertyStatus
    address_id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    surface?: IntFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    parking?: BoolFieldUpdateOperationsInput | boolean
    owner_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photos?: AnnouncementPhotoUncheckedUpdateManyWithoutPropertyNestedInput
    swipes?: SwipeUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type UserUpsertWithoutConversations_as_tenantInput = {
    update: XOR<UserUpdateWithoutConversations_as_tenantInput, UserUncheckedUpdateWithoutConversations_as_tenantInput>
    create: XOR<UserCreateWithoutConversations_as_tenantInput, UserUncheckedCreateWithoutConversations_as_tenantInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutConversations_as_tenantInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutConversations_as_tenantInput, UserUncheckedUpdateWithoutConversations_as_tenantInput>
  }

  export type UserUpdateWithoutConversations_as_tenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agency?: AgencyUpdateOneWithoutUserNestedInput
    tenant_profile?: TenantProfileUpdateOneWithoutUserNestedInput
    properties?: PropertyUpdateManyWithoutOwnerNestedInput
    swipes?: SwipeUpdateManyWithoutUserNestedInput
    conversations_as_owner?: ConversationUpdateManyWithoutOwnerNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    profile_photos?: ProfilePhotoUpdateManyWithoutUserNestedInput
    documents?: DocumentUpdateManyWithoutUserNestedInput
    address?: AddressUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutConversations_as_tenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    address_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agency?: AgencyUncheckedUpdateOneWithoutUserNestedInput
    tenant_profile?: TenantProfileUncheckedUpdateOneWithoutUserNestedInput
    properties?: PropertyUncheckedUpdateManyWithoutOwnerNestedInput
    swipes?: SwipeUncheckedUpdateManyWithoutUserNestedInput
    conversations_as_owner?: ConversationUncheckedUpdateManyWithoutOwnerNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    profile_photos?: ProfilePhotoUncheckedUpdateManyWithoutUserNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutConversations_as_ownerInput = {
    update: XOR<UserUpdateWithoutConversations_as_ownerInput, UserUncheckedUpdateWithoutConversations_as_ownerInput>
    create: XOR<UserCreateWithoutConversations_as_ownerInput, UserUncheckedCreateWithoutConversations_as_ownerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutConversations_as_ownerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutConversations_as_ownerInput, UserUncheckedUpdateWithoutConversations_as_ownerInput>
  }

  export type UserUpdateWithoutConversations_as_ownerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agency?: AgencyUpdateOneWithoutUserNestedInput
    tenant_profile?: TenantProfileUpdateOneWithoutUserNestedInput
    properties?: PropertyUpdateManyWithoutOwnerNestedInput
    swipes?: SwipeUpdateManyWithoutUserNestedInput
    conversations_as_tenant?: ConversationUpdateManyWithoutTenantNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    profile_photos?: ProfilePhotoUpdateManyWithoutUserNestedInput
    documents?: DocumentUpdateManyWithoutUserNestedInput
    address?: AddressUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutConversations_as_ownerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    address_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agency?: AgencyUncheckedUpdateOneWithoutUserNestedInput
    tenant_profile?: TenantProfileUncheckedUpdateOneWithoutUserNestedInput
    properties?: PropertyUncheckedUpdateManyWithoutOwnerNestedInput
    swipes?: SwipeUncheckedUpdateManyWithoutUserNestedInput
    conversations_as_tenant?: ConversationUncheckedUpdateManyWithoutTenantNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    profile_photos?: ProfilePhotoUncheckedUpdateManyWithoutUserNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MessageUpsertWithWhereUniqueWithoutConversationInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutConversationInput, MessageUncheckedUpdateWithoutConversationInput>
    create: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutConversationInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutConversationInput, MessageUncheckedUpdateWithoutConversationInput>
  }

  export type MessageUpdateManyWithWhereWithoutConversationInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutConversationInput>
  }

  export type ConversationCreateWithoutMessagesInput = {
    id?: string
    created_at?: Date | string
    swipe: SwipeCreateNestedOneWithoutConversationInput
    property: PropertyCreateNestedOneWithoutConversationsInput
    tenant: UserCreateNestedOneWithoutConversations_as_tenantInput
    owner: UserCreateNestedOneWithoutConversations_as_ownerInput
  }

  export type ConversationUncheckedCreateWithoutMessagesInput = {
    id?: string
    swipe_id: string
    property_id: string
    tenant_id: string
    owner_id: string
    created_at?: Date | string
  }

  export type ConversationCreateOrConnectWithoutMessagesInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
  }

  export type UserCreateWithoutMessagesInput = {
    id?: string
    email: string
    password: string
    firstname: string
    lastname: string
    phone?: string | null
    bio?: string | null
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    agency?: AgencyCreateNestedOneWithoutUserInput
    tenant_profile?: TenantProfileCreateNestedOneWithoutUserInput
    properties?: PropertyCreateNestedManyWithoutOwnerInput
    swipes?: SwipeCreateNestedManyWithoutUserInput
    conversations_as_tenant?: ConversationCreateNestedManyWithoutTenantInput
    conversations_as_owner?: ConversationCreateNestedManyWithoutOwnerInput
    profile_photos?: ProfilePhotoCreateNestedManyWithoutUserInput
    documents?: DocumentCreateNestedManyWithoutUserInput
    address: AddressCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutMessagesInput = {
    id?: string
    email: string
    password: string
    firstname: string
    lastname: string
    phone?: string | null
    bio?: string | null
    role?: $Enums.Role
    is_active?: boolean
    address_id: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    agency?: AgencyUncheckedCreateNestedOneWithoutUserInput
    tenant_profile?: TenantProfileUncheckedCreateNestedOneWithoutUserInput
    properties?: PropertyUncheckedCreateNestedManyWithoutOwnerInput
    swipes?: SwipeUncheckedCreateNestedManyWithoutUserInput
    conversations_as_tenant?: ConversationUncheckedCreateNestedManyWithoutTenantInput
    conversations_as_owner?: ConversationUncheckedCreateNestedManyWithoutOwnerInput
    profile_photos?: ProfilePhotoUncheckedCreateNestedManyWithoutUserInput
    documents?: DocumentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
  }

  export type ConversationUpsertWithoutMessagesInput = {
    update: XOR<ConversationUpdateWithoutMessagesInput, ConversationUncheckedUpdateWithoutMessagesInput>
    create: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
    where?: ConversationWhereInput
  }

  export type ConversationUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ConversationWhereInput
    data: XOR<ConversationUpdateWithoutMessagesInput, ConversationUncheckedUpdateWithoutMessagesInput>
  }

  export type ConversationUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    swipe?: SwipeUpdateOneRequiredWithoutConversationNestedInput
    property?: PropertyUpdateOneRequiredWithoutConversationsNestedInput
    tenant?: UserUpdateOneRequiredWithoutConversations_as_tenantNestedInput
    owner?: UserUpdateOneRequiredWithoutConversations_as_ownerNestedInput
  }

  export type ConversationUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    swipe_id?: StringFieldUpdateOperationsInput | string
    property_id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
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
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agency?: AgencyUpdateOneWithoutUserNestedInput
    tenant_profile?: TenantProfileUpdateOneWithoutUserNestedInput
    properties?: PropertyUpdateManyWithoutOwnerNestedInput
    swipes?: SwipeUpdateManyWithoutUserNestedInput
    conversations_as_tenant?: ConversationUpdateManyWithoutTenantNestedInput
    conversations_as_owner?: ConversationUpdateManyWithoutOwnerNestedInput
    profile_photos?: ProfilePhotoUpdateManyWithoutUserNestedInput
    documents?: DocumentUpdateManyWithoutUserNestedInput
    address?: AddressUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    address_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agency?: AgencyUncheckedUpdateOneWithoutUserNestedInput
    tenant_profile?: TenantProfileUncheckedUpdateOneWithoutUserNestedInput
    properties?: PropertyUncheckedUpdateManyWithoutOwnerNestedInput
    swipes?: SwipeUncheckedUpdateManyWithoutUserNestedInput
    conversations_as_tenant?: ConversationUncheckedUpdateManyWithoutTenantNestedInput
    conversations_as_owner?: ConversationUncheckedUpdateManyWithoutOwnerNestedInput
    profile_photos?: ProfilePhotoUncheckedUpdateManyWithoutUserNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAddressInput = {
    id?: string
    email: string
    password: string
    firstname: string
    lastname: string
    phone?: string | null
    bio?: string | null
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    agency?: AgencyCreateNestedOneWithoutUserInput
    tenant_profile?: TenantProfileCreateNestedOneWithoutUserInput
    properties?: PropertyCreateNestedManyWithoutOwnerInput
    swipes?: SwipeCreateNestedManyWithoutUserInput
    conversations_as_tenant?: ConversationCreateNestedManyWithoutTenantInput
    conversations_as_owner?: ConversationCreateNestedManyWithoutOwnerInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    profile_photos?: ProfilePhotoCreateNestedManyWithoutUserInput
    documents?: DocumentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAddressInput = {
    id?: string
    email: string
    password: string
    firstname: string
    lastname: string
    phone?: string | null
    bio?: string | null
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    agency?: AgencyUncheckedCreateNestedOneWithoutUserInput
    tenant_profile?: TenantProfileUncheckedCreateNestedOneWithoutUserInput
    properties?: PropertyUncheckedCreateNestedManyWithoutOwnerInput
    swipes?: SwipeUncheckedCreateNestedManyWithoutUserInput
    conversations_as_tenant?: ConversationUncheckedCreateNestedManyWithoutTenantInput
    conversations_as_owner?: ConversationUncheckedCreateNestedManyWithoutOwnerInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    profile_photos?: ProfilePhotoUncheckedCreateNestedManyWithoutUserInput
    documents?: DocumentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAddressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput>
  }

  export type UserCreateManyAddressInputEnvelope = {
    data: UserCreateManyAddressInput | UserCreateManyAddressInput[]
    skipDuplicates?: boolean
  }

  export type AgencyCreateWithoutAddressInput = {
    id?: string
    nom_agence: string
    numero_tva?: string | null
    numero_bce?: string | null
    site_web?: string | null
    created_at?: Date | string
    user: UserCreateNestedOneWithoutAgencyInput
  }

  export type AgencyUncheckedCreateWithoutAddressInput = {
    id?: string
    nom_agence: string
    numero_tva?: string | null
    numero_bce?: string | null
    site_web?: string | null
    user_id: string
    created_at?: Date | string
  }

  export type AgencyCreateOrConnectWithoutAddressInput = {
    where: AgencyWhereUniqueInput
    create: XOR<AgencyCreateWithoutAddressInput, AgencyUncheckedCreateWithoutAddressInput>
  }

  export type AgencyCreateManyAddressInputEnvelope = {
    data: AgencyCreateManyAddressInput | AgencyCreateManyAddressInput[]
    skipDuplicates?: boolean
  }

  export type PropertyCreateWithoutAddressInput = {
    id?: string
    title: string
    description?: string | null
    property_type: $Enums.PropertyType
    status?: $Enums.PropertyStatus
    price: number
    surface: number
    rooms: number
    parking?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    owner: UserCreateNestedOneWithoutPropertiesInput
    photos?: AnnouncementPhotoCreateNestedManyWithoutPropertyInput
    swipes?: SwipeCreateNestedManyWithoutPropertyInput
    conversations?: ConversationCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutAddressInput = {
    id?: string
    title: string
    description?: string | null
    property_type: $Enums.PropertyType
    status?: $Enums.PropertyStatus
    price: number
    surface: number
    rooms: number
    parking?: boolean
    owner_id: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    photos?: AnnouncementPhotoUncheckedCreateNestedManyWithoutPropertyInput
    swipes?: SwipeUncheckedCreateNestedManyWithoutPropertyInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutAddressInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutAddressInput, PropertyUncheckedCreateWithoutAddressInput>
  }

  export type PropertyCreateManyAddressInputEnvelope = {
    data: PropertyCreateManyAddressInput | PropertyCreateManyAddressInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutAddressInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutAddressInput, UserUncheckedUpdateWithoutAddressInput>
    create: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput>
  }

  export type UserUpdateWithWhereUniqueWithoutAddressInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutAddressInput, UserUncheckedUpdateWithoutAddressInput>
  }

  export type UserUpdateManyWithWhereWithoutAddressInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutAddressInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstname?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    is_active?: BoolFilter<"User"> | boolean
    address_id?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    deleted_at?: DateTimeNullableFilter<"User"> | Date | string | null
  }

  export type AgencyUpsertWithWhereUniqueWithoutAddressInput = {
    where: AgencyWhereUniqueInput
    update: XOR<AgencyUpdateWithoutAddressInput, AgencyUncheckedUpdateWithoutAddressInput>
    create: XOR<AgencyCreateWithoutAddressInput, AgencyUncheckedCreateWithoutAddressInput>
  }

  export type AgencyUpdateWithWhereUniqueWithoutAddressInput = {
    where: AgencyWhereUniqueInput
    data: XOR<AgencyUpdateWithoutAddressInput, AgencyUncheckedUpdateWithoutAddressInput>
  }

  export type AgencyUpdateManyWithWhereWithoutAddressInput = {
    where: AgencyScalarWhereInput
    data: XOR<AgencyUpdateManyMutationInput, AgencyUncheckedUpdateManyWithoutAddressInput>
  }

  export type AgencyScalarWhereInput = {
    AND?: AgencyScalarWhereInput | AgencyScalarWhereInput[]
    OR?: AgencyScalarWhereInput[]
    NOT?: AgencyScalarWhereInput | AgencyScalarWhereInput[]
    id?: StringFilter<"Agency"> | string
    nom_agence?: StringFilter<"Agency"> | string
    numero_tva?: StringNullableFilter<"Agency"> | string | null
    numero_bce?: StringNullableFilter<"Agency"> | string | null
    site_web?: StringNullableFilter<"Agency"> | string | null
    address_id?: StringFilter<"Agency"> | string
    user_id?: StringFilter<"Agency"> | string
    created_at?: DateTimeFilter<"Agency"> | Date | string
  }

  export type PropertyUpsertWithWhereUniqueWithoutAddressInput = {
    where: PropertyWhereUniqueInput
    update: XOR<PropertyUpdateWithoutAddressInput, PropertyUncheckedUpdateWithoutAddressInput>
    create: XOR<PropertyCreateWithoutAddressInput, PropertyUncheckedCreateWithoutAddressInput>
  }

  export type PropertyUpdateWithWhereUniqueWithoutAddressInput = {
    where: PropertyWhereUniqueInput
    data: XOR<PropertyUpdateWithoutAddressInput, PropertyUncheckedUpdateWithoutAddressInput>
  }

  export type PropertyUpdateManyWithWhereWithoutAddressInput = {
    where: PropertyScalarWhereInput
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyWithoutAddressInput>
  }

  export type PropertyCreateManyOwnerInput = {
    id?: string
    title: string
    description?: string | null
    property_type: $Enums.PropertyType
    status?: $Enums.PropertyStatus
    address_id: string
    price: number
    surface: number
    rooms: number
    parking?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type SwipeCreateManyUserInput = {
    id?: string
    direction: boolean
    property_id: string
    created_at?: Date | string
  }

  export type ConversationCreateManyTenantInput = {
    id?: string
    swipe_id: string
    property_id: string
    owner_id: string
    created_at?: Date | string
  }

  export type ConversationCreateManyOwnerInput = {
    id?: string
    swipe_id: string
    property_id: string
    tenant_id: string
    created_at?: Date | string
  }

  export type MessageCreateManySenderInput = {
    id?: string
    content: string
    read?: boolean
    conversation_id: string
    created_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type ProfilePhotoCreateManyUserInput = {
    id?: string
    url: string
    uploaded_at?: Date | string
  }

  export type DocumentCreateManyUserInput = {
    id?: string
    url: string
    label?: string | null
    uploaded_at?: Date | string
  }

  export type PropertyUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    property_type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    status?: EnumPropertyStatusFieldUpdateOperationsInput | $Enums.PropertyStatus
    price?: IntFieldUpdateOperationsInput | number
    surface?: IntFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    parking?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: AddressUpdateOneRequiredWithoutPropertiesNestedInput
    photos?: AnnouncementPhotoUpdateManyWithoutPropertyNestedInput
    swipes?: SwipeUpdateManyWithoutPropertyNestedInput
    conversations?: ConversationUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    property_type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    status?: EnumPropertyStatusFieldUpdateOperationsInput | $Enums.PropertyStatus
    address_id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    surface?: IntFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    parking?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photos?: AnnouncementPhotoUncheckedUpdateManyWithoutPropertyNestedInput
    swipes?: SwipeUncheckedUpdateManyWithoutPropertyNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    property_type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    status?: EnumPropertyStatusFieldUpdateOperationsInput | $Enums.PropertyStatus
    address_id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    surface?: IntFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    parking?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SwipeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    direction?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutSwipesNestedInput
    conversation?: ConversationUpdateOneWithoutSwipeNestedInput
  }

  export type SwipeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    direction?: BoolFieldUpdateOperationsInput | boolean
    property_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: ConversationUncheckedUpdateOneWithoutSwipeNestedInput
  }

  export type SwipeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    direction?: BoolFieldUpdateOperationsInput | boolean
    property_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    swipe?: SwipeUpdateOneRequiredWithoutConversationNestedInput
    property?: PropertyUpdateOneRequiredWithoutConversationsNestedInput
    owner?: UserUpdateOneRequiredWithoutConversations_as_ownerNestedInput
    messages?: MessageUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    swipe_id?: StringFieldUpdateOperationsInput | string
    property_id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    swipe_id?: StringFieldUpdateOperationsInput | string
    property_id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    swipe?: SwipeUpdateOneRequiredWithoutConversationNestedInput
    property?: PropertyUpdateOneRequiredWithoutConversationsNestedInput
    tenant?: UserUpdateOneRequiredWithoutConversations_as_tenantNestedInput
    messages?: MessageUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    swipe_id?: StringFieldUpdateOperationsInput | string
    property_id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    swipe_id?: StringFieldUpdateOperationsInput | string
    property_id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    conversation?: ConversationUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    conversation_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MessageUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    conversation_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProfilePhotoUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfilePhotoUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfilePhotoUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementPhotoCreateManyPropertyInput = {
    id?: string
    url: string
    order?: number
    uploaded_at?: Date | string
  }

  export type SwipeCreateManyPropertyInput = {
    id?: string
    direction: boolean
    user_id: string
    created_at?: Date | string
  }

  export type ConversationCreateManyPropertyInput = {
    id?: string
    swipe_id: string
    tenant_id: string
    owner_id: string
    created_at?: Date | string
  }

  export type AnnouncementPhotoUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementPhotoUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementPhotoUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SwipeUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    direction?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSwipesNestedInput
    conversation?: ConversationUpdateOneWithoutSwipeNestedInput
  }

  export type SwipeUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    direction?: BoolFieldUpdateOperationsInput | boolean
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: ConversationUncheckedUpdateOneWithoutSwipeNestedInput
  }

  export type SwipeUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    direction?: BoolFieldUpdateOperationsInput | boolean
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    swipe?: SwipeUpdateOneRequiredWithoutConversationNestedInput
    tenant?: UserUpdateOneRequiredWithoutConversations_as_tenantNestedInput
    owner?: UserUpdateOneRequiredWithoutConversations_as_ownerNestedInput
    messages?: MessageUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    swipe_id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    swipe_id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyConversationInput = {
    id?: string
    content: string
    read?: boolean
    sender_id: string
    created_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type MessageUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    sender_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MessageUncheckedUpdateManyWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    sender_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateManyAddressInput = {
    id?: string
    email: string
    password: string
    firstname: string
    lastname: string
    phone?: string | null
    bio?: string | null
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type AgencyCreateManyAddressInput = {
    id?: string
    nom_agence: string
    numero_tva?: string | null
    numero_bce?: string | null
    site_web?: string | null
    user_id: string
    created_at?: Date | string
  }

  export type PropertyCreateManyAddressInput = {
    id?: string
    title: string
    description?: string | null
    property_type: $Enums.PropertyType
    status?: $Enums.PropertyStatus
    price: number
    surface: number
    rooms: number
    parking?: boolean
    owner_id: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type UserUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agency?: AgencyUpdateOneWithoutUserNestedInput
    tenant_profile?: TenantProfileUpdateOneWithoutUserNestedInput
    properties?: PropertyUpdateManyWithoutOwnerNestedInput
    swipes?: SwipeUpdateManyWithoutUserNestedInput
    conversations_as_tenant?: ConversationUpdateManyWithoutTenantNestedInput
    conversations_as_owner?: ConversationUpdateManyWithoutOwnerNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    profile_photos?: ProfilePhotoUpdateManyWithoutUserNestedInput
    documents?: DocumentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agency?: AgencyUncheckedUpdateOneWithoutUserNestedInput
    tenant_profile?: TenantProfileUncheckedUpdateOneWithoutUserNestedInput
    properties?: PropertyUncheckedUpdateManyWithoutOwnerNestedInput
    swipes?: SwipeUncheckedUpdateManyWithoutUserNestedInput
    conversations_as_tenant?: ConversationUncheckedUpdateManyWithoutTenantNestedInput
    conversations_as_owner?: ConversationUncheckedUpdateManyWithoutOwnerNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    profile_photos?: ProfilePhotoUncheckedUpdateManyWithoutUserNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AgencyUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom_agence?: StringFieldUpdateOperationsInput | string
    numero_tva?: NullableStringFieldUpdateOperationsInput | string | null
    numero_bce?: NullableStringFieldUpdateOperationsInput | string | null
    site_web?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAgencyNestedInput
  }

  export type AgencyUncheckedUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom_agence?: StringFieldUpdateOperationsInput | string
    numero_tva?: NullableStringFieldUpdateOperationsInput | string | null
    numero_bce?: NullableStringFieldUpdateOperationsInput | string | null
    site_web?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgencyUncheckedUpdateManyWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom_agence?: StringFieldUpdateOperationsInput | string
    numero_tva?: NullableStringFieldUpdateOperationsInput | string | null
    numero_bce?: NullableStringFieldUpdateOperationsInput | string | null
    site_web?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    property_type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    status?: EnumPropertyStatusFieldUpdateOperationsInput | $Enums.PropertyStatus
    price?: IntFieldUpdateOperationsInput | number
    surface?: IntFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    parking?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner?: UserUpdateOneRequiredWithoutPropertiesNestedInput
    photos?: AnnouncementPhotoUpdateManyWithoutPropertyNestedInput
    swipes?: SwipeUpdateManyWithoutPropertyNestedInput
    conversations?: ConversationUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    property_type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    status?: EnumPropertyStatusFieldUpdateOperationsInput | $Enums.PropertyStatus
    price?: IntFieldUpdateOperationsInput | number
    surface?: IntFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    parking?: BoolFieldUpdateOperationsInput | boolean
    owner_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photos?: AnnouncementPhotoUncheckedUpdateManyWithoutPropertyNestedInput
    swipes?: SwipeUncheckedUpdateManyWithoutPropertyNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateManyWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    property_type?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    status?: EnumPropertyStatusFieldUpdateOperationsInput | $Enums.PropertyStatus
    price?: IntFieldUpdateOperationsInput | number
    surface?: IntFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    parking?: BoolFieldUpdateOperationsInput | boolean
    owner_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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