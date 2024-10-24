
  async function fetchUsers() {// Função  para buscar dados da API e preencher a tabela /  asyn permite o uso do await
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');//  requisição HTTP para a API e (await)aguarda a resposta
        const users = await response.json();// Converte a resposta em JSON e aguarda o resultado
        const tableBody = document.querySelector('#userTable tbody');// obtem o tbody da table
        //console.log(tableBody);
        
    
        // Itera sobre o array de usuários
        users.forEach(user => {
          const row = document.createElement('tr');// Cria uma nova linha no tbody

          // Preenche a linha da tabela com os dados do usuário
          row.innerHTML = ` 
          <td>` + user.id + `</td>         <!-- ID do usuário -->
            <td>` + user.name + `</td>       <!-- Nome completo do usuário -->
            <td>` + user.username + `</td>   <!-- Nome de usuário (username) -->
            <td>` + user.email + `</td>      <!-- Email do usuário -->
            <td>` + user.phone + `</td>      <!-- Telefone do usuário -->
            <td>` + user.website + `</td>    <!-- Website do usuário -->
            <td>` + user.address.street + ", " + user.address.suite + ", " + user.address.city +  ", " + user.address.zipcode + `</td> <!-- Endereço completo -->
            <td>` + "Lat: " + user.address.geo.lat + ", Lng: " + user.address.geo.lng + `</td> <!-- Coordenadas geográficas -->
            <td>` + user.company.name + " - " + user.company.catchPhrase + `</td>         <!-- Nome e slogan da empresa -->
          `;
    
          // Adiciona a nova linha ao tbody da tabela
          tableBody.appendChild(row);
        });
    
      } catch (error) {
        // Em caso de erro, exibe a mensagem de erro no console
        console.error('Erro ao buscar usuários:', error);
    
        // Exibe uma mensagem de erro na tabela se a API falhar
        const tableBody = document.querySelector('#userTable tbody');// obtem o body da table
        tableBody.innerHTML = '<tr><td colspan="9">Erro ao carregar dados.</td></tr>';//dentro do body table /cria linha e msg
      }
    }
    
    fetchUsers();
   
    