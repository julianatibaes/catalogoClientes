package br.edu.up.clients.model;

import java.util.List;

public interface DAO<T> {

	public void salvar(T t);
	public void editar(T t);
	public void excluir(Integer id);
	public List listar();
	public T buscarPorId(Integer id);
}

