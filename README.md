# 👩🏾‍💻 CRUD de Condomínios 
<p>Este projeto é uma aplicação web CRUD (Create, Read, Update, Delete) desenvolvida com React e Next.Js para a administração de condomínios. A aplicação permite que os usuários adicionem, editem, listem e removam condomínios, integrando com uma API para gerenciar os dados. A interface é simples e funcional, com navegação por meio de uma barra lateral e formulários para facilitar a interação.</p>

## Funcionalidades Principais
<ol>
  <li><b>Listar Condomínios:</b> Exibe todos os condomínios registrados, com informações como nome, endereço, quantidade de unidades e data de início da administração</li>
 <li><b>Adicionar Condomínio:</b> Formulário para adicionar novos condomínios ao sistema.</li> 
  <li><b>Editar Condomínio:</b> Possibilidade de editar as informações de um condomínio já registrado.</li>
  <li><b>Deletar Condomínio:</b> Opção para remover um condomínio.</li>
  <li><b>API Integrada:</b> As operações de CRUD são feitas utilizando uma API externa.</li>
</ol>

##  estrutura do projeto
📌<b>Componentes</b>
<ul>
  <li><b>Button:</b> Componente reutilizável de botão.</li>
  <li><b>CondominiumForm:</b> Formulário para criar ou editar condomínios.</li>
  <li><b>CondominiumList:</b> Lista de condomínios com opções para editar e deletar.</li>
  <li><b>Sidebar:</b> Barra lateral para navegação entre as páginas de listagem e criação de condomínios.</li>
</ul>
<br>
📌<b>Páginas</b><br>

<ul>
  <li><b>IndexPage:</b>Página inicial que exibe a lista de condomínios.</li>
  <li><b>CreateOrEditPage:</b> Página responsável pela criação ou edição de condomínios.</li>
  <li><b>EditCondominiumPage:</b> Página para edição de um condomínio existente.</li>
</ul>
<br>

## Tecnologias Utilizadas
<ul>
  <li><b>React:</b> Biblioteca JavaScript para construir a interface do usuário.</li>
  <li><b>Next.js:</b> Framework utilizado para o roteamento e renderização do lado do servidor.</li>
  <li><b>Tailwind CSS:</b> Framework de CSS para estilização da aplicação.</li>
  <li><b>API REST:</b>Para interação com os dados dos condomínios.</li>
</ul>

## Como rodar o Projeto
🟣 Clone o Repositório: git clone https://github.com/ErikaMendes89/crud-condominio.git<br>
🟣 Instale as dependências: npm install <br>
🟣 Execute o projeto: npm run dev <br>
🟣 Acesse o Projeto no Navegador: http://localhost:3000<br>

## Detalhes de Funcionamento
<br>
📌<b>Listagem de Condomínios</b><br><br>

A listagem dos condomínios é feita através do componente `CondominiumList`, que faz uma requisição à API para obter os dados. Cada condomínio exibe suas informações principais e possui botões para edição e exclusão.<br><br>

📌<b>Formulário de Criação e Edição</b><br><br>

O componente `CondominiumForm` gerencia tanto a criação quanto a edição de condomínios. Ele utiliza o estado local para armazenar os dados do formulário e envia uma requisição `POST` ou `PUT` para a API, dependendo se é uma criação ou edição.<br><br>

📌<b>Exclusão de Condomínio<b><br><br>

A exclusão de condomínios é feita diretamente na lista. Quando o usuário confirma a exclusão, uma requisição `DELETE` é enviada para a API, removendo o condomínio da lista.<br><br>

## Melhorias Futuras
<ul>
  <li>Adicionar paginação à lista de condomínios.</li>
  <li>Implementar autenticação de usuários para maior segurança.</li>
  <li>Melhorar a experiência do usuário com notificações e validação de formulários.</li>
</ul>

## Contribuição

Contribuições são bem-vindas! Se você tiver alguma sugestão ou melhoria, sinta-se à vontade para abrir um Pull Request.

## Video demonstração
[
https://drive.google.com/drive/folders/12z7L8n07eRH39lujAh1xEiORzpOffCbV](https://drive.google.com/file/d/1rtjV9d0QRWbW3A1R57bg2goA2yf_Pc68/view?usp=sharing)








