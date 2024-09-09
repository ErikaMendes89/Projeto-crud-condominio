import React from 'react';
import { CondominiumData } from './CondominiumForm';

interface CondominiumListProps {
  condominiums: CondominiumData[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const CondominiumList: React.FC<CondominiumListProps> = ({ condominiums, onEdit, onDelete }) => {
  if (condominiums.length === 0) return <p>Nenhum condomínio encontrado.</p>;

  return (
    <div>
      <h1>Lista de Condomínios</h1>
        <ul className="condominio-grid">
         {condominiums.map(condominio => (
          <li key={condominio.id} className="condominio-item">
            <div>
              <p><strong>{condominio.nome}</strong><strong> - {condominio.endereco}</strong></p>
              <p>Unidades: {condominio.quantidadeUnidades}</p>
              <p>Início da administração: {new Date(condominio.inicioAdministracao).toLocaleDateString()}</p>
            </div>
            <div>
              <button onClick={() => onEdit(condominio.id)}>Editar</button>
              <button onClick={() => onDelete(condominio.id)}>Deletar</button>
            </div>
          </li>
         ))}
      </ul>
    </div>
  );
};

export default CondominiumList;


