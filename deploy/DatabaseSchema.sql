
-- ================================================
-- Database Schema SQL Script
-- ================================================

-- 1. Venues
CREATE TABLE Venues (
    VenueID INT PRIMARY KEY IDENTITY,
    Name VARCHAR(255) NOT NULL,
    VenueNumber INT NOT NULL,
    StreetAddress VARCHAR(500),
    City VARCHAR(100),
    State VARCHAR(100),
    PostalCode VARCHAR(20),
    Country VARCHAR(100),
    Phone VARCHAR(12),
    VenueInfo VARCHAR(500),
    VenueLogo VARCHAR(500),
    VenueHeader VARCHAR(500),
    TaxRate DECIMAL(10,2),
    TechnologyFee DECIMAL(10,2),
    Labour DECIMAL(10,2),
    OnsiteFee DECIMAL(10,2),
    IsLabourTaxable BIT NOT NULL DEFAULT 1,
    OnsiteFeeAdded INT,
    ContactID INT,
    IsActive BIT NOT NULL DEFAULT 1,
    FOREIGN KEY (ContactID) REFERENCES ContactInfo(ContactID)
);

-- 2. Events
CREATE TABLE Events (
    EventID INT PRIMARY KEY IDENTITY,
    VenueID INT,
    ContactID INT,
    ProjectID INT NOT NULL,
    ClientID INT NOT NULL,
    Name VARCHAR(255) NOT NULL,
    Description VARCHAR(MAX),
    StartDate DATETIME NOT NULL,
    EndDate DATETIME,
    EventLogo VARCHAR(500),
    EventHeader VARCHAR(500),
    EventThumbnail VARCHAR(500),
    IsActive BIT NOT NULL DEFAULT 1,
    FOREIGN KEY (VenueID) REFERENCES Venues(VenueID),
    FOREIGN KEY (ContactID) REFERENCES ContactInfo(ContactID)
);

-- 3. Categories
CREATE TABLE Categories (
    CategoryID INT PRIMARY KEY IDENTITY,
    CategoryName VARCHAR(255) NOT NULL,
    IsActive BIT NOT NULL DEFAULT 1
);

-- 4. Products
CREATE TABLE Products (
    ProductID INT PRIMARY KEY IDENTITY,
    VenueID INT,
    CategoryID INT,
    ParentProductID INT,
    Name VARCHAR(255) NOT NULL,
    Description VARCHAR(MAX),
    ProductImage VARCHAR(500),
    Type VARCHAR(100),
    MaxQuantity INT,
    Price DECIMAL(10,2),
    IsTaxable BIT NOT NULL DEFAULT 1,
    IsActive BIT NOT NULL DEFAULT 1,
    FOREIGN KEY (VenueID) REFERENCES Venues(VenueID),
    FOREIGN KEY (CategoryID) REFERENCES Categories(CategoryID),
    FOREIGN KEY (ParentProductID) REFERENCES Products(ProductID)
);

-- 5. EventProducts
CREATE TABLE EventProducts (
    EventProductID INT PRIMARY KEY IDENTITY,
    EventID INT,
    ProductID INT,
    IsActive BIT NOT NULL DEFAULT 1,
    FOREIGN KEY (EventID) REFERENCES Events(EventID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);

-- 6. Orders
CREATE TABLE Orders (
    OrderID INT PRIMARY KEY IDENTITY,
    OrderDate DATETIME NOT NULL DEFAULT GETDATE(),
    CustomerName VARCHAR(255) NOT NULL,
    CustomerEmail VARCHAR(255) NOT NULL,
    ClientID INT NOT NULL,
    CompanyName VARCHAR(255),
    BoothNumber INT,
    BoothDescription VARCHAR(255),
    BoothDiagram VARCHAR(500),
    OnsiteContactName VARCHAR(255),
    OnsiteContactEmail VARCHAR(255),
    OnsiteContactPhoneDomestic VARCHAR(50),
    OnsiteContactPhoneInternational VARCHAR(50),
    TaxExempt VARCHAR(500),
    OrderPDF VARCHAR(500),
    IsAccepted BIT NOT NULL DEFAULT 0
);

-- 7. OrderItems
CREATE TABLE OrderItems (
    OrderItemID INT PRIMARY KEY IDENTITY,
    OrderID INT,
    ProductID INT,
    Quantity INT NOT NULL,
    UnitPrice DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);

-- 8. ContactInfo
CREATE TABLE ContactInfo (
    ContactID INT PRIMARY KEY IDENTITY,
    Name VARCHAR(255) NOT NULL,
    Title VARCHAR(100),
    Email VARCHAR(255),
    Phone VARCHAR(50),
    Department VARCHAR(20) NOT NULL,
    IsActive BIT NOT NULL DEFAULT 1
);

-- 9. VenueContact
CREATE TABLE VenueContact (
    VenueContactID INT PRIMARY KEY IDENTITY,
    VenueID INT,
    ContactID INT,
    FOREIGN KEY (VenueID) REFERENCES Venues(VenueID),
    FOREIGN KEY (ContactID) REFERENCES ContactInfo(ContactID)
);
