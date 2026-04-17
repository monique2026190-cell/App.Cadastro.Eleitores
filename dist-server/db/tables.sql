-- =========================
-- TABELA USUARIOS
-- =========================
CREATE TABLE IF NOT EXISTS usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    bio TEXT,
    avatar_url TEXT,
    stripe_account_id VARCHAR(255) UNIQUE,
    criado_em TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    atualizado_em TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_usuarios_email ON usuarios(email);

-- =========================
-- TABELA CURSOS
-- =========================
CREATE TABLE IF NOT EXISTS cursos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    descricao TEXT NOT NULL,
    preco NUMERIC(10, 2) NOT NULL DEFAULT 0.00,
    taxa NUMERIC(5, 2) NOT NULL DEFAULT 10.00,
    capa_curso TEXT,
    usuario_id INTEGER NOT NULL,
    criado_em TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    atualizado_em TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_cursos_usuario FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- =========================
-- TABELA COMENTARIOS
-- =========================
CREATE TABLE IF NOT EXISTS comentarios (
    id SERIAL PRIMARY KEY,
    curso_id INTEGER NOT NULL,
    usuario_id INTEGER NOT NULL,
    comentario TEXT NOT NULL,
    criado_em TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_comentarios_curso FOREIGN KEY (curso_id) REFERENCES cursos(id),
    CONSTRAINT fk_comentarios_usuario FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- =========================
-- TABELA INSCRICOES
-- =========================
CREATE TABLE IF NOT EXISTS inscricoes (
    id SERIAL PRIMARY KEY,
    curso_id INTEGER NOT NULL,
    usuario_id INTEGER NOT NULL,
    criado_em TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_inscricoes_curso FOREIGN KEY (curso_id) REFERENCES cursos(id),
    CONSTRAINT fk_inscricoes_usuario FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    UNIQUE(curso_id, usuario_id)
);

-- =========================
-- TABELA AULAS
-- =========================
CREATE TABLE IF NOT EXISTS aulas (
    id SERIAL PRIMARY KEY,
    curso_id INTEGER NOT NULL,
    titulo VARCHAR(255) NOT NULL,
    descricao TEXT,
    url_video TEXT,
    ordem INTEGER NOT NULL,
    criado_em TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_aulas_curso FOREIGN KEY (curso_id) REFERENCES cursos(id) ON DELETE CASCADE
);

-- =========================
-- TABELA NOTAS_AULAS
-- =========================
CREATE TABLE IF NOT EXISTS notas_aulas (
    id SERIAL PRIMARY KEY,
    aula_id INTEGER NOT NULL,
    usuario_id INTEGER NOT NULL,
    conteudo TEXT NOT NULL,
    criado_em TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    atualizado_em TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_notas_aula FOREIGN KEY (aula_id) REFERENCES aulas(id) ON DELETE CASCADE,
    CONSTRAINT fk_notas_usuario FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    UNIQUE (aula_id, usuario_id)
);