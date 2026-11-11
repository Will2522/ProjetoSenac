
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp
} from "firebase/firestore";

import { db } from "../lib/firebase";

const tarefasRef = collection(db, "tarefas");

// VALIDAR TAREFA
export function validarTarefa(texto) {
  if (!texto || !texto.trim()) {
    throw new Error("Digite uma tarefa.");
  }

  if (texto.trim().length < 3) {
    throw new Error("Digite pelo menos 3 caracteres.");
  }

  if (texto.trim().length > 100) {
    throw new Error("A tarefa não pode ultrapassar 100 caracteres.");
  }

  return texto.trim();
}

// LISTAR TAREFAS
export function observarTarefas(callback, callbackErro) {
  const consulta = query(
    tarefasRef,
    orderBy("criadaEm", "desc")
  );

  return onSnapshot(
    consulta,
    (snapshot) => {
      const tarefas = snapshot.docs.map((item) => ({
        id: item.id,
        ...item.data()
      }));

      callback(tarefas);
    },
    (error) => {
      console.error("Erro Firebase:", error);
      callbackErro("Erro ao carregar as tarefas.");
    }
  );
}

// ADICIONAR
export async function adicionarTarefa(texto) {
  const textoValidado = validarTarefa(texto);

  await addDoc(tarefasRef, {
    texto: textoValidado,
    concluida: false,
    criadaEm: serverTimestamp()
  });
}

// MARCAR COMO CONCLUÍDA
export async function marcarTarefa(id, concluida) {
  if (!id) {
    throw new Error("Identificação da tarefa inválida.");
  }

  await updateDoc(doc(db, "tarefas", id), {
    concluida: !concluida
  });
}

// EXCLUIR
export async function removerTarefa(id) {
  if (!id) {
    throw new Error("Não foi possível identificar a tarefa.");
  }

  await deleteDoc(doc(db, "tarefas", id));
}
