import React, { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import { useRouter } from 'next/router'; 
import CondominiumForm, { CondominiumData } from '../components/CondominiumForm';
import Sidebar from '../components/sideBar';

const CreateOrEditPage: React.FC = () => {
  const { id } = useParams<{ id?: string }>(); 
  const [condominium, setCondominium] = useState<CondominiumData | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
 

  useEffect(() => {
    if (id) {
      setIsLoading(true); 
      fetch(`https://administradora-digital-run1-mfrrjeldtq-uc.a.run.app/api/Condominios/${id}`)
        .then(response => response.json())
        .then(data => {
          setCondominium(data);
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Erro ao buscar condomínio:', error);
          setIsLoading(false);
        });
    }
  }, [id]);

  const handleFormSubmit = (data: CondominiumData) => {
    const method = id ? 'PUT' : 'POST';
    const url = id 
      ? `https://administradora-digital-run1-mfrrjeldtq-uc.a.run.app/api/Condominios/${id}`
      : 'https://administradora-digital-run1-mfrrjeldtq-uc.a.run.app/api/Condominios';

    fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(result => {
      if (id) {
        console.log('Condomínio atualizado:', result);
        alert('Condomínio atualizado com sucesso!');
      } else {
        console.log('Condomínio criado:', result);
        alert('Condomínio criado com sucesso!');
      }
      router.push('/'); 
    })
    .catch(error => {
      console.error('Erro ao salvar condomínio:', error);
      alert('Erro ao salvar condomínio. Por favor, tente novamente.');
    });
  };

  if (isLoading) {
    return <div>Carregando...</div>; 
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="main-content">
        <div className="form-container">
          <div className="form-box">
            <h1>{id ? 'Editar Condomínio' : 'Criar Condomínio'}</h1>
            <CondominiumForm onSubmit={handleFormSubmit}  initialData={condominium} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateOrEditPage;

