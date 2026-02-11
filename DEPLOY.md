
# 🚀 Guia de Deploy - IAC Farm

Este documento descreve como colocar o sistema **IAC Farm** em produção.

## 1. Configuração do GitHub
1. Crie um novo repositório no [GitHub](https://github.com/new).
2. No seu terminal, dentro da pasta do projeto:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit IAC Farm"
   git remote add origin https://github.com/SEU_USUARIO/iac-farm.git
   git branch -M main
   git push -u origin main
   ```

## 2. Banco de Dados PostgreSQL (Neon ou Vercel)
1. Acesse o [Neon.tech](https://neon.tech) ou a aba **Storage** na Vercel.
2. Crie uma nova base de dados PostgreSQL chamada `iac_farm`.
3. Copie a `DATABASE_URL` (Direct Connection String).
4. Rode as queries iniciais (contidas no arquivo `schema.sql`) no console do banco.

## 3. Deploy na Vercel
1. Vá para o [Dashboard da Vercel](https://vercel.com/dashboard).
2. Clique em **"Add New"** -> **"Project"**.
3. Importe o repositório do GitHub.
4. Em **Environment Variables**, adicione:
   - `API_KEY`: Sua chave do Google AI Studio.
   - `DATABASE_URL`: A URL do seu PostgreSQL.
5. Clique em **Deploy**.

## 4. Estrutura de Tabelas (SQL)
Para o seu PostgreSQL, utilize este esquema inicial:

```sql
CREATE TABLE plants (
  id SERIAL PRIMARY KEY,
  common_name TEXT NOT NULL,
  scientific_name TEXT,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  image_url TEXT,
  health_status TEXT,
  diagnosis_summary TEXT,
  full_diagnosis TEXT,
  confidence INTEGER,
  location TEXT
);

CREATE TABLE crop_plans (
  id SERIAL PRIMARY KEY,
  crop_name TEXT NOT NULL,
  data JSONB NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```
