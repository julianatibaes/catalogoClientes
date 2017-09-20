package br.edu.up.clients.model;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import br.edu.up.clients.model.Client;
import br.edu.up.clients.model.DAO;

public class ClientDAO implements DAO<Client>{

	private final EntityManagerFactory entityManagerFactory;
	private final EntityManager entityManager;
	
	public ClientDAO() {
		this.entityManagerFactory = Persistence.createEntityManagerFactory("persistence_cliente");
		this.entityManager = entityManagerFactory.createEntityManager();
	}

	@Override
	public void salvar(Client cliente) {
		this.entityManager.getTransaction().begin();
		this.entityManager.persist(cliente);
		this.entityManager.getTransaction().commit();
	}

	@Override
	public void editar(Client cliente) {
		this.entityManager.getTransaction().begin();
		this.entityManager.merge(cliente);
		this.entityManager.getTransaction().commit();
		
	}

	@Override
	public void excluir(Integer id) {
		
		this.entityManager.getTransaction().begin();
		this.entityManager.remove(buscarPorId(id));
		this.entityManager.getTransaction().commit();
		
	}

	@Override
	public List listar() {
		
		return this.entityManager.createQuery("SELECT c FROM Client c ORDER BY c.nome").getResultList();
	}

	@Override
	public Client buscarPorId(Integer id) {
		
		return this.entityManager.find(Client.class, id);
	}
	
}
