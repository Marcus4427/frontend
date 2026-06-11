import { apiClient } from './apiClient.js';

const API_USERS = 'http://localhost:3000/usuarios';

function gerarTokenBase64(email) {
  const payload = `${email}:${Date.now()}`;
  try {
    return btoa(payload);
  } catch {
    return Buffer.from(payload).toString('base64');
  }
}

export async function login(email, senha) {
  const url = `${API_USERS}?email=${encodeURIComponent(email)}`;
  const users = await apiClient.get(url);
  const user = users[0];
  if (!user) {
    const err = new Error('Credenciais inválidas');
    err.status = 401;
    throw err;
  }

  // senha armazenada em texto no db.json para esta prática
  if (user.senha !== senha) {
    const err = new Error('Credenciais inválidas');
    err.status = 401;
    throw err;
  }

  const token = gerarTokenBase64(user.email);
  return { user: { id: user.id, nome: user.nome, email: user.email }, token };
}

export function logoutLocal() {
  localStorage.removeItem('auth');
}
