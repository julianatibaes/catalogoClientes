package br.edu.up.clients.controller;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import br.edu.up.clients.model.Client;
import br.edu.up.clients.model.ClientDAO;

@Path("/client_api")
public class ClientController {
	
private final ClientDAO clienteDAO = new ClientDAO();
	
	@POST
	@Consumes("application/json; charset=UTF-8")
	@Produces("application/json; charset=UTF-8")
	@Path("/cadastrar")
	public String cadastrar(Client cliente) {
		try {
			
			clienteDAO.salvar(cliente);
			
			return "Cliente cadastrado com sucesso.";
		} catch (Exception e) {
			return "Erro ao cadastrar o cliente. " + e.getMessage();
		}

	}
	
	@POST
	@Consumes("application/json; charset=UTF-8")
	@Produces("application/json; charset=UTF-8")
	@Path("/editar")
	public String editar(Client cliente) {
		try {
			
			clienteDAO.editar(cliente);
			
			return "Cliente cadastrado com sucesso.";
		} catch (Exception e) {
			return "Erro ao cadastrar o cliente. " + e.getMessage();
		}

	}
	
	@DELETE
	@Produces("application/json; charset=UTF-8")
	@Path("/excluir/{id}")
	public String excluir(@PathParam("id") Integer id) {
		try {
			
			clienteDAO.excluir(id);
			
			return "Cliente excluído com sucesso.";
		} catch (Exception e) {
			return "Erro ao excluir o cliente. " + e.getMessage();
		}

	}
	
	@GET
	@Produces("application/json; charset=UTF-8")
	@Path("/buscarPorId/{id}")
	public Client buscarPorId(@PathParam("id") Integer id) {
		
		Client cliente = clienteDAO.buscarPorId(id);

	    if(cliente != null)
	    	return cliente;
		
		return null;
	}
	
	@GET
	@Produces("application/json; charset=UTF-8")
	@Path("/buscarTodos")
	public List<Client> listar() {
		
		List<Client> clientes = clienteDAO.listar();

	    if(clientes != null)
	    	return clientes;
		
		return null;
	}
}
