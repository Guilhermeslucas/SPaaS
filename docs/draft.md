## Introdução

Computação em Nuvem é um conceito que está cada vez mais presente no cotidiano de todas as pessoas. Mesmo sem perceber, uma quantidade gigantesca de aplicações que usamos hoje 
em dia lançam mão desse conceito tão central para o desenvolvimento econômico e tecnológico de nossa sociedade contemporânea. Esse conceito se baseia na capacidade de usarmos o
poder computacional de uma infinidade de serviços como Máquinas virtuais, Bancos de Dados e Redes Virutais sem necessariamente possuirmos máquinas físicas com tais serviços 
instalados e configurados, ainda sendo possível, de maneira simples, expor tais serviços e mecanismos para vários usuários ao redor do mundo.
Entre as modalidades principais de serviços de computação em nuvem, temos três categorias mais relevantes:

- **IaaS(Infrastructure as a Service):** essa é a maneira que dá mais responsabilidade ao usuário. Essa modalidade te dá máquinas virtualizadas que você deve gerenciar 
instalação de programas, configurações e etc. Exemplo disso são máquinas virtuais que rodam sistemas operacionais GNU/Linux e são acessadas remotamente.
- **PaaS(Plataform as a Service):** Aqui, o usuário não precisa se preocupar com pacotes de sistema, softwares e configurações. Esse sabor de computação em nuvem, tenta 
facilitar para desenvolvedores publicares suas aplicações. Isso siginifca que se, por exemplo, um usuário quiser publicar uma aplicação, não vai precisar se preocupar em
instalar compiladores nem pacotes necessários para rodar a aplicação naquela determinada linguagem.
- **SaaS(Software as a Service):** essa é a modalidade que traz menos autonomia para o desenvolvedor, sendo que, através dela, todo o rescurso é gerenciado pelo provedor de 
nuvem que é consumido. Alguns exemplos que podemos citar para ilustrar são bancos de dados como serviço, onde o usuário não se preocupa com nenhum tipo de infraestrutura, 
somente usa o endereço que o provedor cede e faz uso das possibildiades de armazenamento que a plataforma oferece.

Entre as vantagens de se adotar um modelo de computação em nuvem ao invés de investir em realmente adiquirir máquinas físicas, podemos citar:

- **Custo:** devido a possibilidade de pagar somente pelo o que está usando, ou seja, caso algum recurso está sendo pouco aproveitado, basta desligá-lo, usuários desse tipo de 
plataforma não gastarão para manter sistemas parados.
- **Escalabilidade:** A computação em nuvem permite que, caso a aplicação preciso de muito mais poder computacional do que possui no momento, seja extremamente simples aumentar
o número de instâncias ou o tamanho das máquinas, para atender mais usuários, gerando assim, mais receita.
- **Foco na aplicação:** desenvolvedores podem focar totalmente em escrever suas aplicações, sem a preocupação de gerenciar infraestutura e plataforma.

Entre os principais players de nuvem pública atualmente temos gigantes como Microsoft Azure(www.azure.com), Amazon Web Services(aws.com.br) e Google Cloud Plataform(gcp.com.br), 
oferecendo opções extremamente diversas para computação em nuvem, desde máquinas virtuais até mesmo bancos de dados gerenciados, onde a preocupação de gerenciamente fica totalmente
do lado do provedor do serviço.

Aplicações de HPC (High Processing Computing, computação de alto processamento, na tradução) são uma gama de programas que necessitam de muito poder computacional para 
completar as seus objetivos. Entre essas tarefas, estão o processamento de dados sísmicos, que são obtidas de maneira bruta e precisam de um trabalho muito pesado de tratamento
para que algumas conclusões possam ser feitas a partir dele. Ainda hoje, muitas dessas operações são feitas em servidores em institutos de pesquisas, por exemplo, podendo levar
a um custo excessivo, trabalho excessivo para gerenciamento de infraestrutura além de baixíssima agilidade e flexibilidade quanto a infraestrura. Assim, tais aplicações podem 
tirar muito proveito dos provedores de nuvem citados acima.

## Objetivos

Esse trabalho tem como objetivo desenvolver uma plataforma Open Source(CITACAO) que torne extremamente simples para usuários que não conhecem conceitos de Computação em Nuvem rodarem suas aplicações.
A princípio, foram usadas aplicações para a prova de conceito. O desejado para o final da plataforma era que os usuários conseguissem processar os trabalhos sísmico sem nenhum conhecimento de Nuvem.  
Ao final, esperamos a criação de uma plataforma web, que tinha como principais funcionalidades:

- **Submissão e gerenciamente de dados:** Essa funcionalidade é a responsável pelo upload de dados que serão usados nos processamentos, além de consultar quais dados foram submetidos, baixá-los e também
excluí-los, caso necessário. 
- **Submissão e gerenciamento de binários:** esse componente do projeto é extremamente semelhante com a que detalhamos acima, porém, ao invés dos dados sísmicos, os artefatos que são gerenciados são os 
binários das aplicações que serão utilizados nos processos.
- **Definição de tarefas sísmicas:** Utilizando os dados e binários submetidos a partir das duas funcionalidades citadas anteriormente, o objetivo era conseguir lançar um processamento que combina os dados e 
binários, além dos argumentos necessários.
- **Obtenção dos resultados:** Ao final dos processos, é desejado que se consiga obter todos os resultados desse de maneira simples e rápida.

## Relevancia

Ao buscar por outras soluções que tem o mesmo intuito da plataforma que esse trabalho tem por objetivo desenvolver, notamos a sua extrema relevância, uma que vez que é extremamente difícil achar outros softwares
open source que executam tal tarefa.
Além da unicidade que o trabalho possui no cenários atual, ele se torna relevante já que ele pode abstrair os novos conceitos e a curva de aprendizado que vem junto com a computação em nuvem. Assim é possível
tirar proveito de todos os benefícios que foram citados acima, levando a possibilidade de um uso muito mais inteligente dos recursos, baixando custos e aumentando a produtividade.


## Procedimento

## Resultados

## Referencia