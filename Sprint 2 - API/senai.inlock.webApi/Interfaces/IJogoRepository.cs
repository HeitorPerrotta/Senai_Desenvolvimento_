using senai.inlock.webApi.Domains;

namespace senai.inlock.webApi.Interfaces
{
    public interface IJogoRepository
    {
        void Cadastrar(JogoDomain NovoJogo);

        void Deletar (int id);

        List<JogoDomain> ListarTodos();
    }
}
