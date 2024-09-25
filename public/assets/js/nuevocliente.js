// Al cargar la página, obtener la lista de clientes
document.addEventListener('DOMContentLoaded', function() {
    fetchCustomers();
});

// Manejo del formulario para añadir/editar cliente
document.getElementById('customerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const customerId = document.getElementById('customerId').value;
    const customerData = {
        name: document.getElementById('customerName').value,
        email: document.getElementById('customerEmail').value,
        phone: document.getElementById('customerPhone').value,
        address: document.getElementById('customerAddress').value
    };

    if (customerId) {
        // Si hay un ID, editar cliente
        updateCustomer(customerId, customerData);
    } else {
        // Si no hay ID, añadir nuevo cliente
        createCustomer(customerData);
    }

    // Limpiar el formulario después de enviar
    document.getElementById('customerForm').reset();
    document.getElementById('customerId').value = '';
});

// Función para obtener y mostrar los clientes desde la API
function fetchCustomers() {
    fetch('/api/customers')
        .then(response => response.json())
        .then(customers => {
            const tableBody = document.getElementById('customerTableBody');
            tableBody.innerHTML = ''; // Limpiar tabla

            customers.forEach(customer => {
                const newRow = document.createElement('tr');
                newRow.setAttribute('data-id', customer._id); // Asumiendo que la API devuelve `_id`
                newRow.innerHTML = `
                    <td>${customer._id}</td>
                    <td>${customer.name}</td>
                    <td>${customer.email}</td>
                    <td>${customer.phone}</td>
                    <td>${customer.address}</td>
                    <td>
                        <button class="btn btn-sm btn-warning" onclick="openEdit('${customer._id}')">Editar</button>
                        <button class="btn btn-sm btn-danger" onclick="deleteCustomer('${customer._id}')">Eliminar</button>
                    </td>
                `;
                tableBody.appendChild(newRow);
            });
        });
}

// Función para crear un nuevo cliente a través de la API
function createCustomer(customerData) {
    fetch('/api/customers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(customerData)
    })
    .then(response => response.json())
    .then(newCustomer => {
        fetchCustomers(); // Refrescar la tabla después de crear cliente
    });
}

// Función para actualizar un cliente a través de la API
function updateCustomer(customerId, customerData) {
    fetch(`/api/customers/${customerId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(customerData)
    })
    .then(response => response.json())
    .then(updatedCustomer => {
        fetchCustomers(); // Refrescar la tabla después de editar cliente
    });
}

// Función para eliminar cliente a través de la API
function deleteCustomer(customerId) {
    if (confirm('¿Estás seguro de que deseas eliminar este cliente?')) {
        fetch(`/api/customers/${customerId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(() => {
            fetchCustomers(); // Refrescar la tabla después de eliminar cliente
        });
    }
}

// Función para abrir el formulario de edición
function openEdit(customerId) {
    fetch(`/api/customers/${customerId}`)
        .then(response => response.json())
        .then(customer => {
            document.getElementById('customerId').value = customer._id;
            document.getElementById('customerName').value = customer.name;
            document.getElementById('customerEmail').value = customer.email;
            document.getElementById('customerPhone').value = customer.phone;
            document.getElementById('customerAddress').value = customer.address;
        });
}
