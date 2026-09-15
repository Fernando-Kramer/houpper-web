# Houpper Web

> Gestão inteligente para clínicas.

Aplicação web do **Houpper**, uma plataforma para gestão de clínicas, desenvolvida para centralizar agenda, pacientes, profissionais, usuários e configurações em uma experiência simples, moderna e confiável.

O projeto foi construído com **Angular Standalone**, seguindo uma arquitetura baseada em funcionalidades (`features`), carregamento lazy das áreas da aplicação e separação clara entre website público, autenticação, plataforma e páginas de erro.

---

## ✨ Visão geral

O Houpper foi pensado para clínicas que precisam de uma solução simples para organizar sua operação sem abrir mão de recursos e confiabilidade.

Entre os principais módulos previstos estão:

* 📅 Agenda e consultas
* 👥 Pacientes
* 🧑‍⚕️ Profissionais
* 🏥 Clínicas
* 👤 Usuários
* ⚙️ Configurações
* 🔐 Autenticação
* 🔑 Recuperação de senha
* 🛡️ Autenticação em dois fatores
* 📊 Dashboard
* 🚨 Tratamento de erros

---

## 🛠️ Tecnologias

| Tecnologia           | Utilização                        |
| -------------------- | --------------------------------- |
| **Angular**          | Framework principal               |
| **TypeScript**       | Linguagem                         |
| **SCSS**             | Estilização                       |
| **Bootstrap**        | Componentes e utilitários CSS     |
| **Bootstrap Icons**  | Ícones                            |
| **Angular Material** | Componentes de interface          |
| **Docker**           | Containerização                   |
| **Nginx**            | Servidor da aplicação em produção |

### Princípios adotados

* Angular Standalone
* Lazy Loading
* Componentes `OnPush`
* Arquitetura baseada em features
* Separação entre áreas públicas e autenticadas
* Componentização
* Reutilização de componentes
* CSS Variables para temas
* Suporte a Light/Dark Theme
* Rotas independentes por feature

---

# 📁 Arquitetura

A aplicação utiliza uma organização baseada em **features**, mantendo cada domínio da aplicação isolado e facilitando a evolução do projeto.

```text
src/
└── app/
    ├── core/
    │   ├── auth/
    │   ├── guards/
    │   ├── interceptors/
    │   ├── layout/
    │   └── services/
    │
    ├── shared/
    │   ├── components/
    │   ├── directives/
    │   ├── pipes/
    │   ├── validators/
    │   └── material/
    │       ├── material-common.ts
    │       ├── material-navigation.ts
    │       ├── material-form.ts
    │       └── material-feedback.ts
    │
    ├── features/
    │   ├── website/
    │   │   ├── components/
    │   │   ├── pages/
    │   │   └── website.routes.ts
    │   │
    │   ├── auth/
    │   │   ├── components/
    │   │   │   ├── login/
    │   │   │   ├── two-factor/
    │   │   │   ├── forgot-password/
    │   │   │   ├── reset-password/
    │   │   │   └── confirm-password/
    │   │   │
    │   │   ├── pages/
    │   │   │   └── auth-main/
    │   │   │
    │   │   ├── services/
    │   │   └── auth.routes.ts
    │   │
    │   ├── platform/
    │   │   ├── layout/
    │   │   │   ├── sidebar/
    │   │   │   ├── header/
    │   │   │   └── platform-layout.component.*
    │   │   │
    │   │   ├── dashboard/
    │   │   ├── users/
    │   │   ├── patients/
    │   │   ├── appointments/
    │   │   ├── professionals/
    │   │   ├── clinics/
    │   │   ├── settings/
    │   │   └── platform.routes.ts
    │   │
    │   └── errors/
    │       ├── pages/
    │       │   └── error/
    │       ├── components/
    │       │   ├── not-found/
    │       │   └── server-error/
    │       └── errors.routes.ts
    │
    ├── app.component.*
    ├── app.config.ts
    └── app.routes.ts
```

---

# 🧭 Áreas da aplicação

## Website

Área pública e institucional da aplicação.

```text
/features/website
```

Responsável por páginas como:

* Home
* Recursos
* Como funciona
* Clínicas
* Cadastro
* Apresentação do produto

A área pública não exige autenticação.

---

## 🔐 Auth

Área responsável pelo fluxo de autenticação.

```text
/features/auth
```

O fluxo é centralizado pelo `AuthMainComponent`, permitindo controlar diferentes etapas sem transformar cada etapa necessariamente em uma rota.

