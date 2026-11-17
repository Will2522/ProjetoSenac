"use client";

import { useState } from "react";
import { consultarCep } from "@/services/cepServices";

export default function BuscarCepForm() {
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState(null);
    const [erro, setErro] = useState("");
    const [carregando, setCarregando] = useState(false);

    async function handleBuscarCep(evento) {
        evento.preventDefault();
        setErro("");
        setEndereco(null);
        setCarregando(true);

        try {
            const dados = await consultarCep(cep);
            setEndereco(dados);
        } catch (err) {
            setErro(err.message || "Não foi possível consultar o CEP.");
        } finally {
            setCarregando(false);
        }
    }

    return (
        <div className="cartao">
            <h3>Consultar endereço pelo CEP</h3>

            <form onSubmit={handleBuscarCep}>
                <input
                    type="text"
                    placeholder="Digite seu CEP"
                    value={cep}
                    maxLength={9}
                    onChange={(e) => setCep(e.target.value)}
                />

                <button type="submit" disabled={carregando}>
                    {carregando ? "Buscando..." : "Buscar CEP"}
                </button>
            </form>

            {erro && (
                <p role="alert" style={{ color: "red" }}>
                    {erro}
                </p>
            )}

            {endereco && (
                <div>
                    <h4>Endereço encontrado</h4>
                    <p>Rua: {endereco.logradouro || "Não informada"}</p>
                    <p>Bairro: {endereco.bairro || "Não informado"}</p>
                    <p>Cidade: {endereco.localidade}</p>
                    <p>Estado: {endereco.uf}</p>
                    <p>CEP: {endereco.cep}</p>
                </div>
            )}
        </div>
    );
}