-- CreateTable
CREATE TABLE "Menu" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "road" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "facebook" TEXT NOT NULL,
    "tripadvisor" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "foodDetailsGreek" TEXT NOT NULL,
    "foodDetailsEnglish" TEXT NOT NULL,
    "foodInfosGreek" TEXT NOT NULL,
    "foodInfosEnglish" TEXT NOT NULL,
    "restaurantInfosGreek" TEXT NOT NULL,
    "restaurantInfosEnglish" TEXT NOT NULL,
    "footnote" TEXT NOT NULL,

    CONSTRAINT "Menu_pkey" PRIMARY KEY ("id")
);
