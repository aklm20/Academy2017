Create database BookStore;
GO
Use BookStore;
Create Table Category(
CategoryID int primary key identity not null,
CategoryName varchar(50),
CategoryDescription varchar(max),
CategoryActive bit);

Create Table Product(
ProductID int primary key identity not null,
ProductName varchar(50),
ProductDescription varchar(max),
ProductModel varchar(50),
ProductPrice decimal(18,2),
ProductKeywords varchar(50),
CategoryID int,
ProductActive bit);

Create Table ProductImages(
ProductImageID int primary key identity not null,
ImageDescription varchar(max),
ImageURL varchar(max),
ProductID int,
ImageActive bit);

ALTER TABLE Product   
ADD CONSTRAINT FK_Product_Category FOREIGN KEY (CategoryID)     
    REFERENCES Category (CategoryID);

ALTER TABLE ProductImages    
ADD CONSTRAINT FK_ProductImages_Product FOREIGN KEY (ProductID)     
    REFERENCES Product (ProductID);