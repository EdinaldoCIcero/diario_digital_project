# 📓 Diário Virtual Web

Um diário digital interativo com visual de caderno, navegação por páginas e experiência inspirada em leitores como Kindle.

---

## ✨ Demonstração

> (adicione aqui o link do GitHub Pages depois de publicar)

---

## 🚀 Funcionalidades

- 📖 Navegação entre páginas (botões e swipe)
- 📱 Layout responsivo (focado em mobile)
- 🖼️ Capa personalizada
- 🧾 Renderização dinâmica via JSON
- ✍️ Suporte a múltiplas páginas
- 🎬 Animações suaves de transição
- 👉 Swipe com dedo (estilo app)
- 🌀 Efeito visual de caderno (espiral/furos)

---

## 🧠 Como funciona

O conteúdo do diário é carregado dinamicamente a partir de arquivos JSON.

Exemplo:

```json
{
  "autor": "Seu Nome",
  "data": "26/04/2026",
  "titulo": "Meu Primeiro Dia",
  "banner": "images/banner1.jpg",
  "texto": "Texto do diário...\nCom quebra de linha."
}
```

---

## 📁 Estrutura do Projeto

```
/
├── index.html
├── style.css
├── script.js
├── /pages
│   ├── pagina1.json
│   ├── pagina2.json
├── /images
│   ├── capa.jpg
│   ├── banner1.jpg
```

---

## ⚙️ Como rodar localmente

> ⚠️ Não abra o HTML diretamente (file://), use um servidor local

### 🐍 Python

```bash
python -m http.server 8000
```

Acesse:

```
http://localhost:8000
```

---

## 🌐 Deploy no GitHub Pages

1. Suba o projeto para um repositório
2. Vá em **Settings > Pages**
3. Selecione a branch (ex: `main`)
4. Acesse o link gerado

---

## 🎨 Personalização

Você pode facilmente:

- adicionar novas páginas criando novos arquivos JSON
- alterar estilos no CSS
- trocar fontes (Google Fonts)
- modificar layout e animações

---

## 💡 Ideias futuras

- 🔍 Sistema de busca
- 🌙 Tema escuro
- ⭐ Favoritar páginas
- 🔐 Modo secreto com senha
- 📝 Editor visual de páginas
- ☁️ Integração com Firebase

---

## 📜 Licença

Este projeto está sob a licença MIT.

---

## 👨‍💻 Autor

Desenvolvido por **ÁtomoGames : Studio Indie** 🚀

---

## ⭐ Se gostou

Deixe uma estrela no repositório ⭐

---