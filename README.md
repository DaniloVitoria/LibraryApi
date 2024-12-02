# LibraryApi

## Descrição do projeto
A LibraryApi é uma API para gerenciar uma biblioteca, permitindo:

Realizar empréstimos de livros.
Registrar devoluções de livros.
Gerar relatórios de livros mais emprestados.
Listar usuários com empréstimos pendentes.
Gerenciar usuários e livros da biblioteca.
O projeto é estruturado em controladores (controllers) e modelos (models) que interagem com um banco de dados para armazenar e recuperar informações sobre empréstimos, usuários e livros.

---




## Mindmap
Mapa mental

 
![mindmapcortado](https://github.com/user-attachments/assets/f06e7d5c-2b21-4a5b-90e2-faafcd024054)


---

## Fluxograma
Fluxograma

![modificarmodificado](https://github.com/user-attachments/assets/76213fed-b22a-4a6d-a9ee-e7a33e3f5bc3)


---


## Diagrama de classes

![DiagramadeClassesfuncionando](https://github.com/user-attachments/assets/4e21406c-a599-485d-80c3-dfa803458521)


---


## Fluxograma do repositório

![Fluxogramacompleto](https://github.com/user-attachments/assets/67cecf2c-2722-46b2-ad55-30634479865f)



---




DIAGRAMA DO BANCO DE DADOS:

![databasedocument](https://github.com/user-attachments/assets/534db501-ebeb-4ae8-98e1-651d8a42e032)



## Pré-requisitos
  Ter o Node.js instalado na sua máquina

  Linguaguens usadas:
  -
  Javascript

---
 
Tutorial do fluxo de trabalho para poder trabalhar com a API:
---

## Como ter o repositório na máquina

Pré-requisitos:
Ter o Node.js instalado na máquina.

1 Para ter o reposiórito na sua máquina para fazer alterações no código:

1.1 Clonando o Repositório
Para começar a trabalhar no projeto, você precisa clonar o repositório para sua
máquina local.
git clone https://github.com/DaniloVitoria/LibraryApi.git
cd LibraryApi

---


### Framework usado no projeto 
2 Framework usado no projeto LibraryApi:

2.2 O projeto utiliza o framework Express.js para criar a API, é necessário que abra o seu terminal.
Instale as dependências do projeto com o comando: npm install express

---


## Trabalhando com outros desenvolvedores

3 Caso esteja trabalhando em conjunto com outros desenvolvedores, use o Git para versionar seu código:
---

3.1. Criando uma Nova Branch

Antes de começar a trabalhar em uma nova funcionalidade ou correção de bug, crie
uma nova branch. É uma boa prática nomear a branch de forma descritiva.


git checkout -b nome-da-sua-branch


3.2. Fazendo Alterações
Realize as alterações necessárias no código. Após fazer as alterações, você pode
verificar o status dos arquivos modificados.
git status


3.3. Adicionando Alterações
Adicione os arquivos que você deseja incluir no próximo commit. Você pode adicionar
arquivos específicos ou todos os arquivos modificados.


git add nome-do-arquivo

ou para adicionar todos os arquivos
git add .


3.4. Fazendo um Commit
Depois de adicionar as alterações, faça um commit com uma mensagem descritiva.

git commit -m "Descrição clara do que foi alterado"


3.5. Sincronizando com o Repositório Remoto
Antes de enviar suas alterações, é uma boa prática garantir que sua branch esteja
atualizada com a branch principal (branch usada no repositório remoto main).

1 git checkout main
2 git pull origin main
3 git checkout nome-da-sua-branch
4 git merge main


3.6. Resolvendo Conflitos (se necessário)
Se houver conflitos durante o merge, você precisará resolvê-los manualmente. Após
resolver os conflitos, adicione os arquivos novamente e faça um commit.
1 git add nome-do-arquivo-resolvido
2 git commit -m "Resolvendo conflitos"


3.7. Enviando Alterações para o Repositório Remoto
Depois de fazer o commit, você pode enviar suas alterações para o repositório remoto.
git push origin nome-da-sua-branch

---





## Contribuindo
Como contribuir: 

1 Clonar o repositório forked
git clone https://github.com/seu-usuario/LibraryApi.git

2 Navegar para o diretório do repositório
```
cd LibraryApi
```

3 Criar uma nova branch
```
git checkout -b nome-da-sua-branch
```
4 Adicionar alterações

```
git add .
```

5 Fazer um commit

```
git commit -m "Descreva suas alterações aqui"
```

6 Adicionar repositório original como remoto
```
git remote add upstream https://github.com/DaniloVitoria/LibraryApi.git
```

7 Atualizar a branch principal
```
git checkout main
```

```
git pull upstream main
```

```
git checkout nome-da-sua-branch

```

```
git merge main
```


8 Enviar a branch para o repositório forked

```
git push origin nome-da-sua-branch
```


---



















Definição do tutorial do fluxo de trabalho, lista de comandos usado no git e durante o desenvolvimento do projeto está no caminho (fluxodedocumentos\listadedocumentos\Tutorial de fluxo de trabalho.pdf)

Definição de ferramentas, bibliotecas, framework e dispositivos para desenvolver o projeto, detalhando cada uma delas está no caminho (fluxodedocumentos\listadedocumentos\Lista de ferramentas)



Casos






Estrutura de pasta


![estruturadepastasmelhorada2](https://github.com/user-attachments/assets/df848ef2-cbc9-47db-a06b-136e58aff791)




## Autores
| Nome                | Papel                     | GitHub                                      |
|---------------------|---------------------------|---------------------------------------------|
| **Thiago Cavalcanti**     | Scrum Master             | [Thiago Cavalcanti](https://github.com/ThiagoCsilvaa) |
| **Danilo Ricardo** | Gerente de Configuração             | [Danilo Ricardo da Silva Tavares](https://github.com/DaniloVitoria) |
| **Pedro Guilherme**   | Documentador | [Pedro Guilherme](https://github.com/Pedriito12) |
| **Rodrigo Amorim**|    Desenvolvedor | [Rodrigo Amorim ](https://github.com/AmorimRodrigoo)      |
| **Bruno Severino**  | Desenvolvedor             | [Bruno Severino de Almeida Rocha](https://github.com/MysticXiz) |


