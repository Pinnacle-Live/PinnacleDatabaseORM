# PinnacleDatabaseORM
📘 Project Summary
This Node.js project uses Sequelize as an ORM to interact with a SQL Server database. It maps JavaScript models to SQL tables, handles associations, and synchronizes the schema programmatically.

🗃️ Models Created
The following Sequelize models have been defined:

Category – Represents product categories.

ContactInfo – Stores contact details (with isPrimary flag).

Venue – Represents event venues, linked to ContactInfo.

Event – Represents events, linked to Venue and ContactInfo.

Product – Represents products offered at venues; supports hierarchy.

EventProduct – Associates products with events.

Order – Represents customer orders.

OrderItem – Represents line items in an order.

VenueContact – Many-to-many mapping between venues and contacts.

🔁 Sequelize Usage
Sequelize is configured with MSSQL using tedious.

Models are defined using sequelize.define().

Relationships are mapped via belongsTo, hasMany, and foreign key constraints.

Schema is synced using sequelize.sync() to automatically create tables if they don't exist.

Default values and constraints (e.g., onDelete, NOT NULL, DEFAULT) are handled in model definitions.
