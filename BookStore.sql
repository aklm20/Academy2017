CREATE DATABASE BookStore;
GO
Use BookStore;
CREATE TABLE Category(
CategoryID int primary key identity(1,1) NOT NULL,
CategoryName varchar(50),
CategoryDescription varchar(MAX),
CategoryActive bit);

CREATE TABLE Product(
ProductID int primary key identity(1,1) NOT NULL,
ProductName varchar(50),
ProductDescription varchar(MAX),
ProductModel varchar(50),
ProductPrice decimal(18,2),
ProductKeywords varchar(50),
CategoryID int,
ProductActive bit);

CREATE TABLE ProductImage(
ProductImageID int primary key identity(1,1) NOT NULL,
ImageDescription varchar(MAX),
ImageURL varchar(MAX),
ProductID int,
ImageActive bit);

ALTER TABLE Product   
ADD CONSTRAINT FK_Product_Category FOREIGN KEY (CategoryID)     
    REFERENCES Category (CategoryID);

ALTER TABLE ProductImage   
ADD CONSTRAINT FK_ProductImage_Product FOREIGN KEY (ProductID)     
    REFERENCES Product (ProductID);

USE BookStore;
ALTER TABLE Category
ADD CategoryCreateDateTime datetime,
CategoryUpdateDateTime datetime;

ALTER TABLE Product
ADD ProductCreateDateTime datetime,
ProductUpdateDateTime datetime;

ALTER TABLE ProductImage
ADD ImageCreateDateTime datetime,
ImageUpdateDateTime datetime;