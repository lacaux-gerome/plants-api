#!/bin/bash
psql postgres
CREATE DATABASE plants TEMPLATE template0;
create user admin with encrypted password 'admin_psw';
ALTER USER admin SUPERUSER plants;