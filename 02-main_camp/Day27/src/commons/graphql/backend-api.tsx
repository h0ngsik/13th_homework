import { gql } from '@apollo/client'

export const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!) {
        createBoard(createBoardInput: $createBoardInput) {
          _id
          writer
          title
          contents
          createdAt
        }
    }
`;

export const FETCH_BOARD = gql`
query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
      createdAt
    }
  }
`;

export const UPDATE_BOARD = gql`
mutation updateBoard(
    $updateBoardInput: UpdateBoardInput!
    $password: String
    $boardId: ID!
    ) {
    updateBoard(
      updateBoardInput: $updateBoardInput
      password: $password
      boardId: $boardId
      ) {
      _id
    }
  }
`

export const DELETE_BOARD = gql`
    mutation deleteBoard($id: ID!) {
        deleteBoard(boardId: $id)
    }
`;

export const FETCH_BOARDS = gql`
    query {
        fetchBoards {
            _id
            writer
            title
            createdAt
        }
    }
`;

