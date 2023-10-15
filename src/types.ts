import store from './redux';

export type GlobalState = ReturnType<typeof store.getState>;

export type NewsIBGE = {
  count: number,
  page: number,
  totalPages: number,
  nextPage: number,
  previousPage: number,
  showingFrom: number,
  showingTo: number,
  items: [
    {
      id: number,
      tipo: string,
      titulo: string,
      introducao: string,
      data_publicacao: string,
      produto_id: number,
      produtos: string,
      editorias: string,
      imagens: string,
      produtos_relacionados: string,
      destaque: boolean,
      link: string,
    },
  ]
};
