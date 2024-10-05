Le **Single Responsibility Principle (SRP)** stipule qu’une classe ou un module ne doit avoir **qu’une seule raison de changer**. Cela signifie qu'elle doit être responsable d'une seule fonctionnalité ou d'une cohérence conceptuelle dans le code.

## Objectif
Le but du SRP est de rendre le code **plus modulaire** et **facile à maintenir**. Si une classe a plusieurs responsabilités, des modifications dans l'une des responsabilités pourraient affecter les autres, ce qui augmente le risque d'erreurs et de bugs.

### Exemple simple (TypeScript)
Prenons un exemple où une classe viole le SRP.

#### Mauvais exemple (non conforme au SRP)
```typescript
class UserService {
    createUser(user: { name: string; email: string }) {
        // Créer un utilisateur
        console.log(`User ${user.name} created.`);

        // Envoie un email de bienvenue
        console.log(`Email sent to ${user.email}.`);
    }
}
```

Dans cet exemple, la classe `UserService` fait deux choses :

1. Elle crée un utilisateur.
2. Elle envoie un email de bienvenue.

Cela viole le SRP parce qu’elle a deux raisons de changer :

* Si la logique de création de l’utilisateur change.
* Si la manière d’envoyer un email change.

#### Bon exemple (conforme au SRP)
On peut refactorer ce code pour suivre le SRP en séparant les responsabilités dans des classes distinctes :

```typescript
// Responsabilité 1: Gestion des utilisateurs
class UserService {
    createUser(user: { name: string; email: string }) {
        console.log(`User ${user.name} created.`);
        return user;
    }
}

// Responsabilité 2: Gestion des emails
class EmailService {
    sendWelcomeEmail(email: string) {
        console.log(`Email sent to ${email}.`);
    }
}

// Utilisation
const userService = new UserService();
const emailService = new EmailService();

const newUser = userService.createUser({ name: "John", email: "john@example.com" });
emailService.sendWelcomeEmail(newUser.email);
```

Ici, nous avons deux classes distinctes avec chacune une responsabilité spécifique :

1. `UserService` : Gère uniquement la création d'un utilisateur.

2. `EmailService` : Gère uniquement l'envoi d'email.
Chaque classe n'a qu'une seule raison de changer, ce qui rend le code plus maintenable et évolutif.

### Avantages du respect du SRP

1. **Facilité de maintenance** : Si vous devez changer la manière dont un utilisateur est créé, vous modifiez uniquement `UserService` sans affecter la logique d'envoi d'email.

2. **Testabilité accrue** : Chaque classe ayant une seule responsabilité, les tests unitaires sont plus faciles à écrire et à maintenir.

3. **Réutilisation du code** : Les classes deviennent plus réutilisables car elles sont focalisées sur une seule tâche.


### Exemple plus avancé (TypeScript)

Imaginons un système de gestion de commandes où les responsabilités sont bien séparées.

#### Mauvais exemple (violation du SRP)
```typescript
class OrderService {
    createOrder(order: { productId: number; quantity: number }) {
        // Logique de création de commande
        console.log(`Order created with product ID ${order.productId}`);

        // Envoie de la facture
        console.log(`Invoice sent for product ID ${order.productId}`);
    }
}
```

#### Bon exemple (respect du SRP)
```typescript
class OrderService {
    createOrder(order: { productId: number; quantity: number }) {
        console.log(`Order created with product ID ${order.productId}`);
        return order;
    }
}

class InvoiceService {
    sendInvoice(order: { productId: number }) {
        console.log(`Invoice sent for product ID ${order.productId}`);
    }
}

// Utilisation
const orderService = new OrderService();
const invoiceService = new InvoiceService();

const newOrder = orderService.createOrder({ productId: 1, quantity: 2 });
invoiceService.sendInvoice(newOrder);
```

Ici, `OrderService` est responsable de la création des commandes et `InvoiceService` de l'envoi de factures, chaque classe ayant sa propre responsabilité clairement définie.

## Conclusion
En respectant le **Single Responsibility Principle**, on obtient un code qui :

* Est plus **lisible** et **cohérent**.
* Limite les **effets de bord** (les changements dans une responsabilité n’affectent pas les autres).
* Est **plus facile à tester**.

Cela contribue à des systèmes plus évolutifs et maintenables, tout en réduisant la complexité et en facilitant l’ajout de nouvelles fonctionnalités.