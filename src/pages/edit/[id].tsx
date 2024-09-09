import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CondominiumForm, { CondominiumData } from '../../components/CondominiumForm';
import '../../styles/global.css';
import Sidebar from '../../components/sideBar';

const EditCondominiumPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;  
  const [condominium, setCondominium] = useState<CondominiumData | null>(null);
  
  useEffect(() => {
    if (id) {
      fetch(`https://administradora-digital-run1-mfrrjeldtq-uc.a.run.app/api/Condominios/${id}`)
        .then(response => response.json())
        .then(data => setCondominium(data))
        .catch(error => console.error('Erro ao buscar condomínio:', error));
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
      console.log('Condomínio salvo:', result);
      alert('Alterações salvas');
      router.push('/');  
    })
    .catch(error => {
      console.error('Erro ao salvar condomínio:', error);
    });
  };

  if (!condominium) return <p>Carregando dados do condomínio...</p>;

  return (
    <div className="flex">
    <Sidebar />
     <div className="main-content">
      <div className="form-container">
        <div className="form-box">
          <h1>Editando Condomínio</h1>
            <CondominiumForm 
           initialData={condominium} 
          onSubmit={handleFormSubmit}  
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCondominiumPage;

