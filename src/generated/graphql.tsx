import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ObjectId: any;
};

export type DeleteManyPayload = {
  __typename?: 'DeleteManyPayload';
  deletedCount: Scalars['Int'];
};

export type InsertManyPayload = {
  __typename?: 'InsertManyPayload';
  insertedIds: Array<Maybe<Scalars['ObjectId']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteManySessions?: Maybe<DeleteManyPayload>;
  deleteOneSession?: Maybe<Session>;
  insertManySessions?: Maybe<InsertManyPayload>;
  insertOneSession?: Maybe<Session>;
  replaceOneSession?: Maybe<Session>;
  updateManySessions?: Maybe<UpdateManyPayload>;
  updateOneSession?: Maybe<Session>;
  upsertOneSession?: Maybe<Session>;
};


export type MutationDeleteManySessionsArgs = {
  query?: Maybe<SessionQueryInput>;
};


export type MutationDeleteOneSessionArgs = {
  query: SessionQueryInput;
};


export type MutationInsertManySessionsArgs = {
  data: Array<SessionInsertInput>;
};


export type MutationInsertOneSessionArgs = {
  data: SessionInsertInput;
};


export type MutationReplaceOneSessionArgs = {
  query?: Maybe<SessionQueryInput>;
  data: SessionInsertInput;
};


export type MutationUpdateManySessionsArgs = {
  set: SessionUpdateInput;
  query?: Maybe<SessionQueryInput>;
};


export type MutationUpdateOneSessionArgs = {
  query?: Maybe<SessionQueryInput>;
  set: SessionUpdateInput;
};


export type MutationUpsertOneSessionArgs = {
  query?: Maybe<SessionQueryInput>;
  data: SessionInsertInput;
};


export type Query = {
  __typename?: 'Query';
  session?: Maybe<Session>;
  sessions: Array<Maybe<Session>>;
};


export type QuerySessionArgs = {
  query?: Maybe<SessionQueryInput>;
};


export type QuerySessionsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SessionSortByInput>;
  query?: Maybe<SessionQueryInput>;
};

export type Session = {
  __typename?: 'Session';
  _id?: Maybe<Scalars['ObjectId']>;
  name?: Maybe<Scalars['String']>;
  teams?: Maybe<Array<Maybe<SessionTeam>>>;
};

export type SessionInsertInput = {
  _id?: Maybe<Scalars['ObjectId']>;
  name?: Maybe<Scalars['String']>;
  teams?: Maybe<Array<Maybe<SessionTeamInsertInput>>>;
};

export type SessionQueryInput = {
  OR?: Maybe<Array<SessionQueryInput>>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  name_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['ObjectId']>;
  name_exists?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  teams_in?: Maybe<Array<Maybe<SessionTeamQueryInput>>>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  name_lte?: Maybe<Scalars['String']>;
  teams?: Maybe<Array<Maybe<SessionTeamQueryInput>>>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  teams_exists?: Maybe<Scalars['Boolean']>;
  name_gte?: Maybe<Scalars['String']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  teams_nin?: Maybe<Array<Maybe<SessionTeamQueryInput>>>;
  AND?: Maybe<Array<SessionQueryInput>>;
  name_lt?: Maybe<Scalars['String']>;
  name_ne?: Maybe<Scalars['String']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
};

export enum SessionSortByInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC'
}

export type SessionTeam = {
  __typename?: 'SessionTeam';
  school?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Int']>;
};

export type SessionTeamInsertInput = {
  score?: Maybe<Scalars['Int']>;
  school?: Maybe<Scalars['String']>;
};

export type SessionTeamQueryInput = {
  score_lte?: Maybe<Scalars['Int']>;
  school_gte?: Maybe<Scalars['String']>;
  school_lte?: Maybe<Scalars['String']>;
  school_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  OR?: Maybe<Array<SessionTeamQueryInput>>;
  school_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  school_lt?: Maybe<Scalars['String']>;
  score_gt?: Maybe<Scalars['Int']>;
  score_lt?: Maybe<Scalars['Int']>;
  school_exists?: Maybe<Scalars['Boolean']>;
  school_ne?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<SessionTeamQueryInput>>;
  score_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  score_exists?: Maybe<Scalars['Boolean']>;
  school?: Maybe<Scalars['String']>;
  score_ne?: Maybe<Scalars['Int']>;
  score_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  score?: Maybe<Scalars['Int']>;
  score_gte?: Maybe<Scalars['Int']>;
  school_gt?: Maybe<Scalars['String']>;
};

export type SessionTeamUpdateInput = {
  school_unset?: Maybe<Scalars['Boolean']>;
  score?: Maybe<Scalars['Int']>;
  score_inc?: Maybe<Scalars['Int']>;
  score_unset?: Maybe<Scalars['Boolean']>;
  school?: Maybe<Scalars['String']>;
};

export type SessionUpdateInput = {
  teams_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_unset?: Maybe<Scalars['Boolean']>;
  teams?: Maybe<Array<Maybe<SessionTeamUpdateInput>>>;
};

export type UpdateManyPayload = {
  __typename?: 'UpdateManyPayload';
  matchedCount: Scalars['Int'];
  modifiedCount: Scalars['Int'];
};

export type SessionSelectorQueryVariables = Exact<{ [key: string]: never; }>;


export type SessionSelectorQuery = (
  { __typename?: 'Query' }
  & { sessions: Array<Maybe<(
    { __typename?: 'Session' }
    & Pick<Session, '_id' | 'name'>
  )>> }
);


export const SessionSelectorDocument = gql`
    query SessionSelector {
  sessions {
    _id
    name
  }
}
    `;

/**
 * __useSessionSelectorQuery__
 *
 * To run a query within a React component, call `useSessionSelectorQuery` and pass it any options that fit your needs.
 * When your component renders, `useSessionSelectorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSessionSelectorQuery({
 *   variables: {
 *   },
 * });
 */
export function useSessionSelectorQuery(baseOptions?: Apollo.QueryHookOptions<SessionSelectorQuery, SessionSelectorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SessionSelectorQuery, SessionSelectorQueryVariables>(SessionSelectorDocument, options);
      }
export function useSessionSelectorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SessionSelectorQuery, SessionSelectorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SessionSelectorQuery, SessionSelectorQueryVariables>(SessionSelectorDocument, options);
        }
export type SessionSelectorQueryHookResult = ReturnType<typeof useSessionSelectorQuery>;
export type SessionSelectorLazyQueryHookResult = ReturnType<typeof useSessionSelectorLazyQuery>;
export type SessionSelectorQueryResult = Apollo.QueryResult<SessionSelectorQuery, SessionSelectorQueryVariables>;