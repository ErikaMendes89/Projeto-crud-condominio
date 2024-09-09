import React from 'react';
import { useRouter } from 'next/router';

const Sidebar: React.FC = () => {
  const router = useRouter();
  return (
    <div className="sidebar">
     <div>
    <div className="sidebar-item" onClick={()=> router.push('/')}>
      <i className="sidebar-item-icon fas fa-list-alt"></i>
      <span>Lista de Condomínios</span>
    </div>
    <div className="sidebar-item" onClick={() => router.push('/create')}>
      <i className="sidebar-item-icon fas fa-plus-circle"></i>
      <span>Adicionar Condomínio</span>
    </div>
    </div>
</div>
  )
};

export default Sidebar;

