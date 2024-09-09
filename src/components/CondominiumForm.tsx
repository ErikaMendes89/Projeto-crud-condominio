import React, { useState } from 'react';

interface CondominiumFormProps {
  onSubmit: (data: CondominiumData) => void;
  initialData?: CondominiumData | null;
}

export interface CondominiumData {
  id: string;
  inicioAdministracao: Date;
  nome: string;
  endereco: string;
  quantidadeUnidades: number;
  cnpj: string;
}

const CondominiumForm: React.FC<CondominiumFormProps> = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState<CondominiumData>(initialData || { id: '', nome: '', endereco: '', quantidadeUnidades:0, inicioAdministracao: new Date(), cnpj: '', });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value}=e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'quantidadeUnidades' ? Number(value) : value,
      inicioAdministracao: name === 'inicioAdministracao' ? new Date(value) : prev.inicioAdministracao,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <label htmlFor="name">Nome do Condominio:</label>
      <input
        id="nome"
        name="nome"
        value={formData.nome}
        onChange={handleChange}
        placeholder="Nome do Condomínio"
        className="input"
        title="Nome do Condomínio"
      />

      <label htmlFor="address">Endereço:</label>
      <input
        id="endereco"
        name="endereco"
        value={formData.endereco}
        onChange={handleChange}
        placeholder="Endereço"
        className="input"
        title="Endereço"
      />

      <label htmlFor="cnpj">CNPJ do Condomínio:</label>
      <input
        id="cnpj"
        name="cnpj"
        value={formData.cnpj}
        onChange={handleChange}
        placeholder="CNPJ do Condomínio"
        className="input"
        title="CNPJ do Condomínio"
      />

      <label htmlFor="quantidadeUnidades">Quantidade de Unidades:</label>
      <input
        id="quantidadeUnidades"
        name="quantidadeUnidades"
        type="number"
        value={formData.quantidadeUnidades}
        onChange={handleChange}
        placeholder="Quantidade de Unidades"
        className="input"
        title="Quantidade de Unidades"
      />

      <label htmlFor="inicioAdministracao">Início da Administração:</label>
      <input
        id="inicioAdministracao"
        type="date"
        name="inicioAdministracao"
        value={formData.inicioAdministracao
          ? formData.inicioAdministracao instanceof Date
            ? formData.inicioAdministracao.toISOString().split('T')[0]  
            : formData.inicioAdministracao  
          : ''} 
        onChange={handleChange}
        className="input"
        title="Início da Administração"
      />

      <button type="submit" className="btn">Salvar</button>
    </form>
  );
};

export default CondominiumForm;
