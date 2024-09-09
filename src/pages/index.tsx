import React, { useEffect, useState } from 'react';
import CondominiumList from '../components/CondominiumList';
import { useRouter } from 'next/router'; 
import { CondominiumData } from '../components/CondominiumForm';
import Sidebar from '../components/sideBar';
import "../styles/global.css";


const IndexPage: React.FC = () => {
  const [condominiums, setCondominiums] = useState<CondominiumData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchCondominiums = async () => {
      try {
        const response = await fetch('https://administradora-digital-run1-mfrrjeldtq-uc.a.run.app/api/Condominios');
        if (!response.ok) {
          throw new Error('Erro ao buscar dados da API.');
        }
        const data: CondominiumData[] = await response.json();
        setCondominiums(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Erro desconhecido');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCondominiums();
  }, []);

  const handleEdit = (id: string) => {
    router.push(`/edit/${id}`);
  };

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm('Tem certeza que deseja excluir este condomínio?');
    if (confirmDelete) {
      try {
        const response = await fetch(`https://administradora-digital-run1-mfrrjeldtq-uc.a.run.app/api/Condominios/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          setCondominiums(prevCondominiums => prevCondominiums.filter(condo => condo.id !== id));
          alert('Condomínio excluído com sucesso!');
        } else {
          alert('Erro ao excluir o condomínio');
        }
      } catch (error) {
        console.error('Erro ao excluir condomínio:', error);
      }
    }
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <div className="flex">
      <Sidebar />
      <CondominiumList 
        condominiums={condominiums} 
        onEdit={handleEdit} 
        onDelete={handleDelete} 
      />
    </div>
  );
};

export default IndexPage;


