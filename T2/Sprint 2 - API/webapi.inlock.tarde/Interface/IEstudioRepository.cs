﻿using webapi.inlock.tarde.Domains;

namespace webapi.inlock.tarde.Interface
{
    public interface IEstudioRepository
    {
        List<Estudio> Listar();

        Estudio BuscarPorId(Guid Id);

        void Cadastrar(Estudio estudio);

        void Atualizar(Guid id, Estudio estudio);

        void Deletar(Guid id);

        List<Estudio> ListarComJogos();
    }
}
