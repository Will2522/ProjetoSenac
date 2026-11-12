"use client"
import React, { useState, useEffect } from 'react';
import { db } from '@/lib/firebase.js'; 
import { 
  collection, 
  addDoc, 
  getDocs, 
  updateDoc, 
  deleteDoc, 
  doc 
} from 'firebase/firestore';

/** @typedef {{ id: string, titulo: string, concluida: boolean }} Tarefa */

export default function ListaTarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  
  const carregarTarefas = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "tarefas"));
      const lista = querySnapshot.docs.map(documento => ({
        ...documento.data(),
        id: documento.id
      }));
      setTarefas(lista);
    } catch (error) {
      console.error("Erro ao buscar tarefas (verifique as regras do Firestore):", error);
    }
  };

  useEffect(() => {
    carregarTarefas();
  }, []);

  
  const criarTarefa = async (e) => {
    e.preventDefault();
    if (!novaTarefa.trim()) return;

    try {
      await addDoc(collection(db, "tarefas"), {
        titulo: novaTarefa,
        concluida: false,
        criadoEm: new Date()
      });
      setNovaTarefa('');
      carregarTarefas(); 
    } catch (error) {
      console.error("Erro ao criar tarefa:", error);
    }
  };


  const alternarConcluida = async (id, statusAtual) => {
    try {
      const tarefaRef = doc(db, "tarefas", id);
      await updateDoc(tarefaRef, {
        concluida: !statusAtual
      });
      carregarTarefas();
    } catch (error) {
      console.error("Erro ao atualizar tarefa:", error);
    }
  };

  
  const removerTarefa = async (id) => {
    try {
      await deleteDoc(doc(db, "tarefas", id));
      carregarTarefas();
    } catch (error) {
      console.error("Erro ao remover tarefa:", error);
    }
  };

  return (
    <div>
      <h2>Minhas Tarefas</h2>
      <form onSubmit={criarTarefa}>
        <input 
          type="text" 
          value={novaTarefa} 
          onChange={(e) => setNovaTarefa(e.target.value)} 
          placeholder="Nova tarefa..." 
        />
        <button type="submit">Adicionar</button>
      </form>

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id} style={{ textDecoration: tarefa.concluida ? 'line-through' : 'none' }}>
            <span onClick={() => alternarConcluida(tarefa.id, tarefa.concluida)} style={{ cursor: 'pointer' }}>
              {tarefa.titulo}
            </span>
            <button onClick={() => removerTarefa(tarefa.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}