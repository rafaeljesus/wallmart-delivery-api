## wallmart-delivery-api

[![Build Status](https://travis-ci.org/rafaeljesus/wallmart-delivery-api.svg?branch=master)](https://travis-ci.org/rafaeljesus/wallmart-delivery-api) [![Code Climate](https://codeclimate.com/github/rafaeljesus/wallmart-delivery-api/badges/gpa.svg)](https://codeclimate.com/github/rafaeljesus/wallmart-delivery-api) [![Test Coverage](https://codeclimate.com/github/rafaeljesus/wallmart-delivery-api/badges/coverage.svg)](https://codeclimate.com/github/rafaeljesus/wallmart-delivery-api/coverage)

#### Description
: Entregando mercadorias

O Walmart esta desenvolvendo um novo sistema de logistica e sua ajuda é muito importante neste momento.
Sua tarefa será desenvolver o novo sistema de entregas visando sempre o menor custo.
Para popular sua base de dados o sistema precisa expor um Webservices que aceite o formato de malha logística (exemplo abaixo),
nesta mesma requisição o requisitante deverá informar um nome para este mapa.
É importante que os mapas sejam persistidos para evitar que a cada novo deploy todas as informações desapareçam.
O formato de malha logística é bastante simples, cada linha mostra uma rota: ponto de origem, ponto de destino e distância entre os pontos em quilômetros.

A B 10
B D 15
A C 20
C D 30
B E 50
D E 30

Com os mapas carregados o requisitante irá procurar o menor valor de entrega e seu caminho,
para isso ele passará o mapa, nome do ponto de origem, nome do ponto de destino, autonomia do caminhão (km/l) e o valor do litro do combustivel,
agora sua tarefa é criar este Webservices. Um exemplo de entrada seria, mapa SP, origem A, destino D, autonomia 10, valor do litro 2,50;
a resposta seria a rota A B D com custo de 6,25.

Você está livre para definir a melhor arquitetura e tecnologias para solucionar este desafio,
mas não se esqueça de contar sua motivação no arquivo README que deve acompanhar sua solução,
junto com os detalhes de como executar seu programa. Documentação e testes serão avaliados também =)
Lembre-se de que iremos executar seu código com malhas beeemm mais complexas,
por isso é importante pensar em requisitos não funcionais também!!

## Built with
- [iojs](https://iojs.org) &mdash; Back end is a iojs.
- [koa](http://koajs.com) &mdash; API is a KOA app. It respond to requests RESTfully in JSON.

## API

##### Maps
(POST /v1/maps) create a map

## Maintaners

* [Rafael Jesus](https://github.com/rafaeljesus)

## License
wallmart-delivery-api is released under the [MIT License](http://www.opensource.org/licenses/MIT).
