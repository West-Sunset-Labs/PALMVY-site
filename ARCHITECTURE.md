# Architecture Decision Records (ADR) & System Guidelines
**Project:** West Sunset Labs - Main Portal & Ecosystem
**Author:** Sam Campos Almeida
**Property of:** West Sunset Labs
**License:** All Rights Reserved (Proprietary)

## 1. System Overview
Este documento dita as regras arquiteturais, visuais e de governança para o desenvolvimento do portal principal da West Sunset Labs e serve como base para os sub-projetos (LumeaOppo, Sai de Casa, Aloy Core). O sistema é projetado para máxima performance, manutenibilidade e impacto visual (estética "Quiet Luxury").

## 2. Intellectual Property & Governance
- Todo o código gerado sob estas diretrizes é propriedade intelectual da West Sunset Labs.
- **Licenciamento:** Estritamente proibida a cópia, distribuição ou modificação sem autorização.
- **Contato Comercial/Auditoria:** sam@westsunsetlabs.com.
- A IA assistente está proibida de incluir comentários ou sugestões que infrinjam a exclusividade deste código-fonte.

## 3. Tech Stack & Dependency Lock
- **Core:** Next.js (App Router), React.
- **Styling:** Tailwind CSS.
- **Language:** TypeScript (Strict Mode obrigatório).
- **Icons:** Lucide React.
- **Dependency Rule:** É expressamente proibido o uso de prefixos `^` ou `~` no `package.json`. Todas as versões devem ser estáticas (Lock-in absoluto). Nenhuma nova biblioteca pode ser instalada sem aprovação explícita do Arquiteto.

## 4. UI/UX Design System: "Dark Mode Premium"
A estética principal é o "Pôr do Sol de Los Angeles" aplicado sobre um minimalismo rigoroso.
- **Typography:** Exclusivamente **Sans-serif** (Inter, Geist ou system-ui). Fontes serifadas são proibidas. Hierarquia focada no contraste de peso (ex: `font-black` para títulos gigantes, `font-light` para parágrafos).
- **Background Principal:** Deep Space (`#09090B`). Fundo fotográfico (quando existir) deve ter um overlay escuro pesado (`bg-gradient-to-b from-transparent to-[#09090B]`) para não poluir a interface.
- **Acentos (LA Sunset):** Gradientes imersivos de Violeta Elétrico (`#6D28D9`) para Laranja Sunset (`#EA580C`). Aplicar em *glows* de fundo ou `bg-clip-text` em títulos específicos.
- **True Glassmorphism:** Elementos flutuantes (Cards, Navbars) devem obrigatoriamente usar fundo translúcido (`bg-white/5` ou `bg-black/20`), borrão intenso (`backdrop-blur-xl` ou `2xl`) e bordas microscópicas (`border border-white/10`).

## 5. Mobile-First & Responsividade
- O layout base deve ser projetado para telas móveis (Mobile-First).
- Uso de prefixos de responsividade (`md:`, `lg:`) deve ser feito para expandir o layout para grid no desktop, não o contrário.
- Áreas de toque (Touch Targets) em CTAs e botões no mobile devem ter no mínimo 48px de altura (`h-12`). CTAs principais em páginas de produto devem ser fixados na base da tela (`fixed bottom-0 pb-safe`) no mobile.

## 6. Estrutura Modular (Frontend Hexagonal-Inspired)
A separação de responsabilidades deve ser cirúrgica:
- `/app`: Apenas roteamento e união de componentes (Views).
- `/components/ui`: Blocos visuais burros (Botões, Cards, GlassContainers).
- `/components/sections`: Blocos de contexto (Hero, AppGrid, Footer).
- `/core/data`: Qualquer dado estático (textos dos cards, links) deve ficar em arquivos de configuração (`.ts` ou `.json`), isolado da estrutura do componente React. O componente apenas recebe e renderiza via *props*.

## 7. Motion & Animations
- **Zero Inchaço:** Proibido o uso de bibliotecas de animação externas pesadas (como Framer Motion ou GSAP) a menos que explicitamente autorizado.
- **Tailwind Native:** Utilizar exclusivamente utilitários nativos (ex: `transition-all duration-300 ease-in-out hover:border-orange-500/50`).
- Interações focam em micro-transições (leve brilho na borda ao passar o mouse, *fade-in* suave ao montar o componente).

## 8. AI Directives (Comandos de Sistema)
Qualquer modelo de IA instruído a modificar este repositório DEVE:
1. Ler este documento antes de gerar qualquer código.
2. Não criar código "genérico" com "cara de IA".
3. Componentizar imediatamente qualquer bloco repetitivo (ex: Cards).
4. Fornecer código pronto para produção, livre de placeholders genéricos ("lorem ipsum"), utilizando os dados reais do laboratório fornecidos em prompts.