// api.js
const API_BASE_URL = 'http://127.0.0.1:5000/api/clients';

const api = {
  // Obtener todos los clientes
  getClients: async () => {
    const response = await fetch(`${API_BASE_URL}/clients`);
    if (!response.ok) {
      throw new Error('Error al obtener los clientes');
    }
    return response.json();
  },

  // Obtener un cliente específico
  getClient: async (id) => {
    const response = await fetch(`${API_BASE_URL}/clients/${id}`);
    if (!response.ok) {
      throw new Error('Error al obtener el cliente');
    }
    return response.json();
  },

  // Crear un nuevo cliente
  createClient: async (clientData) => {
    const response = await fetch(`${API_BASE_URL}/clients`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(clientData),
    });
    if (!response.ok) {
      throw new Error('Error al crear el cliente');
    }
    return response.json();
  },

  // Actualizar un cliente existente
  updateClient: async (id, clientData) => {
    const response = await fetch(`${API_BASE_URL}/clients/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(clientData),
    });
    if (!response.ok) {
      throw new Error('Error al actualizar el cliente');
    }
    return response.json();
  },

  // Eliminar un cliente
  deleteClient: async (id) => {
    const response = await fetch(`${API_BASE_URL}/clients/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Error al eliminar el cliente');
    }
    return response.json();
  },
};

// Exporta el objeto api para usarlo en otros archivos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = api;
} else {
  window.api = api;
}