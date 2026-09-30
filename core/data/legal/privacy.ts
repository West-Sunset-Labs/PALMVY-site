import { CONTACT_EMAIL } from '@/core/data/contact';
import type { LegalDocument } from '@/core/data/legal/types';

// RASCUNHO para revisão jurídica. Para publicar a versão final, substitua o
// conteúdo deste arquivo mantendo o formato de `LegalDocument` e troque
// `isDraft` para false. Ajuste também o texto se o site passar a usar
// formulários, cookies ou outras ferramentas de terceiros.
export const privacyPolicy: LegalDocument = {
  title: 'Política de Privacidade',
  description:
    'Como a PALMVY trata dados pessoais no site palmvy.com.br, conforme a LGPD.',
  updatedAt: '2026-09-30',
  isDraft: true,
  sections: [
    {
      heading: 'Quem somos',
      paragraphs: [
        'A PALMVY é uma empresa de desenvolvimento de sites e aplicativos. Esta política explica como tratamos dados pessoais de quem visita o site palmvy.com.br, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018, a LGPD).',
        `Para qualquer assunto sobre privacidade, fale com a gente em ${CONTACT_EMAIL}.`,
      ],
    },
    {
      heading: 'Quais dados tratamos',
      paragraphs: [
        'Este site não tem cadastro, login nem formulários. Coletamos o mínimo necessário, nas situações abaixo.',
        'Dados que você nos envia: se você entrar em contato pelo WhatsApp ou por e-mail, recebemos as informações que você mesmo fornecer, como nome, número de telefone, endereço de e-mail e o conteúdo da mensagem.',
        'Dados técnicos de acesso: como em qualquer site, o provedor de hospedagem registra informações como endereço IP, data e hora do acesso, tipo de navegador e páginas acessadas.',
        'Métricas de uso: medimos a audiência do site de forma agregada com o Cloudflare Web Analytics, para entender quais páginas são mais visitadas. Essa ferramenta foi feita para medir sem cookies de rastreamento e sem identificar você individualmente.',
      ],
    },
    {
      heading: 'Para que usamos e em que base legal',
      paragraphs: [
        'Responder seus contatos e pedidos de informação sobre nossos produtos e serviços. Base legal: procedimentos preliminares a um possível contrato, a seu pedido, e nosso legítimo interesse em atender quem nos procura.',
        'Manter a segurança e o bom funcionamento do site, e cumprir a obrigação legal de guardar registros de acesso. Base legal: legítimo interesse e cumprimento de obrigação legal.',
        'Entender, de forma agregada, como o site é usado para melhorá-lo. Base legal: legítimo interesse.',
        'Não vendemos dados pessoais e não os usamos para publicidade de terceiros.',
      ],
    },
    {
      heading: 'Com quem compartilhamos',
      paragraphs: [
        'Compartilhamos dados apenas com prestadores de serviço necessários para o site funcionar: provedor de hospedagem e infraestrutura, Cloudflare (métricas de audiência) e, quando você escolhe falar conosco por lá, o WhatsApp (Meta Platforms), que trata os dados conforme os próprios termos e política de privacidade.',
        'Também podemos compartilhar dados quando exigido por lei ou por ordem de autoridade competente.',
      ],
    },
    {
      heading: 'Transferência internacional',
      paragraphs: [
        'Alguns prestadores de serviço podem armazenar ou processar dados fora do Brasil. Nesses casos, buscamos fornecedores que adotem medidas de proteção compatíveis com a LGPD.',
      ],
    },
    {
      heading: 'Por quanto tempo guardamos',
      paragraphs: [
        'Mensagens de contato ficam guardadas pelo tempo necessário para atender sua solicitação e manter o histórico da conversa, e depois são eliminadas ou anonimizadas. Registros de acesso são guardados pelo prazo exigido em lei e depois descartados. Você pode pedir a exclusão antes disso, respeitadas as obrigações legais.',
      ],
    },
    {
      heading: 'Seus direitos',
      paragraphs: [
        'Você pode pedir, a qualquer momento: confirmação de que tratamos seus dados; acesso a eles; correção de dados incompletos ou desatualizados; anonimização, bloqueio ou eliminação de dados desnecessários; portabilidade; informação sobre com quem compartilhamos; e a revogação de consentimento, quando essa for a base legal.',
        `Para exercer qualquer desses direitos, escreva para ${CONTACT_EMAIL}. Você também pode reclamar à Autoridade Nacional de Proteção de Dados (ANPD).`,
      ],
    },
    {
      heading: 'Segurança',
      paragraphs: [
        'Usamos conexão criptografada (HTTPS) e limitamos o acesso aos dados a quem precisa deles. Nenhum sistema é 100% seguro, mas trabalhamos para reduzir riscos e, se houver incidente relevante, comunicaremos os afetados e a ANPD nos termos da lei.',
      ],
    },
    {
      heading: 'Crianças e adolescentes',
      paragraphs: [
        'O site não é direcionado a menores de 18 anos, e não coletamos intencionalmente dados de crianças e adolescentes.',
      ],
    },
    {
      heading: 'Mudanças nesta política',
      paragraphs: [
        'Podemos atualizar esta política. A data da última revisão fica sempre no topo desta página.',
      ],
    },
  ],
};