Fluxo previsto:

```text
Login
  │
  ├── Recuperar senha
  │
  ├── Autenticação 2FA
  │
  └── Redefinir senha
```

Exemplo de organização:

```text
auth/
├── pages/
│   └── auth-main/
│
└── components/
    ├── login/
    ├── two-factor/
    ├── forgot-password/
    ├── reset-password/
    └── confirm-password/
```

---

# 🖥️ Platform

Área autenticada da aplicação.

```text
/features/platform
```

A plataforma possui um layout principal responsável por elementos compartilhados como:

* Sidebar
* Header
* Menu do usuário
* Conteúdo principal
* Navegação interna

A estrutura utiliza um `router-outlet` para renderizar cada funcionalidade dentro do layout.

```text
┌─────────────────────────────────────────────┐
│                    Header                   │
├──────────────┬──────────────────────────────┤
│              │                              │
│   Sidebar    │       Router Outlet          │
│              │                              │
│              │       Dashboard              │
│              │       Pacientes              │
│              │       Agenda                 │
│              │       Usuários               │
│              │       etc.                   │
│              │                              │
└──────────────┴──────────────────────────────┘
```

Exemplo de rotas:

```text
/platform
/platform/dashboard
/platform/users
/platform/patients
/platform/appointments
/platform/professionals
/platform/clinics
/platform/settings
```

---

# 🚨 Errors

Área responsável pelo tratamento de erros de navegação e aplicação.

```text
/features/errors
```

O `ErrorComponent` funciona como um shell que possui seu próprio `router-outlet`.

Exemplo:

```text
/error/not-found
/error/server-error
```

A rota wildcard da aplicação direciona URLs inexistentes para:

```text
/error/not-found
```

---

# 🛣️ Routing

A aplicação utiliza lazy loading para carregar cada grande área somente quando necessário.

Exemplo da estrutura principal:

```ts
export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/website/website.routes')
        .then(m => m.WEBSITE_ROUTES)
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.routes')
        .then(m => m.AUTH_ROUTES)
  },
  {
    path: 'platform',
    loadChildren: () =>
      import('./features/platform/platform.routes')
        .then(m => m.PLATFORM_ROUTES)
  },
  {
    path: 'error',
    loadChildren: () =>
      import('./features/errors/errors.routes')
        .then(m => m.ERROR_ROUTES)
  },
  {
    path: '**',
    redirectTo: 'error/not-found'
  }
];
```

---

# 🎨 Design System

O projeto utiliza um sistema de design baseado em **CSS Variables**, permitindo suporte aos temas claro e escuro.

Exemplo:

```css
:root {
  --color-primary: #6366f1;
  --color-primary-hover: #4f46e5;

  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-danger: #ef4444;
  --color-info: #0ea5e9;

  --color-background: #f8fafc;
  --color-surface: #ffffff;

  --color-text-primary: #0f172a;
  --color-text-secondary: #475569;
  --color-text-muted: #64748b;

  --color-border: #e2e8f0;
}
```

O tema escuro é controlado através de:

```html
data-theme="dark"
```

A interface também possui elementos visuais próprios, como:

* Background com grid
* Botões customizados
* Estados de hover/focus/active
* Tokens de espaçamento
* Tokens de tipografia
* Tokens de bordas
* Cores semânticas

---

# 🧩 Angular Material

Os componentes do Angular Material são organizados em uma camada própria dentro de `shared`.

```text
shared/
└── material/
    ├── material-common.ts
    ├── material-navigation.ts
    ├── material-form.ts
    └── material-feedback.ts
```

O objetivo é evitar imports repetitivos diretamente dos pacotes do Angular Material em todos os componentes.

Exemplo:

```ts
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

export {
  MatToolbarModule,
  MatSidenavModule
};
```

Assim os componentes da aplicação podem utilizar a camada compartilhada:

```ts
import {
  MatToolbarModule,
  MatSidenavModule
} from '@/shared/material/material-common';
```

Essa abordagem mantém os componentes standalone e centraliza a organização das dependências de UI.

---

# ⚡ Performance

Algumas decisões arquiteturais são voltadas diretamente para performance e manutenção:

### Standalone Components

Todos os componentes utilizam a arquitetura standalone do Angular.

### OnPush

A estratégia padrão de change detection é:

```ts
changeDetection: ChangeDetectionStrategy.OnPush
```

### Lazy Loading

As principais áreas da aplicação são carregadas sob demanda:

