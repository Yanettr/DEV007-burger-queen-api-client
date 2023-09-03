const stringJSON = "application/json";
const http = "http://localhost:8080/products";
const baseURL = "http://localhost:8080/";

/*------------------------------------petición para loguearse---------------------------*/
export async function loginUser(email, password) {
    try {
      const response = await fetch(`${baseURL}login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
  
      if (!response.ok) {
        throw new Error(`Error de red: ${response.status} ${response.statusText}`);
      }
  
      const data = await response.json();
      
      if (data.user) {
        localStorage.setItem("token", data.accessToken);
        localStorage.setItem("role", data.user.role);
        return data; 
      } else {
        return false; 
      }
    } catch (error) {
      console.error(error);
      throw error; 
    }
  }
  

/*------------------------------------- Petición para users --------------------------------------*/

/* Función para obtener información de usuarios */
export function getUser() {
  return fetch(`${http}users`, {
    method: "GET",
    headers: {
      "Content-type": stringJSON,
    },
  })
    .then((res) => res.json()) // Devuelve la respuesta JSON
    .catch((err) => {
      return err; // Devuelve el error en caso de que ocurra
    });
}

/* Función para crear usuarios */
export function createUser(email, password, role) {
  return fetch(`${http}users`, {
    method: "POST",
    headers: {
      "Content-type": stringJSON,
    },
    body: JSON.stringify({
      email: email,
      password: password,
      role: role,
    }),
  })
    .then((res) => res.json()) // Devuelve la respuesta JSON
    .catch((err) => {
      return err; // Devuelve el error en caso de que ocurra
    });
}

/* Función para eliminar usuarios */
export function deleteUser(id, token) {
  return fetch(`${http}users/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  })
    .then((res) => res.json()) // Devuelve la respuesta JSON
    .catch((err) => {
      return err; // Devuelve el error en caso de que ocurra
    });
  }

/* Función para editar usuarios */
export function editUser(token, uid, email, password, role) {
  return fetch(`${http}users/${uid}`, {
    method: "PATCH",
    headers: {
      "Content-type": stringJSON,
      Authorization: token,
    },
    body: JSON.stringify({
      email: email,
      password: password,
      role: role,
    }),
  })
    .then((res) => res) // Devuelve la respuesta
    .catch((err) => err); // Devuelve el error en caso de que ocurra
}

/*------------------------------------- Petición para products --------------------------------------*/

/* Función para obtener información de productos */
export function getProduct() {
  return fetch(`${http}products`, {
    method: "GET",
    headers: {
      "Content-type": stringJSON,
    },
  })
    .then((res) => res.json()) // Devuelve la respuesta JSON
    .catch((err) => {
      return err; // Devuelve el error en caso de que ocurra
    });
}

/* Función para eliminar productos */
export function deleteProduct(id, token) {
  return fetch(`${http}products/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  })
    .then((res) => res.json()) // Devuelve la respuesta JSON
    .catch((err) => {
      return err; // Devuelve el error en caso de que ocurra
    });
}

/* Función para editar productos */
export function editProduct(token, uid, product, price, image, type) {
  return fetch(`${http}products/${uid}`, {
    method: "PATCH",
    headers: {
      "Content-type": stringJSON,
      Authorization: token,
    },
    body: JSON.stringify({
      product: product,
      price: price,
      image: image,
      type: type,
    }),
  })
    .then((res) => res) // Devuelve la respuesta
    .catch((err) => err); // Devuelve el error en caso de que ocurra
}

/* Función para crear productos */
export function createProduct(token, product, price, image, type) {
  return fetch(`${http}products`, {
    method: "POST",
    headers: {
      "Content-type": stringJSON,
      Authorization: token,
    },
    body: JSON.stringify({
      name: product,
      price: price,
      image: image,
      type: type,
    }),
  })
    .then((res) => res.json()) // Devuelve la respuesta JSON
    .catch((err) => {
      return err; // Devuelve el error en caso de que ocurra
    });
}

/* ----------------------------------------------------Petición para crear Ordenes-----------------------------------------*/ 


export function createOrder(token, object) {
  return fetch(`${http}orders`, {
    method: "POST",
    headers: {
      "Content-type": stringJSON,
      Authorization: token,
    },
    body: JSON.stringify( object ),
  })
    .then((res) => {
      //console.log(res);
      // console.log(res.statusText)
       res.json()
    })
    .catch((err) => {
      err
      // console.log(err.message);
    });
}

export function getOrder(token) {
  return fetch(`${http}orders`, {
    method: "GET",
    headers: {
      Authorization: token,
    },
  })
    .then((res) => res.json())
    .catch((err) => {
     //  console.log(err.message);
      return err;
    });
}
export function editOrder(token, uid, status) {
  return fetch(`${http}orders/${uid}`, {
    method: "PATCH",
    headers: {
      "Content-type": stringJSON,
      Authorization: token,
    },
    body: JSON.stringify({
      status: status,
      dateProcessed: new Date()
    }),
  })
    .then((res) => {
      res;
      // console.log(res);
    })
    .catch((err) => /*console.log(err.message)*/ err);
}

export function deleteOrder(token, uid) {
  return fetch(`${http}orders/${uid}`, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json(); // Opcional, puedes devolver algo si lo necesitas
      } else {
        throw new Error("Error al eliminar el pedido");
      }
    })
    .catch((err) => {
      // Manejar el error aquí si es necesario
      return err;
    });
}
