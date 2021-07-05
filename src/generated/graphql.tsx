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
  query?: Maybe<SessionQueryInput>;
  set: SessionUpdateInput;
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
  query?: Maybe<SessionQueryInput>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SessionSortByInput>;
};

export type Session = {
  __typename?: 'Session';
  _id?: Maybe<Scalars['ObjectId']>;
  name?: Maybe<Scalars['String']>;
  teams?: Maybe<Array<Maybe<SessionTeam>>>;
};

export type SessionInsertInput = {
  teams?: Maybe<Array<Maybe<SessionTeamInsertInput>>>;
  _id?: Maybe<Scalars['ObjectId']>;
  name?: Maybe<Scalars['String']>;
};

export type SessionQueryInput = {
  name_gt?: Maybe<Scalars['String']>;
  name_lt?: Maybe<Scalars['String']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  OR?: Maybe<Array<SessionQueryInput>>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  AND?: Maybe<Array<SessionQueryInput>>;
  teams_in?: Maybe<Array<Maybe<SessionTeamQueryInput>>>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  teams_nin?: Maybe<Array<Maybe<SessionTeamQueryInput>>>;
  _id?: Maybe<Scalars['ObjectId']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  name_gte?: Maybe<Scalars['String']>;
  teams?: Maybe<Array<Maybe<SessionTeamQueryInput>>>;
  name_exists?: Maybe<Scalars['Boolean']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_ne?: Maybe<Scalars['String']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  name_lte?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  teams_exists?: Maybe<Scalars['Boolean']>;
};

export enum SessionSortByInput {
  NameDesc = 'NAME_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  NameAsc = 'NAME_ASC'
}

export type SessionTeam = {
  __typename?: 'SessionTeam';
  school?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Int']>;
};

export type SessionTeamInsertInput = {
  school?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Int']>;
};

export type SessionTeamQueryInput = {
  OR?: Maybe<Array<SessionTeamQueryInput>>;
  school_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  score?: Maybe<Scalars['Int']>;
  score_exists?: Maybe<Scalars['Boolean']>;
  school_gt?: Maybe<Scalars['String']>;
  score_lt?: Maybe<Scalars['Int']>;
  school_gte?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<SessionTeamQueryInput>>;
  score_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  school_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  score_lte?: Maybe<Scalars['Int']>;
  school_exists?: Maybe<Scalars['Boolean']>;
  score_gte?: Maybe<Scalars['Int']>;
  score_ne?: Maybe<Scalars['Int']>;
  score_gt?: Maybe<Scalars['Int']>;
  school_lte?: Maybe<Scalars['String']>;
  school_lt?: Maybe<Scalars['String']>;
  score_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  school?: Maybe<Scalars['String']>;
  school_ne?: Maybe<Scalars['String']>;
};

export type SessionTeamUpdateInput = {
  school_unset?: Maybe<Scalars['Boolean']>;
  score?: Maybe<Scalars['Int']>;
  score_inc?: Maybe<Scalars['Int']>;
  score_unset?: Maybe<Scalars['Boolean']>;
  school?: Maybe<Scalars['String']>;
};

export type SessionUpdateInput = {
  teams?: Maybe<Array<Maybe<SessionTeamUpdateInput>>>;
  teams_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_unset?: Maybe<Scalars['Boolean']>;
};

export type UpdateManyPayload = {
  __typename?: 'UpdateManyPayload';
  matchedCount: Scalars['Int'];
  modifiedCount: Scalars['Int'];
};

export type SessionByIdQueryVariables = Exact<{
  id?: Maybe<Scalars['ObjectId']>;
}>;


export type SessionByIdQuery = (
  { __typename?: 'Query' }
  & { session?: Maybe<(
    { __typename?: 'Session' }
    & Pick<Session, '_id' | 'name'>
    & { teams?: Maybe<Array<Maybe<(
      { __typename?: 'SessionTeam' }
      & Pick<SessionTeam, 'school' | 'score'>
    )>>> }
  )> }
);

export type SessionSelectorQueryVariables = Exact<{ [key: string]: never; }>;


export type SessionSelectorQuery = (
  { __typename?: 'Query' }
  & { sessions: Array<Maybe<(
    { __typename?: 'Session' }
    & Pick<Session, '_id' | 'name'>
  )>> }
);


export const SessionByIdDocument = gql`
    query SessionById($id: ObjectId) {
  session(query: {_id: $id}) {
    _id
    name
    teams {
      school
      score
    }
  }
}
    `;

/**
 * __useSessionByIdQuery__
 *
 * To run a query within a React component, call `useSessionByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useSessionByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSessionByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSessionByIdQuery(baseOptions?: Apollo.QueryHookOptions<SessionByIdQuery, SessionByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SessionByIdQuery, SessionByIdQueryVariables>(SessionByIdDocument, options);
      }
export function useSessionByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SessionByIdQuery, SessionByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SessionByIdQuery, SessionByIdQueryVariables>(SessionByIdDocument, options);
        }
export type SessionByIdQueryHookResult = ReturnType<typeof useSessionByIdQuery>;
export type SessionByIdLazyQueryHookResult = ReturnType<typeof useSessionByIdLazyQuery>;
export type SessionByIdQueryResult = Apollo.QueryResult<SessionByIdQuery, SessionByIdQueryVariables>;
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