```text
Website
Auth
Platform
Errors
```

### Feature-based Architecture

Cada domínio possui seus próprios componentes, serviços e rotas, reduzindo acoplamento entre funcionalidades.

---

# 💻 Desenvolvimento

## Pré-requisitos

* Node.js
* npm
* Angular CLI

Verifique as versões instaladas:

```bash
node --version
npm --version
ng version
```

---

## Instalação

Clone o projeto:

```bash
git clone <repository-url>
```

Entre no diretório:

```bash
cd houpper-web
```

Instale as dependências:

```bash
npm install
```

---

## Desenvolvimento

Execute a aplicação em modo de desenvolvimento:

```bash
npm start
```

Ou:

```bash
ng serve
```

A aplicação estará disponível em:

```text
http://localhost:4200
```

---

# 🏗️ Build

Para gerar o build de produção:

```bash
npm run build
```

Ou:

```bash
ng build
```

Os arquivos gerados serão disponibilizados no diretório:

```text
dist/
```

---

# 🐳 Docker

A aplicação pode ser executada utilizando Docker.

## Build da imagem

```bash
docker build -t houpper-web .
```

## Executar container

```bash
docker run -d --name houpper-web -p 80:80 houpper-web
```

Após iniciar o container, acesse:

```text
http://localhost
```

## Parar o container

```bash
docker stop houpper-web
```

## Remover o container

```bash
docker rm houpper-web
```

## Remover a imagem

```bash
docker rmi houpper-web
```

---

# 🔄 Fluxo Docker completo

Para reconstruir e executar uma nova versão:

```bash
docker stop houpper-web
docker rm houpper-web

docker build -t houpper-web .

docker run -d \
  --name houpper-web \
  -p 80:80 \
  houpper-web
```

---

# 📦 Build de produção

O fluxo esperado para produção é:

```text
Angular
   │
   ▼
npm run build
   │
   ▼
dist/
   │
   ▼
Docker
   │
   ▼
Nginx
   │
   ▼
Houpper Web
```

O Docker é responsável por empacotar a aplicação e disponibilizá-la através do Nginx.

---

# 🔒 Segurança

A aplicação possui uma arquitetura preparada para recursos como:

* Guards de autenticação
* Interceptors HTTP
* Controle de sessão
* Autenticação em dois fatores
* Proteção de rotas privadas
* Tratamento centralizado de erros

Rotas da plataforma devem permanecer protegidas por autenticação:

```text
/platform/*
```

---

# 📐 Convenções

## Componentes

Componentes são mantidos pequenos e focados em uma responsabilidade.

```text
feature/
└── components/
    └── example/
        ├── example.component.ts
        ├── example.component.html
        └── example.component.scss
```

## Rotas

Cada feature possui seu próprio arquivo de rotas:

```text
users.routes.ts
patients.routes.ts
appointments.routes.ts
```

E as funcionalidades são carregadas através de lazy loading.

## Estilos

Preferência por:

* SCSS
* CSS Variables
* Tokens de design
* Classes semânticas
* Componentes com estilos encapsulados

---

# 🚧 Status

O projeto está em desenvolvimento.

Funcionalidades e módulos estão sendo implementados gradualmente, com foco em uma arquitetura sustentável para crescimento futuro.

---

# 🗺️ Roadmap

* [ ] Website institucional
* [ ] Cadastro de clínicas
* [ ] Login
* [ ] Recuperação de senha
* [ ] Autenticação 2FA
* [ ] Dashboard
* [ ] Gestão de usuários
* [ ] Gestão de pacientes
* [ ] Gestão de profissionais
* [ ] Agenda
* [ ] Gestão de clínicas
* [ ] Configurações
* [ ] Controle de permissões
* [ ] Tema claro/escuro
* [ ] Deploy de produção

---

# 🤝 Contribuição

Antes de criar uma nova funcionalidade, procure manter a organização baseada em features.

Novos domínios devem preferencialmente possuir sua própria estrutura:

```text
features/
└── minha-feature/
    ├── components/
    ├── pages/
    ├── services/
    └── minha-feature.routes.ts
```

Evite colocar lógica específica de uma feature em `shared` apenas para facilitar o acesso.

O `shared` deve conter somente recursos realmente reutilizáveis.

---

# 📄 Licença

Este projeto é proprietário.

Todos os direitos reservados.

---

<div align="center">

**Houpper**

Gestão simples e poderosa para clínicas.

</div>
