import { CONTACT_EMAIL } from '@/core/data/contact';
import type { LegalDocument } from '@/core/data/legal/types';

// RASCUNHO para revisão jurídica. Para publicar a versão final, substitua o
// conteúdo deste arquivo mantendo o formato de `LegalDocument` e troque
// `isDraft` para false.
export const termsOfUse: LegalDocument = {
  title: 'Termos de Uso',
  description: 'Condições para uso do site palmvy.com.br.',
  updatedAt: '2026-09-30',
  isDraft: true,
  sections: [
    {
      heading: 'Aceitação',
      paragraphs: [
        'Ao acessar o site palmvy.com.br, você concorda com estes termos. Se não concordar, pedimos que não utilize o site.',
      ],
    },
    {
      heading: 'O que é este site',
      paragraphs: [
        'O site apresenta a PALMVY, seus serviços de desenvolvimento e seus produtos. O conteúdo tem caráter informativo e não constitui proposta comercial nem promessa de entrega.',
      ],
    },
    {
      heading: 'Produtos em desenvolvimento',
      paragraphs: [
        'Alguns produtos exibidos aqui estão marcados como "Em breve". Suas funcionalidades, prazos e disponibilidade podem mudar sem aviso, e a apresentação no site não garante lançamento em data específica.',
      ],
    },
    {
      heading: 'Propriedade intelectual',
      paragraphs: [
        'Os textos, marcas, logotipos, imagens e demais elementos do site pertencem à PALMVY ou são usados com autorização. Nomes como PALMVY, Sossegue, TuneLab e SafeZone identificam nossos produtos e serviços. Não é permitido copiar, reproduzir ou usar esses elementos sem autorização prévia por escrito.',
      ],
    },
    {
      heading: 'Uso adequado',
      paragraphs: [
        'Você se compromete a usar o site de forma lícita, sem tentar comprometer sua segurança, disponibilidade ou desempenho, e sem usá-lo para fins ilegais ou que prejudiquem terceiros.',
      ],
    },
    {
      heading: 'Links e serviços de terceiros',
      paragraphs: [
        'O site pode levar você a serviços de terceiros, como o WhatsApp e redes sociais. Não controlamos esses serviços e não somos responsáveis pelo seu conteúdo ou pelas suas políticas.',
      ],
    },
    {
      heading: 'Limitação de responsabilidade',
      paragraphs: [
        'Nos esforçamos para manter o site correto e disponível, mas não garantimos que ele funcione sem interrupções ou erros. Na extensão permitida pela lei, a PALMVY não responde por danos decorrentes do uso ou da impossibilidade de uso do site.',
      ],
    },
    {
      heading: 'Privacidade',
      paragraphs: [
        'O tratamento de dados pessoais é descrito na nossa Política de Privacidade.',
      ],
    },
    {
      heading: 'Alterações',
      paragraphs: [
        'Podemos atualizar estes termos a qualquer momento. A data da última revisão fica sempre no topo desta página.',
      ],
    },
    {
      heading: 'Lei aplicável e contato',
      paragraphs: [
        'Estes termos são regidos pelas leis do Brasil. Dúvidas ou solicitações podem ser enviadas para ' +
          `${CONTACT_EMAIL}.`,
      ],
    },
  ],
};
