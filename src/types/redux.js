export type ActionsType
  = { type: 'CHANGE_SIDEBAR_OPEN_STATE', open: boolean}
  | { type: 'SET_DATA',
      dataName: string,
      dataObj: any,
      dataOrder:  Array<string>,
      outOfData: boolean,
    }
  | { type: 'ADD_DATA',
      dataName: string,
      dataObj: any,
      dataOrder:  Array<string>,
      outOfData: boolean,
    }
  | { type: 'SET_DATA_LOADING_STATUS', 
      dataName: string,
      loading: boolean
    }
  | { type: 'SELECT_DATA_ITEM',
      dataName: string,
      open: boolean
    }
  | { type: 'SET_DATA_SEARCH_FIELD',
      dataName: string,
      params: {[queryArg: string]: string}
    }
  | { type: 'SET_DATA_FIRST_ITEM',
      dataName: string,
      item: object
    }

