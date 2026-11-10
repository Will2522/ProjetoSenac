
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


export function validarTarefa(texto) {
  if (!texto || !texto.trim()) {
    throw new Error("Digite uma tarefa antes de adicionar.");
  }

  if (texto.trim().length < 3) {
    throw new Error("A tarefa precisa ter pelo menos 3 caracteres.");
  }

  if (texto.trim().length > 100) {
    throw new Error("A tarefa deve ter no máximo 100 caracteres.");
  }

  return texto.trim();
}


export function observarTarefas(callback, callbackErro) {
  const tarefasRef = collection(db, "tarefas");
  const tarefasQuery = query(
    tarefasRef,
    orderBy("criadaEm", "desc")
  );

  return onSnapshot(
    tarefasQuery,
    (snapshot) => {
      const lista = snapshot.docs.map((documento) => ({
        id: documento.id,
        ...documento.data()
      }));

      callback(lista);
    },
    (erro) => {
      callbackErro("Não foi possível carregar as tarefas.");
      console.error(erro);
    }
  );
}

export async function adicionarTarefa(texto) {
  const textoValidado = validarTarefa(texto);

  await addDoc(collection(db, "tarefas"), {
    texto: textoValidado,
    concluida: false,
    criadaEm: serverTimestamp()
  });
}


export async function marcarTarefa(id, concluida) {
  if (!id) {
    throw new Error("Tarefa inválida.");
  }

  await updateDoc(doc(db, "tarefas", id), {
    concluida: !concluida
  });
}


export async function removerTarefa(id) {
  if (!id) {
    throw new Error("Não foi possível identificar a tarefa.");
  }

  await deleteDoc(doc(db, "tarefas", id));
}
