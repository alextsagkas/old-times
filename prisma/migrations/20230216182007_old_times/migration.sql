-- CreateTable
CREATE TABLE "MenuCategory" (
    "id" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "fresh" INTEGER NOT NULL,
    "position" SERIAL NOT NULL,

    CONSTRAINT "MenuCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MenuItem" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "subCategory" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "fresh" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "menuCategoryId" TEXT NOT NULL,

    CONSTRAINT "MenuItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MenuSubItem" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "fresh" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "menuItemId" TEXT NOT NULL,

    CONSTRAINT "MenuSubItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MenuCategory_category_key" ON "MenuCategory"("category");

-- CreateIndex
CREATE UNIQUE INDEX "MenuCategory_position_key" ON "MenuCategory"("position");

-- AddForeignKey
ALTER TABLE "MenuItem" ADD CONSTRAINT "MenuItem_menuCategoryId_fkey" FOREIGN KEY ("menuCategoryId") REFERENCES "MenuCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MenuSubItem" ADD CONSTRAINT "MenuSubItem_menuItemId_fkey" FOREIGN KEY ("menuItemId") REFERENCES "MenuItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
