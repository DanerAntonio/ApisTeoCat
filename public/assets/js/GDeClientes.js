document.getElementById('openModalBtn').addEventListener('click', function () {
    document.getElementById('clientModal').style.display = 'flex';
});

document.getElementById('closeModalBtn').addEventListener('click', function () {
    document.getElementById('clientModal').style.display = 'none';
});

// Guardar cliente
document.getElementById('saveClientBtn').addEventListener('click', function () {
    const clientData = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        address: document.getElementById("address").value.trim(),
    };

    // Verificar que todos los campos tengan contenido
    if (!clientData.name || !clientData.email || !clientData.phone || !clientData.address) {
        alert('Todos los campos son obligatorios');
        return;
    }

    // Hacer petición POST para agregar un cliente
    fetch('/api/clients', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(clientData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
        return response.json();
    })
    .then(data => {
        console.log('Cliente agregado:', data);
        document.getElementById('clientModal').style.display = 'none'; // Cerrar el modal
        loadClients(); // Recargar la lista de clientes
    })
    .catch(err => {
        console.error('Error al agregar el cliente:', err);
        alert('No se pudo agregar el cliente. Verifica la consola para más detalles.');
    });
});

// Cargar clientes
function loadClients() {
    fetch('/api/clients')
    .then(response => response.json())
    .then(clients => {
        const clientList = document.getElementById('clientList');
        clientList.innerHTML = ''; // Limpiar lista
        clients.forEach(client => {
            const clientItem = document.createElement('div');
            clientItem.innerText = `${client.name} - ${client.email}`;
            clientList.appendChild(clientItem);
        });
    })
    .catch(err => console.error('Error al cargar los clientes:', err));
}

// Cargar clientes al iniciar
loadClients();
