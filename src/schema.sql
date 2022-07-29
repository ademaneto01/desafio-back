CREATE DATABASE salt_system

drop table if exists usuarios;

create table usuarios (
  	nome text not null,
  	email text not null unique
);