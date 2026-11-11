
import {
  collection,
  addDoc,
  serverTimestamp
} from "firebase/firestore";

import { db } from "../lib/firebase";

export async function salvarContato(dados) {
  const nome = dados.nome?.trim();
  const email = dados.email?.trim();
  const mensagem = dados.mensagem?.trim();
  const projeto = dados.projeto?.trim() || "Nenhum projeto específico";

  if (!nome || nome.length < 3) {
    throw new Error("Informe seu nome completo.");
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error("Informe um e-mail válido.");
  }

  if (!mensagem || mensagem.length < 10) {
    throw new Error("A mensagem precisa ter pelo menos 10 caracteres.");
  }

  await addDoc(collection(db, "mensagens_contato"), {
    nome,
    email,
    mensagem,
    projeto,
    criadaEm: serverTimestamp()
  });
}
