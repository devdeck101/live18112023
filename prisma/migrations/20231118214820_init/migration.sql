-- CreateTable
CREATE TABLE "Newsletter" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "optOut" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Newsletter_pkey" PRIMARY KEY ("id")
);
