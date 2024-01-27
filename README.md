# Shopping List Backend

This is a Node.js backend for handling a shopping list using MongoDB.

## API Documentation

### Users

#### `POST /users`

Create a new user.

Request body:

```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "password123"
}
```

Response body:

```json
{
  "id": "5f9a7e6c6c6d6e6f70717273",
  "name": "John Doe",
  "email": "johndoe@example.com"
}
```

#### `GET /users/:id`

Get a user by ID.

Response body:

```json
{
  "id": "5f9a7e6c6c6d6e6f70717273",
  "name": "John Doe",
  "email": "johndoe@example.com"
}
```

#### `PUT /users/:id`

Update a user by ID.

Request body:

```json
{
  "name": "Jane Doe",
  "email": "janedoe@example.com"
}
```

Response body:

```json
{
  "id": "5f9a7e6c6c6d6e6f70717273",
  "name": "Jane Doe",
  "email": "janedoe@example.com"
}
```

#### `DELETE /users/:id`

Delete a user by ID.

### Items

#### `POST /items`

Create a new item.

Request body:

```json
{
  "name": "Milk",
  "quantity": 1,
  "price": 2.99
}
```

Response body:

```json
{
  "id": "5f9a7e6c6c6d6e6f70717274",
  "name": "Milk",
  "quantity": 1,
  "price": 2.99
}
```

#### `GET /items/:id`

Get an item by ID.

Response body:

```json
{
  "id": "5f9a7e6c6c6d6e6f70717274",
  "name": "Milk",
  "quantity": 1,
  "price": 2.99
}
```

#### `PUT /items/:id`

Update an item by ID.

Request body:

```json
{
  "name": "Eggs",
  "quantity": 12,
  "price": 1.99
}
```

Response body:

```json
{
  "id": "5f9a7e6c6c6d6e6f70717274",
  "name": "Eggs",
  "quantity": 12,
  "price": 1.99
}
```

#### `DELETE /items/:id`

Delete an item by ID.
