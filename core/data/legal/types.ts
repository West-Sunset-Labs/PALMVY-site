export type LegalSection = {
  heading: string;
  paragraphs: string[];
};

export type LegalDocument = {
  title: string;
  description: string;
  /** Data da última revisão, no formato AAAA-MM-DD. */
  updatedAt: string;
  /**
   * Enquanto for true, a página mostra um aviso de revisão e não é indexada
   * pelos buscadores. Troque para false quando o texto for validado.
   */
  isDraft: boolean;
  sections: LegalSection[];
};
