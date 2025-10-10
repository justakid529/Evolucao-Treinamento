# Evolucao-Treinamento

Este repositório agora contém uma versão estática do site construída com HTML, CSS e JavaScript (vanilla). A versão baseada em Next.js/React/Tailwind foi removida conforme solicitado.

Arquivos principais:
- `index.html` — página principal (estática)
- `public/output.css` — folha de estilo completa (fallback sem build)
- `assets/js/site.js` — JavaScript consolidado (navbar, carousel, contato, chat)
- `assets/css/stylesheet.css` — estilos mínimos (botão de chat)
- `assets/images/` — imagens utilizadas no site

Como testar localmente:

1) Pré-visualização rápida: abra `index.html` diretamente no navegador.

2) Servir localmente (recomendado):

   - Usando Python 3:
      ```powershell
      python -m http.server 8080
      ```

   - Usando Node (se preferir):
      ```powershell
      npx serve -s . -l 8080
      ```

   Acesse: http://localhost:8080

Notas importantes:
- Os arquivos e configurações relacionados ao Next.js/React/Tailwind (ex.: `app/`, `components/`, `package.json`, `tailwind.config.js`, `postcss.config.js`, `.next/`, `tsconfig.json`) foram removidos intencionalmente.
- Se você quiser restaurar a versão baseada em Next.js, recupere a partir do histórico git ou de um backup.

Próximos passos sugeridos:
- Integrar o formulário de contato com um endpoint ou serviço de e-mail.
- Otimizar imagens e metadados para SEO.
- Adicionar validação de formulário e testes simples.

Se quiser que eu implemente algum desses passos, diga qual prioridade e eu sigo em frente.
